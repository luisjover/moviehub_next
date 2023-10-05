import ProfileChart from "@/components/profileChart/ProfileChart";
import { getUserByEmail } from "@/services/users.services";
import { getSession } from "@auth0/nextjs-auth0";

const ProfilePage = async () => {

    const session = await getSession();
    const user = await getUserByEmail(session?.user.email)
    console.log(session?.user)
    return (
        <main>
            <ProfileChart
                user={user}
                picture={session?.user.picture}
            />
        </main>
    )
}

export default ProfilePage









