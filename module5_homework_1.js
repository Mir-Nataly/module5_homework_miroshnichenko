/* Задание 1 Модуль 5.3 */


let a = prompt ("Ввести число");
a = +a;
if (tipeof a == 'number'){
  if (!isNaN(a)){
    if (a % 2 == 0){
      console.log ("Четное число");
    }
    else if (a % 1 == a){
      console.log ("Нечетное число");
    }
    else {
      console.log ("Упс, кажется, вы ошиблись");
    }
  }
  else {
    console.log ("NaN");
    }
  }