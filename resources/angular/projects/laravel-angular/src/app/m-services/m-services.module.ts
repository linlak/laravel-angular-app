import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatRadioModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionService } from './question.service';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ObjectTypeComponent } from './formly/object.type';
import { ArrayTypeComponent } from './formly/array.type';
import { MultiSchemaTypeComponent } from './formly/multischema.type';
import { NullTypeComponent } from './formly/null.type';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RepeatTypeComponent } from './formly/repeat-section.type';
import { PanelWrapperComponent } from './formly/panel-wrapper.component';
import { addonsExtension } from './formly/addons.extension';
import { FormlyWrapperAddons } from './formly/addons.wrapper';
import { FormlyFieldFile } from './formly/file-type.component';
import { FileValueAccessor } from './formly/file-value-accessor';
import { AnimationWrapperComponent } from './formly/animation-wrapper.component';
import { FormlyFieldButton } from './formly/button-type.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function animationExtension(field: FormlyFieldConfig) {
    if (field.wrappers && field.wrappers.includes('animation')) {
        return;
    }

    field.wrappers = ['animation', ...(field.wrappers || [])];
}

export function minlengthValidationMessage(err, field) {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err, field) {
  return `This value should be more than ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field) {
  return `This value should be less than ${field.templateOptions.max}`;
}

export function requiredValidationMessage(err, field) {
  return `${field.templateOptions.label || 'This field'} is required `;
}

export function multipleOfValidationMessage(err, field: FormlyFieldConfig) {
    return `should be multiple of ${field.templateOptions.step}`;
}

export function exclusiveMinimumValidationMessage(
    err,
    field: FormlyFieldConfig
) {
    return `should be > ${field.templateOptions.step}`;
}

export function exclusiveMaximumValidationMessage(
    err,
    field: FormlyFieldConfig
) {
    return `should be < ${field.templateOptions.step}`;
}

export function constValidationMessage(err, field: FormlyFieldConfig) {
    return `should be equal to constant "${field.templateOptions.const}"`;
}

export function minItemsValidationMessage(err, field: FormlyFieldConfig) {
    return `should NOT have fewer than ${field.templateOptions.minItems} items`;
}

export function maxItemsValidationMessage(err, field: FormlyFieldConfig) {
    return `should NOT have more than ${field.templateOptions.maxItems} items`;
}

@NgModule({
    declarations: [
        ObjectTypeComponent,
        ArrayTypeComponent,
        MultiSchemaTypeComponent,
        NullTypeComponent,
        RepeatTypeComponent,
        PanelWrapperComponent,
        FormlyWrapperAddons,
        FileValueAccessor,
        FormlyFieldFile,
        AnimationWrapperComponent,
        FormlyFieldButton,
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        MatSelectModule,
        MatOptionModule,
        MatCheckboxModule,
        MatRadioModule,
        FormlyModule.forRoot({
            validationMessages: [
                { name: 'required', message: requiredValidationMessage },
                { name: 'minlength', message: minlengthValidationMessage },
                { name: 'maxlength', message: maxlengthValidationMessage },
                { name: 'min', message: minValidationMessage },
                { name: 'max', message: maxValidationMessage },
                { name: 'multipleOf', message: multipleOfValidationMessage },
                {
                    name: 'exclusiveMinimum',
                    message: exclusiveMinimumValidationMessage
                },
                {
                    name: 'exclusiveMaximum',
                    message: exclusiveMaximumValidationMessage
                },
                { name: 'minItems', message: minItemsValidationMessage },
                { name: 'maxItems', message: maxItemsValidationMessage },
                {
                    name: 'uniqueItems',
                    message: 'should NOT have duplicate items'
                },
                { name: 'const', message: constValidationMessage }
            ],
            types: [
                { name: 'string', extends: 'input' },
                {
                    name: 'file',
                    component: FormlyFieldFile,
                    wrappers: ['form-field']
                },
                {
                    name: 'number',
                    extends: 'input',
                    defaultOptions: {
                        templateOptions: {
                            type: 'number'
                        }
                    }
                },
                {
                    name: 'integer',
                    extends: 'input',
                    defaultOptions: {
                        templateOptions: {
                            type: 'number'
                        }
                    }
                },
                { name: 'boolean', extends: 'checkbox' },
                { name: 'enum', extends: 'select' },
                {
                    name: 'null',
                    component: NullTypeComponent,
                    wrappers: ['form-field']
                },
                { name: 'array', component: ArrayTypeComponent },
                { name: 'object', component: ObjectTypeComponent },
                { name: 'multischema', component: MultiSchemaTypeComponent },
                { name: 'repeat', component: RepeatTypeComponent },
                {
                    name: 'button',
                    component: FormlyFieldButton,
                    wrappers: ['form-field'],
                    defaultOptions: {
                        templateOptions: {
                            btnType: 'default',
                            type: 'button'
                        }
                    }
                }
            ],
            wrappers: [
                { name: 'panel', component: PanelWrapperComponent },
                { name: 'animation', component: AnimationWrapperComponent },
                { name: 'addons', component: FormlyWrapperAddons }
            ],
            extensions: [
                {
                    name: 'animation',
                    extension: { onPopulate: animationExtension }
                },
                { name: 'addons', extension: { onPopulate: addonsExtension } }
            ]
        }),
        FormlyMaterialModule
    ],
    exports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        MatSelectModule,
        MatOptionModule,
        MatCheckboxModule,
        MatRadioModule,
        FormlyModule,
        FormlyMaterialModule
    ],
    providers: [QuestionService, HttpClient]
})
export class MServicesModule {}
