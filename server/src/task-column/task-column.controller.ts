import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { TaskColumnService } from './task-column.service';
import { CreateTaskColumnDto } from './dto/create-task-column.dto';
import { UpdateTaskColumnDto } from './dto/update-task-column.dto';

@Controller('column')
export class TaskColumnController {
  constructor(private readonly taskColumnService: TaskColumnService) {}

  @Post()
  create(@Body() createTaskColumnDto: CreateTaskColumnDto) {
    return this.taskColumnService.create(createTaskColumnDto);
  }

  @Get('board/:boardId')
  async findAll(@Param('boardId') boardId: string) {
    if (!boardId || isNaN(parseInt(boardId))) {
      throw new BadRequestException('Invalid board id');
    }

    const columns = await this.taskColumnService.findAll(parseInt(boardId, 10));
    return columns;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskColumnService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskColumnDto: UpdateTaskColumnDto,
  ) {
    return this.taskColumnService.update(+id, updateTaskColumnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskColumnService.remove(+id);
  }
}
