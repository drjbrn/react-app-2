import { Module } from '@nestjs/common';
import { TaskColumnService } from './task-column.service';
import { TaskColumnController } from './task-column.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityLogModule } from '../activity-log/activity-log.module';
import { TaskColumn } from './entities/task-column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskColumn]), ActivityLogModule],
  controllers: [TaskColumnController],
  providers: [TaskColumnService],
  exports: [TaskColumnService],
})
export class TaskColumnModule {}
