import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../services/random-user.service';

@Component({
  selector: 'app-yzt-table-demo',
  templateUrl: './yzt-grid-demo.component.html',
  styleUrls: ['./yzt-grid-demo.component.css']
})
export class YztTableDemoComponent implements OnInit {

  isVisible = false;
  data = {};
  columns = [];
  columnsHeader: any[] = [
    "Name-name-120px",
    "Gender-gender-200px",
    "Email-email-150px",
  ];
  selection = [];

  pageIndex = 1;
  pageSize = 2000;
  total = 1;
  dataSet = [];
  loading = true;
  sortValue = null;
  sortKey = null;
  filterGender = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' }
  ];
  searchGenderList: string[] = [];

  ngOnInit() {
    for (let i = 0; i < this.columnsHeader.length; i++) {
      const arr = this.columnsHeader[i].split('-');
      this.columns[i] = {};
      Object.assign(this.columns[i],
        {
          header: arr[0],
          field: arr[1],
          width: arr[2],
        });
    }
    this.searchData();
  }

  sort(sort: { key: string, value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value;
    this.searchData();
  }

  constructor(private randomUserService: RandomUserService) {
  }

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    if (sessionStorage.getItem('_data')) {
      this.dataSet = JSON.parse(sessionStorage.getItem('_data'));
      this.loading = false;
      return;
    }
    this.randomUserService.getUsers(this.pageIndex, this.pageSize, this.sortKey, this.sortValue, this.searchGenderList).subscribe((data: any) => {
      this.loading = false;
      this.total = 200;
      this.dataSet = data.results;
      sessionStorage.setItem('_data', JSON.stringify(data.results));
    });
  }

  updateFilter(value: string[]): void {
    this.searchGenderList = value;
    this.searchData(true);
  }

}
