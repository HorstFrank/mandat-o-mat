import React from "react";
// import style from "./Question.module.css";

export type QuestionType = {
  value: string;
};

export default function Question({ value }: QuestionType) {
  return <div>Question</div>;
}
