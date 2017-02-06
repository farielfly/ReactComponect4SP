import React from 'react';
import { render } from 'react-dom';
import SliderFrame from '../../components/slider/sliderFrame.jsx';
import SliderItem from '../../components/slider/sliderNews.jsx';

const data = [{'src':'../../components/img/image1.jpg','href':'www.baidu.com','date':'01/03/2017 10:00AM','value':'test'},
                    {'src':'../../components/img/image2.jpg','href':'www.baidu.com','date':'01/03/2017 10:00AM','value':'test'},
                    {'src':'../../components/img/image3.jpg','href':'www.baidu.com','date':'01/03/2017 10:00AM','value':'test'},
                    {'src':'../../components/img/image1.jpg','href':'www.baidu.com','date':'01/03/2017 10:00AM','value':'test'},
                    {'src':'../../components/img/image1.jpg','href':'www.baidu.com','date':'01/03/2017 10:00AM','value':'test'}];

var itemNodes = [];
for(var i=0,len=data.length;i<len;i+=3){
   itemNodes.push(<SliderItem children={data.slice(i,i+3)} count={Math.ceil(data.length/3)} idx={i}/>);
}

render(
 <SliderFrame
      itemCount={itemNodes.length}
      speed={1.2}
      delay={2.1}
      pause={true}
      autoplay={false}
      dots={true}
      arrows={false}
    >
      <SliderItem items={itemNodes} />
    </SliderFrame>,
  document.getElementById('news')
);