export default class SliderLinks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {items, left, speed, nowLocal } = this.props;
        let count = items.length;
        let width = 100 / count + '%';

        let itemCollection = this.props.items.map((items, idc) => {
            let itemNodes = items.map((item, idn) => {
                return <a key={'link' + idn} href={item.itemhref} className="acs-link-bgcolor" target="_blank" title={item.title}>
                    <img className="acs-linkitem-img" src={item.src} />
                    <span className="acs-linkitem-title">{item.title}</span>
                </a>
            });
            return (<li key={'coll' + idc} style={{ width: width }}>{itemNodes}</li>);
        })


        return (
            <ul style={{
                left: -100 * nowLocal + "%",
                transitionDuration: speed + "ms",
                width: count * 100 + "%"
            }}>
                {itemCollection}
            </ul>
        );
    }
}