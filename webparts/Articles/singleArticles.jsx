import { render } from 'react-dom';
import $ from 'jquery';
import ArticleTitle from '../../components/article/articleTitle.jsx';
import ArticlePicture from '../../components/article/articlePicture.jsx';
import ArticleHeadline from '../../components/article/articleHeadline.jsx';
import ArticleIntro from '../../components/article/articleIntro.jsx';
import ArticleTime from '../../components/article/articleTime.jsx';
import ArticleLike from '../../components/article/articleLike.jsx';


export default class SingleArticle extends React.Component{
    constructor(props){
        super(props);
    }

    openItem(url){
        window.open(url);
    }

    render(){
        let {hasTitle,hasIntro,hasTime,hasLike,dataItem,itemWidth,colleUrl} = this.props;
        let intro = hasIntro ? (<ArticleIntro intro={dataItem.Intro}></ArticleIntro>) : null;
        let time = hasTime ? (<ArticleTime time={dataItem.Time}></ArticleTime>) : null;
        let like = hasLike ? (<ArticleLike like={dataItem.Like}></ArticleLike>) : null;

        
        return (
            <ArticleTitle title={dataItem.Title} width={itemWidth} hasTitle={hasTitle} partUrl={colleUrl}> 
                <div onClick={this.openItem.bind(this,dataItem.itemUrl)} style={{heigh:"auto"}}>
                    <ArticlePicture picturePath={dataItem.PicturePath}></ArticlePicture>
                    <div className="asc-article-content">
                        <ArticleHeadline headline={dataItem.Headline}></ArticleHeadline>
                        {intro}
                        {time}
                        {like}
                    </div>
                </div>
            </ArticleTitle>
        );
    }
}
