import { Injectable } from '@angular/core';
import { TypeNewsModel } from 'src/app/model/news-admin/news-admin';

@Injectable({
  providedIn: 'root'
})
export class ListSharedService {
  typeNews: TypeNewsModel[] = [
    {
    id: 1,
    libelle: 'رياضية'
  },
  {
    id: 2,
    libelle: 'سياسية'
  },
  {
    id: 3,
    libelle: 'الاجتماعية'
  },
  {
    id: 4,
    libelle: 'الاقتصادية'
  },
  {
    id: 5,
    libelle: 'فنية'
  },
  {
    id: 6,
    libelle: 'تقنية'
  },
  {
    id: 7,
    libelle: 'مناخية'
  },
]
  constructor() { }

  typeNewList()
  {

return this.typeNews;

  }

}
