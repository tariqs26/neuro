import { useAppSelector, useAppDispatch } from 'app/hooks';
import { pickAnswer, incrementScore, nextQuestion } from 'features/quizSlice';
import { clearTimer, stopTimer } from 'features/timerSlice';
import { useText } from 'hooks/useText';
import './Question.css';

type QuestionProps = {
  question: string;
  options: string[];
  picked: string;
  correct_answer: string;
};
export default function Question({
  question,
  options,
  picked,
  correct_answer: correct,
}: QuestionProps) {
  const questionText = useText<HTMLHeadingElement>(question);

  const dispatch = useAppDispatch();
  const { currentIndex, questions, revealAnswers } = useAppSelector(
    (state) => state.quiz
  );
  const { isTimerStopped, timeElapsed, timerDelay } = useAppSelector(
    (state) => state.timer
  );

  const handleOptionClick = (isPicked: boolean, text: string) => {
    if (isTimerStopped || timeElapsed === 0) return;
    dispatch(incrementScore((1 - timeElapsed / 20000) * 100));
    dispatch(pickAnswer({ answer: `${isPicked ? '' : text}` }));
    if (currentIndex === questions.length - 1) {
      dispatch(stopTimer());
      return;
    }
    dispatch(nextQuestion());
    dispatch(clearTimer());
  };
  return (
    <>
      <h2 ref={questionText}>{null}</h2>
      <div className='question'>
        {questions[currentIndex].picked || timerDelay > 2200 ? (
          <div className='options'>
            {options.map((text: string) => {
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
          <h1 className='option-loader'>Get Ready...</h1>
        )}
      </div>
    </>
  );
}

type OptionProps = {
  text: string;
  className: string;
  onClick: () => void;
};
function Option({ text, ...args }: OptionProps) {
  const textRef = useText<HTMLButtonElement>(text);
  return <button {...args} ref={textRef}></button>;
}
