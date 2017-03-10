import { render } from 'react-dom';
import $ from 'jquery';
import ArticlePicture from '../../components/article/articlePicture.jsx';
import ArticleHeadline from '../../components/article/articleHeadline.jsx';
import ArticleTime from '../../components/article/articleTime.jsx';
import ArticleLike from '../../components/article/articleLike.jsx';

function articleBusinessRender(params) {
    if (!params) {
        params = [{
            PicturePath: '../../components/img/image1.jpg',
            Headline: 'There are some items to show in this view. There are no items to show in this view.',
            Time: "1/11/2017 10:39 AM",
            Like: "122"
        },
        {
            PicturePath: '../../components/img/image2.jpg',
            Headline: 'There are some items to show in this view. ',
            Time: "2/15/2017 15:35 PM",
            Like: "2344"
        },
        {
            PicturePath: '../../components/img/image3.jpg',
            Headline: 'Overview',
            Time: "2/15/2017 16:35 PM",
            Like: "204"
        },
        {
            PicturePath: '../../components/img/image1.jpg',
            Headline: 'Forbidden: Access is denied.',
            Time: "2/15/2017 18:35 PM",
            Like: "199"
        },
        {
            PicturePath: '../../components/img/image2.jpg',
            Headline: 'There are some items to show in this view. There are no items to show in this view.',
            Time: "2/15/2017 15:35 PM",
            Like: "4656"
        },
        {
            PicturePath: '../../components/img/image1.jpg',
            Headline: 'There are some items to show in this view. ',
            Time: "2/15/2017 15:35 PM",
            Like: "234"
        },
        {
            PicturePath: '../../components/img/image3.jpg',
            Headline: 'Hello WorldHello WorldHello WorldHello WorldHello WorldHello World.',
            Time: "2/15/2017 15:35 PM",
            Like: "665"
        },
        {
            PicturePath: '../../components/img/image2.jpg',
            Headline: 'There are some items to show in this view. There are no items to show in this view.',
            Time: "2/15/2017 15:35 PM",
            Like: "8899"
        }];
    }
    renderUI(params);

    function renderUI(params) {
        if (document.getElementById('articlesBusiness')) {
            let firstParams = []; let secondParams = [];
            let width = '20%';
            if (params.length >= 4) {
                firstParams = params.slice(0, 4);
                secondParams = params.slice(4, 8);
            }
            render(
                <div>
                    <div>
                        <table><tbody><tr>
                            {
                                firstParams.map(function (article, i) {
                                    return <td key={i} style={{ width: width, verticalAlign: 'top', position: 'relative' }}>
                                        <div className={'acs-articleframe'}>
                                            <ArticlePicture picturePath={article.PicturePath}></ArticlePicture>
                                            <ArticleHeadline headline={article.Headline}></ArticleHeadline>
                                            <ArticleTime time={article.Time}></ArticleTime>
                                            <ArticleLike like={article.Like}></ArticleLike>
                                        </div>
                                    </td>
                                })
                            }
                        </tr></tbody></table>
                    </div>
                    <div style={{ marginTop: '50px' }}>
                        <table><tbody><tr>
                            {
                                secondParams.map(function (article, i) {
                                    return <td key={i} style={{ width: width, verticalAlign: 'top', position: 'relative' }}>
                                        <div className={'acs-articleframe'}>
                                            <ArticlePicture picturePath={article.PicturePath}></ArticlePicture>
                                            <ArticleHeadline headline={article.Headline}></ArticleHeadline>
                                            <ArticleTime time={article.Time}></ArticleTime>
                                            <ArticleLike like={article.Like}></ArticleLike>
                                        </div>
                                    </td>
                                })
                            }
                        </tr></tbody></table>
                    </div>
                </div>,
                document.getElementById('articlesBusiness')
            )
        }
    }
}

global.articleBusinessRender = articleBusinessRender;