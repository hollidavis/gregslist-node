import { housesService } from '../services/HousesService'
import BaseController from '../utils/BaseController'
export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  /**
       * Get all houses
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
       * Get house by ID
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
       * Create house
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
       * Edit house
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
       * Delete house
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
