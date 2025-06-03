const aiservice = require("../services/api.service")

module.exports.Getresponse = async (req, res) => {
    const code = req.body.code

    if (!code) {
        return res.status(400).send("prompt is required");
    }

    try {
        const Response = await aiservice(code);
        res.send(Response)
    } catch (error) {
        res.status(503).send("AI service is currently unavailable. Please try again later.");
    }
}