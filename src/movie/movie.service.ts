import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMovieDto, UpdateMovieDto } from './dto';
import { Movie } from './entities/movie.entity';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';

@Injectable()
export class MovieService {

  constructor(
    @InjectModel(Movie.name)
    private movieModel: Model<Movie>
  ) { };

  private handleError(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(`Mission already exists in the database ${JSON.stringify(error.keyValue)}`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create mission`);
  }

  async create(createMovieDto: CreateMovieDto) {
    try {
      const movie = await this.movieModel.create(createMovieDto);
      return `Movie ${movie.name} created!`
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll() {
    return this.movieModel.find();
  }

  async findOne(term: string) {
    let query = !isNaN(+term) ? { id: term } :
      isValidObjectId(term) ? { _id: term } :
        { name: term };

    let movie = await this.movieModel.findOne(query);

    if (!movie)
      throw new NotFoundException(`Movie with term ${term} not found`);
    return movie;
  }

  async update(term: string, updateMovieDto: UpdateMovieDto) {
    const mission = await this.findOne(term);
    try {
      await mission.updateOne(updateMovieDto, { new: true });
      return { ...mission.toJSON(), ...updateMovieDto };
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.movieModel.deleteOne({ id: id });
    if (deletedCount === 0)
      throw new BadRequestException(`Mission with id ${id} not found`);
    return `Mission with id ${id} deleted`;
  }
}
