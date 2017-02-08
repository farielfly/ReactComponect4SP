import { render } from 'react-dom';
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';
import SliderNews from '../../components/slider/slideEvents.jsx';

function sliderRender() {
    const NewInformation = [{ title: 'AIC Family day', month: 'Jan', day: '03',href:'https://www.baidu.com/s',time:'10:00 AM',location:'Meeting Room A' },
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
        arrows: true,
        url: ''
    };

    param.url = '';
    param.speed = 1;
    param.delay = 1;
    param.pause = true;
    param.autoplay = false;
    param.dots = true;
    param.arrows = true;

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
            <SliderNews inputDate={IMAGE_DATA} />
        </SliderFrame>,
        document.getElementById('eventSlider')
    );
}

global.sliderRender = sliderRender;
