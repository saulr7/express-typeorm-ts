import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne
} from 'typeorm'
import Album from './Album';

@Entity()
export class Photo extends BaseEntity {



  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string

  @Column("text")
  description: string

  @Column("text")
  filename: string;

  @Column("integer")
  views: number;

  @Column("bool")
  isPublished: boolean;

  @ManyToOne(() => Album, album => album.photos)
  album: Album;


}

