const _ORIGEN_TEL_ = new GenerarContenidoLibreria({
    nombre: 'OrigenTel JS',
    slogan: 'La herramienta definitiva para el origen y otra información de cualquier número telefónico',
    img: 'src/img/logo.jpeg',

    github: "https://github.com/Jeff-Aporta/OrigenTel",

    resumen: {
        desc: `
            Permite identificar el país de origen de un número telefónico a partir de su formato.
        `,
        descImg: [
            "Interpretar un número telefónico y determinar su país de origen",
            "Extraer números telefónicos de un texto",
            "Usa la API 'https://flagicons.lipis.dev/flags/' para mostrar la bandera del país"
        ]
    },

    convertNumberToHTML: function (input) {
        if (!input) {
            return "";
        }

        setTimeout(() => {
            PR.prettyPrint();
        }, 0);

        return (
            <ThemeProvider theme={themeSelected}>
                <SubEnvolventeSeccion
                    className="numberdata"
                    style={{
                        display: "inline-block",
                        fontSize: "11px",
                        border: "1px solid mediumturquoise",
                        padding: "5px",
                    }}
                >
                    <Item left="codeCountry" right={input.codeCountry} />
                    <Item left="codeCall" right={input.codeCall} />
                    <Item left="numberWithoutCodeCall" right={input.numberWithoutCodeCall} />
                    <Item left="complete" right={input.complete} />
                    <Item left="nameCountry" right={input.nameCountry} />
                    <Item left="nameCountryES" right={input.nameCountryES} />
                    <Item left="formatNational" right={input.formatNational} />
                    <Item left="formatInternational" right={input.formatInternational} />
                    <Item left="formatRFC3966" right={input.formatRFC3966} />
                    <Item left="type" right={input.type} />
                    <Item left="isPosible" right={input.isPosible ? "true" : "false"} />
                    <Item left="flagSVG_1x1" right={input.flagSVG_1x1} />
                    <Item left="flagSVG_4x3 img" right={<img src={input.flagSVG_4x3} width="20px" />} />
                    <Item left="flagSVG_4x3" right={input.flagSVG_4x3} />
                    <Item left="flagSVG_1x1 img" right={<img src={input.flagSVG_1x1} width="20px" />} />
                </SubEnvolventeSeccion>
            </ThemeProvider>
        );

        function Item({ left, right }) {
            return (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "5px",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                        gap: "20px"
                    }}
                >
                    <div>
                        <b>
                            {left}
                        </b>
                    </div>
                    <div>
                        {(() => {
                            if (typeof right == "string") {
                                return <CodeInline className="simple">{right}</CodeInline>
                            }
                            return right;
                        })()}
                    </div>
                </div>
            );
        }
    },

    secciones: [
        {
            nombre: "Usar con CDN",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Los números de teléfono varían en forma y se manejan de manera diferente de un país a otro.
                        el módulo de OrigenTel.js puede ayudarnos a formatear correctamente los números de teléfono
                        junto con los códigos de países y también validar campos en interfaces.
                        <Code nocode className="link">
                            {thisObj.githubPage}/index.js
                        </Code>
                    </FormatoDoc>
                );
            },
        },
        {
            nombre: "_getInfoInNumber(String)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <GetInfoInNumber />
                );

                function GetInfoInNumber() {
                    return (
                        <FormatoDoc>
                            Esta función toma una cadena de texto que representa un número de teléfono y devuelve un objeto con
                            información detallada sobre el número, incluyendo el país de origen, el código de llamada, y varios
                            formatos del número.
                            <h3>
                                Parámetros:
                            </h3>
                            <ul className="punto-centrico">
                                <LIDocTitulo>
                                    string (String): El número de teléfono en formato de cadena.
                                </LIDocTitulo>
                            </ul>
                            <br />
                            <Retorno />
                            <br />
                            <EjemploDeUso />
                            <br />
                            <ProbarEnTiempoReal />
                        </FormatoDoc>
                    );

                    function EjemploDeUso() {
                        return (
                            <FormatoDoc>
                                <h2>
                                    Ejemplo de uso&nbsp;
                                    <i
                                        class="fa-solid fa-thumbs-up"
                                        style={{
                                            color: "turquoise"
                                        }}
                                    />
                                </h2>
                                <Code linenumbers={false}>{`
                                    let info = _getInfoInNumber("+1234567890");
                                    console.log(info.nameCountry); // "United States"
                                `}</Code>
                            </FormatoDoc>
                        )
                    }

                    function Retorno() {
                        return (
                            <SubEnvolventeSeccion>
                                <h2>
                                    Retorno:
                                </h2>
                                Un objeto con la siguiente estructura:
                                <small>
                                    <ul className="punto-centrico">
                                        <LIDocTitulo>
                                            codeCountry (String): Código del país.
                                        </LIDocTitulo>
                                        <LIDocTitulo>
                                            codeCall (String): Código de llamada del país.
                                        </LIDocTitulo>
                                        <LIDocTitulo>
                                            numberWithoutCodeCall (String): Número sin el código de llamada.
                                        </LIDocTitulo>
                                        <LIDocTitulo>
                                            complete (String): Número completo.
                                        </LIDocTitulo>
                                        <LIDocTitulo>
                                            nameCountry (String): Nombre del país en inglés.
                                        </LIDocTitulo>
                                        <LIDocTitulo>
                                            nameCountryES (String): Nombre del país en español.
                                        </LIDocTitulo>
                                        <LIDocTitulo>
                                            formatNational (String): Número en formato nacional.
                                        </LIDocTitulo>
                                        <LIDocTitulo>
                                            formatInternational (String): Número en formato internacional.
                                        </LIDocTitulo>
                                        <LIDocTitulo>
                                            formatRFC3966 (String): Número en formato RFC3966.
                                        </LIDocTitulo>
                                        <LIDocTitulo>
                                            type (String): Tipo de número (móvil, fijo, etc.).
                                        </LIDocTitulo>
                                        <LIDocTitulo>
                                            isPosible (Boolean): Indica si el número es posible.
                                        </LIDocTitulo>
                                        <LIDocTitulo>
                                            flagSVG_4x3 (String): URL de la bandera del país en formato 4×3.
                                        </LIDocTitulo>
                                        <LIDocTitulo>
                                            flagSVG_1x1 (String): URL de la bandera del país en formato 1×1.
                                        </LIDocTitulo>
                                    </ul>
                                </small>
                            </SubEnvolventeSeccion>
                        );
                    }

                    function ProbarEnTiempoReal() {
                        function probar() {
                            let value = document.getElementById("number").value;
                            console.log("probar")
                            let result = _getInfoInNumber(value)

                            let html = thisObj.convertNumberToHTML(result)

                            ReactDOM.render(html, document.getElementById("resultados-prueba"));

                            if (result) {
                                document.getElementById("img-prueba").src = result.flagSVG_4x3
                            } else {
                                document.getElementById("img-prueba").src = ""
                            }
                        }

                        return (
                            <SubEnvolventeSeccion>
                                <h2>
                                    <i
                                        className="fa-solid fa-play"
                                        style={{
                                            color: "turquoise"
                                        }}
                                    /> Probar en tiempo real
                                </h2>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        gap: "10px",
                                    }}
                                >
                                    <div
                                        style={{
                                            textAlign: "center"
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "flex-start",
                                                alignItems: "flex-start",
                                                textAlign: "left",
                                            }}
                                        >
                                            <span>
                                                Ingresa un número de teléfono
                                                <br />
                                                <small
                                                    style={{
                                                        opacity: 0.5
                                                    }}
                                                >
                                                    Ejemplo: +573107257816
                                                </small>
                                            </span>
                                            <br />
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "flex-start",
                                                    alignItems: "start",
                                                    flexDirection: "row",
                                                    gap: "20px",
                                                }}
                                            >
                                                <img
                                                    id="img-prueba"
                                                    style={{
                                                        maxWidth: "30px",
                                                        margin: "10px auto",
                                                    }}
                                                />
                                                <TextField
                                                    style={{
                                                        cursor: "text",
                                                        padding: "5px",
                                                        verticalAlign: "top",
                                                    }}
                                                    type="text"
                                                    id="number"
                                                    placeholder="Número a comprobar"
                                                    onChange={probar}
                                                    onKeyup={probar}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="resultados-prueba">
                                    </div>
                                </div>
                            </SubEnvolventeSeccion>
                        );
                    }
                }
            }
        },
        {
            nombre: "_findPhoneNumbers(String)",
            nombre_render_as: "CodeInline",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Esta función busca números de teléfono en un texto dado y devuelve información detallada sobre cada número encontrado.
                        <br />
                        <Parametros />
                        <br />
                        <Retorno />
                        <br />
                        <Descripcion />
                        <br />
                        <EjemploDeUso />
                        <br />
                        <ProbarEnTiempoReal />
                    </FormatoDoc>
                );

                function Descripcion() {
                    return (
                        <p>
                            <FormatoDoc>
                                La función analiza un texto con números de teléfono, y extrae los números de teléfono en formato
                                proporcionado. Luego, para cada número encontrado, llama a la función _findPhoneNumbers() para obtener
                                información detallada sobre el número, incluyendo el país de origen, el código de llamada, y varios
                                formatos del número. Finalmente, devuelve un array con toda esta información.
                            </FormatoDoc>
                        </p>
                    );
                }

                function Retorno() {
                    return (
                        <SubEnvolventeSeccion>
                            <h2>
                                Retorno
                            </h2>

                            Un array de objetos, cada uno conteniendo la información detallada de un número de teléfono encontrado.
                        </SubEnvolventeSeccion>
                    );
                }

                function Parametros() {
                    return (
                        <SubEnvolventeSeccion>
                            <h3>
                                Parámetros:
                            </h3>
                            <ul className="punto-centrico">
                                <LIDocTitulo>
                                    string (String): El texto en el que se buscarán los números de teléfono.
                                </LIDocTitulo>
                            </ul>
                        </SubEnvolventeSeccion>
                    );
                }

                function ProbarEnTiempoReal() {
                    function texto() {
                        let results = _findPhoneNumbers(document.getElementById("text").value);
                        let html = [<br />, <br />];
                        for (const result of results) {
                            html.push(thisObj.convertNumberToHTML(result));
                        }
                        ReactDOM.render(html, document.getElementById("resultados-texto"));
                    }

                    return (
                        <SubEnvolventeSeccion>
                            <h2>
                                <i
                                    className="fa-solid fa-play"
                                    style={{
                                        color: "turquoise"
                                    }}
                                /> Probar en tiempo real
                            </h2>
                            Escribe texto en lenguaje natural que contenga números de teléfono.
                            <br /><br />
                            <div
                                style={{
                                    textAlign: "center",
                                }}
                            >
                                <TextField
                                    multiline
                                    style={{
                                        padding: "10px;text-align: left",
                                        cursor: "text",
                                        width: "100%",
                                        backgroundColor: "rgba(255,255,255,0.05)",
                                    }}
                                    inputProps={{
                                        style: {
                                            color: "skyblue",
                                        }
                                    }}
                                    id="text"
                                    defaultValue={[
                                        `Hola amigos, mi nombre es Jeffrey Agudelo y mi número es +573107257814, el número de mi madre 
                                        es +7 8005553535 y el de mi padre es (+91)9098765432, el de mi tío es +3-161-3355460 y el de 
                                        mi tía es +52 8886732311`,
                                        `es importante destacar que los números escritos anteriormente tienen diferentes formatos, espacios, 
                                        guiones y paréntesis, esta función los encontrará y los extraerá.`
                                    ].map(r => r.split("\n").map(r => r.trim()).join(" ")).join("\n\n")}
                                >
                                </TextField>
                                <br />
                                <br />
                                <Button
                                    variant="contained"
                                    className="btn btn-primary"
                                    style={{
                                        verticalAlign: "top"
                                    }}
                                    onClick={texto}
                                    startIcon={<i className="fa-solid fa-search" />}
                                >
                                    Buscar
                                </Button>
                            </div>
                            <div id="resultados-texto"
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "10px",
                                    padding: "30px 0",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                            </div>
                        </SubEnvolventeSeccion >
                    )
                }

                function EjemploDeUso() {
                    return (
                        <FormatoDoc>
                            <h2>
                                Ejemplo de uso&nbsp;
                                <i
                                    class="fa-solid fa-thumbs-up"
                                    style={{
                                        color: "turquoise"
                                    }}
                                />
                            </h2>
                            <Code linenumbers={false}>{`
                                let phoneNumbersInfo = _findPhoneNumbers("Contacta a Juan al +1234567890 o a María al +0987654321.");
                                console.log(phoneNumbersInfo);
                            `}</Code>
                        </FormatoDoc>
                    );
                }
            },
        },
        {
            nombre: "Tutorial",
            contenido: (thisObj) => {
                return (
                    <FormatoDoc>
                        Una vez importada la librería en el head, ya sea con la CDN o si descargaste el archivo, podrás ejecutar el
                        código que se presentará a continuación:
                        <br /><br />
                        <AnalizandoUnNumeroDeTelefono />
                        <br />
                        <br />
                        <AnalizandoCadenasDeTextoConRuido />
                    </FormatoDoc>
                )

                function AnalizandoUnNumeroDeTelefono() {
                    return (
                        <SubEnvolventeSeccion>
                            <h2>
                                <Resaltar>
                                    <i class="fa-solid fa-angles-right" /> ANALIZANDO UN NÚMERO DE TELÉFONO
                                </Resaltar>
                            </h2>

                            Veamos cómo podemos usar el _getInfoInNumber(), para que nos retorne un objeto con la información, debemos pasarle de argumento el número de teléfono completo, incluido el código del país.

                            <Code>{`
                                let result = _getInfoInNumber("+573107257814") //{codeCountry: "CO",codeCall: "57",...
                            `}</Code>

                            La función _getInfoInNumber() devuelve los siguientes datos.

                            <Code linenumbers={0}>{`
                                    {
                                        codeCountry: "CO", // Código del país
                                        codeCall: "57", // Código de llamada
                                        numberWithoutCodeCall: "3107257814", // Número sin el código de llamada
                                        complete: "+573107257814", // Número completo con el código de llamada
                                        nameCountry: "Colombia", // Nombre del país en inglés
                                        nameCountryES: "Colombia", // Nombre del país en español
                                        formatNational: "310 7257814", // Formato nacional del número
                                        formatInternational: "+57 310 7257814", // Formato internacional del número
                                        formatRFC3966: "tel:+573107257814", // Formato RFC3966 del número
                                        type: "MOBILE", // Tipo de número (móvil)
                                        isPosible: true, // Indica si el número es posible
                                        flagSVG_4x3: "https://flagicons.lipis.dev/flags/4x3/co.svg", // URL de la bandera en formato 4x3
                                        flagSVG_1x1: "https://flagicons.lipis.dev/flags/1x1/co.svg" // URL de la bandera en formato 1x1
                                    }
                                `}</Code>
                        </SubEnvolventeSeccion>
                    );
                }

                function AnalizandoCadenasDeTextoConRuido() {
                    return (
                        <SubEnvolventeSeccion>
                            <FormatoDoc>
                                <h2>
                                    <Resaltar>
                                        <i class="fa-solid fa-angles-right" /> ANALIZANDO CADENAS DE TEXTO CON RUIDO
                                    </Resaltar>
                                </h2>
                                Se le denomina ruido a toda a toda perturbación textual que haya en el input, que no corresponda con
                                un número de teléfono, datos que para el intérprete no tienen ningún sentido, puesto que no fue
                                entrenado para esto. El intérprete es capaz de extraer los números de teléfono con formato internacional
                                que hayan en una cadena.
                                <br /><br />
                                Para la cadena "Mi número es (+57)310-725 7814, me llamo Jeff", el número a extraer es +573107257814,
                                tiene ruido por la derecha, por la izquierda y en medio, sin embargo el siguiente código extraerá y
                                retornará los datos de todos los números con formato internacional que encuentre en la cadena suministrada.
                                <Code>{`
                                let results = _findPhoneNumbers("Mi número es (+57)310-725 7814, me llamo Jeff")
                            `}</Code>
                                La función _findPhoneNumbers() devuelve un arreglo con el _getInfoInNumber() de todos los números encontrados.
                                <br /><br />
                                Salida esperada:

                                <Code linenumbers={0}>{`
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
                            </FormatoDoc>
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
                        <FormatoDoc>
                            <h1>
                                Resumen
                            </h1>

                            Esto lo hace por medio de expresiones regulares, y algoritmos, pudiendo retornar así un objeto con la
                            información que puede extraer del número, para que quede claro, les voy a explicar con un ejemplo lo
                            que hace internamente el programas.
                            <br /><br />
                            Hablemos en el caso de Colombia, los teléfonos tienen 8, 10 y 11 dígitos, debe existir una función que
                            una vez reconocido el indicativo del país, extraiga el resto del número para hacer las correspondientes
                            verificaciones. En el caso de los números con 10 dígitos.
                        </FormatoDoc>
                    );
                }

                function ReglasParaColombia() {
                    return (
                        <div>
                            <SubEnvolventeSeccion>
                                <h2>
                                    <Resaltar>
                                        Reglas para Colombia
                                    </Resaltar>
                                </h2>

                                <ExpresionRegularParaTelefoniaMovilColombia />

                                También hay que analizar que los números de 10 dígitos en colombia, aparte de iniciar por 3 sus siguientes 2 dígitos tienen restricciones,
                                los primeros 3 dígitos para esta clase de números son algunos de estos:
                                <br />
                                <IndicativosTelefoniaColombia />
                                <TestingIndicativosTelefoniaColombia />
                                <ExpresionesRegularesCortas />
                            </SubEnvolventeSeccion>
                        </div>
                    )

                    function ExpresionRegularParaTelefoniaMovilColombia() {
                        return (
                            <FormatoDoc>
                                La expresión regular es la siguiente:

                                <Code linenumbers={false}>{`
                                    let E10 = new RegExp(
                                        "3333(?:0(?:0\\d|1[0-5])|[4-9]\\d\\d)\\d{3}|33(?:00|3[0-24-9])\\d{6}|3(?:0[0-5]|1\\d|2[0-3]|5[01]|70)\\d{7}"
                                    );
                                `}</Code>

                                y con esto podremos comprobar si un número de al menos 10 dígitos, está bien o mal escrito, ejemplo:
                                <br /><br />
                                Número bien escrito con formato colombiano.

                                <Code>{`
                                    E10.test("3107234567") //true
                                `}</Code>

                                Número no escrito con formato correcto, no tiene el mínimo de 10 dígitos.

                                <Code>{`
                                    E10.test("310723456") //false
                                `}</Code>
                            </FormatoDoc>
                        );
                    }

                    function IndicativosTelefoniaColombia() {
                        return (
                            <FormatoDoc>
                                <h2>
                                    <Resaltar>
                                        Indicativos de empresas de telefonía en Colombia
                                    </Resaltar>
                                </h2>

                                En 2024, Colombia tiene los siguientes indicativos de empresas de telefonía:

                                <Code nocode>{`
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
                            </FormatoDoc>
                        );
                    }

                    function TestingIndicativosTelefoniaColombia() {
                        return (
                            <FormatoDoc>
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
                            </FormatoDoc>
                        );
                    }

                    function ExpresionesRegularesCortas() {
                        return (
                            <FormatoDoc>
                                <Code>{`
                                    let E8 = new RegExp("[124-8][2-9]\d{6}")
                                    let E11 = new RegExp("1800\d{7}")
                                    let E11_2 = new RegExp("19(?:0[01]|4[78])\d{7}")
                                `}</Code>

                                Estas expresiones son más cortas, puesto que las restricciones son menores.
                            </FormatoDoc>
                        );
                    }
                }
            },
        },
    ]
});