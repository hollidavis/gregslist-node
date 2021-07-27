import { ProxyState } from '../AppState.js'
import House from '../Models/House.js'
import { api } from './AxiosService.js'

class HousesService {
  constructor() {
    this.getAllHouses()
  }

  async createHouse(rawHouse) {
    const res = await api.post('houses', rawHouse)
    console.log('your new home', res.data)
    ProxyState.houses = [...ProxyState.houses, new House(res.data)]
  }

  async getAllHouses() {
    try {
      const res = await api.get('houses')
      console.log(res.data)
      ProxyState.houses = res.data.map(h => new House(h))
    } catch (error) {
      console.error(error)
    }
  }

  async bidHouse(houseId) {
    const foundHouse = ProxyState.houses.find(h => h.id == houseId)
    foundHouse.price += 1000
    const res = await api.put('houses/' + houseId, foundHouse)
    console.log('updated house', res.data)
    ProxyState.houses = ProxyState.houses
  }

  async deleteHouse(houseId) {
    const res = await api.delete('houses/' + houseId)
    console.log(res.data)
    ProxyState.houses = ProxyState.houses.filter(h => h.id != houseId)
  }
}

export const housesService = new HousesService()
