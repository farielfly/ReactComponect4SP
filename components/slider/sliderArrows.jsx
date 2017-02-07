export default class SliderArrows extends React.Component {
    constructor(props) {
        super(props);
    }

    handleArrowClick(option) {
        this.props.turn(option);
    }

    render() {
        return (
            <div className="acs-slider-arrow-wrap">
                <span className="acs-slider-arrow acs-slider-arrow-left" onClick={this.handleArrowClick.bind(this, -1)}> Pre </span>
                {this.props.children ? this.props.children : ''}
                <span className="acs-slider-arrow acs-slider-arrow-right" onClick={this.handleArrowClick.bind(this, 1)}> Next </span>
            </div>
        );
    }
}