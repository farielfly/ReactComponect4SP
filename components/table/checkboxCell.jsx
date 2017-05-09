export default class CheckboxCell extends React.Component {
    constructor(props) {
        super(props);
    }

    selectFun(){
        this.props.selectFun();
    }


    render() {
        let {itemWidth,itemData} = this.props;
        return (
          <div style={{width:itemWidth+"%",display:"inline-block"}}>
                <input className="acs-checkbox" type="checkbox" name="checkbox" id={itemData} onChange={this.selectFun.bind(this)}/>
          </div>
        )
    }
}
