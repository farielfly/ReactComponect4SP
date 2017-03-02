export default class LinkItem extends React.Component{
    constructor(props){
          super(props);
      }
      
     render(){
        return(
          <a href={this.props.itemData.href} key={index}>
              <span></span>
              <span>{this.props.itemData.title}</span>
          </a>
        )
     } 
      
}
