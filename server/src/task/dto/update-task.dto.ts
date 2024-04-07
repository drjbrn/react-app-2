import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsOptional } from 'class-validator';
import { TaskColumn } from '../../task-column/entities/task-column.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({
    required: false,
    example: 'Update task',
    description: 'Task title',
  })
  @IsOptional()
  title: string;

  @ApiProperty({
    required: false,
    example: 'To do something...',
    description: 'Task description',
  })
  @IsOptional()
  description: string;

  @ApiProperty({
    required: false,
    example: 'High',
    description: 'Task priority',
  })
  @IsOptional()
  priority: string;

  @ApiProperty({
    required: false,
    example: '03.05.2024',
    description: 'Task due date',
  })
  @IsOptional()
  dueDate: string;

  @ApiProperty({
    required: false,
    example: '3',
    description: 'Column id',
  })
  @IsOptional()
  column: TaskColumn;
}
