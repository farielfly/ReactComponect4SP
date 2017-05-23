export default class AjaxButtonCell extends React.Component {
    constructor(props) {
        super(props);
    }

    buttonAction(){
        this.props.tableOperation(this.props.itemData.Url,this.props.itemData.Parameter);
    }


    render() {
        let {itemData} = this.props;
        return (
          <div className="acs-turningframe-operationbtn" onClick={this.buttonAction.bind(this)}>
                {this.props.itemData.Name}
          </div>
        )
    }
}
