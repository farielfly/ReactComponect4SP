import { render } from 'react-dom';
import $ from 'jquery';
import ArticleTitle from '../../components/article/articleTitle.jsx';
import ArticlePicture from '../../components/article/articlePicture.jsx';
import ArticleHeadline from '../../components/article/articleHeadline.jsx';
import ArticleIntro from '../../components/article/articleIntro.jsx';

function signleArticlesRender(params) {
    if (!params) {
        params = {
            ArticleId: 'signleArticles',
            Title: 'Kevin',
            PicturePath: '../../components/img/image1.jpg',
            Headline: 'There are some items to show in this view. There are no items to show in this view.',
            Intro: "its security certificate is not trusted by your computer's operating system. This may be caused by a misconfiguration or an attacker intercepting your connection."
        };
    }
    renderUI(params);

    function renderUI(params) {
        if (document.getElementById(params.ArticleId)) {
            render(
                <ArticleTitle
                    title={params.Title}>
                    <ArticlePicture picturePath={params.PicturePath}></ArticlePicture>
                    <ArticleHeadline headline={params.Headline}></ArticleHeadline>
                    <ArticleIntro intro={params.Intro}></ArticleIntro>
                </ArticleTitle>,
                document.getElementById(params.ArticleId)
            )
        }
    }
}

global.signleArticlesRender = signleArticlesRender;