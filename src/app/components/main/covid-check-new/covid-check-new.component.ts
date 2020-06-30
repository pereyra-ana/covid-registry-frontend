import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { take } from 'rxjs/operators';
import { CovidCheck } from 'src/app/model/covid-check/covid-check';
import { CovidCheckService } from 'src/app/services/covid-check/covid-check.service';
import { ValidatorsCustom } from 'src/app/validators/custom.validator';
import { ValidatorMessage } from 'src/app/validators/validators.messages';
import { countriesList } from '../../../countries';

export interface DialogData {
  result: boolean;
}

@Component({
  selector: 'app-covid-check-new',
  templateUrl: './covid-check-new.component.html',
  styleUrls: ['./covid-check-new.component.css'],
  providers: [CovidCheckService, ValidatorMessage]
})
export class CovidCheckNewComponent implements OnInit {

  // Las letras de los Strings solo pueden ser: A,T,C,G

  covidCheck: CovidCheck = new CovidCheck();
  countries = countriesList.countries;
  dna: string;

  formValidator: FormArray = new FormArray([]);

  componentValidator: FormGroup = this.formBuilder.group({
    dna: new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        ValidatorsCustom.isValidDNA,
        ValidatorsCustom.isValidDNAStructure
      ]), asyncValidators: []
    }),
    name: new FormControl('', {
      validators: Validators.compose([
        Validators.required
      ])
    }),
    country: new FormControl('', {
      validators: Validators.compose([
        Validators.required
      ])
    })
  });

  constructor(
    public dialogRef: MatDialogRef<CovidCheckNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private ngZone: NgZone,
    private covidCheckService: CovidCheckService,
    private formBuilder: FormBuilder,
    public validatorMessage: ValidatorMessage,
    private snackBar: MatSnackBar
  ) { }

  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit() {
    if (this.formValidator) {
      this.formValidator.push(this.componentValidator);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  assemblyRegistry(): void {
    this.covidCheck.dna = this.dna.split(' ');
  }

  submit(): void {
    if (this.componentValidator.valid) {
      this.assemblyRegistry();

      this.covidCheckService.create(this.covidCheck).subscribe(id => {
        this.data.result = true;
        this.dialogRef.close(this.data.result);
      }, error => {
        this.data.result = false;

        this.snackBar.open('Error creando registro', 'Cerrar', {
          panelClass: ['snackbar-error'],
          duration: 2000,
        });
      });
    }
  }
}
