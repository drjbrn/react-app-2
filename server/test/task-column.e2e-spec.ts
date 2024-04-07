import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { TaskColumnService } from '../src/task-column/task-column.service';

describe('Board', () => {
  let app: INestApplication;
  const columnService = {
    create: () => {
      return 'new column';
    },
    findAll: () => {
      return ['columns'];
    },
    findOne: () => {
      return 'found column by id';
    },
    update: () => {
      return 'updated column';
    },
    remove: () => {
      return 'deleted column';
    },
  };
  let createdColumnId;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(TaskColumnService)
      .useValue(columnService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`should create a new column`, async () => {
    const createTasksColumnDto = {
      title: 'New test column',
    };

    const res = await request(app.getHttpServer())
      .post('/column')
      .send(createTasksColumnDto)
      .expect(201);

    createdColumnId = res.body.id;
  });

  it(`should return a list of column`, () => {
    return request(app.getHttpServer())
      .get(`/column/board/12544`)
      .expect(200)
      .expect(columnService.findAll());
  });

  it(`should return data about the column by id`, () => {
    return request(app.getHttpServer())
      .get(`/column/${createdColumnId}`)
      .expect(200)
      .expect(columnService.findOne());
  });

  it(`should update column data (title)`, () => {
    const updateTasksColumnDto = {
      title: 'Updated title for column',
    };

    return request(app.getHttpServer())
      .patch(`/column/${createdColumnId}`)
      .send(updateTasksColumnDto)
      .expect(200);
  });

  it(`should remove column`, () => {
    return request(app.getHttpServer())
      .delete(`/column/${createdColumnId}`)
      .expect(200)
      .expect(columnService.remove());
  });

  afterAll(async () => {
    await app.close();
  });
});
