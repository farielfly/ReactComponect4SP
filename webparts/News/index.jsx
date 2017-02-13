import { render } from 'react-dom';
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';
import WebPartFrame from '../../components/Common/webPartFrame.jsx';
import SliderItem from '../../components/slider/sliderNews.jsx';
import $ from 'jquery';

function newsRender(config) {
  const data = [{ 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' },
  { 'src': '../../components/img/image2.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' },
  { 'src': '../../components/img/image3.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' },
  { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' },
  { 'src': '../../components/img/image1.jpg', 'href': 'www.baidu.com', 'date': '01/03/2017 10:00AM', 'value': 'test' }];

  var maxCount = 3;
  let param = {url : '',speed : 1,delay : 1,pause : true,autoplay : false,dots : true,arrows : true};

  function renderUI(data, param){
    var itemNodes = [];
    for (var i = 0, len = data.length; i < len; i += maxCount) {
      itemNodes.push(<SliderItem children={data.slice(i, i + maxCount)} count={Math.ceil(data.length/maxCount)} idx={i} />);
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
            speed={param.speed}
            delay={param.delay}
            pause={param.pause}
            autoplay={param.autoplay}
            dots={param.dots}
            arrows={param.arrows}
            >
            <SliderItem items={itemNodes} maxCount={maxCount} />
          </SliderFrame>
        </WebPartFrame>,
        document.getElementById('news')
      );
    }
  }

  function loadDate(param) {
    $.ajax({
      type: "post",
      url: config.url,
      data: {},
      config: param,
      datatype: "xml",
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
    loadData(param);
    
  }
  else {
    renderUI(data, param);
  }  
}

global.newsRender = newsRender;