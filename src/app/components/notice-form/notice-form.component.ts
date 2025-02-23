import { Component, EventEmitter, Output } from '@angular/core';
import { INotices } from '../../interfaces/inotices.type=interface';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-notice-form',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './notice-form.component.html',
  styleUrl: './notice-form.component.css'
})
export class NoticeFormComponent {
  newNotice: INotices = {title: "", image: "", noticeBody: "", date: ""};
  @Output() sendNotice: EventEmitter<INotices> = new EventEmitter();
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      image: new FormControl("",[]),
      noticeBody: new FormControl("",[
        Validators.required
      ]),
      date: new FormControl("",[
        Validators.required,
        Validators.pattern(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/)
      ])
    }, [])
  }

  getNotice() {
    this.sendNotice.emit(this.newNotice);
    this.newNotice = {title: "", image: "", noticeBody: "", date: ""};
    
  }

  checkControl(controlName:string, errorName:string): boolean | undefined{
    return this.userForm.get(controlName)?.hasError(errorName) && this.userForm.get(controlName)?.touched

  }
}
