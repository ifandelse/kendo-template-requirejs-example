(function (global, kendo, undefined) {
    var mobileSkin = "",
        WeatherViewModel,
        app = global.app = global.app || {},
        os = kendo.support.mobileOS,
        statusBarStyle = os.ios && os.flatVersion >= 700 ? "black-translucent" : "black";

    app.application = new kendo.mobile.Application(document.body, { layout: "layout", statusBarStyle: statusBarStyle });

    WeatherViewModel = kendo.data.ObservableObject.extend({
        weatherDataSource: null,

        init: function () {
            var that = this,
                dataSource;

            kendo.data.ObservableObject.fn.init.apply(that, []);

            dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/weather.json",
                        dataType: "json"
                    }
                }
            });

            that.set("weatherDataSource", dataSource);
        }
    });

    app.weatherService = {
        viewModel: new WeatherViewModel()
    };
})(window, kendo);