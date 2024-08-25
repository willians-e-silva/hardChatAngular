import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule, 
    MessageComponent
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})

export class ChatComponent {
  name="Willians"
  message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias adipisci nesciunt magnam sint libero provident id fuga, hic quasi et suscipit odio. Beatae ex, provident excepturi deleniti autem expedita iure."
  time="09:00"
  type="send"
  messages = [
    {
      name: "Willians",
      text: "Hey, how are you doing today?",
      time: "09:00",
      type: "send"
    },
    {
      name: "Alice",
      text: "I'm good, thanks! How about you?",
      time: "09:01",
      type: "received"
    },
    {
      name: "Willians",
      text: "I'm ",
      time: "09:02",
      type: "send"
    },
    {
      name: "Alice",
      text: "That sounds interesting. What kind of projects?",
      time: "09:03",
      type: "received"
    },
    {
      name: "Willians",
      text: "I'm working on a new chat application.",
      time: "09:04",
      type: "send"
    },
    {
      name: "Alice",
      text: "Wow, that's cool! Let me know if you need any help.",
      time: "09:05",
      type: "received"
    },
    {
      name: "Willians",
      text: "Hey, how are you doing today?",
      time: "09:00",
      type: "send"
    },
    {
      name: "Alice",
      text: "I'm good, thanks! How about you?",
      time: "09:01",
      type: "received"
    },
    {
      name: "Willians",
      text: "I'm ",
      time: "09:02",
      type: "send"
    },
    {
      name: "Alice",
      text: "That sounds interesting. What kind of projects?",
      time: "09:03",
      type: "received"
    },
    {
      name: "Willians",
      text: "I'm working on a new chat application.",
      time: "09:04",
      type: "send"
    },
    {
      name: "Alice",
      text: "Wow, that's cool! Let me know if you need any help.",
      time: "09:05",
      type: "received"
    },
    {
      name: "Willians",
      text: "Hey, how are you doing today?",
      time: "09:00",
      type: "send"
    },
    {
      name: "Alice",
      text: "I'm good, thanks! How about you?",
      time: "09:01",
      type: "received"
    },
    {
      name: "Willians",
      text: "I'm ",
      time: "09:02",
      type: "send"
    },
    {
      name: "Alice",
      text: "That sounds interesting. What kind of projects?",
      time: "09:03",
      type: "received"
    },
    {
      name: "Willians",
      text: "I'm working on a new chat application.",
      time: "09:04",
      type: "send"
    },
    {
      name: "Alice",
      text: "Wow, that's cool! Let me know if you need any help.",
      time: "09:05",
      type: "received"
    }
  ]
}
