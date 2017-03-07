import { render } from 'react-dom';
import $ from 'jquery';
import ArticleFrame from '../../components/Common/articleFrame.jsx'

function articleRender(params) {
    if (!params) {
        params = { Title: 'Kevin' ,PicturePath:'../../components/img/image1.jpg'};
    }
    renderUI(params);

    function renderUI(params) {
        if (document.getElementById('articles')) {
            render(
                <ArticleFrame
                    title={params.Title}
                    picturePath={params.PicturePath}
                >
                </ArticleFrame>,
                document.getElementById('articles')
            )
        }
    }
}

global.articleRender = articleRender;