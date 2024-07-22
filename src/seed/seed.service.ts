import { Injectable } from '@nestjs/common';
import { MovieService } from 'src/movie/movie.service';
import { MOVIES_SEED } from './data/movies.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly movieService: MovieService,
  ) { }

  populateDB() {
    this.movieService.fillMoviesWithSeed(MOVIES_SEED);
    return `Seed executed successfully!`;
  }
}
