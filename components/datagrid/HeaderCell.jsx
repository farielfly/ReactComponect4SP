import React, {PropTypes} from 'react';
import Cell from './Cell.jsx';

const HeaderCell = React.createClass({
    propTypes: {
        sortable: PropTypes.bool,
        resizable: PropTypes.bool,
        onColumnResizeEnd: PropTypes.func,
        onColumnResize: PropTypes.func,
        onColumnResizeMove: PropTypes.func,
        onSortColumn: PropTypes.func,
        headerHeight: PropTypes.number
    },
    getInitialState() {
        return {
            columnWidth: this.props.width
        };
    },
    renderSortColumn() {
        const { left, headerHeight, sortable, sortColumn, sortType, dataKey } = this.props;
        const { columnWidth } = this.state;

        const styles = {
            left: columnWidth + left - 16,
            top: headerHeight / 2 - 8
        };

        if (sortable) {

            const icon = (<i className={sortColumn === dataKey ? `fa fa-sort-${sortType}` : 'fa fa-sort'}></i>);
            return (
                <div style={styles} className={'sortable'}>
                    {icon}
                </div>
            );
        }

        return null;
    },
    handleClick() {
        const { sortable, dataKey, sortType, onSortColumn } = this.props;
        sortable && onSortColumn && onSortColumn(dataKey, sortType === 'asc' ? 'desc' : 'asc');
    },
    render() {

        const classes ='acs-table-cell-header';
        const {sortable} = this.props;

        return (
            <div className={ classes } >
                <Cell isHeaderCell={true} {...this.props} onClick={this.handleClick}></Cell>
                { this.renderSortColumn() }
            </div>
        );
    }

});

export default HeaderCell;