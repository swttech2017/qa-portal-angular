import {Component, OnInit} from '@angular/core';
import {RatedQuestionsService} from './services/rated-questions.service';
import {SelfReflectionFormModel} from '../_common/models/self-reflection-form-model';
import {Router} from '@angular/router';
import {SelfReflectionFormService} from './services/self-reflection-form.service';
import {SelfRatingModel} from '../_common/models/self-rating.model';
import {QaErrorHandlerService} from '../../../../portal-core/src/app/_common/services/qa-error-handler.service';

@Component({
  selector: 'app-self-reflection-form',
  templateUrl: './self-reflection-form.component.html',
  styleUrls: ['./self-reflection-form.component.css']
})
export class SelfReflectionFormComponent implements OnInit {

  loadingData = true;

  selfReflectionViewModel = new SelfReflectionFormModel();

  constructor(private ratedQuestionsService: RatedQuestionsService,
              private selfReflectionFormService: SelfReflectionFormService,
              private errorHandlerService: QaErrorHandlerService,
              private router: Router) {
  }

  ngOnInit() {
    this.ratedQuestionsService.getSelfReflectionQuestions().subscribe(
      (response) => {
        response.forEach((entry) => {
          const selfRating = new SelfRatingModel();
          selfRating.selfRatingQuestion = entry;
          this.selfReflectionViewModel.selfRatings.push(selfRating);
          this.selfReflectionViewModel.weekCommencing = new Date();
        });
        this.loadingData = false;
      },
      (error) => {
        this.errorHandlerService.handleError(error);
      }
    );
  }

  saveForm() {
    // TODO - remove hard coded route
    this.router.navigateByUrl('qa/portal/training/trainee/self-rating/home');
  }

  submitForm() {
    this.selfReflectionViewModel.currentStatus = 'Submitted';
    this.selfReflectionFormService.createSelfReflectionForm(this.selfReflectionViewModel).subscribe(
      (data) => {
        // TODO - remove hard coded route
        this.router.navigateByUrl('qa/portal/training/trainee/self-rating/home');
      },
      (error) => {
        this.errorHandlerService.handleError(error);
      }
    );
  }
}
