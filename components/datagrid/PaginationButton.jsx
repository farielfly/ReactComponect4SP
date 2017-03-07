import classNames from 'classnames';
import React from 'react';

module.exports = function createChainedFunction(...funcs) {
    debugger;
    return funcs
        .filter(f => f !== null &&  typeof f !== 'undefined')
        .reduce((acc, f) => {
            if (typeof f !== 'function') {
                throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
            }

            if (acc === null) {
                return f;
            }

            return function chainedFunction(...args) {
                acc.apply(this, args);
                f.apply(this, args);
            };
        }, null);
}

const PaginationButton = React.createClass({

    propTypes: {
        className: React.PropTypes.string,
        eventKey: React.PropTypes.any,
        onSelect: React.PropTypes.func,
        disabled: React.PropTypes.bool,
        active: React.PropTypes.bool,
        onClick: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            active: false,
            disabled: false
        };
    },

    handleClick(event) {
        if (this.props.disabled) {
            return;
        }

        if (this.props.onSelect) {
            this.props.onSelect(this.props.eventKey, event);
        }
    },

    render() {
        const {
            active,
            disabled,
            onClick,
            componentClass: Component,
            className,
            style,
            onSelect
        } = this.props;


        return (
            <li
                className={classNames(className, {active , disabled }) }
                style={style}
                >
                <Component
                    {...this.props}
                    disabled={disabled}
                    onClick={createChainedFunction(onClick, this.handleClick) }
                    />
            </li>
        );
    }
});

export default PaginationButton;