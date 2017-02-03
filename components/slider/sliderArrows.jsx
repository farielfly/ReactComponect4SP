export default class SliderArrows extends React.Component {
    constructor(props) {
        super(props);
    }

    handleArrowClick(option) {
        this.props.turn(option);
    }

    render() {
        return (
            <div className="u-slider-arrow-wrap">
                <span className="u-slider-arrow u-slider-arrow-left" onClick={this.handleArrowClick.bind(this, -1)}> Pre </span>
                <span className="u-slider-arrow u-slider-arrow-right" onClick={this.handleArrowClick.bind(this, 1)}> Next </span>
            </div>
        );
    }
}