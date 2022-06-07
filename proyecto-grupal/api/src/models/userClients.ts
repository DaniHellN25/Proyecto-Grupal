import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose'

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

class userClient {
    @prop({required: true})
    firstName: string
    @prop({required: true})
    lastName: string
    @prop({required: true, trim: true, lowercase:true})
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