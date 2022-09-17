import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('PI grupo 2 ')
    .setDescription('Projeto Integrador Generation Brasil')
    .setContact(
      'TM4 - Grupo 2 - Generation Brasil',
      'https://github.com/wes-pereira',
      'ti.wesleypereira@gmail.com'
    )
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/swagger', app, document)

  process.env.TZ = '-03:00'

  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
