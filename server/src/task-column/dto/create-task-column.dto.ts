import { IsNotEmpty, IsString } from 'class-validator';
import { Board } from '../../board/entities/board.entity';

export class CreateTaskColumnDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  board: Board;
}
