//Declare Customer Class

class Customer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  announce() {
    return 'Hello! My name is ' + this.name;
  }
}

firstCustomer = new Customer('Zain');
newMessage: string = firstCustomer.announce();

webHeading = document.querySelector('h1');
webHeading!.textContent = newMessage;
