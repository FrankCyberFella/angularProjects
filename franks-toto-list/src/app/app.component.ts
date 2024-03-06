import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms'
  
@Component({ 
    selector: 'app-root', 
    standalone: true,
    templateUrl: './app.component.html', 
    styleUrls: ['./app.component.css'],
    imports: [FormsModule, CommonModule]

}) 
export class AppComponent { 
  
    /* An empty array that is responsible 
       to add a division */
    public items:any = []; 
  
    /* A two-way binding performed which 
       pushes text on division */
    public newTask; 
  
  
    /* When input is empty, it will 
       not create a new division */
    public addToList() { 
        if (this.newTask == '') { 
        } 
        else { 
            this.items.push(this.newTask); 
            this.newTask = ''; 
        } 
    } 
  
    /* This function takes to input the 
       task, that has to be deleted*/
    public deleteTask(index) { 
        this.items.splice(index, 1); 
    } 
} 
