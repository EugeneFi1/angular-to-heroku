import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Request data...');
    setTimeout(() => {
      console.log('Preparing data...');
      const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
      };
      setTimeout(() => {
        console.log('Data received', backendData);
      }, 2000);
    }, 2000);
  }

}
