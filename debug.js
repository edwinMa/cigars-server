var DEBUG = true;

debug = function (message)
{
    if (DEBUG)
    {
        console.log("CIGARS SERVER: " + message);
    }
};

module.exports = debug;