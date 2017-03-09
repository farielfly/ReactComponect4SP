export default class ArticleIntro extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { intro } = this.props;

        return (
            <div className={"acs-articleframe-intro"}>{intro}</div>
        );
    }
}