import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class Recipes {

    @PrimaryColumn()
    patient_id: number

    @PrimaryColumn()
    doctor_id: number

    @Column()
    medicine: string


}
