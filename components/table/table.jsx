
export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            tableData:null
        }
    }
    
    componentWillMount(){
        this.setState({
            tableData:this.props.listData
        });
    }


    render() {
        let {titleData,listData} = this.props;
        let headList = <div className="acs-table-titlehead">{titleData.map((item)=>{
               let titleValue = item.value;
               if(item.value === "Request Type"){
                   item.value = "Title";
               }
               else{
                    item.value = item.value.replace(/\s+/g,"");
               }
                return <div style={{width:item.width+"%"}}>{titleValue}</div>
            })}</div>;
        let dataList = listData.map((dataItem,index)=>{
            return <div className="acs-table-row" style={{"backgroundColor":index%2===0?"#f2f4f6":"#fff"}}>
                        { React.Children.map(this.props.children, (item, i) => {
                            let width = document.body.clientWidth > 768?titleData[i].width:100;
                            return React.cloneElement(item, {
                                itemData:dataItem[titleData[i].value],
                                itemWidth:width,
                                itemTitle:titleData[i].value
                            });
                        })}
                    </div>
            });
       
        return (
          <div className="acs-table">
            {headList}
            {dataList}
          </div>
        )
    }
}
