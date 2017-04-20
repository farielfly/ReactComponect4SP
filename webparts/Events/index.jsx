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
        if (document.getElementById(param.id)) {
            render(
                <WebPartFrame
                    title={param.webparttitle}
                    hasMore={true}
                    link={param.moreurl}
                    hasTopLine={false}
                    >
                    <SliderEvents inputDate={itemNodes} />                    
                </WebPartFrame>,
                document.getElementById(param.id)
            );
        }
    };

    function loadData(param) {
         var data = new Array();
        for (var i = 0, l = param.data.length; i < l; i++) {
            data.push({
                'title': param.data[i].Title,
                'href': param.data[i].Link,
                'time': param.data[i].DateTime,
                'location': param.data[i].User
            })
        }
        renderUI(data, param);
    }

    if (config && !config.debug) {
        param.listurl = config.listurl ? config.listurl : '';
        param.moreurl = config.moreurl ? config.moreurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : 'discussion board';
        param.id = config.id ? config.id : 'discussion';
        param.data = config.data ? config.data: data;
        loadData(param);
    }
    else {
        renderUI(data, param)
    }
}

window.eventRender = eventRender;
