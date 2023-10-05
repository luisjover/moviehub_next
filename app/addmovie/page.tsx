
import MovieForm from "@/components/movieForm/MovieForm";
import { getUserByEmail } from "@/services/users.services";
import { getSession } from "@auth0/nextjs-auth0";



const AddMoviePage = async () => {

    const session = await getSession();
    const user = await getUserByEmail(session?.user.email)

    return (
        <main>
            <MovieForm user={user} />
        </main>
    )
}

export default AddMoviePage