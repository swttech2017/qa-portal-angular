import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GET_ALL_SELF_REFLECTIONS_API} from '../../_common/models/trainee-reflection-constants';
import {SelfReflectionFormModel} from '../../_common/models/self-reflection-form-model';

@Injectable()
export class SelfReflectionHistoryService {
  constructor(private httpClient: HttpClient) {
  }

  getSelfReflectionsForLoggedInUser(): Observable<SelfReflectionFormModel[]> {
    return this.httpClient.get<SelfReflectionFormModel[]>(GET_ALL_SELF_REFLECTIONS_API);
  }
}
