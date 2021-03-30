import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName = "";
  contNumber = ""
  contacts = [];
  constructor() {}

  saveC() {
    let contact = {
      name: this.contName,
      number: this.contNumber
    }
    this.contacts.push(contact);
    this.clearField();
    console.log(this.contacts);
  }
  clearField(){
    this.contName = "";
    this.contNumber = "";
  }
  delete(i){
    let confirmation = confirm("Are you sure you want to delete this contact?");

    if(confirmation == true){
        this.contacts.splice(i, 1);
        console.log("Deleted successfully");
      }
    else{
      console.log("User cancelled");
    }
  }
}
