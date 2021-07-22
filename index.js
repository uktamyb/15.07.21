

// array
// students.push("Uktam") - array oxiriga elemnt qushadi
// students.unshift("Sardor") - arrayning boshiga element qushadi
// students.pop - oxirgi elemntni olib tashlaydi
// students.shift - boshidan elementni olib tashlaydi
// students.slice - elementlarni kesib olib tashlaydi - students.slice(2, 5)
// students.splice - kursatilgan element indexidan boshlab ushancha element kesib oladi. - students.splice(2, 5)
// students[1] = "Javohir" - birinchi indexdagi elementni urniga Javohir yozib quyadi.
// students.concat() - arraylarni bir-birigia qushadi.
// map(value, index, array)
// console.log(str.split("")); // stringni arrayga ajratadi.
// console.log(str.join("")); // arrayni stringa aylantiradi
// console.log(students.sort()); - alifbo tartibida taxlaydi
// console.log(number.sort((a, b)=> a - b)); // raqamlarni sort qilish uchun sihlatiladi.
// console.log(number.sort((a, b)=> b - a)); // raqamlarni sort qilish uchun sihlatiladi. teskari
// console.log(students.sort((a, b)=> a.localeCompare(b))) - harflarning katta-kichikligiga qaramasdan sort qiladi.
// console.log(number.filter(value) => value < 10);  10 sonidan kichkinalarini filtrlab chiqarib beradi
// students.map((value (a), index (b)) => { console.log(a, b);}); - bu ruyxatning uzini va index raqamini chiqarib beradi.

// 17.07.21 kuni dars

var students = ["Uktam", "anvar", "Ilxom", "Sarvar", "Barkamol", "Sevara", "Vohid", "Jumanazar"]
var number = [21, 5, 32, 15, 10, 41, 8, 3, 2, 74, 54];
// var arr = [4, 5, 6, 7];
// var num = [1, 2, 3, ...arr, 8, 9, 10];
// console.log(num);

// for(i in number){
//   console.log(i);
// } - bu arraydagi index larni chiqaradi

// for(i of number){
//   console.log(i);
// } - bu arraydagi value larni chiqaradi

// var sum = 0; // number.forEach((value) => { //   sum += value; // }); // console.log(sum); - bu raqamlar yig'indisini chiqaradigan dastur

// Object
var obj = {
  name: "Uktam",
  surname: "Hudoyarov",
  age: 38,
};
console.log(obj.name);

