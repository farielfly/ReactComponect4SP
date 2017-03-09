import React from 'react';
import { render } from 'react-dom';

import PaginationTable from '../../components/gridtable/table.jsx';


function staffDirectoryRender(config){

    let param={},data=[],canTurning = false;
    let tableColumn=[{name:"Photo",width:5},{name:"Name",width:13},{name:"Division & Department",width:35},{name:"Email Me",width:17},{name:"Designation",width:10},{name:"Contect Me",width:20}];

    function renderUI(data) {
        if (document.getElementById('staff')) {
            render(
            <PaginationTable data={data} column={tableColumn}></PaginationTable>,
            document.getElementById('staff')
            )
         }
    }
    function integration(data){
        var newData = [];
        data.map((item)=>{
            newData.push([
                {data:item.Photo,type:'photo'},
                {data:{email:item.Email,name: item.Name,id:item.ItemId},type:'name'},
                {data:item.Division +";"+item.Department,type:'text'},
                {data:item.Email,type:'text'},
                {data:item.Designation,type:'text'},
                {data:item.ContactMe+"/"+item.MyMobile,type:'text'}
            ])
        })
        return newData;
    }

    function loadData(param) {
        var furl = config.url +"&info="+config.searchInfo +"&firstLetter="+config.firstLetter+"&divisionName="+config.division+"&departmentName="+config.department+"&count="+config.count+"&pageNumber="+config.pageNumber;
        $.ajax({
            type: "GET",
            url: furl,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            success: function (dataInput) {
                renderUI(integration(dataInput.Users));
               canTurning = dataInput.IsLastPage;
            },
            error: function (data) {
            }
        });
    }

    if (config && !config.debug) {
        loadData(param);
        return canTurning;
    }
    else {
        renderUI(data);
    }
}
global.staffDirectoryRender = staffDirectoryRender;
