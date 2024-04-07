import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateTaskColumnDto } from './create-task-column.dto';
import { Board } from '../../board/entities/board.entity';

export class UpdateTaskColumnDto extends PartialType(CreateTaskColumnDto) {
  @IsOptional()
  title: string;

  @IsOptional()
  board: Board;
}
