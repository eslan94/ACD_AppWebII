import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../utils/producto'; 
import { Oferta } from '../../utils/oferta';
import { Router } from '@angular/router';
import * as productosData from '../../../../public/json/productosData.json'
import * as ofertasData from '../../../../public/json/ofertasData.json'
import { FooterComponent } from "../../component/footer/footer.component";

function randomInt(max: number){
  return Math.floor(Math.random() * max);
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  imagenHome: string = "imagenes/home.png";

  productos: Producto[] = (productosData as any).default;

  ofertas: Oferta[] = (ofertasData as any).default;

  indiceProductosOferta: number = randomInt(this.productos.length);

  constructor(private router: Router){}

  onClickProducto(producto: Producto): void{
    this.router.navigate(["/productos", producto.id]);
  }

 
}
