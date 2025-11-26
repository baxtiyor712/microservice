import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      username: "postgres",
      host: "localhost",
      port: 5432,
      database: "microservice2",
      password: "1111",
      synchronize: true,
      autoLoadEntities: true
    }),
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}