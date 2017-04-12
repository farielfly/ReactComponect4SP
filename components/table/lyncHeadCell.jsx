export default class LyncHeadCell extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        let itemData = this.props.itemData;

        return <div>
                    <span className="ms-imnSpan">
                        <a href="javascript:void(0)" className="ms-imnlink ms-spimn-presenceLink">
                            <span className="ms-spimn-presenceWrapper ms-spimn-imgSize-8x72">
                                <img className="acs-headpic-statue" name='imnmark' title='' ShowOfflinePawn='1' className="ms-spimn-img ms-spimn-presence-disconnected-8x72x32" src="/_layouts/15/images/spimn.png?rev=23" alt='User Presence' data-sip={itemData.Email} id={"imn_"+itemData.ItemId+",type=sip"} />
                            </span>
                        </a>
                    </span>
                    <div className="acs-headpic-picture">
                        <img src={itemData.Photo} alt=""/>
                    </div>
                    <div className="acs-headpic-personinfo">
                        <div>{itemData.Name}</div>
                        <div>Department: {itemData.Department}</div>
                    </div>
                </div>
    }
}