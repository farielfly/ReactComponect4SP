import { render } from 'react-dom';
import $ from 'jquery';
import SearchBox from '../../components/Common/searchBox.jsx'

function searchRender(params) {
    if (!params) {
        params = [{ IconPosition: '-26px -40px', PlaceHolder: 'Find a person' },
        { IconPosition: '-26px -40px', PlaceHolder: 'Search Everything' },
        { IconPosition: '-26px -40px', PlaceHolder: 'Search all Corporate Documents' }];
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
                    {params.map(function (searchbox, i) {
                        return <SearchBox
                            key={i}
                            iconPosition={searchbox.IconPosition}
                            placeHolder={searchbox.PlaceHolder}>
                        </SearchBox>
                    })}
                </div>,
                document.getElementById('quicksearch')
            )
        }
    }
}

global.searchRender = searchRender;