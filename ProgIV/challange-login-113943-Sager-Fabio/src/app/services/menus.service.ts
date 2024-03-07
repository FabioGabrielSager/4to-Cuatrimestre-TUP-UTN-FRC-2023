import { Injectable } from '@angular/core';
import { Menu } from '../classes/menu';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  menus: Menu[] = [
    {
      id: 1,
      name: 'polenta',
      description: "Occaecat deserunt non nisi nisi ut officia ad ullamco deserunt. Non dolor mollit nisi aute ea. Occaecat veniam quis do non amet cupidatat amet commodo velit commodo amet consectetur. Qui est fugiat sint occaecat amet sit ea proident consequat eiusmod. Id consectetur ipsum ullamco non ea esse.",
      imageUrl: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSusCZQB0HX-i5v-R02IeeZjpalBRvrV1laFk79lczsESCJ9m5dvLgCI_thYS5HYN2-',
      updatedAt: new Date('2023-09-10T08:30:00')
    },
    {
      id: 2,
      name: 'Pizza',
      description: "Occaecat deserunt non nisi nisi ut officia ad ullamco deserunt. Non dolor mollit nisi aute ea. Occaecat veniam quis do non amet cupidatat amet commodo velit commodo amet consectetur. Qui est fugiat sint occaecat amet sit ea proident consequat eiusmod. Id consectetur ipsum ullamco non ea esse.",
      imageUrl: 'https://assets.elgourmet.com/wp-content/uploads/2023/03/pizza_Mh3H4eanyBKEsStv1YclPWTf9OUqIi.png',
      updatedAt: new Date('2023-09-22T10:30:00')
    }
  ]

  constructor() { }

  getMenus(): Menu[]{
    return this.menus.slice();
  } 
}
