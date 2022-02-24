const { Urls } = require("../../models/Urls")

const getAll = async (req, res) => {
    try {
        const urls = await Urls.findAll({order: [['access', 'DESC']] });
        res.json(urls)
    } catch (error) {
        res.json({ seccess: false, message: 'ERROOOOOU!', error })
    }
}
const createUrl = async (req, res) => {
    try {
        console.log(req.body)
        await Urls.create(req.body).then(promise => {
            res.json({ success: true, urls: promise })
        })
    } catch (error) {
        res.json({ seccess: false, message: 'ERROOOOOU!', error })
    }
}
const updateAccess = async (req, res) => {
    try {
        const url = await Urls.findOne({where: req.body});
        await Urls.update({access: url.access+1}, {where: req.body}).then(promise => {
            res.json({ success: true, urls: promise })
        })
    } catch (error) {
        res.json({ seccess: false, message: 'ERROOOOOU!', error })
    }
}

module.exports = {
    getAll,
    createUrl,
    updateAccess
}
