import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }

  // Thêm messages
  add(message: string) {
  	this.messages.push(message);
  }
  // Xóa tất cả tin nhắn
  clear() {
  	this.messages = [];
  }
}
