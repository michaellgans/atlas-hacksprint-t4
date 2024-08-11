// Defined Routes
import PokeController from "../controllers/pokeControllers.js";
import TypeController from "../controllers/typeControllers.js";

// Routes Object
const routes = (app) => {
  // GET All Pokemon (w/ Pagination)
  app.get('/pokemon', PokeController.getPokemon);

  // GET All Types (w/ Pagination)
  app.get('/types', TypeController.getTypes);

  // GET Pokemon By Name
  app.get('/pokemon/:name', PokeController.getPokemonByName);

  // GET Type By Name
  // app.get('/types/:name', TypeController.getTypeByName);

  // GET Pokemon By Type (w/ Pagination)
  // app.get('/pokemon/:type', TypeController.getPokemonByType);

  // GET API Docs (Swagger)
  // app.get('/api-docs', () => {});
};

// Export 
export default routes;
