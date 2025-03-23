import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { config } from "dotenv";
import { join } from "path";
config();
config({
    path: join(process.cwd(),`.env.${process.env.NODE_ENV}`)
})
export function typeormConfig(): TypeOrmModuleOptions {
  return {
    type: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    entities: [
      "dist/**/**/**/*.entity{.js,.ts}",
      "dist/**/**/*.entity{.js,.ts}",
    ],
    synchronize: true,
    autoLoadEntities: true,
  };
}
