import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { History_diseases } from './history_diseases';
import { Recipes } from "./recipes";

@Entity()
export class Patients {

    @PrimaryGeneratedColumn()
    patient_id: number

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

    @Column()
    doctor_id: number

    @OneToMany(()=> History_diseases, (history_diseases) => history_diseases.patient_id)
    history_diseases: History_diseases

    @OneToMany(()=> Recipes, (recipes) => recipes.patient_id)
    recipes: History_diseases
}
