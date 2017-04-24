import CheckboxCell from './checkboxCell.jsx';
export default class TableWithCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selectedItems:[]
        }
    }
    componentWillReceiveProps(nextProps){
        this.state.selectedItems.length = 0;
        let items = document.getElementsByName('checkbox');
        for(var i=items.length-1;i>-1;i--){
            items[i].checked = false;
        }
    }

    selectAllAction(){
        let items = document.getElementsByName('checkbox');
        if(items[0].checked){
            this.state.selectedItems = global.totalItems.slice(0,global.totalItems.length);
            for(var i=items.length-1;i>0;i--){
                items[i].checked = true;
            }
        }
        else{
            this.state.selectedItems.length = 0;
            for(var i=items.length-1;i>0;i--){
                items[i].checked = false;
            }
        }
    }

    selectAction(index){
       let items = this.refs.checkbox || document.getElementsByName('checkbox');
       let num = index+1;
       if(items[num].checked){
           this.state.selectedItems.push(global.totalItems[index]);
           var tempCount = 0;
           for(var i=items.length-1;i>0;i--){
                if(items[i].checked === true){
                    tempCount++;
                }
            }
            if(tempCount === 5){
                items[0].checked = true;
            }
       }
       else{
            let pageItems = this.state.selectedItems;
           for(var i=0;i<pageItems.length;i++){
               if(items[num].id === pageItems[i]["RequestType"]){
                   items[0].checked = false;
                   var tempa = pageItems.slice(0,i);
                   var tempb = pageItems.slice(i+1,pageItems.length);
                   pageItems.push(tempa,tempb);
                   break;
               }
           }
           this.state.selectedItems = pageItems;
       }
    }

    render() {
        global.totalItems = this.props.listData;
        let {titleData,listData} = this.props;
        let headList = <div className="acs-table-titlehead">
                            <CheckboxCell itemWidth={10} selectFun={this.selectAllAction.bind(this)} itemData={-1}></CheckboxCell>
                            {titleData.map((item)=>{               
                                return <div style={{width:"20%"}}>{item.Value}</div>
                            })}
                        </div>;
                        
        let dataList = listData.map((dataItem,index)=>{
            let reactThis = this;
            return <div key={'listdiv'+index} className="acs-table-row" style={{"backgroundColor":index%2===0?"#f2f4f6":"#fff"}}>
                        { React.Children.map(this.props.children, (item, i) => {
                            let width = document.body.clientWidth > 768?20:100;
                            if(i===0){
                                return React.cloneElement(item, {
                                    itemData:dataItem["RequestType"],
                                    itemWidth:width,
                                    selectFun:reactThis.selectAction.bind(this,index)
                                });
                            }
                            else{
                                 return React.cloneElement(item, {
                                    itemData:dataItem[titleData[i-1].Key],
                                    itemWidth:width,
                                    itemTitle:titleData[i-1].Value
                                });
                            }
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

