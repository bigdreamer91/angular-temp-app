import { Component } from '@angular/core';
import { UserComponent } from "./user.component";
import { ChildComponent } from './child.component';
import { CommentsComponent } from './comments.component';
import { RouterOutlet } from '@angular/router';

/* @Component({
  selector: 'app-user',
  template: `
     Username: {{username}}
  `,
  standalone: true,
})
export class UserComponent {
  username = 'youngTech';
} */

@Component({
  selector: 'app-root',
  template: `<!-- <section><app-user /></section>  -->
  @if (isServerRunning) {
    <span>yes, the server is running</span>
  }
  @else {
    <span>No, the server is not running</span>
  }
  @if (isLoggedIn) {
    <p>Welcome back, Friend!</p>
  }
  @for (os of operatingSystems; track os.id) {
    {{os.name}}
  }
  @for (user of users; track user.id) {
    <p>{{user.name}}</p>
  }
  <div [contentEditable]="isEditable"></div>
  <section (mouseover)="onMouseOver()">
    There's a secret message for you, hover to reveal: 
    {{message}}
  </section>
  <app-user name="Simran" />
  <app-child (addItemEvent)="addItem($event)" />
  <p>🐢 all the way down {{items.length}}</p>

  <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted.
        </p>
      </article>

<!--       @defer (on viewport) {
      <comments />
      } @placeholder {
      <p>Future comments</p>
      } @loading (minimum 2s) {
      <p>Loading comments...</p>
      } -->
    </div>

    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
    <router-outlet />
  `,
  //template: `<div>Hello {{value}}</div>`,
  /* styles: `
      :host {
        color: blue;
      }
  `, */
  standalone: true,
  //imports: [UserComponent],
  imports: [UserComponent, ChildComponent, CommentsComponent, RouterOutlet],
})
export class AppComponent {
  //value = 'World';
  isEditable = true;
  isLoggedIn = true;
  isServerRunning = true;
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];

  message = '';
  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  items = new Array();
  addItem(item: string) {
    this.items.push(item);
  }
}
