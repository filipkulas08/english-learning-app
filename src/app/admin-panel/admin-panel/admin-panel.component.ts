import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

    words: any;
    message: string;
    categories: any;
    levels: any;
    orderBy: string;
  constructor(private service: CrudService, private messager: NzMessageService) { }

  ngOnInit(): void {
    this.orderBy = "word.ang";
    this.service.getWords(this.orderBy).subscribe(data =>{
      this.words = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          word: e.payload.doc.data()['word'],
          
        };
      })
      console.log(this.words);
    })

    this.service.getCategory().subscribe(data =>{
      this.categories = data.map(e =>{
        return{
          id: e.payload.doc.id,
          categoryName: e.payload.doc.data()['name'],
        };
      })
      console.log(this.categories);
    });

    this.service.getLevel().subscribe(data =>{
      this.levels = data.map(e =>{
        return{
          id: e.payload.doc.id,
          levelName: e.payload.doc.data()['name'],
        };
      })
      console.log(this.levels);
    });

    
  }

  EditRecord(Record){
    Record.isedit = true;
    Record.editEng = Record.word.ang;
    Record.editPl = Record.word.pl;
    Record.editCategory = Record.word.category.name;
    Record.editLevel = Record.word.category.level.name;
  }

  Updaterecord(recorddata){
    let Record = {};
    Record['word'] = {
      'ang': recorddata.editEng,
      'pl': recorddata.editPl,
      'category':{
        'name': recorddata.editCategory,
        'level':{
          'name':  recorddata.editLevel,
        }
      }};
    this.service.updateWord(recorddata.id, Record);
    recorddata.isedit = false;
  
  }

  Deleteemployee(record_id){
    this.service.deleteWord(record_id);

  }
  orderByAng(){
    this.orderBy = "word.ang";
    this.service.getWords(this.orderBy).subscribe(data =>{
      this.words = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          word: e.payload.doc.data()['word'],
          
        };
      })
      console.log(this.words);
    })
  }

  orderByPl(){
    this.orderBy = "word.pl";
    this.service.getWords(this.orderBy).subscribe(data =>{
      this.words = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          word: e.payload.doc.data()['word'],
          
        };
      })
      console.log(this.words);
    })
  }
  
  orderByCategory(){
    this.orderBy = "word.category.name";
    this.service.getWords(this.orderBy).subscribe(data =>{
      this.words = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          word: e.payload.doc.data()['word'],
          
        };
      })
      console.log(this.words);
    })
  }

  orderByLevel(){
    this.orderBy = "word.category.level.name";
    this.service.getWords(this.orderBy).subscribe(data =>{
      this.words = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          word: e.payload.doc.data()['word'],
          
        };
      })
      console.log(this.words);
    })
  }

  deleteMessage(): void {
    this.messager.info('Słowo zostało usunięte poprawnie');
  }
  
  editMessage(): void {
    this.messager.info('Słowo zostało edytowane poprawnie');
  }
  
  
    
  
}
