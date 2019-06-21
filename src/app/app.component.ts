import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CreatingTheFormModel';
  constructor(private fb:FormBuilder){

  }
  registrationForm = this.fb.group({
    username:['aayushkc2158'],
    password:[''],
    repassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalcode:['']
    })
    
  })
    loadApiData(){
      console.log('cliick');
      this.registrationForm.patchValue({
        username:'Bruce',
        password:'apple',
        repassword:'apple'
      });
    }
}
