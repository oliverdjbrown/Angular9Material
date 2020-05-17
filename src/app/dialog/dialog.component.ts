import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

 
  constructor(public dialog: MatDialog) { }

  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Oliver'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    });
  }

  ngOnInit(): void {
  }

}
