import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ActivityLogService } from './activity-log.service';
import { ActivityLog } from './entities/activity-log.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('ActivityLog')
@Controller('activity-log')
export class ActivityLogController {
  constructor(private readonly activityLogService: ActivityLogService) {}

  @ApiOperation({ summary: 'Get the board activity log' })
  @ApiResponse({ status: 200, type: ActivityLog })
  @Get('board/:boardId')
  async getActivityLogs(
    @Param('boardId') boardId: number,
  ): Promise<ActivityLog[]> {
    return await this.activityLogService.getAllActivityLogs(boardId);
  }

  @ApiOperation({ summary: 'Get the task activity log' })
  @ApiResponse({ status: 200, type: ActivityLog })
  @Get('tasks/:taskId')
  async getTaskActivityLogs(
    @Param('taskId') taskId: number,
  ): Promise<ActivityLog[]> {
    return await this.activityLogService.getTaskActivityLogsById(taskId);
  }

  @ApiOperation({ summary: 'Clear activity log' })
  @ApiResponse({ status: 200 })
  @Delete()
  async clearHistory() {
    return await this.activityLogService.clearActivityLogs();
  }
}
