import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskColumnModule } from './task-column/task-column.module';
import { BoardModule } from './board/board.module';
import { ActivityLogModule } from './activity-log/activity-log.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BoardModule,
    TaskColumnModule,
    TaskModule,
    ActivityLogModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        port: configService.get('DB_PORT'),
        host: configService.get('DB_HOST'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        // host: process.env.POSTGRES_HOST,
        // username: process.env.POSTGRES_USER,
        // password: process.env.POSTGRES_PASSWORD,
        // database: process.env.POSTGRES_DATABASE,
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.js, .ts}'],
        // ssl: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
