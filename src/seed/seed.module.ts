import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MovieModule } from 'src/movie/movie.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [MovieModule],
})
export class SeedModule {}
