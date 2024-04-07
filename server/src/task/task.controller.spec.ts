import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';

describe('TaskController', () => {
  let controller: TaskController;

  const mockTasksService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        {
          provide: TaskService,
          useValue: mockTasksService,
        },
      ],
    }).compile();

    controller = module.get<TaskController>(TaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new task', async () => {
      const createTaskDto = {
        title: 'New task',
      } as CreateTaskDto;

      const task = {
        id: 1,
        title: 'New Task',
        createdAt: new Date(),
        updateAt: new Date(),
        column: 45,
        activityLogs: [],
      } as unknown as Task;

      jest.spyOn(mockTasksService, 'create').mockReturnValue(task);
      expect(await controller.create(createTaskDto)).toBe(task);
    });
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const task = [
        {
          id: 1,
          title: 'New Task',
          createdAt: new Date(),
          updateAt: new Date(),
          column: 45,
          activityLogs: [],
        },
      ];

      const listOfTasks = [task];

      jest.spyOn(mockTasksService, 'findAll').mockReturnValue(listOfTasks);
      expect(await controller.findAll()).toBe(listOfTasks);
    });
  });

  describe('findOne', () => {
    it('should return data about the task by id', async () => {
      const taskId = '1';
      const task = {
        id: 1,
        title: 'New Task',
        createdAt: new Date(),
        updateAt: new Date(),
        column: 45,
        activityLogs: [],
      };

      jest.spyOn(mockTasksService, 'findOne').mockReturnValue(task);
      expect(await controller.findOne(taskId)).toBe(task);
    });
  });

  describe('update', () => {
    it('should find a task by a id and update its data', async () => {
      const taskId = '1';
      const updateTaskDto = {
        title: 'New updated title',
      } as UpdateTaskDto;

      const task = {
        id: 1,
        title: 'New updated title',
      } as Task;

      jest.spyOn(mockTasksService, 'update').mockReturnValue(task);
      expect(await controller.update(taskId, updateTaskDto)).toBe(task);
    });
  });

  describe('remove', () => {
    it('should find a task by a id and remove', async () => {
      const taskId = '1';

      const task = {
        id: 1,
        title: 'New Task',
        createdAt: new Date(),
        updateAt: new Date(),
        column: 45,
        activityLogs: [],
      };

      jest.spyOn(mockTasksService, 'remove').mockReturnValue(task);
      expect(await controller.remove(taskId)).toBe(task);
    });
  });
});
