export default class TableBulk extends React.Component {
    constructor(props) {
        super(props);
    }

    creatList(){
        let {columnCount, listData} = this.props;
        let tempList = [],tempLeft=[],tempRight=[];
        if(columnCount>1){
            for(var i= 0 ; i<listData.length;i++)
            {
                if(i%2 === 0){
                    tempLeft.push(listData[i]);
                }
                else{
                    tempRight.push(listData[i]);         
                }
            }
            tempList.push(tempLeft,tempRight);
        }
        else{
            tempList[0] = listData;
        }
        return tempList;
    }

    render() {
        let tempData = this.creatList();
        let tableDescription = this.props.tableDesc
        let dataDiv = tempData.map((itemList,arrIndex)=>{
                return <div key={"list"+arrIndex} className={tempData.length>1?"acs-tablebulk-twolist":"acs-tablebulk-onelist"}>
                    {itemList.map((item)=>{
                        return React.cloneElement(this.props.children, {
                                itemData:item
                            });
                    })}
                </div>
        });
        let descriptionDiv = tableDescription.hasTableDesc?<div className="acs-tablebulk-description">{tableDescription.content}</div>:null;

        return <div className="acs-tablebulk">
            {descriptionDiv}
            {dataDiv}
        </div>
    }
}
