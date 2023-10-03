import { UserType } from "@/types/users";
import { getAccessToken } from "@auth0/nextjs-auth0";

const URL = process.env.API_URL_BACKEND




export const getAllUsers = async () => {

    const token = await getAccessToken();

    const response = await fetch(`${URL}users`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token.accessToken}`,
            "Content-Type": "application/json"
        },
        next: { tags: ["users"] }
    });

    return await response.json() as UserType[];
}

export const getUserByEmail = async (userEmail: string) => {

    const token = await getAccessToken();

    const response = await fetch(`${URL}users/${userEmail}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token.accessToken}`,
            "Content-type": "application/json; charset=UTF-8"
        },
        next: { tags: [`${userEmail}`] }
    });

    return await response.json() as UserType;
}