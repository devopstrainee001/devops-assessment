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
    checkprogressBar=0;
    answer: questionAns = data[0];
    allQuestions: questionAns[] = data;
    progressBarIncrement: number = 0;
    questionIndex=0;
    indexQuestion=0;
    backHidden=true;
    isSubmitted = false;
    constructor() { }

      ngOnInit(): void {
          for (let count = 1; count <= this.allQuestions.length; count++) {
                this.totalindex++;
          }
          var element1 = <HTMLInputElement>document.getElementById("back");
           if (this.indexQuestion == 0) {
              element1.style.display = "none";
           } else {
             element1.style.display = "";
           }
      }

    submitForm(form: NgForm) {
        this.isSubmitted = true;
        if (!form.valid) {
          return false;
        } else {
          this.progressBarIncrement = 100 / this.totalindex;
          this.indexQuestion = Number(this.answer.questionIndex)
          if(this.indexQuestion< this.allQuestions.length)
          this.answer = data[this.indexQuestion]
        }
        var element = <HTMLInputElement> document.getElementById("next");
        var element1 = <HTMLInputElement>document.getElementById("back");
        if (this.indexQuestion == this.allQuestions.length ) {
          element.style.display = "none";
        } else {
          element.style.display = "";
          element1.style.display = "";
        }
        return this.progress = this.progress + this.progressBarIncrement

    }

    progressbarBackword() {
      this.indexQuestion = Number(this.answer.questionIndex)
      this.answer = data[this.indexQuestion - 2]
      if (this.indexQuestion == this.totalindex) {
        this.progress = this.progress - (this.progressBarIncrement * 2)
      } else {
        this.progress = this.progress - this.progressBarIncrement;
      }

      var element = <HTMLInputElement>document.getElementById("next");
      if (Number(this.answer.questionIndex) == 1) {
        var element1 = <HTMLInputElement>document.getElementById("back");
        element1.style.display = "none";
        //element.disabled = true;
      } else {
        element.style.display = "";
      }
    }
}

