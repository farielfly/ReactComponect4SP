
import ChiefUser from './peopleInfo.jsx';
export default class DivisionDetail extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        var tempData= [];
       if(this.props.infoData !==null)
          {
            var propsData = this.props.infoData.Properties;
            for(var i=0 ;i<propsData.length;i++){
                var temp = propsData[i].split(" : ");
                tempData.push({
                    "key":temp[0],
                    "value":(typeof temp[1] !== 'undefined'?temp[1]:'')
                    })
            }
          }  
          //

        if(this.props.infoData === null){
            return null;
        }
        else{
            return(
                <div className="acs-infopanel" style={{display:!this.props.hasPanel?'none':'block'}}>
                    <div className="acs-infopanel-head">
                        <div className="acs-infohead-commontitle">{this.props.commonTitle}</div>
                        <div className="acs-infohead-titlecontent">
                           <div className="acs-infohead-title">{this.props.infoData.Title}</div>
                           <div className="acs-infohead-description">{this.props.infoData.Description}</div>  
                        </div>
                        
                    </div>
                    <ChiefUser personData={tempData} photoLink={this.props.infoData} ></ChiefUser>
                    <div className="acs-jumplink"><div></div><a className="" href={this.props.infoData.Url}>{this.props.commonDes}</a></div>
                    
                </div>
            )
        }
    }
}
