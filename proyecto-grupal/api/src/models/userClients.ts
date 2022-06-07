import {prop, getModelForClass} from '@typegoose/typegoose'

class userClient {
    @prop({required: true})
    firstName: string
    @prop({required: true})
    lastName: string
    @prop({required: true, trim: true})
    email: string
    @prop({required: true, minlength: 8})
    password: string
    @prop()
    birthDate: string
    @prop()
    country: string
}

const userClientModel = getModelForClass(userClient)
export default userClientModel