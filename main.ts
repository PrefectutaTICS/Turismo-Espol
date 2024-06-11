import { config } from 'dotenv';
config(); // Carga las variables de entorno desde .env

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Visit Guayas API')
    .setDescription('The Visit Guayas API description')
    .setVersion('1.0')
    .addTag('vg')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
