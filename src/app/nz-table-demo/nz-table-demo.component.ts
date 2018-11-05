import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../services/random-user.service';

@Component({
  selector: 'nz-demo-table-ajax',
  templateUrl: './nz-table-demo.component.html',
  styleUrls: ['./nz-table-demo.component.css']
})
export class NzTableDemoComponent implements OnInit {
  pageIndex = 1;
  pageSize = 50;
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

  allChecked = false;
  disabledButton = true;
  displayData: Array<{ name: string; age: number; address: string; checked: boolean }> = [];
  checkedNumber = 0;
  indeterminate = false;

  // 性能演示计数
  count = 0;

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

  getFullName(person) {
    this.count++;
    console.log(`getFullName called times: ${this.count}`);
    return `${person.name.first} ${person.name.last}`;
  }

  updateFilter(value: string[]): void {
    this.searchGenderList = value;
    this.searchData(true);
  }

  ngOnInit(): void {
    this.searchData();
  }

  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean }>): void {
    this.displayData = $event;
  }


  refreshStatus(): void {
    const allChecked = this.displayData.every(value => value.checked === true);
    const allUnChecked = this.displayData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    this.disabledButton = !this.dataSet.some(value => value.checked);
    this.checkedNumber = this.dataSet.filter(value => value.checked).length;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => data.checked = value);
    this.refreshStatus();
  }
}
