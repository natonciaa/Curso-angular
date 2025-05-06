import { Injectable, effect, signal } from "@angular/core";
import { Character } from "../interfaces/character.interface";

function loadFromLocalStorage() {
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonballService {

    constructor() {
    }
    // characters = signal([
    //     { id: 1, name: 'Goku', power: 9001 },
    //     { id: 2, name: 'Vegeta', power: 8000 },
    // ]);

    characters = signal<Character[]>(loadFromLocalStorage());
    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    })

    addCharacter(character: Character) {
        this.characters.update(
            list => [...list, character]);
    }
}