import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardRepository extends Repository<Board> {
  // async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
  //   const { title, description } = createBoardDto;
  //   const board = this.create({
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   });
  //   await this.save(board);
  //   return board;
  // }
  // async getBoardById(id: number): Promise<Board> {
  //   const found = await this.findOneBy({ id });
  //   if (!found) {
  //     throw new NotFoundException(`Can't find BOard with id ${id}`);
  //   }
  //   return found;
  // }
}
