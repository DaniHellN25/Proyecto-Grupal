import { Router } from "express";
const {
    postAppointmentModel,
    getAppointmentAsPsychologist,
    getAppointmentAsClient,
    deleteAppointAsPsychologist,
    deleteAppointAsClient,
    putAppointment
} = require('./appointments');

const appoimentRouter: Router = Router();
const validateUsers = require("../../middleware/validateUsers")
const validatePsychologist = require("../../middleware/validatePsychologist")
const validateClient = require("../../middleware/validateClient")


appoimentRouter.post('/create/:IdUserPsychologist', validateUsers, postAppointmentModel);
appoimentRouter.get('/psychologist', validatePsychologist, getAppointmentAsPsychologist);
appoimentRouter.get('/client', validateClient, getAppointmentAsClient);
appoimentRouter.delete('/delete/psychologist/:IdAppointment', validatePsychologist, deleteAppointAsPsychologist);
appoimentRouter.delete('/delete/client/:IdAppointment', validateClient, deleteAppointAsClient);
appoimentRouter.put('/put_appointment/:IdAppointment', validateUsers, putAppointment)

module.exports = appoimentRouter;