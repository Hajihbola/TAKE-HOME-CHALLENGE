import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { RoomRepository } from 'src/room.repository';
import { QueryUtils } from 'src/query.utils';

describe('AppController (e2e)', () => {
  let room: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [QueryUtils],
    }).compile();

    room = moduleFixture.createNestApplication();
    await room.init();
  });

  it('/ (GET)', () => {
    return request(room.getHttpServer())
      .get('/')
      .expect(200)
      .expect(RoomRepository);
  });
});
