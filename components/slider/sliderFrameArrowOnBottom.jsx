import SliderDots from './sliderDots.jsx';
import SliderArrows from './sliderArrows.jsx';
import SliderFrame from './sliderFrame.jsx';

export default class SliderFrameArrowOnBottom extends React.Component {
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
            }, this.props.delay);
        }
    }

    pausePlay() {
        clearInterval(this.autoPlayFlag);
    }

    componentDidMount() {
        this.goPlay();
    }
    render() {

        let showArrows = this.props.arrows && (this.props.itemCount > 1)
        let showDots = this.props.dots && (this.props.itemCount > 1)
        let dotsNode = <SliderDots turn={this.turn.bind(this)} count={this.props.itemCount} nowLocal={this.state.nowLocal} />;

        let arrowsAndDotsNode = '';
        if (showArrows && showDots) {
            arrowsAndDotsNode =
                <SliderArrows turn={this.turn.bind(this)} >
                    {dotsNode}
                </SliderArrows>
        }
        else if (showArrows && !showDots) {
            arrowsAndDotsNode = <SliderArrows turn={this.turn.bind(this)} />
        }
        else if (!showArrows && showDots) {
            arrowsAndDotsNode = { dotsNode }
        }

        let children = React.Children.map(this.props.children, (item, i) => {
            return React.cloneElement(item, {
                left: this.props.left,
                speed: this.props.speed,
                nowLocal: this.state.nowLocal,
                autoplay: this.props.autoplay
            });
        });


        return (
            <div
                className="acs-sliderframe"
                onMouseOver={this.props.pause ? this.pausePlay.bind(this) : null} onMouseOut={this.props.pause ? this.goPlay.bind(this) : null}>
                {children}
                {arrowsAndDotsNode}
            </div>
        );
    }
}


SliderFrameArrowOnBottom.defaultProps = {
    speed: 1000,
    delay: 2000,
    pause: true,
    autoplay: false,
    dots: true,
    arrows: true,
    itemCount: 0,
};
SliderFrameArrowOnBottom.autoPlayFlag = null;