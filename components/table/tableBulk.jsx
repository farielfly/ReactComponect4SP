export default class TableBulk extends React.Component {
    constructor(props) {
        super(props);
    }

    creatList(){
        let {countInColumn, columnCount, listData} = this.props;
        let tempList = [];
        for(var i=0;i<columnCount;i++){
            tempList[i] = listData.slice(countInColumn*i,countInColumn*(i+1));
        }
        return tempList;
    }

    render() {
        let tempData = this.creatList();
        let dataDiv = tempData.map((itemList,arrIndex)=>{
                return <div key={"list"+arrIndex} className={tempData.length>1?"acs-tablebulk-twolist":"acs-tablebulk-onelist"}>
                    {itemList.map((item)=>{
                        return React.cloneElement(this.props.children, {
                                itemData:item
                            });
                    })}
                </div>
        })

        return <div className="acs-tablebulk">
            {dataDiv}
        </div>
    }
}
