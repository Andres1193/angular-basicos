import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // Recibir del padre un arreglo de characters
  @Input() 
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // emitir el index del character a eliminar al padre
  @Output()
  public  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {

    if ( !id ) return;
    this.onDelete.emit( id );
  }

}
