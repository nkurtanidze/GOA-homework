// davaleba 1
class Car {
    constructor(brand, model, year, engineVolume) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.engineVolume = engineVolume;
    }
  
    getDescription() {
      return `${this.brand} ${this.model}, ${this.year}, ${this.engineVolume}L`;
    }
  }




// davaleba 2
class Book {
    constructor(title, author, pages, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
    }

    pagesPerDay(days = 7) {
        return this.pages / days;
    }

    getBookInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages, published in ${this.year}.`;
    }
}




// davaleba 3
class Athlete {
    constructor(name, age, sport, trainingHours) {
      this.name = name;
      this.age = age;
      this.sport = sport;
      this.trainingHours = trainingHours;
    }
  
    // მეთოდი, რომელიც ითვლის კვირის საჭირო ვარჯიშის ხანგრძლივობას 20%-იანი ზრდისთვის
    calculateWeeklyTraining() {
      const dailyIncrease = this.trainingHours * 1.2; // 20%-იანი ზრდა დღიური ვარჯიშის ხანგრძლივობაზე
      return dailyIncrease * 7; // კვირაში 7 დღე
    }
  }

  const athlete = new Athlete("გიორგი", 25, "ფეხბურთი", 3);
  console.log(`${athlete.name}-ს უნდა ივარჯიშოს კვირაში ${athlete.calculateWeeklyTraining()} საათი შედეგების გასაუმჯობესებლად!`);
  