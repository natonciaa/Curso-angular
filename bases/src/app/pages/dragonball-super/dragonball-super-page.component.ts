import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/shared/navbar/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/shared/navbar/dragonball/character-add/character-add.component';
import { DragonballService } from '../../services/dragonball.service';
interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball',
  standalone: true,
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html'
})
export class DragonballSuperPageComponent {
  // constructor(public dragonballService: DragonballService) { }

  public dragonballService = inject(DragonballService);
}
