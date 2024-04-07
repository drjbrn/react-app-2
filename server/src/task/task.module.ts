import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TaskColumnModule } from '../task-column/task-column.module';
import { ActivityLogModule } from '../activity-log/activity-log.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]),
    TaskColumnModule,
    ActivityLogModule,
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
