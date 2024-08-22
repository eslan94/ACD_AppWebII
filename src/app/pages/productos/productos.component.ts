import { Component } from '@angular/core';
import { Producto } from '../../utils/producto'; 
import { Router } from '@angular/router';
import * as productosData from '../../../../public/json/productosData.json'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos: Producto[] = (productosData as any).default;

  constructor(private router: Router){}

  ngOnInit(): void {}

  onClickButton(): void{
    console.log('Button clicked');
  }

  onClickProducto(producto: Producto): void{
    this.router.navigate(["/productos", producto.id]);
  }

}
