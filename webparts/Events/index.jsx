import { render } from 'react-dom';
import $ from 'jquery';
import SliderEvents from '../../components/slider/slideEvents.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';

function eventRender(config) {
    let NewInformation = [{ title: 'AIC Family day',  href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' },
    { title: 'Anniversary Celebration',  href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' },
    { title: 'Global Conference on Integrated Care',  href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' }];
    let data = NewInformation;
    let param = { url: '', listurl: '', webparttitle: 'discussion board', moreurl: '',id: 'discussion' };

    function renderUI(data, param) {
        var itemNodes = [];
        let maxCount = data.length > 3 ? 3 : data.length;        
        itemNodes.push(data.slice(0, maxCount));
        debugger;
        if (document.getElementById(param.id)) {
            render(
                <WebPartFrame
                    title={param.webparttitle}
                    hasMore={true}
                    link={param.moreurl}
                    hasTopLine={true}
                    >
                    <SliderEvents inputDate={itemNodes} />                    
                </WebPartFrame>,
                document.getElementById(param.id)
            );
        }
    };

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
                let month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    let date = dataInput.d.results[i].EventDate ? new Date(dataInput.d.results[i].EventDate) : '';
                    let day = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();
                    let hour = date.getHours() >= 12 ? (date.getHours() - 12) : date.getHours();
                    let minute = date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes();
                    let pmOrAm = date.getHours() > 12 ? "PM" : "AM";
                    data.push({
                        'href': param.listurl + '/DispForm.aspx?ID=' + dataInput.d.results[i].ID,
                        'month': date === '' ? '' : month[date.getMonth()],
                        'day': day,
                        'time': hour + ":" + minute + " " + pmOrAm,
                        'location': dataInput.d.results[i].Location,
                        'title': dataInput.d.results[i].Title
                    })
                }
                renderUI(data, this.config);
            },
            error: function (data) {
            }
        });
    }

    if (config && !config.debug) {
        param.listurl = config.listurl ? config.listurl : '';
        param.moreurl = config.moreurl ? config.moreurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : '';
        param.id = config.id ? config.id : 'discussion';
        loadData(param);
    }
    else {
        renderUI(data, param)
    }
}

window.eventRender = eventRender;
