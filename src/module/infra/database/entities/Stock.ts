import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('stocks')
export class Stock {
  @ObjectIdColumn()
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column()
  @Index()
  code: string;

  @Column({ type: 'float' })
  price: number;
}
