import { render } from 'react-dom';
import $ from 'jquery';
import ArticlesSearchFrame from './articlesSearchFrame.jsx';
import BusinessArticles from './businessArticles.jsx';
import SingleArticle from './singleArticles.jsx';
function articleBusinessRender(params) {
    if (!params) {
        params = [{
            ItemUrl:"http://www.baidu.com",
            Title: 'Kevin',
            PicturePath: '../../components/img/image1.jpg',
            Headline: 'There are some items to show in this view. There are no items to show in this view.',
            Intro: "its security certificate is not trusted by your computer's operating system. This may be caused by a misconfiguration or an attacker intercepting your connection."
        },
        {
            ItemUrl:"http://www.baidu.com",
            PicturePath: '../../components/img/image1.jpg',
            Headline: 'There are some items to show in this view. There are no items to show in this view.',
            Time: "1/11/2017 10:39 AM",
            Like: 122,
            HasLiked: false
        },
        {
            ItemUrl:"http://www.baidu.com",
            Title: 'Tom',
            PicturePath: '../../components/img/image2.jpg',
            Headline: 'There are some items to show in this view. ',
            Intro: "its security certificate is not trusted by your computer's operating system."
        },
        {
            ItemUrl:"http://www.baidu.com",
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
            render(
                <ArticlesSearchFrame data = {params}>
                    <BusinessArticles data={params} aveCount={4} loadmore={0}></BusinessArticles>
                 </ArticlesSearchFrame>
                ,
                document.getElementById('articles')
            )
        }
    }
}

global.articleBusinessRender = articleBusinessRender;


function singleArticlesRender(params) {
    if (!params) {
        params = {
            ItemUrl:"http://www.baidu.com",
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
                <SingleArticle colleUrl={"http://www.bing.com"} hasTitle={true} hasIntro={true} hasTime={false} hasLike={false} itemWidth={100} dataItem={params}></SingleArticle>,
                document.getElementById(params.ArticleId)
            )
        }
    }
}

global.singleArticlesRender = singleArticlesRender;
