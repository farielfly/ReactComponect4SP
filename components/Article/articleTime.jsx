export default class ArticleTime extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { time } = this.props;

        return (
            <div className={"acs-articleframe-time"}>
                <div className={"acs-articleframe-time-icon"}></div>
                <div className={"acs-articleframe-time-title"}>{time}</div>
            </div>
        );
    }
}