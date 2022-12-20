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


// 12 Minimal 4 ta musbat butun sonli massiv berilgan ikkita eng kichik musbat sonlar yig‘indisini
// qaytaruvchi funksiya yarating. Hech qanday suzuvchi yoki musbat bo'lmagan butun sonlar o'tkazilmaydi.

function sumTwoSmallestNumbers(arr) {
    return arr.sort((a, b) =>  a - b)[0] + arr[1]
}

console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));


// 13 Zavodda printer qutilarga teglarni chop etadi. Bir turdagi qutilar uchun printer oddiylik uchun harflar
// bilan nomlangan ranglardan foydalanishi kerak a to m.
// Printer tomonidan ishlatiladigan ranglar boshqaruv qatorida qayd etiladi. Misol uchun, "yaxshi" 
// boshqaruv qatori aaabbbbhaijjjmprinter uch marta a rang, to'rt marta b rang, bir marta h rang, keyin bir marta a
// rang ishlatilganligini anglatadi.
// Ba'zida muammolar paydo bo'ladi: ranglarning etishmasligi, texnik nosozlik va "yomon" boshqaruv qatori, masalan 
// aaaxbbbbyyhwawiwjjjwwm, dan bo'lmagan harflar bilan ishlab chiqariladi a to m.

function word(w) {
   return w.replace(/[a-m]/gi, '').length.toString() + '/' + w.length.toString()
    
}

console.log(word("aaaxbbbbyyhwawiwjjjwwm"));


// 14 berilgan sonni ildizini oling agar uni ildizi butun son bolsa unga 1 qo'shib 
// kvadratga oshiring aks xolda -1 qaytaradigan funksiya yarating

function findNextSquare(n) {
   return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

console.log(findNextSquare(25));


// 15 Birliklar va nollardan iborat massiv berilgan, ekvivalent ikkilik qiymatni butun songa aylantiring.
// Masalan: ning ikkilik [0, 0, 0, 1]ko'rinishi sifatida qaraladi .00011

function binaryArrayToNumber(nums) {
    return parseInt(nums.join().replace(/[,]/gi, ''), 2)
}

console.log(binaryArrayToNumber([0,0,1,0]));


// 16 Ushbu katadagi maqsadingiz bir ro'yxatni boshqasidan chiqarib tashlaydigan va natijani
// qaytaradigan farq funktsiyasini amalga oshirishdir.
// U list dan barcha qiymatlarni olib tashlashi kerak , ularning tartibini saqlab a, ro'yxatda mavjud .b
// arrayDiff([1,2],[1]) == [2]

// function arrayDiff(a, b) {
//     return a.filter(e => !b.includes(e));
// }
// console.log(arrayDiff([1,2,2], [2]));

// “Like” tizimini Facebook va boshqa sahifalardan bilsangiz kerak. Odamlar blog postlari, rasmlari yoki
// boshqa narsalarni "yoqtirishi" mumkin. Biz bunday element yonida ko'rsatilishi kerak bo'lgan matnni yaratmoqchimiz.

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
    if (names.length === 0){
        return "no one likes this"
    } else if (names.length === 1) {
        return `${names} likes this`
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if(names.length >= 4) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));


// 17 Kirish sifatida manfiy bo'lmagan butun sonni (soniya) oladigan va vaqtni odam o'qiy oladigan
//  formatda qaytaradigan funktsiyani yozing ( HH:MM:SS)
// HH= soat, 2 ta raqamga to'ldirilgan, diapazon: 00 - 99
// MM= daqiqalar, 2 ta raqamga to'ldirilgan, diapazon: 00 - 59
// SS= soniya, 2 ta raqamga to'ldirilgan, diapazon: 00 - 59
// Maksimal vaqt hech qachon 359999 ( 99:59:59) dan oshmaydi

function humanReadable(seconds) {
  let h = Math.floor(seconds / 3600);
  let m = Math.floor(seconds / 60 - h * 60);
  let s = seconds - (h * 3600 + m * 60);
  let h2 = h < 10 ? "0" + h : h;
  let m2 = m < 10 ? "0" + m : m;
  let s2 = s < 10 ? "0" + s : s;
  return `${h2}:${m2}:${s2}`;
}

// 2-usul
function humanReadable(ss) {
  let hours = parseInt(ss / 3600);
  let minutes = parseInt(ss / 60) % 60;
  let seconds = ss % 60;
  let pad = function (val) {
    return val < 10 ? "0" + val : val;
  };
  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

console.log(humanReadable(35451));


// 18 Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function sum(number) {
  let result = 0;
  let numbers = number.toString();
  for (let i = 0; i < numbers.length; i++) {
    result += parseInt(numbers[i]);
  }
  if (result > 9) {
    return sum(result);
  } else {
    return result;
  }
}
console.log(sum(4560));
