import LinkItem from './linkItem.jsx';

export default class AccordionFrame extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active:this.props.division.isOpen
        }
    }

    componentWillMount(){
        if(this.props.division.isOpen){
            this.setState({
                active:true
            });
        }
    }


    handleShow(){
        if(!this.state.active){
            this.setState({
                active:true
            });
            this.props.detailEvent(this.props.division,true);
        }
        else{
            this.setState({
                active:false
            });
            this.props.detailEvent(null,false);
        }
    }

    render(){
        return (
                <div className="acs-division-item">
                    <div className="acs-divisionitem-head" onClick={this.handleShow.bind(this)}>
                        <span>Arrow</span>
                        <span className="acs-divisionhead-title">{this.props.division.title}</span>
                    </div>
                    <div className="acs-divisionitem-content " style={{height:this.state.active?"120px":"0"}}>
                        {this.props.division.children.map((item,index)=>{
                            return(
                                <LinkItem itemData={item} />
                            )
                        })}
                    </div>
                </div>
            )
    }
            }
