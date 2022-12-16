import { useAppDispatch } from 'app/hooks';
import { setPage } from 'features/appSlice';

export default function Results() {
  const dispatch = useAppDispatch();
  return (
    <>
      <button onClick={() => dispatch(setPage('home'))}>Home</button>
      <button onClick={() => dispatch(setPage('quiz'))}>Retry</button>
    </>
  );
}
