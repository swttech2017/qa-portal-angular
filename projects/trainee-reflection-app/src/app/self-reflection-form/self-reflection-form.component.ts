import {Component, OnInit} from '@angular/core';
import {RatedQuestionsService} from './services/rated-questions.service';
import {SelfReflectionFormModel} from '../_common/models/self-reflection-form-model';
import {Router} from '@angular/router';
import {SelfReflectionFormService} from './services/self-reflection-form.service';
import {SelfRatingModel} from '../_common/models/self-rating.model';
import {QaErrorHandlerService} from '../../../../portal-core/src/app/_common/services/qa-error-handler.service';
import {SelfReflectionFormViewModel} from './models/self-reflection-form-vmodel';

@Component({
  selector: 'app-self-reflection-form',
  templateUrl: './self-reflection-form.component.html',
  styleUrls: ['./self-reflection-form.component.css']
})
export class SelfReflectionFormComponent implements OnInit {

  loadingData = true;

  selfReflectionViewModel = new SelfReflectionFormViewModel();

  constructor(private ratedQuestionsService: RatedQuestionsService,
              private selfReflectionFormService: SelfReflectionFormService,
              private errorHandlerService: QaErrorHandlerService,
              private router: Router) {
  }

  ngOnInit() {
    this.selfReflectionViewModel.selfReflectionForm = new SelfReflectionFormModel();
    this.ratedQuestionsService.getSelfReflectionQuestions().subscribe(
      (response) => {
        response.forEach((entry) => {
          const selfRating = new SelfRatingModel();
          selfRating.selfRatingQuestion = entry;
          this.selfReflectionViewModel.selfReflectionForm.selfRatings.push(selfRating);
          this.selfReflectionViewModel.selfReflectionForm.weekCommencing = new Date();
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
    this.selfReflectionViewModel.selfReflectionForm.currentStatus = 'Submitted';
    this.selfReflectionFormService.createSelfReflectionForm(this.selfReflectionViewModel.selfReflectionForm).subscribe(
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
