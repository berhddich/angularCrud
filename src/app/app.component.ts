import { Component } from '@angular/core';
import { LayoutServiceService } from './service/layout-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angular Crud';
  constructor(public _layoutService:LayoutServiceService)
  {



  }

}
