import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Profile from "App/Models/Profile";
import User from "App/Models/User";

export default class UserProfilesController {
  public async index({ auth }: HttpContextContract) {
    const loggedUser = await auth.authenticate();
    const user = await User.find(loggedUser.id);
    const userProfile = await user?.related("profiles").query();
    const userDetails = [{email: user?.email, userProfile}];
    return userDetails;
  }

  public async store({ auth, request, response }: HttpContextContract) {
    // const user = await auth.authenticate();
    const profile = new Profile();
    profile.first_name = request.input("first_name");
    profile.last_name = request.input("last_name");
    profile.phone = request.input("phone");
    profile.address = request.input("address");
    profile.state = request.input("state");
    profile.post_code = request.input("post_code");
    profile.userId = auth.user!.id;
    // await user.related('profile_id').save(profile));
    await profile.save();
    // console.log(user.email)
    response.send(profile);
  }
}
