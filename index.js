// Base class
class LibraryItem {
    constructor(title, id) {
      this.title = title;
      this.id = id;
      this.isAvailable = true;
    }
  
    checkOut() {
      if (this.isAvailable) {
        this.isAvailable = false;
      } else {
        // already checked out. can't help you.
        console.log(`${this.title} is not available right now.`);
      }
    }
  
    returnItem() {
      this.isAvailable = true;
    }
  }
  
  // Book class
  class Book extends LibraryItem {
    constructor(title, id, author, genre) {
      super(title, id);
      this.author = author;
      this.genre = genre;
    }
  
    getSummary() {
      return `${this.title} by ${this.author}, Genre: ${this.genre}.`;
    }
  }
  
  // DVD class
  class DVD extends LibraryItem {
    constructor(title, id, director, duration) {
      super(title, id);
      this.director = director;
      this.duration = duration;
    }
  
    playTrailer() {
      console.log(`Playing trailer for ${this.title}. Directed by ${this.director}.`);
    }
  }
  
  // Magazine class
  class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher) {
      super(title, id);
      this.issueNumber = issueNumber;
      this.publisher = publisher;
    }
  
    printCover() {
      console.log(`${this.title} - Issue #${this.issueNumber}, Published by ${this.publisher}.`);
    }
  }
  
  // Instances — Welcome to the Kevin Cinematic Universe
  const book1 = new Book("The Life & Times of Kevin", 101, "Kevin Edwards", "Science Fiction");
  const dvd1 = new DVD("The Life & Times of Kevin: The Movie", 202, "Kevin Edwards", 142);
  const mag1 = new Magazine("Kevin Illustrated", 303, 12, "KevMedia");
  
  // Kevin's Test Kitchen
  book1.checkOut();
  console.log(book1.isAvailable); // false
  book1.returnItem();
  console.log(book1.isAvailable); // true
  console.log(book1.getSummary()); // yep, Kevin wrote that too
  
  // Test dvd
  dvd1.checkOut();
  dvd1.playTrailer(); // awards incoming
  
  // Test magazine
  mag1.checkOut();
  mag1.printCover(); // iconic
  