import { Movie } from "./movies";

export interface UserType {
    id: string,
    name: string,
    email: string,
    profilePicture: string,
    movies: Movie[]
};

export interface UserData {
    name: string,
    email: string,
    profilePicture: string
};