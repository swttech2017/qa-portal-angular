import {Component, OnInit} from '@angular/core';
import {SelfReflectionHistoryService} from './services/self-reflection-history.service';
import {SelfReflectionHistoryViewModel} from './models/self-reflection-history-vmodel';
import {MatTableDataSource} from '@angular/material/table';
import {SelfReflectionFormModel} from '../_common/models/self-reflection-form-model';
import {QaErrorHandlerService} from '../../../../portal-core/src/app/_common/services/qa-error-handler.service';

@Component({
  selector: 'app-self-reflection-history',
  templateUrl: './self-reflection-history.component.html',
  styleUrls: ['./self-reflection-history.component.css']
})
export class SelfReflectionHistoryComponent implements OnInit {

  loadingData = true;

  viewModel = new SelfReflectionHistoryViewModel();

  dataSource: MatTableDataSource<SelfReflectionFormModel>;

  cols = ['startDate', 'status'];

  constructor(private selfReflectionsHistoryService: SelfReflectionHistoryService,
              private errorHandlerService: QaErrorHandlerService) {
  }

  ngOnInit() {
    this.selfReflectionsHistoryService.getSelfReflectionsForLoggedInUser().subscribe(
      (selfReflections) => {
        selfReflections.forEach((selfReflection) => {
          this.viewModel.selfReflections.push(selfReflection);
        });
        this.dataSource = new MatTableDataSource(this.viewModel.selfReflections);
        this.loadingData = false;
      },
      (error) => {
        this.loadingData = false;
        this.errorHandlerService.handleError(error);
      }
    );
  }
}
