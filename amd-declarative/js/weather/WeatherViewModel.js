define([
    'kendo',
    'templateLoader',
    'text!weatherTemplate'
], function( kendo, templateLoader, weatherTemplate ){
    return kendo.data.ObservableObject.extend({
        weatherDataSource: null,

        init: function () {
            templateLoader.ensureLoaded("weather-forecast-template", weatherTemplate);
            kendo.data.ObservableObject.fn.init.apply( this, [] );

            var dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/weather.json",
                        dataType: "json"
                    }
                }
            });

            this.set( "weatherDataSource", dataSource );
        }
    });
});