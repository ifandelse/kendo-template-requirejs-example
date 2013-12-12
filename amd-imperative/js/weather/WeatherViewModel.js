define([
    'kendo',
    'text!weatherTemplate'
], function( kendo, weatherTemplate ){
    return kendo.data.ObservableObject.extend({
        weatherDataSource: null,

        init: function () {
            var self = this;

            $("#forecast").kendoMobileListView({
                template : kendo.template(weatherTemplate)
            });

            kendo.data.ObservableObject.fn.init.apply( self, [] );

            var dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "data/weather.json",
                        dataType: "json"
                    }
                }
            });

            self.set( "weatherDataSource", dataSource );
        }
    });
});