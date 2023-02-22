import { Component ,OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 encapsulation: ViewEncapsulation.Emulated //for changing css style enviorment 
})
export class AppComponent implements  OnInit {
  flag= true;
 serverELements=[{type:'server', name:'Qauntum', content:'fast'}];
  
 ngOnInit(){
   console.log('')
 }

   onServerAdded(serverData: {serverName: string , serverContent: string }){
       
      this.serverELements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent,
        
      })
     
    
   }


   onBlueprintAdded(blueprintData: {serverName: string , serverContent: string }){
     this.serverELements.push({
     type: 'blueprint',
     name: blueprintData.serverName,
     content: blueprintData.serverContent
     })
     
   }
   onChangeFirst(){
    this.serverELements[0].name= 'ohk ';
   }
   ondestroy(){
    this.serverELements.splice(0,1);
   }
  
}
