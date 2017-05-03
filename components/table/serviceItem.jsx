export default class ServiceItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let itemData = this.props.itemData;
        return <div className="acs-tablebulk-serviceitem">
            <a target="_blank" href={itemData.Href} className="acs-tablebulk-serviceitem">
            <span className="acs-serviceitem-itemicon"></span>
            <span className="acs-serviceitem-itemtitle">{itemData.Value}</span>
            </a>
        </div>
    }
}