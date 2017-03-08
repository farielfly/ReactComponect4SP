export default class ListFrame extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let {title,hasPager}=this.props;

        return (
            <div className="acs-listframe">
                <div className="acs-listframe-title">
                    <span>{this.props.title}</span>
                </div>
                <div className="acs-listframe-content">
                    {this.props.chidren}
                </div>
            </div>
        );
    }
}