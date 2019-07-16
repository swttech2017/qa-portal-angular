import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RatedQuestionModel} from '../../_common/models/rated-question.model';
import {Observable} from 'rxjs';
import {RATED_QUESTIONS_API} from '../../_common/models/trainee-reflection-constants';

@Injectable()
export class RatedQuestionsService {
  constructor(private httpClient: HttpClient) {

  }

  getSelfReflectionQuestions(): Observable<RatedQuestionModel[]> {
    return this.httpClient.get<RatedQuestionModel[]>(RATED_QUESTIONS_API);
  }
}
