// 1  U massivdagi har bir elementga 1 qo'shadigan funksiya yarating
function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] === arr[i]++;
  }
  return arr;
}

// 2-usul 
function incrementItems(arr) {
	for (let i = 0; i < arr.length; i++)
		arr[i]+=1
	return arr
}
console.log(incrementItems([0, 1, 8, 3]));

// 2 a === 1 && b === 2
const arr = [1, 2, 3, 4, 5, 6];
let a = arr[0];
let b = arr[1];
console.log(a);
console.log(b);

// 3 Massivni qabul qiladigan va massivdagi oxirgi elementni qaytaradigan funksiya yarating.
function getLastItem(arr) {
  arr.reverse();
  return arr[0];
}

// 2 -usul
function getLastItem(arr) {
  return arr.pop()
}

// 3-usul 
function getLastItem(arr) {
	return arr[arr.length - 1];
}
console.log(getLastItem(["cat", "dog", "duck"]));

// 4 Raqamlar yoki harflar massivini oladigan va satrni stringda qaytaruvchi funksiya yarating.
function arrayToString(arr) {
  return arr.join("");
}
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// 5 str o'zgaruvchisidagi qiymat arrayning qaysi indexida joylashganini qaytaradigan funksiya yarating
function findIndex(arr, str) {
  return arr.indexOf(str);
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));

// 6 Indeks va massiv berilgan, berilgan indeks bilan massiv qiymatini qaytaring.
function valueAt(arr, i) {
	return arr[Math.floor(i)]
}
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));

// 7 Ikkita butun massivni birlashtiruvchi funksiyasini yarating.
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(concat([1, 3, 5], [2, 6, 8]));

// 8 massivda "string"da sonlar berilgan stingdagi sonlarni numberga o'tkizib yangi massiv yarating
function toNumberArray(arr) {
	let map = arr.map(x => Number(x))
	return map
}
console.log(toNumberArray(["9.4", "4.2"]));

// 9 Arraydagi sonlarni eng kattasini qaytaring
function minMax(arr) {
  let arr0 = arr.sort((a, b)=> (a-b))
   let min = arr0.slice(0, 1)
   let max = arr0.pop()
   return min.concat(max)
}
console.log(minMax([45, 2, 3, 444, 5]));

// 10 arrayda son stringda va harflarda kelib qolgan o'sha sonni haqiqiy songa aylantirib harflarda yozilgan son o'rniga qo'ying
function stringToNum(arr) {
  let ind = arr.indexOf("hunded")
  arr.splice(4, 1, 100)
  return arr
}
console.log(stringToNum([47, 34, 9, 80, "hundred", 54, 691, 95]));

// 11 Rezistorlar ketma-ket ulangan ularni yig'indisini toping va agar 1 bo'lsa "ohm" 1 dan yuzori bo'lsa "ohms" qo'shilsin
function seriesResistance(arr) {
	let sum = arr.reduce((a, b) => a + b, 0);
	return (sum > 1) ? sum + " ohms" : sum + " ohm";
}

// 12 Arrayda kelayotgan sonlarni kub darajaga oshirib yig'indisini qaytaradigan funksiya yarating
function sumOfCubes(nums) {
    let m = nums.map(x => Math.pow(x, 3))
    let n = m.reduce((a, b) => a + b, 0)
    return n
}

// 2-usul
function sumOfCubes(nums) {
  return nums.reduce((a, b) => a + Math.pow(b, 3), 0)
}
console.log(sumOfCubes([3, 4, 5]));

// 13 Raqam berilgan bo'lsa, sonning ikki yarmini o'z ichiga olgan massivni qaytaring. Agar raqam toq bo'lsa, eng o'ngdagi raqamni balandroq qilib qo'ying .
function numberSplit(n) {
	return [Math.floor(n/2), Math.ceil(n/2)]
}
console.log(numberSplit(11));

// 14 Massivda number stringlar aralash kelgan xullas numberlarni qaytaradigan funksiya yarating
function filterArray(arr) {
	return arr.filter(n => typeof n === 'number');
}
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

// 15 Uzunlik bo'yicha o'sish tartibida tartiblangan qatorlarni qaytaradigan funksiya yarating .
function sortByLength(arr) {
	return arr.sort((a, b) => (a.length - b.length))
}
console.log(sortByLength(["apple", "pie", "shortcake"]));

// 16 Butun sonlar massivini oling (ijobiy yoki manfiy yoki ikkalasi) va har bir elementning mutlaq qiymatining yig'indisini qaytaring.
function getAbsSum(arr) {
	return arr.map(x => Math.abs(x)).reduce((a, b) => a + b, 0)
}
console.log(getAbsSum([-3, -4, -10, -2, -3]));


































