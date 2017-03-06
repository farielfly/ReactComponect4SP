export default class PeopleInfo extends React.Component{

    constructor(props){
        super(props);
    }

    IMNImageClick(event){
        //IMNImageOnClick(event);
        return false;
    }

    render(){
        if(this.props.personData.ChiefUser ===null)
        return null;
        
        var userPhoto = "/_layouts/15/images/APPSSP2013MASTERKONG/photo.png";
        //if (this.props.chiefUser.UserPhotoUrl) {
        //    userPhoto = this.props.chiefUser.UserPhotoUrl;
        //}

        //<div><span>Office Location:</span><span>{chiefuser.Location}</span></div>
//<div><span>Reporting Officer:</span><span>{chiefuser.Reporter}</span></div>
//<div><span>Convering People:</span><span>{chiefuser.People}</span></div>
        let chiefuser = this.props.personData.ChiefUser;

        return (
            <div className="acs-personinfo" >
                <div className="acs-personinfo-headpic">
                    <span>
                        <a href='#' onClick={this.IMNImageClick(event)} className="ms-imnlink" tabIndex='-1'>
                            <img className="acs-headpic-statue" name='imnmark' title='' ShowOfflinePawn='1' className="ms-hide" src="/_layouts/15/images/spimn.png?rev=23" alt='User Presence' sip={chiefuser.Email} id="imn_1,type=sip" />
                        </a>
                        <span>
                            <img className="acs-headpic-pictute"  src={chiefuser.Photo} alt=""/>
                        </span>
                    </span>
                </div>

                <div className="acs-personinfo-introduction">
                    <div><span>Designation:</span><span>{chiefuser.Designation}</span></div>
                    <div><span>Email:</span><span>{chiefuser.Email}</span></div>
                    <div><span>Office Contact Number:</span><span>{chiefuser.ContactMe}</span></div>
                    <div><span>Mobile Number:</span><span>{chiefuser.MyMobile}</span></div>
                    <div><span>Ask me about:</span><span>{chiefuser.Hobbies}</span></div>
                </div>
            </div>
            )
    }
}

