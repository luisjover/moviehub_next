import { UserData, UserType } from "@/types/users";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { revalidateTag } from "next/cache";

const URL = process.env.API_URL_BACKEND




export const getAllUsers = async () => {

    const token = await getAccessToken();

    const response = await fetch(`${URL}users`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token.accessToken}`,

        },
        next: { tags: ["geAllUser"] }
    });

    return await response.json() as UserType[];
}

export const getUserByEmail = async (userEmail: string) => {

    const token = await getAccessToken();

    const response = await fetch(`${URL}users/${userEmail}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token.accessToken}`,

        },
        cache: "no-store"
    });

    return await response.json() as UserType;
}

export const createNewUser = async (user: UserData) => {

    const token = await getAccessToken();

    const response = await fetch(`${URL}users`, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token.accessToken}`,
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            name: user.name,
            email: user.email,
        })
    });

    // revalidateTag("users")

    return await response.json() as UserType;

}