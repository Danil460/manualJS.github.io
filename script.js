let userName = localStorage.getItem('userName');

if (userName) {
    alert(`Добро пожаловать обратно, ${userName}!`);
} else {
    userName = prompt('Пожалуйста, введите ваше имя:');

    localStorage.setItem('userName', userName);
}
var elem = document.getElementById('hello');
    elem.innerHTML = "Здравствуйте "+userName;

      const overlay = document.getElementById('overlay');
      const showOverlayButton = document.getElementById('showOverlay');
      const currentDate = new Date().toDateString();
      const body = document.getElementById('body');

      showOverlayButton.addEventListener('click', () => {
          document.getElementById('userName').textContent = userName;
          document.getElementById('currentDate').textContent = currentDate;
          overlay.style.display = 'block';
          body.style.display = 'none';
      });

      overlay.addEventListener('click', () => {
          overlay.style.display = 'none';
          body.style.display = 'block';
      });




function a1(){
    var a=prompt();
    
    if (isNaN(a)==false)
    {
        alert("Число");
    }
    else if (isNaN(a)==true)
    {
        alert("Строка");
    }
    else
    {
        alert("Не определенно");
    }
    document.getElementById("res").innerHTML="В зависимости от данных выдается разные значения"
}

function a2(){
    let zz = prompt("Введите ваш знак зодиака:");
    if (zz) {
      switch(zz.toLowerCase()) {
        case "овен":
          alert("Привет, Овен!");
          break;
        case "телец":
          alert("Привет, Телец!");
          break;
        case "близнецы":
          alert("Привет, Близнецы!");
          break;
        default:
          alert("Привет!");
      }
    } else {
      alert("Вы не ввели знак зодиака.");
    }
    document.getElementById("res").innerHTML="В зависимости от данных вас по разному будут приветсвовать"
}

function a3(){
for ( i=1;i<=40;i++){
    console.log(i);
}
a=1
while (a<=40){
    console.log(a);
    a++;
}
b=1
do{
    console.log(b);
    b++;
}while(b<=40);
document.getElementById("res").innerHTML="Для просмотра результата нажмите f12  и откройте вкладку console. В данном примере демонтрируется вывод чисел при использовании трех разных циклов."
}
function a4(){
while (true){
    confirm("Вы попали под кибер атаку, закройте страницу и зайдите заново!")
}
}
function a5(){
var a=prompt("Введите любое число больше 5")
while (isNaN(a)||a<5){
    
document.getElementById("res").innerHTML="Неверно";
    a=prompt("Введите любое число больше 5")
    
}
document.getElementById("res").innerHTML="Верно";

}

function a6(){
for (i=8;i<=20;i+=2) console.log(i);
document.getElementById("res").innerHTML="Для просмотра результата нажмите f12  и откройте вкладку console. В данном примере демонтрируется вывод чисел только четных чисел."
}

function a7(){
for (i=1;i<=7;i++){
    if (i==5){
        continue
    }
    console.log(i)
}
document.getElementById("res").innerHTML="Для просмотра результата нажмите f12  и откройте вкладку console. В данном примере демонтрируется вывод чисел от 1 до 7 без 5"}

let array=new Array(1,2,3,4,5,6,7,8,9);
  let array1=[1,2,3,4,5,6,7,8,9];
  let array2 = [];
	array2[0] = 'red';
	array2[1] = 'green';
	array2[2] = 'blue';
function a8(){
  
    document.getElementById("res").textContent="Только что вы создали 3 массива: 1-("+array+")    2-("+array1+")     3-("+array2+")"}
function a9(){
    let tmp=array1[5];
  array1[5]=25;
  document.getElementById("res").textContent="До преобразования было число "+tmp+" после преобразования "+array1[5];
}
  

/*3*/

let arrayLength = array1.length;
let elements = document.getElementById("b1");

    elements.addEventListener('mouseover', function() {
        document.getElementById("res").textContent=arrayLength;
})
/*4*/

function b2(){
for (i=0;i<array.length;i++){
  console.log(array[i])
  document.getElementById("res").innerHTML="Для просмотра результата нажмите f12  и откройте вкладку console."
}}
/*5*/
let array3=array.concat(array1)
function b3(){

document.getElementById("res").innerText="При объединении массивов мы получили:"+array3;
}
/*6,7*/
function b4(){
let lastnum=array3.pop();
document.getElementById("res").textContent="При удалении последнего элемента:"+lastnum
lastnum=array3.pop();
console.log(lastnum)}
/*8*/
function b5(){
array3.unshift(10);
document.getElementById("res").textContent="При добавлении элемента в начало массива мы получили:"+array3;}
/*9*/
function b6(){
let date1=new Date();
a=date1.getDate();
b=date1.getMonth()+1;
c=date1.getFullYear();
document.getElementById("res").textContent=a+"."+b+"."+c}
/*10*/
function b7(){
const months = [
    "января", "февраля", "марта",
    "апреля", "мая", "июня",
    "июля", "августа", "сентября",
    "октября", "ноября", "декабря"
];
let date1=new Date();
a=date1.getDate();
b=date1.getMonth();
c=date1.getFullYear();
document.getElementById("res").textContent=(a+" "+months[b]+" "+c+" года")}

/*11*/
function b8(){
   
    let a = Math.floor(Math.random() * 51);
    let b = Math.floor(Math.random() * 51);
    let c = a * b;
    document.getElementById("res").textContent=a+"*"+b+"="+c
}
function victorina(){
    rightCounter = 0
    questionsCounter = 0
    questions = ["Как называется Document Object Model?", "С каким языком мы работаем?","Какая функция позволяет выбрать ответ да или нет?","Какой тег создаёт заголовок 1 уровня на странице?","Как записать условный оператор","Как называется условный цикл","Какой набор символов позволяет сделать перенос строки ?","Как называется свойство массива для получения его длины?","Как записать оператор сравнения не равно ?","Каким ключевым слово можно создать переменную?"]
    rightAnswers = ["dom", "javascript","confirm","h1","if","while","\n","length","!=","var"]
    while (questionsCounter < 10){
    answer = prompt(questions[questionsCounter])
        console.log(answer.toLowerCase)
        console.log(rightAnswers[questionsCounter])
        if (answer == rightAnswers[questionsCounter]) {rightCounter += 1}
    questionsCounter += 1}
    alert("вы набрали баллов: "+rightCounter)

}