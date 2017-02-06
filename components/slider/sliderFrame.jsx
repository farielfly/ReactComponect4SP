import SliderDots from './sliderDots.jsx';
import SliderArrows from './sliderArrows.jsx';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowLocal: 0,
        };
    }

    turn(n) {
        var _n = this.state.nowLocal + n;
        if (_n < 0) {
            _n = _n + this.props.itemCount;
        }
        if (_n >= this.props.itemCount) {
            _n = _n - this.props.itemCount;
        }
        this.setState({ nowLocal: _n });
    }

    goPlay() {
        if (this.props.autoplay) {
            this.autoPlayFlag = setInterval(() => {
                this.turn(1);
            }, this.props.delay * 1000);
        }
    }

    pausePlay() {
        clearInterval(this.autoPlayFlag);
    }

    componentDidMount() {
        this.goPlay();
    }

    render() {
        let arrowsNode = <SliderArrows turn={this.turn.bind(this)} />;
        let dotsNode = <SliderDots turn={this.turn.bind(this)} count={this.props.itemCount} nowLocal={this.state.nowLocal} />;
        let children = React.Children.map(this.props.children, (item, i) => {
            return React.cloneElement(item, {
                left: this.props.left,
                speed: this.props.speed,
                nowLocal: this.state.nowLocal
            });
        });


        return (
            <div
                className="acs-sliderframe"
                onMouseOver={this.props.pause ? this.pausePlay.bind(this) : null} onMouseOut={this.props.pause ? this.goPlay.bind(this) : null}>
                {children}
                {this.props.arrows ? arrowsNode : null}
                {this.props.dots ? dotsNode : null}
            </div>
        );
    }
}

Slider.defaultProps = {
    speed: 1,
    delay: 2,
    pause: true,
    autoplay: true,
    dots: true,
    arrows: true,
    itemCount: 0,
};
Slider.autoPlayFlag = null;