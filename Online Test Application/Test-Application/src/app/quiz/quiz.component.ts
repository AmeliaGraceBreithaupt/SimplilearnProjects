import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions:Array<Quiz>=[];
  answerKey:Array<QA>=[];
  userAnswers:Array<QA>=[];
  numCorrect:number = 0;
  resultFlag:boolean = false;
  //initialFlag:boolean = !this.resultFlag;
  click:boolean = false;
  constructor(public quizQA:QuizService) { }

  ngOnInit(): void {
    this.quizQA.loadQuizDetails().subscribe(result=>{this.questions=result
    for (let i=0;i<10;i++){ //add question and answers to an array to for answerKey
      this.createAnswerKey(result[i].question,result[i].correctAnswer)
    }});
    //console.log(this.answerKey);
  }
  onSelect(question:string,answer:number){
    let obj = new QA(question,answer);
    let n:boolean = true;
    //check to see if the question has already been answered
    for (let i=0;i<this.userAnswers.length;i++){
      if(this.userAnswers[i].question == question){
        n = false;
        //if question has new answer, update it
        this.userAnswers[i].answer = answer;
      }
    }
    //if question has not been previously answered, add it
    if(n){this.userAnswers.push(obj);} 

  }
  createAnswerKey(question:string, answer:number){
    let obj = new QA(question,answer);
    this.answerKey.push(obj);
  }
  onSubmit(){
    //console.log(this.answerKey);
    //console.log(this.userAnswers);
    this.compareAnswers();
    this.resultFlag = true;
    this.click = !this.click;
    //this.initialFlag= !this.resultFlag;
    this.highlightAnswers();
  }
  compareAnswers(){
    for(let j=0;j<10;j++){
      let question = this.answerKey[j].question;
      for (let i=0;i<10;i++){
        if(this.userAnswers[i].question == question){
          //compare answers
          if(this.userAnswers[i].answer == this.answerKey[j].answer){
            this.numCorrect++;
          }
          break; //break if found the right answers to compare
        }
      }
      //console.log(this.userAnswers[i].answer, this.answerKey[i].answer)
      //console.log(this.numCorrect);
    }
  }
  resultColor():string{
    let color:string = "red"
    if(this.numCorrect>=7){
      color = "green"
    }
    return color;
  }

  highlightAnswers(){
    for(let i=0;i<10;i++){
      document.getElementById(this.userAnswers[i].question+this.userAnswers[i].answer)!.style.backgroundColor = "red";
      document.getElementById(this.answerKey[i].question+this.answerKey[i].answer)!.style.backgroundColor = "green";
    }
  
  }
}
class QA {
  constructor(public question:string, public answer:number){}
}
