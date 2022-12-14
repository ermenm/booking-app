import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ba-validation-feedback',
  templateUrl: './ba-validation-feedback.component.html',
  styleUrls: ['./ba-validation-feedback.component.scss'],
})
export class BaValidationFeedbackComponent implements OnInit {
  @Input() feedback?: any;
  constructor() {}

  ngOnInit(): void {}

  get errors() {
    const { required } = this.feedback?.errors || {};
    const { minlength } = this.feedback?.errors || {};
    const { maxlength } = this.feedback?.errors || {};
    const { pattern } = this.feedback?.errors || {};
    let errorMsg = [];

    if (required) {
      errorMsg.push('This field is required');
    }
    if (minlength) {
      errorMsg.push(
        'The minimum amount of characters is ' + minlength.requiredLength
      );
    }
    if (maxlength) {
      errorMsg.push(
        'The maximum amount of characters is ' + maxlength.requiredLength
      );
    }
    if (pattern?.requiredPattern === '^[a-zA-Z2-9]*$') {
      errorMsg.push('Only numbers 2-9 are allowed');
    }

    if (pattern?.requiredPattern === '^[a-zA-Z ]*$') {
      errorMsg.push('Only alphabets are allowed');
    }
    return errorMsg;
  }

  get status() {
    return this.feedback.status;
  }
}
