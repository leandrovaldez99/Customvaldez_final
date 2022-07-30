var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel')


router.get('/', async function(req,res,next){
    var tareas = await novedadesModel.getTareas();

    res.render('admin/novedades',{
        layout:'admin/layout',
        persona:req.session.nombre,
        tareas 

    });
});

module.exports = router;