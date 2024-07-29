const _ORIGEN_TEL_ = {
    nombre: 'OrigenTel JS',
    slogan: 'Origen de la llamada',
    img: 'src/img/logo.jpeg',

    github: "https://github.com/Jeff-Aporta/origen-tel-js",

    resumen: {
        desc: `
            Permite identificar el país de origen de un número telefónico a partir de su formato.
        `,
        descImg: [
            "Interpretar un número telefónico y determinar su país de origen",
            "Extraer números telefónicos de un texto",
            "Usa la API https://flagicons.lipis.dev/flags/ para mostrar la bandera del país"
        ]
    },

    secciones: [
        {
            nombre: "Usar con CDN",
            contenido: (thisObj) => {
                return (
                    <div>
                        Los números de teléfono varían en forma y se manejan de manera diferente de un país a otro.
                        el módulo de betterCallSaul.js puede ayudarnos a formatear correctamente los números de teléfono
                        junto con los códigos de países y también validar campos en interfaces.
                        <Code nocode className="link">
                            {thisObj.githubPage}/index.js
                        </Code>
                    </div>
                );
            },
        },
        {
            nombre: "Probar en tiempo real",
            contenido: (thisObj) => {
                function probar() {
                    let result = _getInfoInNumber(document.getElementById("number").value)
                    let html = convertNumberToHTML(result)
                    document.getElementById("resultados-prueba").innerHTML = html

                    if (result) {
                        document.getElementById("img-prueba").src = result.flagSVG_4x3
                    } else {
                        document.getElementById("img-prueba").src = ""
                    }
                }

                return (
                    <div>
                        <div
                            style={{
                                textAlign: "center"
                            }}
                        >
                            <img src="" id="img-prueba" width="50px" />
                            <input
                                style={{
                                    cursor: "text",
                                    padding: "5px",
                                    verticalAlign: "top",
                                }}
                                type="text"
                                id="number"
                                placeholder="Número a comprobar"
                                onchange={probar}
                                onkeyup={probar}
                            />
                        </div>
                        <div id="resultados-prueba">
                        </div>
                    </div>
                );
            },
        },
        {
            nombre: "Extraer números de un texto",
            contenido: (thisObj) => {
                return (
                    <div>
                        Escribe texto en lenguaje natural que contenga números de teléfono.

                        <div
                            style={{
                                textAlign: "center"
                            }}
                        >
                            <textarea
                                style={{
                                    padding: "10px;text-align: left",
                                    cursor: "text",
                                    width: "50%",
                                    height: "200px"
                                }}
                                id="text"
                            >
                                Hola amigos, mi nombre es Jeffrey Agudelo y mi número es +573107257814, el número de mi madre es +7 8005553535 y el de mi padre es (+91)9098765432, el de mi tío es +3-161-3355460 y el de mi tía es +52 8886732311

                                es importante destacar que los números escritos anteriormente tienen diferentes formatos, espacios, guiones y paréntesis, esta función los encontrará y los extraerá.</textarea>
                            <button
                                class="btn btn-primary"
                                style={{
                                    verticalAlign: "top"
                                }}
                                onclick={texto}
                            >
                                Buscar
                            </button>
                        </div>
                        <div id="resultados-texto">
                        </div>
                    </div >
                )
            },
        },
        {
            nombre: "Tutorial",
            contenido: (thisObj) => {
                return (
                    <div>
                        Una vez importada la librería en el head, ya sea con la CDN o si descargaste el archivo, podrás ejecutar el código que se presentará a continuación:
                        <br /><br />
                        <AnalizandoUnNumeroDeTelefono />
                        <AnalizandoCadenasDeTextoConRuido />
                    </div>
                )

                function AnalizandoUnNumeroDeTelefono() {
                    return (
                        <SubEnvolventeSeccion>
                            <h2>
                                ANALIZANDO UN NÚMERO DE TELÉFONO
                            </h2>

                            Veamos cómo podemos usar el _getInfoInNumber(), para que nos retorne un objeto con la información, debemos pasarle de argumento el número de teléfono completo, incluido el código del país.

                            <Code>{`
                                let result = _getInfoInNumber("+573107257814") //{codeCountry: "CO",codeCall: "57",...
                            `}</Code>

                            La función _getInfoInNumber() devuelve los siguientes datos: el código del país (codeCountry), el código de llamada del país (codeCall), el número sin el código de llamada del país (numberWithoutCodeCall), el número de completo (complete), el nombre del país en inglés (nameCountry) y en español (nameCountryES), el formato nacional del número (formatNational), el formato internacional (formatInternational), el formato rfc 3966 (formatRFC3966), el tipo de línea (type), estima en falso o verdadero de si es posible o no el número (isPosible) y además busca rutas de imágenes representativas para el país, una en relación 1:1 (flagSVG_1x1) y la otra en 4:3 (flagSVG_4x3).

                            <Code>{`
                                {
                                    codeCountry: "CO",
                                    codeCall: "57",
                                    numberWithoutCodeCall: "3107257814",
                                    complete: "+573107257814",
                                    nameCountry: "Colombia",
                                    nameCountryES: "Colombia",
                                    formatNational: "310 7257814",
                                    formatInternational: "+57 310 7257814",
                                    formatRFC3966: "tel:+573107257814",
                                    type: "MOBILE",
                                    isPosible: true,
                                    flagSVG_4x3: "https://flagicons.lipis.dev/flags/4x3/co.svg",
                                    flagSVG_1x1: "https://flagicons.lipis.dev/flags/1x1/co.svg"
                                }
                            `}</Code>
                        </SubEnvolventeSeccion>
                    );
                }

                function AnalizandoCadenasDeTextoConRuido() {
                    return (
                        <SubEnvolventeSeccion>
                            <h2>
                                ANALIZANDO CADENAS DE TEXTO CON RUIDO
                            </h2>
                            Se le denomina ruido a toda a toda perturbación textual que haya en el input, que no corresponda con
                            un número de teléfono, datos que para el intérprete no tienen ningún sentido, puesto que no fue
                            entrenado para esto. El intérprete es capaz de extraer los números de teléfono con formato internacional
                            que hayan en una cadena.
                            <br /><br />
                            Para la cadena "Mi número es (+57)310-725 7814, me llamo Jeff", el número a extraer es +573107257814,
                            tiene ruido por la derecha, por la izquierda y en medio, sin embargo el siguiente código extraerá y
                            retornará los datos de todos los números con formato internacional que encuentre en la cadena suministrada
                            <Code>{`
                                let results = _findPhoneNumbers("Mi número es (+57)310-725 7814, me llamo Jeff")
                            `}</Code>
                            La función _findPhoneNumbers() devuelve un arreglo con el _getInfoInNumber() de todos los números encontrados
                            <br /><br />
                            Salida esperada:

                            <Code>{`
                                [
                                    {
                                        codeCountry: "CO",
                                        codeCall: "57",
                                        numberWithoutCodeCall: "3107257814",
                                        complete: "+573107257814",
                                        nameCountry: "Colombia",
                                        nameCountryES: "Colombia",
                                        formatNational: "310 7257814",
                                        formatInternational: "+57 310 7257814",
                                        formatRFC3966: "tel:+573107257814",
                                        type: "MOBILE",
                                        isPosible: true,
                                        flagSVG_4x3: "https://flagicons.lipis.dev/flags/4x3/co.svg",
                                        flagSVG_1x1: "https://flagicons.lipis.dev/flags/1x1/co.svg"
                                    }
                                ]
                            `}</Code>
                        </SubEnvolventeSeccion>
                    )
                }
            }
        },
        {
            nombre: "Funcionamiento",
            contenido: (thisObj) => {
                return (
                    <div>
                        <Resumen />
                        <br /><br />
                        <ReglasParaColombia />
                    </div>
                );

                function Resumen() {
                    return (
                        <div>
                            <h2>
                                Resumen
                            </h2>

                            Esto lo hace por medio de expresiones regulares, y algoritmos, pudiendo retornar así un objeto con la 
                            información que puede extraer del número, para que quede claro, les voy a explicar con un ejemplo lo 
                            que hace internamente el programas.
                            <br /><br />
                            Hablemos en el caso de Colombia, los teléfonos tienen 8, 10 y 11 dígitos, debe existir una función que 
                            una vez reconocido el indicativo del país, extraiga el resto del número para hacer las correspondientes 
                            verificaciones. En el caso de los números con 10 dígitos.
                        </div>
                    );
                }

                function ReglasParaColombia() {
                    return (
                        <div>
                            <SubEnvolventeSeccion>
                                <h2>
                                    Reglas para Colombia
                                </h2>

                                <ExpresionRegularParaTelefoniaMovilColombia />

                                También hay que analizar que los números de 10 dígitos en colombia, aparte de iniciar por 3 sus siguientes 2 dígitos tienen restricciones,
                                los primeros 3 dígitos para esta clase de números son algunos de estos:
                                <br /><br />

                                <IndicativosTelefoniaColombia />
                                <TestingIndicativosTelefoniaColombia />
                                <ExpresionesRegularesCortas />
                            </SubEnvolventeSeccion>
                        </div>
                    )

                    function ExpresionRegularParaTelefoniaMovilColombia() {
                        return (
                            <div>
                                La expresión regular es la siguiente

                                <Code>{`
                                    let E10 = new RegExp(
                                        "3333(?:0(?:0\\d|1[0-5])|[4-9]\\d\\d)\\d{3}|33(?:00|3[0-24-9])\\d{6}|3(?:0[0-5]|1\\d|2[0-3]|5[01]|70)\\d{7}"
                                    );
                                `}</Code>

                                y con esto podremos comprobar si un número de al menos 10 dígitos, está bien o mal escrito, ejemplo:
                                <br /><br />
                                Número bien escrito con formato colombiano

                                <Code>{`
                                    E10.test("3107234567") //true
                                `}</Code>

                                Número no escrito con formato correcto, no tiene el mínimo de 10 dígitos

                                <Code>{`
                                    E10.test("310723456") //false
                                `}</Code>
                            </div>
                        );
                    }

                    function IndicativosTelefoniaColombia() {
                        return (
                            <div>
                                <h3>
                                    Indicativos de empresas de telefonía en Colombia
                                </h3>

                                <Code nocode>{`
                                    En 2024, Colombia tiene los siguientes indicativos de empresas de telefonía:
    
                                    300, 301, 302, 304, 305 (Tigo)
                                    303 (Uff Móvil)
                                    304 (UNE)
                                    305 (ETB)
                                    310, 311, 312, 313, 314, 320, 321, 322, 323 (Claro anteriormente conocido como Comcel)
                                    315, 316, 317, 318 (Movistar)
                                    319 (Virgin Mobile)
                                    350, 351 (Avantel)
                                `}</Code>

                                lo que significa que la expresión regular anteriormente descrita debe ser capaz de excluir
                                cualquier otro número que no empiece por alguno de estos números, siendo así entonces vamos a probar.
                            </div>
                        );
                    }

                    function TestingIndicativosTelefoniaColombia() {
                        return (
                            <div>
                                <Code>{`
                                    E10.test("3011234567") //true
                                    E10.test("3031234567") //true
                                    E10.test("3061234567") //false
                                    E10.test("3071234567") //false
                                    E10.test("3101234567") //true
                                    E10.test("3601234567") //false
                                `}</Code>

                                Como se puede observar, los números que no inicien por estos indicativos, no son números válidos para
                                números de 10 dígitos de colombia de esta misma manera, se pueden generar las expresiones regulares para
                                los números colombianos de 8 y 11 dígitos:
                            </div>
                        );
                    }

                    function ExpresionesRegularesCortas() {
                        return (
                            <div>
                                <Code>{`
                                    let E8 = new RegExp("[124-8][2-9]\d{6}")
                                    let E11 = new RegExp("1800\d{7}")
                                    let E11_2 = new RegExp("19(?:0[01]|4[78])\d{7}")
                                `}</Code>

                                Estas expresiones son más cortas, puesto que las restricciones son menores.
                            </div>
                        );
                    }
                }
            },
        },
    ]
}