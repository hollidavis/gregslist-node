import { ProxyState } from '../AppState.js'
import Car from '../Models/Car.js'
import { api } from './AxiosService.js'

class CarsService {
  constructor() {
    this.getAllCars()
  }

  async createCar(rawCar) {
    const res = await api.post('cars', rawCar)
    console.log('your new car', res.data)
    ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
  }

  async getAllCars() {
    try {
      const res = await api.get('cars')
      console.log(res.data)
      ProxyState.cars = res.data.map(c => new Car(c))
    } catch (error) {
      console.error(error)
    }
  }

  async bidCar(carId) {
    const foundCar = ProxyState.cars.find(c => c.id == carId)
    foundCar.price += 100
    const res = await api.put('cars/' + carId, foundCar)
    console.log('updated car', res.data)
    ProxyState.cars = ProxyState.cars
  }

  async deleteCar(carId) {
    const res = await api.delete('cars/' + carId)
    console.log(res.data)
    ProxyState.cars = ProxyState.cars.filter(c => c.id != carId)
  }
}

export const carsService = new CarsService()
