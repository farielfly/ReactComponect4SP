import { render } from 'react-dom';
import PaginationFrame from '../../components/pagination/paginationFrame.jsx';
import TableListFrame from '../../components/table/table.jsx';
import StringCell from '../../components/table/stringCell.jsx';

import TableBulk from '../../components/table/tableBulk.jsx';
import ServiceItem from '../../components/table/serviceItem.jsx';

import $ from 'jquery';

function serviceRequestTypeRender(config) {
    const data = [{ 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' },
    { 'src': '../../components/img/image2.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' },
    { 'src': '../../components/img/image3.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' },
    { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' },
    { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }];

    const serviceData=[{href:'',value:'test1'},{href:'',value:'test2'},{href:'',value:'test3'},{href:'',value:'test4'},{href:'',value:'test5'},{href:'',value:'test6'}];

    var maxCount = 3;
    let param = { url: '', speed: 1, delay: 1, pause: true, autoplay: false, dots: true, arrows: true, listurl: '', webparttitle: '', moreurl: '', defaultPicUrl: '' };

    function renderUI(data, param) {

        if (document.getElementById('serviceType')) {
            render(
                <PaginationFrame hasTitle={true} frameTitle={"dddd"} countInPage={3} hasSearch={false} config={{data:serviceData}} hasTurning={false}>
                    <TableBulk countInColumn={3} columnCount={2} listData={serviceData}>
                        <ServiceItem></ServiceItem>
                    </TableBulk>
                </PaginationFrame>,
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
                renderUI(data, this.config);
            },
            error: function (data) {

            }
        });
    }

    if (config && !config.debug) {
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : '';
        param.moreurl = config.moreurl ? config.moreurl : '';
        param.defaultPicUrl = config.defaultPicUrl ? config.defaultPicUrl : '';
        loadData(param);

    }
    else {
        renderUI(data, param);
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
    var maxCount = 3;
    let param = { url: '', speed: 1, delay: 1, pause: true, autoplay: false, dots: true, arrows: true, listurl: '', webparttitle: '', moreurl: '', defaultPicUrl: '' };

    function renderUI(data, param) {

        if (document.getElementById('serviceRequest')) {
            render(

                <PaginationFrame hasTitle={false} frameTitle={"dddd"} countInPage={5} hasSearch={true} config={{data:data,pageSize:5,totalCount:50}} hasTurning={true}>
                    <TableListFrame titleData={titleData}  listData={data}>
                        <StringCell itemData={null}></StringCell>
                        <StringCell itemData={null}></StringCell>
                        <StringCell itemData={null}></StringCell>
                        <StringCell itemData={null}></StringCell>
                        <StringCell itemData={null}></StringCell>
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
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : '';
        param.moreurl = config.moreurl ? config.moreurl : '';
        param.defaultPicUrl = config.defaultPicUrl ? config.defaultPicUrl : '';
        loadData(param);

    }
    else {
        renderUI(data, param);
    }
}

global.serviceRequestListRender = serviceRequestListRender;