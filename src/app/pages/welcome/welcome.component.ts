
import { Component, OnInit } from '@angular/core';
import { SpeechSynthesisUtteranceFactoryService, SpeechSynthesisService } from '@kamiazya/ngx-speech-synthesis';
import { CrudService } from 'src/app/admin-panel/crud.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  providers: [
    SpeechSynthesisUtteranceFactoryService,
  ],
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit{
  level: any; 
  categories:any;
  words:any;
  items:any ;
  categoryName:string;
  levelName:string = '';
  limit = 10;
  
  constructor(private service: CrudService, public f: SpeechSynthesisUtteranceFactoryService,
    public svc: SpeechSynthesisService,) {}
  ngOnInit(): void {
    // this.service.getWords().subscribe(data =>{
    //   this.words = data.map(e =>{
    //     return{
    //       id: e.payload.doc.id,
    //       isedit: false,
    //       word: e.payload.doc.data()['word'],
          
    //     };
    //   })
    //   console.log(this.words);
    // })

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
// zamiana tekstu na mowę
  speech() {
    for (const text of this.items) {
      const v = this.f.text(text.word.ang);
      this.svc.speak(this.f.text(text.word.ang));
    }
  }

  // cancel() {
  //   this.svc.cancel();
  // }
  // pause() {
  //   this.svc.pause();
  // }

  // resume() {
  //   this.svc.resume();
  // }

    
  
  

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
  }
}

