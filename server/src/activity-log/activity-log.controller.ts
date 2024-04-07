import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ActivityLogService } from './activity-log.service';
import { ActivityLog } from './entities/activity-log.entity';

@Controller('activity-log')
export class ActivityLogController {
  constructor(private readonly activityLogService: ActivityLogService) {}

  @Get('board/:boardId')
  async getActivityLogs(
    @Param('boardId') boardId: number,
  ): Promise<ActivityLog[]> {
    return await this.activityLogService.getAllActivityLogs(boardId);
  }

  @Get('tasks/:taskId')
  async getTaskActivityLogs(
    @Param('taskId') taskId: number,
  ): Promise<ActivityLog[]> {
    return await this.activityLogService.getTaskActivityLogsById(taskId);
  }

  @Delete()
  async clearHistory() {
    return await this.activityLogService.clearActivityLogs();
  }
}
