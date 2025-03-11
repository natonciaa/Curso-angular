import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  nameCapitalized = computed(() => {
    return this.name().toUpperCase();
  });
  heroDescription = computed(() => { 
    return `${ this.name() } - ${ this.age() }`;
  })
  // getHeroDescription(): string {
  //   return `${ this.name() } - ${ this.age() }`;
  // }

  changeHero() {
    this.name.update((v) => 'Spiderman');
    this.age.update((v) => 22);
    }

    changeAge() {
      this.age.set(60);
          }
  resetForm(){
    this.name.update((v) => 'Ironman');
    this.age.update((v) => 45);

  }
}
