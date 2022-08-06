import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import data from '../../assets/json/data.json'

interface questionAns {  
  ans1: string;  
  ans2: String;  
  ans3: String;  
  ans4: String;  
} 


 
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
progress=0;
addval=0;

answer: questionAns[] = data;  

constructor() { }
  ngOnInit(): void {
     
  }
  isSubmitted = false;
  submitForm(form: NgForm) {
    
    this.isSubmitted = true;
    for(let i=0;i<this.answer.length-1;i++){
      this.answer
      }
    if(!form.valid) {
      return false;
  
    } else {
      
      return this.progress=this.progress+10
     /* return alert(JSON.stringify(form.value))*/
    }
  }
 
  progressbarBackword(){
    if(this.progress==0){
      this.progress=this.progress+0
    
    }
    else{
      this.progress=this.progress-10 
    }
    
  }
  
}

