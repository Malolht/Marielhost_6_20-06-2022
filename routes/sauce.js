const express = require("express");
const router = express.Router();
const sauceCtrl = require("../controllers/sauce");
const multer = require("../middleware/multer-config");
const auth = require('../middleware/auth');

router.post("/", auth, multer, sauceCtrl.createSauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get("/", auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.post("/:id/like", auth, sauceCtrl.likeDislikeSauce)


module.exports = router;