import { render } from 'react-dom';
import $ from 'jquery'
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';
import SliderEvents from '../../components/slider/slideEvents.jsx';

function eventRender(config) {
    let NewInformation = [{ title: 'AIC Family day', month: 'Jan', day: '03',href:'https://www.baidu.com/s',time:'10:00 AM',location:'Meeting Room A' },
    { title: 'Anniversary Celebration', month: 'Jan', day: '03',href:'https://www.baidu.com/s',time:'10:00 AM',location:'Meeting Room A' },
    { title: 'Global Conference on Integrated Care', month: 'Jan', day: '03',href:'https://www.baidu.com/s',time:'10:00 AM',location:'Meeting Room A' }];
    let IMAGE_DATA = [{ NewInformation },
    { NewInformation },
    { NewInformation }];

    let param = {
        items: [],
        speed: 1,
        delay: 2,
        pause: true,
        autoplay: false,
        dots: true,
        arrows: true
    };

    function loadData(){
        $.ajax({
            type: "post",
            url: config.url,
            data: { },
            datatype: "xml",
            async: false,
            success: function(data) {
                NewInformation = data;
            },
            error: function(data){
                
            }
        });
    }

    if(config && !config.debug){
        loadData();
        param.speed = config.speed ? config.speed: 1;
        param.delay = config.delay ? config.delay: 1;
        param.pause = config.pause ? config.pause: true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
    }
    
    if (document.getElementById('eventSlider')) {
        render(
            <SliderFrame
                itemCount={IMAGE_DATA.length}
                speed={1.2}
                delay={2.1}
                pause={true}
                autoplay={false}
                dots={true}
                arrows={true}
            >
                <SliderEvents inputDate={IMAGE_DATA} />
            </SliderFrame>,
            document.getElementById('eventSlider')
        );
    }
}

global.sliderRender = eventRender;
