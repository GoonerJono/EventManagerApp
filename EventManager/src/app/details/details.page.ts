import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.GetUserDetailsById(this.id).subscribe(r => console.log(r));
  }

}
