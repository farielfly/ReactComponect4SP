import { render } from 'react-dom';
import SliderFrame from '../../components/slider/sliderFrame.jsx';
import SliderPics from '../../components/slider/sliderPics.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';

import $ from 'jquery';

function sliderRender(config) {

    let data = [{ 'src': '../../components/img/image1.jpg', 'alt': 'image1', 'itemhref': 'www.baidu.com', 'title': 'aaa', 'description': 'aaa description' },
    { 'src': '../../components/img/image2.jpg', 'alt': 'image2', 'itemhref': 'www.sina.com.cn', 'title': 'bbb', 'description': '' },
    { 'src': '../../components/img/image3.jpg', 'alt': 'image3', 'itemhref': 'www.sohu.com', 'title': '', 'description': 'desc2' }];

    let param = { url: '', speed: 1000, delay: 1, pagecount: 3, pause: true, autoplay: false, dots: false, arrows: true, listurl: '',debug: true,id: 'microslider',webparttitle:"Photo Gallery"};   
    function renderUI(data, param) {
        if (document.getElementById(param.id)) {
            render(
                 <WebPartFrame
                    title={param.webparttitle}
                    hasMore={false}
                    link={param.moreurl}
                    hasTopLine={false}>
                    <SliderFrame
                        itemCount={data.length}
                        speed={param.speed}
                        delay={param.delay}
                        pause={param.pause}
                        autoplay={param.autoplay}
                        dots={param.dots}
                        arrows={param.arrows}
                        pagecount={param.pagecount}
                        >
                        <SliderPics items={data} />
                    </SliderFrame>
                </WebPartFrame>,                
                document.getElementById(param.id)
            );            
        }
    }

    function loadData(param) {
        var data = new Array();
        for (var i = 0, l = param.data.length; i < l; i++) {
            data.push({
                'src': param.data[i].PictureUrl,
                'alt': param.data[i].Title,
                'itemhref': param.data[i].LinkUrl,
                'title': param.data[i].Title,
                'description': param.data[i].Description,
                'isVideo': param.data[i].IsVideo
            })
        }        
        renderUI(data, param);
    }

    if (config && !config.debug) {
        param.speed = config.speed ? config.speed : 1000;
        param.delay = config.delay ? config.delay : 1000;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : false;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        param.pagecount = config.pagecount ? config.pagecount : 1;
        param.id = config.id? config.id: "";
        param.data = config.data? config.data: [];
        param.webparttitle = config.webparttitle?config.webparttitle: "Photo Gallery";
        loadData(param);
    }
    else {
        renderUI(data, param);
    }
}

global.microSliderRender = sliderRender;
