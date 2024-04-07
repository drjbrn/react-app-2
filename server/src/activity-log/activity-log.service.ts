import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityLog } from './entities/activity-log.entity';

@Injectable()
export class ActivityLogService {
  constructor(
    @InjectRepository(ActivityLog)
    private activityLogRepository: Repository<ActivityLog>,
  ) {}

  async logAction(
    boardId: number,
    action: string,
    entityType: string,
    entityId: number,
    details: string,
  ): Promise<ActivityLog> {
    const logEntry = this.activityLogRepository.create({
      boardId,
      action,
      entityType,
      entityId,
      details,
    });

    return await this.activityLogRepository.save(logEntry);
  }

  async getAllActivityLogs(boardId: number): Promise<ActivityLog[]> {
    return await this.activityLogRepository.find({
      where: {
        board: { id: boardId },
      },
    });
  }

  async getTaskActivityLogsById(taskId: number): Promise<ActivityLog[]> {
    return await this.activityLogRepository.find({
      where: { entityId: taskId, entityType: 'task' },
    });
  }

  async clearActivityLogs() {
    return await this.activityLogRepository.clear();
  }
}
