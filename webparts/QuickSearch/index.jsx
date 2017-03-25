import { render } from 'react-dom';
import $ from 'jquery';
import WebPartFrame from '../../components/common/webPartFrame.jsx'
import SearchBox from '../../components/Common/searchBox.jsx'

function searchRender(params) {
    if (!params) {
        params = [{ IconPosition: '0 -62px', PlaceHolder: 'Find a person', SearchUrl:'https://www.google.com/#q=' },
        { IconPosition: '-26px -62px', PlaceHolder: 'Search Everything', SearchUrl:'https://www.google.com/#q=' },
        { IconPosition: '-52px -62px', PlaceHolder: 'Search all Corporate Documents', SearchUrl:'https://www.google.com/#q=' }];
    }
    renderUI(params);

    function renderUI(params) {
        if (document.getElementById('quicksearch')) {
            render(
                <WebPartFrame title={"Quick Search"} hasMore={false} link={""} hasTopLine={false}>
                    <div className={'acs-searchbox-container'}>
                        {params.map(function (searchbox, i) {
                            return <SearchBox
                                key={i}
                                iconPosition={searchbox.IconPosition}
                                placeHolder={searchbox.PlaceHolder}
                                searchUrl={searchbox.SearchUrl}>
                            </SearchBox>
                        })}
                    </div>
                </WebPartFrame>,
                document.getElementById('quicksearch')
            )
        }
    }
}

global.searchRender = searchRender;