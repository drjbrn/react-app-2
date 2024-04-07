import { IsNotEmpty, IsString } from 'class-validator';
import { TaskColumn } from '../../task-column/entities/task-column.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    required: true,
    example: 'Create task',
    description: 'Task title',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    required: true,
    example: 'To do something...',
    description: 'Task description',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    required: true,
    example: 'Medium',
    description: 'Task priority',
  })
  @IsNotEmpty()
  @IsString()
  priority: string;

  @ApiProperty({
    required: true,
    example: '01.05.2024',
    description: 'Task due date',
  })
  @IsNotEmpty()
  @IsString()
  dueDate: string;

  @ApiProperty({ required: true, example: '2', description: 'Column id' })
  @IsNotEmpty()
  column: TaskColumn;
}
