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
        await Urls.create(req.body).then(promise => {
            res.json({ success: true, urls: promise })
        })
    } catch (error) {
        res.json({ seccess: false, message: 'ERROOOOOU!', error })
    }
}

module.exports = {
    getAll,
    createUrl
}
