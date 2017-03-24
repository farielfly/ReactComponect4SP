import { render } from 'react-dom';
import $ from 'jquery';
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';
import SliderLinks from '../../components/slider/sliderLinks.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';

function linksRender(config) {
    let data = [{ 'itemhref': 'http://www.baidu.com', 'title': 'LMS' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'PRM' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'IRMS' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'eForms' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'I-innovate' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'Webmail' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'App' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'App' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'App' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'LMS' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'PRM' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'IRMS' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'eForms' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'I-innovate' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'Webmail' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'App' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'App' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'App' },
    { 'itemhref': 'http://www.baidu.com', 'title': 'LMS' }];
    let param = { url: '', speed: 1, delay: 2, pause: true, autoplay: false, dots: true, arrows: true, listurl: '', webparttitle: 'frequently accessed links', moreurl: '' };

    function renderUI(data, param) {
        var itemNodes = [];
        let maxCount = 9;
        for (let i = 0, len = data.length; i < len; i += maxCount) {
            itemNodes.push(data.slice(i, i + maxCount));
        }
        if (document.getElementById('acclinks')) {
            render(
                <WebPartFrame
                    title={param.webparttitle}
                    hasMore={false}
                    link={param.moreurl}
                    hasTopLine={false}
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
                        <SliderLinks items={itemNodes} />
                    </SliderFrame>
                </WebPartFrame>,
                document.getElementById('acclinks')
            );
            AIC.wordLimit('.acs-linkitem-title',2);
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
            success: function(dataInput) {
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    data.push({
                        'itemhref': dataInput.d.results[i].ACSUrl ? dataInput.d.results[i].ACSUrl.Url : '',
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
        param.webparttitle = config.webparttitle ? config.webparttitle : '';
        param.moreurl = config.moreurl ? config.moreurl : '';
        loadData(param);
    }
    else {
        renderUI(data, param);
    }




}

global.linksRender = linksRender;