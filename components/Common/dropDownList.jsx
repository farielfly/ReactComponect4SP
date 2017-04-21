export default class DropDownList extends React.Component{
  constructor(props) {
    super(props);
    this.state={
        droplistOpen:false
    }
  }

  selectOption(value){
      this.refs.selectInput.value = value;
      this.setState({droplistOpen:false});
      this.props.dropListFun(value,this.refs.searchInfo.value);
  }
  
  showList(){
      this.setState({droplistOpen:!this.state.droplistOpen});
  }

  createList(data){
      let items=null;
      if(data === null){
          items = [{value:'Pending'},{value:'Approved'},{value:'Rejected'}]
      }
      else{
          items = data;
      }
      
      var reactThis = this;
      var dropList = items.map((item)=>{
          return <div onClick={this.selectOption.bind(reactThis,item.value)}>
                      {item.value}
                  </div>
      });
      return dropList;
  }
  
  render() {
      let {listData, defaultValue}
     let listItems = this.createList(listData);
      return <div>
                  <div className="acs-dropdown-selectedvalue"><input ref="selectInput"  placeholder={defaultValue} disabled="disabled"/><span onClick={this.showList.bind(this)}>v</span></div>
                  <div className="acs-dropdown-list" style={{height:this.state.droplistOpen?"auto":"0"}}>
                      {listItems}
                  </div>
              </div>;
  }
}
