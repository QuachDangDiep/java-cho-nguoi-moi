// alert("Hi javascript world!") Bai 1


// var fullName = "Quach Dang Diep"; 
// var age = 19;

// alert(age);
// alert(fullName); Bai 2


/**
 *  Bai 3
 */

/*


Giới thiệu về một số hàm built-in
    1.Alert: Bật lên cửa sổ hộp thoại
    2.Console: hiện ra ở console
    3.Confirm: Hỏi và cen sồ
    4.Prompt: gộp lại của Alert và Cofirm
    5.Set timeout: chạy 1 đoạn code sau 1 khoảng thòi gian
    6.Set interval: chạy 1 doạn code sai 1 thời gian nhưng lặp đi lặp lại liên tục
 */

    // var fullName = 'Dang Diep';

    // console.error(fullName);

    // confirm('Xac nhan ban du tuoi!');

    // prompt('Xac nhan ban du tuoi!');

    // setTimeout(function() {
    //     alert('Hello World!')
    // }, 2000);

    // setInterval(function() {
    //     console.log('Hello World!' + Math.random());
    // }, 2000); Bài 4



    /*
    Giới thiệu về toán tử trong javascript
    1. Toán tử số học - Arithmetic
    2. Toán tử gán - Assignment
    3. Toán tử so sánh - Comparison
    4. Toán tử logic - Logical

     */

   //  var a = 1 + 2;
   //  console.log(a); (1)

   // var fullName = 'quach dang diep'; (2)

   //  var a = 1 ;
   //  var b = 2 ;

   //  if (a < b) {
   //    alert('Dung')
   //  }; (3)

   // var a = 1;
   // var b = 2;
   // if (a > 0 && b >0) {
   //    alert('a & b đều lớn hơn 0')
   // }; (4) Bai 5



   /* Toán tử số học
    +  --> Cộng
    -  --> Trừ
    *  --> Nhân
    /  --> Chia
    ** --> Lũy thừa
    %  --> Chia lấy phần dư
    ++ --> Tăng 1 giá trị số
    -- --> Giảm 1 giá trị số
    */

   //  var a = 8;
   //  var b = 2;

   //  var c = a % b;

   //  console.log(c);

   // var a = 8;

   // a++;
   // a++;
   // a++;
   // a--;
   // a--;

   // console.log(a); Bai 6


   // Toán tử ++ --
   // Prefix & Postfix

   // var a = 6;

   /*
   Việc 1: +1 cho a, a = a + 1 => a = 7
   Việc 2: Trả về a sau khi đc + 1 
   Trừ cũng như vậy
   */

   /*
   Việc 1: `a copy` , `a copy` = 6
   Việc 2: trừ 1 của a, a = a - 1 => a = 5
   Việc 3: Trả về `a copy` 
   */ 

   // var output = a++;

   // console.log('output: ', output);

   // console.log('a: ', a); 

   /*var number = 6;
   // var output = number++ + --number;
   var output = ++number * 2 - number-- * 2;

   // 7 * 2 - 7 * 2

   // 6 + 6
zs
   console.log('output: ', output); Bai 7
   */ 


   /*

   Toán tử     Ví dụ     Tương đương
   =          x = y      x = y
   +=         x += y     x = x + y
   -=         x -= y     x = x - y
   *=         x *= y     x = x * y
   /=         x /= y     x = x / y
   **=        x **= y    x = x ** y

    */

   /*var a = 1;

   a += 2;
   a -= 2;

   
   console.log(a); Bai 8*/


   /*
   Toán tử chuỗi - String operator
    */

   // var firstName = 'Dang';
   // var lastName = 'Diep';
   // console.log(firstName + '' + lastName);

   /*var name = 'Dang';

   // name = name + 'Diep';
   name += 'Diep';

   console.log(name) Bai 9*/



   /* Toán tử so sánh 

   Toán tử 
   ==         -->    Bằng
   !=         -->    Không Bằng
   >          -->    Lớn hơn
   <          -->    Nhỏ hơn
   >=         -->    Lớn hơn hoặc bằng
   <=         -->    Nhở hơn hoặc bằng

    */

   /*// var a = 1;
   // var b = 2;

   var a = 'quach dang diep';
   var b = 'quach dang diep';

   if (a == b) {
      console.log('Dung');
   } else {
      console.log('Sai');
   }; Bai 10 */



   /*
   Boolean
   */

  /* var a = 1;
   var b = 2;

   var isSuccess = a > b;
   // var isSuccess = true;

   console.log(isSuccess); Bai 11 */



   /*
   If - else
   */

   /*
   - 0
   - false
   -  '' = ""
   - undefined
   - NaN
   - null
    */

   /*var fullName = 'Dang Diep';

   if (fullName) {
      console.log('Dieu kien dung');
   } else {
      console.log('Dieu kien sai')
   } Bai 12 */



   /*
   Toán tử logic
   1. && - And : đòi hỏi các điều kiện phải đúng
   2. || - Or : chỉ cần 1 vế đúng thôi là nó đúng
   3. ! - Not : phủ định lại giá trị của nó như đúng thành sai và ngược lại
   */

  /* var a = 1;
  var b = 2;
  var c = 3;

//   if (a > 0 && b > 0 && c > 0) {
//    console.log('Dieu kien dung !');
//   } 

// if (a > 0 || b > 0 || c > 0) {
//    console.log('Dieu kien dung !');
//   } 

if (!(a < 0)) {
   console.log('Dieu kien dung !');
  } Bài 13 */



  /*
  Kiểu dữ liệu trong Javascript

  1. Dữ liệu nguyên thủy - Primitive Data
   - Number
   - String
   - Boolean
   - Undefined
   - Null
   - Symbol

  2. Dữ liệu phức tạp - Complex Data
   - Function
   - Object 
   */

   /*// Number type
   var a = 1;
   var b = 2;
   var c = 1.5;

   console.log(typeof a);


   // String type
   var fullName = 'Dang Diep';

   console.log(fullName);

   //Boolean type
   var isSuccess = true;

   console.log(isSuccess);

   //Undefined type
   var age;

   console.log(age);

   //Null type
   var isNull = null; // Không có j

   console.log(isNull); 

   //Symbol type
   var id = Symbol('id'); // unique
   var id2 = Symbol('id'); // unique

   console.log(id);
   console.log(id2);
   console.log(id === id2);

   //Function

   var myFunction = function() {
      alert('Hi xin chao cac ban !')
   }
   myFunction(); 

   // Object types

   var myObject = {
      name : 'Dang Diep',
      age : 19,
      adress: 'Ha Noi',
      myFunction: function () {

      }
   };

   console.log('myObject', myObject);


   var myArray = [
      'Dang Diep',
       19,
      'Ha Noi', 
       true, 
       [1, 2, 3]
   ];

   console.log('myArray', myArray); Bai 14*/

   

   /*
   Toán tử so sánh 
    */

   /**
    *  ===
    *  !==
    */

   // var a = 1;
   // var b = '1';

   // console.log(a === b);

   // var a = '1';
   // var b = 1;

   // console.log(a !== b); Bài 15



   /*
   Hiểu hơn về câu lệnh điều kiện
   Và phép so sánh
    */

   /*var a = 1;
   var b = 2;

   // var result = 'A' && 'B' && 'C';

   // var result = 'A' || 'B' || 'C';

   var result = null || 0 || undefined;



   console.log('Result', result);

   // var result = a < b && a < 0;

   // console.log('Result', result);
   
   // console.log('Result', result);

   if (result) {
      console.log('Dieu kien dung');
   } else {
      console.log('Dieu kien sai');
   }  bai16*/



   /*
   CHUỖI TRONG JAVASCRIPT

   1. Tạo chuỗi 
   - Các cách tạo chuỗi 
   - Nên dùng cách nào? Lý do?
   - Kiểm tra data type

   2. Một số case sử dụng backslash (\)
   3. Xem độ dài chuỗi 
   4. Chú ý độ dài khi viết code
   5. Template string ES6
    */

   // 1. var fullName = 'Dang Diep';

   // console.log(typeof fullName);

   // 2. var fullName = 'Dang Diep la \'sieu nhan\'';

   // var fullName = 'Day la dau \\';

   // console.log(fullName);

   // 3. var fullName = "Dang Diep";

   // console.log(fullName.length);

   // 4. var fullName = "Dang Diep"
   //  + "1.Dang Diep"
   //  + "2.Dang Diep"
   //  + "3.Dang Diep"
   //  ;

   // 5. console.log(fullName);

   // var firstName = 'Dang';
   // var lastName = 'Diep';

   // console.log('Toi la: ' + firstName + '' + lastName);
   // console.log(`Toi la: ${firstName} ${lastName}`) Bai17;



   //Làm Việc Với Chuỗi

   // var myString = 'Hoc JS tai JS JS F8!';

   // 1. length

   // console.log(myString.length);

   // 2. Find index

   // console.log(myString.indexOf('JS'));

   // console.log(myString.lastIndexOf('JS'));

   // console.log(myString.search('JS'));



   // 3. Cut string

   // console.log(myString.slice(4, 6)); 

   // console.log(myString.slice(-3, -1)); 



   // 4. Replace

   // console.log(myString.replace('JS', 'Dang'))

   // console.log(myString.replace(/JS/g, 'Dang'))





   // 5. Convert to upper case

   // console.log(myString.toUpperCase());

   // 6. Convert to lower case

   // console.log(myString.toLowerCase());

   // 7. Trim

   // console.log(myString.trim());

   // 8. Split

   // var languages = 'JavaScript, PHP, Ruby';

   // console.log(myString.split(', '));

   // var languages = 'JavaScript';

   // console.log(languages.split(''));

   // 9. Get a character by index

   // const myString2 = 'Dang Diep';

   // console.log(myString2.charAt(10));

   // console.log(myString2[10]) Bai 18



   /*
   Kiểu số (Number) trong Javascript

   1. Tạo giá trị Number
    - Các cách tạo
    - Dùng cách nào? Tại sao?
    -Kiểm tra data type

    2. Làm việc với Number
     - To string
     - To Fixed  
    */

   //   var age = 18;
   //   var PI = 3.14;

   //   console.log(PI.toFixed(1));

   //  2.  var myString = PI . toString();

   //   console.log(typeof age.toString())

   // 1.  var result = 20 / 'ABC';

   //   console.log(isNaN(result));

   //  1. var otherNumber = new Number(9);

   //   console.log(typeof age) Bai 19



   /*
   Mảng trong Javascript - Array

   1. Tạo mảng
       - Cách tạo
       - Dùng cách nào? Tại sao?
       - Kiểm tra data type?

   2. Truy xuất mảng
      - Độ dài mảng
      -Lấy phần tử theo index
    */

   // var languages = [
   //    'Javascript',
   //    'PHP',
   //    'Ruby',
   //    'Dart',
   //    // null,
   //    // undefined,
   //    // function () {

   //    // },
   //    // {},
   //    // 123
   // ];

   // 2. console.log(languages.length)
   // console.log(languages[0])

   // 1. console.log(typeof languages)
   // console.log(Array.isArray(languages))
   // console.log(Array.isArray(new Array(1,2))) Bai 20


   /*
   Làm  việc với Array

   - Keyword: JavaScript array methods

   1. To string
   2. Join
   3. Pop
   4. Push
   5. Shift
   6. Unshift
   7. Splicing
   8. Concat
   9. Slicing

    */

   // var languages = [
   //    'javascrpipt',
   //    'PHP',
   //    'Ruby'
   // ];

   // 1. console.log(languages.toString())
   // 2. console.log(languages.join(' - '))
   // 3. console.log(languages.pop())// xoa element cuoi mang va cha ve phan tu da xoa
   // 3. console.log(languages)
   // 4. console.log(languages.push('Java', 'Node'))// them phan tu vao cuoi mang cha ve do dai moi cua mang
   // 4. console.log(languages)
   // 5. console.log(languages.shift())// xoa di phan tu o dau mang va cha ve phan tu da xoa
   // 5. console.log(languages)
   // 6. console.log(languages.unshift('Dart', 'Diep'))//them phan tu vao dau mang cha ve do dai moi cua mang
   // 6. console.log(languages)
   // 7. languages.splice(1, 1) // xoa phan tu trong mang
   // 7. languages.splice(1, 0, 'Dart', '') // chen tu phan tu 1 , 0 xoa phan tu nao, va them Dart
   // 8. console.log(languages.concat(languages2))// loi 2 thang languages voi nhau

   // 9. console.log(languages.slice(1, 2)) // cat phan tu trong mang Bai 22;


   
   /*
   Hàm (function) trong Javascript


   1. Hàm?
      - Một khối mã
      -Làm 1 việc cụ thể

   2. Loại hàm
      -Built-in
      -Tự định nghĩa

   3. Tính chất
      - Không thực thi khi định nghĩa
      - Sẽ thực thi khi được gọi
      - Có thể nhận tham số
      - Có thể trả về 1 giá trị
      
   4. Tạo hàm đầu tiên 
    */
   
   // function showDialog() {
   //    alert('Hello World');
   // }

   // showDialog(); Bai 21



   // Tham số hàm - Javascript cơ bản

   /*
   1. Tham số?
      - Định nghĩa?
      -Kiểu dữ liệu?
      -Tính private?
      -1 tham số
      -Nhiều tham số?

   2. Truyền tham số
      - 1 tham sô
      -Nhiều tham số
   
   3. Arguments?
      -Đối tượng arguments
      -Giới thiệu vòng for   
    */

   // function writeLog(message, message2, message3) {
   //    console.log(message)

   //    if (message2, message3){
   //       console.log(message2)
   //       console.log(message3)
   //    }
   // }
    // writeLog('Test message', ['java', 'php'], 123);
   // writeLog('Test message');

   // function writeLog() {
   //    console.log(arguments)
   // }

   // writeLog('log1', 'log2', 'log3');

   // function writeLog() {
   //    var myString = ''
   //    for (var param of arguments){
   //       myString += `${param} - `;
   //    }
   //    console.log(myString)
   // }

   // writeLog('log1', 'log2', 'log3'); Bai 22



   //  Return trong ham - javascript co ban

   // function cong(a, b){
   //    // return a + b ;
   //    // return [a, b] ;
   //    return a. toString() + b. toString();
   // }


   // var result = cong(2, 8);

   // console.log(result);

   // function cong(a, b){
   //    a + b ;
   //    console.log('123')
   //    alert()
   // }


   // var result = cong(2, 8);

   // console.log(result);

   // var isConfirm =  confirm('Message?');

   // console.log(isConfirm); bai25 



   /*
   Một số điều cần biết về function

   1. Khi function đặt trùng tên? cái function sau sẽ ghi đè cái function trc
   2. Khai báo biến trong hàm? Được 
   3. Định nghĩa hàm trong hàm? Được 
    */
   
   // 1. function showMessage() {
   //    console.log('Message: 1');
   // }

   // function showMessage() {
   //    console.log('Message: 2');
   // }

   // showMessage();

   
   // 2. function showMessage(){
   //    var fullName = 'Dang Diep';

   //    console.log(`Hello, ${fullName}!`);
   // }

   // showMessage();

   // 3.function showMessage(){
   //    function showMessage2(){
   //       console.log('Message: 3');
   //    }
   //    showMessage2();
   // }
   // showMessage();Bai 26


   /*
   Các loại function

   1. Declaration function
   2. Expression function
   3. Arrow function
    */

   // showMessage2();
   // function showMessage(){
   //    console.log('Declaration function')
   // }

   // var showMessage2 = function(){
   //    console.log('Expression function')
   // }

   
   // setTimeout(function autoLogin(){

   // });

   // var myObject = {
   //    myfunction: function testName(){

   //    }
   // } bai27


   /*
   Polyfill?
    */

   // if(!String.prototype.includes){
   //    String.prototype.includes = function(search, start){
   //       'use strict';

   //       if(search instanceof RegExp){
   //          throw TypeError('First argument must not be a RegExp');
   //       }
   //       if(start === undefined) { start = 0; }
   //       return this.indexOf(search, start) !== -1;
   //       // return 'javascript course'.indexOf('javascript', 0) !== -1;no se chuyen vao nhu nay
   //    };
   // }

   // 'JavaScript course'.includes('javascript', 0); bai 28


   // Object trong Javascript

//    var emailKey = 'email';


//    var myInfo = {
//       name: 'Dang Diep',
//       age : 19,
//       address: 'Ha Noi, VN',
//       [emailKey]: 'diep@fulltach.edu.com',
//       phone: '0987654321',
//       getName: function(){
//          return this.name;
//       },
//       getName: function(){

//       }
//    };


//    //  function --> Phương thức / method
//    // Others --> Thuộc tính / property


//    // delete myInfo.email;

//    // myInfo.email='diep@gmail.com',
//    // myInfo['my-email'] = 'diep@gmail.com';

//    // var myKey = 'address';

    
// console.log(myInfo.getName());
// console.log(myInfo['address']); bai 29



// Object constructor 

// function User(firstName, lastName,avatar){
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.avatar = avatar;

//    this.getFullName = function(){
//       return `${this.firstName} ${this.lastName}`;
//    };
// }

// var author = new User('Diep', 'Dang', 'Avater');
// var user = new User('Van', 'A', 'Avater');

// author.title = 'Chia se dao tai F8';
// user.comment = 'lieu co khoa asp.net k ad';

// // console.log(author.constructor === User);
// // console.log(author.getFullName());
// // console.log(user.getFullName());

// console.log(author);
// console.log(user); bai 30



/* 
   Object prototype - Basic

   1. Prototype là gì?
   2. Sử dụng khi nào?
*/

// function User(firstName, lastName,avatar){
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.avatar = avatar;
   
//       this.getFullName = function(){
//          return `${this.firstName} ${this.lastName}`;
//       };
//    }

//    User.prototype.className = 'F8';
//    User.prototype.GetClassName = function() {
//       return this.className;
//    }

//    var user = new User('Diep', 'Dang', 'Avater');
//    var user2 = new User('Van', 'A', 'Avater');

//    console.log(user.className);
//    console.log(user2.GetClassName()); Bai 31




// Đối tượng Date

// var date = Date();

// console.log(date.getFullYear());

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();

// console.log(`${year}/${month}/${day}`);

// javascript date object mozilla Bai 32




// Câu lện rẽ nhánh - If else
// var date = 2; so sánh tính đúng sai dùng từ 2 chở lên

// if (date === 2){
//    console.log('Today is Tuesday');
// } else if (date === 3) {
//    console.log('Today is Wednesday');
// } else if (date === 4) {
//    console.log('Today is Thursday');
// } else {
//    console.log('No biet');
// } Bai 33



// Câu lệnh rẽ nhánh - Switch

// var date = 2; được cho trước nhưng giá trị dùng từ 3 chở lên 

// switch(date) {
//    case 2:
//       console.log('hom nay la thu 2');
//       break;
//    case 3:
//       console.log('hom nay la thu 3');
//       break;
//    case 4:
//       console.log('hom nay la thu 4');
//       break;
//    case 5:
//       console.log('hom nay la thu 5');
//       break;
//    default:
//       console.log('No biet');   
// }  Bai 34



/*
   Toán tử 3 ngôi - Ternary operator
 */

   // var course = {
   //    name: 'Javascript',
   //    coin: 250
   // } 

   // // if (course.coin > 0) {
   // //    console.log(`${course.coin} Coins`);
   // // } else {
   // //    console.log('Mien phi');
   // // }

   // var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien phi';
   // console.log(result);


   // var a = 1;
   // var b = 2;

   // var c = a > 0 ? a : b; Bai35
    


   /*
      Vòng Lăp - Loop

   1. for - Lặp với điều kiện đúng
   2. for/in - Lặp qua key cảu đối tượng
   3. for/of - Lặp qua value của đối tượng
   4. while - Lặp điều kiện đúng 
   5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
   
   
    */


   // For loop

   // var myArray = [
   //    'javascript',
   //    'PHP',
   //    'Java',
   //    'Dart',
   //    'Ruby',
   //    'Python'
   // ];

   // // console.log(myArray[2]);

   // var arrayLength = myArray.length;

   // for (var i = 0; i < arrayLength; i++) {
   //    console.log(myArray[i]);
   // } phân 1

   
   //For/in loop

   // var myInfo = {
   //     name: 'Dang Diep',
   //     age: 19,
   //     address: 'Ha Noi, VN'
   // };

   // for (var key in myInfo) {
   //     console.log(myInfo[key]);
   // }


   // var myString = 'Javascript';

   // // console.log(myString[0]);

   // var languages = [
   //    'javascript',
   //    'PHP',
   //    'Ruby'
   // ];

   // for(var key in myString) {
   //    console.log(myString[key]);
   //    // console.log(key);
   // } Phần 2


   // For /of loop

   // var languages = 'javascript'

   // var myInfo = {
   //    name: 'Son Dang',
   //    age: 19,
   // };

   // // console.log(Object.keys(myInfo))

   // // console.log(Object.values(myInfo));

   // for (var value of Object.values(myInfo)) {
   //    console.log(value);
   // } phần 3


   // while loop

   // var myArray = [
   //    'javascript',
   //    'PHP',
   //    'Ruby'
   // ]

   // var i = 0;

   // while (i <= myArray.length){
   //    console.log(myArray[i]);
   //    i++;
   // } Phần 4



   // do/while loop


   // var i = 0;

   // do {
   //    i++;

   //    console.log(i);

   // } while(i < 10);


   // var i = 0;
   // var isSuccess = false;

   // do {
   //    i++;

   //    console.log('Nạp Thành Công Lần ' + i);

   //    // thanh cong
   //    if (false) {
   //       isSuccess = true;
   //    }
 
   // } while(!isSuccess && i <= 3);  Phần 4


   // Break & Continue in loop

   // for (var i = 0; i < 10; i++){

   //    if (i % 2 !== 0){
   //       continue;
   //    }

   //    console.log(i);

   //    // if (i >= 5){
   //    //    break;
   //    // }
   // } Phần 5


   // Vòng lặp lồng nhau - Nested loop

   // var myArray = [
   //    [1, 2],
   //    [3, 4],
   //    [5, 6]
   // ];

   // for (var i = 0; i < myArray.length; i++){
   //    // console.log(myArray[i])
   //    for (var j = 0; j < myArray[i].length; j++){
   //       console.log(myArray[i][j]);
   //    }
   // } Phần 6


   // Loop...

   // for (var i = 100; i > 0; i--) {
   //    console.log(i);
   // }

   // for (var i = 0; i <= 100; i += 5){
   //    console.log(i);
   // } Phần 7 Bài 36


   /*
   Array methods:
       forEach()
       every()
       some()
       find()
       filter()
       map()
       reduce()
   */

   // var course = [
   //    {
   //       id: 1,
   //       name: 'Khai học Javascript',
   //       coin: 250
   //    },
   //    {
   //       id: 2,
   //       name: 'HTML, CSS',
   //       coin: 0
   //    },
   //    {
   //       id: 3,
   //       name: 'Ruby',
   //       coin: 0
   //    },
   //    {
   //       id: 4,
   //       name: 'PHP',
   //       coin: 400
   //    },
   //    {
   //       id: 5,
   //       name: 'ReactJS',
   //       coin: 500
   //    },
   // ]

   // course.forEach(function(courses, index) {
   //    console.log(index, courses);
   // });// call back  duyệt qua các phần tử của mảng


   // var isFree = course.every(function(courses, index) {
   //    console.log(index);
   //       return courses.coin === 0;
   // }); // kiểm tra các phần tử của mảng phải thỏa mãn 1 điều kiện nào đó
   // console.log(isFree)


   // var isFree = course.some(function(courses, index) {
   //       return courses.coin === 0;
   // });  // Kiểm tra 1 ông trong mảng thỏa mãn điều kiện đúng thì trả về điều kiện đó
   // console.log(isFree)


   // var courses = course.find(function(course, index) {
   //    return course.name === 'Ruby';
   // }); // Nó sẽ lặp qua mỗi phần tử của chúng ta hàm chuyền vào sẽ đc lặp lại và trả về cho ta phương thức
    //  Nó kiểm tra đến phần tử nào nó ra true và nó gán ngược vào phần tử và kết thúc

   // console.log(courses);


   // var listCourses = course.filter(function(course, index) {
   //    return course.name === 'Ruby';
   // });  giống find 
   // console.log(listCourses); Phần 1



   // function courseHandler(course, ){
   //    // console.log(course);

   //    // return course.name;

   //    return `<h2>${course.name}</h2>`;
   //    // return {
   //    //    id: course.id,
   //    //    name: `Khoa hoc: ${course.name}`,
   //    //    coin: course.coin,
   //    //    coinText: `Gia: ${course.coin}`,
   //    //    index: index,
   //    //    originArray: course,
   //    // };
   // }

   // var newCourse = course.map(courseHandler);
   // console.log(newCourse.join('')); phần 2



   //1. Dễ hiểu
   //2. Ngắn gọn
   //3. Hiệu năng

   // // Biến lưu trữ
   // var totalCoin = 0;

   // // Lặp qua các phần tử
   // for (var courses of course){

   //    // Thực hiện lưu trữ
   //    totalCoin += course.coin;
   // }

   // console.log(totalCoin);

   // var i = 0;

   // function (accumulator, currentValue, ) {
      // i++; currentIndex, originArray

      // var total = accumulator + currentValue.coin;
      // console.table({
      //    'Luot chay: ': i,
      //    'Bien tich tru: ': accumulator,
      //    'Gia khoa hoc:' : currentValue.coin,
      //    'tich chu duoc: ' : total
      // });
      // console.log(currentValue);

   //    return accumulator + currentValue;
   // }

   // var totalCoin = course.reduce(function (accumulator, currentValue, ) {
   //    return accumulator + currentValue.coin;
   // }, 0); //initial value

   // console.log(totalCoin);
   // initial value

   // Hoặc ES6

   // var totalCoin = course.reduce((a,b) =>
   //    a + b.coin, 0
   // ); //initial value

   // console.log(totalCoin); Phần 3

   // var i = 0;

   // var totalCoin = course.reduce(function(total, course){
   //    i++;

   //    // console.log(i, total, course);

   //    return total + course.coin;
   // }, 0);

   // console.log(totalCoin);


   // var numbers = [100, 200, 220, 200, 480];

   // var totalCoin = numbers.reduce(function(total, numbers){
   //    return total + numbers;
   // });

   // console.log(totalCoin);


   // Bài Tập

   // Bài 1 Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"

   // var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

   // var flatArray = depthArray.reduce(function(flatOutput, depthItem){
   //    return flatOutput.concat(depthItem);
   // }, []);

   // console.log(flatArray);


   // Lấy ra các khóa học đưa vào 1 mảng mới
   // var topics = [
   //    {
   //       topic: "Front-end",
   //       courses: [
   //          {
   //             id: 1,
   //             title: "Html, CSS"
   //          },
   //          {
   //             id: 2,
   //             title:"JavaScript"
   //          }
   //       ]
   //    },
   //    {
   //       topic: "Back-end",
   //       courses: [
   //          {
   //             id: 1,
   //             title: "Node.js"
   //          },
   //          {
   //             id: 2,
   //             title: "PHP"
   //          }
   //       ]
   //    }
   // ];

   // var newCourses = topics.reduce(function (courses, topic){
   //    return courses.concat(topic.courses);
   // }, []);

   // console.log(newCourses);

   // var htmls = newCourses.map(function(){
   //    return `
   //       <div>
   //           <h2>${course.title}</h2>
   //           <p>ID: ${course.id}</p>
   //       </div>
   //    `;
   // });

   // console.log(htmls.join('')); Bai 36


   // includes method kiểm tra chuỗi

   // var title = 'Responsive wed design';

   // console.log(title.includes('Responsive', 1));

   // var courses = ['Javascript', 'PHP', 'Dart'];

   // console.log(courses.includes('Javascript')); bài 37


   /*
   Math object

   - Math.PI: Số PI nguyên thủy
   - Math.round(): Làm tròn số 
   - Math.abs() : Nhận về giá trị tuyệt đối
   - Math.ceil() : Làm tròn trên
   - Math.floor() : Làm tròn dưới
   - Math.random(): ngẫu nhiên
   - Math.min()
   - Math.max()

    */

   // console.log(Math.floor(Math.random()*10));

   // var random = Math.floor(Math.random() * 5);

   // var bonus = [
   //    '10 coin',
   //    '20 coin',
   //    '30 coin',
   //    '40 coin',
   //    '50 coin',
   // ];

   // console.log(bonus[random]);

   // var random = Math.floor(Math.random() * 100);


   // if (random < 50){
   //    console.log('Cuong hoa thanh cong!')
   // }

   // console.log(Math.max(-100, 1, 90, 50, 40)); Bai 38


   /*
   Callback?

   Là hàm (function) được truyền qua đối số
   Khi gọi hàm khác

   1. Là hàm
   2. Được truyền qua đối số
    */

   // function myFunction(param){
   //    if(typeof param == 'function'){
   //       param('Hoc lap trinh')
   //    }
   // }

   // function myCallback(value){
   //    console.log('Value: ', value);
   // }

   // myFunction(myCallback);
   // myCallback(123); Bai 39

    
   /*
   forEach, find, filter, some, every, reduce
   (Chữa bài)
    */

   // var courses = [
   //    'Javascript',
   //    'PHP'
   // ];

   // courses.push('Javascript', 'PHP');

   // courses.length = 10;

   // console.log(courses);

   // for (var i = 0; i < courses.length; i++){
   //    console.log(courses[i]);
   // }

   // for (var index in courses){
   //    console.log(courses[index]);
   // }


   // 1 forEach

   // Array.prototype.forEach2 = function(callback){
   //    for (var index in this){
   //       // console.log(index, this.hasOwnProperty(index));
   //       if(this.hasOwnProperty(index)){
   //          callback(this[index], index, this);
   //       }
   //    }
   // }

   // var courses = [
   //    'JavaScript',
   //    'PHP',
   //    'Ruby'
   // ];

   // var courses = new Array(100);

   // courses.push('JavaScript', 'PHP', 'Ruby')

   // courses.length = 1000;

   // console.log(courses);




   // courses.forEach2(function (course, index, array){
   //    console.log(course, index, array);
   // });

   // console.log(output);


   // 2. filter

   // Array.prototype.filter2 = function(callback){
   //    var output = [];

   //    for (var index in this){
   //       if (this.hasOwnProperty(index)){
   //         var result =  callback(this[index], index, this);
   //         if(result){
   //          output.push(this[index]);
   //         }
   //       }
   //    }

   //    return output;
   // }

   // var courses = [
   //    {
   //       name: 'JavaScript',
   //       coin: 680
   //    },
   //    {
   //       name: 'PHP',
   //       coin: 450
   //    },
   //    {
   //       name: 'Ruby',
   //       coin: 520
   //    },
   //    {
   //       name: 'Python',
   //       coin: 980
   //    }
   // ];

   // var filterCourses = courses.filter2(function(course, index, array){
   //    // console.log(course, index, array);
   //    return course.coin > 600;
   // });

   // console.log(filterCourses);


   // 3 Some: true/false

   // Array.prototype.some2 = function(callback){
   //    for (var index in this){
   //       if (this.hasOwnProperty(index)){
   //          if (callback(this[index], index ,this)){
   //             return true;
   //          };
   //       }
   //    }
   //    return false;
   // }

   // var courses = [
   //    {
   //       name: 'JavaScript',
   //       coin: 680,
   //       isPassed: false,
   //    },
   //    {
   //       name: 'PHP',
   //       coin: 450,
   //       isPassed: false,
   //    },
   //    {
   //       name: 'Ruby',
   //       coin: 520,
   //       isPassed: true,
   //    },
   //    {
   //       name: 'Python',
   //       coin: 980,
   //       isPassed: false,
   //    }
   // ];

   // var result = courses.some2(function (course, index, array){
   //    return course.isPassed;
   // });

   // console.log(result);


   //4 .every: true / false

   //  Array.prototype.every2 = function(callback){
   //    var output = true;

   //    for (var index in this){
   //       if (this.hasOwnProperty(index)){
   //          var result = callback(this[index], index, this);
   //          if(!result){
   //             output = false;
   //             break;
   //          }
   //       }
   //    }
   //    return output;
   // }

   // var courses = [
   //    {
   //       name: 'JavaScript',
   //       coin: 680,
   //       isPassed: true,
   //    },
   //    {
   //       name: 'PHP',
   //       coin: 450,
   //       isPassed: true,
   //    },
   //    {
   //       name: 'Ruby',
   //       coin: 520,
   //       isPassed: false,
   //    },
   // ];

   // var result = courses.every2(function (course, index, array){
   //    return course.coin > 400;
   // });

   // console.log(result); Bai 40


   // Bai van dung $$$$
   // var array = ['a', 'b', 'c', 'a', 'b', 'c',];

   // console.log([...(new Set(array))]);


   /*
   DeQuy
   1. Xác định được điểm dừng
   2. Logic heandle => Tạo ra cái điểm dừng
    */

   // function deQuy(number){
   //    if(number < 0){
   //       //Dungwf
   //    }
   //    deQuy();
   // }

   // function countDown(num){
   //    if(num > 0){
   //       console.log(num);
   //       return countDown(num - 1);
   //    }
   //    return num;
   // }
   // countDown(10);

   // function loop(start, end, callback){
   //    if(start <= end){
   //       callback(start)
   //       return loop(start + 1, end, callback);
   //    }
   // }



   // var array = ['java', 'Ruby', 'JavaScript'];

   // loop(0, array.length, function(index){
   //    // console.log('index: ', index);
   //    console.log(array[index]);
   // });


   // vi du 

   // 3 * 2 * 1 = 
   // 6 * 5 * ... * 1 =
   
   // function giaiThua(num){
   //    var output = 1;
   //    for(var i = num; i > 0; i--){
   //       output = output * i;
   //    }
   //    return output;
   // }

   // console.log(giaiThua(5));

   // function giaiThua(number){
   //    if(number > 0){
   //       return number * giaiThua(number - 1);
   //    }
   //    return 1;
   // }

   // console.log(giaiThua(6)); Bai 41




   /*
   HTML DOM
    */

   // Có 3 thành phần

   /*
   1. Element: ID, class, tag name, 
   CSS selector, HTML collection

   2. Attribute
   3. Text
    */

   //  Node


   // --------------------------------


   // 1. Element
   // Javascript: Browser | Server (Node JS)

   // Browser: HTML -> DOM -> WEB API

   // document.write('Hello world!');

   // var headingNode = document.getElementById('heading'); 1

   // var headingNodes = document.getElementsByClassName('heading'); 2

   // var headingNodes = document.getElementsByTagName('h1') 3

   // var headingNode = document.querySelector('.heading2') 4
   // var headingNode = document.querySelector('.box .heading2')
   // var headingNode = document.querySelector('.box .heading2:first-child');
   // var headingNode = document.querySelector('.box .heading2:nth-child(2)');
   // var headingNodes = document.querySelectorAll('.box .heading2');


   // console.log(headingNodes[0]);
   // console.log({
   //    element: headingNodes
   // });

   // console.log(document.forms.TestForm); 5
   // console.log(document.anchors);
   // console.log(document.forms['form-2']);
   // console.log(document.images); 



   // ví dụ

   // var listItemNodes = document.querySelectorAll('.box-1 li')

   // console.log(listItemNodes);

   // var boxNodes = document.querySelector('.box-1');

   // Công việc 1 : sử dụng tới 'boxNode'
   // ...
   // console.log(boxNodes);

   // Công việc 2: Sử dụng tới các li elements
   // là con của '.box-1'

   // console.log(boxNodes.querySelectorAll('li'));
   // console.log(boxNodes.getElementsByTagName('p'));
   // console.log(boxNodes.querySelector('p'));


   /*
   Ôn lại kiến thức cũ

   1. getElementById:  element
   2. getElementsByClassName: HTML Collections
   3. getElementsByTagName: HTML Collections
   4. querySelector:  element
   5. querySelectorAll: Node List


   6. HTML collection
   7. document.write

   */

   // var headings = document.querySelectorAll('.heading');


   // for(var i = 0; i < headings.length; i++){
   //    console.log(headings[i]);
   // }

   // console.log(document.forms);

   // 2. Attribute
   // 3. Text



   // 2. DOM attributes

   // var headingElement = document.querySelector('h1');

   // headingElement.title = 'Title test';
   // headingElement.setAttribute('data', 'test data');
   // headingElement.title = 'Title test';

   // console.log(headingElement);

   // headingElement.id = 'Heading';
   // headingElement.setAttribute('', 'heading') dùng để tạo tên cho ví dụ như class...,
   // và sau đó đặt tên

   // headingElement.getAttribute('class');
   // console.log(headingElement.getAttribute('class'));
   // console.log(headingElement.getAttribute('title'));
   // alert(headingElement.getAttribute('data'));
   // alert(headingElement.title);
   // alert(headingElement.setAttribute());


   // 3. DOM text: innerText, textContent

   // var headingElement = document.querySelector('.heading');

   // console.log(headingElement.innerText);
   // console.log(headingElement.textContent);
   // in ra dưới console : Getter


   // headingElement.innerText = 'New heading';
   // headingElement.textContent = 'New text';
   // Thay sửa nội dung thế chữ trong thẻ Text content cũng như vậy: Setter

   // innerText : là chả về viết liền giống những j ta nhìn thấy trên giao diện wed (element node)
   // TextContent : là chả về nguyên bản (text node)


   // innerHTML, outerHTML: thêm thẻ vào element node vào trong HTML

   // var boxElement = document.querySelector('.box');

   // boxElement.innerHTML = '<h2 title = "Heading">New Heading</h2>';

   // console.log(boxElement.innerHTML);

   // boxElement.outerHTML = '<span>Test</span>';

   // console.log(boxElement);

   // console.log(boxElement.outerHTML);


   // console.log(document.querySelector('h2').innerText)

   // innerHTML : Lấy element từ bên trong
   // outerHTML : Lấy element cả ngoài cả trong, ghi đè chính thằng trc


   /*
   Ví dụ :
    */

   // var boxElement = document.querySelector('.box');

   // console.log([boxElement]);

   // aria : chỉ để làm chú thích
   // attributes: chả đối tượng NamedNodeMap (giống array)
   // auto: liên quan đến edit chỉnh sửa 


   // DOM style 

   // var boxElement = document.querySelector('.box');

   // console.log(boxElement.style);
   // boxElement.style.width = '100px';
   // boxElement.style.height = '200px';
   // boxElement.style.backgroundColor ='red';

   // Object.assign(boxElement.style, {
   //    width: '100px',
   //    height: '200px',
   //    backgroundColor:'green',
   //    borderRadius: '10px',
   //    transition: 'all 0.5s ease-in-out'
   // });

   // console.log(boxElement.style.backgroundColor); //lấy ra thuộc tính css inlike


   /*
     ClassList property

     1. add
     2. contains
     3. remove
     4. toggle

    */

   //   var boxElement = document.querySelector('.box');

   //   console.log(boxElement.classList.value);

   // boxElement.classList.add('red'); // thêm attribute

   // console.log(boxElement.classList.contains('red')); // Kiểm tra xem thuộc tính có hay không

   // boxElement.classList.remove('red'); // xóa attribute 

   // boxElement.classList.toggle('red'); Bai 42


   /*
   DOM events
   1. Attribute events
   2. Assign event using the element node
    */

   // 2. Assign event using the element node
   // var h1Element = document.querySelector('h1');
   // var h1Element = document.querySelectorAll('h1');


   // console.log(h1Element);
   // h1Element.onclick = function(){
   //    console.log(Math.random());
   // }

   // for (var i = 0; i < h1Element.length; i++){
   //    // console.log(h1Element[i]);
   //    h1Element[i].onclick = function(e){
   //       console.log(e.target);  
   //    }
   // }

   // h1Element.onclick = function(e){
   //    console.log(e.target);
   // }


   /*
   DOM events

   1. Input / select ,onchange , oninput
   2. Key up / dowm
    */

   // ví dụ 1

   // var inputValue; 

   // var inputElement = document.querySelector('input[type="text"]')

   // inputElement.oninput = function(e){
   //    // console.log(e.target.value);
   //    inputValue = e.target.value;
   // };


   // var inputValue;

   // var inputElement = document.querySelector('input[type="checkbox"]')

   // inputElement.onchange = function(e){
   //    console.log(e.target.checked);
   // };


   // var inputElement = document.querySelector('select');

   // inputElement.onchange = function(e){
   //    console.log(e.target.value);
   // };


   // ví dụ 2

   // var inputElement = document.querySelector('input[type="text"]');

   // inputElement.onkeyup = function(e){
   //    // console.log(e.target.value);
   //    console.log(e.which);


   //    switch(e.which){
   //       case 27: 
   //       console.log('Exit');
   //       break;
   //    }

   // }


   // document.onkeydown = function(e){
   //    // console.log(e.which)
   //    switch(e.which){
   //       case 27:
   //          console.log('Exit');
   //          break;
   //       case 13:
   //          console.log('SEND DATA');
   //          break;   
   //    }
   // }


   /*
   DOM events

   1. preventDefault: Để loại bỏ đi hành vi của trình duyệt
   2. stopPropagation: Loại bỏ sự kiện nổi bọt
    */

   // var aElements = document.querySelectorAll('a');

   // // console.log(aElements);

   // for (var i = 0; i < aElements.length; i++){ 1
   //    aElements[i].onclick = function(e){
   //       // console.log(e.target.href)

   //       if(!e.target.href.startsWith('https://f8.edu.vn')){
   //          e.preventDefault();
   //       }

   //    }
   // }


   // var ulElement = document.querySelector('ul'); 1

   // ulElement.onmousedown = function(e){
   //    e.preventDefault();
   // }


   // ulElement.onclick = 
   //     function(e){
   //       console.log(e.target);
   //     }


   // document.querySelector('div').onclick = 2
   //     function(){
   //       console.log('DIV')
   //     }

   // document.querySelector('button').onclick = 
   //     function(e){
   //       e.stopPropagation();
   //       console.log('Click me!')
   //     }   Bai 43



   /*
   1. Event listener
    */

   // 1. Xử lý nhiều việc khi 1 event xảy ra
   // 2. Lắng nghe / Hủy bỏ lắng nghe

   //1. DOM event
    
   // Phần 1
   // var btn = document.getElementById('btn');

   // // console.log(btn);'

   // btn.onclick = function (){
   //    console.log('viec 1')

   //    console.log('viec 1')

   //    alert('Viec 3')
   // }

   // // setTimeout(function (){
   // //    btn.onclick = function (){
   // //       console.log('viec 1')
   
   // //       console.log('viec 2')
   
   // //       alert('Viec 3')
   // //    }
   // // },3000);

   // setTimeout(function () {
   //    btn.onclick = function () {}
   // },3000);


   // Phần 2
   // var btn = document.getElementById('btn');

   // function viec1(){
   //    console.log('viec 1');
   // }

   // function viec2(){
   //    console.log('viec 2');
   // }

   // btn.addEventListener('click', viec1);
   // btn.addEventListener('click', viec2);


   // setTimeout(function () {
   //    btn.removeEventListener('click', viec1);
   // }, 3000);

   // btn.addEventListener('click', function(e){
   //    console.log(Math.random())
   // });

   // btn.addEventListener('click', function(e){
   //    console.log(Math.random())
   // });

   /*
   2. Json

   1. là 1 định dạng dữ liệu (chuỗi)
   2. Javasrcipt Object Notation
   3. JSON: Number, Boolean, Null, Array, Object
   => Mã hóa / Giải mã
      Encode/ decode
      Stringify : Từ Javascript types -> JSON
      Parse : từ JSON -> Javascript types
    */

      // var json = '["Javascript","PHP"]';
      // var json = '{"name":"Dang Diep", "age": 19}';

      // var a = '1';
      // console.log(JSON.parse(json));

      // var object = JSON.parse(json);
      // console.log(object);

      // console.log(JSON.stringify({
      //    name: 'Dang Diep',
      //    age: 19,
      //    hobbies: ['Javascript', 'PHP']
      // }));\

      // console.log(JSON.stringify([
      //    'javascript',
      //    'PHP'
      // ]));

      /*
      3. Promise: là khái niệm sinh ra để sử lý các thao tác bất đồng bộ
      và trc khi có promise thì nó có callback nó xảy ra vấn đề là callback hell
      nó sẽ bị sâu vào khó nhìn code bị dối khó nhìn khó hiểu vì vậy thăng promise
      này đc sinh ra
      - để tạo ra 1 promise thì sử dụng từ khóa new new với thằng Promise
      và chuyền vào 1 executro function và trong đó nhận đc hai tham số
      dang hàm 1 resolve thao tác sử lý thành công, reject thất bại sử dụng
      qua thằng .then(khi thành công) và .catch(khi thất bại)

      - Sync: đồng bộ chạy theo luồng đồng bộ
      - Async: bất đồng bộ chạy không theo luồng
      - Nỗi đau:
            - Callback hell
            - Pyramid of doom
      - lý thuyết và cách hoạt động của ông đấy
      + SetTimeout, setInterval, fetch, xmlHTTPRequest,
      fire reading, request animation frame
      -thực hành, ví dụ

      - Callback
       */

      // setTimeout(function(){
      //    console.log(1)
      // }, 1000);

      // console.log(2);

      // setTimeout(function() {
      //    console.log(1);// viect 1
      //    setTimeout(function() {
      //       console.log(2);// viect 2
      //       setTimeout(function() {
      //          console.log(3);// viect 3
      //          setTimeout(function() {
      //             console.log(4);// viect 4
      //          }, 1000);
      //       }, 1000);
      //    }, 1000);
      // }, 1000);
      
      // 1. new Promise
      // 2. Executor

      // Có 3 chạng thái
      // 1. Pendding
      // 2. Fulfilled
      // 3. Rejected
      
      // var promise = new Promise(
      //    // Executor
      //    function(resolve, reject){
            // Logic sử lý
            // Thành công: resolve()
            // Thất Bại: reject()
            // resolve([
            //    {
            //       id: 1,
            //       name: 'Javascript'
            //    }
            // ]);
            // reject('Error!');
      //       resolve();
      //    }
      // );

      // chuỗi

      // promise
      // .then(function() {
      //    return new Promise(function(resolve) {
      //       // setTimeout(resolve, 3000);
      //       setTimeout(function () {
      //          resolve([1,2,3]);
      //       }, 3000)
      //    });
      //  })
      //  .then(function(data) {
      //    console.log(data);
         // return 2;
      //  })
      //  .then(function(data) {
      //    console.log(data);
      //    return 3;
      //  })
         //  .then(function(courses) {
         //    console.log(courses);
         //  })
         //  .catch(function(error) {
         //    console.log(error);
         //  })
         //  .finally(function() {
         //    console.log('Done!');
         //  });

// function sleep(ms) {
//    return new Promise(function (resolve){
//       setTimeout(resolve, ms);
//    });
// }

// sleep(1000)
//    .then(function() {
//       console.log(1);
//       return sleep(1000);
//    })
//    // .then(function() {
//    //    console.log(2);
//    //    return sleep(1000);
//    // })
//    .then(function() {
//       console.log(2);
//       return new Promise(function(resolve, reject){
//          reject('Error!');
//       });
//    })
//    .then(function() {
//       console.log(3);
//       return sleep(1000);
//    })
//    .then(function() {
//       console.log(4);
//       return sleep(1000);
//    })
//    .catch(function(error) {
//       console.log(error);
//    })


/*
1. Promise.resolve
2. Promise.reject
3. Promise.all

Thư viện: output luôn luôn là 1 promise
 */

// var promise = new Promise(function (resolve, reject){
//    // logic
//    // resolve('Success!');
//    // 
//    reject('Error!');
// });
// var promise = Promise.resolve('Success!');
// var promise = Promise.reject('Error!');

// promise
// .then(function(result){
//    console.log('result: ', result);
// })
// .catch(function(error){
//    console.log('error: ', error);
// })

// var promise1 = new Promise(function (resolve){
//    setTimeout(function(){
//       resolve([1]);
//    },2000);
// });

// var promise2 = new Promise(function (resolve){
//    setTimeout(function(){
//       resolve([2, 3]);
//    },5000);
// });

// var promise2 = Promise.reject('Error!');
// Promise.all([promise1, promise2])
//     .then(function(result){
//       //  console.log('result: ', result);
//       var result1 = result[0];
//       var result2 = result[1];

//       // return result1.concat(result2);
//       console.log(result1.concat(result2));
//     })
//     .catch(function(error){
//       console.log('error: ', error);
//     });

/**
 *  1. Let, const
 *  2. Template Listerals
 *  3. Multi-line String
 *  4. Arrow function
 *  5. Classes
 *  6. Defaulf parameter values
 *  7. Destructuring
 *  8. Rest parameters(...)
 *  9. Spread(...)
 *  10. Enhanced object literals
 *  11. Tagged template literal
 *  12. Modules
 */

// 1. Let, const
// 1. Var / Let, Const: Scope, Hosting ngoài khối block ko truy cập đc trong thì đc
// 2. Const / Var, Let: Assignment
// code thuần: Var
// Babel: Const, Let
// Khi định nghĩ biến và không gán lại biến đó: Cost
// Khi định nghĩ biến và gán lại cho nó: Let

// Code block: if else, loop, {}, ...

// if(true){
//    var course = 'Javascript Basic!'
// }

// console.log(course)


// 4. Arrow function

// function logger(log) {
//    console.log(log)
// }

// logger('Message...');


// const logger = function(log){
//    console.log(log);
// }

// logger('Message...');


// const logger = (log) => {
//    console.log(log);
// }

// logger('Message...');

// const logger = log => console.log(log);

// logger('Message...');


// const sum = (a, b) => a + b;

// console.log(sum(2, 2));


// const sum = (a, b) => ({ a: a, b: b})

// console.log(sum(2, 2));

// const course = {
//    name: 'javascript basic!',
//    getName: () => {
//       return this.name;
//    }
// }

// console.log(course.getName());

// const Course = function(name, price) {
//    this.name = name;
//    this.price = price;
// }

// const jsCourse = new Course('Javascript', 1000)

// console.log(jsCourse);


/*
   2. Template Listerals
   3. Multi-line String
 */

   // 2. Template Listerals

   // const course = 'javascript';
   // const description = 'Course name: '
   //     + course;

   // console.log(description)   
   
   // const course = 'javascript';
   // const course2 = 'PHP'
   // const description = `Course name: ${course} ${course2}`;
   // const description = `Course name: ${course} \\ ${course2}`;
   // const description = `Course name: ${course} \n ${course2}`;
   // const description = `Template String noi suy voi \${}`;

   // console.log(description) 


   // 3. Multi-line String

   // const lines ='line 1\n'
   //     +'line 2\n'
   //     +'line 3\n'
   //     +'line 4\n'

   // console.log(lines)

   // const lines = `line 1
   // line 2
   // line 3`;

   // console.log(lines)


   // 5. Classes

   // function Course(name, price){
   //    this.name = name;
   //    this.price = price;

   // this.getName = function(){
   //    return this.name;
   // }

   // const isSuccess = false
   // }

   // class Course {
   //    constructor(name, price){
   //       this.name = name;
   //       this.price = price;
   //    }
   //    getName(){
   //       return this.name;
   //    }

   //    getPrice(){
   //       return this.price;
   //    }
   //    run(){
   //       const isSuccess = false;

   //       if(isSuccess){
   //          console.log('Course has been run successfully');
   //       } else {
   //          console.log('Course has not been run successfully');
   //       }
   //    }
   // }

   // const phpCoures = new Course('PHP', 1000);
   // const jsCoures = new Course('Javascript', 1200);

   // console.log(phpCoures);
   // console.log(jsCoures);


   // 10. Enhanced object literals

   // 1. Định nghĩa key: value cho object
   // 2. Định nghĩa method cho object
   // 3. Định nghĩa key cho object dưới dạng biến

   // var name = 'Javascript'
   // var price = 1000;

   // var course = {
   //    name,
   //    price
   // };

   // console.log(course);

   // var name = 'Javascript'
   // var price = 1000;

   // var course = {
   //    name,
   //    price,
   //    getName () {
   //       return name;
   //    }
   // };

   // console.log(course.getName());

   // var fieldName = 'name';
   // var fieldPrice = 'price';

   // const course = {
   //    [fieldName]: 'Javascript',
   //    [fieldPrice]: 1000
   // };

   // console.log(course);
   

   // 6. Defaulf parameter values

   // function logger(log = 'Gia tri mac dinh!'){
      // if(typeof log === 'undefined'){
      //    log = 'No log provided!';
      // }
   //    console.log(log)
   // }

   // logger(undefined);

   // function logger(log, isAlert = false){
   //    if(isAlert) return alert(log);
   //    console.log(log);
   // }
   // logger('Message...', true);

   // function logger(log, type = 'log'){
   //    console[type](log);
   // }
   // logger('Message...', 'error');


   // 7. Destructuring
   // 8. Rest parameters

   // var array = ['Javascript', 'PHP', 'Ruby'];

   // var [a, b, c] = array;

   // // var a = array[0];
   // // var b = array[1];
   // // var c = array[2];

   // console.log(a, b, c);


   // var array = ['Javascript', 'PHP', 'Ruby'];

   // var [a, ...rest] = array;

   // var a = array[0];
   // var b = array[1];
   // var c = array[2];

   // console.log(a);
   // console.log(rest);

   // var course = {
   //    name: 'Javascript',
   //    price: 1000,
   //    image: 'image-address',
      // children: {
      //    name: 'ReactJS'
      // }
   // };

   // var {name, description = 'Deo co j ca'} = course;

   // console.log(name);
   // console.log(description);

   // var {name, ...rest} = course;
   // var {name: param, children: {name}} = course;
   // console.log(name, price, image);
   // console.log(name);
   // console.log(rest);

   // console.log(param);
   // console.log(name);


   // 9. Spread
   // function logger({ name, price, ...rest}){
      // console.log(param);
      // console.log(obj);
   //    console.log(name);
   //    console.log(price);
   //    console.log(rest);
   // }

   // logger({
   //    name: 'Javascript',
   //    price: 1000,
   //    descripttion: 'Description constructor'
   // });


   // var array = ['Javascript', 'PHP', 'RUBY'];

   // var array2 = ['React', 'Dart'];

   // var array3 = [...array2,...array];

   // console.log(array3);


   // var object1 = {
   //    name: 'Javascript'
   // };

   // var object2 = {
   //    price: 1000
   // };

   // var object3 = {...object1,...object2};

   // console.log(object3);

   // var defaultConfig = {
   //    api: 'https://Muong-Thanh-Tang2',
   //    apiVersion: 'v1',
   //    other: 'other',
   // }

   // var exarciseConfig = {
   //    ...defaultConfig,
   //    api: 'https://Muong-Thanh-Tang4'
   // }

   // console.log(exarciseConfig);

   // var array = ['JavaScript', 'PHP', 'Ruby', 'Java'];

   // function logger(a, b, c){
   //    console.log(a, b, c);
   // }

   // function logger(...rest){
   //    for(var i = 0; i < rest.length; i++){
   //       console.log(rest[i]);
   //    }
   // }

   // logger(...array);

   // 11. Tagged template literal

   // function highlight([first, ...strings], ...value){
      // console.log(rest);
      // console.log('first: ', first);
      // console.log('String: ', strings);
      // console.log('Value: ', value);

   //    return value.reduce(
   //       (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
   //       [first]
   //    )
   //    .join('');
   // }



//    var brand = 'F8';
//    var course = 'Javascript';

//   const html =  highlight`Hoc lap trinh ${course} tai ${brand}!`;

//   console.log(html);



   // 12. Modules: Import / Export

   // import logger from './logger/logger.js';
   // import { logger2 } from './logger/index.js';
   // import { TYPE_ERROR, TYPE_LOG, TYPE_WARN } from './constants.js';
   // import * as constants from './constants.js';

   // console.log(constants);
   // console.log(logger)
   // logger2('Test message...',constants.TYPE_ERROR);


   // 13. Optional chaining (?.)

   // const obj = {
   //    name: 'Alice',
   //    cat: {
   //       name: 'Dinah',
   //       cat2: {
   //          name: 'Dinah 2',
   //          cat3: {
   //             name: 'Dinah 3'
   //          }
   //       }
   //    }
   // };

   // console.log(obj.cat.cat2.cat3.name);


   // if ( obj?.cat?.cat2?.cat3) {
   //    console.log(obj.cat.cat2.cat3.name);
   // }

   // // console.log(obj.cat.name)

   // const obj = {
      // getName(value){
      //    console.log(value);
      // }
   // }
   // obj.getName?.(123);


   // Promise example tiếp tục
   // var users = [
   //    {
   //       id: 1,
   //       name: 'Dang Diep',
   //    },
   //    {
   //       id: 2,
   //       name: 'Van Hoa'
   //    },
   //    {
   //       id: 3,
   //       name: 'Hung Dam'
   //    },
   // ];

   // var comments = [
   //    {
   //       id: 1,
   //       user_id: 1,
   //       content: 'Tao cung chua lam'
   //    },
   //    {
   //       id: 2,
   //       user_id: 2,
   //       content: 'Hoi xem ngoc lam chua'
   //    },
   //    {
   //       id: 3,
   //       user_id: 1,
   //       content: 'OK de tao hoi'
   //    },
   // ]

   // 1. Lấy comments
   // 2. Từ comments Lấy ra user_id
   // 3. Từ user_id lấy ra user tương ứng

   // Fake API
   // 1. Array
   // 2. function, callback
   // 3. Promise
   // 4. DOM

   // function getComments() {
   //    return new Promise(function(resolve){
   //       setTimeout(function(){
   //          resolve(comments);
   //       }, 1000);
   //    });
   // }

   // function getUsersByIds(userIds){
   //    return new Promise(function(resolve) {
   //       var result = users.filter(function(user){
   //          return userIds.includes(user.id);
   //       });
   //       setTimeout(function() {
   //          resolve(result);
   //       }, 1000);
   //    });
   // }

   // getUsersByIds ([1, 2])
   //    .then(function(users) {
   //       console.log(users);
   //    });

   // getComments()
   // .then(function(comments) {
   //    // console.log(comments);
   //    var userIds = comments.map(function(comment) {
   //       return comment.user_id;
   //    });

   //    return getUsersByIds (userIds)
   //       .then(function(users) {
   //          // console.log(users);
   //          return {
   //             users: users,
   //             comments: comments,
   //          };
   //       });
   // })
   // .then(function(data) {
   //    // console.log(data);
   //    var commentBlock = document.getElementById('Comment-block');

   //    var html = '';
   //    data.comments.forEach(function(comment) {
   //       var user = data.users.find(function(user) {
   //          return user.id === comment.user_id;
   //       });
   //       html += `<li>${user.name}: ${comment.content}</li>`;
   //    });
   //    commentBlock.innerHTML = html;
   // });



   //4. fetch

   //1. front-end: Xây dựng giao diện
   // người dùng 

   //2. Back-end: Xây dựng logic xử lý
   // + Cơ sở dữ liệu 

   // API => Application programing interface: Cổng giao tiếp giữa các phần mềm

   // Backend (OK) -> API (URL) -> Fetch -> JSON
   // -> JSON.parse -> Javascript types
   // -> Render ra dao diện với HTML

   // var postAPI = 'https://jsonplaceholder.typicode.com/posts';


   // streaming API
   // fetch(postAPI)
   //    .then(function(response){
   //       return response.json();
   //       // Json.parse: JSON -> JavaScript types
   //    })
   //    .then(function(posts) {
   //       var htmls = posts.map(function(post){
   //          return`<li>
   //             <h2>${post.title}</h2>
   //             <p>${post.body}</p>
   //          </li>`;
   //       });

   //       var html = htmls.join('');
   //       document.getElementById('post-block').innerHTML = html;
   //    })
   //    .catch(function(error){
   //       alert('Có Lỗi!');
   //    })


      // face JSON server: API Server
      // CRUD
      //    - Create: Tạo mới -> POST -> body -> from-urlcode
      //    - Read: Lấy dữ liệu -> GET -> lấy ra tất cả
      //    - Update: Chỉnh sửa dữ liệu -> PUT / PATCH -> chuyền id lên -> rồi chọn body -> rồi chọn from-urlcode 
      //    - Delete: Xóa dữ liệu ->DELETE -> http chuyền id của nó vào rồi xóa
      // Postmane 
      // var courseAPI = 'https://jsonplaceholder.typicode.com';
      // fetch(courseAPI)
      // .then(function(response) {
      //    return response.json();
      // })
      // .then(function(courses) {
      //    console.log(courses)
      // });


      var courseAPI = 'http://localhost:3000....';


      function start(){
         // getCourses(function(courses){
         //    renderCourses(courses);
         // });
         getCourses(renderCourses);

         handleCreateForm();
      }

      start();

      // functions

      function getCourses(callback){
         fetch(courseAPI)
             .then(function(response) {
                 return response.json();
              })
             .then(callback);
      }

      function createCourse(data, callback){
         var options = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
         };
         fetch(courseAPI, options)
            .then(function(response) {
               response.json();
            })
            .then(callback);
      }

      function handleDeleteCourse(id){
         var options = {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json'
            },
         };
         fetch(courseAPI+ '/' + id, options)
            .then(function(response) {
               response.json();
            })
            // .then(callback);
            .then(function() {
               var courseItem = document.querySelector('.course-item-' + id);
               if(courseItem) {
                  courseItem.remove();
               }
            });
      }

      function editFormCourse(id, data,callback) {
         var options = {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
         };
         fetch(courseAPI+ '/' + id, options)
            .then(function(response) {
               response.json();
            })
            .then(callback);
      }

      function renderCourses(courses){
         var listCoursesBlock = document.querySelector('list-courses');

         var html = courses.map(function(course){
            return `
            <li class="course-item-${course.id}">
                <h4>${course.title}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xoa</button>
                <h2 class="name-${course.id}">${course.name}</h2>
                <p class="description-${course.id}">${course.description}</p>
             </li>
            `;
         });
         listCoursesBlock.innerHTML = html.join('');
      }

      function handleCreateForm(){
         var createBtn = document.querySelector('#create');

         createBtn.onclick = function() {
            var name = document.querySelector('input[name="name"]').nodeValue;
            var description = document.querySelector('input[name="description"]').nodeValue;

            var formData = {
               name: name,
               description: description
            };

            createCourse(formData, function() {
               getCourses(renderCourses);
            });
         }
      }

      function handleEditFormCourse(id){
         // lấy class cho từng phần tử name và descriptio
         var name = document.querySelector(".name-" + id);
         var description = document.querySelector(".description-" + id);
         var btnEdit = document.querySelector('#create');

         // Lấy ra ô input
         var nameInput = document.querySelector('input[name="name"]');
         var descriptionInput = document.querySelector('input[name="description"]');

         if(name&&description){ //Nếu có
            nameInput.value = name.innerHTML; //gán ô input = giá trị của name
            descriptionInput.value = description.innerText;
            btnEdit.innerText = "Save";
         }

         btnEdit.onclick = function (){
            var formData = {
               name: nameInput.value,
               description: descriptionInput.value
            }
            editFormCourse(id, formData, function() {
               getCourses(renderCourses);
            });

            // edit xong thì trả về lại form
            btnEdit.innerText = "Create";
            nameInput.value = "";
            descriptionInput.value="";
            handleCreateForm()
         }
      }

   





   


















   



