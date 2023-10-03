import Image from 'next/image';
import styles from './page.module.css';
import { getSession } from '@auth0/nextjs-auth0';
import MoviesList from '@/components/movieslist/movielist/MovieList';

const Home = async () => {
  const session = await getSession();
  console.log(session)
  return (
    <main>
      <MoviesList userEmail={session?.user.email} />
    </main>
  )
}

export default Home;
