import { Request, Response } from 'express';
import appointmentModel from '../../models/appointment';


const postAppointmentModel = async (req: Request, res: Response) => {
    const  { IdUserPsychologist } = req.params
    const { date, hour, type } = req.body;
    if (typeof date !== "string" ||  typeof hour !== "string" || (type !== "Virtual" && type !== "Presencial")) {
        res.status(404).send("some of the data is not a string")
    } else {
        const appointmentExist = await appointmentModel.findOne({
            'date': date,
            'IdUserClient': req.user
         })
        if (!appointmentExist) {
            try {
                const appointment = await appointmentModel.create({
                    date,
                    hour,
                    type,
                    IdUserClient: req.user,
                    IdUserPsychologist
                })
                console.log(appointment)
                res.status(201).send("appointment created successfully")
            } catch (err) {
                res.status(404).json({ error: err })
            }
        } else {
            res.status(404).json('Ya has reservado una cita en esta fecha')            
        }
    }
}

const getAppointmentAsPsychologist = async (req: Request, res: Response) => {
    try {
        const appointment = await appointmentModel.find({ 'IdUserPsychologist': req.user }).populate("IdUserClient", {
            firstName: 1,
            lastName: 1,
            email: 1,
            country: 1,
            Specialties: 1,
          });    
        res.status(200).json(appointment)
     } catch (err) {
        console.log(err)
     }
}

const getAppointmentAsClient = async (req: Request, res: Response) => {
    try {
        const appointment = await appointmentModel.find({ 'IdUserClient': req.user }).populate("IdUserPsychologist", {
            firstName: 1,
            lastName: 1,
            email: 1,
            country: 1,
            Specialties: 1,
            profileImage: 1
          });    ;    
        res.status(200).json(appointment)
     } catch (err) {
        console.log(err)
     }
}

const deleteAppointAsPsychologist = async (req: Request, res: Response) => { 
    const { IdAppointment } = req.body;  
    try {
        await appointmentModel.findOneAndDelete({      
            '_id': IdAppointment,
            'IdUserPsychologist': req.user
        });
        res.status(200).json('Appointment deleted succesfully')
    } catch (error) {
        res.status(200).json({ error: error })
    }
}

const deleteAppointAsClient = async (req: Request, res: Response) => {
    const { IdAppointment } = req.body; 
    try {
        await appointmentModel.findOneAndDelete({      
            '_id': IdAppointment,
            'IdUserClient': req.user
        });
        res.send('Appointment deleted succesfully')
    } catch (error) {
        res.status(200).json({ error: error })
    }
}

const putAppointment = async (req:Request , res: Response) => {
    try{
        const { idAppointment } = req.params;
        const data = await appointmentModel.findByIdAndUpdate(idAppointment, req.body, { new: true })
        res.status(200).send('Cita editada correctamente')
    } catch(err) {
        res.status(404).send(err)
    }
}

module.exports = {
    postAppointmentModel,
    getAppointmentAsPsychologist,
    getAppointmentAsClient,
    deleteAppointAsPsychologist,
    deleteAppointAsClient,
    putAppointment
}



// const putAppointment = async (req:Request , res: Response) => {
//     try{
//         const { idAppointment } = req.params;
//         const data = await appointmentModel.findByIdAndUpdate(idAppointment, req.body, { new: true })
//         res.status(200).send('Cita editada correctamente')
//     } catch(err) {
//         res.status(404).send(err)
//     }
// }



// const deleteAppointmentModel = async (req:Request , res: Response) => {
// try{
// const { idAppointment } = req.body;

//  const data = await appointmentModel.deleteOne({_id:idAppointment});
//  //aqui pregunto si se borro el appointment o si existe

//  if(Number(data.deletedCount) === 0){
// //si el appointment no existe responde de la siguiente manera.
//      res.status(404).send("the appointment does not exist")
//  }else{
// //si el appointment existe y se borro con exito , responde de esta manera.
//     res.status(200).send('appointment was deleted successfully')
//  }
// }catch(err){
//     res.status(404).json({error:err})
// }
// }

// const getAllAppointment = async (req:Request , res: Response) => {
//     try{
//         const allAppointment = await appointmentModel.find();
//         res.status(200).json(allAppointment)
//     } catch(err) {
//         res.status(404).json({data:err})
//     }
// }