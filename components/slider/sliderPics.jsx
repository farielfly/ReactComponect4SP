import TitleDescriptionPanel from '../common/titleDescriptionPanel.jsx'
export default class SliderPics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { items, left, speed, nowLocal } = this.props;
        let count = items.length;
        let width = 100 / count + '%';

        let itemNodes = this.props.items.map((item, idx) => {
            return <li key={'pic' + idx} className="acs-slider-pic" style={{ width: width }}>
                <a href={item.itemhref}>
                    <img src={item.src} />
                </a>
            </li>;
        });

        return (
            <ul style={{
                left: -100 * nowLocal + "%",
                transitionDuration: speed + "ms",
                width: count * 100 + "%"
            }}>
                {itemNodes}
            </ul>
        );
    }
}