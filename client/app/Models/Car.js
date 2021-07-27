export default class Car {
  constructor({ make, model, year, price, description, imgUrl, id }) {
    this.id = id
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.description = description || "no car description"
    this.imgUrl = imgUrl
  }

  get Template() {
    return `
    <div class="card">
          <img src="${this.imgUrl}" class="card-img-top" alt="${this.make} ${this.model} car image">
          <div class="card-body">
              <div class="text-center">
                  <p><b>${this.year} - ${this.make} - ${this.model}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>$${this.price}</em></p>
              <button class="btn btn-success btn-block" onclick="app.carsController.bidCar('${this.id}')"> Bid </button>
              <button class="btn btn-danger btn-block" onclick="app.carsController.deleteCar('${this.id}')"> Delete </button>
          </div>
    </div>
    `
  }

}