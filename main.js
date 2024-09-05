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

   //   console.log(typeof age) Bai 20


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
   // console.log(Array.isArray(new Array(1,2))) Bai 21

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

   var languages = [
      'javascrpipt',
      'PHP',
      'Ruby'
   ];

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
   languages.splice(1, 1)
   console.log(languages)

   
   


   



