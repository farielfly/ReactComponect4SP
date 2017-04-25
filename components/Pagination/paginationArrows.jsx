export default class PaginationArrows extends React.Component {
    constructor(props){
        super(props);
        this.state={
            canPre:false,
            canNext:true
        }

    }

    componentWillReceiveProps(nextProps){
        if(nextProps.currentPage * nextProps.countInPage < nextProps.totalCount){
             this.state.canNext = true;
        }
        else{
            this.state.canNext = false;
        }
        if(nextProps.currentPage !== 1){
            this.state.canPre = true;
        }else{
            this.state.canPre = false;
        }
    }

    turnLeft(option){
        if(this.props.currentPage !== 1){
            this.props.turnPage(option);
        }
    }

    turnRight(option){
        if(this.props.currentPage * this.props.countInPage < this.props.totalCount){
            this.props.turnPage(option);
        }
    }

    render(){
        let {countInPage,totalCount,currentPage} = this.props;
        let startItem  = totalCount===0?0:(currentPage - 1) * countInPage + 1,endItem = currentPage * countInPage >totalCount?totalCount:currentPage * countInPage;


        return <div className="acs-turningframe-turnpanel">
                    <div className="acs-turnpanel-statistics">{startItem}-{endItem} of {totalCount}</div>
                    <div className="acs-turnpanel-turnbtn">
                        <span className={this.state.canPre?"acs-turnbtn-pre":"acs-turnbtn-dispre"} onClick={this.turnLeft.bind(this,-1)}></span>
                        <span className={this.state.canNext?"acs-turnbtn-next":"acs-turnbtn-disnext"} onClick={this.turnRight.bind(this,1)}></span>
                    </div>
                </div>
    }

}
