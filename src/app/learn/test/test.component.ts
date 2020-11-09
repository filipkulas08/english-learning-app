import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/admin-panel/crud.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  level: any; 
  categories:any;
  words:any;
  items:any ;
  categoryName:string;
  levelName:string = '';
  limit = 10;
  answer1:string;
  answer2:string;
  answer3:string;
  answer4:string;
  answer5:string;
  answer6:string;
  answer7:string;
  answer8:string;
  answer9:string;
  answer10:string;
  points:any = 0;
  testCheck:boolean = false;
  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.service.getLevel().subscribe(data =>{
      this.level = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          
        };
      })
      console.log(this.level);
    })

    this.service.getCategory().subscribe(data =>{
      this.categories = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          
        };
      })
      console.log(this.categories);
    })
    
  }

  chooseCategory(){
    this.service.whereLimit(this.categoryName,this.limit,this.levelName).subscribe(data =>{
      this.items = data.map(e =>{
        return{
          id: e.payload.doc.id,
          word: e.payload.doc.data()['word'],
          
        };
      })
      console.log(this.items);
    })
    this.testCheck = false;
    this.points = 0;
    
  }
  checkTest(){
    if(this.answer1 === this.items[0].word.pl){
      this.points=this.points+1;
    }
    if(this.answer2 === this.items[1].word.pl){
      this.points=this.points+1;
    }
    if(this.answer3 === this.items[2].word.pl){
      this.points=this.points+1;
    }
    if(this.answer4 === this.items[3].word.pl){
      this.points=this.points+1;
    }
    if(this.answer5 === this.items[4].word.pl){
      this.points=this.points+1;
    }
    if(this.answer6 === this.items[5].word.pl){
      this.points=this.points+1;
    }
    if(this.answer7 === this.items[6].word.pl){
      this.points=this.points+1;
    }
    if(this.answer8 === this.items[7].word.pl){
      this.points=this.points+1;
    }
    if(this.answer9 === this.items[8].word.pl){
      this.points=this.points+1;
    }
    if(this.answer10 === this.items[9].word.pl){
      this.points=this.points+1;
    }
    console.log(this.points);



    this.answer1 = "";
    this.answer2 = "";
    this.answer3 = "";
    this.answer4 = "";
    this.answer5 = "";
    this.answer6 = "";
    this.answer7 = "";
    this.answer8 = "";
    this.answer9 = "";
    this.answer10 = "";
    this.testCheck = true;
    this.categoryName = "";
    this.levelName = "";
    
  }
}
