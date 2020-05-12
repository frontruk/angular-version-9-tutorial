import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/services/stats.service';
import { Observable, of } from 'rxjs';
import { Person } from 'src/app/interfaces/user';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public users$: Observable<Array<any> | false>;;
  constructor(private statsService: StatsService) { }

  ngOnInit() {
  
   this.users$ =  this.statsService.getUserStats();
  }

}
