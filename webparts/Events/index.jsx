import { render } from 'react-dom';
import $ from 'jquery'
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';
import SliderEvents from '../../components/slider/slideEvents.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';

function eventRender(config) {
    let NewInformation = [{ title: 'AIC Family day', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' },
    { title: 'Anniversary Celebration', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' },
    { title: 'Global Conference on Integrated Care', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' }];
    let data = NewInformation;
    let param = { url: '', speed: 1, delay: 2, pause: true, autoplay: false, dots: true, arrows: true, listurl: '', webparttitle: '', moreurl: '' };

    function renderUI(data, param) {
        var itemNodes = [];
        let maxCount = 3;
        for (let i = 0, len = data.length; i < len; i += maxCount) {
            let cell = Math.ceil(data.length / maxCount);
            itemNodes.push(data.slice(i, i + maxCount));
        }
        if (document.getElementById('eventSlider')) {
            render(
                <WebPartFrame
                    title={param.webparttitle}
                    hasMore={true}
                    link={param.moreurl}
                    hasTopLine={true}
                    >
                    <SliderFrame
                        itemCount={itemNodes.length}
                        speed={param.speed}
                        delay={param.delay}
                        pause={param.pause}
                        autoplay={param.autoplay}
                        dots={param.dots}
                        arrows={param.arrows}
                        >
                        <SliderEvents inputDate={itemNodes} />
                    </SliderFrame>
                </WebPartFrame>,
                document.getElementById('eventSlider')
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
            success: function(dataInput) {
                let month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    let date = dataInput.d.results[i].EventDate ? new Date(dataInput.d.results[i].EventDate) : '';
                    data.push({
                        'href': param.listurl + '/DispForm.aspx?ID=' + dataInput.d.results[i].ID,
                        'month': date === '' ? '' : month[date.getMonth()],
                        'day': date === '' ? '' : date.getDate(),
                        'time': date === '' ? '' : date.getHours() + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()),
                        'location': dataInput.d.results[i].Location,
                        'title': dataInput.d.results[i].Title
                    })
                }
                renderUI(data, this.config);
            },
            error: function(data) {
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
        param.moreurl = config.moreurl ? config.moreurl : '';
        param.webparttitle = config.webparttitle ? config.webparttitle : '';
        loadData(param);
    }
    else {
        renderUI(data, param)
    }
}

global.eventRender = eventRender;
