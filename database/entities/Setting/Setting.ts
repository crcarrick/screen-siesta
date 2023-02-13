import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('setting')
export class SettingModel {
  @PrimaryGeneratedColumn('increment') id: number
  @Column({ unique: true }) key: string
  @Column() value: string
}
