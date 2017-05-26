export default class PaginationDataFrame extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let title = null;
        if(this.props.frameDesc === null){
            title=<div className="acs-turningframe-head" style={{height:"55px"}}>
                        <span>{this.props.frameTitle}</span>
                    </div>;
        }
        else{
            title =  <div className="acs-turningframe-head">
                        <div>{this.props.frameTitle}</div>
                        <div>{this.props.frameDesc}</div>
                    </div>;
        }
        return  <div className="acs-turningframe-contentbody acs-turningframe-contentborder">
                   {title}
                    <div className="acs-turningframe-datalist">
                    {this.props.children}
                    </div>
                </div>
    }

}
