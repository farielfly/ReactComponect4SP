import AccordionFrame from './accordionFrame.jsx';

export default class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            index:0,
            isOpen:true
        }
    }

    handlClick(index , ev) {
        if(index !== this.state.index){
            this.setState({
                index : index,
                isOpen:true
            });
            this.props.informationEvent(this.props.data[index]);
        }
        else{
            this.setState({
                isOpen:!this.state.isOpen
            },function(){
                this.props.informationEvent(this.state.isOpen?this.props.data[index]:null);
            })
        }
    }

    render() {
        return (
            <div className="acs-accordion">
                {this.props.data.map((item,index)=>{
                    return <AccordionFrame key={"accordion" +index} accordionData={item} itemHeight={60} hasInfoPanel={this.props.hasPanel} 
                    informationEvent={this.props.informationEvent} expandEvent={this.handlClick.bind(this,index)} expandActive={this.state.index == index && this.state.isOpen}>
                    {this.props.children[index]}
                    </AccordionFrame>
                })}
            </div>
        )
    }
}
