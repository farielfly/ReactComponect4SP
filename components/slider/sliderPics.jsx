import TitleDescriptionPanel from '../common/titleDescriptionPanel.jsx'
export default class SliderPics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {items, left, speed, nowLocal, pagecount } = this.props;
        let count = items.length;
        let width = 100 / count - 0.8 + '%'; 
        if(pagecount == 1){
            width = 100 / count + '%'; 
        }       
        if(count<pagecount){
            width = '32.8%';                        
        }

        let itemNodes = this.props.items.map((item, idx) => {
            let panel = <div></div>
            if (item.title || item.description) {
                panel = <TitleDescriptionPanel title={item.title} description={item.description} itemhref={item.itemhref} isVideo={item.isVideo}/>
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
                left: -100 * nowLocal / pagecount + "%",
                transitionDuration: speed + "ms",
                width: (count<pagecount) ? "100%" : count * 100 / pagecount + "%"
            }}>
                {itemNodes}
            </ul>
        );
    }
}