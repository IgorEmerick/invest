import { Column } from 'typeorm';

export class Result {
  @Column()
  reference_date: Date;

  @Column({ type: 'float' })
  income: number;

  @Column({ type: 'float' })
  expenses: number;

  @Column({ type: 'float' })
  efficiency: number;
}
