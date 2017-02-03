import { render } from 'react-dom';
import SliderFrame from '../../components/slider/sliderFrame.jsx';
import SliderPics from '../../components/slider/sliderPics.jsx';


const IMAGE_DATA = [{ 'src': '../../components/img/image1.jpg', 'alt': 'image1' },
{ 'src': '../../components/img/image2.jpg', 'alt': 'image2' },
{ 'src': '../../components/img/image3.jpg', 'alt': 'image3' }];

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