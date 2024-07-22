import { IsDateString, IsDecimal, IsInt, IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateMovieDto {

    @IsInt()
    @IsPositive()
    id: number;

    @IsString()
    @MinLength(2)
    name: string;

    @IsInt()
    @IsPositive()
    duration: number;

    @IsInt()
    @IsPositive()
    views: number;

    @IsNumber()
    @Min(1)
    @IsPositive()
    rating: number;

    @IsString()
    @MinLength(2)
    genre: string;

    @IsInt()
    @IsPositive()
    author: number;

    @IsDateString()
    releaseDate: string;
}

