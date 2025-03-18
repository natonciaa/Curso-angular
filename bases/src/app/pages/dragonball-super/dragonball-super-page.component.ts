import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/shared/navbar/dragonball/character-list/character-list.component';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball',
  standalone: true,
  imports: [CharacterListComponent],
  templateUrl: './dragonball-super-page.component.html'
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter() {
    console.log('name ' + this.name);
    console.log('power ' + this.power);
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const characterNew: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };
    this.characters().push(characterNew);
  }
}
