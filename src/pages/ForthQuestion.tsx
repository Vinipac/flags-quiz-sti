import novaZelandia from "../assets/flags/newZealand.png";
import { AnswerField } from "../components/Answer/AnswerField";
import { QuestionField } from "../components/Question/QuestionField";
import { QuestionType } from "../types";


const QUESTION: QuestionType = {
  flag: novaZelandia,
  options: ["Nova Zelândia", "Indonésia", "Singapura", "Australia", "Tasmânia"],
  correctAnswer: "Nova Zelândia",
  tips: [
    "Era colônia do Reino Unido e ainda tem inglês como idioma oficial.",
    "Sua população de ovelhas é maior que de pessoas.",
    "Seu povo indígina mais famoso são os Maori.",
    "Faz parte da Oceânia."
  ],
};

export const ForthQuestion = () => {
  return (
    <>
      <QuestionField
        flag={QUESTION.flag}
      />
      <AnswerField
        correctAnswer={QUESTION.correctAnswer}
        options={QUESTION.options}
        tips={QUESTION.tips}
        redirectTo="/fifth-question"
      />
    </>
  );
};