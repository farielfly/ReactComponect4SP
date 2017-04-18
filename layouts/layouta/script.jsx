import React from 'react';
import { render } from 'react-dom';

import PaginationTable from '../../components/gridtable/table.jsx';


function staffDirectoryRender(config){

    let param={},data=[],canTurning = false;
    let tableColumn=[{name:"Photo",width:5},{name:"Name",width:20},{name:"Division & Department",width:33},{name:"Designation",width:10},{name:"Email Me",width:17},{name:"Contact Me",width:15}];

    function renderUI(data) {
        if (document.getElementById('staff')) {
            render(
            <PaginationTable data={data} column={tableColumn}></PaginationTable>,
            document.getElementById('staff')
            );
            setStatus();
         }
    }
    function integration(data){
        var newData = [];
        data.map((item)=>{
            var dividep = (item.Division ===''||item.Department==='')?'':' / ';
            var telmob = (item.ContactMe ===''||item.MyMobile==='')?'':'/';
            newData.push([
                {data:{photo:item.Photo,url:item.MySite},type:'photo'},
                {data:{email:item.Email,name: item.Name,id:item.ItemId,url:item.MySite},type:'name'},
                {data:item.Division + dividep + item.Department,type:'text'},
                {data:item.Designation,type:'text'},
                {data:item.Email,type:'text'},
                {data:item.ContactMe + telmob + item.MyMobile,type:'text'}
            ])
        })
        return newData;
    }

    function loadData(param) {
        var letter = config.firstLetter==='#'?'':config.firstLetter;
        var furl = config.url +"&info="+config.searchInfo +"&firstLetter="+letter+"&divisionName="+config.division+"&departmentName="+config.department+"&count="+config.count+"&pageNumber="+config.pageNumber;
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


function setStatus(){
    let imgs = document.getElementsByClassName('ms-spimn-img');
    for(var i=imgs.length-1;i>-1;i--){
        imgs[i].setAttribute('sip',imgs[i].getAttribute('data-sip'));
    }
    ProcessImn();
}