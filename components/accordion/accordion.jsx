import AccordionFrame from './accordionFrame.jsx';

export default class Accordion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="acs-accordion">
                {this.props.data.map((item,index)=>{
                    return <AccordionFrame key={"accordion" +index} accordionData={item} itemHeight={60} hasInfoPanel={this.props.hasPanel} informationEvent={this.props.informationEvent}>
                    {this.props.children[index]}
                    </AccordionFrame>
                })}
            </div>
        )
    }
}
