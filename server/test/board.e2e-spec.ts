import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { BoardService } from '../src/board/board.service';
import { AppModule } from '../src/app.module';

describe('Board', () => {
  let app: INestApplication;
  const boardService = {
    create: () => {
      return 'new board id';
    },
    findAll: () => ['board'],
    findOne: () => {
      return 'found board';
    },
    update: () => {
      return 'updated board';
    },
    remove: () => {
      return 'deleted board';
    },
  };
  let createdBoardId;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(BoardService)
      .useValue(boardService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`should create a new board`, async () => {
    const createBoardDto = {
      title: 'New test board',
    };

    const res = await request(app.getHttpServer())
      .post('/board')
      .send(createBoardDto)
      .expect(201);

    createdBoardId = res.body.id;
  });

  it(`should return a list of boards`, () => {
    return request(app.getHttpServer())
      .get('/board')
      .expect(200)
      .expect(boardService.findAll());
  });

  it(`should return data about the board by id`, () => {
    return request(app.getHttpServer())
      .get(`/board/${createdBoardId}`)
      .expect(200)
      .expect(boardService.findOne());
  });

  it(`should update board data (title)`, () => {
    const updateBoardDto = {
      title: 'Updated title for board',
    };

    return request(app.getHttpServer())
      .patch(`/board/${createdBoardId}`)
      .send(updateBoardDto)
      .expect(200);
  });

  it(`should remove board`, () => {
    return request(app.getHttpServer())
      .delete(`/board/${createdBoardId}`)
      .expect(200)
      .expect(boardService.remove());
  });

  afterAll(async () => {
    await app.close();
  });
});
