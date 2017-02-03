export default class SliderLinks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {items, left, speed, nowLocal } = this.props;
        let count = items.length;
        let width = 100 / count + '%';

        let itemCollection = this.props.items.map((item,idx)=>{
            return <a href={item.src} >
                <span>{item.title}</span>
                <span>{item.icon}</span>
            </a>

        })


        let itemNodes = itemCollection.map((coll,idc)=>{
            let items = [];
            items.push(coll);
            if(idc%9===0){
                return <li>
                    {items}
                </li>
            }
        })


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