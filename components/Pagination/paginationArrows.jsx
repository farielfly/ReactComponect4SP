export default class PaginationArrows extends React.Component {
    constructor(props){
        super(props);
        this.state={
            canPre:false,
            canNext:true
        }

    }

    turnLeft(option){
        if(this.props.currentPage !== 1){
            this.props.turnPage(option);
        }
    }

    turnRight(option){
        if(this.props.currentPage * this.props.countInPage < this.props.totalItems){
            this.props.turnPage(option);
        }
    }

    render(){
        let {countInPage,totalItems,currentPage} = this.props;
        let startItem  = (currentPage - 1) * countInPage + 1,endItem = currentPage * countInPage;


        return <div className="acs-turningframe-turnpanel">
                    <div className="acs-turnpanel-statistics">{startItem}-{endItem} of {totalItems}</div>
                    <div className="acs-turnpanel-turnbtn">
                        <span className={this.state.canPre?"acs-turnbtn-pre":"acs-turnbtn-dispre"} onClick={this.turnLeft.bind(this,-1)}>L</span>
                        <span className={this.state.canNext?"acs-turnbtn-next":"acs-turnbtn-disnext"} onClick={this.turnRight.bind(this,1)}>R</span>
                    </div>
                </div>
    }

}
