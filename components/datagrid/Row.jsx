import React, {PropTypes} from 'react';
import { assign } from 'lodash';
import classNames from 'classnames';

const Row = React.createClass({
    PropTypes:{
        width: PropTypes.number,
        height: PropTypes.number,
        headerHeight: PropTypes.number,
        top: PropTypes.number,
        style: PropTypes.object,
        isHeaderRow: PropTypes.bool
    },
    getDefaultProps(){
        return {
            height: 36,
            headerHeight: 36,
            isHeaderRow: false
        }
    },
    render(){
        const {
            children,
            className,
            width,
            height,
            top,
            style,
            isHeaderRow,
            headerHeight,        
        } = this.props;   
             
        let classes = classNames(
            'acs-table-row',
            isHeaderRow ? 'acs-table-row-header' : '',
            className);

        let styles = assign({
            minWidth: width,
            height: isHeaderRow ? headerHeight : height,
            top
        }, style);

        return(
            <div className={classes} style={styles}>{children}</div>
        )
    }
})

export default Row;