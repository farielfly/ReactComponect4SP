import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Pagination from './Pagination.jsx'

const TablePagination = React.createClass({
    propTypes: {
        lengthMenu: PropTypes.arrayOf(React.PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.oneOfType([
                React.PropTypes.string,
                React.PropTypes.number
            ])
        })),
        showLengthMenu: PropTypes.bool,
        showInfo: PropTypes.bool,
        total: PropTypes.number.isRequired,
        displayLength: PropTypes.number,
        formatLengthMenu: PropTypes.func,
        formatInfo: PropTypes.func,
        onChangePage: PropTypes.func,
        onChangeLength: PropTypes.func,
        prev: PropTypes.bool,
        next: PropTypes.bool,
        first: PropTypes.bool,
        last: PropTypes.bool,
        maxButtons: PropTypes.number,
        activePage: PropTypes.number
    },
    getDefaultProps() {
        return {
            showLengthMenu: true,
            showInfo: true,
            lengthMenu: [
                {
                    value: 30,
                    text: 30,
                }, {
                    value: 50,
                    text: 50,
                }, {
                    value: 100,
                    text: 100,
                }
            ],
            displayLength: 30,
            prev: true,
            next: true,
            first: true,
            last: true,
            maxButtons: 5
        };
    },
    getInitialState() {
        const { displayLength, activePage  } = this.props;
        return {
            displayLength,
            activePage: activePage || 1
        };
    },
    componentWillReceiveProps(nextProps) {
        const { displayLength, activePage  } = this.props;
        if (displayLength !== nextProps.displayLength || activePage !== nextProps.activePage) {
            this.setState({
                displayLength: nextProps.displayLength,
                activePage: nextProps.activePage
            });
        }
    },
    handleChangeLength(eventKey) {

        const {onChangeLength} = this.props;
        this.setState({
            displayLength: eventKey
        });
        onChangeLength && onChangeLength(eventKey);
    },
    handleChangePage(eventKey) {
        const {onChangePage} = this.props;
        this.setState({
            activePage: eventKey
        });
        onChangePage && onChangePage(eventKey);
    },
    renderLengthMenu() {

        const {
            lengthMenu,
            formatLengthMenu,
            showLengthMenu,
        } = this.props;

        const { displayLength } = this.state;

        if (!showLengthMenu) {
            return null;
        }

        const items = lengthMenu.map((item, index) => {
            return (
                <div key={index} eventKey={item.value} >{item.text}</div>
            );
        });

        return (
            <div className={'act-table-length-menu'}>
                {
                    formatLengthMenu(
                        
                    )
                }
            </div>
        );
    },

    renderInfo() {

        const {formatInfo, total, showInfo} = this.props;

        if (!showInfo) {
            return null;
        }

        const { activePage } = this.state;
        return (
            <div className={'act-table-page-info'}>
                {formatInfo(total, activePage)}
            </div>
        );
    },
    render() {
        const { total, prev, next, first, last, maxButtons, className} = this.props;
        const { displayLength, activePage } = this.state;
        const pages = parseInt(total / displayLength) + (total % displayLength ? 1 : 0);
        const classes = classNames('act-table-pagination-wrapper', className);

        return (

            <div className={classes}>
                {this.renderLengthMenu()}
                {this.renderInfo()}

                <div className={classNames('act-table-pagination')} >
                 
                </div>

            </div>
        );
    }
});

export default TablePagination;