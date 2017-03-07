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
              <div className="acs-content-links" key={"acccontent"+index}>
                {
                    acc.Children.map((link,index)=>{
                        return (
                            <a href={link.Url} key={"link" + index}>
                                <span></span>
                                <span>{link.DepartmentName}</span>
                            </a>
                        )
                    })
                }
               </div>
           )
       });
       var tempData= [];
       if(this.state.informationPanel !==null)
          {
            var propsData = this.state.informationPanel.Properties;
            for(var i=0 ;i<propsData.length;i++){
                var temp = propsData[i].split(" : ");
                tempData.push({
                    "key":temp[0],
                    "value":(typeof temp[1] !== 'undefined'?temp[1]:'')
                    })
            }
          }  

        var infoPanel = !this.props.hasPanel?null:(<InfoPanel infoData={this.state.informationPanel} commonTitle={"Detail of Division"} commonDes={"Go to see Staff Directory information"}>
                    <ChiefUser personData={tempData} photoLink={this.state.informationPanel}/>
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
