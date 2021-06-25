import { Component, OnInit } from '@angular/core';
import { Miembros } from 'src/app/interfaces/miembros.interface';
import { FireBaseServiceService } from 'src/app/services/fire-base-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private fireB:FireBaseServiceService) { }
  fecha!: Date;
  test: any[] = []
  miembros: Miembros[] = [];
  miembroEditado = {} as Miembros;


  ngOnInit(): void {
    this.fireB.getMiembros().subscribe(resp=>{
      console.log(resp);
      this.miembros = resp;
    });
    // this.fireB.getCollection('Miembros').subscribe(resp=>{
    //   console.log(resp);
    //   this.test = resp;
    //   // this.fecha = new Date(this.miembro.fecha_nacimiento.seconds*1000);
    //   // console.log(this.miembro);
    //   // console.log(new Date(this.miembro.fecha_nacimiento.seconds*1000))
    // });
  }
  delete(id:any){
    console.log(id);
    this.fireB.deleteCollectionItem(id);
  }
  agregar(){
    let miembro: Miembros = {
      nombres: 'Luis Mayta',
      fecha_nacimiento : '21/05/1980'
    }
    //this.miembro.fecha_nacimiento =                                          
    this.fireB.agregarCollecionItem(miembro);
    console.log(miembro);
  }
  actualizar(id:any){
      this.miembroEditado.id = id;
      this.miembroEditado.nombres = 'Luis Fernando Mayta Campos';
      this.miembroEditado.fecha_nacimiento = '28/05/1980';
      this.fireB.actualizarCollectionItem(this.miembroEditado);
      console.log(this.miembroEditado);
  }

}
