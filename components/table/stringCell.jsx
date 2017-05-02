export default class StringCell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.itemData;
       let titleCell =  typeof item ==="object"?<a href={item.Href}><span>{item.Title}</span></a>:<span>{item}</span>;
       return <div className="acs-table-stringcell" style={{width:this.props.itemWidth+"%"}}>
       <span>{this.props.itemTitle+": "}</span>{titleCell}
       </div>
    }
}