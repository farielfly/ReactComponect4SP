export default class StringCell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       return <div className="acs-table-stringcell" style={{width:this.props.itemWidth+"%"}}><span>{this.props.itemData}</span></div>
    }
}
