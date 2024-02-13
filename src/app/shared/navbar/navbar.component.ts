import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../components/login/login.component';
import { ModalloginComponent } from '../../components/modallogin/modallogin.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private _modalService: ModalService){}

  openModal(){
    this._modalService.openModal(LoginComponent, '0ms', '0ms');
  }
}
