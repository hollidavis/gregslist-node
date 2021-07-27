import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"
import NotificationsService from "../Services/NotificationsService.js";

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(job => {
    template += job.Template
  })
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
  constructor() {
    ProxyState.on('jobs', _draw)
    _draw()
  }

  async createJob() {
    try {
      event.preventDefault()
      let form = event.target
      let rawJob = {
        jobTitle: form.jobTitle.value,
        rate: form.rate.value,
        hours: form.hours.value,
        company: form.company.value,
        description: form.description.value,
      }
      await jobsService.createJob(rawJob)
      NotificationsService.toast("Job created!")
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }
  async deleteJob(jobId) {
    try {
      await jobsService.deleteJob(jobId)
      NotificationsService.toast("Job deleted!", "error")
      console.log('you are trying to delete a job by the id of', jobId)
    } catch (error) {
      console.error(error)
    }
  }
  async applyJob() {
    try {
      await jobsService.applyJob()
      NotificationsService.toast("Application submitted!")
    } catch (error) {
      console.error(error)
    }
  }
}