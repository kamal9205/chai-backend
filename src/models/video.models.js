import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videFile:{
            type:String, //Cloudinary url
            required: true,
        },
        thumbnail:{
            type:String, //Cloudinary url
            required: true,
        },
        tittle:{
            type:String, 
            required: true,
        },
        description:{
            type:String, 
            required: true,
        },
        duration:{
            type:Number, //Cloudinary url
            required: true,
        },
        views:{
            type:Number, 
            default: 0,
        },
        isPublished:{
            type:Boolean, 
            default: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref:"User",
        }
    },
    {timestamps:true}
);

videoSchema.plugin(mongooseAggregatePaginate); // now can write aggregate queries

export const Video = mongoose.model("Vide",videoSchema);