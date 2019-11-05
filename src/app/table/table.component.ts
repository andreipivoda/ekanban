import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  ELEMENT_DATA  = [
    {position: 1, partno: '00AJDJ22223', location: 1.0079, quantity: 'H' , delivered:false },
    {position: 2, partno: 'Helium', location: 4.0026, quantity: 'He' , delivered:false },
    {position: 3, partno: 'Lithium', location: 6.941, quantity: 'Li' , delivered:false },
    {position: 4, partno: 'Beryllium', location: 9.0122, quantity: 'Be' , delivered:false },
    {position: 5, partno: 'Boron', location: 10.811, quantity: 'B' , delivered:false },
    {position: 6, partno: 'Carbon', location: 12.0107, quantity: 'C' , delivered:false },
    {position: 7, partno: 'Nitrogen', location: 14.0067, quantity: 'N' , delivered:false },
    {position: 8, partno: 'Oxygen', location: 15.9994, quantity: 'O' , delivered:false },
    {position: 9, partno: 'Fluorine', location: 18.9984, quantity: 'F' , delivered:false },
    {position: 10, partno: 'Neon', location: 20.1797, quantity: 'Ne' , delivered:false },
  ];
  displayedColumns: string[] = ['partno', 'location', 'quantity','position'];
  dataSource = this.ELEMENT_DATA;

  constructor() { }

  selectRow(ex){

    this.dataSource = this.dataSource.filter(row => row.position != ex.position);
    console.log(this.dataSource);
  }
  ngOnInit() {
  }

}

