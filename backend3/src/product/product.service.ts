import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./entities/product.entity";
import { Model } from "mongoose";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>
  ) {}
  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productModel.create(createProductDto);
  }

  async findAll(): Promise<Product[]> {
    const product = await this.productModel.find().exec();
    return product;
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productModel.findOne({ _id: id });
    if (!product) throw new NotFoundException("Product not found");
    return product;
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto
  ): Promise<{ message: string }> {
    const product = await this.productModel.findOne({ _id: id });
    if (!product) throw new NotFoundException("Product not found");
    await this.productModel.updateOne({ id }, updateProductDto);
    return { message: "Updated product" };
  }

  async remove(id: number): Promise<{ message: string }> {
    const product = await this.productModel.findOne({ _id: id });
    if (!product) throw new NotFoundException("Product not found");
    await this.productModel.deleteOne({ id });
    return { message: "Deleted product" };
  }
}
