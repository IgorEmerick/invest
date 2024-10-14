import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Dividend } from './Dividend';
import { Result } from './Result';

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

  @Column(() => Dividend)
  dividends: Dividend[];

  @Column({ type: 'float' })
  dividend_yield: number;

  @Column({ type: 'float', default: 0 })
  leverage: number;

  @Column(() => Result)
  results: Result[];

  @Column({ type: 'float' })
  efficiency: number;
}
