export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            listData:this.props.listData
        }
    }
    sortName(isAscending,name){
        var ascArr = null,descArr = null;
        if(isAscending){
            ascArr = this.state.listData.sort((a, b)=>{
                    if(a[name].toLowerCase() < b[name].toLowerCase()){
                        return -1;
                    }
                    if(a[name].toLowerCase() > b[name].toLowerCase()){
                        return 1;
                    }
                    return 0;
                });
            this.setState({
                listData:ascArr
            });
        }
        else{
            descArr =this.state.listData.sort((a,b)=>{
                    if(a[name].toLowerCase() < b[name].toLowerCase()){
                        return 1;
                    }
                    if(a[name].toLowerCase() > b[name].toLowerCase()){
                        return -1;
                    }
                    return 0;
                });  
            this.setState({
                listData:descArr
            });
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            listData:nextProps.listData
        })
    }


    render() {
        let {titleData,listData,hasOrder} = this.props;
        let headList = <div className="acs-table-titlehead">{titleData.map((item,index)=>{     
                            if(hasOrder){
                                return <div key={"headtitle"+index} style={{width:item.Width+"%"}}><span>{item.Value}</span> 
                                    <div className="acs-sort-btn">
                                        <p className="acs-ascending-btn" onClick={this.sortName.bind(this,true,"RequestType")}>^</p>
                                        <p className="acs-descending-btn" onClick={this.sortName.bind(this,false,"RequestType")}>v</p>
                                    </div>
                                </div>
                            }
                            else{
                                return <div key={"headtitle"+index} style={{width:item.Width+"%"}}><span>{item.Value}</span> 
                                </div>
                            }
                            })}
                        </div>;
                        
        let dataList = this.state.listData.map((dataItem,index)=>{
            return <div key={'listdiv'+index} className="acs-table-row" style={{"backgroundColor":index%2===0?"#f2f4f6":"#fff"}}>
                        { React.Children.map(this.props.children, (item, i) => {
                            let width = document.body.clientWidth > 768?20:100;
                            return React.cloneElement(item, {
                                itemData:dataItem[titleData[i].Key],
                                itemWidth:width,
                                itemTitle:titleData[i].Value
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
