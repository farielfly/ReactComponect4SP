
export default class JsActionButtonCell extends React.Component {
    constructor(props) {
        super(props);
    }

    buttonAction(){
        this.props.itemData.Action();
    }


    render() {
        return (
          <div className="acs-turningframe-operationbtn" onClick={this.buttonAction.bind(this)}>
                {this.props.itemData.Name}
          </div>
        )
    }
}
