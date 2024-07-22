import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeedModule } from './seed/seed.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [SeedModule, MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
