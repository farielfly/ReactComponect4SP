export default class DropDownList extends React.Component{
  constructor(props) {
    super(props);
  }

  selectOption(value){
      this.refs.selectInput.value = value;
      this.setState({droplistOpen:false});
      this.props.searchFun(value,this.refs.searchInfo.value);
  }
  
  showList(){
      this.setState({droplistOpen:!this.state.droplistOpen});
  }

  createList(){
      var items = [{value:'Pending'},{value:'Approved'},{value:'Rejected'}]
      var reactThis = this;
      var dropList = items.map((item)=>{
          return <div onClick={this.selectOption.bind(reactThis,item.value)}>
                      {item.value}
                  </div>
      })
      return dropList;
  }
  
  render() {
     let listItems = this.createList();
      return <div className="acs-searchpanel-dropdown">
                  <div className="acs-dropdown-selectedvalue"><input ref="selectInput"  placeholder="Status" disabled="disabled"/><span onClick={this.showList.bind(this)}>v</span></div>
                  <div className="acs-dropdown-list" style={{height:this.state.droplistOpen?"auto":"0"}}>
                      {listItems}
                  </div>
              </div>;
  }
}
