import { Test, TestingModule } from '@nestjs/testing';
import { TaskColumnController } from './task-column.controller';
import { TaskColumnService } from './task-column.service';
import { CreateTaskColumnDto } from './dto/create-task-column.dto';
import { TaskColumn } from './entities/task-column.entity';
import { UpdateTaskColumnDto } from './dto/update-task-column.dto';

describe('TaskColumnController', () => {
  let controller: TaskColumnController;

  const mockTaskColumnsService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskColumnController],
      providers: [
        {
          provide: TaskColumnService,
          useValue: mockTaskColumnsService,
        },
      ],
    }).compile();

    controller = module.get<TaskColumnController>(TaskColumnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new list', async () => {
      const createTaskColumnDto = {
        title: 'New board',
      } as CreateTaskColumnDto;

      const column = {
        id: 1,
        title: 'New Column',
        createdAt: new Date(),
        updateAt: new Date(),
        board: 55,
        tasks: [],
        activityLogs: [],
      } as unknown as TaskColumn;

      jest.spyOn(mockTaskColumnsService, 'create').mockReturnValue(column);
      expect(await controller.create(createTaskColumnDto)).toBe(column);
    });
  });

  describe('findAll', () => {
    it('should return an array of columns by id', async () => {
      const boardId = '55';
      const column = [
        {
          id: 1,
          title: 'New Column',
          createdAt: new Date(),
          updateAt: new Date(),
          board: 55,
          tasks: [],
          activityLogs: [],
        },
      ];

      const listOfColumn = [column];

      jest
        .spyOn(mockTaskColumnsService, 'findAll')
        .mockReturnValue(listOfColumn);
      expect(await controller.findAll(boardId)).toBe(listOfColumn);
    });
  });

  describe('findOne', () => {
    it('should return data about the column by id', async () => {
      const columnId = '1';
      const column = {
        id: 1,
        title: 'New Column',
        createdAt: new Date(),
        updateAt: new Date(),
        board: 55,
        tasks: [],
        activityLogs: [],
      };

      jest.spyOn(mockTaskColumnsService, 'findOne').mockReturnValue(column);
      expect(await controller.findOne(columnId)).toBe(column);
    });
  });

  describe('update', () => {
    it('should find a column by a id and update its data', async () => {
      const id = '1';
      const updateTaskColumnDto = {
        title: 'New updated title',
      } as UpdateTaskColumnDto;

      const column = {
        id: 1,
        title: 'New updated title',
      } as TaskColumn;

      jest.spyOn(mockTaskColumnsService, 'update').mockReturnValue(column);
      expect(await controller.update(id, updateTaskColumnDto)).toBe(column);
    });
  });

  describe('remove', () => {
    it('should find a column by a id and remove', async () => {
      const columnId = '1';

      const column = {
        id: 1,
        title: 'New Column',
        createdAt: new Date(),
        updateAt: new Date(),
        board: 55,
        tasks: [],
        activityLogs: [],
      };

      jest.spyOn(mockTaskColumnsService, 'remove').mockReturnValue(column);
      expect(await controller.remove(columnId)).toBe(column);
    });
  });
});
