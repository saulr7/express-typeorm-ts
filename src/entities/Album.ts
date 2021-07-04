import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Photo } from "./Photo";


@Entity()
class Album {

  @PrimaryGeneratedColumn()
  id: number

  @Column("text")
  name: string

  @Column("text")
  description: string

  @OneToMany(() => Photo, photo => photo.album)
  photos: Photo[]


  @Column({
    type: "text",
    default: new Date()
  })
  createdAt: Date

  @Column({
    type: "text",
    default: new Date()
  })
  updatedAt: Date




}


export default Album