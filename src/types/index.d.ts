type Page = "home" | "quiz" | "error" | "results";

type FormState = {
  amount: "5" | "10" | "15" | "20";
  category: string;
  difficulty: "easy" | "medium" | "hard";
  type: "multiple" | "boolean";
};

type FormValue = FormState[keyof FormState];

type Question = {
  category: string;
  correct_answer: string;
  difficulty: "easy" | "medium" | "hard";
  incorrect_answers: string[];
  question: string;
  type: "multiple" | "boolean";
};

type QuizQuestion = Question & {
  picked: string;
  score: number;
  options: string[];
};

type QuizState = {
  questions: QuizQuestion[];
  currentIndex: number;
  isLoading: boolean;
  progress: number;
  score: number;
};
