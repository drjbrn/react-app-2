import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    const newBoard = {
      title: createBoardDto.title,
    };
    const createNewBoard = await this.boardRepository.save(newBoard);
    return createNewBoard;
  }

  async findAll() {
    return await this.boardRepository.find({
      relations: ['column', 'column.tasks'],
      order: {
        createdAt: 'ASC',
      },
    });
  }

  async findOne(id: number) {
    const board = await this.boardRepository.findOne({
      where: { id },
      relations: ['column', 'column.tasks'],
    });

    if (!board) throw new NotFoundException('Board not found.');

    return board;
  }

  async update(id: number, updateBoardDto: UpdateBoardDto) {
    const board = await this.boardRepository.findOne({
      where: { id },
      relations: {
        column: true,
      },
    });

    if (!board) throw new NotFoundException('Board not found.');

    const editBoard = await this.boardRepository.update(id, updateBoardDto);

    return editBoard;
  }

  async remove(id: number) {
    const board = await this.boardRepository.findOne({
      where: { id },
    });

    if (!board) throw new NotFoundException('Board not found.');

    await this.boardRepository.delete(id);

    return 'The board has been removed';
  }
}
