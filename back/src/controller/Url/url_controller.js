const { Urls } = require("../../models/Urls")

const getAll = async (req, res) => {
    try {
        const urls = await Urls.findAll({order: [['access', 'DESC']], limit: 100 });
        res.json(urls)
    } catch (error) {
        res.json({ seccess: false, message: 'ERROOOOOU!', error })
    }
}
const createUrl = async (req, res) => {
    try {
        if(req.body.value_url.length<= 12) return res.json({success: false, message: 'Link inserrido é muito curto'})
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
const deleteUrl = async (req, res) => {
    try {
        const url = await Urls.findOne({where: req.body});
        await url.destroy({where: req.body}).then(promise => {
            res.json({ success: true, urls: promise })
        })
    } catch (error) {
        res.json({ seccess: false, message: 'ERROOOOOU!', error })
    }
}

module.exports = {
    getAll,
    createUrl,
    updateAccess,
    deleteUrl
}
