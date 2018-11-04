import { Component, OnInit } from '@angular/core';
import { DataService, StudentModel } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  students: StudentModel[];
  constructor(
    private dataSvc: DataService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.students = await this.dataSvc.queryList();
  }

}
