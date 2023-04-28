import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {

  Route.post("register", "AuthController.register");
  Route.post("login", "AuthController.login");
  
      Route.group(() => {
      Route.get("todos", "TodosController.index");
      Route.get("todos/:id", "TodosController.show");
      Route.put("todos/update", "TodosController.update");
      Route.post("todos", "TodosController.store");
      }).middleware("auth:api");
      
}).prefix("api");
