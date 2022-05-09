import { Component, OnInit } from '@angular/core';
import { vendor } from 'src/app/vendor';
import { VendorService } from 'src/app/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: vendor[] = [];

  constructor(private vendorService:VendorService) { }

  ngOnInit(): void {
    this.getVendors();
  }
 private getVendors() {
   this.vendorService.getVendorList().subscribe(data=>{
     this.vendors=data;
   });
    
  }

}
