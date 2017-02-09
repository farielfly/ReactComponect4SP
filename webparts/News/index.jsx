import { render } from 'react-dom';
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';
import SliderItem from '../../components/slider/sliderNews.jsx';


function newsRender(){
  const data = [{'src':'../../components/img/image1.jpg','href':'www.baidu.com','date':'01/03/2017 10:00AM','value':'test'},
                    {'src':'../../components/img/image2.jpg','href':'www.baidu.com','date':'01/03/2017 10:00AM','value':'test'},
                    {'src':'../../components/img/image3.jpg','href':'www.baidu.com','date':'01/03/2017 10:00AM','value':'test'},
                    {'src':'../../components/img/image1.jpg','href':'www.baidu.com','date':'01/03/2017 10:00AM','value':'test'},
                    {'src':'../../components/img/image1.jpg','href':'www.baidu.com','date':'01/03/2017 10:00AM','value':'test'}];

  var maxCount = 3;
  var itemNodes = [];
  for(var i=0,len=data.length;i<len;i+=maxCount){
    itemNodes.push(<SliderItem children={data.slice(i,i+maxCount)} count={Math.ceil(data.length/maxCount)} idx={i}/>);
  }

  if (document.getElementById('news')) {
  render(
      <WebPartFrame
          title={"NEWS & ANNOUNCEMENTS"}
          hasMore={true}
          link={"wwww.baidu.com"}
          hasTopLine={true}
      >
        <SliderFrame
              itemCount={itemNodes.length}
              speed={1.2}
              delay={2.1}
              pause={true}
              autoplay={false}
              dots={true}
              arrows={true}
            >
          <SliderItem items={itemNodes} maxCount={maxCount}/>
        </SliderFrame>
      </WebPartFrame>,
    document.getElementById('news')
    );
  }
}

global.newsRender = newsRender;