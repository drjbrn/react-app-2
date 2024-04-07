import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskColumnDto } from './dto/create-task-column.dto';
import { UpdateTaskColumnDto } from './dto/update-task-column.dto';
import { ActivityLogService } from '../activity-log/activity-log.service';
import { TaskColumn } from './entities/task-column.entity';

@Injectable()
export class TaskColumnService {
  constructor(
    @InjectRepository(TaskColumn)
    private taskColumnRepository: Repository<TaskColumn>,
    private activityLogService: ActivityLogService,
  ) {}

  async create(createTaskColumnDto: CreateTaskColumnDto) {
    const isExist = await this.taskColumnRepository.findBy({
      title: createTaskColumnDto.title,
    });

    if (isExist.length)
      throw new BadRequestException('This columns already exist');

    const newColumns = {
      title: createTaskColumnDto.title,
      board: { id: +createTaskColumnDto.board },
    };

    const createNewColumn = await this.taskColumnRepository.save(newColumns);
    await this.activityLogService.logAction(
      createNewColumn.board.id,
      'create',
      'column',
      createNewColumn.id,
      `Column '${createNewColumn.title}' created.`,
    );

    return createNewColumn;
  }

  async findAll(boardId: number) {
    return await this.taskColumnRepository.find({
      where: { board: { id: boardId } },
      relations: {
        tasks: true,
      },
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async findOne(id: number) {
    const column = await this.taskColumnRepository.findOne({
      where: { id },
      relations: {
        tasks: true,
        board: true,
      },
    });

    if (!column) throw new NotFoundException('Column not found');

    return column;
  }

  async update(id: number, updateTaskColumnDto: UpdateTaskColumnDto) {
    const column = await this.taskColumnRepository.findOne({
      where: { id },
      relations: {
        tasks: true,
        board: true,
      },
    });

    if (!column) throw new NotFoundException('Column not found');

    const editColumn = await this.taskColumnRepository.update(
      id,
      updateTaskColumnDto,
    );

    const boardId = column.board.id;
    await this.activityLogService.logAction(
      boardId,
      'update',
      'column',
      id,
      `Column '${updateTaskColumnDto.title}' updated.`,
    );

    return editColumn;
  }

  async remove(id: number) {
    const column = await this.taskColumnRepository.findOne({
      where: { id },
      relations: {
        board: true,
      },
    });

    if (!column) throw new NotFoundException('Column not found');

    const removedColumn = await this.taskColumnRepository.delete(id);

    const boardId = column.board.id;
    await this.activityLogService.logAction(
      boardId,
      'remove',
      'column',
      id,
      `Column '${column.title}' deleted.`,
    );

    return removedColumn;
  }
}
