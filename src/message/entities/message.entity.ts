import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  text: string;

  @Column({ type: 'varchar', length: 64 })
  from: string;

  @Column({ type: 'varchar', length: 64 })
  to: string;

  @Column({ default: false })
  isRead: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  uptadedAt?: Date;
}
