//пример 1 let a = 1, b = 1, c, d; c = ++a; alert(c); // ответ: 2 

// Ответ: 2 , т.к. инкремент имеет префиксную форму и в переменную С записывается 2 ( т.е a+1)

//пример 2 d = b++; alert(d); //ответ: 1 

// Ответ: 1 , т.к. инкремент имеет постфиксную форму и в переменную d Записывается 1 (т.е b) 


//пример 3 c = 2 + ++a; alert(c); //ответ: 5 

// Ответ: 5 , т.к. инкремент имеет префиксную форму и в переменную a Записывается 3 (т.е 2 ( в результате первого шага) + 1 ) 

//пример 4 d = 2 + b++; alert(d); //ответ: 4 alert(a); //3 alert(b); //3

// Ответ: alert(d); //ответ: 4  , т.к. инкремент имеет постфиксную форму и в переменную b Записывается 2 (т.е b c предыдущего шага ) .

// alert(a); //3 , т.к в переменную было записано 3 из примера "3"
// alert(b); //3, т.к. инкремент имеет постфиксную форму и в переменную записалось b+1 из начала примера.


2