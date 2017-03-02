export default class PeopleInfo extends React.Component{

    constructor(props){
        super(props);
    }

    IMNImageClick(event){
        //IMNImageOnClick(event);
        return false;
    }

    render(){

        var userPhoto = "/_layouts/15/images/APPSSP2013MASTERKONG/photo.png";
        //if (this.props.chiefUser.UserPhotoUrl) {
        //    userPhoto = this.props.chiefUser.UserPhotoUrl;
        //}
        var cheifuser = this.props.chiefUser;

        return (
            <div className="acs-division-cheifuser" id={cheifuser.Id}>
                <div className="acs-cheifuser-title">
                    <span>
                        <a href='#' onClick={this.IMNImageClick(event)} className="ms-imnlink" tabIndex='-1'>
                            <img name='imnmark' title='' ShowOfflinePawn='1' className="ms-hide" src="/_layouts/15/images/spimn.png?rev=23" alt='User Presence' sip={this.props.chiefUser.Email} id="imn_1,type=sip" />
                        </a>
                        <span>
                            <img style={{width:"62px",height:"62px"}} src="" alt=""/>
                        </span>
                    </span>
                </div>

                <div className="acs-cheifuser-detail">
                    <div><span>Designation:</span><span>{cheifuser.Designation}</span></div>
                    <div><span>Email:</span><span>{cheifuser.Emaiil}</span></div>
                    <div><span>Office Contact Number:</span><span>{cheifuser.OfficeNumber}</span></div>
                    <div><span>Mobile Number:</span><span>{cheifuser.PhoneNumber}</span></div>
                    <div><span>Office Location:</span><span>{cheifuser.Location}</span></div>
                    <div><span>Reporting Officer:</span><span>{cheifuser.Reporter}</span></div>
                    <div><span>Convering People:</span><span>{cheifuser.People}</span></div>
                    <div><span>Ask me about:</span><span>{cheifuser.AskAbout}</span></div>
                </div>
            </div>
            )
    }
}
