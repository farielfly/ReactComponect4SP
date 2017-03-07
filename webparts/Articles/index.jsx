import { render } from 'react-dom';
import $ from 'jquery';
import ArticleFrame from '../../components/Common/articleFrame.jsx'

function articleRender(params) {
    if (!params) {
        params = {
            Title: 'Kevin', PicturePath: '../../components/img/image1.jpg',
            Headline: 'There are some items to show in this view. There are no items to show in this view.',
            Intro: "its security certificate is not trusted by your computer's operating system. This may be caused by a misconfiguration or an attacker intercepting your connection."
        };
    }
    renderUI(params);

    function renderUI(params) {
        if (document.getElementById('articles')) {
            render(
                <ArticleFrame
                    title={params.Title}
                    picturePath={params.PicturePath}
                    headline={params.Headline}
                    intro={params.Intro}
                >
                </ArticleFrame>,
                document.getElementById('articles')
            )
        }
    }
}

global.articleRender = articleRender;