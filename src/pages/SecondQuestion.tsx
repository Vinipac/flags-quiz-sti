import { AnswerField } from "../components/Answer/AnswerField";
import { QuestionField } from "../components/Question/QuestionField";

import finlandia from "../assets/flags/finlandia.png";
import { QuestionType } from "../types";

const QUESTION: QuestionType = {
  flag: finlandia,
  options: ["Ucrânia", "Polônia", "Suécia", "Suiça", "Finlândia"],
  correctAnswer: "Finlândia",
  tips: [
    "Ganhou sua independência da Russia.",
    "Único país nórdico que não pertence a Escandinávia.",
    "Fala um idioma muito diferente de seus vizinhos.",
    "Sua capital é Helsinki.",
  ],
};

export const SecondQuestion = () => {
  return (
    <>
      <QuestionField
        flag={QUESTION.flag}
      />
      <AnswerField
        correctAnswer={QUESTION.correctAnswer}
        options={QUESTION.options}
        tips={QUESTION.tips}
        redirectTo="/third-question"
      />
    </>
  );
};