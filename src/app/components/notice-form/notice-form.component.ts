import { Component } from '@angular/core';
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

  getNotice() {
    console.log(this.newNotice);
  }
}
