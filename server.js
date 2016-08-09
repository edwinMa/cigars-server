// setup express server
var express = require('express');
var app = express();

// setup postgress DB
var pg = require('pg');

var debug = require ('./debug');

// setup teamsnap
//var teamsnap = require('teamsnap.js');


// constants
CigarsServer = {};
CigarsServer.ListenPort = 3000;
CigarsServer.JSONSpacing = 4;
CigarsServer.Schedule = require ('./schedule');
CigarsServer.Fields = require ('./fields');
CigarsServer.Roster = require ('./roster');

CigarsServer.TeamSnapClientID = "08954858eba39d55ed4dcf070c31a4f4b0df2e8067ef716e4de94eb499959640";


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/*
 ** Begin JSON Restful API Calls
 */

app.get('/cigarsbaseball', function(request, response)
{
    response.send("Hello, it's a Cigars Baseball World");
});

// connect to postgres DB
app.get('/cigarsbaseball/db', function (request, response) 
{
    debug ("trying to connect to postgres db at " + process.env.DATABASE_URL);
    pg.connect(process.env.DATABASE_URL, function(err, client, done) 
    {
        client.query('SELECT * FROM test_table', function(err, result) 
        {
            debug ("pg connection good, running query...");
            done();
            debug ("after done...");
            if (err)
            { 
                debug ("query error " + err);
                console.log (err);
                console.error(err);
                response.send("Query Error " + err); 
            }
            else
            {
                debug ("database query successful");
                response.send("database query successful..." + {results: result.rows}); 
                // response.render('pages/db', {results: result.rows} );
            }
        });
    });
})


app.get('/cigarsbaseball/init/', function(request, response)
{
    debug("initializing teamSnap...");

    teamSnapInitialize();

    response.send("teamSnapInitialized");
});


app.get('/cigarsbaseball/fields/', function(request, response)
{
    debug("requesting fields...");

    var result = JSON.stringify(CigarsServer.Fields.getFields(), null, CigarsServer.JSONSpacing);

    response.send(result);
});

app.get('/cigarsbaseball/schedule/', function(request, response)
{
    debug("requesting schedule...");

    var result = JSON.stringify(CigarsServer.Schedule.getSchedule(), null, CigarsServer.JSONSpacing);
    response.send(result);
});


app.get('/cigarsbaseball/nextgame/', function(request, response)
{
    debug("requesting next game...");

    var result = JSON.stringify(CigarsServer.Schedule.getNextGame(), null, CigarsServer.JSONSpacing);

    response.send(result);
});

app.get('/cigarsbaseball/prevgame/', function(request, response)
{
    debug("requesting previous game...");

    var result = JSON.stringify(CigarsServer.Schedule.getPrevGame(), null, CigarsServer.JSONSpacing);

    response.send(result);
});

app.get('/cigarsbaseball/roster/', function(request, response)
{
    debug("requesting roster...");
    var result = JSON.stringify(CigarsServer.Roster.getRoster(), null, CigarsServer.JSONSpacing);
    response.send(result);
});
/*
 ** End JSON API Calls
 */

function teamSnapAuthenticate () {
            debug ("beginning teamSnap authentication");
            var path = 'https://auth.teamsnap.com/oauth/authorize?';
            var responseURI = "https://edwinma.github.io/cigarsbaseball.org/stats.html";
            var queryParams = ['client_id=' + CigarsServer.TeamSnapClientID,
                'redirect_uri=' + responseURI, // window.location,
                'scope=' + "read",
                'response_type=token'];
            var query = queryParams.join('&');
            var url = path + query;
            debug ("team snap auth URL: " + url);
            alert(url);
            window.location.replace(url);
}  

function teamSnapInitialize()
{
            debug ("initializing teamsnap w/ id");
            teamsnap.init(CigarsServer.TeamSnapClientID);

            // start session
            if (teamsnap.hasSession()) {
                teamsnap.auth();
                debug ("teamsnap has session, and authorized");
                teamsnap.loadCollections(function(err) {
                    if (err) {
                        alert('Error loading TeamSnap SDK');
                        return;
                    }
                    teamsnap.loadTeams(onTeamsLoad);
                });
            }
            else
            {
                // need to establish a new session
                debug ("need new teamsnap session");
                // teamSnapEstablishSession();
                teamSnapAuthenticate();
            }
}


app.listen(process.env.PORT || CigarsServer.ListenPort);
/*
 ** END
 */