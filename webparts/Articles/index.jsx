import { render } from 'react-dom';
import $ from 'jquery';
import SingleArticle from '../../components/article/singleArticles.jsx';

function singleArticlesRender(params) {
    if (!params.data) {
        params.data= {
            ItemUrl:"http://www.baidu.com",
            ArticleId: 'signleArticles',
            Title: 'Kevin',
            PicturePath: '../../components/img/image1.jpg',
            Headline: 'There are some items to show in this view. There are no items to show in this view.',
            Intro: "its security certificate is not trusted by your computer's operating system. This may be caused by a misconfiguration or an attacker intercepting your connection.",
            colleUrl:"http://www.baidu.com"
        };
    }

    if(!params.ArticleId){
        params.ArticleId = "singleArticles";
    }
    
    renderUI(params);

    

    function renderUI(params) {
        if (document.getElementById(params.ArticleId)) {
            render(
                <SingleArticle hasTitle={true} hasIntro={true} hasTime={false} hasLike={false} itemWidth={100} dataItem={params.data}></SingleArticle>,
                document.getElementById(params.ArticleId)
            );
            wordLimit('.acs-articleframe-headline',2);
        }
    }
}

global.singleArticlesRender = singleArticlesRender;


function wordLimit(query,rowCount){
     $(query).each(function () {
        var fontSize = parseInt($(this).css('font-size').replace('px',''));
        while ($(this).height() > fontSize * rowCount * 1.4) {
            $(this).text($(this).text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
        };
    });
}