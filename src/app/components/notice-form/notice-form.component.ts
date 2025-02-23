import { Component, EventEmitter, Output } from '@angular/core';
import { INotices } from '../../interfaces/inotices.type=interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notice-form',
  imports: [FormsModule],
  templateUrl: './notice-form.component.html',
  styleUrl: './notice-form.component.css'
})
export class NoticeFormComponent {
  newNotice: INotices = {title: "", image: "", noticeBody: "", date: new Date()};
  @Output() sendNotice: EventEmitter<INotices> = new EventEmitter();

  getNotice() {
    console.log(this.newNotice);
    this.sendNotice.emit(this.newNotice);
    this.newNotice = {title: "", image: "", noticeBody: "", date: new Date()};
  }
}
