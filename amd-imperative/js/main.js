require.config({
    paths: {
        kendo            : "kendo/js/kendo.mobile.min",
        jquery           : "jquery/jquery.min",
        text             : "require/text",
        weatherViewModel : "weather/WeatherViewModel",
        weatherTemplate  : "weather/forecast-template.html"
    },

    shim: {
        kendo: {
            deps: ['jquery'],
            exports: 'kendo'
        }
    }
});

require(['app'], function (app) {
    window.app = app;
    $(function () {
        app.init();
    });
});