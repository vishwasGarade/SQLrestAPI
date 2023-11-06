const eventData = require('../data/events');

const listMaterial = async (req, res, next) => {
    try{
        const events = await eventData.listMaterial();
        res.send(events);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const listByIdMaterial = async(req, res, next) => {
    try{
        const materialId = req.params.id;
        const oneEvent = await eventData.listByIdMaterial(materialId);
        res.send(oneEvent);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const addMaterial = async(req, res, next) => {
    try{
        const data = req.body;
        const created = await eventData.addMaterial(data);
        res.send(created);
    }catch(error){
        res.status(400).send(error.message);
    }
}

const updateMaterial = async(req, res, next) => {
    try {
        const materialId = req.params.id;
        const data = req.body;
        const updated = await eventData.updateMaterial(materialId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteMaterial = async(req, res, next) => {
    try {
        const materialId = req.params.id;
        const deletedmat = await eventData.deleteMaterial(materialId);
        res.send(deletedmat);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    listMaterial,
    listByIdMaterial,
    addMaterial,
    updateMaterial,
    deleteMaterial
}