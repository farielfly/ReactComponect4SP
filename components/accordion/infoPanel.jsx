export default class DivisionDetail extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.infoData === null){
            return null;
        }
        else{
            return(
                <div className="acs-infopanel">
                    <div className="acs-infopanel-head">
                        <div className="acs-infohead-titlecontent">
                            <div>{this.props.commonTitle}</div>
                            <div className="acs-infohead-title">{this.props.infoData.title}</div>
                        </div>
                        <div className="acs-infohead-description">{this.props.infoData.description}</div>  
                    </div>
                    {this.props.children}
                    <a className="acs-jumplink" href={this.props.infoData.link}>{this.props.commonDes}</a>
                </div>
            )
        }
    }
}
