import { Component,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

import { Item } from "./Model/Item";
import {AddNewComponent} from './add-new/add-new.component';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ThinkBridgeAngularApp';
  displayedColumns: string[] = ['itemname', 'price', 'description'];
  dataSource: MatTableDataSource<Item>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  item : Item[];
  constructor(private commonService : CommonService, public dialog: MatDialog)
  {

  }

  ngOnInit() {
    let self = this;
    this.commonService.GetItem().subscribe(data => {
      this.item = data;
      self.dataSource = new MatTableDataSource(this.item);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }
   
  AddNew()
  {
    const dialogRef = this.dialog.open(AddNewComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.commonService.PostItem(result).subscribe(obj => {
        console.log('Record Inserted');
        this.item.push(obj);
        this.dataSource._updateChangeSubscription();
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
