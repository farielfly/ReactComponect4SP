export default class ArticleFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { title, iconPath, link, picturePath, headline, intro } = this.props;

        return (
            <div className={"acs-articleframe"}>
                <div className={"acs-articleframe-header"}>
                    <div className={"acs-articleframe-header-icon"}></div>
                    <div className={"acs-articleframe-header-title"}>{title}</div>
                </div>
                <div className={"acs-articleframe-picture"}>
                    <img src={picturePath}></img>
                </div>
                <div className={"acs-articleframe-headline"}>{headline}</div>
                <div className={"acs-articleframe-intro"}>{intro}</div>
            </div>
        );
    }
}