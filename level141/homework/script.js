// 1) რა არის JSX?
// JSX (JavaScript XML) — არის სინტაქსი, რომელიც საშუალებას გაძლევს HTML-ის მსგავსი კოდი დაწერო JavaScript-ში.
// გამოიყენება React-ში კომპონენტების შესაქმნელად.



// 2) განსხვავება JS ფაილსა და JSX ფაილს შორის,რატომ ვიყენებთ JSX-ს?
// JS ფაილი (example.js):
// შეიცავს მხოლოდ JavaScript-ს.
// HTML სტრუქტურების ჩაწერა არ შეგიძლია.
// JSX ფაილი (example.jsx):
// შეგიძლია JavaScript + HTML-ის მსგავსი markup ერთად გამოიყენო.
// React კომპონენტების ძირითადი ფორმაა.
// უფრო მკაფიო, ლამაზი და მარტივად გასაგები კოდია.
// კოდი გამოიყურება როგორც HTML → მარტივად იკითხება.
// სწრაფად შეგიძლია UI კომპონენტების შექმნა.
// ნაკლები React.createElement ხელით.


// 3) რა არის კომპონენტი?
// კომპონენტი არის ფუნქცია ან კლასი, რომელიც აბრუნებს JSX-ს.
// ეს არის UI-ს პატარა ნაწილი, მაგალითად: ღილაკი, Header, Footer, Card და ა.შ.



// 4)
function Greeting() {
  return <h1>გამარჯობა!</h1>;
}


// 5)
function Header() {
  return <header><h1>ეს არის ჰედერი</h1></header>;
}

function Footer() {
  return <footer><p>ეს არის ფუტერი</p></footer>;
}



// 6)
function Product({ name, price, image }) {
  return (
    <div className="product">
      <img src={image} alt={name} width="150" />
      <h2>{name}</h2>
      <p>ფასი: {price} ₾</p>
    </div>
  );
}


// 7) რა არის Hook?
// Hook — ეს არის ფუნქცია React-ში, რომელიც გაძლევს საშუალებას გამოიყენო state და lifecycle ლოგიკა ფუნქციურ კომპონენტებში.



// 8)
// useState	ქმნის state-ს
// useEffect	რეაგირებს ცვლილებებზე, აკეთებს side-effects-ს
// useRef	ქმნის reference ობიექტს DOM-ისთვის ან ცვლადისთვის
// useContext	კონტექსტიდან მონაცემების წაკითხვა
// useReducer	state ლოგიკის რთულად მართვა reducer-ების საშუალებით
// useMemo	მძიმე გამოთვლების ქეშირება
// useCallback	ფუნქციების ქეშირება
// useLayoutEffect	UI რენდერის წინ რეაგირება
// useTransition	UI-ს არადაბლოკირებადი ასინქრონული update
// useDeferredValue	მნიშვნელობის "გადადება" მძიმე UI update-ებისთვის
// useId	უნიკალური id-ების გენერაცია



// 9)
function myFigletText(text, callback) {
  const big = `
  ███╗   ██╗██╗██╗  ██╗ ██████╗ 
  ████╗  ██║██║██║ ██╔╝██╔════╝ 
  ██╔██╗ ██║██║█████╔╝ ██║  ███╗
  ██║╚██╗██║██║██╔═██╗ ██║   ██║
  ██║ ╚████║██║██║  ██╗╚██████╔╝
  ╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝ ╚═════╝ 
`;
  const result = big.replace("HELLO", text.toUpperCase());
  callback(null, result);
}
myFigletText("Hello World", (err, data) => {
  console.log(data);
});
