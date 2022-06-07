import {prop, getModelForClass} from '@typegoose/typegoose'

class posts {
    @prop({required: true})
    idPost: number

    @prop({required: true})
    idUserPsychologist: number

    @prop({ type: Date, default: Date.now })
    date: Date

    @prop({required: true, trim: true})
    title: string

    @prop({required: true})
    content: string

    @prop({ data: Buffer, contentType: String })
    image: File

    @prop({type: () => String})
    tags: string[]
}

const postsModel = getModelForClass(posts)
export default postsModel