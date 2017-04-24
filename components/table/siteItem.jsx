export default class SiteItem extends React.Component{
    constructor(props){
        super(props);
    }

    stopFollowing(){

    }

    render(){
        let itemData = this.props.itemData;
        return <div className="acs-tablebulk-siteitem">
            <a target="_blank" href={itemData.ItemUrl} className="acs-siteitem-title">
                <span className="acs-siteitem-itemicon"></span>
                <span className="acs-siteitem-itemtitle">{itemData.Title}</span>
            </a>
            <div className="acs-siteitem-description">
                <span>{itemData.Description}</span>
            </div>
        </div>
    }
}
// <span onClick={this.stopFollowing.bind(this)}>Stop Following</span>