import { Injectable } from '@angular/core';
import { QuestionBase } from './models/question-base';
import { DropdownQuestion, TextBoxQuestion, TextAreaQuestion, RadiogroupQuestion } from './models/question-models';

@Injectable()
export class QuestionService {

  constructor() { }

  getQuestions() {
    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'gender',
        label: 'Gender',
        value: 'male',
        options: [
          { key: 'male', value: 'Male' },
          { key: 'female', value: 'Female' }
        ],
        order: 5
      }),
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        value: 'good',
        options: [
          { key: 'solid', value: 'Solid' },
          {key: 'great', value: 'Great'},
          {key: 'good', value: 'Good'},
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3
      }),
      new TextBoxQuestion({
        key: 'firstName',
        label: 'First Name',
        value: 'Linus',
        required: true,
        type: 'text',
        order: 1
      }),
      new TextBoxQuestion({
        key: 'emailAdress',
        label: 'Email',
        type: 'email',
        value: 'ugsalons@gmail.com',
        order: 2
      }),
      new TextAreaQuestion({
        key: 'description',
        label: 'Description',
        order: 4
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
