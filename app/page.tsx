import Image from 'next/image';
import styles from './page.module.css';
import { getSession } from '@auth0/nextjs-auth0';
import MoviesList from '@/components/movieslist/movielist/MovieList';
import { createNewUser, getAllUsers } from '@/services/users.services';
import { UserData, UserType } from '@/types/users';

const Home = async () => {

  const session = await getSession();

  const userData: UserData = {
    name: session?.user.name,
    email: session?.user.email,
    profilePicture: session?.user.picture
  }

  const allUsers = await getAllUsers();
  const matchedUser = allUsers.find((filteredUser) => filteredUser.email === session?.user.email);

  if (!matchedUser && session?.user) {

    const newUser = await createNewUser(userData);

  }

  return (
    <main>
      <MoviesList userEmail={session?.user.email} />
    </main>
  )
}

export default Home;
