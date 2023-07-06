import { useAppSelector } from 'app/hooks';
import Form from 'components/Form/Form';
import Quiz from 'components/Quiz/Quiz';
import Navbar from 'components/Navbar/Navbar';
import Results from 'components/Results/Results';
import ErrorPage from 'pages/Error';
import { LeaveButton, HomeButton } from 'components/Buttons';
import './App.css';

export default function App() {
  const { page } = useAppSelector((state) => state.app);
  const { isLoading } = useAppSelector((state) => state.quiz);
  return (
    <div className='App'>
      <Navbar>
        {page === 'quiz' && !isLoading ? (
          <LeaveButton />
        ) : ['results', 'error'].includes(page) ? (
          <HomeButton />
        ) : (
          <> </>
        )}
      </Navbar>
      <div className='page-container'>
        {page === 'home' && <Form />}
        {page === 'quiz' && <Quiz />}
        {page === 'results' && <Results />}
        {page === 'error' && <ErrorPage />}
      </div>
    </div>
  );
}
