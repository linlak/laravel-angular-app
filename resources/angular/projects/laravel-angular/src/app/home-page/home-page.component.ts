import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../m-services/question.service';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
    questions: any[];
    form: FormGroup;
    model: any;
    options: FormlyFormOptions;
    fields: FormlyFieldConfig[];
    type: string;
    examples = [
        'simple',
        'nested',
        'arrays',
        'numbers',
        'references',
        'schema_dependencies',
        'null_field',
        'nullable',
        'allOf',
        'anyOf',
        'oneOf',
        'select_alternatives'
    ];
    constructor(
        private formlyJsonschema: FormlyJsonschema,
        private http: HttpClient,
        private qs: QuestionService
    ) {
        // this.questions = qs.getQuestions();
    }

    ngOnInit() {
        this.loadExample(this.examples[5]);
    }
    loadExample(type: string) {
        this.http
            .get<any>(`assets/json-schema/${type}.json`)
            .pipe(
                tap(({ schema, model }) => {
                    this.type = type;
                    this.form = new FormGroup({});
                    this.options = {};
                    this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
                    this.model = model;
                })
            )
            .subscribe();
    }

    submit() {
        alert(JSON.stringify(this.model));
    }
}
