import { jobsService } from '../services/JobsService'
import BaseController from '../utils/BaseController'
export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  /**
       * Get all jobs
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async getAll(req, res, next) {
    try {
      const jobs = await jobsService.getAll()
      res.send(jobs)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Get job by ID
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async getById(req, res, next) {
    try {
      const job = await jobsService.getById(req.params.id)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Create job
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async create(req, res, next) {
    try {
      const job = await jobsService.create(req.body)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Edit job
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const job = await jobsService.edit(req.body)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }

  /**
       * Delete car
       * @param {import("express").Request} req
       * @param {import("express").Response} res
       * @param {import("express").NextFunction} next
       */

  async delete(req, res, next) {
    try {
      await jobsService.delete(req.params.id)
      res.send({ message: 'Successfully Deleted Car' })
    } catch (error) {
      next(error)
    }
  }
}
