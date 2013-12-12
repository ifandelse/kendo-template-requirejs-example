define([
    'kendo',
    'weather/WeatherViewModel'
], function ( kendo, WeatherViewModel ) {
    var os = kendo.support.mobileOS;
    var statusBarStyle = os.ios && os.flatVersion >= 700 ? "black-translucent" : "black";
    return {
        kendoApp : null,
        weatherService : {
            viewModel: null
        },
        init: function() {
            this.kendoApp = new kendo.mobile.Application( document.body, { layout: "layout", statusBarStyle: statusBarStyle });
            this.weatherService.viewModel = new WeatherViewModel($("#forecast"));
        }
    };
});