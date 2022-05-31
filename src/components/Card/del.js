import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from './users.service';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  p: any;
  public users: any = [];
  showDelete = false;
  modalReference: any = NgbModal;
  isCheckAll = false;

  constructor(
    private modalService: NgbModal,
    private usersService: UsersService,
    private primengConfig: PrimeNGConfig,
    private router: Router
  ) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((res: any) => {
      this.users = res.data.map((ele: any) => {
        ele.isSelected = false;
        return ele;
      });
    });
  }
  reRoute() {
    this.router.navigate(['/dashboard/add-person']);
  }
  editPerson() {
    this.router.navigate(['/dashboard/add-person'], {
      queryParams: { isEdit: 'true' },
    });
  }
  taggleDelete(item: any, event: any) {
    setTimeout(() => {
      const getSelected = this.users.find(
        (ele: any) => ele.isSelected === true
      );
      this.showDelete = getSelected ? true : false;
    }, 100);
  }
  deletePerson(item: any) {
    let index = this.users.findIndex((element: any) => element.id === item.id);
    console.log(item.id);
    console.log(index);
    this.users.splice(index, 1);
  }

  CheckAllOptions() {
    setTimeout(() => {
      this.users.map((ele: any) => (ele.isSelected = this.isCheckAll));
      this.taggleDelete('i', 'u');
    }, 100);
  }

  openDialog() {
    const ngMdelRef = this.modalService.open(DialogboxComponent, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
      centered: true,
      windowClass: 'customModalClass',
    });
    ngMdelRef.componentInstance.fromParent = this.users.filter(
      (ele: any) => ele.isSelected
    );
    ngMdelRef.result.then((res) => {
      console.log(res);
      if (res.success == true) {

        const getSelected = this.users.filter((ele: any) => ele.isSelected);
        this.deletePerson(getSelected);
        console.log(getSelected);
      }
    });
  }
}

