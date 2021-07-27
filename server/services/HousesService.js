import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class HousesService {
  async getAll() {
    const houses = await dbContext.Houses.find()
    return houses
  }

  async getById(id) {
    const house = await dbContext.Houses.findById(id)
    if (!house) {
      throw new BadRequest('Invalid ID')
    }
    return house
  }

  async create(body) {
    const house = await dbContext.Houses.create(body)
    return house
  }

  async edit(body) {
    const house = await dbContext.Houses.findByIdAndUpdate(body.id, body, { new: true })
    if (!house) {
      throw new BadRequest('Invalid ID')
    }
    return house
  }

  async bid(body) {
    let house = await this.getById(body.id)
    if (house.price > body.price) {
      throw new BadRequest('Houses bid can only be increased')
    }
    house = await dbContext.Houses.findByIdAndUpdate(body.id, body, { new: true })
    return house
  }

  async delete(id) {
    const house = await dbContext.Houses.findByIdAndDelete(id)
    if (!house) {
      throw new BadRequest('Invalid Id')
    }
    return house
  }
}

export const housesService = new HousesService()
