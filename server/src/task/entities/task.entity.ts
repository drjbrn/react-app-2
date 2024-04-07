import { ActivityLog } from '../../activity-log/entities/activity-log.entity';
import { TaskColumn } from '../../task-column/entities/task-column.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  priority: string;

  @Column()
  dueDate: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(() => TaskColumn, (column) => column.tasks, {
    onDelete: 'CASCADE',
  })
  column: TaskColumn;

  @OneToMany(() => ActivityLog, (activityLog) => activityLog.task, {
    cascade: true,
  })
  activityLogs: ActivityLog[];
}
