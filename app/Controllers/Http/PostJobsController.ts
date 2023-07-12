import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import PostJob from "App/Models/PostJob";
import Application from "@ioc:Adonis/Core/Application";

export default class PostJobsController {

  public async index({ response }: HttpContextContract) {
    const posts = await PostJob.query();
    response.send(posts);
  }

  public async Post({ request, auth }: HttpContextContract) {
    const name = request.input("name");
    const phone_num = request.input("phone_num");
    const email = request.input("email");
    const address = request.input("address");
    const state = request.input("state");
    const zip = request.input("zip");
    const type_clothing = request.input("type_clothing");
    const description = request.input("post_description");
    const budget = request.input("budget");
    const image = request.file("image");

    const post_job = new PostJob();
    post_job.name = name;
    post_job.phone_num = phone_num;
    post_job.email = email;
    post_job.address = address;
    post_job.state = state;
    post_job.zip = zip;
    post_job.type_clothing = type_clothing;
    post_job.description = description;
    post_job.budget = budget;
    post_job.userId = auth.user!.id;

    if (image) {
      const imageName = new Date().getTime().toString() + `.${image.extname}`;
      await image.move(Application.publicPath("images"), {
        name: imageName,
      });
      post_job.image = `images/${imageName}`;
    }

    post_job.save();
    return post_job;
  }
}
