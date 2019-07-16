import {RatedQuestionModel} from './rated-question.model';
import {SelfReflectionFormStatus} from './self-reflection-form-status';

export class SelfReflectionFormModel {
  ratedQuestions: RatedQuestionModel[] = [];

  strengthsFeedback: string;

  weaknessesFeedback: string;

  opportunitiesFeedback: string;

  threatsFeedback: string;

  trainerComments: string;

  learningPathway: string;

  weekCommencing: Date;

  qaUserSelfReflectionFormStatuses: SelfReflectionFormStatus[];

  lastUpdated: Date;
}
