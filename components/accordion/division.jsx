import DivisionDetail from './divisionDetail.jsx';
import ExpandedView from './accordision.jsx';

export default class Division extends React.Component{
    constructor(props){
        super(props);
        this.state={
            divisionDetail:null,
            showDetail:false,
            expanded:this.props.expanded
        }
    }

    
    handleDataClick(object,isShow){
        this.setState({
            divisionDetail:object,
            showDetail:isShow
        });
    }

    render(){
        return (
            <div >
                <div className="acs-division-leftpart">
                    {this.props.data.map((dataitem,index)=>{
                        return( 
                            <ExpandedView ref="expandedBtn" division={dataitem} detailEvent={this.handleDataClick.bind(this)}/>
                            )
                    })}
                </div>
                <div style={{display:this.state.showDetail?"block":"none"}} className="acs-division-rightpart">
                    <DivisionDetail  detail={this.state.divisionDetail}></DivisionDetail>
                </div>
                </div>
            )
    
    }
}
