import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  group: string;

  @Column()
  isFavorite: boolean;

  @Column()
  title: string;

  @ManyToOne(type => User, user => user.links)
  user: User;
}
