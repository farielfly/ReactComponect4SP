export default class LyncHeadCell extends React.Component{
    constructor(props){
        super(props);
    }

    clickPicture(url){
        window.open(url);
    }

    render(){
        let itemData = this.props.itemData;

        return <div className="acs-lynchead">
                    <span className="ms-imnSpan">
                        <a href="javascript:void(0)" className="ms-imnlink ms-spimn-presenceLink">
                            <span className="ms-spimn-presenceWrapper ms-spimn-imgSize-8x72">
                                <img className="acs-headpic-statue" name='imnmark' title='' ShowOfflinePawn='1' className="ms-spimn-img ms-spimn-presence-disconnected-8x72x32" src="/_layouts/15/images/spimn.png?rev=23" alt='User Presence' data-sip={itemData.Email} id={"imn_"+itemData.ItemId+",type=sip"} />
                            </span>
                        </a>
                    </span>
                    <div className="acs-lynchead-headpicture" onClick={this.clickPicture.bind(this,itemData.Href)}>
                        <img src={itemData.Photo} alt=""/>
                    </div>
                    <div className="acs-lynchead-personinfo">
                        <div>{itemData.Name}</div>
                        <div>Department: {itemData.Title}</div>
                    </div>
                </div>
    }
}