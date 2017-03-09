export default class ArticlePicture extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { picturePath } = this.props;

        return (
                <div className={"acs-articleframe-picture"}>
                    <img src={picturePath}></img>
                </div>
        );
    }
}