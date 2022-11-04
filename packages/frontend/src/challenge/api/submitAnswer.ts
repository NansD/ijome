import { Answer, AnswerResponse, Routes } from "@ijome/common";
import { API_URL, postData } from "../../api";

export function submitAnswer(answer: Answer): Promise<AnswerResponse> {
  return postData(`${API_URL}/${Routes.DAILY_ANSWER}`, answer);
}
