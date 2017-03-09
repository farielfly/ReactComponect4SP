export default class ArticleTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { title, iconPath, link} = this.props;

        return (
            <div className={"acs-articleframe"} >
                <div className={"acs-articleframe-header"}>
                    <div className={"acs-articleframe-header-icon"}></div>
                    <div className={"acs-articleframe-header-title"}>{title}</div>
                </div>
                {this.props.children}
            </div>
        );
    }
}