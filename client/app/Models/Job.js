export default class Job {
  constructor({ jobTitle, rate, company, description, id, hours }) {
    this.id = id
    this.jobTitle = jobTitle
    this.rate = rate
    this.hours = hours
    this.company = company
    this.description = description
  }
  get Template() {
    return `
    <div class="card shadow">
          <div class="card-body">
              <div class="text-center">
                  <p><b>${this.jobTitle} - ${this.company}</b></p>
                  <p>$${this.rate}/hr - ${this.hours}hrs/week</p>
              </div>
              <p class="text-center">${this.description}</p>
              <button class="btn btn-success btn-block" onclick="app.jobsController.applyJob()"> Apply </button>
              <button class="btn btn-danger btn-block" onclick="app.jobsController.deleteJob('${this.id}')"> Delete </button>
          </div>
    </div>
    `
  }
}