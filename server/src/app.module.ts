import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskColumnModule } from './task-column/task-column.module';
import { BoardModule } from './board/board.module';
import { ActivityLogModule } from './activity-log/activity-log.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
    BoardModule,
    TaskColumnModule,
    TaskModule,
    ActivityLogModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        port: configService.get('DB_PORT'),
        host:
          configService.get('NODE_ENV') === 'production'
            ? configService.get('POSTGRES_HOST')
            : configService.get('DB_HOST'),
        username:
          configService.get('NODE_ENV') === 'production'
            ? configService.get('POSTGRES_USER')
            : configService.get('DB_USERNAME'),
        password:
          configService.get('NODE_ENV') === 'production'
            ? configService.get('POSTGRES_PASSWORD')
            : configService.get('DB_PASSWORD'),
        database:
          configService.get('NODE_ENV') === 'production'
            ? configService.get('POSTGRES_DATABASE')
            : configService.get('DB_NAME'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.js, .ts}'],
        ssl: configService.get('NODE_ENV') === 'production',
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
