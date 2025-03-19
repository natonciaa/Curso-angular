import { Component, input } from '@angular/core';
import { Character } from '../../../../../interfaces/character.interface';
@Component({
    selector: 'app-character-list',
    standalone: true,
    templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
    characters = input.required<Character[]>();
    listName = input.required<string>();

}
