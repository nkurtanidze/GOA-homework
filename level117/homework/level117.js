// davaleba 1
// ტელეფონის ობიექტები
const phone1 = {
  brand: "Apple",
  model: "iPhone 14 Pro",
  storage: "256GB",
  color: "Space Black",
  price: 1299,
  is5G: true
};

const phone2 = {
  brand: "Samsung",
  model: "Galaxy S24 Ultra",
  storage: "512GB",
  color: "Titanium Gray",
  price: 1399,
  is5G: true
};

const phone3 = {
  brand: "Xiaomi",
  model: "Redmi Note 13 Pro",
  storage: "128GB",
  color: "Midnight Black",
  price: 349,
  is5G: true
};

const phone4 = {
  brand: "Google",
  model: "Pixel 8",
  storage: "128GB",
  color: "Obsidian",
  price: 699,
  is5G: true
};
const phones = [phone1, phone2, phone3, phone4];
phones.forEach(phone => {
  console.log(`მოდელი: ${phone.brand} ${phone.model}`);
  console.log(`მეხსიერება: ${phone.storage}`);
  console.log(`ფერი: ${phone.color}`);
  console.log(`ფასი: $${phone.price}`);
  console.log(`5G მხარდაჭერა: ${phone.is5G ? "კი" : "არა"}`);
  console.log('-------------------------');
});



// davaleba 2
class Phone {
  constructor(brand, model, storage, color, price) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
    this.color = color;
    this.price = price;
  }

  getInfo() {
    return `${this.brand} ${this.model} (${this.storage}, ${this.color}) - $${this.price}`;
  }
}
const phoneA = new Phone("Apple", "iPhone 15 Pro", "256GB", "Space Black", 1199);
const phoneB = new Phone("Samsung", "Galaxy S24 Ultra", "512GB", "Titanium Gray", 1399);
const phoneC = new Phone("Xiaomi", "13T Pro", "256GB", "Alpine Blue", 799);

console.log(phoneA.getInfo()); // Apple iPhone 15 Pro (256GB, Space Black) - $1199
console.log(phoneB.getInfo()); // Samsung Galaxy S24 Ultra (512GB, Titanium Gray) - $1399



// davaleba 3
class Phone {
  constructor(brand, model, storage, color, price) {
    this.brand = brand;
    this.model = model;
    this.storage = storage;
    this.color = color;
    this.price = price;
  }

  getInfo() {
    return `${this.brand} ${this.model} (${this.storage}, ${this.color}) - $${this.price}`;
  }
}

const phone6 = new Phone("Apple", "iPhone 15 Pro", "256GB", "Space Black", 1199);
const phone7 = new Phone("Samsung", "Galaxy S24 Ultra", "512GB", "Titanium Gray", 1399);
const phone8 = new Phone("Xiaomi", "13T Pro", "256GB", "Alpine Blue", 799);
const phone9 = new Phone("Google", "Pixel 8 Pro", "128GB", "Obsidian", 999);
const phone10 = new Phone("OnePlus", "12R", "256GB", "Cool Blue", 649);

console.log(phone1.getInfo());
console.log(phone2.getInfo());
console.log(phone3.getInfo());
console.log(phone4.getInfo());
console.log(phone5.getInfo());