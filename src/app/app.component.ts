import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CreatingTheFormModel';

  registrationForm = new FormGroup({
      username : new FormControl('AAYUSH'),
      password: new FormControl(''),
      repassword :new FormControl(''),
      address: new FormGroup({
        city:new FormControl(''),
        state:new FormControl(''),
        postalcode:new FormControl('')
      })
    });

    loadApiData(){
      console.log('cliick');
      this.registrationForm.patchValue({
        username:'Bruce',
        password:'apple',
        repassword:'apple'
      });
    }
}
