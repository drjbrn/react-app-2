import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { TaskService } from '../src/task/task.service';

describe('Board', () => {
  let app: INestApplication;
  const taskService = {
    create: () => {
      return 'new task';
    },
    findAll: () => {
      return ['tasks'];
    },
    findOne: () => {
      return 'found task by id';
    },
    update: () => {
      return 'updated task';
    },
    remove: () => {
      return 'deleted task';
    },
  };
  let createdTaskId;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(TaskService)
      .useValue(taskService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`should create a new task`, async () => {
    const createTaskDto = {
      title: 'New test task',
      description: 'Test desc for task',
      priority: 'Medium',
      dueDate: '24.04.2024',
    };

    const res = await request(app.getHttpServer())
      .post('/task')
      .send(createTaskDto)
      .expect(201);

    createdTaskId = res.body.id;
  });

  it(`should return a list of tasks`, () => {
    return request(app.getHttpServer())
      .get(`/task`)
      .expect(200)
      .expect(taskService.findAll());
  });

  it(`should return data about the task by id`, () => {
    return request(app.getHttpServer())
      .get(`/task/${createdTaskId}`)
      .expect(200)
      .expect(taskService.findOne());
  });

  it(`should update task data`, () => {
    const updateTaskDto = {
      title: 'Updated title for task',
      description: 'Updated desc for task',
      priority: 'Low',
      dueDate: '24.04.2024',
    };

    return request(app.getHttpServer())
      .patch(`/task/${createdTaskId}`)
      .send(updateTaskDto)
      .expect(200);
  });

  it(`should remove task`, () => {
    return request(app.getHttpServer())
      .delete(`/task/${createdTaskId}`)
      .expect(200)
      .expect(taskService.remove());
  });

  afterAll(async () => {
    await app.close();
  });
});
