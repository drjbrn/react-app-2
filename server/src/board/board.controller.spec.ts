import { Test, TestingModule } from '@nestjs/testing';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

describe('BoardController', () => {
  let controller: BoardController;

  const mockBoardService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardController],
      providers: [
        {
          provide: BoardService,
          useValue: mockBoardService,
        },
      ],
    }).compile();

    controller = module.get<BoardController>(BoardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new board', async () => {
      const createBoardDto = {
        title: 'New board',
      } as CreateBoardDto;

      const board = {
        id: 1,
        title: 'New Board',
        createdAt: new Date(),
        updateAt: new Date(),
        column: [],
        activityLogs: [],
      } as Board;

      jest.spyOn(mockBoardService, 'create').mockReturnValue(board);
      expect(await controller.create(createBoardDto)).toBe(board);
    });
  });

  describe('findAll', () => {
    it('should return an array of board', async () => {
      const board = [
        {
          id: 1,
          title: 'New Board',
          createdAt: new Date(),
          updateAt: new Date(),
          column: [],
          activityLogs: [],
        },
      ];

      const listOfBoard = [board];

      jest.spyOn(mockBoardService, 'findAll').mockReturnValue(listOfBoard);
      expect(await controller.findAll()).toBe(listOfBoard);
    });
  });

  describe('findOne', () => {
    it('should return data about the board', async () => {
      const id = '1';
      const board = {
        id: 1,
        title: 'New Board',
        createdAt: new Date(),
        updateAt: new Date(),
        column: [],
        activityLogs: [],
      };

      jest.spyOn(mockBoardService, 'findOne').mockReturnValue(board);
      expect(await controller.findOne(id)).toBe(board);
    });
  });

  describe('update', () => {
    it('should find a board by a id and update its data', async () => {
      const id = '1';
      const updateBoardDto = {
        title: 'New updated title',
      } as UpdateBoardDto;

      const board = {
        id: 1,
        title: 'New updated title',
      } as Board;

      jest.spyOn(mockBoardService, 'update').mockReturnValue(board);
      expect(await controller.update(id, updateBoardDto)).toBe(board);
    });
  });

  describe('remove', () => {
    it('should find a board by a id and remove', async () => {
      const id = '1';

      const board = {
        id: 1,
        title: 'New updated title',
        createdAt: new Date(),
        updateAt: new Date(),
        column: [],
        activityLogs: [],
      } as Board;

      jest.spyOn(mockBoardService, 'remove').mockReturnValue(board);
      expect(await controller.remove(id)).toBe(board);
    });
  });
});
