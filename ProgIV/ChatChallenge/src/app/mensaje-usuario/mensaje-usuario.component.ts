import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mensaje-usuario',
  templateUrl: './mensaje-usuario.component.html',
  styleUrls: ['./mensaje-usuario.component.css']
})
export class MensajeUsuarioComponent {
  @Input() usuario: string = "";
  @Output() onEnviarMensaje = new EventEmitter();
  mensaje: string = "";

  enviarMensaje():void {
    const input = document.getElementById('mensaje');
    if(input != null)
      input.innerText = "";

    let date = new Date();
    this.onEnviarMensaje.emit(`[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}] - ${this.mensaje}`)
  }

  actualizarMensaje($event: any): void {
    this.mensaje = $event.target.value;
  }
}
