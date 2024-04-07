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
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class TaskColumn {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @PrimaryGeneratedColumn({ name: 'column_id' })
  id: number;

  @ApiProperty({ example: 'New Column', description: 'Column title' })
  @Column({ name: 'column_title' })
  title: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ApiProperty({ type: () => Board })
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
