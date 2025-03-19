import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/shared/navbar/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/shared/navbar/dragonball/character-add/character-add.component';
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
  name = signal('');
  power = signal(0);
  listNames: string = "Listado personajes from Dragonball Super";
  characters = signal([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter(character: Character) {
    this.characters.update(
      list => [...list, character]);
  }
}
