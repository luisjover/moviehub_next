import { Movie, MovieData } from "@/types/movies";
import { UserData, UserType } from "@/types/users";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { revalidateTag } from "next/cache";

const URL = process.env.API_URL_BACKEND


export const getMovieById = async (movieId: any) => {

    console.log(movieId)


    const response = await fetch(`http://localhost:8080/movies/${movieId}`, {
        method: "GET",
        // headers: {
        //     authorization: `Bearer ${token.accessToken}`,

        // },

    });

    console.log(response)
    return await response.json() as Movie;
}

export const updateMovieById = async (movieId: number, formData: FormData) => {

    // const token = await getAccessToken();



    const response = await fetch(`http://localhost:8080/movies/${movieId}`, {
        method: "PUT",
        // headers: {
        //     authorization: `Bearer ${token}`,
        // },
        body: formData
    })
    return await response.json();

}

export const deleteMovie = async (movieId: number) => {


    const response = await fetch(`http://localhost:8080/movies/${movieId}`, {
        method: "DELETE",
        // headers: {
        //     authorization: `Bearer ${token}`,
        // }
    })
    return await response.json();

}


