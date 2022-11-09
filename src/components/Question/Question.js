import { useSelector, useDispatch } from 'react-redux';
import {
  pickAnswer,
  updateScore,
  updateCurrentIndex,
} from 'features/quizSlice';
import { clearTimer, stopTimer } from 'features/timerSlice';
import { useText } from 'hooks/useText';
import './Question.css';

export default function Question({
  question,
  options,
  picked,
  correct_answer: correct,
}) {
  const questionText = useText(question);

  const dispatch = useDispatch();
  const {
    currentIndex,
    questions,
    revealAnswers,
  } = useSelector((state) => state.quiz);
  const { isTimerStopped, timeElapsed, timerDelay } = useSelector(
    (state) => state.timer
  );

  const handleOptionClick = (isPicked, text) => {
    if (isTimerStopped || timeElapsed === 0) return;
    dispatch(updateScore((1 - timeElapsed / 20000) * 100));
    dispatch(pickAnswer({ question, answer: `${isPicked ? '' : text}` }));
    if (currentIndex === questions.length - 1) {
      dispatch(stopTimer());
      return;
    }
    dispatch(updateCurrentIndex(1));
    dispatch(clearTimer());
  };
  return (
    <>
      <h3 ref={questionText}>{null}</h3>
      <div className='question'>
        {questions[currentIndex].picked || timerDelay > 2200 ? (
          <div className='options'>
            {options.map((text) => {
              const isPicked = picked === text;
              const timerEnd = isTimerStopped ? 'finished' : '';
              return (
                <Option
                  key={text}
                  className={
                    'option ' +
                    (revealAnswers && correct === text && !isPicked
                      ? 'correct'
                      : revealAnswers && isPicked && !(correct === text)
                      ? 'incorrect'
                      : isPicked
                      ? 'picked'
                      : '') +
                    ' ' +
                    timerEnd
                  }
                  text={text}
                  onClick={() => handleOptionClick(isPicked, text)}
                />
              );
            })}
          </div>
        ) : (
          <h2 className='option-loader'>Get Ready...</h2>
        )}
      </div>
    </>
  );
}

function Option({ text, ...args }) {
  const textRef = useText(text);
  return <button {...args} ref={textRef}></button>;
}