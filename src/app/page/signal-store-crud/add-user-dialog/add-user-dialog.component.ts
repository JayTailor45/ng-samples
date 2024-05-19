import {Component, Inject, inject, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef,} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {User} from "../../../services/signal-store-crud.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  imports: [
    MatButton,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './add-user-dialog.component.html',
  styleUrl: './add-user-dialog.component.scss'
})
export class AddUserDialogComponent implements OnInit {

  #fb = inject(FormBuilder);
  userForm = this.#fb.group({
    id: [null],
    firstName: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    gender: [null, [Validators.required]],
    terms: [false],
  });
  #snackbar = inject(MatSnackBar);
  #dialogRef = inject(MatDialogRef<AddUserDialogComponent>);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
  }

  ngOnInit() {
    this.userForm.patchValue(this.data as any);
  }

  onSubmit() {
    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) {
      return;
    }

    if (!this.userForm.controls.terms.value) {
      this.userForm.controls.terms.setErrors({'terms-required': true})
      this.#snackbar.open('User must accept terms and condition')
      return;
    }

    this.#dialogRef.close(this.userForm.value);
  }

}
