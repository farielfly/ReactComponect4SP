export default class PeopleInfo extends React.Component{

    constructor(props){
        super(props);
    }

    IMNImageClick(event){
        //IMNImageOnClick(event);
        return false;
    }

    render(){
        if(this.props.personData.length === 0 || this.props.photoLink === null)
        return null;
        
        var userPhoto = "/_layouts/15/images/APPSSP2013MASTERKONG/photo.png";
        let chiefuser = this.props.personData,linkinfo = this.props.photoLink.ChiefUser;
       

        return (
            <div className="acs-personinfo" >
                <div className="acs-personinfo-headpic">
                    <span>
                        <div className="acs-headpic-pictute">
                            <img src={linkinfo.Photo} alt=""/>
                        </div>
                    </span>
                    <span className="ms-imnSpan">
                        <a href="javascript:void(0)" onClick={this.IMNImageClick(event)} className="ms-imnlink ms-spimn-presenceLink">
                            <span className="ms-spimn-presenceWrapper ms-imnImg ms-spimn-imgSize-10x10">
                                <img className="acs-headpic-statue" name='imnmark' title='' ShowOfflinePawn='1' className="ms-spimn-img ms-spimn-presence-offline-10x10x32" src="/_layouts/15/images/spimn.png?rev=23" alt='User Presence' sip={linkinfo.Email} id={linkinfo.ItemId+",type=sip"} />
                            </span>
                        </a>
                    </span>
                    <span>{linkinfo.Name}</span>
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

