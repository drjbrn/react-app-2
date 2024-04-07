import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @ApiProperty({
    required: true,
    example: 'New board',
    description: 'Board title',
  })
  @IsNotEmpty()
  title: string;
}
