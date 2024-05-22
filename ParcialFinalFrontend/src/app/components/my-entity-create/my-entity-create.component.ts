import { Component } from '@angular/core';
import { MyEntityService } from '../../services/my-entity.service';
import { MyEntity } from '../../models/my-entity';

@Component({
  selector: 'app-my-entity-create',
  templateUrl: './my-entity-create.component.html',
  styleUrls: ['./my-entity-create.component.css']
})
export class MyEntityCreateComponent {
  entity: MyEntity = new MyEntity();

  constructor(private entityService: MyEntityService) {}

  createEntity(): void {
    this.entityService.create(this.entity).subscribe(() => {
      alert('Entity created successfully!');
      this.entity = new MyEntity(); // Reset form
    });
  }
}
