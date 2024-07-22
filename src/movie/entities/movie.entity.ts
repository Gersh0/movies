import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Movie {

    @Prop({
        required: true
    })
    id: number

    @Prop({
        required: true
    })
    name: string;

    @Prop({
        required: true
    })
    author: string;

    @Prop({
        required: true
    })
    releaseDate: string;

    @Prop({
        required: true
    })
    rating: number;

    @Prop({
        required: true
    })
    genre: string;

    @Prop({
        required: true
    })
    views: number;

    @Prop({
        required: true
    })
    duration: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);