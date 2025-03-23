import { NestFactory } from '@nestjs/core';
import * as dotenv from "dotenv";
import { AppModule } from './modules/app/app.module';
import { swaggerConfig } from './config/swagger.config';

dotenv.config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerConfig(app)
  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(`server run on : http://localhost:${process.env.PORT}/api`);
    
  });
}
bootstrap();
