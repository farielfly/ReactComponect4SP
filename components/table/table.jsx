export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        let {titleData,listData} = this.props;
        let headList = <div className="acs-table-titlehead">{titleData.map((item)=>{               
                            return <div style={{width:"20%"}}>{item.Value}</div>
                            })}
                        </div>;
                        
        let dataList = listData.map((dataItem,index)=>{
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
