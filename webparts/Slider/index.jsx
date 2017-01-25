import SliderDots from '../../components/sliderdots/sliderdots.jsx';
import SliderPics from '../../components/sliderpics/sliderpics.jsx';
import SliderArrs from '../../components/sliderArrows/sliderArrows.jsx'
class Slider extends React.Component {
  constructor() {
    super();
    return "Slider";
  }

  render() {
    return (
      <div id='slider'>
        <SliderPics></SliderPics>
        <SliderDots></SliderDots>
        <SliderArrs></SliderArrs>
      </div>
    );
  }
}

if (document.getElementById('slider')) {
  ReactDOM.render(
    <Slider />,
    document.getElementById('slider')
  );
}