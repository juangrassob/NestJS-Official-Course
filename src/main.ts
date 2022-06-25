import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Make sure that the req.body object have the  current DTO shape
      transform: true, // Make the body request object an instance of the type assigned in the controller (primitive or DTO)
      forbidNonWhitelisted: true, // Return a bad request error if a not expected property is sent in the req.body
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
