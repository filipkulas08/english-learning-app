import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-add-levels',
  templateUrl: './add-levels.component.html',
  styleUrls: ['./add-levels.component.css']
})
export class AddLevelsComponent implements OnInit {
    levelName: string = "";
    message: string;
  constructor(private service: CrudService) { }

  ngOnInit(): void {
  }
  CreateRecord(){
    let Record = {};
    
    Record['name'] = this.levelName;
      
    
    if(this.levelName === ""){
      this.message = "Nazwa poziomu nie może być pusta"
    }
    else{
    this.service.createLevel(Record).then(res => {
      
      this.levelName = "";
      console.log(res);
      this.message = "Poziom został dodany"
    }).catch(error =>{
      console.log(error);
    })};
};

}
