import { IsNotEmpty, IsString } from 'class-validator';
import { Board } from '../../board/entities/board.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskColumnDto {
  @ApiProperty({
    required: true,
    example: 'New column',
    description: 'Column title',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ required: true, example: '1', description: 'Board id' })
  @IsNotEmpty()
  board: Board;
}
