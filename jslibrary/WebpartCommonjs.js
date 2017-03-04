var AIC;
(function (AIC) {
    "use strict";

    AIC.wordLimit = function (query) {
        $(query).each(function () {
            var fontSize = parseInt($(this).css('font-size').replace('px', ''));
            while ($(this).height() > fontSize * 2 * 1.4) {
                $(this).text($(this).text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
            };
        });
    }
})((AIC || (AIC = {})))