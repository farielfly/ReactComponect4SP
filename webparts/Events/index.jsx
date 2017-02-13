import { render } from 'react-dom';
import $ from 'jquery'
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';
import SliderEvents from '../../components/slider/slideEvents.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';

function eventRender(config) {
    let NewInformation = [{ title: 'AIC Family day', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' },
    { title: 'Anniversary Celebration', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' },
    { title: 'Global Conference on Integrated Care', month: 'Jan', day: '03', href: 'https://www.baidu.com/s', time: '10:00 AM', location: 'Meeting Room A' }];
    let data = [{ NewInformation },    { NewInformation },    { NewInformation }];
    let param = {url : '',speed : 1,delay : 2,pause : true,autoplay : false,dots : true,arrows : true};

    function renderUI(data, param){
        if (document.getElementById('eventSlider')) {
            render(
                <WebPartFrame
                    title={"Corporate Events"}
                    hasMore={true}
                    link={"wwww.baidu.com"}
                    hasTopLine={true}
                >
                    <SliderFrame
                        itemCount={data.length}
                        speed={1.2}
                        delay={2.1}
                        pause={true}
                        autoplay={false}
                        dots={true}
                        arrows={true}
                    >
                        <SliderEvents inputDate={data} />
                    </SliderFrame>
                </WebPartFrame>,
                document.getElementById('eventSlider')
            );
        }
    };

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
        loadData();
    }
    else{
        renderUI(data, param)
    }    
}

global.eventRender = eventRender;
