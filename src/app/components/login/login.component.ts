import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _modalService : ModalService){}
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  closeModal(){
    this._modalService.closeModal();
  }

  handleSubmit() {
    if(this.loginForm.valid) {
      console.log("OK");
      this._modalService.closeModal();
    } else {
      console.log("ERROR");
    }
  }
}
