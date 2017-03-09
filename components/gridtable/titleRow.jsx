export default class TitleRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {data} = this.props;
        return (
             <div className="acs-table-head">
               {
                   data.map((item,index)=>{
                        return (
                            <div style={{width:item.width+"%"}} key={"column"+index}>
                                <span>{item.name}</span>
                            </div>
                        )
                    })
               } 
            </div>
        );
    }
}
