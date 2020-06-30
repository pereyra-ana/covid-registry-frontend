import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { take } from 'rxjs/operators';
import { CovidCheck } from 'src/app/model/covid-check/covid-check';

export interface DialogData {
  covidCheck: CovidCheck;
}

@Component({
  selector: 'app-covid-check-detail',
  templateUrl: './covid-check-detail.component.html',
  styleUrls: ['./covid-check-detail.component.css'],
  providers: []
})
export class CovidCheckDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CovidCheckDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private ngZone: NgZone
  ) { }

  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
