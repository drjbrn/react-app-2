import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ActivityLog } from '../../activity-log/entities/activity-log.entity';
import { Board } from '../../board/entities/board.entity';
import { Task } from '../../task/entities/task.entity';

@Entity()
export class TaskColumn {
  @PrimaryGeneratedColumn({ name: 'column_id' })
  id: number;

  @Column({ name: 'column_title' })
  title: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(() => Board, (board) => board.column, {
    onDelete: 'CASCADE',
  })
  board: Board;

  @OneToMany(() => Task, (task) => task.column, { onDelete: 'CASCADE' })
  tasks: Task[];

  @OneToMany(() => ActivityLog, (activityLog) => activityLog.task, {
    cascade: true,
  })
  activityLogs: ActivityLog[];
}
