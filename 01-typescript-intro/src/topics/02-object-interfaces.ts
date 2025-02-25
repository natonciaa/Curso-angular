
const skills: string[]=['bash','counter,healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string;
}
const strider:Character = {
    name: 'Strider',
    hp: 100,
    skills: ['bash', 'counter,healing']
}
strider.homeTown = "Pastoland";
console.table(strider);
export{}