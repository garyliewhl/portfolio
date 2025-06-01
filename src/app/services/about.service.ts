import { Injectable } from '@angular/core';
import { ABOUT_DATA } from '../data/about.data';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  getAboutData() {
    return ABOUT_DATA;
  }
}