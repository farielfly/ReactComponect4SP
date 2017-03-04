import React from 'react';
import Table from './Table.jsx';
import Row from './Row.jsx';
import Column from './Column.jsx';
import HeaderCell from './HeaderCell.jsx';
import Cell from './Cell.jsx';
import TablePagination from './TablePagination.jsx';
import fakeObjectDataListStore from './fakeObjectDataListStore.js';

const AvatarCell = ({ rowData, dataKey }) => (
    <Cell>
       <img src={rowData[dataKey]}></img>       
    </Cell>
);

function formatLengthMenu(lengthMenu) {
    return (
        <div className="table-length">
            <span> Page </span>
            {lengthMenu}
            <span> Row </span>
        </div>
    );
}

function formatInfo(total, activePage) {
    return (
        <span>Total <i>{total}</i></span>
    );
}

const PaginationTable = React.createClass({
    getInitialState(){        
        return {
            displayLength: 100,
            data: fakeObjectDataListStore(100),            
        }
    },
    render(){        
        const {data} = this.state;
        return (
            <div>
                <Table height={400} data={data} rowHeight={64} headerHeight={36}>
                    <Column width={200} fixed>
                        <HeaderCell>Name</HeaderCell>
                        <AvatarCell dataKey="avartar" />
                    </Column>    

                    <Column width={200}>
                        <HeaderCell>Email</HeaderCell>
                        <Cell dataKey="email" />
                    </Column>           
                    
                    <Column width={200}>
                        <HeaderCell>Division</HeaderCell>
                        <Cell dataKey="division" />
                    </Column>     

                    <Column width={200}>
                        <HeaderCell>Department</HeaderCell>
                        <Cell dataKey="department" />
                    </Column>   

                    <Column width={200}>
                        <HeaderCell>Disignation</HeaderCell>
                        <Cell dataKey="disignation" />
                    </Column>   

                    <Column width={150}>
                        <HeaderCell>Office Contact No.</HeaderCell>
                        <Cell dataKey="officeNumber" />
                    </Column>                               

                    <Column width={150}>
                        <HeaderCell>Mobile No.</HeaderCell>
                        <Cell dataKey="mobileNumber" />
                    </Column> 

                    <Column width={100}>
                        <HeaderCell>Other</HeaderCell>
                        <Cell dataKey="other" />
                    </Column>   

                    <Column width={100}>
                        <HeaderCell>Other</HeaderCell>
                        <Cell dataKey="other" />
                    </Column>    

                    <Column width={100}>
                        <HeaderCell>Other</HeaderCell>
                        <Cell dataKey="other" />
                    </Column>                        
                </Table>

                <TablePagination
                    formatLengthMenu={formatLengthMenu}
                    formatInfo={formatInfo}
                    displayLength={100}
                    total={500}
                    onChangePage={this.handleChangePage}
                    onChangeLength={this.handleChangeLength}
                    />
            </div>    
        )
    }
});

export default PaginationTable;