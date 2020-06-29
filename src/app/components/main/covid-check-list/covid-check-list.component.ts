import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { countriesList } from 'src/app/countries';
import { CovidCheck } from 'src/app/model/covid-check/covid-check';
import { Stats } from 'src/app/model/stats/stats';
import { CovidCheckService } from 'src/app/services/covid-check/covid-check.service';
import { CovidCheckDetailComponent } from '../covid-check-detail/covid-check-detail.component';
import { CovidCheckNewComponent } from '../covid-check-new/covid-check-new.component';

@Component({
  selector: 'app-covid-check-list',
  templateUrl: './covid-check-list.component.html',
  styleUrls: ['./covid-check-list.component.css'],
  providers: [CovidCheckService]
})
export class CovidCheckListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'country', 'result', 'actionsColumn'];
  dataSource: CovidCheck[] = [];

  countries = countriesList.countries;

  // paginator
  // length: number;
  // pageIndex = 1;
  // pageSize = 5;
  // pageSizeOptions = [];
  // showFirstLastButtons = true;
  // pageEvent: PageEvent;

  query = {
    filter: '',
    value: ''
  }

  result: boolean;

  stats: Stats;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private covidCheckService: CovidCheckService
  ) { }

  ngOnInit() {
    this.loadInfo();
  }

  loadInfo(): void {
    this.getAll();

    this.covidCheckService.getStats().subscribe(stats => {
      this.stats = stats;
    })
  }

  openNewRegistryDialog(): void {
    const dialogRef = this.dialog.open(CovidCheckNewComponent, {
      width: '400px',
      data: { result: this.result }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.snackBar.open('Registro cargado con éxito', 'Cerrar', {
          panelClass: ['snackbar-success'],
          duration: 2000,
        });

        this.loadInfo();
      }
    });
  }

  getResultClass(result: string) {
    switch (result.toLowerCase()) {
      case 'infectado': return 'infectado';
      case 'inmune': return 'inmune';
      default: return 'sano';
    }
  }

  getAll(): void {
    this.covidCheckService.getAll().subscribe(data => {
      if (data) {
        this.dataSource = data.results;
        // this.length = data.results.length;
        // this.pageSize = this.length;
        // this.pageSizeOptions = [this.length];
      } else {
        this.dataSource = [];
        // this.length = 0;
      }

    })
  }

  getAllWithFilter(): void {
    this.covidCheckService.getAllWithFilter(this.query.filter, this.query.value).subscribe(data => {
      if (data) {
        this.dataSource = data.results;
        // this.length = data.results.length;
        // this.pageSize = this.length;
        // this.pageSizeOptions = [this.length];
      } else {
        this.dataSource = [];
        // this.length = 0;
      }
    })
  }

  openDetailDialog(covidCheckId: string): void {
    this.covidCheckService.getById(covidCheckId).subscribe(covidCheck => {
      const dialogRef = this.dialog.open(CovidCheckDetailComponent, {
        width: '400px',
        data: { covidCheck: covidCheck }
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    });
  }

  detail(r: CovidCheck): void {
    this.openDetailDialog(r.id);
  }

  cleanAndGetAll(): void {
    this.query.filter = null;
    this.query.value = null;
    this.getAll();
  }

  filterAndGetAll(): void {
    // this.pageIndex = 1;
    this.getAllWithFilter();
  }

  // onPaginateChange(event) {
  //   this.pageIndex = event.pageIndex + 1;
  //   this.pageSize = event.pageSize;
  //   this.getAll();
  // }
}

