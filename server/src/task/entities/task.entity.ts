import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ example: '1', description: 'Unique id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Create new to do task', description: 'Task title' })
  @Column()
  title: string;

  @ApiProperty({
    example: 'To do something, when it was dome...',
    description: 'Task description',
  })
  @Column()
  description: string;

  @ApiProperty({ example: 'Low', description: 'Task priority' })
  @Column()
  priority: string;

  @ApiProperty({ example: '01.05.2024', description: 'Task due date' })
  @Column()
  dueDate: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ApiProperty({ example: '2', description: 'Column id' })
  @ApiProperty({ type: () => TaskColumn })
  @ManyToOne(() => TaskColumn, (column) => column.tasks, {
    onDelete: 'CASCADE',
  })
  column: TaskColumn;

  @OneToMany(() => ActivityLog, (activityLog) => activityLog.task, {
    cascade: true,
  })
  activityLogs: ActivityLog[];
}
