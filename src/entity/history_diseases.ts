import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity()
export class History_diseases {

    @PrimaryColumn()
    patient_id: number

    @PrimaryColumn()
    doctor_id: number

    @Column()
    address: string

    @Column()
    data_found: Date
}
