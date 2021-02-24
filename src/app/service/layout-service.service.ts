import { Injectable } from '@angular/core';
import { AppConfig } from '../config';

@Injectable({
  providedIn: 'root'
})
export class LayoutServiceService {

  constructor() {

  }
  getConfig() {

    return AppConfig;

  }

}
