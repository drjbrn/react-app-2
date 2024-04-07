import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ActivityLog } from '../../activity-log/entities/activity-log.entity';
import { TaskColumn } from '../../task-column/entities/task-column.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany(() => TaskColumn, (column) => column.board, {
    onDelete: 'CASCADE',
  })
  column: TaskColumn[];

  @OneToMany(() => ActivityLog, (activityLog) => activityLog.board, {
    onDelete: 'CASCADE',
  })
  activityLogs: ActivityLog[];
}
