import InfoPanel from './infoPanel.jsx';
import Accordion from './accordion.jsx';
import ChiefUser from './peopleInfo.jsx';

export default class AccordionComplex extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            informationPanel: this.props.data[0]
        }
    }

  

    handleDataClick(object) {
        this.setState({
            informationPanel: object
        });
    }

    render() {
        let {data, hasPanel} = this.props;

         let children = data.map((acc,index)=>{
           return (
              <div className="acs-content-links" key={"acccontent"+index}>
                {
                    acc.Items.map((link,index)=>{
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
       
        let tempData= [];
       if(this.state.informationPanel !==null && this.state.informationPanel.Properties !==null) 
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
          

        return (
            <div className="acs-accordioncomplex">
                <Accordion data={data} hasPanel={hasPanel} informationEvent={this.handleDataClick.bind(this)}>
                    {children}
                </Accordion>
                <InfoPanel infoData={this.state.informationPanel} commonTitle={"Detail of Division"} commonDes={"Go to see Staff Directory information"} hasPanel={hasPanel}>
                     <ChiefUser personData={tempData} photoLink={this.state.informationPanel} ></ChiefUser>
                </InfoPanel>
            </div>
        )
    }
}
