import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './interfaces/movie.interface';

@Injectable()
export class MovieService {

  private movies: Movie[] = [];

  create(createMovieDto: CreateMovieDto) {
    const movie = {
      id: this.movies.length + 1,
      ...createMovieDto
    };

    this.movies.push(movie);

    return movie;
  }

  findAll() {
    return this.movies;
  }

  findOne(id: number) {

    const movie = this.movies.find(movie => movie.id === id);

    if (!movie) throw new NotFoundException(`Movie with id ${id} not found`);

    return movie;

  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    if (updateMovieDto.id && updateMovieDto.id !== id) throw new BadRequestException('Id cannot be changed');
    let movieDB = this.findOne(id);
    this.movies = this.movies.map(movie => {
      if (movie.id === id) {
        movieDB = { ...movieDB, ...updateMovieDto, id };
        return movieDB;
      }
      return movie;
    });

    return movieDB;

  }

  remove(id: number) {
    this.movies = this.movies.filter(movie => movie.id !== id);
    return { message: `Movie with id ${id} removed` };
  }

  fillMoviesWithSeed(movies: Movie[]) {
    this.movies = movies;
  }
}
