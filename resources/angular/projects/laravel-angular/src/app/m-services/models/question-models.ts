import { QuestionBase } from './question-base';

export class QuestionGroup {
    key: string;
    questions: QuestionBase<any>[];
    constructor(key?: string, questions?: QuestionBase<any>[]) {
        this.key = key || '';
        this.questions = questions || [];
    }
}

export class TextBoxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;
    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
export class TextAreaQuestion extends QuestionBase<string> {
    controlType = 'textarea';
    constructor(options: {} = {}) {
        super(options);
    }
}
export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    options: {key: string, value: string}[] = [];
    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}

export class RadiogroupQuestion extends QuestionBase<string> {
    controlType = 'radiogroup';
    type: string;
    options: { key: string, value: string }[] = [];
    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
        this.type = options['type'] || 'radio';
        this.groupClass = 'form-check';
    }
}
