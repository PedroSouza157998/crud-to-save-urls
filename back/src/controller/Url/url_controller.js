const { Urls } = require("../../models/Urls")

const getAll = async (req, res) => {
    try {
        const urls = await Urls.findAll();
        console.log();
        res.json(urls)
    } catch (error) {
        res.json({ seccess: false, message: 'ERROOOOOU!', error })
    }
}
const createUrl = async (req, res) => {
    try {
        await Urls.create(req.body);
        res.json({success: true, urls: req.body})
    } catch (error) {
        res.json({ seccess: false, message: 'ERROOOOOU!', error })
    }
}

module.exports = {
    getAll,
    createUrl
}
