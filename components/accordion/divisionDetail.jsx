import ChiefUser from './peopleInfo.jsx';

export default class DivisionDetail extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.detail === null){
            return null;
        }
        else{
            return(
                <div>
                    <div className="acs-division-information">
                        <div>
                            <div>Detail of Division</div>
                            <div>{this.props.detail.title}</div>
                        </div>
                        <span>{this.props.detail.description}</span>  
                    </div>
                    <ChiefUser chiefUser={this.props.detail.cheifUser}/>
                    <div className="acs-division-stafflink"><span></span><a>Go to see Staff Directiory information</a></div> 
                </div>
            )
        }
    }
}
