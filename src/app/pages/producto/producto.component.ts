import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Producto } from '../../utils/producto'; 
import * as productosData from '../../../../public/json/productosData.json'

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  producto?:Producto;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    this.route.paramMap.subscribe((params) => {
        const id = params.get("id");
        this.producto = ((productosData as any).default as Producto[]).find((producto) => producto.id === Number(id));
    })
  }

}
