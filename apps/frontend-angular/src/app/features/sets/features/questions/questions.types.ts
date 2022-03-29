import { ApiQuestion, DBTimestampsUnion } from "@qisapp/api-contract";


export type Question = ApiQuestion
export type QuestionCreation = Omit<Question, DBTimestampsUnion | "id" | "userId" | "setId">
export type QuestionUpdate = Partial<QuestionCreation>
