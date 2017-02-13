import { render } from 'react-dom';
import SliderFrame from '../../components/slider/sliderFrame.jsx';
import SliderPics from '../../components/slider/sliderPics.jsx';
import $ from 'jquery';

function sliderRender(config) {

  let IMAGE_DATA = [{ 'src': '../../components/img/image1.jpg', 'alt': 'image1', 'itemhref': 'www.baidu.com', 'title': 'aaa', 'description': 'aaa description' },
  { 'src': '../../components/img/image2.jpg', 'alt': 'image2', 'itemhref': 'www.sina.com.cn', 'title': 'bbb', 'description': '' },
  { 'src': '../../components/img/image3.jpg', 'alt': 'image3', 'itemhref': 'www.sohu.com', 'title': '', 'description': 'desc2' }];

  let param = {url : '',speed : 1,delay : 1,pause : true,autoplay : false,dots : true,arrows : true};

  function renderUI(data, param){
    if (document.getElementById('slider')) {
      render(
        <SliderFrame
          itemCount={data.length}
          speed={param.speed}
          delay={param.delay}
          pause={param.pause}
          autoplay={param.autoplay}
          dots={param.dots}
          arrows={param.arrows}
          >
          <SliderPics items={data} />
        </SliderFrame>,
        document.getElementById('slider')
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

global.sliderRender = sliderRender;
