export default class ArticleLike extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mLikes: props.like, mHasLiked: props.hasLiked }
        this.likeClicked.bind(this);
    }

    likeClicked(event) {
        var likes = this.state.mHasLiked ? this.state.mLikes - 1 : this.state.mLikes + 1;
        var hasLiked = this.
        this.setState({ mLikes: likes, mHasLiked: !mHasLiked });

    }

    render() {
        var likes = this.state.mLikes;
        return (
            <div className={"acs-articleframe-like"}>
                <div className={"acs-articleframe-like-icon"} onClick={this.likeClicked}></div>
                <div className={"acs-articleframe-like-title"}>{likes}</div>
            </div>
        );
    }
}