import React, {PropTypes} from 'react';
import classNames from 'classnames';
import { assign } from 'lodash';

const LAYER_WIDTH = 30;
const Cell = React.createClass({
    propTypes: {
        dataKey: PropTypes.string,

        align: PropTypes.oneOf(['left', 'center', 'right']),
        className: PropTypes.string,
        isHeaderCell: PropTypes.bool,

        width: PropTypes.number,
        height: PropTypes.number,
        left: PropTypes.number,
        headerHeight: PropTypes.number,

        rowData: PropTypes.object,
        rowIndex: PropTypes.number,

        cellData: PropTypes.any,
        cellRenderer: PropTypes.func,

        fixed: PropTypes.bool,

        style: PropTypes.object,
        firstColumn: PropTypes.bool,
        lastColumn: PropTypes.bool,
        hasChildren: PropTypes.bool,

        onTreeToggle: PropTypes.func,
    },
    getDefaultProps() {
        return {
            align: 'left',
            headerHeight: 36,
            height: 36,
        };
    },
    renderCell(content) {

        let {
            width,
            left,
            height,
            style,
            className,
            firstColumn,
            lastColumn,
            isHeaderCell,
            headerHeight,
            layer,
            onTreeToggle,
            hasChildren,
            rowIndex,
            rowKey,
            align,
            sortable
        } = this.props;


        const classes = classNames(
            "acs-table-cell",
            className, {
                'sortable':sortable && isHeaderCell,
                'first': firstColumn,
                'last': lastColumn
            });
        const layerWidth = layer * LAYER_WIDTH;

        width = !isHeaderCell && firstColumn ? width - layerWidth : width;

        const styles = assign({
            height: isHeaderCell ? headerHeight : height,
            zIndex: layer,
            width: width,
            left: !isHeaderCell && firstColumn ? left + layerWidth : left,
        }, style);


        let contentStyles = {
            width: width,
            textAlign: align
        };

        if (sortable) {
            contentStyles.paddingRight = 28;
        }

        const expandIcon = hasChildren && firstColumn ? (
            <i className="expand-icon fa"
                onClick={ event => onTreeToggle(rowKey, rowIndex, event) }>
            </i>
        ) : null;

        content = (
            <div className={'act-table-cell-content' } style={ contentStyles }
                >
                {expandIcon}
                {content}
            </div>
        );

        return (
            <div className={classes} style={styles}>
                <div className={'act-table-cell-wrap1' }>
                    <div className={'act-table-cell-wrap2' }>
                        <div className={'act-table-cell-wrap3' }>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    render() {
        const {
            children,
            rowData,
            isHeaderCell,
            dataKey,
            fixed
        } = this.props;

        if (isHeaderCell) {
            return this.renderCell(children);
        }

        return this.renderCell(children || rowData[dataKey]);
    }

});

export default Cell;