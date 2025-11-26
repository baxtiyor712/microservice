import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://baxtiyorrajabboyev013_db_user:9zl8MNTj3E65soHX@cluster0.segkwu4.mongodb.net/?appName=Cluster0"),
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
