import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/admin-panel/crud.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-past-perfect',
  templateUrl: './past-perfect.component.html',
  styleUrls: ['./past-perfect.component.css']
})
export class PastPerfectComponent implements OnInit {
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
            test: e.payload.doc.data()['pastPerfect']
          };
        })
        console.log(this.activeUser)
      })
    })
  }

  checkTest(){
    if(this.answer1 === "had" && this.answer2 === "had"){
      this.points=this.points+1;
    }
    if(this.answer3 === "had happened"){
      this.points=this.points+1;
    }
    if(this.answer4 === "had heard"){
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
    this.answer4 = "";
    this.points  = 0;
    this.testCheck = true;
  }
  test1Success(){
    let Record = {};
    Record['pastPerfect'] = true;
    this.service.updateUser(this.user.uid,Record);
    }

  test1Miss(){
    let Record = {};
    Record['pastPerfect'] = false;
    this.service.updateUser(this.user.uid,Record);
    }

}


