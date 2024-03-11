  // Komentar 1 Baris
  alert('Hallo World!');console.log('statement baris kedua');
  /*
  Komentar Multi 
  Baris
  */
  console.log('statement 1 baris');

  // Menggunakan Variabel
  // Variabel Var
  
  var fullName = "Aan";
  fullName = "Lionel Messi";
  fullName = " Cristiano Ronaldo";
  document.write(fullName);
  document.write('<br>');
  document.write(fullName);
  document.write('<br>');
  document.write(fullName);
  document.write('<br>');
  document.write(fullName);
  document.write('<br>');
  document.write(fullName);
  document.write('<br>');
  document.write(fullName);
  document.write('<br>');
  
  // Variabel Let
  let fullName_let = "Lionel Messi";
  fullName_let = "Joko";
  document.write(fullName_let);
  document.write('<br>');
  
  // Variabel Const
  let fullName_const = "Lionel Messi";
  fullName_const = "Joko";
  document.write(fullName_const);
  document.write('<br>');
  
  //Masalah dari penggunaan var
  console.log('==Pake Var==');
  var x = 10;
  if(true){
      var x = 20;
      console.log("Nilai x di dalam blok:", x); //Output : 20
  }
  console.log("Nilai x di luar blok:", x); //Output : 20
  
  //Penyelesaian dengan menggunakan let
  console.log('==Pake Let==');
  let x_let = 10;
  if(true){
      let x_let = 20;
      console.log("Nilai x di dalam blok:", x_let); //Output : 20
  }
  console.log("Nilai x di luar blok:", x_let); //Output : 10
  
  //Tipe Data
  console.log('==Tipe Data Number==');
  let bulat = 25;
  let desimal = 25.2;

  document.write(bulat)
  document.write('<br>')
  document.write(desimal)
  document.write('<br>')
  document.write("Hasil Penjumlahan = ")
  document.write(desimal+bulat)

  document.write('<br>');
  let string = 'a';

  document.writeln(bulat/0) //Output Infinity
  document.writeln('<br>')
  document.writeln(string/5) //Output Nan
  
  //Tipe Data Big Int
  let bulat_bigint = 12312321432423423534534534534523424234234n;
  document.writeln('<br>')
  document.writeln(bulat_bigint) 
  
  //Tipe Data String
  //Tipe Data String
  let text = "arkatama"
  document.writeln('<br>')
  document.writeln(text) 
  
  //Tipe Data Boolean
  let admin = true;
  let perbandingan = 15 > 9 ;
  document.writeln('<br>')
  document.writeln(perbandingan) 
  document.writeln('<br>')
  document.writeln(admin) 

  //Tipe Data Null
  let admin_null = null;
  document.writeln('<br>')
  document.writeln(admin_null) 
  
  //Tipe Data Symbol
  let employee = Symbol('Joko');
  console.log('==Tipe Data Symbol==');
  console.log(employee);
  console.log(employee.description);

  //Tipe Data Object
  let employees = {
      name: "jhon",
      age: 30,
      job: "web developer",
      isMarried: false,
  }
  document.writeln('<br>')
  document.write(`My Name is ${employees.name} and he is ${employees.age} years old`);
  
  //Type Conversion
  //Type Conversion : String
  let value = false;
  let strings = String(value);
  alert(typeof value)
  document.writeln('<br>')
  document.writeln(strings)
  
  //Type Conversion : Number
  let str = "123";
  let nbr = Number(str);
  alert(typeof nbr)
  document.writeln('<br>')
  document.writeln(nbr)
  
  //Type Conversion : Boolean
  alert(Boolean(0));
  alert(Boolean(1));
  document.writeln('<br>')
  document.writeln(Boolean(0))
  document.writeln('<br>')
  document.writeln(Boolean(1))

  //Operator
  let a = 3;
  let b = 5;
  console.log('== Operator ==');
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a ** b);
  console.log(a / b);
  console.log(a % b);

  //Operator Perbandingan
  let ac = 3;
  let bc = 5;
  console.log('== Operator Perbandingan ==');
  console.log(ac == bc);
  console.log(ac < bc);
  console.log(ac > bc);
  console.log(ac != bc);
  
  let al = 3;
  let bl = 5;
  console.log('== Operator Logika ==');
  console.log(al && bl);
  console.log(al || bl);
  console.log(!al);
  
  
  //Operator Bitwise
  let ab = 3;
  let bb = 5;
  console.log('== Operator Bitwise ==');
  console.log(ab & bb);
  console.log(ab | bb);
  console.log(ab ^ bb);
  console.log(~ab);
  
  //Operator Ternary
  console.log('== Operator Ternary ==');
  let at = 3;
  let bt = 5;
  console.log(at == bt ? 'sama' : 'tidak sama');

  //Pop-Up
  //Alert
  alert('Hallo, Selamat Datang di Arkatama');

  //Prompt
  let string_prompt = prompt("Apakah kamu mau makan malam denganku ?");
  alert('Jawaban Anda ' + string_prompt );
  
  //Confirm
  let string_confirm = confirm("Apakah kamu mau makan malam denganku ?");
  string_confirm ? alert('Jawaban Anda mau') : alert('Jawaban Anda tidak mau');

  //Percabangan
  //Percabangan : IF
  let string_if = confirm("Apakah kamu mau makan malam denganku ?");

  if (string_if){
      alert('Jawaban Anda mau')
  }

  //Percabangan : IF - Else
  let string_if_else = confirm("Apakah kamu mau makan malam denganku ?");
  
  if (string_if_else){
      alert('Jawaban Anda mau')
  }else{
      alert('Jawaban Anda tidak mau')
  }
  
  //Percabangan : Else If
  let string_elseif = prompt("1 + 1 ?");
  if (string_elseif = 2){
      alert('Jawaban Anda Betul')
  }else if(string_elseif > 2){
      alert('Jawaban anda Kelebihan')
  }else if(string_elseif < 2){
      alert('Jawaban anda Kurang')
  }else{
      alert('Jawaban Anda Salah')
  }

  //Switch
  let string_switch = "blue";

  switch(string_switch){
      case "red":
          alert('I Love Red!')
          break;

      case "blue":
          alert('I Love Blue!')
          break;

      default:
              alert('I doont know what color  is!')
              break;
  }

  //Perulangan
  // For Loop
  for (let i = 1; i < 5; i++ ){
      document.writeln(i);
      document.writeln('<br>');
  }
  
  //While Loop
  let b_while_loop = 1;
  while (b_while_loop<5){
      document.writeln(b_while_loop);
      document.writeln('<br>');    
      b_while_loop++;
  }

  //Do - While Loop
  let i = 1;

  document.writeln('Perulangan do while');
  document.writeln("<br>");
  do{
      document.writeln(i);
      document.writeln("<br>");
      i++;
  }while(i<5);
  
  
  //Break
  document.writeln('Perulangan for');
  document.writeln("<br>");
  for (let a = 1; a < 5; a++ ){
      if(a == 3){
          break;
      }
      document.writeln(a);
      document.writeln('<br>');
  }

  //Continue
  document.writeln('Perulangan for');
  document.writeln("<br>");
  for (let a = 1; a < 5; a++ ){
      if(a == 3){
          continue;
      }
      document.writeln(a);
      document.writeln('<br>');
  }