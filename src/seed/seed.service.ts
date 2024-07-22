import { Injectable } from '@nestjs/common';
import { MOVIES_SEED } from './data/movies.seed';
import { Model } from 'mongoose';
import { Movie } from 'src/movie/entities/movie.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Movie.name)
    private readonly movieModel: Model<Movie>,
  ) { }

  async populateDB() {
    //this.movieService.fillMoviesWithSeed(MOVIES_SEED);
    await this.movieModel.deleteMany({});

    const movieToInsert: {
      id: number;
      name: string;
      duration: number;
      views: number;
      rating: number;
      genre: string;
      author: number;
      releaseDate: string;
    }[] = [];

    MOVIES_SEED.forEach(movie => {
      movieToInsert.push(movie);
    });

    this.movieModel.insertMany(movieToInsert);

    return `Seed executed successfully!`;
  }
}
