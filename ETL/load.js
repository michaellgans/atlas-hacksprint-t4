import connectDB from "../Utils/db.js";
import Pokemon from "../Utils/models/pokemon.js";
import Type from "../Utils/models/type.js";
import { promises as fs } from "fs";

async function load() {
    try {
        const pokemonData = await fs.readFile("./data/pokemon.json");
        const typeData = await fs.readFile("./data/type.json");

        connectDB();

        Pokemon.insertMany(JSON.parse(pokemonData))
            .then(() => {
                console.log("Data Insertion Complete");
            }).catch((err) => {
                console.error(err);
            });

        Type.insertMany(JSON.parse(typeData))
            .then(() => {
                console.log("Data Insertion Complete");
            }).catch((err) => {
                console.error(err);
            });

    } catch (err) {
        console.error(err); 
    }
    
}

export default await load();

