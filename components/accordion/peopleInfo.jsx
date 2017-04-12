export default class PeopleInfo extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.personData.length === 0 || this.props.photoLink === null)
        return null;
        
        let userPhoto = "/_layouts/15/images/APPSSP2013MASTERKONG/photo.png";
        let chiefuser = this.props.personData;
        let linkinfo = this.props.photoLink.ChiefUser;
       

        return (
            <div className="acs-personinfo" >
                <div className="acs-personinfo-headpic">
                        <div className="acs-headpic-pictute">
                     <a href={linkinfo.MySite} target="_blank"><img src={linkinfo.Photo} alt="" /></a>
                        </div>
                    <span className="ms-imnSpan">
                        <a href="javascript:void(0)" className="ms-imnlink ms-spimn-presenceLink">
                            <span className="ms-spimn-presenceWrapper ms-imnImg ms-spimn-imgSize-10x10">
                                <img className="acs-headpic-statue" name='imnmark' title='' ShowOfflinePawn='1' className="ms-spimn-img ms-spimn-presence-offline-10x10x32" src="/_layouts/15/images/spimn.png?rev=23" alt='User Presence' data-sip={linkinfo.Email} id={"imn_"+linkinfo.ItemId+",type=sip"} />
                            </span>
                        </a>
                    </span>
                    <a href={linkinfo.MySite} target="_blank"><span>{linkinfo.Name}</span></a>
                </div>

                <div className="acs-personinfo-introduction">
                    {chiefuser.map((item,index)=>{
                        return (
                            <div key={"props"+index}><span>{item.key}</span><span>{item.value}</span></div>
                        )
                    })}
                   
                </div>
            </div>
            )
    }
}

