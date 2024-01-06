const { nanoid } = require("nanoid");
const URL = require('../models/url');

async function handleGenerateShortURL(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error:"url is required."});
    const shortID = nanoid(8);

    URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitedHistory: []
    })

    return res.render('home', {
        id: shortID,
    })
    // return  res.json({id: shortID, url: body.url});
}

async function handleGetAnalytics(req, res) {
    const shortID = req.params.shortID;
    const entry = await URL.findOne({shortID});
    const visitedCount = entry.visitedHistory.length;
    const analytics = entry.visitedHistory;
    return res.json({visitedCount: visitedCount, analytics: analytics});
}

async function handleRedirectURL(req, res) {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate(
        {
        shortID,
        },
        {
            $push: {
                visitedHistory: {
                    timestamp: Date.now(),
                },
            },
        }   
    );
    return res.redirect(entry.redirectURL);
}

module.exports = {
    handleGenerateShortURL,
    handleGetAnalytics,
    handleRedirectURL,
}