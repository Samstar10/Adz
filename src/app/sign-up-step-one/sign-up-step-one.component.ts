import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-sign-up-step-one',
  standalone: true,
  imports: [],
  templateUrl: './sign-up-step-one.component.html',
  styleUrl: './sign-up-step-one.component.css'
})
export class SignUpStepOneComponent implements AfterViewInit {
  @ViewChild('phoneInput')
  phoneInput!: ElementRef;

  private iti: any

  ngAfterViewInit(): void {
    this.iti = intlTelInput(this.phoneInput.nativeElement, {
      initialCountry: 'ke',
      separateDialCode: true,
      utilsScript: "node_modules/intl-tel-input/build/js/intlTelInput.js"
    })
  }

}
