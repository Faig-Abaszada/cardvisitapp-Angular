import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CardService} from "../../services/card.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Card} from "../../models/card";

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  cardForm!: FormGroup;
  showSpinner: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private dialogRef: MatDialogRef<CardModalComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Card
  ) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: [this.data?.name || '', Validators.maxLength(50)],
      title: [this.data?.title || '', Validators.required,],
      phone: [this.data?.phone || '', [Validators.required, Validators.maxLength(20)]],
      email: [this.data?.email || '', [Validators.email, Validators.maxLength(50)]],
      address: [this.data?.address || '', Validators.maxLength(255)]
    });
  }

  addCardMethod(): void {
    // console.log(this.cardForm.value)
    this.showSpinner = true;
    this.cardService.addCard(this.cardForm.value)
      .subscribe((res: any) => {
        this.getSuccess(res || 'Card Visitiniz Yenilendi');
      })
  }
  updateCard(): void {
    this.showSpinner = true;
    this.cardService.updateCard(this.cardForm.value, this.data.id)
      .subscribe((res: any) => {
        this.getSuccess(res || 'Card Visitiniz Yenilendi');
      });
  }
  cancelCard(): void {
    this.dialogRef.close();
  }
  deleteCard(): void {
    this.showSpinner = true;
    this.cardService.deleteCard(this.data.id)
      .subscribe((res: any) => {
        this.getSuccess(res || 'Card Visitiniz Silindi');
      });
  }

  getSuccess(message: string): void {
    this.cardService.getCards();
    this.showSpinner = false;
    this.dialogRef.close();
    this.snackBar.open(message, '', {duration: 4000});
  }
//  card add success oldugu zaman this.dialogRef ile close deyib komponenti baglayiriq.
//  dialogRef neyi baglayavgini constructor icindeki referansdan bilir.
//  snackBar - success oldugu zaman ekranda alert kimi msg yazsin

}
