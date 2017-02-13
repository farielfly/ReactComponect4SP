import TitleDescriptionPanel from '../common/titleDescriptionPanel.jsx'
export default class SliderPics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {items, left, speed, nowLocal } = this.props;
        let count = items.length;
        let width = 100 / count + '%';

        let itemNodes = this.props.items.map((item, idx) => {
            let panel = <div></div>
            if (item.title || item.description) {
                panel = <TitleDescriptionPanel title={item.title} description={item.description} itemhref={item.itemhref} />
            }
            return <li key={'pic' + idx} className="acs-slider-pic" style={{ width: width }}>
                <a href={item.itemhref}>
                    <img src={item.src} />
                </a>
                {panel}
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