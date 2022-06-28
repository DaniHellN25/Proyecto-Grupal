import { Router } from "express";
const validatePsychologist = require('../../middleware/validatePsychologist')
const validateClient = require('../../middleware/validateClient')
const validateUsers = require('../../middleware/validateUsers');

const {createSchedule, getSchedule, getScheduleByDate, deleteSchedule, updateSchedule} = require('./schedule.ts')

const scheduleRouter: Router = Router();

/* scheduleRouter.post('/create', validatePsychologist, createSchedule) */
// scheduleRouter.post('/create', validatePsychologist, createSchedule)
scheduleRouter.post('/create', validateUsers, createSchedule)
scheduleRouter.get('/get/:IdUserPsychologist', validateUsers, getSchedule)
scheduleRouter.get('/get/:IdUserPsychologist', validateUsers, getSchedule)
scheduleRouter.get('/date/:IdUserPsychologist', validatePsychologist, getScheduleByDate)
scheduleRouter.get('/date/:IdUserPsychologist', validateClient, getScheduleByDate)
scheduleRouter.delete('/:idSchedule', validateUsers, deleteSchedule)
scheduleRouter.put('/:idSchedule', validateUsers, updateSchedule)

module.exports = scheduleRouter