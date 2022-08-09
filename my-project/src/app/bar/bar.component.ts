import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { mixinDisabled } from '@angular/material/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import data from '../../assets/json/data.json'
interface questionAns {  
  questionIndex: String,
  question: String,
  ans1: string,  
  ans2: String,  
  ans3: String,  
  ans4: String,
} 
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
progress:any=0;
totalindex=0;
answer: questionAns = data[0];  
allQuestions: questionAns[] = data;
progressBarIncrement: number = 0;
constructor() { }
ngOnInit(): void {
    // console.log(this.answer)
   //  this.progressBarIncrement=100/this.allQuestions.length+1
    for(let count=1;count<=this.allQuestions.length;count++)
     {
     this.totalindex++;
     } 
  }
    isSubmitted = false;
    submitForm(form: NgForm) {
        this.isSubmitted = true;
         if(!form.valid) {
        return false;
      } 
       else {
              this.progressBarIncrement=100/this.totalindex+2;
               const indexQuestion =  Number(this.answer.questionIndex)
               this.answer = data[indexQuestion+1]
              // if(indexQuestion==this.allQuestions.length-1){
              //     var element = <HTMLInputElement> document.getElementById("button");
              //     element.disabled=true;
              // }
             
        }
        const indexQuestion =  Number(this.answer.questionIndex)
  
        if(indexQuestion==this.allQuestions.length-1){
          var element = <HTMLInputElement> document.getElementById("button");
          element.disabled=true;
          
         
      }
     return this.progress=this.progress+this.progressBarIncrement
     
    }
   
    progressbarBackword(){
     
        if(this.progress==0){
        this.progress=this.progress+0
      
   
    }
     else { 
      
      this.progress=this.progress-this.progressBarIncrement
      
     }
  }
}
  
