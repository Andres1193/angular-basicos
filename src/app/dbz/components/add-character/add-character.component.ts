import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {  

  
  @Output() // para que nuestro main-page escuhe nuestro onNewCharacter necesitamos decorar la propiedad con el Output 
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); // Vamos a emitir un character (EventEmitter es un generico <T>)

  public character: Character = {
    name: '',
    power: 0 
  };

  emitCharacter(): void{

    console.log(this.character);
    if ( this.character.name.length === 0 ) return;

    // Vamos a emitir algo de tipo character
    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }

}
