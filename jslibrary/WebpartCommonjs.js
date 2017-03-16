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

     AIC.monthTransform = function(data){
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
        var tempdata = month[data];
        return tempdata;        
    }
})((AIC || (AIC = {})))