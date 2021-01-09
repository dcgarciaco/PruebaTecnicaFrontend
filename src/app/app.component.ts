import { Component } from '@angular/core';
import { GetPublicKeyService } from './services/get-public-key.service';
import {encriptarCampo} from '../scripts/forge.all.min.js';
import { ValidateService } from './services/validate.service';


// declare var publicKey:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public puKey:any;
  
  numDoc:number;
  
  nombre:any;
  docCifrado:any;
  documento:any;

  resultado:any;
  mensaje:any;



  constructor( private getPublicKeyService:GetPublicKeyService, private validateService:ValidateService){}

  ngOnInit(): void {
    
    this.getMyPublicKey();
   
  }

  getMyPublicKey(){

    this.getPublicKeyService.getPublicKey().subscribe( res => {
      this.puKey = res[0].key;
    });

  }

  getNumDoc(numDoc:any){
    encriptarCampo(numDoc.id,'documentoCifrado',2, this.puKey);
  }

  getValidation(){

    this.nombre = document.getElementById('nombre');
    this.documento = document.getElementById('numDocumento');
    this.docCifrado = (this.documento.value!='') ? document.getElementById('documentoCifrado'): '';
    
    this.validateService.validate(this.nombre.value,this.docCifrado.value).subscribe( (res) => { 
      this.mensaje = res.mensaje;
      this.resultado = res.ok;
    },
    (err) => console.warn(err));

  }

}
