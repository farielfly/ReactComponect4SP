import InfoPanel from './infoPanel.jsx';
import Accordion from './accordion.jsx';
import ChiefUser from './peopleInfo.jsx';


export default class AccordionComplex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            informationPanel: null,
            showInformation: false,
        }
    }

  

    handleDataClick(object, isShow) {
        this.setState({
            informationPanel: object,
            showInformation: isShow
        });
    }

    render() {
         var children = this.props.data.map((acc,index)=>{
           return (
              <div key={"acccontent"+index}>
                {
                    acc.children.map((link,index)=>{
                        return (
                            <a href={link.href} key={"link" + index}>
                                <span></span>
                                <span>{link.title}</span>
                            </a>
                        )
                    })
                }
               </div>
           )
       });
        var infoPanel = !this.props.hasPanel?null:(<InfoPanel infoData={this.state.informationPanel} commonTitle={"ttteee"} commonDes={"dfsdfs"}>
                    <ChiefUser chiefUser={this.state.informationPanel}/>
                </InfoPanel>)

        return (
            <div className="acs-accordioncomplex">
                <Accordion data={this.props.data} hasPanel={this.props.hasPanel} informationEvent={this.handleDataClick.bind(this)}>
                    {children}
                </Accordion>
                {infoPanel}
            </div>
        )
    }
}
