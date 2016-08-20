var debug = require ('./debug');

function Field (name, id, lat, long, address)
{
    this.name = name;
    this.id = id;
    this.lat = lat;
    this.long = long;
    this.marker = null;
    this.address = address;

}

function Fields()
{
    this.fields = [
        new Field("Lakeside High School", "lakeside", 33.8453, -84.2848, "3801 Briarcliff Rd NE, Atlanta, GA 30345"),
        new Field("Tucker High School", "tucker", 33.856215, -84.215753, "5036 Lavista Rd, Tucker, GA 30084"),
        new Field("Druid Hills Middle School (Shamrock)", "shamrock", 33.81914, -84.274298, "3100 Mt Olive Dr, Decatur, GA 30033"),
        new Field("North Cobb High School", "northCobb", 34.0409756, -84.6483621, "3601 Nowlin Rd, Kennesaw, GA 30144"),
        new Field("Osborne High School", "osborne", 33.89208, -84.565659, "2451 Favor Rd SW, Marietta, GA 30060"),
        new Field("Oglethorpe University", "oglethorpe", 33.8750, -84.3330, "4484 Peachtree Rd, Atlanta, GA 30319"),
        //new Field("Holy Spirit Catholic Church", "holySpirit", 33.877268, -84.411387, "4465 Northside Dr NW, Atlanta, GA 30327"),
        new Field("Lithia Springs High School", "lithiaSprings", 33.755571, -84.657863, "2520 E County Line Rd, Lithia Springs, GA 30122"),
        new Field("Dunwoody High School", "dunwoody", 33.9452548, -84.314946, "5035 Vermack Rd, Dunwoody, GA 30338"),
        new Field("South Gwinett High School", "southGwinett", 33.8540569, -84.0075551, "2288 E Main St, Snellville, GA 30078"),
        new Field("Grand Slam Golf & Baseball", "grandSlamCage", 33.812883, -84.29490, "3352 N Druid Hills Rd, Decatur, GA 30033")
    ];

    this.getFields = function()
    {
        var result = this.fields;
        debug(result);
        return (result);
    }

}

module.exports = new Fields();