import { render } from 'react-dom';
import SliderFrame from '../../components/slider/sliderFrame.jsx';
import SliderPics from '../../components/slider/sliderPics.jsx';

function sliderRender(config) {

  let IMAGE_DATA = [{ 'src': '../../components/img/image1.jpg', 'alt': 'image1', 'itemhref': 'www.baidu.com', 'title': 'aaa', 'description': 'aaa description' },
  { 'src': '../../components/img/image2.jpg', 'alt': 'image2', 'itemhref': 'www.sina.com.cn', 'title': 'bbb', 'description': '' },
  { 'src': '../../components/img/image3.jpg', 'alt': 'image3', 'itemhref': 'www.sohu.com', 'title': '', 'description': 'desc2' }];

  let param = {};

  function loadDate(){
    $.ajax({
        type: "post",
        url: config.url,
        data: { },
        datatype: "xml",
        async: false,
        success: function(data) {
            IMAGE_DATA = data;
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
  else{    
    param.url = '';
    param.speed = 1;
    param.delay = 1;
    param.pause = true;
    param.autoplay = false;
    param.dots = true;
    param.arrows = true;
  }

if (document.getElementById('slider')) {
  render(
    <SliderFrame
      itemCount={IMAGE_DATA.length}
      speed={param.speed}
      delay={param.delay}
      pause={param.pause}
      autoplay={param.autoplay}
      dots={param.dots}
      arrows={param.arrows}
    >
      <SliderPics items={IMAGE_DATA} />
    </SliderFrame>,
    document.getElementById('slider')
  );
}
}

global.sliderRender = sliderRender;
