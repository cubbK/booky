import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Link } from 'src/links/link.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  google: string;

  @OneToMany(type => Link, link => link.user)
  links: Link[];

}
