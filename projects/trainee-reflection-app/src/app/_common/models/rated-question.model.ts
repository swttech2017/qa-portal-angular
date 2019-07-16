
export class RatedQuestionModel {
  private _numberOfOptions: number;

  private _questionText: string;

  private _selectedRating: number;


  get numberOfOptions(): number {
    return this._numberOfOptions;
  }

  set numberOfOptions(value: number) {
    this._numberOfOptions = value;
  }

  get questionText(): string {
    return this._questionText;
  }

  set questionText(value: string) {
    this._questionText = value;
  }

  get selectedRating(): number {
    return this._selectedRating;
  }

  set selectedRating(value: number) {
    this._selectedRating = value;
  }
}
