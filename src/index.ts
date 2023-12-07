import { AppDataSource } from "./data-source"
import { Patients } from "./entity/patients"

AppDataSource.initialize().then(async () => {


}).catch(error => console.log(error))
