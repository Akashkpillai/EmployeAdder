const express = require('express')
const router = express.Router()
const services = require('../controller/employeControler')


router.post('/add-employe',services.addEmploye)
router.get('/employe',services.getEmployeDetails)





module.exports = router