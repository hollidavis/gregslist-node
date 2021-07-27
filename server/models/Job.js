import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Job = new Schema(
  {
    jobTitle: { type: String, required: true },
    rate: { type: Number, required: true },
    hours: { type: Number, required: true },
    company: { type: String, required: true },
    description: { type: String }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job
