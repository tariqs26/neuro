import { Puzzle } from 'components/Icons';
import './Navbar.css';

export default function Navbar({ children }: { children?: React.ReactNode }) {
  return (
    <div id='top' className='nav-bar'>
      <div className='nav-logo'>
        <Puzzle />
        <h1>Neuro</h1>
      </div>
      {children}
    </div>
  );
}
