import { PartialType } from '@nestjs/mapped-types';
import { CreateBoardDto } from './create-board.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBoardDto extends PartialType(CreateBoardDto) {
  @ApiProperty({
    required: false,
    example: 'Update board',
    description: 'Board title',
  })
  title: string;
}
