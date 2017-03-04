import React, {PropTypes} from 'react';
import Row from './Row.jsx';
import CellGroup from './CellGroup.jsx';
import {assign} from 'lodash';
import { findDOMNode } from 'react-dom';
import { on, scrollLeft, scrollTop, addStyle, addClass, removeClass, toggleClass} from 'dom-lib';

const Table = React.createClass({
    propTypes: {
        width: PropTypes.number,
        data: PropTypes.array.isRequired,
        height: PropTypes.number,
        rowHeight: PropTypes.number,
        headerHeight: PropTypes.number,
        scrollLeft: PropTypes.number,
        scrollTop: PropTypes.number,
        locale: PropTypes.object,
        sortColumn: PropTypes.string,
        sortType: PropTypes.oneOf(['desc', 'asc']),
        onSortColumn: PropTypes.func
    },
    getDefaultProps(){
        return {
            height: 200,
            rowHeight: 36,
            sortType: 'asc',
            locale: {
                emptyMessage: 'No data found'
            }
        }
    },
    getInitialState(){        
        return {
            columnWidth: 0,
            dataKey: 0,
            scrollLeft: 0,
            scrollTop: 0,  
            resizeColumnFixed: false          
        }
    },
    getFixedCellGroups(){
        return findDOMNode(this.refs.table).querySelectorAll('.acs-table-cell-group.fixed')
    },
    handleBodyScroll() {

        let {tableBody, tableHeader} = this.refs;
        let tableHeaderDom = findDOMNode(tableHeader);
        let groups = this.getFixedCellGroups();
        let handelClass = { addClass, removeClass };

        let left = scrollLeft(tableBody);
        let top = scrollTop(tableBody);

        this.scrollLeft = left;

        Array.from(groups).map((group) => {
            addStyle(group, { left: left + 'px' });
            let toggle = left > 1 ? 'addClass' : 'removeClass';
            handelClass[toggle](group, 'shadow');
        });

        addStyle(tableHeaderDom, { left: (-left) + 'px' });

        let toggle = top > 1 ? 'addClass' : 'removeClass';
        handelClass[toggle](tableHeaderDom, 'shadow');
    },
     _onColumnResizeEnd(columnWidth, cursorDelta, dataKey, index) {
        this.setState({
            isColumnResizing: false,
            mouseAreaLeft: -1,
            [`${dataKey}_${index}_width`]: columnWidth
        });
    },
    _onColumnResize(width, left, event) {
        this.setState({
            isColumnResizing: true
        });
    },
    _onColumnResizeMove(width, left, fixed) {

        this.setState({
            resizeColumnFixed: fixed,
            mouseAreaLeft: width + left
        });
    },
    render(){
        const {
            children,
            className,
            width = 0,
            height,
            style,
            rowHeight,
            classPrefix,
            id
        } = this.props;

        let { headerCells, bodyCells, allColumnsWidth, isFixedColumn} = this.getCells();
        let rowWidth = allColumnsWidth > width ? allColumnsWidth :width;

        this.isFixedColumn = isFixedColumn;

        const classes = "acs-table";      
        const styles = assign({ width: width || 'auto', height }, style);

        return (
            <div className={classes} style={styles} ref='table' id={id}>
                {this.renderTableHeader(headerCells, rowWidth)}
                {this.renderTableBody(bodyCells,rowWidth,allColumnsWidth)}
                {this.renderMouseArea()}
            </div>
        )
    },
    getCells(){
        let left = 0;
        let isFixedColumn = false;
        const headerCells = [];
        const bodyCells = [];
        const columns = this.props.children;
        const {dataKey, columnWidth} = this.state;
        const {sortColumn, sortType, onSortColumn} = this.props;
        
        React.Children.map(columns, (column, index)=>{
            let columnChildren = column.props.children;
            let {width,fixed,align,sortable,resizable} = column.props;

            if(columnChildren.length !== 2){
                throw new Error(`Component <HeaderCell> and <Cell> is required, column index: ${index} `);
            }

            if(fixed){
                isFixedColumn = true;
            }

            width = this.state[`${columnChildren[1].props.dataKey}_${index}_width`] || width;

            let cellProps = {
                width, fixed, left, align, resizable, sortable, index,
                height: this.props.rowHeight,
                headerHeight: this.props.headerHeight,
                firstColumn: (index == 0),
                lastColumn: (index === column.length - 1),
                key: index
            };
            let headerCellsProps = {
                headerHeight: this.props.headerHeigth || this.props.rowHeight,
                dataKey: columnChildren[1].props.dataKey,
                sortColumn, sortType, onSortColumn
            };

            if(resizable){
                headerCellsProps.onColumnResizeEnd = this._onColumnResizeEnd;
                headerCellsProps.onColumnResize = this._onColumnResize;
                headerCellsProps.onColumnResizeMove = this._onColumnResizeMove;
            }
            headerCells.push(this.cloneCell(columnChildren[0], assign(cellProps, headerCellsProps)));
            bodyCells.push(this.cloneCell(columnChildren[1], cellProps));

            left += width;
        })
        return{
            headerCells,
            bodyCells,
            isFixedColumn,
            allColumnsWidth: left
        }
    },
    cloneCell(Cell, props) {
        return React.cloneElement(Cell, props, Cell.props.children);
    },
    renderTableHeader(headerCells, rowWidth){
        const {rowHeight, headerHeight} = this.props;
        const row = this.renderRow({
            ref: 'tableHeader',
            width: 30,
            height: rowHeight,
            headerHeight: headerHeight,
            isHeaderRow: true,
            top: 0
        }, headerCells);

        return (
            <div className={'acs-table-header-row-wrapper'}>
            {row}
            </div>
        )
    },
    renderTableBody(bodyCells, rowWidth, allColumnsWidth) {

        const {headerHeight, rowHeight, height, data, isTree} = this.props;
        const bodyStyles = {
            top: isTree ? 0 : headerHeight || rowHeight,
            height: height - (headerHeight || rowHeight)
        };

        let top = 0;    //Row position
        let layer = 0;  //Tree layer
        let rows = (data.length > 0) ? data.map((rowData, index) => {
            let row = this.randerRowData(bodyCells, rowData, {
                index, top, rowWidth, rowHeight, layer
            });

            !isTree && (top += rowHeight);
            return row;
        }) : (
                <div className={'acs-table-body-info'}>
                    {this.props.locale.emptyMessage}
                </div>
            );

        return (
            <div ref="tableBody"
                className={'acs-table-body-row-wrapper'}
                style={bodyStyles}>
                {rows}
            </div>
        );
    },
    randerRowData(bodyCells, rowData, props) {        
        const { onRowClick } = this.props;
        const hasChildren = rowData.children && Array.isArray(rowData.children) && rowData.children.length > 0;
        const rowKey = '_' + (Math.random() * 1E18).toString(36).slice(0, 5).toUpperCase();
        const row = this.renderRow({
            key: props.index,
            rowIndex: props.index,
            width: props.rowWidth,
            height: props.rowHeight,
            top: props.top,
            onClick: () => {
                onRowClick && onRowClick(rowData);
            },
            rowData
        }, bodyCells.map((cell, key) => React.cloneElement(cell, {
            key: key,
            layer: props.layer,
            hasChildren: hasChildren,
            rowIndex: props.index,
            onTreeToggle: this._onTreeToggle,
            rowKey,
            rowData
        }, cell.props.children)));


        //insert children
        if (hasChildren) {
            props.layer++;

            let childrenClasses = classNames('acs-table-row-children', {
                open: this.props.expand
            });

            let childrenStyles = {
                marginLeft: 30
            };
            return (
                <div className={childrenClasses}
                    data-layer={props.layer}
                    ref={`children_${rowKey}_${props.index}`}
                    key={props.index} >
                    {row}
                    <div className="children" >
                        {rowData.children.map((child, index) => this.randerRowData(bodyCells, child, Object.assign({}, props, { index })))}
                    </div>
                </div>
            );
        }
        return row;
    },
    renderRow(props, cells){
         if (this.isFixedColumn) {

            let fixedCells = cells.filter(function (cell) {
                return cell.props.fixed;
            });

            let otherCells = cells.filter(function (cell) {
                return !cell.props.fixed;
            });

            let fixedCellGroupWidth = 0;

            fixedCells.map((item) => {
                fixedCellGroupWidth += item.props.width;
            });

            return (
                <Row {...props}>
                    <CellGroup
                        fixed
                        height={props.isHeaderRow ? props.headerHeight : props.height}
                        width={fixedCellGroupWidth}>
                        {fixedCells}
                    </CellGroup>
                    <CellGroup>{otherCells}</CellGroup>
                </Row>
            );

        }

        return(
            <Row {...props}>
                {cells}
            </Row>
        );
    },
    renderMouseArea() {
        const { height } = this.props;
        const scrollLeft = this.scrollLeft || 0;
        const {mouseAreaLeft, resizeColumnFixed} = this.state;

        const styles = {
            height,
            left: (resizeColumnFixed ? mouseAreaLeft : mouseAreaLeft - scrollLeft)
        };

        return (
            <div ref="mouseArea" className={'acs-table-mouse-area'} style={styles}></div>
        );
    },
    componentDidMount() {
        this._onBodyScrollListener = on(this.refs.tableBody, 'scroll', this.handleBodyScroll);
    },
    componentDidUpdate: function (nextProps) {
        this.handleBodyScroll();
    },
    componentWillUnmount() {
        if (this._onBodyScrollListener) {
            this._onBodyScrollListener.off();
        }
    }
})

export default Table;
