import { render } from 'react-dom';
import PaginationFrame from '../../components/pagination/paginationFrame.jsx';
import LetterSearchFrame from '../../components/pagination/letterSearchFrame.jsx';
import TableListFrame from '../../components/table/table.jsx';
import StringCell from '../../components/table/stringCell.jsx';

import TableBulk from '../../components/table/tableBulk.jsx';
import ServiceItem from '../../components/table/serviceItem.jsx';
import LyncItem from '../../components/table/lyncHeadCell.jsx';
import DocumentItem from '../../components/table/documentItem.jsx';
import SiteItem from '../../components/table/siteItem.jsx';

import $ from 'jquery';

function serviceRequestTypeRender(config) {
    const serviceData=[
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData1'},{href:'',value:'itemData1'},{href:'',value:'itemData13'},{href:'',value:'itemData14'},{href:'',value:'itemData15'},{href:'',value:'itemData16'}]},
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData1'},{href:'',value:'itemData1'},{href:'',value:'itemData13'},{href:'',value:'itemData14'},{href:'',value:'itemData15'},{href:'',value:'itemData16'}]},
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData16'}]},
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData1'},{href:'',value:'itemData1'},{href:'',value:'itemData13'},{href:'',value:'itemData14'},{href:'',value:'itemData15'},{href:'',value:'itemData16'}]},
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData15'},{href:'',value:'itemData16'}]}
        ];

    let param = { };

    function renderUI(data) {
        let serviceType = data.map((item,index)=>{
            return <div className="acs-servicerequest-type" key={"servicetype"+index}>
                        <PaginationFrame hasTitle={true} hasSearch={false} config={{data:item.Items,pageSize:5,frameTitle:item.Title}} hasTurning={false}>
                            <TableBulk columnCount={2} listData={item.Items}>
                                <ServiceItem></ServiceItem>
                            </TableBulk>
                        </PaginationFrame>
                    </div>
        });

        if (document.getElementById(config.divId)) {
            render(
                <div>
                    {serviceType}
                </div>,
                document.getElementById(config.divId)
            );
        }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            cache:false,
            config: param,
            async: false,
            success: function (dataInput) {
                renderUI(dataInput);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    if (config && !config.debug) {
        loadData(param);
    }
    else {
        renderUI(serviceData);
    }
}
global.serviceRequestTypeRender = serviceRequestTypeRender;


function tableListRender(config){
     const data = [
         { 'RequestType': 'Projector Request1', 'RequestDate': '9/3/1021', 'Status': 'Open', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/10211' },
        { 'RequestType': 'Projector Request', 'RequestDate': '9/3/1021', 'Status': 'Pending', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/1021' },
        { 'RequestType': 'Projector Request', 'RequestDate': '9/3/1021', 'Status': 'Open', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/10421' },
        { 'RequestType': 'Projector Request', 'RequestDate': '9/3/1021', 'Status': 'Closed', 'ProcessedBy': 'Bill','ProcessedDate':'9/3/1021' },
        { 'RequestType': 'Projector Request', 'RequestDate': '9/3/1021', 'Status': 'Open', 'ProcessedBy': 'Bill','ProcessedDate':'9/5/1021' },
        { 'RequestType': 'Projector Request', 'RequestDate': '9/3/1021', 'Status': 'Open', 'ProcessedBy': 'Bill','ProcessedDate':'9/1/1021' }];

    const titleData =[{value:'Title',width:20},{value:'Request Date',width:20},{value:'Status',width:20},{value:'Processed By',width:20},{value:'Processed Date',width:20}];
    let param = {};

    function renderUI(data) {
        
        let titleArrary =data.Header.map((item,index)=>{
            return <StringCell itemData={null} key={"head"+index}></StringCell>
        })
        if (document.getElementById(config.divId)) {
            render(
                <PaginationFrame hasTitle={false} hasSearch={config.hasSearch} config={{data:data.Items,pageSize:config.pageSize,frameTitle:''}} hasTurning={config.hasPagination}>
                    <TableListFrame titleData={data.Header}  listData={data.Items}>
                        {titleArrary}
                    </TableListFrame>
                </PaginationFrame>,
                document.getElementById(config.divId)
            );
        }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            cache:false,
            config: param,
            async: false,
            success: function (dataInput) {
                renderUI(dataInput);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    if (config && !config.debug) {
        loadData(param);
    }
    else {
        renderUI(data);
    }
}
global.tableListRender = tableListRender;


function serviceLyncListRender(config) {
    const serviceData=[
        {Email:"test1",ItemId:1,Photo:'Ddd',Name:'Sdds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'ddds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'Fdd',Name:'Ddds',Department:'Acss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'ddds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},
        {Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'},{Email:"test1",ItemId:1,Photo:'ddd',Name:'Adds',Department:'ccss'}];

    let param = { };

    function renderUI(data) {
        if (document.getElementById(config.divId)) {
            render(
                <PaginationFrame hasLetterSearch={true} hasTitle={true} hasSearch={false} config={{data:serviceData,pageSize:6,frameTitle:"dfsfs"}} hasTurning={true}>
                    <TableBulk columnCount={2} listData={serviceData}>
                        <LyncItem itemData={null}></LyncItem>
                    </TableBulk>   
                </PaginationFrame>,
                document.getElementById(config.divId)
            );
            setStatus();
        }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            config: param,
            cache:false,
            async: false,
            success: function (dataInput) {
                renderUI(dataInput);
            },
            error: function (data) {

            }
        });
    }

    if (config && !config.debug) {
        loadData(param);
    }
    else {
        renderUI(serviceData);
    }
}
global.serviceLyncListRender = serviceLyncListRender;


function itemListRender(config) {
    const serviceData=[{Href:'http://www.baidu.com',Value:'itemData1'},{Href:'http://www.baidu.com',Value:'itemData1'},
    {Href:'http://www.baidu.com',Value:'itemData13'},{Href:'http://www.baidu.com',Value:'itemData14'},
    {Href:'http://www.baidu.com',Value:'itemData15'},{Href:'http://www.baidu.com',Value:'itemData16'}];

    let param = { };

    function renderUI(data) {
        let item = config.itemType === 'site'?<SiteItem></SiteItem>:<DocumentItem></DocumentItem>;
        if (document.getElementById(config.divId)) {
            render(
               <PaginationFrame hasTitle={true} hasSearch={false} config={{data:data,pageSize:5,frameTitle:config.Title}} hasTurning={true}>
                    <TableBulk columnCount={1} listData={data}>
                        {item}
                    </TableBulk>
                </PaginationFrame>,
                document.getElementById(config.divId)
            );
        }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            cache:false,
            config: param,
            async: false,
            success: function (dataInput) {
                renderUI(dataInput);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    if (config && !config.debug) {
        loadData(param);
    }
    else {
        renderUI(serviceData);
    }
}
global.itemListRender = itemListRender;

function setStatus(){
    let imgs = document.getElementsByClassName('ms-spimn-img');
    for(var i=imgs.length-1;i>-1;i--){
        imgs[i].setAttribute('sip',imgs[i].getAttribute('data-sip'));
    }
    ProcessImn();
}