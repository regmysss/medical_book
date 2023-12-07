import "reflect-metadata"
import { DataSource } from "typeorm"
import { Patients } from "./entity/patients"
import { Recipes } from "./entity/recipes"
import { History_diseases } from "./entity/history_diseases"
import { Doctors } from "./entity/doctors"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "78789898",
    database: "postgres",
    synchronize: false,
    logging: false,
    entities: [Patients, Recipes, History_diseases, Doctors],
    migrations: ['src/migration/**/*.ts'],
    subscribers: [],
})