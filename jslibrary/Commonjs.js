(function ($, window, undefined) {
    var elems = $([]),
        jq_resize = $.resize = $.extend($.resize, {}),
        timeout_id,
        str_setTimeout = 'setTimeout',
        str_resize = 'resize',
        str_data = str_resize + '-special-event',
        str_delay = 'delay',
        str_throttle = 'throttleWindow';
    jq_resize[str_delay] = 250;
    jq_resize[str_throttle] = true;
    $.event.special[str_resize] = {
        setup: function () {
            if (!jq_resize[str_throttle] && this[str_setTimeout]) {
                return false;
            }
            var elem = $(this);
            elems = elems.add(elem);
            $.data(this, str_data, {
                w: elem.width(),
                h: elem.height()
            });
            if (elems.length === 1) {
                loopy();
            }
        },
        teardown: function () {
            if (!jq_resize[str_throttle] && this[str_setTimeout]) {
                return false;
            }
            var elem = $(this);
            elems = elems.not(elem);
            elem.removeData(str_data);
            if (!elems.length) {
                clearTimeout(timeout_id);
            }
        },
        add: function (handleObj) {
            if (!jq_resize[str_throttle] && this[str_setTimeout]) {
                return false;
            }
            var old_handler;
            function new_handler(e, w, h) {
                var elem = $(this),
                    data = $.data(this, str_data);
                data.w = w !== undefined ? w : elem.width();
                data.h = h !== undefined ? h : elem.height();
                old_handler.apply(this, arguments);
            }
            if ($.isFunction(handleObj)) {
                old_handler = handleObj;
                return new_handler;
            } else {
                old_handler = handleObj.handler;
                handleObj.handler = new_handler;
            }
        }
    };

    function loopy() {
        timeout_id = window[str_setTimeout](function () {
            elems.each(function () {
                var elem = $(this),
                    width = elem.width(),
                    height = elem.height(),
                    data = $.data(this, str_data);
                if (width !== data.w || height !== data.h) {
                    elem.trigger(str_resize, [data.w = width, data.h = height]);
                }
            });
            loopy();
        }, jq_resize[str_delay]);
    }
})(jQuery, this);

var AIC;
(function (AIC) {
    "use strict";
    AIC.Global = function () {
        if (window.document.body.clientWidth < window.parent.document.body.clientWidth) {
            return;
        }

        if (!window.jQuery) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = _spPageContextInfo.siteAbsoluteUrl + '/_layouts/15/APPSAICSolution/JS/jquery.min.js';
            script.onload = function () {
                changeStyle();
            };
            head.appendChild(script);
        }
        else {
            changeStyle();
        }
    };

    function changeStyle() {

        $('#titleAreaRow>div:nth-child(2)').html("").attr('id', 'navigation');
        var config = { url: _spPageContextInfo.siteAbsoluteUrl + "/_layouts/15/APPSAICSolution/NavigationProvider.aspx" }
        window.NavigationRender(config);

        $.get('/_vti_bin/APPSAICSolution/CommonService.svc/GetFooter', function (data) {
            if (data) {
                addFooter(data.Footer.Links, data.Footer.Search)
            }
            else {
                var footerArray = [{ Name: 'link1', Url: 'http://www.baidu.com' }, { Name: 'link2', Url: 'http://www.baidu.com' },
                { Name: 'link3', Url: 'http://www.baidu.com' }, { Name: 'link4', Url: 'http://www.baidu.com' }, { Name: 'link5', Url: 'http://www.baidu.com' }];
                addFooter(footerArray, search);
            }
        })
        $('#titleAreaRow>div:nth-child(2)').css('display', 'inline-block');

        $('#contentRow').resize(function () {
            if (($('#s4-bodyContainer').height() + 90) > $('#s4-workspace').height()) {
                $('#acs-footer')[0].className = 'acs-footer acs-footer-relative';
            }
            else {
                $('#acs-footer')[0].className = 'acs-footer';
            }
        });
    }

    function addFooter(footerArray, search) {
        var footerClass = 'acs-footer';
        if ($('#s4-bodyContainer').height() > $('#s4-workspace').height()) {
            footerClass += ' acs-footer-relative';
        }
        var html = '<div id="acs-footer" class="' + footerClass + '"><span class="acs-link">';
        footerArray.map(function (item) {
            html += '<a href="' + item.Url + '" target="_blank">' + item.Name + '</a>';
        })
        html += '</span><span class="acs-search"><input type="text" data-search="' + search + '" placeholder="Search everything"/>';
        html += '<a href="javascript:void(0);" onclick="AIC.search(this);" class="ms-srch-sb-searchLink"></a></span></div>';
        $('#s4-workspace').append(html);
    }

    AIC.search = function (e) {
        var searchUrl = _spPageContextInfo.siteAbsoluteUrl + '/_layouts/15/osssearchresults.aspx';
        if ($('.acs-search input').data('search')) {
            searchUrl = $('.acs-search input').data('search');
        }
        window.location.href = searchUrl + '?k=' + $('.acs-search input').val();
        return false;
    }
})((AIC || (AIC = {})))

window.onload = AIC.Global;

var NewItemParam = function () {
    var Source;
    var OriSource;
    var SiteUrl;
    var RequestUrl;
    var RootFolder;
    var ListId;
    var ItemId;
    var LoginUser;
    var RegStatus;
}

function RedirectToNewItem(src, listId, siteUrl) {
    NewItemParam.OriSource = src;
    NewItemParam.SiteUrl = siteUrl;
    NewItemParam.RequestUrl = siteUrl + "/Lists/EventRegInfo/NewForm.aspx";
    NewItemParam.Source =  encodeURIComponent(siteUrl + "/_layouts/15/APPSAICSolution/RegistrationResult.aspx");
    NewItemParam.ListId = listId;
    NewItemParam.ItemId = SP.ListOperation.Selection.getSelectedItems(ctx)[0].id;
    NewItemParam.LoginUser = curentWeb.get_currentUser();

    var ctx = SP.ClientContext.get_current();
    var currentSite = ctx.get_site();
    var currentWeb = ctx.get_web();
    var currentList = currentWeb.get_lists().getById(SP.ListOperation.Selection.getSelectedList());
    var currentItem = currentList.getItemById(SP.ListOperation.Selection.getSelectedItems(ctx)[0].id);

    ctx.load(currentItem, "ID", "Title", "ACSEventType", "ACSTheAllocatedSeats", "ACSTheRemainingSeats", "ACSEventDate");
    ctx.executeQueryAsync(
         function () {
             var title = currentItem.get_item("Title");
             NewItemParam.RootFolder = encodeURIComponent(NewItemParam.SiteUrl + "/Lists/EventRegInfo/" + title);

             var currentDate = dateGetCurrentUTCDate();
             if (currentItem.get_item("ACSEventDate") <= currentDate) {
                 NewItemParam.RegStatus = "Closed";
             }
             else if (currentItem.get_item("ACSTheAllocatedSeats") <= currentItem.get_item("ACSTheRemainingSeats")) {
                 NewItemParam.RegStatus = "Closed";
             }
             else {
                 NewItemParam.RegStatus = "Open";
             }

             var destList = currentWeb.get_lists().getByTitle("Event Registration Information")
             var contentTypes = destList.get_contentTypes();
             var eventType = currentItem.get_item("ACSEventType");

             ctx.load(contentTypes);
             ctx.executeQueryAsync(
                function () {
                    var id = null;
                    for (var i = 0; i < contentTypes.get_count() ; i++) {
                        if (contentTypes.itemAt(i).get_name() === eventType) {
                            id = contentTypes.itemAt(i).get_id();
                            break;
                        }
                    }
                    if (id != null) {
                        var newItemUrl = NewItemParam.RequestUrl 
                            + "?Source=" + NewItemParam.Source 
                            + "&ContentTypeId=" + id.toString() 
                            + "&RootFolder=" + NewItemParam.RootFolder
                            + "&OriSource=" + NewItemParam.OriSource
                            + "&ListId=" + NewItemParam.ListId
                            + "&ItemId=" + NewItemParam.ItemId
                            + "&LoginUser=" + NewItemParam.LoginUser
                            + "&RegStatus=" + NewItemParam.RegStatus;
                        Redirect(newItemUrl);
                    }
                    else {
                        alert("Can't find the Event Type");
                    }
                },
                function (sender, args) {
                    alert('Error occurred: ' + args.get_message());
                }
             );
         },
         function (sender, args) {
             alert('Error occurred: ' + args.get_message());
         }
       );
}

function IsItemSelected() {
    var ctx = SP.ClientContext.get_current();
    var items = SP.ListOperation.Selection.getSelectedItems(ctx);

    if (items.length == 1) {
        return true;
    }
    else {
        return false;
    }
}

function Redirect(url) {
    window.location.href = url;
}

function GetCurrentUTCDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();

    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }

    var currentdate = date.getFullYear() + "-" + month + "-" + strDate + "T"
        + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "Z";
             
    return currentdate;
}