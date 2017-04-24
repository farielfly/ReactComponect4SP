export default class DocumentItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let itemData = this.props.itemData;
        return <div className="acs-tablebulk-documentitem">
            <a target="_blank" href={itemData.ItemUrl} className="acs-documentitem-title">
                <span className="acs-documentitem-itemicon">
                    <img src={itemData.IconUrl}/>
                </span>
                <span className="acs-documentitem-itemtitle">{itemData.Title}</span>
            </a>
            <div className="acs-documentitem-description">
                <span>{itemData.Description}</span>
            </div>
        </div>
    }
}
