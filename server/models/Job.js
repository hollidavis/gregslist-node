import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Job = new Schema(
  {

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job
