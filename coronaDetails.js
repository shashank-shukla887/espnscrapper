const request = require("request");
const cheerio = require("cheerio");
request("https://www.worldometers.info//coronavirus//",cb);
function cb(err,res,body)
{
    if(err)
    {
        console.error("error",err);
    }
    else{
        handleHtml(body)
        
    }}
    function handleHtml(html)
    {
    let selecTool=cheerio.load(html);

    let coronaStats = selecTool(".maincounter-number");

    let totalCases = selecTool(coronaStats[0]).text();
    console.log(" total case -->"+totalCases);

    let  deaths= selecTool(coronaStats[1]).text();
    console.log("  deaths-->"+deaths);

    let recoveredCases= selecTool(coronaStats[2]).text();
    console.log(" recoveredCases -->"+recoveredCases);
    
    }


