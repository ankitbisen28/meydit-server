import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TestsController {
    public async index({ response }: HttpContextContract) {
        response.send("IT's working finely");
      }
}
