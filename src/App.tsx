import { useAppSelector } from 'app/hooks';
import Form from 'components/Form/Form';
import Quiz from 'components/Quiz/Quiz';
import Navbar from 'components/Navbar/Navbar';
import Results from 'components/Results/Results';

export default function App() {
  const { page } = useAppSelector((state) => state.app);
  return (
    <>
      <Navbar />
      {page === 'home' && <Form />}
      {page === 'quiz' && <Quiz />}
      {page === 'results' && <Results />}
    </>
  );
}
