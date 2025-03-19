import { Component, output, signal } from '@angular/core';
import { Character } from '../../../../../interfaces/character.interface';

@Component({
    selector: 'dragonball-character-add',
    standalone: true,
    templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
    name = signal('');
    power = signal(0);
    newCharacter = output<Character>();

    addCharacter() {
        const newCharacter: Character = {
            id: 0,
            name: this.name(),
            power: this.power() || 0
        };
        this.newCharacter.emit(newCharacter);
    }
}

