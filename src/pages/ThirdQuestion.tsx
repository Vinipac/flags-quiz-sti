import china from "../assets/flags/china.png";
import { AnswerField } from "../components/Answer/AnswerField";
import { QuestionField } from "../components/Question/QuestionField";
import { QuestionType } from "../types";


const QUESTION: QuestionType = {
  flag: china,
  options: ["Japão", "China", "Córeia do Norte", "Singapura", "Indonésia"],
  correctAnswer: "China",
  tips: [
    "Famosa por sua cultura milenar.",
    "Grande rival dos Estados Unidos.",
    "Tem a maior população do planeta.",
    "Sua grande atração turística é a Grande Muralha."
  ],
};

export const ThirdQuestion = () => {
  return (
    <>
      <QuestionField
        flag={QUESTION.flag}
      />
      <AnswerField
        correctAnswer={QUESTION.correctAnswer}
        options={QUESTION.options}
        tips={QUESTION.tips}
        redirectTo="/forth-question"
      />
    </>
  );
};