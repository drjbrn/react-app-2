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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaskColumn } from './entities/task-column.entity';

@ApiTags('Column')
@Controller('column')
export class TaskColumnController {
  constructor(private readonly taskColumnService: TaskColumnService) {}

  @ApiOperation({ summary: 'Create new column (list)' })
  @ApiResponse({ status: 201, type: TaskColumn })
  @Post()
  create(@Body() createTaskColumnDto: CreateTaskColumnDto) {
    return this.taskColumnService.create(createTaskColumnDto);
  }

  @ApiOperation({ summary: 'Get all column' })
  @ApiResponse({ status: 200, type: [TaskColumn] })
  @Get('board/:boardId')
  async findAll(@Param('boardId') boardId: string) {
    if (!boardId || isNaN(parseInt(boardId))) {
      throw new BadRequestException('Invalid board id');
    }

    const columns = await this.taskColumnService.findAll(parseInt(boardId, 10));
    return columns;
  }

  @ApiOperation({ summary: 'Get column by id' })
  @ApiResponse({ status: 200, type: TaskColumn })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskColumnService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update column by id' })
  @ApiResponse({ status: 200, type: TaskColumn })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskColumnDto: UpdateTaskColumnDto,
  ) {
    return this.taskColumnService.update(+id, updateTaskColumnDto);
  }

  @ApiOperation({ summary: 'Remove column by id' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskColumnService.remove(+id);
  }
}
