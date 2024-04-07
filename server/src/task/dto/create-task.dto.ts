import { IsNotEmpty, IsString } from 'class-validator';
import { TaskColumn } from '../../task-column/entities/task-column.entity';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  priority: string;

  @IsNotEmpty()
  @IsString()
  dueDate: string;

  @IsNotEmpty()
  column: TaskColumn;
}
