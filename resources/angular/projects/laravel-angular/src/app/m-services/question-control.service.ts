import { Injectable } from '@angular/core';
import { QuestionBase } from './models/question-base';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable()
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    const group: any = {};
    
    questions.forEach(question => {
      group[question.key] = question.required ?
       new FormControl(question.value || '', Validators.required) : new FormControl(question.value);
    });
    console.log(group);
    return new FormGroup(group);
  }
}
