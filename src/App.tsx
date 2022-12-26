import { useAppSelector } from 'app/hooks';
import Form from 'components/Form/Form';
import Quiz from 'components/Quiz/Quiz';
import Navbar from 'components/Navbar/Navbar';
import Results from 'components/Results/Results';
import { LeaveButton, HomeButton } from 'components/Buttons/Buttons';
import './App.css';

export default function App() {
  const { page } = useAppSelector((state) => state.app);
  return (
    <div className='App'>
      <Navbar>
        {page === 'quiz' ? (
          <LeaveButton />
        ) : page === 'results' ? (
          <HomeButton />
        ) : (
          <> </>
        )}
      </Navbar>
      <div className='page-container'>
        {page === 'home' && <Form />}
        {page === 'quiz' && <Quiz />}
        {page === 'results' && <Results />}
      </div>
    </div>
  );
}
