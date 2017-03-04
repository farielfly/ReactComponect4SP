import React from 'react';
import { render } from 'react-dom';


import PaginationTable from '../../components/datagrid/PaginationTable.jsx';

const App = React.createClass({
    render(){
        return (
            <div><PaginationTable /></div>
        )    
    }
});

render(<App/>,
    document.getElementById('app')
);