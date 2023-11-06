const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const listMaterial = async () => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.listMaterial);
        return list.recordset;
    }catch(error) {
        error.message;
    }
}

const listByIdMaterial = async (materialId) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request()
                    .input('materialId', sql.Int, materialId)
                    .query(sqlQueries.listByIdMaterial);
        return list.recordset;
    }catch(error) {
        error.message;
    }
}

const addMaterial = async (materialData) => {
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertMaterial = await pool.request()
                                .input('materialName', sql.NVarChar(100), materialData.materialName)
                                .input('materialDescription', sql.NVarChar(500), materialData.materialDescription)
                                .input('materialStartDate', sql.Date, materialData.materialStartDate)
                                .input('materialPrice', sql.Int, materialData.materialPrice)
                                .query(sqlQueries.addMaterial);
        return insertMaterial.recordset;
    }catch(error){
        return error.message;
    }
}

const updateMaterial = async (materialId, materialData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const update = await pool.request()
                        .input('materialId', sql.Int, materialId)
                        .input('materialName', sql.NVarChar(100), materialData.materialName)
                        .input('materialDescription', sql.NVarChar(500), materialData.materialDescription)
                        .input('materialStartDate', sql.Date, materialData.materialStartDate)
                        .input('materialPrice', sql.Int, materialData.materialPrice)
                        .query(sqlQueries.updateMaterial);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteMaterial = async(materialId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const deleted = await pool.request()
                        .input('materialId', sql.Int, materialId)
                        .query(sqlQueries.deleteMaterial);
        return deleted.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    listMaterial,
    listByIdMaterial,
    addMaterial,
    updateMaterial,
    deleteMaterial
}