import { render } from 'react-dom';
import Slider from '../../components/slider/slider.jsx';
import SliderPics from '../../components/slider/sliderPics/sliderPics.jsx';


const IMAGE_DATA = [{ 'src': '../../components/img/image1.jpg', 'alt': 'image1' },
{ 'src': '../../components/img/image2.jpg', 'alt': 'image2' },
{ 'src': '../../components/img/image3.jpg', 'alt': 'image3' }];

render(
  <Slider
    itemCount={IMAGE_DATA.length}
    speed={1.2}
    delay={2.1}
    pause={true}
    autoplay={false}
    dots={true}
    arrows={true}
    >
    <SliderPics items={IMAGE_DATA} />
  </Slider>,
  document.getElementById('slider')
);