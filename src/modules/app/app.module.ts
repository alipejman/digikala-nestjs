import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from 'src/config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig())
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
