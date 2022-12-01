// // 1 - MASALA

// // O1 dan 12gacha son kiritilganda oyning nomi ni chiqarsin

// let n = 5;

// switch (n) {
//   case 1:
//     console.log("Yanvar");
//   break;
//   case 2:
//     console.log("Fevral");
//   break;
//   case 3:
//     console.log("Mart");
//   break;
//   case 4:
//     console.log("Aprel");
//   break;
//   case 5:
//     console.log("May");
//   break;
//   case 6:
//     console.log("Iyun");
//   break;
//   case 7:
//     console.log("Iyul");
//   break;
//   case 8:
//     console.log("Avgust");
//   break;
//   case 9:
//     console.log("Sentyabr");
//   break;
//   case 10:
//     console.log("Oktyabr");
//   break;
//   case 11:
//     console.log("Noyabr");
//   break;
//   case 12:
//     console.log("Dekabr");
//   break;
//   default:
//     console.log("Other");
// }

//// 2 - MASALA

//// n soni 120dan katta yoki 120ga teng bolsa « Grandga kirdingiz » deb chiqarsin
//// n soni 80dan katta yoki 120dan kichik bolsa « kontrakt asosida o'qishga kirdingiz » deb chiqarsin
//// n soni 80dan kichik bo'lsa « Talabalikka tavsiya etilmadingiz » deb chqarsin

//  let n = 79

//  if (n >= 120) {
//     console.log("Sizni tabriklaymiz! Siz Grand asosida Universtitetga(Institutga) qabul qilindingiz!");
//  } else if (80 <= n && n < 120) {
//     console.log("Sizni tabriklaymiz! Siz Kontrakt asosida Universtitetga(Institutga) qabul qilindingiz!");
//  } else {
//     console.log("O'qimagan ekansiz");
//  }

//// 3 - MASALA

//// n soni  3 ga bo'linsa « Bu son 3ga bo'linadi » deb chiqarsin. Agar n soni 5 ga bo'linsa
////  « Bu son 5ga bo'linadi» Agarda 3 ga ham 5 ga ham bo'linsa « Ushbu son 3ga ham 5 ga ham bo'linadi »
////  deb chiqarsin!

// let n = 30

// if (n % 5 === 0 && n % 3 === 0) {
//   console.log('Sizning raqamingiz 3 ga ham 5 ga ham bo`linadi');
// } else if (n % 5 === 0) {
//   console.log('Sizning raqamingiz 5 ga bo`linadi');
// } else if (n % 3 === 0) {
//   console.log('Sizning raqamingiz 3 ga bo`linadi');
// } else {
//   console.log("Sizning raqamingiz 3 ga ham 5 ga ham bo'linmaydi");
// }

//// 2 USUL

// if (n % 5 == 0 || n % 3 == 0) {
//     if ( n % 3 === 0 ) {
//         console.log('Sizning raqamingiz 3 ga bo`linadi');
//      }
//      if ( n % 5 === 0 ) {
//         console.log('Sizning raqamingiz 5 ga bo`linadi');
//      }
//      if ( n % (5 * 3) === 0 ) {
//         console.clear()
//         console.log('Sizning raqamingiz 3 ga ham 5 ga ham bo`linadi');
//      }
// } else {
//     console.log("Sizning raqamingiz 3 ga ham 5 ga ham bo'linmaydi");
// }

//// 3 USUL

// switch (n % 5 === 0 || n % 3 === 0) {
//     case n % 5 == !0 && n % 3 == !0:
//       console.log("Sizning raqamingiz 3 ga ham 5 ga ham bo`linmaydi");
//       break;
//     case n % 15 === 0:
//       console.log("Sizning raqamingiz 3 ga ham 5 ga ham bo`linadi");
//       break;
//     case n % 3 === 0:
//       console.log("Sizning raqamingiz 3 ga bo`linadi");
//       break;
//     case n % 5 === 0:
//       console.log("Sizning raqamingiz 5 ga bo`linadi");
//   }

// // 4 - MASALA

// // 1dan 100gacha bolgan juft sonlarni chiqaring

// let num = 1;
// while (num <= 50) {
//     console.log(num * 2 - 1);
//   num++;
// }

// for (let i = 1; i <= 50; i++) {
//     console.log(i * 2 - 1);
// }

//// 5 - MASALA

//// 1dan 100gacha bolgan toq sonlarni chiqaring

// for (let i = 1; i <= 50; i++) {
//     console.log(i * 2);
// }

// let num = 1;
// while (num <= 50) {
//     console.log(num * 2);
//   num++;
// }

//// 6 - MASALA

//// 1dan 100gacha bolgan sonlar orasida 5ga bo'linadiganlarini chiqaring

// for (let i = 1; i <= 20; i++) {
//     console.log(i * 5);
// }

// let num = 1;
// while (num <= 20) {
//     console.log(num * 5);
//   num++;
// }

// let i = 1;
// do {
//   console.log(i * 5);
//   i++;
// }
// while (i <= 20)

