import { render } from 'react-dom';
import SliderFrame from '../../components/slider/sliderFrame.jsx';
import SliderPics from '../../components/slider/sliderPics.jsx';

function sliderRender() {

  let IMAGE_DATA = [{ 'src': '../../components/img/image1.jpg', 'alt': 'image1', 'itemhref': 'www.baidu.com', 'title': 'aaa', 'description': 'aaa description' },
  { 'src': '../../components/img/image2.jpg', 'alt': 'image2', 'itemhref': 'www.sina.com.cn', 'title': 'bbb', 'description': '' },
  { 'src': '../../components/img/image3.jpg', 'alt': 'image3', 'itemhref': 'www.sohu.com', 'title': '', 'description': 'desc2' }];

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

if (document.getElementById('slider')) {
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
      <SliderPics items={IMAGE_DATA} />
    </SliderFrame>,
    document.getElementById('slider')
  );
}
}

global.sliderRender = sliderRender;
