import classNames from 'classnames';
import React from 'react';
import PaginationButton from './PaginationButton.jsx';

const Pagination = React.createClass({
    propTypes: {
        activePage: React.PropTypes.number,
        pages: React.PropTypes.number,
        maxButtons: React.PropTypes.number,
        boundaryLinks: React.PropTypes.bool,
        ellipsis: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.node
        ]),
        first: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.node
        ]),
        last: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.node
        ]),
        prev: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.node
        ]),
        next: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.node
        ]),
        onSelect: React.PropTypes.func,
        classPrefix: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            activePage: 1,
            pages: 1,
            maxButtons: 0,
            first: false,
            last: false,
            prev: false,
            next: false,
            ellipsis: false,
            boundaryLinks: false,
            classPrefix: 'pagination'
        };
    },

    renderPageButtons(props) {

        let pageButtons = [];
        let startPage, endPage, hasHiddenPagesAfter;
        let {
            maxButtons,
            activePage,
            pages,
            ellipsis,
            boundaryLinks
        } = props;

        if (maxButtons) {
            let hiddenPagesBefore = activePage - parseInt(maxButtons / 2, 10);
            startPage = hiddenPagesBefore > 1 ? hiddenPagesBefore : 1;
            hasHiddenPagesAfter = startPage + maxButtons <= pages;

            if (!hasHiddenPagesAfter) {
                endPage = pages;
                startPage = pages - maxButtons + 1;
                if (startPage < 1) {
                    startPage = 1;
                }
            } else {
                endPage = startPage + maxButtons - 1;
            }
        } else {
            startPage = 1;
            endPage = pages;
        }

        for (let pagenumber = startPage; pagenumber <= endPage; pagenumber++) {
            pageButtons.push(this.renderItem({
                key: pagenumber,
                eventKey: pagenumber,
                active: pagenumber === activePage,
                children: pagenumber
            }));
        }

        if (boundaryLinks && ellipsis && startPage !== 1) {

            pageButtons.unshift(this.renderItem({
                key: 'ellipsisFirst',
                disabled: true,
                children: (
                    <span aria-label="More">
                        {ellipsis === true ? '\u2026' : ellipsis}
                    </span>
                )
            }));

            pageButtons.unshift(this.renderItem({
                key: 1,
                eventKey: 1,
                children: 1
            }));
        }

        if (maxButtons && hasHiddenPagesAfter && ellipsis) {
            pageButtons.push(this.renderItem({
                key: 'ellipsis',
                disabled: true,
                children: (
                    <span aria-label="More">
                        {ellipsis === true ? '\u2026' : ellipsis}
                    </span>
                )
            }));

            if (boundaryLinks && endPage !== pages) {
                pageButtons.push(this.renderItem({
                    key: pages,
                    eventKey: pages,
                    disabled: false,
                    children: pages
                }));
            }
        }

        return pageButtons;
    },

    renderPrev(props) {

        const { pages, activePage, prev } = props;

        if (!this.props.prev) {
            return null;
        }

        return this.renderItem({
            key: 'prev',
            eventKey: activePage - 1,
            disabled: activePage === 1,
            children: (
                <span aria-label="Previous">
                    {prev === true ? '\u2039' : prev}
                </span>
            )
        });

    },

    renderNext(props) {
        const { pages, activePage, next } = props;

        if (!this.props.next) {
            return null;
        }

        return this.renderItem({
            key: 'next',
            eventKey: activePage + 1,
            disabled: activePage >= pages,
            children: (
                <span aria-label="Next">
                    {next === true ? '\u203a' : next}
                </span>
            )
        });
    },

    renderFirst(props) {
        const { pages, activePage, first } = props;

        if (!first) {
            return null;
        }

        return this.renderItem({
            key: 'first',
            eventKey: 1,
            disabled: activePage === 1,
            children: (
                <span aria-label="First">
                    {first === true ? '\u00ab' : first}
                </span>
            )
        });
    },

    renderLast(props) {
        const { pages, activePage, last } = props;

        if (!last) {
            return null;
        }

        return this.renderItem({
            key: 'last',
            eventKey: pages,
            disabled: activePage >= pages,
            children: (
                <span aria-label="Last">
                    {last === true ? '\u00bb' : last}
                </span>
            )
        });
    },
    renderItem(props) {
        const {
            children,
            key,
            eventKey,
            active,
            disabled
        } = props;
 
        let onSelect; 
        if (!disabled) {
            onSelect = this.props.onSelect;
        }
        const itemProps = {key,eventKey,active,disabled,onSelect};
        return (
            <PaginationButton
                {...itemProps}
                componentClass={this.props.buttonComponentClass}
                >
                {children}
            </PaginationButton>
        );
    },
    render() {

        const clesses = classNames({
            'pagination': true
        },  this.props.className);

        return (
            <ul
                className = {clesses}
                >
                {this.renderFirst(this.props) }
                {this.renderPrev(this.props) }
                {this.renderPageButtons(this.props) }
                {this.renderNext(this.props) }
                {this.renderLast(this.props) }
            </ul>
        );
    }
});

export default Pagination;