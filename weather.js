var request = require ('request');
var config = require('./config.json');
var debug = require ('./debug');

const ThreeDayForecastURL = config.threeDayForecastURL;
const TenDayForecastURL = config.tenDayForecastURL;

const Thur = 4;
const Fri = 5;
const Sat = 6;
const Sun = 0;

// return value array
const Saturday = 0;
const Sunday = 1;
var WeekendForecast = [];

function DayForecast (hiTemp, conditions, date, icon)
{
    this.hiTemp = hiTemp;
    this.conditions = conditions;
    this.date = date;
    this.icon = icon;
}


function Weather()
{ 
}

Weather.prototype = {
    constructor: Weather,

    getWeekendForcast: function (callback) {

        var d = new Date();
        var today = d.getDay();
        // if today is Thur, Fri, Sat or Sun, then get 3 day forecast; otherwise get 10 day forecast
        debug ("Today is = " + today);

        var url = null;
        if (today  == Sun || today == Sat || today == Fri || today == Thur)
        {
            // will get 3 day forecast
            debug ("Today is Friday, Saturday or Sunday");
            url = ThreeDayForecastURL;
        }
        else
        {
            // will get 10 day forecast
            url = TenDayForecastURL;
        }

        request.get (
        {
            url: url,
            json: true,
            headers: {'User-Agent': 'request'}
        }, 
        function (err, res, results) {
            if (err) {
                console.log('Error:', err);
            }
            else if (res.statusCode !== 200) {
                console.log('Status:', res.statusCode);
            } 
            else {            
                if (results.forecast != null) 
                {   
                    var days = results.forecast.simpleforecast.forecastday;

                    var numDays = days.length;
                    debug ("num days returned: " + numDays);

                    for (j=0; j< numDays; j++)
                    {
                        debug (days[j].date.weekday);
                        if (days[j].date.weekday == "Sunday")
                        {
                            debug ("creating new Sunday's forecast " );
                            debug ("forecast array size " + WeekendForecast.length);

                            WeekendForecast [Sunday] = new DayForecast (days[j].high.fahrenheit, days[j].conditions, 
                                (days[j].date.monthname + " " + days[j].date.day), days[j].icon_url);
                            debug ("forecast array size " + WeekendForecast.length);
                        }
                        else if (days[j].date.weekday == "Saturday")
                        {
                            debug ("creating new Saturdays's forecast " );
                            WeekendForecast [Saturday] = new DayForecast (days[j].high.fahrenheit, days[j].conditions, 
                                (days[j].date.monthname + " " + days[j].date.day), days[j].icon_url);
                        }
                    }
                
                    if (WeekendForecast [Saturday] != null)
                    {
                        debug ("Saturdays's forecast " + WeekendForecast [Saturday].conditions + " " + WeekendForecast [Saturday].hiTemp);
                    }   

                    if (WeekendForecast [Sunday] != null)
                    {
                        debug ("Sunday's forecast " + WeekendForecast [Sunday].conditions + " " + WeekendForecast [Sunday].hiTemp);
                    }

                    // invoke callback function                 
                    if (typeof callback === "function") {
                        debug ("returning callback, forecast array size " + WeekendForecast.length);
                        callback (WeekendForecast);
                    }
                }
                else{
                    debug ("forecast returend is null or undefined");
                }
            }
        });
    }
}

module.exports = new Weather();
