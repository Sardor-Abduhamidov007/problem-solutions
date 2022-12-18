// 1
// Kirish sifatida butun sonni oladigan va shu sonning ikkilik ko‘rinishida bittaga teng birlar sonini qaytaradigan 
// funksiya yozing. Kirish salbiy emasligiga kafolat bera olasiz.
// Misol: 1234 ning ikkilik ko'rinishi 10011010010, shuning uchun bu holda funktsiya 5 ni qaytarishi kerak
function number(num) {
  if (num === 0) {
    return 0;
  } else {
    let n = Math.abs(num);
    let m = n.toString(2);
    let s = m.match(/1/gi);
    let d = s.map((x) => Number(x));
    let q = d.reduce((a, b) => a + b);
    return q;
  }
}
console.log(number(7));


// 2
// Siz Karteziya shahrida yashaysiz, u erda barcha yo'llar mukammal tarmoqqa joylashtirilgan.
// Uchrashuvga o'n daqiqa erta keldingiz, shuning uchun siz qisqa yurish uchun imkoniyatdan foydalanishga qaror qildingiz.
// Shahar o'z fuqarolariga telefonlarida Walk Generating ilovasini taqdim etadi -- har safar tugmani bosganingizda,
// u sizga yurish yo'nalishlarini bildiruvchi bir harfli qatorlarni yuboradi (masalan, ['n', 's', 'w', 'e']).
// Siz har doim har bir harf (yo‘nalish) uchun faqat bitta blokni bosib o‘tasiz va bilasizki, bitta shahar blokini
// bosib o‘tish uchun sizga bir daqiqa kerak bo‘ladi, shuning uchun agar ilova sizga bergan yurish sizga roppa-rosa
// o‘n daqiqa vaqt oladi (siz erta yoki kech bo'lishni xohlamang!) va, albatta, sizni boshlang'ich nuqtangizga qaytaradi.
// Aks holda false qaytaring .
function isValidWalk(walk) {
  let l = walk.length;
  let w = walk.join();
  let q =
    l === 10
      ? w.search("n, s")
        ? w.match(/n/g).length - w.match(/s/g).length
        : w.match(/w/g).length - w.match(/e/g).length
      : false;
  let h = q === 0 ? true : false;
  return h;
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "w", "e"]));

// 3 sizga ma'lum birson berilyabdi siz uni ildizi butun sonda 
// chiqsa true aks hodlda falsa qaytarishingiz kerak

let isSquare = function(n){
    return Number.isInteger(Math.sqrt(n))
}
console.log(isSquare(24));

// 4 Kichik shaharchada aholi p0 = 1000yil boshida. Aholi soni 
// yildan-yilga muntazam oshib bormoqda, 2 percentbundan tashqari ,
//  50har yili shaharchaga yangi aholi kelib qolmoqda. Shahar o'z
//   aholisi sonidan ko'p yoki teng bo'lishi uchun necha yil kerak p = 1200?

function nbYear(p0, percent, aug, p) {
    for (let years = 0; p0 < p; years++) 
     p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    return years
  }
console.log(nbYear(1500, 5, 100, 5000));

// 5 Trolllar sizning sharhlar bo'limingizga hujum qilmoqda!
// Ushbu vaziyatni hal qilishning keng tarqalgan usuli - trollarning izohlaridan barcha 
// unli tovushlarni olib tashlash, tahdidni zararsizlantirish.
// Sizning vazifangiz satrni oladigan funktsiyani yozish va barcha unlilar olib tashlangan yangi qatorni qaytarishdir.
// Masalan, "Bu veb-sayt yutqazganlar uchun LOL!" "Ths wbst s fr lsrs LL!" ga aylanadi.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
console.log(disemvowel("Bu veb-sayt yutqazganlar uchun LOL!"));

// 6 Agar berilayotgan qiymatlar 
// "A" , "B" => 1
// "a" , "B" => 0
// "a" , "b" => 1
// "A" , "b" => 1
// "1" , "b" => -1
// "a" , "?" => -1
// qaytaradigan funksiya yarating

function doTest(a, b) {
  if (a.match(/[A-Z]/) && b.match(/[A-Z]/)) {
    return 1
  } else if (a.match(/[a-z]/) && b.match(/[a-z]/)) {
    return 1
  } else if (a.match(/[A-Z]/) && b.match(/[a-z]/)) {
    return 0
  } else if (a.match(/[a-z]/) && b.match(/[A-Z]/)) {
    return 0
  } else {
    return -1
  }
}
console.log(doTest('C', '0'));

// 7 Massivdagi eng katta sonni qaytaring

function findUniq(arr) {
  return arr.sort((a, b) => (a-b)).pop()
}
console.log(findUniq([ 3, 10, 3, 3, 3 ]));

// 8 Ushbu kichik topshiriqda sizga bo'sh joy ajratilgan raqamlar qatori berilgan va
// eng yuqori va eng past raqamni qaytarishingiz kerak.

function highAndLow(nums){
  let num = nums.split(',').join().split(' ').map(x => Number(x)).sort((a, b) => (a - b)).reverse();
  let f = num[0];
  let l = num[num.length - 1];
  return `${f} ${l}`
}

// 2-usul
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// 9 berilgan so'zlarni teskari qilib qaytaradigan funksiya yarating
function reverseWords(words) {
    let s = words.split(" ")
    let f = s.map((item, index) => {
       let d = item.split('').reverse().join('')
       return d
    })
    return f.join(' ')
}

// 2-usul
function reverseWords(str) {
    str.split(' ').map(str => str.split('').reverse().join('')).join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));


// 10 Sizning vazifangiz har qanday manfiy bo'lmagan butun sonni argument sifatida qabul
//  qiladigan va uni raqamlari bilan kamayish tartibida qaytara oladigan funktsiyani yaratishdir

function descendingOrder(num) {
    return Number(num.toString().split('').map(x => Number(x)).sort((a, b)=> (a-b)).reverse().join(''))
}

console.log(descendingOrder(15));


// 11 Ushbu katada sizdan raqamning har bir raqamini kvadratga
// kiritish va ularni birlashtirish so'raladi.
// Masalan, funksiya orqali 9119 ni ishlatsak, 811181 chiqadi,
// chunki 9 2 81 va 1 2 1 ga teng.

function squareDigits(nums) {
    return Number(String(nums).split('').map(x => Math.pow(x, 2)).join(''))
}

console.log(squareDigits(3212));