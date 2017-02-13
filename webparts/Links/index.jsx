import { render } from 'react-dom';
import $ from 'jquery';
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';
import SliderLinks from '../../components/slider/sliderLinks.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';

function linksRender(config) {
    let data = [[{ 'itemhref': 'www.baidu.com', 'title': 'LMS' },
        { 'itemhref': 'www.baidu.com', 'title': 'PRM' },
        { 'itemhref': 'www.baidu.com', 'title': 'IRMS' },
        { 'itemhref': 'www.baidu.com', 'title': 'eForms' },
        { 'itemhref': 'www.baidu.com', 'title': 'I-innovate' },
        { 'itemhref': 'www.baidu.com', 'title': 'Webmail' },
        { 'itemhref': 'www.baidu.com', 'title': 'App' },
        { 'itemhref': 'www.baidu.com', 'title': 'App' },
        { 'itemhref': 'www.baidu.com', 'title': 'App' }],
        [{ 'itemhref': 'www.baidu.com', 'title': 'LMS' },
        { 'itemhref': 'www.baidu.com', 'title': 'PRM' },
        { 'itemhref': 'www.baidu.com', 'title': 'IRMS' },
        { 'itemhref': 'www.baidu.com', 'title': 'eForms' },
        { 'itemhref': 'www.baidu.com', 'title': 'I-innovate' },
        { 'itemhref': 'www.baidu.com', 'title': 'Webmail' },
        { 'itemhref': 'www.baidu.com', 'title': 'App' },
        { 'itemhref': 'www.baidu.com', 'title': 'App' },
        { 'itemhref': 'www.baidu.com', 'title': 'App' }],
        [{ 'itemhref': 'www.baidu.com', 'title': 'LMS' }]];
    let param = {url : '',speed : 1,delay : 2,pause : true,autoplay : false,dots : true,arrows : true};

    function renderUI(data, param){
        if (document.getElementById('acclinks')) {
            render(
                <WebPartFrame
                    title={"Frequently Accessed List"}
                    hasMore={false}
                    link={"wwww.baidu.com"}
                    hasTopLine={false}
                    >

                    <SliderFrame
                        itemCount={data.length}
                        speed={param.speed}
                        delay={param.delay}
                        pause={param.pause}
                        autoplay={param.deautoplaylay}
                        dots={param.dots}
                        arrows={param.arrows}
                        >
                        <SliderLinks items={data} />
                    </SliderFrame>
                </WebPartFrame>,
                document.getElementById('acclinks')
            );
        }   
    }

    function loadData(param) {
        $.ajax({
            type: "post",
            url: config.url,
            data: {},
            datatype: "xml",
            config: param,
            async: false,
            success: function (data) {
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
        loadData(param);
    }
    else {
        renderUI(data, param);
    }

    

    
}

global.linksRender = linksRender;