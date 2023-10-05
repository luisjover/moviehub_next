

import { revalidateTag } from "next/cache";
import { getAccessToken } from "@auth0/nextjs-auth0";

// const URL = process.env.API_URL_BACKEND

export const createNewMovie = async (userId: string, formData: FormData) => {


    // const token = await getAccessToken();


    const response = await fetch(`http://localhost:8080/movies/${userId}`, {
        method: "POST",
        // headers: {
        //     Authorization: `Bearer ${token.accessToken}`
        // },
        body: formData
    })

    if (response.ok) {

        const newMovie = await response.json();
        // revalidateTag("getUserByEmail")
        // revalidateTag("getAllUsers")
        return newMovie;
    }

    return null


}