import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Link } from 'src/links/link.entity';
import { Role } from './role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  google: string;

  @OneToMany(type => Link, link => link.user)
  links: Link[];

  @ManyToMany(type => Role, {
    eager: true,
  })
  @JoinTable()
  roles: Role[];
}
