import { Entity, PrimaryGeneratedColumn, Column,  OneToMany } from "typeorm"
import { Patients } from "./patients"
import { History_diseases } from "./history_diseases"
import { Recipes } from "./recipes"

@Entity()
export class Doctors {

    @PrimaryGeneratedColumn()
    doctor_id: number

    @Column()
    name: string

    @Column()
    surname: string

    @Column()
    email: string

    @Column()
    phone: number

    @Column()
    address: string

    @OneToMany(()=> Patients, (patient) => patient.doctor_id)
    patient: Patients

    @OneToMany(()=> History_diseases, (history_diseases) => history_diseases.doctor_id)
    history_diseases: History_diseases

    @OneToMany(()=> Recipes, (recipes) => recipes.doctor_id)
    recipes: Recipes
}
