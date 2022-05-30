export const CONTENT =[
    {
        "id": 1,
        "name": "Introducción a Python",
		"img": "https://cdn-icons-png.flaticon.com/512/263/263066.png",
        "subtopics": [
            {id: 1,
                name: "Introducción",
                time: "4 min",
                info: "Python es uno de los lenguajes de programación más populares actualmente y es INTERPRETADO, es decir nosotros escribimos nuestro programa y Python lo interpreta y regresa un resultado.\r\nPython es un lenguaje MULTIPROPÓSITO, es decir, podemos crear códigos tanto para diferentes medios, ya sea Web, servidores, escritorio, aplicaciones web, entre otros. Lenguajes como PHP solo sirven para Web y es muy bueno para eso, pero no funciona para otro tipo de medios.\r\nPython es un lenguaje MULTIPARADIGMA, lo que significa que podemos usar varios paradigmas de programación, por ejemplo: Estructurada, Orientado a Objetos, Imperativa, es decir que podemos programar de la forma que más nos guste.\r\nPython es un lenguaje MULTIPLATAFORMA Y DE SOFTWARE LIBRE, lo que significa que lo podemos utilizar tanto en Windows, Linux, Mac o cualquier Sistema Operativo.\r\n",
                image: require("../assets/Python.png"),
                questions: [
                    {
                        question: "¿Qué tipo de lenguaje de programación es Python?.",
                        answers: [
                            {
                                score: 0,
                                text: "Codificado."
                            },
                            {
                                score: 0,
                                text: "Compilado."
                            },
                            {
                                score: 1,
                                text: "Interpretado."
                            },
                            {
                                score: 0,
                                text: "Avanzado."
                            }
                        ]
                    },
                    {
                        question: "¿Qué quiere decir MULTIPARADIGMA?.",
                        answers: [
                            {
                                score: 1,
                                text: "Que se puede programar con el paradigma que más le guste."
                            },
                            {
                                score: 0,
                                text: "Que sólo se puede programar con un solo paradigma."
                            },
                            {
                                score: 0,
                                text: "Que es un lenguaje interpretado."
                            },
                            {
                                score: 0,
                                text: "Qué sirve para más de un propósito."
                            }
                        ]
                    },
                    {
                        question: "¿Qué quiere decir MULTIPLATAFORMA?.",
                        answers: [
                            {
                                score: 0,
                                text: "Que solo se puede usar en Windows y iOS."
                            },
                            {
                                score: 0,
                                text: "Que puede cambiar su código dependiendo de la plataforma."
                            },
                            {
                                score: 1,
                                text: "Que se puede utilizar en cualquier plataforma."
                            },
                            {
                                score: 0,
                                text: "Que utiliza plataformas para programarse."
                            }
                        ]
                    },
                ]
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
                time: "4 min",
                info: "Los comentarios dentro de nuestro código son de gran utilidad para poder tener una estructura y para poder realizar cambios a futuro, son una buena práctica y ayudan al entendimiento del código.\r\nContamos con 2 formas para poder realizar un comentario dentro de nuestro código en Python:\r\n\r\n1.- Comentarios de una sola línea, el cual se realiza poniendo primero el signo de gato.\r\n2.- Comentarios de varias líneas, se realizan utilizando 3 comillas simples al inicio y final del comentario.",
                image: require("../assets/1comentarios.png"),
                questions:[
                    {
                        question: "Son de gran utilidad para poder tener una estructura y para poder realizar cambios a futuro, son una buena práctica y ayudan al entendimiento del código.",
                        answers: [
                            {
                                score: 1,
                                text: "Los comentarios."
                            },
                            {
                                score: 0,
                                text: "Las líneas de código."
                            },
                            {
                                score: 0,
                                text: "Las variables."
                            },
                            {
                                score: 0,
                                text: "Los ciclos"
                            }
                        ]
                    },
                    {
                        question: "¿Qué símbolo se utiliza para hacer comentarios de una línea?",
                        answers: [
                            {
                                score: 0,
                                text: "//"
                            },
                            {
                                score: 0,
                                text: "*"
                            },
                            {
                                score: 1,
                                text: "#"
                            },
                            {
                                score: 0,
                                text: "%"
                            }
                        ]
                    },
                    {
                        question: "¿Cómo se puede hacer un comentario de varias líneas?",
                        answers: [
                            {
                                score: 0,
                                text: "No se puede."
                            },
                            {
                                score: 0,
                                text: "Utilizando una función."
                            },
                            {
                                score: 0,
                                text: "Utilizando /* al inicio y */ al final del comentario."
                            },
                            {
                                score: 1,
                                text: "Utilizando 3 comillas simples al inicio y final del comentario."
                            }
                        ]
                    }
                ]
            },
            {id: 2,
                name: "Sangría",
                time: "4 min",
                info: "La sangría se refiere a los espacios al comienzo de una línea de código.\r\nMientras que en otros lenguajes de programación la sangría en el código es solo para facilitar la lectura, la sangría en Python es muy importante.\r\nPython usa sangría para indicar un bloque de código, si omites la sangría Python dará un error.\r\nLa cantidad de espacios depende de usted como programador, el uso más común es cuatro, pero tiene que ser al menos uno.\r",
                image: require("../assets/2sangria.png"),
                questions:[
                    {
                        question: "¿A qué se refiere la sangría en Python?",
                        answers: [
                            {
                                score: 1,
                                text: "A los espacios antes de una línea de código."
                            },
                            {
                                score: 0,
                                text: "A la longitud de las líneas de código."
                            },
                            {
                                score: 0,
                                text: "Al total de líneas de código."
                            },
                            {
                                score: 0,
                                text: "A una función."
                            }
                        ]
                    },
                    {
                        question: "¿Qué sucede si omites o pones sangrías distintas en Python?",
                        answers: [
                            {
                                score: 0,
                                text: "Marca una advertencia."
                            },
                            {
                                score: 1,
                                text: "Marca error de identación."
                            },
                            {
                                score: 0,
                                text: "Se omite la línea."
                            },
                            {
                                score: 0,
                                text: "No pasa nada."
                            }
                        ]
                    },
                    {
                        question: "¿Cuál es el estándar de sangría en Python?",
                        answers: [
                            {
                                score: 1,
                                text: "4 espacios o una tabulación."
                            },
                            {
                                score: 0,
                                text: "1 espacio."
                            },
                            {
                                score: 0,
                                text: "8 espacios o 2 tabulaciones."
                            },
                            {
                                score: 0,
                                text: "2 espacios."
                            }
                        ]
                    }
                ]
            },
            {id: 3,
                name: "Mostrar datos en Pantalla",
                time: "4 min",
                info: "La función print() nos ayuda a mostrar desde texto, hasta los valores guardados en una variable, al mismo tiempo podemos concatenar texto y el valor de una variable, separando ambos con una coma.",
                image: require("../assets/3mostrarDatos.png"),
                questions:[
                    {
                        question: "¿Para qué sirve la función print()?",
                        answers: [
                            {
                                score: 0,
                                text: "Para imprimir documentos."
                            },
                            {
                                score: 0,
                                text: "No existe."
                            },
                            {
                                score: 0,
                                text: "Recibir elementos del teclado."
                            },
                            {
                                score: 1,
                                text: "Mostrar elementos en consola."
                            }
                        ]
                    },
                    {
                        question: "¿Con qué símbolo se puede concatenar texto en la función print()?",
                        answers: [
                            {
                                score: 0,
                                text: "Espacio ' '"
                            },
                            {
                                score: 1,
                                text: "Coma ','"
                            },
                            {
                                score: 0,
                                text: "Ampersand '&'"
                            },
                            {
                                score: 0,
                                text: "Guión bajo '_'"
                            }
                        ]
                    },
                    {
                        question: "¿Se puede concatenar el texto con el valor de una variable?",
                        answers: [
                            {
                                score: 0,
                                text: "Sí, con cualquier variable."
                            },
                            {
                                score: 1,
                                text: "Sí, mientras la variable sea tipo str."
                            },
                            {
                                score: 0,
                                text: "Sí, depende el nombre de la variable."
                            },
                            {
                                score: 0,
                                text: "No, en ningún caso."
                            }
                        ]
                    }
                ]
            },
            {id: 4,
                name: "Lectura de datos por teclado",
                time: "3 min",
                info: "Para poder mostrar un resultado en la consola al realizar nuestro programa, haremos uso de la función: input().\r\nLa función input() nos ayuda para recibir valores por teclado y guardarlos en una variable, posteriomente estas variables las podemos utilizar dentro de nuestro código.\r\nAlgo importante a considerar es que si ingresamos mediante una función input() valores por teclado, Python considerará todo como tipo str, incluso si se ingresan números, es por eso que debemos conocer el como convertir entre tipos de datos, algo que veremos en temas más adelante.",
                image: require("../assets/4lecturaTeclado.png"),
                questions:[
                    {
                        question: "¿Para qué sirve la función input()?",
                        answers: [
                            {
                                score: 0,
                                text: "Renombrar una variable."
                            },
                            {
                                score: 0,
                                text: "Mostrar datos en pantalla."
                            },
                            {
                                score: 1,
                                text: "Recibir datos del teclado y guardarlos en una variable."
                            },
                            {
                                score: 0,
                                text: "Para nada."
                            }
                        ]
                    },
                    {
                        question: "¿Qué tipo de dato es el predeterminado por la función input()?",
                        answers: [
                            {
                                score: 1,
                                text: "str"
                            },
                            {
                                score: 0,
                                text: "int"
                            },
                            {
                                score: 0,
                                text: "float"
                            },
                            {
                                score: 0,
                                text: "boolean"
                            }
                        ]
                    }
                ]
            },
            {id: 5,
                name: "Operadores Aritméticos",
                time: "5 min",
                info: "Para trabajar con Python podemos hacer uso de los Operadores Aritméticos, tales como:\r\n*  Suma: 5 + 5\r\n* Resta: 5 - 5\r\n* Multiplicación: 5 * 5\r\n* División (con decimales): 5 / 5\r\n* División (sin decimales): 21 // 5\r\n* Resto (modulo) de la división: 21 % 5\r\n- Potencia: 2 ** 2\r\n* Raíz cuadrada: math.sqrt(9)\r\nComo observamos en la mayoría de los operadores son similares a como los usaríamos en una calculadora, donde vemos un cambio es a partir de la División sin decimales.\r\n\r\nPython respeta la jerarquía de operaciones, la cual es la siguiente:\r\n\r\n1.- Paréntesis\r\n2.- Exponentes o raíces\r\n3.- Multiplicaciones\r\n4.- Divisiones\r\n5.- Adiciones y sustracciones\r\n\r\nDebes tomarlo en cuenta al realizar operaciones complejas o en una sola línea, así no tendrás errores en tus resultados\r",
                image: require("../assets/5operadoresArit.png"),
                questions:[
                    {
                        question: "¿Qué símbolo se utiliza para realizar una potencia?",
                        answers: [
                            {
                                score: 1,
                                text: "**"
                            },
                            {
                                score: 0,
                                text: "//"
                            },
                            {
                                score: 0,
                                text: "++"
                            },
                            {
                                score: 0,
                                text: "!"
                            }
                        ]
                    },
                    {
                        question: "¿Qué símbolo se utiliza para realizar una división con decimales?",
                        answers: [
                            {
                                score: 0,
                                text: "-"
                            },
                            {
                                score: 1,
                                text: "*"
                            },
                            {
                                score: 1,
                                text: "/"
                            },
                            {
                                score: 0,
                                text: "//"
                            }
                        ]
                    },
                    {
                        question: "¿Qué función se utiliza para realizar una raíz cuadrada?",
                        answers: [
                            {
                                score: 0,
                                text: "math(x)"
                            },
                            {
                                score: 1,
                                text: "math.sqrt(x)"
                            },
                            {
                                score: 0,
                                text: "math.raiz(x)"
                            },
                            {
                                score: 0,
                                text: "math.modulo(x)"
                            }
                        ]
                    },
                    {
                        question: "¿Qué símbolo se utiliza para realizar una división sin decimales?",
                        answers: [
                            {
                                score: 0,
                                text: "/*"
                            },
                            {
                                score: 0,
                                text: "%"
                            },
                            {
                                score: 1,
                                text: "//"
                            },
                            {
                                score: 0,
                                text: "/+"
                            }
                        ]
                    },
                    {
                        question: "¿Qué símbolo se utiliza para obtener el módulo de la división?",
                        answers: [
                            {
                                score: 1,
                                text: "%"
                            },
                            {
                                score: 0,
                                text: "&"
                            },
                            {
                                score: 0,
                                text: "$"
                            },
                            {
                                score: 0,
                                text: "?"
                            }
                        ]
                    },
                    {
                        question: "¿Cuál es la jerarquía de operaciones?",
                        answers: [
                            {
                                score: 0,
                                text: "Paréntesis, exponentes, adiciones, sustracciones, raíces, multiplicaciones y divisiones."
                            },
                            {
                                score: 0,
                                text: "Multiplicaciones, divisiones, adiciones, sustracciones, paréntesis, exponentes y raíces."
                            },
                            {
                                score: 0,
                                text: "Multiplicaciones, divisiones, paréntesis, exponentes o raíces, adiciones y sustracciones."
                            },
                            {
                                score: 1,
                                text: "Paréntesis, exponentes o raíces, multiplicaciones, divisiones, adiciones y sustracciones."
                            }
                        ]
                    },
                ]
            },
            {id: 6,
                name: "Variables",
                time: "5 min",
                info: "Una variable es un lugar en memoria (una especie de caja) en el que podemos guardar objetos (números, texto, etc). Esta variable posee un identificador o nombre con el cual podemos llamarla más tarde cuando la necesitemos.\r\nPara definir una variable dentro de Python es tan sencillo como poner el nombre de la variable, seguida de un signo igual y posteriormente el valor que se le va a asignar.\r\nEn Python no es necesario indicar de que tipo de dato es la variable (String, Entero, Flotante, etc.), las variables no están limitadas por un tipo de dato.\r\nReglas en el uso de identificadores de variable\r\nReglas en el uso de identificadores de variable\r\n* No pueden empezar con un número.\r\n* Deben estar en minúsculas\r\n* Para separar las palabras usamos el guion bajo: _\r\nx = 'Hello World' STR - Cadena\r\nx = 20 INT - Entero\r\nx = 20.5\tFloat - Flotante\r\nx = ['apple', 'banana', 'cherry']List - lista\t\r\nx = ('apple', 'banana', 'cherry') tuple - tupla\r\nx = range(6) Range es un tipo de dato que representa una secuencia de números inmutable.\r\nx = {'name' : 'John', 'age' : 36} Diccionario\t\r\nx = {'apple', 'banana', 'cherry'} set  - Conjunto, se pueden añadir\r\nx = frozenset({'apple', 'banana', 'cherry'}) frozenset - Conjunto sin añadir\r\nx = True bool - Booleano\r\nPara saber el tipo de dato que estamos usando lo hacemos mediante el comando type().",
                image:require( "../assets/6variables.png"),
                questions:[
                    {
                        question: "¿Qué es una variable?",
                        answers: [
                            {
                                score: 1,
                                text: "Un lugar en memoria en el que podemos guardar objetos."
                            },
                            {
                                score: 0,
                                text: "Un bloque de código que va cambiando."
                            },
                            {
                                score: 0,
                                text: "Una función cambiante."
                            },
                            {
                                score: 0,
                                text: "Un número definido."
                            }
                        ]
                    },
                    {
                        question: "¿Cómo se define una variable?.",
                        answers: [
                            {
                                score: 0,
                                text: "Poner el valor que se le va a asignar, seguida de un signo igual y posteriormente el nombre de la variable."
                            },
                            {
                                score: 0,
                                text: "Poner el nombre de la variable, seguida de un signo + y posteriormente el valor que se le va a asignar."
                            },
                            {
                                score: 1,
                                text: "Poner el nombre de la variable, seguida de un signo igual y posteriormente el valor que se le va a asignar."
                            },
                            {
                                score: 0,
                                text: "Poner el valor que se le va a asignar, seguida de un signo + y posteriormente el nombre de la variable."
                            }
                        ]
                    },
                    {
                        question: "¿Cuál es una característica de las variables en Python?",
                        answers: [
                            {
                                score: 0,
                                text: "Son autoincrementables"
                            },
                            {
                                score: 0,
                                text: "Hay que declararlas dos veces."
                            },
                            {
                                score: 1,
                                text: "No es necesario indicar de qué tipo de dato es la variable."
                            },
                            {
                                score: 0,
                                text: "No pueden cambiar su valor."
                            }
                        ]
                    },
                    {
                        question: "¿Qué tipo de dato es “Hello World!”?",
                        answers: [
                            {
                                score: 0,
                                text: "boolean"
                            },
                            {
                                score: 0,
                                text: "int"
                            },
                            {
                                score: 0,
                                text: "float"
                            },
                            {
                                score: 1,
                                text: "str"
                            }
                        ]
                    },
                    {
                        question: "¿Qué tipo de dato es True?",
                        answers: [
                            {
                                score: 0,
                                text: "int"
                            },
                            {
                                score: 1,
                                text: "boolean"
                            },
                            {
                                score: 0,
                                text: "str"
                            },
                            {
                                score: 0,
                                text: "float"
                            }
                        ]
                    },
                    {
                        question: "¿Qué tipo de dato es “10”?",
                        answers: [
                            {
                                score: 1,
                                text: "str"
                            },
                            {
                                score: 0,
                                text: "int"
                            },
                            {
                                score: 0,
                                text: "float"
                            },
                            {
                                score: 0,
                                text: "boolean"
                            }
                        ]
                    },
                    {
                        question: "¿Qué comando se puede utilizar para conocer el tipo de dato de una variable?",
                        answers: [
                            {
                                score: 0,
                                text: "input(x)"
                            },
                            {
                                score: 0,
                                text: "length(x)"
                            },
                            {
                                score: 1,
                                text: "type(x)"
                            },
                            {
                                score: 0,
                                text: "len(x)"
                            }
                        ]
                    }
                ]
            },
            {id: 7,
                name: "Trabajar con cadenas",
                time: "4 min",
                info: "En Python podemos trabajar con cadenas de texto, las cuales utilizamos dentro de una variable y para saber que son de tipo Str ponemos el texto entre comillas simples o dobles, de ambas formas es correcto.\r\nTambién podemos concatenar estas variables sumándolas, puede sonar raro, pero te mostramos como se hace.\r\nPor otra parte, si intentamos sumar un texto con algún otro tipo de variable nos mostrará un error.",
                image:require( "../assets/7cadenas.png"),
                questions:[
                    {
                        question: "¿Cómo se define una cadena dentro de una variable?",
                        answers: [
                            {
                                score: 0,
                                text: "Se pone el texto entre corchetes."
                            },
                            {
                                score: 0,
                                text: "Se pone el texto entre llaves."
                            },
                            {
                                score: 1,
                                text: "Se pone el texto entre comillas simples o dobles."
                            },
                            {
                                score: 0,
                                text: "No se pone nada."
                            }
                        ]
                    },
                    {
                        question: "¿Cómo se pueden concatenar cadenas en Python?",
                        answers: [
                            {
                                score: 0,
                                text: "Poniéndolas entre corchetes."
                            },
                            {
                                score: 1,
                                text: "Se suman las variables y se almacenan en otra variable"
                            },
                            {
                                score: 0,
                                text: "Usando el símbolo &."
                            },
                            {
                                score: 0,
                                text: "No se puede concatenar en Python."
                            }
                        ]
                    },
                    {
                        question: "¿Se pueden concatenar variables de distinto tipo?",
                        answers: [
                            {
                                score: 0,
                                text: "Sí, siempre y cuando se llamen igual."
                            },
                            {
                                score: 0,
                                text: "Sí."
                            },
                            {
                                score: 0,
                                text: "Sí, solo en ciertos casos."
                            },
                            {
                                score: 1,
                                text: "No."
                            }
                        ]
                    }
                ]
            },
            {id: 8,
                name: "Convertir tipo de datos",
                time: "4 min",
                info: "Al recibir valores por teclado mediante una función input(), Python considera la variable de tipo str(), es por eso que en ocasiones se necesita cambiar el tipo de dato, como al ingresar un número entero.\r\nPara cambiar el tipo de dato es tan simple como poner el tipo de dato seguido de paréntesis y dentro de los paréntesis el valor o variable que se desea convertir.\r\nSi desea especificar el tipo de datos, puede utilizar las siguientes funciones de construcción:\r\nx = str('Hello World')\t\t\r\nx = int(20)\t\t\r\nx = float(20.5)\t\t\t\r\nx = list(('apple', 'banana', 'cherry'))\t\t\r\nx = tuple(('apple', 'banana', 'cherry'))\t\t\r\nx = range(6)\t\t\r\nx = dict(name='John', age=36)\t\r\nx = set(('apple', 'banana', 'cherry'))\r\n",
                image:require( "../assets/8convertirDatos.png"),
                questions:[
                    {
                        question: "¿Cómo se convierte una variable?",
                        answers: [
                            {
                                score: 1,
                                text: "Se pone el tipo de dato seguido de paréntesis y dentro de los paréntesis el valor o variable."
                            },
                            {
                                score: 0,
                                text: "Se pone el tipo de dato seguido de corchetes y dentro de los corchetes el valor o variable."
                            },
                            {
                                score: 0,
                                text: "Se utiliza la función convert(variable)."
                            },
                            {
                                score: 0,
                                text: "No se pueden convertir."
                            }
                        ]
                    },
                    {
                        question: "¿De qué tipo de variable a qué tipo se está convirtiendo?\r\n\r\n variable = input()\r\n variable2 = int(variable)",
                        answers: [
                            {
                                score: 1,
                                text: "De int a float"
                            },
                            {
                                score: 0,
                                text: "De int a str"
                            },
                            {
                                score: 0,
                                text: "De float a int."
                            },
                            {
                                score: 0,
                                text: "De str a int."
                            }
                        ]
                    },
                ]
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
                time: "5 min",
                info: "La vida se basa en tomar las decisiones correctas, y nuestros programas no están exentos de ello. Aquí es donde las sentencias condicionales entran en juego. Nos ayudan a controlar esa toma de decisiones utilizando la lógica en nuestros programas. Las sentencias condicionales en Python son: if(): , elif(): y else(): . Pero ¿qué hace una sentencia condicional? Simplemente comprueba si una declaración (test) es verdadera o falsa, y en base a eso se lleva a cabo una acción.\r\nPara realizar una toma de decisiones es necesario comparar 2 o más valores dentro de las funciones if(), elif() y else(), aquí es donde entran los Operadores de Comparación, quienes se encargan de comparar 2 valores:\r\nLos Operadores son\r\n==\tigual\tx == y\t\r\n!=\tdiferente de\tx != y\t\r\n>\tMayor que\tx > y\t\r\n<\tMenor que\tx < y\t\r\n>=\tMayor o igual que\tx >= y\t\r\n<=\tMenor o igual que\tx <= y\r\n",
                image:require("../assets/9condicionales.png"),
                questions:[
                    {
                        question: "¿Qué símbolo se utiliza para el operador comparativo igual?",
                        answers: [
                            {
                                score: 0,
                                text: ">="
                            },
                            {
                                score: 1,
                                text: "=="
                            },
                            {
                                score: 0,
                                text: "<="
                            },
                            {
                                score: 0,
                                text: "="
                            }
                        ]
                    },
                    {
                        question: "¿Qué símbolo se utiliza para el operador comparativo diferente de?",
                        answers: [
                            {
                                score: 1,
                                text: "!="
                            },
                            {
                                score: 0,
                                text: "/="
                            },
                            {
                                score: 0,
                                text: "*="
                            },
                            {
                                score: 0,
                                text: "!!"
                            }
                        ]
                    },
                    {
                        question: "¿Qué símbolo se utiliza para el operador comparativo mayor que?",
                        answers: [
                            {
                                score: 0,
                                text: "--"
                            },
                            {
                                score: 0,
                                text: "#"
                            },
                            {
                                score: 0,
                                text: "<"
                            },
                            {
                                score: 1,
                                text: ">"
                            }
                        ]
                    },
                    {
                        question: "¿Qué símbolo se utiliza para el operador compatativo menor o igual que?",
                        answers: [
                            {
                                score: 0,
                                text: "><"
                            },
                            {
                                score: 0,
                                text: ">"
                            },
                            {
                                score: 1,
                                text: "<="
                            },
                            {
                                score: 0,
                                text: ">"
                            }
                        ]
                    }
                ]
            },
            {id: 2,
                name:"Operadores Lógicos",
                time: "5 min",
                info: "En ocasiones es necesario comparar no solo de valores, si no también comparar sentencias condicionales, esto con el fin de validar si uno o más valores cumplen con ciertas condiciones, aquí es donde entran los Operadores Lógicos.\r\nLos operadores lógicos se utilizan para combinar sentencias condicionales:\r\nand \tRetorna True si la sentencia en verdadera\tx < 5 and  x < 10\t\r\nor\tRetorna True si una de las 2sentencias es verdadera\tx < 5 or x < 4\t\r\nnot\tNiega el resultado, Retorna False si el resultado es verdadero\tnot(x < 5 and x < 10)\r",
                image:require("../assets/10operadoresLogicos.png"),
                questions:[
                    {
                        question: "¿Para qué sirven los operadores lógicos?",
                        answers: [
                            {
                                score: 0,
                                text: "Comparar dos valores."
                            },
                            {
                                score: 1,
                                text: "Comparar sentencias, si uno o más valores cumplen con condiciones."
                            },
                            {
                                score: 0,
                                text: "Para nada."
                            },
                            {
                                score: 0,
                                text: "Para comparar funciones."
                            }
                        ]
                    },
                    {
                        question: "¿Cuál NO es un operador lógico?",
                        answers: [
                            {
                                score: 0,
                                text: "and"
                            },
                            {
                                score: 0,
                                text: "or"
                            },
                            {
                                score: 1,
                                text: "but"
                            },
                            {
                                score: 0,
                                text: "not"
                            }
                        ]
                    }
                ]
            },
            {id: 3,
                name:"Función IF()",
                time: "5 min",
                info: "La función if() nos ayuda para evaluar cierta condición proporcionada, si ésta es verdadera entra dentro de la función y continua el código su proceso.\r\n\r\nPor ejemplo, para saber si una persona es mayor de edad, podemos hacer uso de la función if().\r\n\r\nEn este caso si la edad ingresada es mayor a 18 te mostrara un texto indicándote que eres mayor de edad, sin embargo, si ingresas números menores a 18 no pasara nada. Otro caso que no se esta tomando en cuenta es, ¿Qué pasará si ingreso el número 18?, al tener 18 años ya eres mayor de edad, pero aun así nuestro código no te mencionará que ya lo eres, para eso es necesario ajustarlo y cambiar nuestro Operador de un (>, Mayor que) a un (>=, Mayor o igual que), de esta forma también incluiremos el número 18 para que entre en la función.",
                image:require("../assets/11if.png"),
                questions:[
                    {
                        question: "¿Qué se va a imprimir en la consola? \r\n\r\n numero = 3\r\n if(numero > 5):\r\n     print('Número mayor a 5')",
                        answers: [
                            {
                                score: 1,
                                text: "Nada"
                            },
                            {
                                score: 0,
                                text: "Número mayor a 5"
                            },
                            {
                                score: 0,
                                text: "print"
                            },
                            {
                                score: 0,
                                text: "3"
                            }
                        ]
                    },
                    {
                        question: "¿Qué se va a imprimir en la consola? \r\n\r\n numero = 8\r\n if(numero > 5):\r\n     print('Número mayor a 5')",
                        answers: [
                            {
                                score: 0,
                                text: "Print"
                            },
                            {
                                score: 0,
                                text: "Nada"
                            },
                            {
                                score: 1,
                                text: "Número mayor a 5"
                            },
                            {
                                score: 0,
                                text: "8"
                            }
                        ]
                    },
                    {
                        question: "¿Qué se va a imprimir en la consola? \r\n\r\n numero = 3\r\n if(numero >= 3):\r\n     print('Número mayor o igual a 3')",
                        answers: [
                            {
                                score: 0,
                                text: "Nada"
                            },
                            {
                                score: 1,
                                text: "Número mayor o igual a 3"
                            },
                            {
                                score: 0,
                                text: "Número mayor a 5"
                            },
                            {
                                score: 0,
                                text: "3"
                            }
                        ]
                    }
                ]
            },
            {id: 4,
                name:"Función ELIF()",
                time: "4 min",
                info: "La función elif() es la forma de Python de decir 'si la o las condiciones anteriores no fueron ciertas, intente esta condición'. Esta función es equivalente a una función Case de otros lenguajes como C++ o C#, ya que te permite elegir entre varias opciones o condiciones.\r\nSiguiendo el ejemplo anterior sobre la mayoría de edad también podemos arreglar nuestro código de la siguiente forma usando la función elif(). \r\n\r\nAquí observamos como tenemos 2 opciones, la primera nos indica que si tienes entre 18 y 21 años eres mayor de edad en México pero no en USA, en caso de no ser así y tienes 21 o más eres mayor de edad en ambos países. Por otro lado si ingresan un valor igual o menor a cero, se manda un mensaje indicando que no es una edad valida.",
                image:require("../assets/12elif.png"),
                questions:[
                    {
                        question: "¿Qué se va a imprimir en la consola? \r\n\r\n numero = 3\r\n if(numero >= 8): \r\n     print('Juan')\r\n elif(numero < 5):\r\n     print('Pepe')",
                        answers: [
                            {
                                score: 0,
                                text: "Juan"
                            },
                            {
                                score: 1,
                                text: "Pepe"
                            },
                            {
                                score: 0,
                                text: "Nada"
                            },
                            {
                                score: 0,
                                text: "3"
                            }
                        ]
                    },
                    {
                        question: "¿Qué se va a imprimir en la consola? \r\n\r\n numero = 5\r\n if(numero >= 8): \r\n     print('Juan')\r\n elif(numero < 5):\r\n     print('Pepe')",
                        answers: [
                            {
                                score: 0,
                                text: "Pepe"
                            },
                            {
                                score: 0,
                                text: "5"
                            },
                            {
                                score: 0,
                                text: "Juan"
                            },
                            {
                                score: 1,
                                text: "Nada"
                            }
                        ]
                    },
                    {
                        question: "¿Qué se va a imprimir en la consola? \r\n\r\n numero = 6\r\n if(numero >= 8): \r\n     print('Juan')\r\n elif(numero < 6):\r\n     print('Pepe')\r\n elif(numero >= 6):\r\n     print('María')",
                        answers: [
                            {
                                score: 1,
                                text: "María"
                            },
                            {
                                score: 0,
                                text: "Juan"
                            },
                            {
                                score: 0,
                                text: "Nada"
                            },
                            {
                                score: 0,
                                text: "Pepe"
                            }
                        ]
                    }
                ]
            },
            {id: 5,
                name:"Función ELSE()",
                time: "4 min",
                info: "La función else() captura cualquier cosa que no esté capturada por las condiciones validadas en las funciones if() o elif():\r\nRetomando el ejercicio de la edad, solo nos faltaba contemplar aquellos valores que se encontraban entre 1 y 17 años, que serían considerados menores de edad, para estos caso utilizaremos la función else() de la siguiente forma:\r\n",
                image:require("../assets/13else.png"),
                questions:[
                    {
                        question: "¿Qué se va a imprimir en la consola? \r\n\r\n numero = 5\r\n if(numero >= 8): \r\n     print('Juan')\r\n elif(numero < 5):\r\n     print('Pepe')\r\n elif(numero < 7):\r\n     print('María')\r\n else:\r\n     print('Santi')",
                        answers: [
                            {
                                score: 0,
                                text: "Pepe"
                            },
                            {
                                score: 0,
                                text: "Juan"
                            },
                            {
                                score: 0,
                                text: "Santi"
                            },
                            {
                                score: 1,
                                text: "María"
                            }
                        ]
                    },
                    {
                        question: "¿Qué se va a imprimir en la consola? \r\n\r\n numero = 7\r\n if(numero >= 8): \r\n     print('Juan')\r\n elif(numero < 5):\r\n     print('Pepe')\r\n elif(numero < 7):\r\n     print('María')\r\n else:\r\n     print('Santi')",
                        answers: [
                            {
                                score: 0,
                                text: "María"
                            },
                            {
                                score: 1,
                                text: "Santi"
                            },
                            {
                                score: 0,
                                text: "Pepe"
                            },
                            {
                                score: 0,
                                text: "Juan"
                            }
                        ]
                    }
                ]
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
                time: "5 min",
                info: "Un ciclo en Python o bucle en Python (como prefieras llamarlos) te permite repetir una o varias instrucciones cuantas veces lo necesitemos, por ejemplo, si quisiéramos escribir los números del uno al cien no tendría sentido escribir cien líneas de código mostrando un número en cada una, para eso y para varias cosas más (que veremos enseguida) es útil un ciclo. Un ciclo nos ayuda a llevar a cabo una tarea repetitiva en una cantidad de líneas muy pequeña y de forma  prácticamente automática (y muy rápida).\r\nExisten diferentes tipos de ciclos o bucles en Python, cada uno tiene una utilidad para casos específicos y depende de nuestra habilidad y conocimientos poder determinar en qué momento es bueno usar alguno de ellos. Tenemos entonces a nuestra disposición los siguientes tipos de ciclos en Python:\r\n*Ciclo while en Python\r\n*Ciclo for en Python\r\n\r\nCiclo while en Python\r\nCon el ciclo while, no conoces el cuándo sino el cómo. Es decir, conocer la condición bajo la cual se va a detener el ciclo, pero no sabes cuántas iteraciones tomará eso, ni cuánto tiempo. Por ello se los llama ciclos indeterminados.\r\n\r\n¿Cómo funciona un Ciclo While en Python?\r\nPara comprender mejor el funcionamiento del ciclo while, pongamos un buen ejemplo, imaginemos que, por algún motivo, queremos pedirle a un usuario una serie de números cualquiera y que solo dejaremos de hacerlo cuando el usuario ingrese el número 0. Como vemos, en este caso, no sabemos cuántas veces pedir un valor, solo sabemos en qué momento dejar de pedir uno, pues no tenemos ni idea de cuándo al usuario se le va a ocurrir ingresar un cero. El ciclo while nos permite ejecutar una acción de forma 'infinita' hasta que se cumpla alguna condición específica, en nuestro caso sería que el numero sea 0.\r\n\r\nSintaxis del Ciclo While en Python:",
                image:require( "../assets/14while.png"),
                questions:[
                    {
                        question: "¿Para qué se utilizan los ciclos?",
                        answers: [
                            {
                                score: 0,
                                text: "Ejecutar código que borramos."
                            },
                            {
                                score: 0,
                                text: "Repetir solo una instrucción cuantas veces lo necesitemos."
                            },
                            {
                                score: 0,
                                text: "Repetir una o varias instrucciones específicamente 100 veces."
                            },
                            {
                                score: 1,
                                text: "Repetir una o varias instrucciones cuantas veces lo necesitemos"
                            }
                        ]
                    },
                    {
                        question: "¿Qué tipos de ciclo hay en Python?",
                        answers: [
                            {
                                score: 1,
                                text: "While y For"
                            },
                            {
                                score: 0,
                                text: "Do While y While."
                            },
                            {
                                score: 0,
                                text: "For y Do While."
                            },
                            {
                                score: 0,
                                text: "For y Cicle."
                            }
                        ]
                    },
                    {
                        question: "¿Por qué se le llaman Ciclos indeterminados al While?",
                        answers: [
                            {
                                score: 0,
                                text: "Porque no están definidos."
                            },
                            {
                                score: 0,
                                text: "Porque no tienen nombre."
                            },
                            {
                                score: 1,
                                text: "Porque no se sabe cuántas iteraciones tomará."
                            },
                            {
                                score: 0,
                                text: "Porque tiene iteraciones definidas."
                            }
                        ]
                    }
                ]
            },
            {id: 2,
                name: "La instrucción Break()",
                time: "3 min",
                info: "Esta instrucción permitirá 'romper' o básicamente detener cualquier ciclo en el que se encuentre una vez es ejecutada.\r\nComo puedes ver, al usar while(True), nos aseguramos que el ciclo se ejecute por siempre. Sin embargo, al poner un llamado a break al interior, el cual se ejecuta SOLO cuando el número ingresado en cero, nos aseguramos de que se cierre el ciclo en ese preciso momento.",
                image:require( "../assets/15break.png"),
                questions:[
                    {
                        question: "¿Para qué sirve el “break”?",
                        answers: [
                            {
                                score: 0,
                                text: "Para definir una variable."
                            },
                            {
                                score: 1,
                                text: "Para romper cualquier ciclo una vez que se ejecuta."
                            },
                            {
                                score: 0,
                                text: "Para detener la ejecución del código."
                            },
                            {
                                score: 0,
                                text: "Para detener la ejecución del código."
                            }
                        ]
                    },
                    {
                        question: "¿Qué sucede si ponemos un “While(True):” sin un break?",
                        answers: [
                            {
                                score: 1,
                                text: "El ciclo se ejecuta por siempre."
                            },
                            {
                                score: 0,
                                text: "El ciclo se ejecuta 100 veces."
                            },
                            {
                                score: 0,
                                text: "El ciclo se detiene al ingresar un 0."
                            },
                            {
                                score: 0,
                                text: "Nada"
                            }
                        ]
                    },
                    {
                        question: "¿Cuántas veces se ejecuta este código? \r\n\r\n while(True):\r\n     numero = float(input('Ingresa un número'))\r\n     if(numero==0):\r\n         break",
                        answers: [
                            {
                                score: 0,
                                text: "100 veces"
                            },
                            {
                                score: 1,
                                text: "Infinitamente hasta que se ingrese un 0."
                            },
                            {
                                score: 0,
                                text: "Por siempre"
                            },
                            {
                                score: 0,
                                text: "Una vez"
                            }
                        ]
                    },
                ]
            },
            {id: 3,
                name: "Ciclo For() en Python",
                time: "4 min",
                info: "Ciclo for en Python\r\nUn ciclo for en Python es una estructura iterativa para ejecutar un mismo segmento de código una cantidad de veces deseada y conocida. Pues necesitamos conoces previamente un valor de inicio, un tamaño de paso y un valor final para el ciclo. Ya veremos los detalles.\r\n\r\n\r\n\r\n¿Cómo funciona un Ciclo For en Python?\r\nPara comprender mejor el funcionamiento del ciclo for, solucionemos un pequeño ejercicio práctico. Supongamos que queremos mostrar los números pares (múltiplos de dos ) entre el 500 y el 1000. Con esta información inmediatamente podemos determinar que por medio de un ciclo debemos mostrar una serie de números como la siguiente: 500 502 504 506 ... 600 ... 852 ... 906 ... 980 .. 1000. Tenemos entonces todo lo necesario para nuestro ciclo. Tenemos un valor inicial que sería el 500, un valor final (1000) y tenemos un tamaño de paso que es 2 (los números pares). Estamos ahora en capacidad de determinar los componentes esenciales para un ciclo for.\r\nSintaxis del Ciclo For en Python:\r\nComo puedes ver, la magia está en la función range() de Python, pues con esta definimos desde dónde y hasta dónde irá el ciclo, además del tamaño del paso. De hecho, la función range(), solo necesita como mínimo el límite superior, generando así un rango de números desde cero hasta ese límite de uno en uno. Finalmente, esta función omite el último valor, de ese modo, el ciclo va de valor_inicial hasta valor_final - 1 (hay que quitarle uno al valor_final).\r\n",
                image:require( "../assets/16for.png"),
                questions:[
                    {
                        question: "¿Qué componentes tiene un ciclo For?",
                        answers: [
                            {
                                score: 0,
                                text: "Final y condición"
                            },
                            {
                                score: 1,
                                text: "Inicio, final y tamaño de paso"
                            },
                            {
                                score: 0,
                                text: "Nombre, variable, código"
                            },
                            {
                                score: 0,
                                text: "Inicio, final, nombre y código"
                            }
                        ]
                    },
                    {
                        question: "¿Qué valores se van a imprimir en la consola? \r\n\r\n for variable in range (4):\r\n     print(variable)",
                        answers: [
                            {
                                score: 0,
                                text: "1, 2, 3, 4"
                            },
                            {
                                score: 0,
                                text: "0, 1, 2, 3, 4"
                            },
                            {
                                score: 0,
                                text: "4, 3, 2, 1"
                            },
                            {
                                score: 1,
                                text: "0, 1, 2 , 3"
                            }
                        ]
                    },
                    {
                        question: "¿Qué valores se van a imprimir en la consola? \r\n\r\n for variable in range (14, 17):\r\n     print(variable)",
                        answers: [
                            {
                                score: 1,
                                text: "14, 15, 16."
                            },
                            {
                                score: 0,
                                text: "14, 15, 16, 17."
                            },
                            {
                                score: 0,
                                text: "15, 16, 17."
                            },
                            {
                                score: 0,
                                text: "15, 17."
                            }
                        ]
                    },
                    {
                        question: "¿Qué valores se van a imprimir en la consola? \r\n\r\n for variable in range (0, 10, 2):\r\n     print(variable)",
                        answers: [
                            {
                                score: 0,
                                text: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
                            },
                            {
                                score: 0,
                                text: "0, 10, 2"
                            },
                            {
                                score: 1,
                                text: "0, 2, 4 , 6, 8"
                            },
                            {
                                score: 0,
                                text: "10, 8, 6, 4, 3, 2"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
