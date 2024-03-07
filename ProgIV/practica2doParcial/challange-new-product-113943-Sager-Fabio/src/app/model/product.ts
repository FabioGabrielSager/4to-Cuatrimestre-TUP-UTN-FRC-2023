export class Product {
  id: number = 0;
  name: string = '';
  description: string = '';
  nameEncoded: string = '';
  price: number = 0;
  productType: 'Producto' | 'Servicio' = 'Producto';
  timeFraction?: string = ''; // Para servicios, la fracción de tiempo
  inventories?: Stock[] = []; // Para productos, stock
}

export class Stock {
  id: number = 0;
  location: string = '';
  count: number = 0;
}
