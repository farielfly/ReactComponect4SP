export default class SliderPics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {items, left, speed, nowLocal } = this.props;
        let count = items.length;
        let width = 100 / count + '%';
        let itemNodes = this.props.items.map((item, idx) => {
            return <li className="u-slider-item" style={{ width: width }}>
                <img src={item.src} alt={item.alt} />
            </li>;
        });

        return (
            <ul style={{
                left: -100 * nowLocal + "%",
                transitionDuration: speed + "s",
                width: count * 100 + "%"
            }}>
                {itemNodes}
            </ul>
        );
    }
}