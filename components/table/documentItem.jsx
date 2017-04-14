export default class DocumentItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let itemData = this.props.itemData;
        return <div className="acs-tablebulk-documentitem">
            <a target="_blank" href={itemData.Href} className="acs-documentitem-title">
                <span className="acs-documentitem-itemicon"></span>
                <span className="acs-documentitem-itemtitle">{itemData.Value}</span>
            </a>
            <div className="acs-documentitem-description">
                <span>{itemData.Href}</span>
            </div>
        </div>
    }
}
