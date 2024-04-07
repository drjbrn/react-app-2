import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsOptional } from 'class-validator';
import { TaskColumn } from '../../task-column/entities/task-column.entity';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsOptional()
  title: string;

  @IsOptional()
  description: string;

  @IsOptional()
  priority: string;

  @IsOptional()
  dueDate: string;

  @IsOptional()
  column: TaskColumn;
}
