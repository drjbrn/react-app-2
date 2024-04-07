import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from '../../board/entities/board.entity';
import { TaskColumn } from '../../task-column/entities/task-column.entity';
import { Task } from '../../task/entities/task.entity';

@Entity()
export class ActivityLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  boardId: number;

  @Column()
  action: string;

  @Column()
  entityType: string;

  @Column()
  entityId: number;

  @Column()
  details: string;

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
