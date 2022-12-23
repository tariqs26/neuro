import { useAppSelector, useAppDispatch } from 'app/hooks';
import { afterAnswer } from 'app/utils';
import { pickAnswer, incrementScore } from 'features/quizSlice';
import { stopTimer } from 'features/timerSlice';
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
  const { currentIndex, questions } = useAppSelector((state) => state.quiz);
  const { isTimerStopped, timeElapsed, timerDelay } = useAppSelector(
    (state) => state.timer
  );

  const handleOptionClick = (text: string) => {
    if (isTimerStopped) return;
    dispatch(stopTimer());
    const score = (1 - timeElapsed / 10000) * 100;
    dispatch(pickAnswer({ answer: text, score }));
    dispatch(incrementScore(score));
    afterAnswer(dispatch, currentIndex, questions);
  };
  return (
    <>
      <h2 ref={questionText}>{null}</h2>
      <div className='question'>
        {questions[currentIndex].picked || timerDelay > 2000 ? (
          <div className='options'>
            {options.map((text: string) => {
              return (
                <Option
                  key={text}
                  className={
                    'option ' +
                    (correct === text && isTimerStopped
                      ? 'correct'
                      : correct !== text && picked === text
                      ? 'incorrect'
                      : picked === text
                      ? 'picked'
                      : '')
                  }
                  text={text}
                  onClick={() => handleOptionClick(text)}
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
