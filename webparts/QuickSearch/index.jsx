import { render } from 'react-dom';
import $ from 'jquery';
import SearchBox from '../../components/Common/searchBox.jsx'

function searchRender(params) {
    if (!params) {
        params = {};
    }
    renderUI(params);

    function renderUI(params) {
        if (document.getElementById('quicksearch')) {
            render(
                <div className={'acs-searchbox-container'}>
                    <div className={'acs-searchbox-title'}>
                        <div className={'acs-searchbox-title-icon'}></div>
                        <div className={'acs-searchbox-title-name'}>QUICK SEARCH</div>
                    </div>
                </div>,
                document.getElementById('quicksearch')
            )
        }
    }
}

global.searchRender = searchRender;