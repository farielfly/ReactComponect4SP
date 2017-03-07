import { render } from 'react-dom';
import $ from 'jquery';
import ArticleFrame from '../../components/Common/articleFrame.jsx'

function articleRender(params) {
    if (!params) {
        params = [{
            Title: 'Kevin', PicturePath: '../../components/img/image1.jpg',
            Headline: 'There are some items to show in this view. There are no items to show in this view.',
            Intro: "its security certificate is not trusted by your computer's operating system. This may be caused by a misconfiguration or an attacker intercepting your connection."
        },
        {
            Title: 'Tom', PicturePath: '../../components/img/image2.jpg',
            Headline: 'There are some items to show in this view. ',
            Intro: "its security certificate is not trusted by your computer's operating system."
        },
        {
            Title: 'Justin', PicturePath: '../../components/img/image3.jpg',
            Headline: 'Overview',
            Intro: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React.Component is provided by React."
        }, {
            Title: 'Bill', PicturePath: '../../components/img/image1.jpg',
            Headline: 'Forbidden: Access is denied.',
            Intro: "You do not have permission to view this directory or page using the credentials that you supplied"
        }];
    }
    renderUI(params);

    function renderUI(params) {
        if (document.getElementById('articles')) {
            render(
                <div>{params.map(function (article,i) {
                    return <ArticleFrame
                        key={i}
                        title={article.Title}
                        picturePath={article.PicturePath}
                        headline={article.Headline}
                        intro={article.Intro}
                    >
                    </ArticleFrame>
                })}
                </div>,
                document.getElementById('articles')
            )
        }
    }
}

global.articleRender = articleRender;