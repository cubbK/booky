import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
