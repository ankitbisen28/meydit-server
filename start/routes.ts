import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {

  Route.post("register", "AuthController.register");
  Route.post("login", "AuthController.login");
  Route.post("post/job", "PostJobsController.Post")

      Route.group(() => {
      Route.get("todos", "TodosController.index");
      Route.get("todos/:id", "TodosController.show");
      Route.put("todos/:id", "TodosController.update");
      Route.delete("todos/:id", "TodosController.destroy");
      Route.post("todos", "TodosController.store");
      }).middleware("auth:api");
      
}).prefix("api");
