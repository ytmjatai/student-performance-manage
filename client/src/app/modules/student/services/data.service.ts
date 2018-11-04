import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import * as Config from '../student.config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  async queryList(): Promise<StudentModel[]> {

    try {
      const data = await this.http.get<StudentModel[]>(
        Config.listUrl
      ).toPromise();
      return data;
    } catch (error) {
      console.error(error);
      this.handleError('获取学生列表出错');
      return [];
    }
  }

  handleError(err: string) {
    alert(err);
  }
}

export interface StudentModel {
  id?: string;
  name?: string;
  sex?: string;
  address?: string;
  age?: number;
  code?: string;
}


