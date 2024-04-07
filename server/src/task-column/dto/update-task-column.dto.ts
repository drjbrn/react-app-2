import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateTaskColumnDto } from './create-task-column.dto';
import { Board } from '../../board/entities/board.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskColumnDto extends PartialType(CreateTaskColumnDto) {
  @ApiProperty({
    required: false,
    example: 'Update column',
    description: 'Column title',
  })
  @IsOptional()
  title: string;

  @ApiProperty({ required: false, example: '1', description: 'Board id' })
  @IsOptional()
  board: Board;
}
