import { Column } from 'typeorm';

export class Dividend {
  @Column()
  reference_date: Date;

  @Column()
  payment_date: Date;

  @Column({ type: 'float' })
  value: number;
}
