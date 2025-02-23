import { Component, Input } from '@angular/core';
import { INotices } from '../../interfaces/inotices.type=interface';

@Component({
  selector: 'app-notice-list',
  imports: [],
  templateUrl: './notice-list.component.html',
  styleUrl: './notice-list.component.css'
})
export class NoticeListComponent {
  @Input() notices: INotices[] = [];

}
