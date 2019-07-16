import {SelfReflectionFormModel} from '../../_common/models/self-reflection-form-model';

export class SelfReflectionHistoryViewModel {
  private _selfReflections: SelfReflectionFormModel[] = [];


  get selfReflections(): SelfReflectionFormModel[] {
    return this._selfReflections;
  }

  set selfReflections(value: SelfReflectionFormModel[]) {
    this._selfReflections = value;
  }
}
