import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionManagementService {

  //i need a dynamic key so that each guest customer can use somehow
  private sessionKey = "ReStoreIt_CustomerKey";
  //as soon as the guest "session" starts, a global cart needs to be initialized for the customer

  constructor() { }

  //configure Guest User Session
  setSession(sessionData: any): void{
    sessionStorage.setItem(this.sessionKey, JSON.stringify(sessionData))
  }

  getSession(): any | null {
    const session = sessionStorage.getItem(this.sessionKey);
    return session ? JSON.parse(session) : null;
  }

  endSession(): void {
    sessionStorage.removeItem(this.sessionKey);
  }

  isAuthenticated(): boolean {
    return !!this.getSession();
  }

  handleSessionExpiry(): void {
    // Example: Implement session expiration logic here
  }

}
