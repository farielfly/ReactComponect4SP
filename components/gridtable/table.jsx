import Row from './row.jsx';
import Columns from './titleRow.jsx';
export default class TableRow extends React.Component {
    constructor(props) {
        super(props);
    }

    arrangeData(data){
        var newData = [];
        data.map((item)=>{
            newData.push(item.width)
        })
        return newData;
    }

    render() {
        let {data,column} = this.props;
        let widthData = this.arrangeData(column);
        return (
          <div className="acs-table">
            <Columns data={column}/>
              <div className="acs-table-body">
                    {
                        data.map((item,index)=>{
                           return <Row data={item} columnWidth={widthData}/>
                        })
                    }
              </div>
          </div>
        );
    }
}
