import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'getAll';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return 'getOne' + id;
  }

  @Post()
  create(@Body() createPruductDto: CreateProductDto): string {
    return `Title: ${createPruductDto.title}Price:${createPruductDto.price}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove' + id;
  }
}
