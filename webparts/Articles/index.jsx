import { render } from 'react-dom';
import $ from 'jquery';
import ArticleTitle from '../../components/article/articleTitle.jsx';
import ArticlePicture from '../../components/article/articlePicture.jsx';
import ArticleHeadline from '../../components/article/articleHeadline.jsx';
import ArticleIntro from '../../components/article/articleIntro.jsx';

function articleRender(params) {
    if (!params) {
        params = [{
            Title: 'Kevin',
            PicturePath: '../../components/img/image1.jpg',
            Headline: 'There are some items to show in this view. There are no items to show in this view.',
            Intro: "its security certificate is not trusted by your computer's operating system. This may be caused by a misconfiguration or an attacker intercepting your connection."
        },
        {
            Title: 'Tom',
            PicturePath: '../../components/img/image2.jpg',
            Headline: 'There are some items to show in this view. ',
            Intro: "its security certificate is not trusted by your computer's operating system."
        },
        {
            Title: 'Justin',
            PicturePath: '../../components/img/image3.jpg',
            Headline: 'Overview',
            Intro: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React.Component is provided by React."
        }, {
            Title: 'Bill',
            PicturePath: '../../components/img/image1.jpg',
            Headline: 'Forbidden: Access is denied.',
            Intro: "You do not have permission to view this directory or page using the credentials that you supplied"
        }, {
            Title: 'Jason',
            PicturePath: '../../components/img/image2.jpg',
            Headline: 'Hello WorldHello WorldHello WorldHello WorldHello WorldHello World.',
            Intro: "Hello WorldHello World.You do not have permission to view this directory or page using the credentials that you supplied"
        }];
    }
    renderUI(params);

    function renderUI(params) {
        if (document.getElementById('articles')) {
            let firstParams = []; let secondParams = [];
            let firstWidth = '45%'; let secondWidth = '30%';
            if (params.length >= 2) {
                firstParams = params.slice(0, 2);
                secondParams = params.slice(2, 5);
            }
            render(
                <div>
                    <div>
                        <table><tbody><tr>
                            {
                                firstParams.map(function (article, i) {
                                    return <td key={i} style={{ width: firstWidth, verticalAlign: 'top' }}>
                                        <ArticleTitle
                                            title={article.Title}
                                            width={firstWidth}>
                                            <ArticlePicture picturePath={article.PicturePath}></ArticlePicture>
                                            <ArticleHeadline headline={article.Headline}></ArticleHeadline>
                                            <ArticleIntro intro={article.Intro}></ArticleIntro>
                                        </ArticleTitle></td>
                                })
                            }
                        </tr></tbody></table>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <table><tbody><tr>
                            {
                                secondParams.map(function (article, i) {
                                    return <td key={i} style={{ width: secondWidth, verticalAlign: 'top' }}>
                                        <ArticleTitle
                                            title={article.Title}
                                            width={secondWidth}>
                                            <ArticlePicture picturePath={article.PicturePath}></ArticlePicture>
                                            <ArticleHeadline headline={article.Headline}></ArticleHeadline>
                                            <ArticleIntro intro={article.Intro}></ArticleIntro>
                                        </ArticleTitle></td>
                                })
                            }
                        </tr></tbody></table>
                    </div>
                </div>,
                document.getElementById('articles')
            )
        }
    }
}

global.articleRender = articleRender;