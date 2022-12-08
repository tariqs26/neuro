import { AppDispatch } from 'store';
import { setValue } from 'features/formSlice';

type CategoryInputProps = {
  dispatch: AppDispatch;
};
export default function CategoryInput({ dispatch }: CategoryInputProps) {
  const name = 'category';
  return (
    <div className='input-container'>
      <label htmlFor={name}>{'Select Category:'}</label>
      <select
        name={name}
        className='form-control'
        onChange={(e) => {
          dispatch(setValue({ name, value: e.target.value }));
        }}
      >
        <Categories />
      </select>
    </div>
  );
}

function Categories() {
  return (
    <>
      <option value='9'>General Knowledge</option>
      <option value='10'>Books</option>
      <option value='11'>Movies</option>
      <option value='14'>TV Shows</option>
      <option value='26'>Celebrities</option>
      <option value='12'>Music</option>
      <option value='13'>Musicals &amp; Theatres</option>
      <option value='15'>Video Games</option>
      <option value='16'>Board Games</option>
      <option value='17'>Science &amp; Nature</option>
      <option value='18'>Computers</option>
      <option value='19'>Mathematics</option>
      <option value='30'>Gadgets</option>
      <option value='28'>Vehicles</option>
      <option value='20'>Mythology</option>
      <option value='21'>Sports</option>
      <option value='22'>Geography</option>
      <option value='23'>History</option>
      <option value='24'>Politics</option>
      <option value='27'>Animals</option>
      <option value='29'>Comics</option>
      <option value='31'>Japanese Anime &amp; Manga</option>
      <option value='32'> Cartoon &amp; Animations</option>
      <option value='25'>Art</option>
    </>
  );
}
