export default class ArticleLike extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { like } = this.props;

        return (
            <div className={"acs-articleframe-like"}>
                <div className={"acs-articleframe-like-icon"}></div>
                <div className={"acs-articleframe-like-title"}>{like}</div>
            </div>
        );
    }
}