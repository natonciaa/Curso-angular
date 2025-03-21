import { Component, OnInit, Signal, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball',
  standalone: true,
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal([
    { id: 1, name: 'Goku', power: 9001 }
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
