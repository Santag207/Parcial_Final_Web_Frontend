import { Component, OnInit } from '@angular/core';
import { MyEntityService } from '../../services/my-entity.service';
import { MyEntity } from '../../models/my-entity';

@Component({
  selector: 'app-my-entity-list',
  templateUrl: './my-entity-list.component.html',
  styleUrls: ['./my-entity-list.component.css']
})
export class MyEntityListComponent implements OnInit {
  entities: MyEntity[] = [];

  constructor(private entityService: MyEntityService) {}

  ngOnInit(): void {
    this.entityService.getAll().subscribe(data => {
      this.entities = data;
    });
  }
}
