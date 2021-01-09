import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    category: any;
  constructor(private service: CrudService, private messager: NzMessageService) { }

  ngOnInit(): void {
    this.service.getCategory().subscribe(data =>{
      this.category = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          
        };
      })
      console.log(this.category);
    })



  }

  EditRecord(Record){
    Record.isedit = true;
    Record.editName = Record.name;
    
  }
  Updaterecord(recorddata){
    let Record = {};
    Record['name'] = recorddata.editName;
    this.service.updateCategory(recorddata.id, Record);
    recorddata.isedit = false;
    recorddata.editName = '';
  }

  Deleteemployee(record_id){
    this.service.deleteCategory(record_id);

  }

  deleteMessage(): void {
    this.messager.info('Słowo zostało usunięte poprawnie');
  }
  
  editMessage(): void {
    this.messager.info('Słowo zostało edytowane poprawnie');
  }
  

}
