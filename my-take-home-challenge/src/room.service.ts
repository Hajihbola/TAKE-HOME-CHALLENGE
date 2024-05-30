import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './room.entity';
import { RoomRepository } from './room.repository';
import { BaseService } from './base.service';

@Injectable()
export class RoomService extends BaseService<Room> {
  constructor(
    @InjectRepository(RoomRepository)
    private readonly roomRepository: RoomRepository,
  ) {
    super();
    this.repository = roomRepository;
  }
}