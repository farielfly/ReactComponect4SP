import { render } from 'react-dom';
import $ from 'jquery';
import WebPartFrame from '../../components/common/webPartFrame.jsx'
import SearchBox from '../../components/Common/searchBox.jsx'

function searchRender(params) {
    if (!params) {
        params = [{ IconPosition: '0 -62px', PlaceHolder: 'Find a person', SearchUrl: 'https://www.google.com/#q=' },
        { IconPosition: '-26px -62px', PlaceHolder: 'Search Everything', SearchUrl: 'https://www.google.com/#q=' },
        { IconPosition: '-52px -62px', PlaceHolder: 'Search all Corporate Documents', SearchUrl: 'https://www.google.com/#q=' }];
    }
    renderUI(params);

    function renderUI(params) {
        if (document.getElementById('quicksearch')) {
            render(
                <div>
                    <div id="search-forpc">
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
                        </WebPartFrame>
                    </div>
                    <div id="search-formobile">
                        <SearchBox
                            iconPosition={params[1].IconPosition}
                            placeHolder={params[1].PlaceHolder}
                            searchUrl={params[1].SearchUrl}>
                        </SearchBox>
                    </div>
                </div>,
                document.getElementById('quicksearch')
            )
        }
    }
}

global.searchRender = searchRender;