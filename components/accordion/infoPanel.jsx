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
                    <div>
                        <div>
                            <div>{this.props.commonTitle}</div>
                            <div>{this.props.infoData.title}</div>
                        </div>
                        <span>{this.props.infoData.description}</span>  
                    </div>
                    {this.props.children}
                    <div><span></span><a href={this.props.infoData.link}>{this.props.commonDes}</a></div> 
                </div>
            )
        }
    }
}
