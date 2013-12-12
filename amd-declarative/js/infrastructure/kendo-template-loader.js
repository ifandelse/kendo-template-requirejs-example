define([
    'jquery'
], function ($) {
    var templates = {};

    return {
        templates    : templates,
        ensureLoaded : function(tmplId, templateString) {
            if(!templates[tmplId]) {
                templates[tmplId] = $('<script id="' + tmplId + '" type="text/x-kendo-tmpl"></script>').text(templateString).appendTo("body")[0];
            }
        }
    }
});