import { render } from 'react-dom';
import PaginationFrame from '../../components/pagination/paginationFrame.jsx';
import TableListFrame from '../../components/table/table.jsx';
import StringCell from '../../components/table/stringCell.jsx';

import TableBulk from '../../components/table/tableBulk.jsx';
import ServiceItem from '../../components/table/serviceItem.jsx';

import $ from 'jquery';

function serviceRequestTypeRender(config) {
    const serviceData=[
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData1'},{href:'',value:'itemData1'},{href:'',value:'itemData13'},{href:'',value:'itemData14'},{href:'',value:'itemData15'},{href:'',value:'itemData16'}]},
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData1'},{href:'',value:'itemData1'},{href:'',value:'itemData13'},{href:'',value:'itemData14'},{href:'',value:'itemData15'},{href:'',value:'itemData16'}]},
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData1'},{href:'',value:'itemData1'},{href:'',value:'itemData13'},{href:'',value:'itemData14'},{href:'',value:'itemData15'},{href:'',value:'itemData16'}]},
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData1'},{href:'',value:'itemData1'},{href:'',value:'itemData13'},{href:'',value:'itemData14'},{href:'',value:'itemData15'},{href:'',value:'itemData16'}]},
        {serviceTitle:"test1",serviceList:[{href:'',value:'itemData1'},{href:'',value:'itemData1'},{href:'',value:'itemData13'},{href:'',value:'itemData14'},{href:'',value:'itemData15'},{href:'',value:'itemData16'}]}
        ];

    let param = { };

    function renderUI(data) {
        let serviceType = data.map((item,index)=>{
            return <div className="acs-servicerequest-type" key={"servicetype"+index}>
                        <PaginationFrame hasTitle={true} frameTitle={item.serviceTitle} hasSearch={false} config={{data:item.serviceList}} hasTurning={false}>
                            <TableBulk countInColumn={3} columnCount={2} listData={item.serviceList}>
                                <ServiceItem></ServiceItem>
                            </TableBulk>
                        </PaginationFrame>
                    </div>
        });

        if (document.getElementById('serviceType')) {
            render(
                <div>
                    {serviceType}
                </div>,
                document.getElementById('serviceType')
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
            config: param,
            async: false,
            success: function (dataInput) {
                renderUI(data);
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

global.serviceRequestTypeRender = serviceRequestTypeRender;


function serviceRequestListRender(config){
     const data = [
         { 'Title': 'Projector Request', 'Request Date': '9/3/1021', 'Status': 'Open', 'Processed By': 'Bill','Processed Date':'9/3/1021' },
        { 'Title': 'Projector Request', 'Request Date': '9/3/1021', 'Status': 'Open', 'Processed By': 'Bill','Processed Date':'9/3/1021' },
        { 'Title': 'Projector Request', 'Request Date': '9/3/1021', 'Status': 'Open', 'Processed By': 'Bill','Processed Date':'9/3/1021' },
        { 'Title': 'Projector Request', 'Request Date': '9/3/1021', 'Status': 'Open', 'Processed By': 'Bill','Processed Date':'9/3/1021' },
        { 'Title': 'Projector Request', 'Request Date': '9/3/1021', 'Status': 'Open', 'Processed By': 'Bill','Processed Date':'9/3/1021' },
        { 'Title': 'Projector Request', 'Request Date': '9/3/1021', 'Status': 'Open', 'Processed By': 'Bill','Processed Date':'9/3/1021' }];

    const titleData =[{value:'Title',width:20},{value:'Request Date',width:20},{value:'Status',width:20},{value:'Processed By',width:20},{value:'Processed Date',width:20}];
    let param = {};

    function renderUI(data) {
        let titleArrary = config.titleArrary.map((item,index)=>{
            return <StringCell itemData={null} key={"head"+index}></StringCell>
        })
        if (document.getElementById('serviceRequest')) {
            render(
                <PaginationFrame hasTitle={false} frameTitle={""} hasSearch={true} config={{data:data,pageSize:config.pageSize,totalCount:50}} hasTurning={true}>
                    <TableListFrame titleData={config.titleArrary}  listData={data}>
                        {titleArrary}
                    </TableListFrame>
                </PaginationFrame>,
                document.getElementById('serviceRequest')
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
            config: param,
            async: false,
            success: function (dataInput) {
                renderUI(data, this.config);
            },
            error: function (data) {

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

global.serviceRequestListRender = serviceRequestListRender;