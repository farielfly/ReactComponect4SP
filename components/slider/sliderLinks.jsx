export default class SliderLinks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {items, left, speed, nowLocal } = this.props;
        let count = items.length;
        let width = 100 / count + '%';

        let itemCollection = this.props.items.map((items, idx) => {
            if (items.length) {
                let itemNodes = items.map((item, idn) => {
                    return <a href={item.src} key={'link' + idn} className="item-link">
                        <span>{item.title}</span>
                        <span>{item.icon}</span>
                    </a>
                })
                return <li className="slider-link" style={{ width: width }}>{itemNodes}</li>
            }
        })


        return (
            <ul className="acs-slider-link" style={{
                left: -100 * nowLocal + "%",
                transitionDuration: speed + "s",
                width: count * 100 + "%"
            }}>
                {itemCollection}
            </ul>
        );
    }
}