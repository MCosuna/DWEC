//----------------1. The Fortune Teller-----------------------------------------------//
 
function tellFortune(children, name, geo, work){
    for (let i = 0; i <= 3; i++) {
        var children = prompt("Number of children: ");
        var name = prompt("name of your partner: ");
        var geo = prompt("Geographic location: ");
       var work = prompt("Enter your work: ");
       
    }   
    if(children && name && geo && work){
        return alert("Has not found any value");
    }
       return document.write("ohhh, you will have"+children+"and will meet "+name+"oh and you will living in "+geo+",ey and work..."+work);
    }
// tellFortune(children, name, geo, work);

//////-----------2. The Age Calculator Forgot how old you are? ---------------------//
    
function ageCalculator(birth,year){
    var birth = prompt("Type your birth...");
    var year = prompt("Type current year...");
    var age=birth-year;
    var age=age*-1;
    if((birth=="")||(year=="")){
        alert("¡has not found any value!");
    }else{
        alert("¡Ey!, You have "+age);
    }
}

//ageCalculator(1995,2019);

//--------------------3. The Lifetime Supply Calculator----------------------------------//
function calculateSupply(age, numPD){
    var maxAge = 100;
    var age = prompt("Type your age...");
    var numPD = prompt("Type amount per day...");
    var total = (numPD*365)*(maxAge-age);
    if(age==""){
        alert("¡has not found any value!");
    }else {
        alert("You will need "+total+"vfor the age"+maxAge);
    }
}
//calculateSupply(24,56);

//----------4. The Geometrizer--------------REVISAR A PARTIR DE AQUÍ--------------------------------------------//
function geometrizer(radio){
    var radio = 5;
    var area = Math.PI * radio * radio;
    var circunferencia = Math.PI * 2 * radio;

    alert('<br>The circumfrence is ' + circunferencia + ' m.');
    alert('<br>The area is ' + area +' m2.');
}
geometrizer(radio);

//------------5. The Temperature Converter-----------------------------------------------//
function celsiusToFarenheit(f){
    var celsius = 20;
    var celsiusToFarenheit = celsius * 9 / 5 + 32;
    
    var farenheit = 68;
    var farenheiToCelsius = (farenheit - 32) * 5 / 9;
    
    alert(<br/>+' + celsius + '+'º Celsius a Farenheit: ' + celsiusToFarenheit);
    alert('<br/>' + farenheit + 'º Farenheit a Celsius: '+ farenheitToCelsius);
 
}
