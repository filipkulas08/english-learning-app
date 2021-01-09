import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/admin-panel/crud.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  user: firebase.User;
  level: any; 
  categories:any;
  words:any;
  items:any ;
  categoryName:string = '';
  levelName:string = '';
  isChoose:boolean = false;
  success:Array<string> = ['','','','','','','','','',''] ;
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
  random: any = [];
  message: string = '';
  constructor(private auth: AuthService, private service: CrudService) { }

  ngOnInit(): void {
    this.auth.getUserState().subscribe( user => {
      this.user = user;
    })

    this.service.getLevel().subscribe(data =>{
      this.level = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
        };
      })
    })

    this.service.getCategory().subscribe(data =>{
      this.categories = data.map(e =>{
        return{
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
        };
      })
    })
  }

  chooseCategoryAndLevel(){
    if(this.categoryName === ""){
      this.message = "Nie wybrano kategorii słów";
    }
    else if(this.levelName === ""){
      this.message = "Nie wybrano poziomu słów";
    }
    else{
    this.service.where(this.categoryName,this.levelName).subscribe(data =>{
      this.items = data.map(e =>{
        return{
          id: e.payload.doc.id,
          word: e.payload.doc.data()['word'],
        };
      })
      for(var i=0;i<10;i++){
        var randomNumber = Math.floor(Math.random()* this.items.length);
        console.log(randomNumber);
        this.random[i]=this.items[randomNumber];
          this.items.splice(randomNumber,1);
      }
    })
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
    this.success = ['','','','','','','','','',''] ;
    this.testCheck = false;
    this.points = 0;
    this.isChoose = true;
    this.message = "";
    
    
  }}
  checkTest(){
    if(this.answer1 === this.random[0].word.pl){
      this.points=this.points+1;
      this.success[0]= 'true';
    }else{
      this.success[0]= 'false';
      this.answer1 = this.random[0].word.pl
    }
    if(this.answer2 === this.random[1].word.pl){
      this.points=this.points+1;
      this.success[1]= 'true';
    }else{
      this.success[1]= 'false';
      this.answer2 = this.random[1].word.pl
    }
    if(this.answer3 === this.random[2].word.pl){
      this.points=this.points+1;
      this.success[2]= 'true';
    }else{
      this.success[2]= 'false';
      this.answer3 = this.random[2].word.pl
    }
    if(this.answer4 === this.random[3].word.pl){
      this.points=this.points+1;
      this.success[3]= 'true';
    }else{
      this.success[3]= 'false';
      this.answer4 = this.random[3].word.pl
    }
    if(this.answer5 === this.random[4].word.pl){
      this.points=this.points+1;
      this.success[4]= 'true';
    }else{
      this.success[4]= 'false';
      this.answer5 = this.random[4].word.pl
    }
    if(this.answer6 === this.random[5].word.pl){
      this.points=this.points+1;
      this.success[5]= 'true';
    }else{
      this.success[5]= 'false';
      this.answer6 = this.random[5].word.pl
    }
    if(this.answer7 === this.random[6].word.pl){
      this.points=this.points+1;
      this.success[6]= 'true';
    }else{
      this.success[6]= 'false';
      this.answer7 = this.random[6].word.pl
    }
    if(this.answer8 === this.random[7].word.pl){
      this.points=this.points+1;
      this.success[7]= 'true';
    }else{
      this.success[7]= 'false';
      this.answer8 = this.random[7].word.pl
    }
    if(this.answer9 === this.random[8].word.pl){
      this.points=this.points+1;
      this.success[8]= 'true';
    }else{
      this.success[8]= 'false';
      this.answer9 = this.random[8].word.pl;
    }
    if(this.answer10 === this.random[9].word.pl){
      this.points=this.points+1;
      this.success[9]= 'true';
    }else{
      this.success[9]= 'false';
      this.answer10 = this.random[9].word.pl
    }
    if(this.points >=8){
      this.test1Success();
    }else{
      this.test1Miss();
    }
    console.log(this.points);
    console.log(this.success[2]);


    
    this.testCheck = true;
    this.categoryName = "";
    this.levelName = "";
    
  }
  test1Success(){
    let Record = {};
    Record['test1check'] = true;
    this.service.updateUser(this.user.uid,Record);
    }

  test1Miss(){
    let Record = {};
    Record['test1check'] = false;
    this.service.updateUser(this.user.uid,Record);
    }

  clearChoose(){
      this.isChoose = false;
    }
  
}
