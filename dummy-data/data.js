export const CONTENT =[
    {
        "id": 1,
        "name": "Introducción a Python",
		"img": "https://cdn-icons-png.flaticon.com/512/263/263066.png",
        "subtopics": [
            {id: 1,
                name: "Introducción",
                time: "5 min",
                info: "Python es uno de los lenguajes de programación más populares actualmente y es INTERPRETADO, es decir nosotros escribimos nuestro programa y Python lo interpreta y regresa un resultado.\r\nPython es un lenguaje MULTIPROPÓSITO, es decir, podemos crear códigos tanto para diferentes medios, ya sea Web, servidores, escritorio, aplicaciones web, entre otros. Lenguajes como PHP solo sirven para Web y es muy bueno para eso, pero no funciona para otro tipo de medios.\r\nPython es un lenguaje MULTIPARADIGMA, lo que significa que podemos usar varios paradigmas de programación, por ejemplo: Estructurada, Orientado a Objetos, Imperativa, es decir que podemos programar de la forma que más nos guste.\r\nPython es un lenguaje MULTIPLATAFORMA Y DE SOFTWARE LIBRE, lo que significa que lo podemos utilizar tanto en Windows, Linux, Mac o cualquier Sistema Operativo.\r\n",
                image: "",
            }
        ]
    },
    {
        "id": 2,
        "name": "Primeros Pasos en Python",
		"img": "https://cdn-icons-png.flaticon.com/512/263/263094.png",
        "subtopics": [
            {id: 1,
                name: "Comentarios",
                time: " min",
                info: "Los comentarios dentro de nuestro código son de gran utilidad para poder tener una estructura y para poder realizar cambios a futuro, son una buena práctica y ayudan al entendimiento del código.\r\nContamos con 2 formas para poder realizar un comentario dentro de nuestro código en Python:\r\n\r\n1.- Comentarios de una sola línea, el cual se realiza poniendo primero el signo de gato.\r\n2.- Comentarios de varias líneas, se realizan utilizando 3 comillas simples al inicio y final del comentario.",
                image: ""
            },
            {id: 2,
                name: "Sangría",
                time: " min",
                info: "La sangría se refiere a los espacios al comienzo de una línea de código.\r\nMientras que en otros lenguajes de programación la sangría en el código es solo para facilitar la lectura, la sangría en Python es muy importante.\r\nPython usa sangría para indicar un bloque de código, si omites la sangría Python dará un error.\r\nLa cantidad de espacios depende de usted como programador, el uso más común es cuatro, pero tiene que ser al menos uno.\r\n",
                image: ""
            },
            {id: 3,
                name: "Mostrar datos en Pantalla",
                time: " min",
                info: "Los comentarios dentro de nuestro código son de gran utilidad para poder tener una estructura y para poder realizar cambios a futuro, son una buena práctica y ayudan al entendimiento del código.\r\nContamos con 2 formas para poder realizar un comentario dentro de nuestro código en Python:\r\n\r\n1.- Comentarios de una sola línea, el cual se realiza poniendo primero el signo de gato.\r\n2.- Comentarios de varias líneas, se realizan utilizando 3 comillas simples al inicio y final del comentario.",
                image: ""
            },
            {id: 4,
                name: "Lectura de datos por teclado",
                time: " min",
                info: "la función print() nos ayuda a mostrar desde texto, hasta los valores guardados en una variable, al mismo tiempo podemos concatenar texto y el valor de una variable, separando ambos con una coma.",
                image: ""
            },
            {id: 5,
                name: "Operadores Aritméticos",
                time: " min",
                info: "Para trabajar con Python podemos hacer uso de los Operadores Aritméticos, tales como:\r\n*  Suma: 5 + 5\r\n* Resta: 5 - 5\r\n* Multiplicación: 5 * 5\r\n* División (con decimales): 5 / 5\r\n* División (sin decimales): 21 // 5\r\n* Resto (modulo) de la división: 21 % 5\r\n- Potencia: 2 ** 2\r\n* Raíz cuadrada: math.sqrt(9)\r\nComo observamos en la mayoría de los operadores son similares a como los usaríamos en una calculadora, donde vemos un cambio es a partir de la División sin decimales.\r\n\r\nPython respeta la jerarquía de operaciones, la cual es la siguiente:\r\n\r\n1.- Paréntesis\r\n2.- Exponentes o raíces\r\n3.- Multiplicaciones\r\n4.- Divisiones\r\n5.- Adiciones y sustracciones\r\n\r\nDebes tomarlo en cuenta al realizar operaciones complejas o en una sola línea, así no tendrás errores en tus resultados\r\n",
                image: ""
            },
            {id: 6,
                name: "Variables",
                time: " min",
                info: "Una variable es un lugar en memoria (una especie de caja) en el que podemos guardar objetos (números, texto, etc). Esta variable posee un identificador o nombre con el cual podemos llamarla más tarde cuando la necesitemos.\r\nPara definir una variable dentro de Python es tan sencillo como poner el nombre de la variable, seguida de un signo igual y posteriormente el valor que se le va a asignar.\r\nEn Python no es necesario indicar de que tipo de dato es la variable (String, Entero, Flotante, etc.), las variables no están limitadas por un tipo de dato.\r\nReglas en el uso de identificadores de variable\r\nReglas en el uso de identificadores de variable\r\n* No pueden empezar con un número.\r\n* Deben estar en minúsculas\r\n* Para separar las palabras usamos el guion bajo: _\r\nx = 'Hello World' STR - Cadena\r\nx = 20 INT - Entero\r\nx = 20.5\tFloat - Flotante\r\nx = ['apple', 'banana', 'cherry']List - lista\t\r\nx = ('apple', 'banana', 'cherry') tuple - tupla\r\nx = range(6) Range es un tipo de dato que representa una secuencia de números inmutable.\r\nx = {'name' : 'John', 'age' : 36} Diccionario\t\r\nx = {'apple', 'banana', 'cherry'} set  - Conjunto, se pueden añadir\r\nx = frozenset({'apple', 'banana', 'cherry'}) frozenset - Conjunto sin añadir\r\nx = True bool - Booleano\r\nPara saber el tipo de dato que estamos usando lo hacemos mediante el comando type().",
                image: ""
            },
            {id: 7,
                name: "Trabajar con cadenas",
                time: " min",
                info: "En Python podemos trabajar con cadenas de texto, las cuales utilizamos dentro de una variable y para saber que son de tipo Str ponemos el texto entre comillas simples o dobles, de ambas formas es correcto.\r\nTambién podemos concatenar estas variables sumándolas, puede sonar raro, pero te mostramos como se hace.\r\nPor otra parte, si intentamos sumar un texto con algún otro tipo de variable nos mostrará un error.",
                image: ""
            },
            {id: 8,
                name: "Convertir tipo de datos",
                time: " min",
                info: "Al recibir valores por teclado mediante una función input(), Python considera la variable de tipo str(), es por eso que en ocasiones se necesita cambiar el tipo de dato, como al ingresar un número entero.\r\nPara cambiar el tipo de dato es tan simple como poner el tipo de dato seguido de paréntesis y dentro de los paréntesis el valor o variable que se desea convertir.\r\nSi desea especificar el tipo de datos, puede utilizar las siguientes funciones de construcción:\r\nx = str('Hello World')\t\t\r\nx = int(20)\t\t\r\nx = float(20.5)\t\t\t\r\nx = list(('apple', 'banana', 'cherry'))\t\t\r\nx = tuple(('apple', 'banana', 'cherry'))\t\t\r\nx = range(6)\t\t\r\nx = dict(name='John', age=36)\t\r\nx = set(('apple', 'banana', 'cherry'))\r\n",
                image: ""
            }
        ]
    },
    {
        "id": 3,
        "name": "Condicionales en Python",
		"img": "https://cdn-icons-png.flaticon.com/512/4696/4696519.png",
        "subtopics": [
            {id: 1,
                name:"Operadores de comparación",
                time: " min",
                info: "La vida se basa en tomar las decisiones correctas, y nuestros programas no están exentos de ello. Aquí es donde las sentencias condicionales entran en juego. Nos ayudan a controlar esa toma de decisiones utilizando la lógica en nuestros programas. Las sentencias condicionales en Python son: if(): , elif(): y else(): . Pero ¿qué hace una sentencia condicional? Simplemente comprueba si una declaración (test) es verdadera o falsa, y en base a eso se lleva a cabo una acción.\r\nPara realizar una toma de decisiones es necesario comparar 2 o más valores dentro de las funciones if(), elif() y else(), aquí es donde entran los Operadores de Comparación, quienes se encargan de comparar 2 valores:\r\nLos Operadores son\r\n==\tigual\tx == y\t\r\n!=\tdiferente de\tx != y\t\r\n>\tMayor que\tx > y\t\r\n<\tMenor que\tx < y\t\r\n>=\tMayor o igual que\tx >= y\t\r\n<=\tMenor o igual que\tx <= y\r\n",
                image:""
            },
            {id: 2,
                name:"Operadores Lógicos",
                time: " min",
                info: "En ocasiones es necesario comparar no solo de valores, si no también comparar sentencias condicionales, esto con el fin de validar si uno o más valores cumplen con ciertas condiciones, aquí es donde entran los Operadores Lógicos.\r\nLos operadores lógicos se utilizan para combinar sentencias condicionales:\r\nand \tRetorna True si la sentencia en verdadera\tx < 5 and  x < 10\t\r\nor\tRetorna True si una de las 2sentencias es verdadera\tx < 5 or x < 4\t\r\nnot\tNiega el resultado, Retorna False si el resultado es verdadero\tnot(x < 5 and x < 10)\r\n",
                image:""
            },
            {id: 3,
                name:"Función IF()",
                time: " min",
                info: "La función if() nos ayuda para evaluar cierta condición proporcionada, si ésta es verdadera entra dentro de la función y continua el código su proceso.\r\n\r\nPor ejemplo, para saber si una persona es mayor de edad, podemos hacer uso de la función if().\r\n\r\nEn este caso si la edad ingresada es mayor a 18 te mostrara un texto indicándote que eres mayor de edad, sin embargo, si ingresas números menores a 18 no pasara nada. Otro caso que no se esta tomando en cuenta es, ¿Qué pasará si ingreso el número 18?, al tener 18 años ya eres mayor de edad, pero aun así nuestro código no te mencionará que ya lo eres, para eso es necesario ajustarlo y cambiar nuestro Operador de un (>, Mayor que) a un (>=, Mayor o igual que), de esta forma también incluiremos el número 18 para que entre en la función.",
                image:""
            },
            {id: 4,
                name:"Función ELIF()",
                time: " min",
                info: "La función elif() es la forma de Python de decir 'si la o las condiciones anteriores no fueron ciertas, intente esta condición'. Esta función es equivalente a una función Case de otros lenguajes como C++ o C#, ya que te permite elegir entre varias opciones o condiciones.\r\nSiguiendo el ejemplo anterior sobre la mayoría de edad también podemos arreglar nuestro código de la siguiente forma usando la función elif(). \r\n\r\nAquí observamos como tenemos 2 opciones, la primera nos indica que si tienes entre 18 y 21 años eres mayor de edad en México pero no en USA, en caso de no ser así y tienes 21 o más eres mayor de edad en ambos países. Por otro lado si ingresan un valor igual o menor a cero, se manda un mensaje indicando que no es una edad valida.",
                image:""
            },
            {id: 5,
                name:"Función ELSE()",
                time: " min",
                info: "La función else() captura cualquier cosa que no esté capturada por las condiciones validadas en las funciones if() o elif():\r\nRetomando el ejercicio de la edad, solo nos faltaba contemplar aquellos valores que se encontraban entre 1 y 17 años, que serían considerados menores de edad, para estos caso utilizaremos la función else() de la siguiente forma:\r\n",
                image:""
            }
        ]
    },
    {
        "id": 4,
        "name": "Ciclos en Python",
		"img": "https://cdn-icons-png.flaticon.com/512/263/263110.png",
        "subtopics": [
            {id: 1,
                name: "Ciclo While en Python",
                time: " min",
                info: "Un ciclo en Python o bucle en Python (como prefieras llamarlos) te permite repetir una o varias instrucciones cuantas veces lo necesitemos, por ejemplo, si quisiéramos escribir los números del uno al cien no tendría sentido escribir cien líneas de código mostrando un número en cada una, para eso y para varias cosas más (que veremos enseguida) es útil un ciclo. Un ciclo nos ayuda a llevar a cabo una tarea repetitiva en una cantidad de líneas muy pequeña y de forma  prácticamente automática (y muy rápida).\r\nExisten diferentes tipos de ciclos o bucles en Python, cada uno tiene una utilidad para casos específicos y depende de nuestra habilidad y conocimientos poder determinar en qué momento es bueno usar alguno de ellos. Tenemos entonces a nuestra disposición los siguientes tipos de ciclos en Python:\r\n*Ciclo while en Python\r\n*Ciclo for en Python\r\n\r\nCiclo while en Python\r\nCon el ciclo while, no conoces el cuándo sino el cómo. Es decir, conocer la condición bajo la cual se va a detener el ciclo, pero no sabes cuántas iteraciones tomará eso, ni cuánto tiempo. Por ello se los llama ciclos indeterminados.\r\n\r\n¿Cómo funciona un Ciclo While en Python?\r\nPara comprender mejor el funcionamiento del ciclo while, pongamos un buen ejemplo, imaginemos que, por algún motivo, queremos pedirle a un usuario una serie de números cualquiera y que solo dejaremos de hacerlo cuando el usuario ingrese el número 0. Como vemos, en este caso, no sabemos cuántas veces pedir un valor, solo sabemos en qué momento dejar de pedir uno, pues no tenemos ni idea de cuándo al usuario se le va a ocurrir ingresar un cero. El ciclo while nos permite ejecutar una acción de forma 'infinita' hasta que se cumpla alguna condición específica, en nuestro caso sería que el numero sea 0.\r\n\r\nSintaxis del Ciclo While en Python:",
                image: ""
            },
            {id: 2,
                name: "La instrucción Break()",
                time: " min",
                info: "Esta instrucción permitirá 'romper' o básicamente detener cualquier ciclo en el que se encuentre una vez es ejecutada.\r\nComo puedes ver, al usar while(True), nos aseguramos que el ciclo se ejecute por siempre. Sin embargo, al poner un llamado a break al interior, el cual se ejecuta SOLO cuando el número ingresado en cero, nos aseguramos de que se cierre el ciclo en ese preciso momento.",
                image: ""
            },
            {id: 3,
                name: "Ciclo For() en Python",
                time: " min",
                info: "Ciclo for en Python\r\nUn ciclo for en Python es una estructura iterativa para ejecutar un mismo segmento de código una cantidad de veces deseada y conocida. Pues necesitamos conoces previamente un valor de inicio, un tamaño de paso y un valor final para el ciclo. Ya veremos los detalles.\r\n\r\n\r\n\r\n¿Cómo funciona un Ciclo For en Python?\r\nPara comprender mejor el funcionamiento del ciclo for, solucionemos un pequeño ejercicio práctico. Supongamos que queremos mostrar los números pares (múltiplos de dos ) entre el 500 y el 1000. Con esta información inmediatamente podemos determinar que por medio de un ciclo debemos mostrar una serie de números como la siguiente: 500 502 504 506 ... 600 ... 852 ... 906 ... 980 .. 1000. Tenemos entonces todo lo necesario para nuestro ciclo. Tenemos un valor inicial que sería el 500, un valor final (1000) y tenemos un tamaño de paso que es 2 (los números pares). Estamos ahora en capacidad de determinar los componentes esenciales para un ciclo for.\r\nSintaxis del Ciclo For en Python:\r\nComo puedes ver, la magia está en la función range() de Python, pues con esta definimos desde dónde y hasta dónde irá el ciclo, además del tamaño del paso. De hecho, la función range(), solo necesita como mínimo el límite superior, generando así un rango de números desde cero hasta ese límite de uno en uno. Finalmente, esta función omite el último valor, de ese modo, el ciclo va de valor_inicial hasta valor_final - 1 (hay que quitarle uno al valor_final).\r\n",
                image: ""
            }
        ]
    }
]