export default class ArticleHeadline extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { headline } = this.props;

        return (
            <div className={"acs-articleframe-headline"}>{headline}</div>
        );
    }
}