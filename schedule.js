var debug = require ('./debug');
/*
 ** function to create a schedule item
 */
function Event(date, time, field, opponent, result, note, eviteURL)
{
    this.date = date;
    this.time = time;
    this.opponent = opponent;
    this.field = field;
    this.result = result;
    this.note = note;
    this.eviteURL = eviteURL;
}

function createEvent(date, time, field, opponent, result, note, eviteURL)
{
    return {
        date: date,
        time: time,
        opponent: opponent,
        field: field,
        result: result,
        note: note,
        eviteURL: eviteURL
    };
}


// this method uses createEvent to create schedule events
function schedule2016()
{
    // last column is for evite linke
    var events = [
        createEvent("April 3", "12 PM", "Druid Hills Middle", "Reds", "W 8-6", "Opening Day", ""),
        createEvent("April 10", "12 PM", "Druid Hills Middle", "@Dragons", "L 6-8", "", ""),
        createEvent("April 17", "", "", "No Game", "", "BYE", ""),
        createEvent("April 24", "12 PM", "Druid Hills Middle", "@Rangers", "L 4-5", "", ""),
        createEvent("May 1", "12 PM", "Druid Hills Middle", "Rangers", "L 11-9", "", ""),
        createEvent("May 8", "", "", "No Game", "", "Mother's Day", ""),
        createEvent("May 15", "12 PM", "North Cobb", "@Cherokees", "L 5-6", "", ""),
        createEvent("May 22", "12 PM", "Druid Hills Middle", "@Reds", "W 10-1", "", ""),
        createEvent("May 29", "", "", "No Game", "", "Memorial Day", ""),
        createEvent("June 5", "12 PM", "Druid Hills Middle", "@Barracudas", "W 5-4", "", ""),
        createEvent("June 12", "12 PM", "North Cobb", "Cherokees", "W 3-4", "", ""),
        createEvent("June 19", "12 PM", "Lakeside", "Mudcats", "L 6-5", "", ""),
        createEvent("June 26", "12 PM", "Druid Hills Middle", "Rockies", "W 12-6", "", ""),
        createEvent("July 3", "", "", "No Game", "", "4th of July Weekend", ""),
        createEvent("July 10", "12 PM", "Lakeside", "@Mudcats", "W 14-2", "", ""),
        createEvent("July 17", "12 PM", "South Gwinett", "Dragons", "L 5-2", "", ""),
        createEvent("July 24", "", "", "No Game", "", "BYE", ""),
        createEvent("July 31", "4 PM", "Druid Hills Middle", "Raw Dawgs", "W 9-6", "", ""),
        createEvent("Aug 7", "12 PM", "Druid Hills Middle", "@Titans", "L 6-5", "", ""),
        createEvent("Aug 14", "12 PM", "Druid Hills Middle", "@Cobb Red Sox", "W 17-6", "", ""),
        createEvent("Aug 21", "12 PM", "Druid Hills Middle", "@Bandits", "W 11-4", "", ""),
        createEvent("Aug 28", "12 PM", "Druid Hills Middle", "Dragons (18+)", "W 18-0", "", ""),
        createEvent("Sept 4", "", "", "No Game", "", "Labor Day Weekend", ""),
        createEvent("Sept 11", "12 PM", "Druid Hills Middle", "Barracudas", "W 5-0", "", ""),
        createEvent("Sept 17", "4 PM", "Druid Hills Middle", "Rangers", "W 5-2", "Saturday Wildcard - Round 1", ""),
        createEvent("Sept 18", "12 PM", "Osborne HS", "Dragons", "L 6-1", "Semi Final Game 1", ""),
        createEvent("Sept 25", "11 AM", "Druid Hills Middle", "Dragons", "L 5-3", "Semi Final Game 2", ""),
        createEvent("March 2017", "12 PM", "TBD", "TBD", "", "", "")
    ];

    //debug (events[2].getNote());

    return {
        getSchedule: function()
        {
            debug  ("returning schedule...");
            debug (events);
            return (events);
        }
        
    }; // end return object
}


function schedule2015()
{
    var events = [
        createEvent("March 22", "4 PM", "Lakeside HS", "Tigers", "Rained Out", "Scrimmage Game"),
        createEvent("March 29", "4 PM", "North Cobb HS", "@Cherokees", "L 13-14", "Opening Day"),
        createEvent("April 5", "", "", "No Game", "", "Easter Sunday"),
        createEvent("April 12", "1205 PM", "Lithia Springs HS", "McBluv", "L 17-5", ""),
        createEvent("April 19", "4 PM", "Shamrock", "Giants", "Postponed", "Rain"),
        createEvent("April 26", "12 PM", "Shamrock", "Dragons", "L 24-5", ""),
        createEvent("May 3", "4 PM", "Shamrock", "@Barracudas", "L 11-6", "", ""),
        createEvent("May 10", "", "", "No Game", "", "Mother's Day"),
        createEvent("May 17", "12 PM", "Lakeside HS", "@Mudcats", "W 14-1", ""),
        createEvent("May 24", "", "", "No Game", "", "Memorial Day"),
        createEvent("May 31", "4 PM", "Shamrock", "Indians", "L 17-14", ""),
        createEvent("June 7", "12 PM", "Shamrock", "Cherokees", "L 13-5", ""),
        createEvent("June 14", "12 PM", "Dunwoody", "@McBluv", "W 9-0", "ff"),
        createEvent("June 21", "4 PM", "Dunwoody", "@Giants", "L 19-2", "Father's Day"),
        createEvent("June 28", "12 PM", "Oglethorpe U.", "@Dragons", "W 14-9", ""),
        createEvent("July 5", "", "", "No Game", "", "July 4th Weekend"),
        createEvent("July 12", "4 PM", "Shamrock", "Barracudas", "L 8-3", ""),
        createEvent("July 19", "12 PM", "Lakeside HS", "Mudcats", "T 6-6", ""),
        createEvent("July 26", "12 PM", "Shamrock", "@Indians", "W 15-2", ""),
        createEvent("Aug 2", "12 PM", "Lithia Springs HS", "McBluv", "W 9-0", "ff"),
        createEvent("Aug 9", "140 PM ", "Campbell Middle School", "Giants", "L 10-0", ""),
        createEvent("Aug 9", "11 AM", "Campbell Middle School", "@Giants", "L 6-8", "4/19 Make up game"),
        createEvent("Aug 16", "12 PM", "Lakeside HS", "@Mudcats", "L 10-15", ""),
        createEvent("Aug 23", "4PM", "Lakeside HS", "Indians", "Postponed", "Rain"),
        createEvent("Aug 30", "4PM", "Lakeside HS", "Indians", "Rained Out", "4/23 make up game"),
        createEvent("Sept 7", "", "", "No Game", "", "Labor Day Weekend"),
        createEvent("Sep 12", "10 AM", "North Cobb", "@Cherokees", "L 0-1", "Playoff Game 1"),
        createEvent("Sep 12", "1 PM", "North Cobb", "Cherokees", "L 6-0", "Playoff Game 2"),
        createEvent("March 2016", "TBD", " TBD", "TBD", "", "")
    ];

    //debug (events[2].getNote());

    return {
        getSchedule: function()
        {
            debug  ("returning schedule...");
            debug (events);
            return (events);
        }

        

        
    }; // end return object
}

// this method uses the "new Event" to create schedule events
function createSchedule2()
{
    var events = [
        new Event ("March 22", "4 PM", "Lakeside HS", "Tigers", "Rained Out", "Scrimmage Game"),
        new Event ("March 29", "4 PM", "North Cobb HS", "@Cherokees", "L 13-14", "Opening Day"),
        new Event ("April 5", "", "", "No Game", "", "Easter Sunday"),
        new Event ("April 12", "1205 PM", "Lithia Springs HS", "McBluv", "L 17-5", ""),
        new Event ("April 19", "4 PM", "Shamrock", "Giants", "Postponed", "Rain"),
        new Event ("April 26", "12 PM", "Shamrock", "Dragons", "L 24-5", ""),
        new Event ("May 3", "4 PM", "Shamrock", "@Barracudas", "L 11-6", "", ""),
        new Event ("May 10", "", "", "No Game", "", "Mother's Day"),
        new Event ("May 17", "12 PM", "Lakeside HS", "@Mudcats", "W 14-1", ""),
        new Event ("May 24", "", "", "No Game", "", "Memorial Day"),
        new Event ("May 31", "4 PM", "Shamrock", "Indians", "L 17-14", ""),
        new Event ("June 7", "12 PM", "Shamrock", "Cherokees", "L 13-5", ""),
        new Event ("June 14", "12 PM", "Dunwoody", "@McBluv", "W 9-0", "ff"),
        new Event ("June 21", "4 PM", "Dunwoody", "@Giants", "L 19-2", "Father's Day"),
        new Event ("June 28", "12 PM", "Oglethorpe U.", "@Dragons", "W 14-9", ""),
        new Event ("July 5", "", "", "No Game", "", "July 4th Weekend"),
        new Event ("July 12", "4 PM", "Shamrock", "Barracudas", "L 8-3", ""),
        new Event ("July 19", "12 PM", "Lakeside HS", "Mudcats", "T 6-6", ""),
        new Event ("July 26", "12 PM", "Shamrock", "@Indians", "W 15-2", ""),
        new Event ("Aug 2", "12 PM", "Lithia Springs HS", "McBluv", "W 9-0", "ff"),
        new Event ("Aug 9", "140 PM ", "Campbell Middle School", "Giants", "L 10-0", ""),
        new Event ("Aug 9", "11 AM", "Campbell Middle School", "@Giants", "L 6-8", "4/19 Make up game"),
        new Event ("Aug 16", "12 PM", "Lakeside HS", "@Mudcats", "L 10-15", ""),
        new Event ("Aug 23", "4PM", "Lakeside HS", "Indians", "Postponed", "Rain"),
        new Event ("Aug 30", "4PM", "Lakeside HS", "Indians", "Rained Out", "4/23 make up game"),
        new Event ("Sept 7", "", "", "No Game", "", "Labor Day Weekend"),
        new Event ("Sep 12", "10 AM", "North Cobb", "@Cherokees", "L 0-1", "Playoff Game 1"),
        new Event ("Sep 12", "1 PM", "North Cobb", "Cherokees", "L 6-0", "Playoff Game 2"),
        new Event ("March 2016", "TBD", " TBD", "TBD", "", "")
    ];

    //debug (events[2].getNote());

    return {
        
        getSchedule: function()
        {
            debug ("returning schedule...");
            debug (events);
            return (events);
        }

    }; // end return object
}

module.exports = new schedule2016();