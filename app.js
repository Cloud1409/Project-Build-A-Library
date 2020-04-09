class Media{
  constructor(title){
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  get title(){
    return this._title;
  }
  get ratings(){
    return this._ratings;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  set isCheckedOut(value){
    this._isCheckedOut = value;
  }
  toggleCheckedOutStatus(){
    this.isCheckedOut = !this.isCheckedOut;
  }
  getAverageRating(){
    let ratingSum = this.ratings.reduce((currentSum,rating) => currentSum + rating);
    return ratingSum/this.ratings.length;
  }
  addRating(value){
    this.ratings.push(value)
  }
}
class Book extends Media{
  constructor(author,title,page){
    super(title);
    this._author = author;
    this._page = page;
  }
  get author(){
    return this._author;
  }
  get page(){
    return this._page;
  }
}
class Movie extends Media{
  constructor(director,title,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get reuTime(){
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly',544);
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
const speed = new Movie('Jan de Bont','Speed',116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
