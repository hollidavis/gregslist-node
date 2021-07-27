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

  getAll(req, res, next) {
    try {
      // Add code here
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

  getById(req, res, next) {
    try {
      // Add code here
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

  create(req, res, next) {
    try {
      // Add code here
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

  edit(req, res, next) {
    try {
      // Add code here
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

  delete(req, res, next) {
    try {
      // Add code here
    } catch (error) {
      next(error)
    }
  }
}
