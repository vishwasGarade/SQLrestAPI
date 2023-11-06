const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

const {listByIdMaterial, listMaterial, addMaterial, updateMaterial, deleteMaterial} = eventController;

router.get('/material', listMaterial);
router.get('/material/:id', listByIdMaterial);
router.post('/material', addMaterial);
router.put('/material/:id', updateMaterial);
router.delete('/material/:id', deleteMaterial);

module.exports = {
    routes: router
}