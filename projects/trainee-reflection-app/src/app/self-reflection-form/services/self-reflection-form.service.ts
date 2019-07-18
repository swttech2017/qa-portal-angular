import {Injectable} from '@angular/core';
import {SelfReflectionFormModel} from '../../_common/models/self-reflection-form-model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CREATE_SELF_REFLECTIONS_API} from '../../_common/models/trainee-reflection-constants';

@Injectable()
export class SelfReflectionFormService {

  constructor(private httpClient: HttpClient) {

  }

  public createSelfReflectionForm(selfReflectionForm: SelfReflectionFormModel): Observable<SelfReflectionFormModel> {
      return this.httpClient.post<SelfReflectionFormModel>(CREATE_SELF_REFLECTIONS_API, selfReflectionForm);
  }
}
