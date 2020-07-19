import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Item } from "./../Model/Item";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  item : Item;
  constructor(public dialogRef: MatDialogRef<AddNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.item = {
        itemid : 0,
        itemname : '',
        price : 0,
        description : ''
      };
     }

  ngOnInit(): void {
  }

  save()
  {
    this.item.itemid = Math.floor(Math.random() * 100000) + 1;
    this.dialogRef.close(this.item);
  }

  close()
  {
    this.dialogRef.close();
  }
}
