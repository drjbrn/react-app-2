import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from '../../board/entities/board.entity';
import { TaskColumn } from '../../task-column/entities/task-column.entity';
import { Task } from '../../task/entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ActivityLog {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '1', description: 'Board id' })
  @Column()
  boardId: number;

  @ApiProperty({ example: 'Create', description: 'Action type' })
  @Column()
  action: string;

  @ApiProperty({ example: 'Task', description: 'Entity type' })
  @Column()
  entityType: string;

  @ApiProperty({ example: '52', description: 'Entity id' })
  @Column()
  entityId: number;

  @ApiProperty({
    example: 'Create task "New To Do"',
    description: 'Action description',
  })
  @Column()
  details: string;

  @ApiProperty({ example: '24.04.2024', description: 'Time of action' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;

  @ManyToOne(() => Task, (task) => task.activityLogs)
  task: Task;

  @ManyToOne(() => TaskColumn, (column) => column.activityLogs, {
    onDelete: 'CASCADE',
  })
  column: TaskColumn;

  @ManyToOne(() => Board, (board) => board.activityLogs, {
    onDelete: 'CASCADE',
  })
  board: Board;
}
