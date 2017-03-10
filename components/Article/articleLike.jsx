export default class ArticleLike extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mLikes: props.like, mHasLiked: props.hasLiked }
    }

    likeClicked(event) {
        var likes = this.state.mHasLiked ? this.state.mLikes - 1 : this.state.mLikes + 1;
        var hasLiked = this.state.mHasLiked;
        this.setState({ mLikes: likes, mHasLiked: !hasLiked });

    }

    render() {
        var likes = this.state.mLikes;
        return (
            <div className={"acs-articleframe-like"}>
                <div className={"acs-articleframe-like-icon"} onClick={this.likeClicked.bind(this)}></div>
                <div className={"acs-articleframe-like-title"}>{likes}</div>
            </div>
        );
    }
}