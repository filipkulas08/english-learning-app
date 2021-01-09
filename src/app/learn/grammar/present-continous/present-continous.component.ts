import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/admin-panel/crud.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-present-continous',
  templateUrl: './present-continous.component.html',
  styleUrls: ['./present-continous.component.css']
})
export class PresentContinousComponent implements OnInit {
  user: firebase.User;
  activeUser:any =[];
  answer1:string;
  answer2:string;
  answer3:string;
  answer4:string;
  points:any = 0;
  testCheck:boolean = false;
  constructor(private auth: AuthService, private service: CrudService) { }

  ngOnInit(): void {
    this.points = 0;
    this.testCheck = false;
    this.auth.getUserState().subscribe( user => {
      this.user = user;
      this.user = user;
      this.service.activeUser(this.user.uid).subscribe(data =>{
        this.activeUser = data.map(e =>{
          return{
            id: e.payload.doc.data()['id'],
            role: e.payload.doc.data()['role'],
            test: e.payload.doc.data()['presentContinuouns']
          };
        })
        console.log(this.activeUser)
      })
    })
  }

  checkTest(){
    if(this.answer1 === "are talking"){
      this.points=this.points+1;
    }
    if(this.answer2 === "are lying"){
      this.points=this.points+1;
    }
    if(this.answer3 === "are looking"){
      this.points=this.points+1;
    }
    console.log(this.points);
    if(this.points === 3){
      this.test1Success();
      console.log('ez');
    }else{
      this.test1Miss();
    }
    
    this.answer1 = "";
    this.answer2 = "";
    this.answer3 = "";
    
    this.points  = 0;
    this.testCheck = true;
  }
  test1Success(){
    let Record = {};
    Record['presentContinuouns'] = true;
    this.service.updateUser(this.user.uid,Record);
    }

  test1Miss(){
    let Record = {};
    Record['presentContinuouns'] = false;
    this.service.updateUser(this.user.uid,Record);
    }

}

