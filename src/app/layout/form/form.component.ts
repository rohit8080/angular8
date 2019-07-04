import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})

export class FormComponent implements OnInit {
    filename: any;
    public angForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.angForm = this.formBuilder.group({
            filename: ''
        });
    }
}

