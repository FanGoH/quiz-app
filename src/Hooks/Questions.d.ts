// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface QuestionsResponse {
	response_code: number;
	results: Question[];
}

export interface Question {
	category: string;
	type: Type;
	difficulty: Difficulty;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
}

export enum Difficulty {
	Easy = "easy",
	Hard = "hard",
	Medium = "medium",
}

export enum Type {
	Boolean = "boolean",
	Multiple = "multiple",
}