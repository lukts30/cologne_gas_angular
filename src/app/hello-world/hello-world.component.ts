import { Component } from '@angular/core';
import { HelloWorldService } from '../hello-world.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
  message: string = '';
  errorMessage: string = '';

  constructor(private helloworldService: HelloWorldService) {}

  ngOnInit(): void {
    this.helloworldService.getHelloWorldMessage().subscribe(
      (response) => {
        this.message = JSON.stringify(response, null, 4);
      },
      (error) => {
        this.errorMessage = 'Faild to load message';
        console.error('API Error:', error);
      }
    );
  }
}