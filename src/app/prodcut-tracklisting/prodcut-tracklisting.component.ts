import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Album } from '../album';

@Component({
  selector: 'app-prodcut-tracklisting',
  templateUrl: './prodcut-tracklisting.component.html',
  styleUrls: ['./prodcut-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo: Album;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(
      response => this.albumInfo = response
    );
  }

}
