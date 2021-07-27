import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"
import NotificationsService from "../Services/NotificationsService.js";

function _draw() {
  let template = ''
  ProxyState.cars.forEach(car => {
    template += car.Template
  })
  document.getElementById('cars').innerHTML = template
}

export default class CarsController {
  constructor() {
    ProxyState.on('cars', _draw)
    _draw()
  }

  async createCar() {
    try {
      event.preventDefault()
      let form = event.target
      let rawCar = {
        make: form.make.value,
        model: form.model.value,
        year: form.year.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
      }
      await carsService.createCar(rawCar)
      NotificationsService.toast("Car created!")
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }
  async deleteCar(carId) {
    try {
      await carsService.deleteCar(carId)
      NotificationsService.toast("Car deleted!", "error")
      console.log('you are trying to delete a car by the id of', carId)
    } catch (error) {
      console.error(error)
    }
  }
  async bidCar(carId) {
    try {
      await carsService.bidCar(carId)
      NotificationsService.toast("Bid submitted!")
      console.log('you are bidding on the car with the id of', carId)
    } catch (error) {
      console.error(error)
    }
  }
}