// Defined Routes
import PokeController from "../controllers/pokeControllers.js";
import TypeController from "../controllers/typeControllers.js";

// Routes Object
const routes = (app) => {
  // GET All Pokemon (w/ Pagination)
  /**
   * @swagger
   * /pokemon:
   *   get:
   *     summary: Returns the list of all Pokemon. Pagination Default => Page = 1, Limit = 10
   *     responses:
   *       200:
   *         description: The List of Pokemon
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Pokemon'
   */
  app.get('/pokemon', PokeController.getPokemon);

  // GET All Types (w/ Pagination)
  /**
   * @swagger
   * /types:
   *   get:
   *     summary: Returns the list of all Types. Pagination Default => Page = 1, Limit = 10
   *     responses:
   *       200:
   *         description: The List of Types
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Type'
   */
  app.get('/types', TypeController.getTypes);

  // GET Pokemon By Name
  /**
   * @swagger
   * /pokemon/{name}:
   *   get:
   *     summary: Returns Pokemon by Name
   *     parameters:
   *       - in: path
   *         name: name
   *         schema:
   *           type: string
   *         required: true
   *         description: The Pokemon Name
   *     responses:
   *       200:
   *         description: The Pokemon Object
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Pokemon'
   */
  app.get('/pokemon/:name', PokeController.getPokemonByName);

  // GET Type By Name
  /**
   * @swagger
   * /types/{name}:
   *   get:
   *     summary: Returns Type by Name
   *     parameters:
   *       - in: path
   *         name: name
   *         schema:
   *           type: string
   *         required: true
   *         description: The Type Name
   *     responses:
   *       200:
   *         description: The Type Object
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Type'
   */
  app.get('/types/:name', TypeController.getTypeByName);

  // GET Pokemon By Type (w/ Pagination)
  /**
   * @swagger
   * /{type}/pokemon:
   *   get:
   *     summary: Returns Pokemon by Type. Pagination Default => Page = 1, Limit = 10
   *     parameters:
   *       - in: path
   *         name: type
   *         schema:
   *           type: string
   *         required: true
   *         description: The Type Name
   *     responses:
   *       200:
   *         description: The Pokemon Objects
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Pokemon'
   */
  app.get('/:type/pokemon', TypeController.getPokemonByType);
};

// Defines Swagger schema for Pokemon and Type Objects
/**
 * @swagger
 * components:
 *   schemas:
 *     Pokemon:
 *       type: object
 *       properties:
 *         _id:
 *           type: integer
 *           description: The Pokemon ID
 *         pokeName:
 *           type: string
 *           description: The Pokemon Name
 *         pokeType1:
 *           type: string
 *           description: The Pokemon Type 1 Slot
 *         pokeType2:
 *           type: string
 *           description: The Pokemon Type 2 Slot
 *         pokeSprite:
 *           type: string
 *           description: The Pokemon Sprite
 *       example:
 *         _id: 1
 *         pokeName: bulbasaur
 *         pokeType1: grass
 *         pokeType2: poison
 *         pokeSprite: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
 *     Type:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The Type ID
 *         name:
 *           type: string
 *           description: The Type Name
 *         pokemonList:
 *           type: array
 *           description: The Pokemon of Type
 *         doubleTo:
 *           type: array
 *           description: 2x Damage Relation (Offense)
 *         doubleFrom:
 *           type: array
 *           description: 2x Damage Relation (Defense)
 *         halfTo:
 *           type: array
 *           description: 0.5x Damage Relation (Offense)
 *         halfFrom:
 *           type: array
 *           description: 0.5x Damage Relation (Defense)
 *         zeroTo:
 *           type: array
 *           description: 0x Damage Relation (Offense)
 *         zeroFrom:
 *           type: array
 *           description: 0x Damage Relation (Defense)
 *       example:
 *         _id: 66bb88da7646ac4b745a0cb4
 *         name: normal
 *         pokemonList: ["pidgey", "pidgeotto", "pidgeot", "rattata", "raticate"]
 *         doubleTo: []
 *         doubleFrom: ["fighting"]
 *         halfTo: ["rock", "steel"]
 *         halfFrom: []
 *         zeroTo: ["ghost"]
 *         zeroFrom: ["ghost"]
 */

// Export 
export default routes;
