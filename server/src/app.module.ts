import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LinksModule } from './links/links.module';
import { roles } from './app.roles';
import { AccessControlModule } from 'nest-access-control';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql://db:3306',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'booky',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AccessControlModule.forRoles(roles),
    UsersModule,
    AuthModule,
    LinksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
