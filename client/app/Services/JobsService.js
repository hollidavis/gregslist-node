import { ProxyState } from '../AppState.js'
import Job from '../Models/Job.js'
import { api } from './AxiosService.js'

class JobsService {
  constructor() {
    this.getAllJobs()
  }

  async createJob(rawJob) {
    const res = await api.post('jobs', rawJob)
    console.log('your new job', res.data)
    ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
  }

  async getAllJobs() {
    try {
      const res = await api.get('jobs')
      console.log(res.data)
      ProxyState.jobs = res.data.map(j => new Job(j))
    } catch (error) {
      console.error(error)
    }
  }

  async applyJob() {
    console.log('applied for job')
  }

  async deleteJob(jobId) {
    const res = await api.delete('jobs/' + jobId)
    console.log(res.data)
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id != jobId)
  }
}

export const jobsService = new JobsService()
