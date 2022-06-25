// import { Router } from "express";
const Router = require("express")
const appointment = require("./appointments/appoimentsRoutes.ts");
const paymentHistory = require("./paymentHistory/paymentHistoryRoutes.ts");
const blogPost = require("./posts/postsRoutes.ts");
const reviews = require("./reviews/reviewsRoutes.ts");
const schedule = require("./schedule/scheduleRoutes.ts");
const userClient = require("./userClient/userClientRoutes.ts");
const userPsychologist = require("./userPsychologist/userPsychologistRoutes");
const rememberPassword = require("./nodemailer/nodemailerRoutes.ts")
const admin = require("./admin/adminRoutes")
const router = Router();
const passport = require('passport')


require('../routes/userClient/passport.ts')(passport)

// console.log(passport.initialize)
// router.use(passport.session())
router.use('/appointment', appointment)
router.use('/payment', paymentHistory)
router.use(blogPost)
router.use('/reviews', reviews)
router.use('/schedule', schedule)
router.use('/userclient', userClient)
router.use('/userpsychologist', userPsychologist)
router.use('/admin', admin)
router.use('/nodemailer', rememberPassword)


module.exports = router;
