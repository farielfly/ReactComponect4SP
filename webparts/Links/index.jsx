import { render } from 'react-dom';
import $ from 'jquery';
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';
import SliderLinks from '../../components/slider/sliderLinks.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';

function linksRender(config) {
    let LINK_DATA = [];
    let param = {};

    if (config && !config.debug) {
        loadData();
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
    }
    else {
        LINK_DATA = [[{ 'itemhref': 'www.baidu.com', 'title': 'LMS' },
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

        param = {
            items: [],
            speed: 1,
            delay: 2,
            pause: true,
            autoplay: false,
            dots: true,
            arrows: true,
            url: ''
        };
    }

    function loadData() {
        $.ajax({
            type: "post",
            url: config.url,
            data: {},
            datatype: "xml",
            async: false,
            success: function (data) {
                LINK_DATA = data;
            },
            error: function (data) {
            }
        });
    }

    if (document.getElementById('acclinks')) {
        render(
            <WebPartFrame
                title={"Frequently Accessed List"}
                hasMore={false}
                link={"wwww.baidu.com"}
                hasTopLine={false}
                >

                <SliderFrame
                    itemCount={LINK_DATA.length}
                    speed={param.speed}
                    delay={param.delay}
                    pause={param.pause}
                    autoplay={param.deautoplaylay}
                    dots={param.dots}
                    arrows={param.arrows}
                    >
                    <SliderLinks items={LINK_DATA} />
                </SliderFrame>
            </WebPartFrame>,
            document.getElementById('acclinks')
        );
    }
}

global.linksRender = linksRender;