import mongoose from 'mongoose'
const Schema = mongoose.Schema

const House = new Schema(
  {

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default House
