import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"
import NotificationsService from "../Services/NotificationsService.js";

function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}

export default class HousesController {
  constructor() {
    ProxyState.on('houses', _draw)
    _draw()
  }

  async createHouse() {
    try {
      event.preventDefault()
      let form = event.target
      let rawHouse = {
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        levels: form.levels.value,
        year: form.year.value,
        price: form.price.value,
        description: form.description.value,
        imgUrl: form.imgUrl.value
      }
      await housesService.createHouse(rawHouse)
      NotificationsService.toast("House created!")
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }
  async deleteHouse(houseId) {
    try {
      await housesService.deleteHouse(houseId)
      NotificationsService.toast("House deleted!", "error")
      console.log('you are trying to delete a house by the id of', houseId)
    } catch (error) {
      console.error(error)
    }
  }
  async bidHouse(houseId) {
    try {
      await housesService.bidHouse(houseId)
      NotificationsService.toast("Bid submitted!")
      console.log('you are bidding on the house with the id of', houseId)
    } catch (error) {
      console.error(error)
    }
  }
}