import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CardService} from "../../services/card.service";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  cardForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private dialogRef: MatDialogRef<CardModalComponent>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: ['', Validators.maxLength(50)],
      title: ['', Validators.required,],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.email, Validators.maxLength(50)]],
      address: ['', Validators.maxLength(255)]
    });
  }

  addCardMethod(): void {
    // console.log(this.cardForm.value)
    this.cardService.addCard(this.cardForm.value)
      .subscribe((res: any) => {
        this.dialogRef.close();
        this.snackBar.open(res || 'Card Visitiniz elave edildi', '');

      })
  }
//  card add success oldugu zaman this.dialogRef ile close deyib komponenti baglayiriq.
//  dialogRef neyi baglayavgini constructor icindeki referansdan bilir.
//  snackBar - success oldugu zaman ekranda alert kimi msg yazsin

}
