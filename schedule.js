
var debug = require ('./debug');

var games2019 = [
        new Event ("April 7", "12 PM", "Druid Hills", "@Buckhead Squeaks", "Postponed", "Opening Day", ""),
        new Event ("April 14", "12 PM", "Druid Hills", "Bombers", "Postponed", "", ""),
        new Event ("April 18", "730 PM", "Osborne", "Bombers", "W 9-4", "", ""),
        new Event ("April 21", "", "", "No Game", "", "Easter Sunday", ""),
        new Event ("April 28", "12 PM", "Druid Hills", "Tainos", "L 8-3", "", ""),
        new Event ("May 5", "12 PM", "Druid Hills", "@Cherokees", "L 5-0", "", ""),
        new Event ("May 12", "", "", "No Game", "", "Mother's Day", ""),
        new Event ("May 19", "4 PM", "South Gwinett", "@Muckdogs", "W 11-3", "", ""),
        new Event ("May 26", "", "", "No Game", "", "Memorial Day Weekend", ""),
        new Event ("June 2", "12 PM", "South Gwinett", "Black Sox", "L 12-0", "", ""),
        new Event ("June 9", "12 PM", "South Gwinett", "Dragons", "Postponed", "", ""),
        new Event ("June 16", "12 PM", "South Gwinett", "Buckhead Squeaks", "W 8-5", "", ""),
        new Event ("June 23", "12 PM", "Druid Hills", "@Bombers", "W 18-1", "", ""),
        new Event ("June 30", "12 PM", "Osborne", "@Black Sox", "", "", ""),
        new Event ("July 7", "4 PM", "Ward Park", "@Tainos", "", "", ""),
        new Event ("July 14", "4 PM", "South Gwinett", "@Muckdogs", "", "", ""),
        new Event ("July 21", "12 PM", "Druid Hills", "Cherokees", "", "", ""),
        new Event ("July 28", "12 PM", "South Gwinett", "@Dragons", "", "", ""),
        new Event ("August 4", "12 PM", "South Gwinett", "@Muckdogs", "", "", ""),
        new Event ("August 11", "12 PM", "Druid Hills", "Black Sox", "", "", ""),
        new Event ("August 18", "12 PM", "South Gwinett", "Dragons", "", "", ""),
        new Event ("August 25", "12 PM", "South Gwinett", "@Squeaks", "", "", ""),
        new Event ("September 1", "", "", "No Game", "", "Labor Day Weekend", ""),
        new Event ("September 8", "12 PM", "South Gwinett", "Dragons", "", "", "")

];


var games2018 = [
        new Event ("April 8", "4 PM", "Druid Hills Middle", "@Buckhead Squeaks", "W 13-2", "Opening Day 2018", ""),
        new Event ("April 15", "4 PM", "South Gwinett HS", "@Muckdogs", "Postponed", "Rain", ""),
        new Event ("April 22", "4 PM", "South Gwinett HS", "Outlaws", "Postponed", "Rain", ""),
        new Event ("April 29", "12 PM", "South Cobb HS", "@Cherokees", "L 12-0", "", ""),

        new Event ("May 6", "4 PM", "Druid Hills Middle", "Tainos", "L 11-1", "", ""),
        new Event ("May 13", "", "", "No Game", "", "Mother's Day", ""),
        new Event ("May 20", "12 PM", "Druid Hills Middle", "Black Sox", "L", "", ""),
        new Event ("May 27", "", "", "No Game", "", "Memorial Day Weekend", ""),

        new Event ("June 3", "12 PM", "Druid Hills Middle", "@Dodgers", "L 1-0", "", ""),
        new Event ("June 10", "12 PM", "Druid Hills Middle", "Gwinett Tigers", "L 2-1", "", ""),
        new Event ("June 17", "12 PM", "Druid Hills Middle", "@Dragons", "L", "forfeit", ""),
        new Event ("June 24", "12 PM", "Druid Hills Middle", "Buckhead Squeaks", "W", "", ""),

        new Event ("July 1", "12 PM", "South Gwinett HS", "Muckdogs", "Postponed", "", ""),
        new Event ("July 8", "4 PM", "Druid Hills Middle", "@Tainos", "L", "", ""),
        new Event ("July 17", "12 PM", "Osborne HS", "Cherokees", "L", "", ""),
        new Event ("July 22", "4 PM", "South Gwinett HS", "@Outlaws", "L 4-2", "", ""),
        new Event ("July 29", "12 PM", "Lakeside HS", "Black Sox", "L", "", ""),

        new Event ("August 5", "4 PM", "Druid Hills Middle", "Dodgers", "L", "", ""),
        new Event ("August 12", "12 PM", "Druid Hills Middle", "@Gwinett Tigers", "W 8-3", "", ""),
        new Event ("August 19", "1030 AM", "South Gwinett HS", "Dragons", "W 1-0", "", ""),
        new Event ("August 19", "130 PM", "South Gwinett HS", "Outlaws", "L 8-1", "", ""),

        new Event ("August 26", "1030 AM", "South Gwinett HS", "Muckdogs", "W 2-1", "", ""),
        new Event ("August 26", "130 PM", "South Gwinett HS", "@Muckdogs", "W 15-6", "", ""),

        new Event ("September 2", "", "", "No Game", "", "Labor Day Weekend", ""),
        
        new Event ("September 8", "4 PM", "Druid Hills Middle", "@Cherokees", "W 9-4", "Playoff Game 1", ""),
        new Event ("September 9", "1030 AM", "Druid Hills Middle", "Cherokees", "L 6-2", "Playoff Game 2", ""),
        new Event ("September 9", "130 PM", "Druid Hills Middle", "@Cherokees", "L 9-2", "Playoff Game 3", ""),
        new Event ("March  2019", "TBD", "TBD", "TBD", "", "", "")
        

    ];

var games2017 = [
        new Event ("April 2", "12 PM", "Druid Hills Middle", "@Black Sox", "W 11-1", "GC: James Little", ""),
        new Event ("April 9", "12 PM", "South Gwinett", "Outlaws", "L 7-4", "", ""),
        new Event ("April 16", "", "", "No Game", "", "Easter", ""),
        new Event ("April 23", "12 PM", "Druid Hills Middle", "Cherokees", "Postponed", "Rain", ""),
        new Event ("April 30", "12 PM", "Lakeside", "@Black Sox", "L 9-4", "", ""),
        new Event ("May 5", "12 PM", "Druid Hills Middle", "@Muckdogs", "L 9-8", "", ""),
        new Event ("May 14", "", "", "No Game", "", "Mother's Day", ""),
        new Event ("May 21", "12 PM", "Druid Hills Middle", "Dragons", "Postponed", "Rain", ""),
        new Event ("May 30", "", "", "No Game", "", "Memorial Day", ""),
        new Event ("June 4", "4 PM", "Druid Hills Middle", "@Rangers", "Postponed", "Rain", ""),
        new Event ("June 11", "12 PM", "Osborne", "@Cherokees", "L 3-2", "", ""),
        new Event ("June 18", "12 PM", "Druid Hills Middle", "@Barracudas", "L 11-8", "", ""),
        new Event ("June 25", "12 PM", "Druid Hills Middle", "Muckdogs", "W 8-3", "GC: Tom Hart", ""),
        new Event ("July 2", "12 PM", "South Gwinett", "@Outlaws", "L 11-6", "", ""),
        new Event ("July 9", "12 PM", "Druid Hills Middle", "Barracudas", "W 4-3", "GC: Joel Pierce", ""),
        new Event ("July 16", "1145 PM", "Druid Hills Middle", "Dragons", "L 6-0", "", ""),
        new Event ("July 23", "10 AM", "Druid Hills Middle", "@Rangers", "W 10-5", "GC: Sean Lennox, Colin Shaepe", ""),
        new Event ("July 23", "1 PM", "Druid Hills Middle", "Rangers", "L 10-6", "", ""),
        new Event ("July 30", "12 PM", "Druid Hills Middle", "Black Sox", "W 12-5", "GC: Tony Plagman", ""),
        new Event ("August 6", "4 PM", "Druid Hills Middle", "Rangers", "L 4-3", "", ""),
        new Event ("August 13", "1030 AM", "Druid Hills Middle", "Cherokees", "W 4-3", "GC: Ryan Flemming, Sean Lennox", ""),
        new Event ("August 13", "1 PM", "Druid Hills Middle", "Cherokees", "W 6-3", "GC: Phil Lucas", ""),
        new Event ("August 20", "4 PM", "Druid Hills Middle", "@Barracudas", "W 6-1", "GC: Phil Lucas", ""),
        new Event ("August 27", "10 AM", "Druid Hills Middle", "Dragons", "L 4-1", "", ""),
        new Event ("September 3", "", "", "No Game", "", "Labor Day", ""),
        new Event ("September 9", "1215 PM", "South Gwinett HS", "@Outlaws", "L", "Playoff Game 1", ""),
        new Event ("September 9", "3 PM", "South Gwinett HS", "Outlaws", "L", "Playoff Game 2", "")


    ];


var games2016 = [
        new Event("April 3", "12 PM", "Druid Hills Middle", "Reds", "W 8-6", "Opening Day", ""),
        new Event("April 10", "12 PM", "Druid Hills Middle", "@Dragons", "L 6-8", "", ""),
        new Event("April 17", "", "", "No Game", "", "BYE", ""),
        new Event("April 24", "12 PM", "Druid Hills Middle", "@Rangers", "L 4-5", "", ""),
        new Event("May 1", "12 PM", "Druid Hills Middle", "Rangers", "L 11-9", "", ""),
        new Event("May 8", "", "", "No Game", "", "Mother's Day", ""),
        new Event("May 15", "12 PM", "North Cobb", "@Cherokees", "L 5-6", "", ""),
        new Event("May 22", "12 PM", "Druid Hills Middle", "@Reds", "W 10-1", "", ""),
        new Event("May 29", "", "", "No Game", "", "Memorial Day", ""),
        new Event("June 5", "12 PM", "Druid Hills Middle", "@Barracudas", "W 5-4", "", ""),
        new Event("June 12", "12 PM", "North Cobb", "Cherokees", "W 3-4", "", ""),
        new Event("June 19", "12 PM", "Lakeside", "Mudcats", "L 6-5", "", ""),
        new Event("June 26", "12 PM", "Druid Hills Middle", "Rockies", "W 12-6", "", ""),
        new Event("July 3", "", "", "No Game", "", "4th of July Weekend", ""),
        new Event("July 10", "12 PM", "Lakeside", "@Mudcats", "W 14-2", "", ""),
        new Event("July 17", "12 PM", "South Gwinett", "Dragons", "L 5-2", "", ""),
        new Event("July 24", "", "", "No Game", "", "BYE", ""),
        new Event("July 31", "4 PM", "Druid Hills Middle", "Raw Dawgs", "W 9-6", "", ""),
        new Event("August 7", "12 PM", "Druid Hills Middle", "@Titans", "L 6-5", "", ""),
        new Event("August 14", "12 PM", "Druid Hills Middle", "@Cobb Red Sox", "W 17-6", "", ""),
        new Event("August 21", "12 PM", "Druid Hills Middle", "@Bandits", "W 11-4", "", ""),
        new Event("August 28", "12 PM", "Druid Hills Middle", "Dragons (18+)", "W 18-0", "", ""),
        new Event("September 4", "", "", "No Game", "", "Labor Day Weekend", ""),
        new Event("September 11", "12 PM", "Druid Hills Middle", "Barracudas", "W 5-0", "", ""),
        new Event("September 17", "4 PM", "Druid Hills Middle", "Rangers", "W 5-2", "Saturday Wildcard - Round 1", ""),
        new Event("September 18", "12 PM", "Osborne HS", "Dragons", "L 6-1", "Semi Final Game 1", ""),
        new Event("September 25", "11 AM", "Druid Hills Middle", "Dragons", "L 5-3", "Semi Final Game 2", ""),
        new Event("March 26, 2017", "T B D", "T B D", "T B D", "", "", "")
];

var games2015 = [
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


function Schedule()
{
    // last column is for evite link
    this.events = games2019;
    this.year = "2019";
}


Schedule.prototype = {
    // set constructors 
    constructor: Schedule,

    // set methods
    getSchedule: function()
    {
        var result = this.events;
        debug(result);
        return (result);
    },

    getNextGame: function ()
    {
        
        var games = this.events;
        var nextGame = null;
        var done = false;
        var numGames = games.length;

        for (var j=0; !done && j<numGames; j++)
        {
            // find game that has no result and is not a holiday
            if (games[j].result=="" && games[j].opponent != "No Game")
            {
                // found it; return this one
                nextGame = games[j];
                done = true;
            }
        }

        debug ("getNextGame, nextGame:" + nextGame);

        return (nextGame);
    },

    getPrevGame: function()
    {
        var games = this.events;
        debug ("games is " + games);
        debug ("this.events is " + this.events);

        var prevGame = null;
        var done = false;
        var doneInner = false;
        var numGames = games.length;

        // first find next game, and then loop backwards to prior game that is not a holiday 
        for (j=0; !done && j<numGames; j++)
        {
            debug (games[j].opponent);
            // find game that has no result and is not a holiday
            if (games[j].result=="" && games[j].opponent != "No Game")
            {
                // found it; return this one
                for (k=j-1; !doneInner && k>=0; k--)
                {
                    // find game that has a result and is not a holiday
                    if (games[k].result !="" && games[k].opponent != "No Game")
                    {
                        prevGame = games[k];
                        debug ("prev game opp:" + prevGame.opponent);
                        doneInner = true;
                        done = true;
                    }
                }
            }
        }
        return (prevGame);
    },

    getRecord: function ()
    {
        var games = this.events;
        var record = {
            year: this.year,
            wins: 0,
            losses: 0,
            ties: 0,
        };

        for (var j= 0; j < games.length; j++ )
        {
            if (games[j].result.indexOf ("W") > -1)
            {
                record.wins++;
            }
            else if (games[j].result.indexOf ("L") > -1)
            {
                record.losses++;
            }
            else if (games[j].result.indexOf ("T") > -1)
            {
                record.ties++;
            }

        }
        return record;
    }

};


module.exports = new Schedule();