import { join } from 'path';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeedModule } from './seed/seed.module';
import { MovieModule } from './movie/movie.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),//Permite servir archivos estáticos
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    SeedModule, 
    MovieModule, 
    PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
