import CheckboxCell from './checkboxCell.jsx';

export default class TemplateTable extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            listData:this.props.listData,
            selectedItems:[]
        }
    }

    componentWillReceiveProps(nextProps){
        this.state.selectedItems.length = 0;
        let items = document.getElementsByName('checkbox');
        for(var i=items.length-1;i>-1;i--){
            items[i].checked = false;
        }
        this.setState({
            listData:nextProps.listData
        })
    }

    finalSelect(){
        let itemsString = "";
        this.state.selectedItems.map((item)=>{
            itemsString += item.ItemId+";";
        });
        let tempJudg = this.state.selectedItems.length===1?true:false;
        this.props.selectItems(itemsString,tempJudg);
    }

    selectAllAction(){
        let divmodule = document.getElementById(this.props.divModule);
        let items = divmodule.getElementsByClassName('acs-checkbox');
        if(items[0].checked){
            this.state.selectedItems = this.props.listData.slice(0,this.props.listData.length);
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
        this.finalSelect();
    }

    selectAction(index){
       let divmodule = document.getElementById(this.props.divModule);
        let items = divmodule.getElementsByClassName('acs-checkbox');
       let num = index+1;
       if(items[num].checked){
           this.state.selectedItems.push(this.props.listData[index]);
           var tempCount = 0;
           for(var i=items.length-1;i>0;i--){
                if(items[i].checked === true){
                    tempCount++;
                }
            }
            if(tempCount === items.length-1){
                items[0].checked = true;
            }
       }
       else{
            let pageItems = this.state.selectedItems;
           for(var i=0;i<pageItems.length;i++){
               if(items[num].id === pageItems[i][this.props.titleData[0].Key]){
                   items[0].checked = false;
                   var tempa = pageItems.slice(0,i);
                   var tempb = pageItems.slice(i+1,pageItems.length);
                   pageItems.push(tempa,tempb);
                   break;
               }
           }
           this.state.selectedItems = pageItems;
       }
       this.finalSelect();
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

    render() {
        global.totalItems = this.props.listData;
        let {titleData,listData,hasOrder,hasCheckBox} = this.props;
        let headList = <div className="acs-table-titlehead">
                            {titleData.map((item,index)=>{   
                                  if(hasCheckBox && index===0){
                                      return <CheckboxCell itemWidth={item.Width} selectFun={this.selectAllAction.bind(this)} itemData={-1}></CheckboxCell>
                                  }
                                if(hasOrder){
                                    return <div key={"headtitle"+index} style={{width:item.Width+"%"}}><span>{item.Value}</span> 
                                        <div className="acs-sort-btn">
                                            <p className="acs-ascending-btn" onClick={this.sortName.bind(this,true,item.Value)}></p>
                                            <p className="acs-descending-btn" onClick={this.sortName.bind(this,false,item.Value)}></p>
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
            let reactThis = this;
            return <div key={'listdiv'+index} className="acs-table-row" style={{"backgroundColor":index%2===0?"#f2f4f6":"#fff"}}>
                        { React.Children.map(this.props.children, (item, i) => {
                            let width = document.body.clientWidth > 768?titleData[i].Width:100;
                            if(hasCheckBox && i===0){
                                 return React.cloneElement(item, {
                                    itemData:dataItem[titleData[i].Key],
                                    itemWidth:width,
                                    selectFun:reactThis.selectAction.bind(this,index)
                                });
                            }
                            else{
                                return React.cloneElement(item, {
                                    itemData:dataItem[titleData[i].Key],
                                    itemWidth:width,
                                    itemTitle:titleData[i].Value
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

