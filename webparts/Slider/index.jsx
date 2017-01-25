//import SliderDots from '../../components/sliderdots/sliderdots.jsx';
//import SliderPics from '../../components/sliderpics/sliderpics.jsx';
//import SliderArrs from '../../components/sliderArrows/sliderArrows.jsx'
//class Slider extends React.Component {
//  constructor() {
//    super();
//    return "Slider";
//  }

//  render() {
//    return (
//      <div id='slider'>
//        <SliderPics></SliderPics>
//        <SliderDots></SliderDots>
//        <SliderArrs></SliderArrs>
//      </div>
//    );
//  }
//}

//if (document.getElementById('slider')) {
//  ReactDOM.render(
//    <Slider />,
//    document.getElementById('slider')
//  );
//}

import React from 'react';
import { render } from 'react-dom';
import Slider from '../../components/slider/slider.jsx';

const IMAGE_DATA = [{'src':'../../components/img/image1.jpg','alt':'image1'},
					{'src':'../../components/img/image2.jpg','alt':'image2'},
					{'src':'../../components/img/image3.jpg','alt':'image3'}];

render(
  <Slider
    items={IMAGE_DATA}
    speed={1.2}
    delay={2.1}
    pause={true}
    autoplay={false}
    dots={true}
    arrows={true}
  />,
  document.getElementById('slider')
);