const preguntas = [

    // ==================================================
    // COMUNICACIÓN Y REDES
    // ==================================================

    {
        pregunta: "¿Qué es una red de ordenadores?",
        opciones: [
            "Un conjunto de ordenadores conectados para compartir recursos e información",
            "Un único ordenador conectado a Internet",
            "Un programa para navegar por Internet",
            "Un sistema operativo"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuáles son algunos elementos necesarios para que exista una comunicación?",
        opciones: [
            "Emisor, receptor, mensaje, canal y protocolo",
            "Solo emisor y receptor",
            "Solo un ordenador",
            "Un router y un switch"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué es un protocolo de comunicación?",
        opciones: [
            "Un conjunto de reglas que permite la comunicación",
            "Un tipo de cable",
            "Un ordenador",
            "Una dirección IP"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuál es un medio de transmisión guiado?",
        opciones: [
            "Cable",
            "Radio",
            "Wi-Fi",
            "Ondas de radio"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuál es un medio de transmisión no guiado?",
        opciones: [
            "Fibra óptica",
            "Cable coaxial",
            "Ondas de radio",
            "Cable de cobre"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué significa que una red sea escalable?",
        opciones: [
            "Que puede crecer sin afectar demasiado a su funcionamiento",
            "Que solo puede tener pocos dispositivos",
            "Que funciona únicamente de forma inalámbrica",
            "Que no necesita protocolos"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué caracteriza a una transmisión simplex?",
        opciones: [
            "La información circula en ambos sentidos simultáneamente",
            "La información circula en un único sentido",
            "La información circula alternativamente",
            "No existe comunicación"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué caracteriza a una transmisión semidúplex?",
        opciones: [
            "La comunicación solo ocurre en un sentido",
            "La comunicación ocurre en ambos sentidos al mismo tiempo",
            "La comunicación ocurre en ambos sentidos, pero no simultáneamente",
            "No existe receptor"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué caracteriza a una transmisión dúplex?",
        opciones: [
            "La comunicación ocurre en ambos sentidos simultáneamente",
            "La comunicación ocurre únicamente en un sentido",
            "No existe canal",
            "Solo existe un receptor"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué ocurre en la conmutación de circuitos?",
        opciones: [
            "Se establece un camino dedicado durante la comunicación",
            "Los datos siempre se envían por caminos diferentes",
            "No existe comunicación",
            "Solo se utilizan redes inalámbricas"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué ocurre en la conmutación de paquetes?",
        opciones: [
            "La información se divide en paquetes que pueden viajar por la red",
            "Se reserva siempre un circuito físico completo",
            "Solo se utiliza un cable",
            "La información no se divide"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué significa P2P?",
        opciones: [
            "Peer to Peer",
            "Point to Point Router",
            "Packet to Protocol",
            "Private to Private"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué caracteriza a una red P2P?",
        opciones: [
            "Los dispositivos pueden actuar como clientes y servidores",
            "Solo existe un servidor",
            "No se pueden compartir recursos",
            "Solo funciona con routers"
        ],
        correcta: 0
    },


    // ==================================================
    // TIPOS DE RED SEGÚN EXTENSIÓN
    // ==================================================

    {
        pregunta: "¿Qué significa PAN?",
        opciones: [
            "Personal Area Network",
            "Public Area Network",
            "Private Access Network",
            "Packet Area Network"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué significa LAN?",
        opciones: [
            "Local Area Network",
            "Large Area Network",
            "Local Access Node",
            "Linked Area Network"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué significa MAN?",
        opciones: [
            "Metropolitan Area Network",
            "Main Area Network",
            "Medium Access Network",
            "Metropolitan Access Node"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué significa WAN?",
        opciones: [
            "Wide Area Network",
            "Wireless Area Network",
            "Web Access Network",
            "Wide Access Node"
        ],
        correcta: 0
    },


    // ==================================================
    // TOPOLOGÍAS
    // ==================================================

    {
        pregunta: "¿Qué es la topología de una red?",
        opciones: [
            "La forma en la que están organizados los dispositivos y conexiones",
            "El sistema operativo de los ordenadores",
            "La dirección IP de los equipos",
            "El protocolo utilizado"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué describe una topología física?",
        opciones: [
            "La disposición física de los dispositivos y cables",
            "El funcionamiento de los protocolos",
            "Las direcciones IP",
            "Los programas instalados"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué caracteriza a una topología en bus?",
        opciones: [
            "Todos los dispositivos comparten un cable principal",
            "Todos los dispositivos tienen conexiones con todos",
            "Existe un dispositivo central",
            "Los dispositivos forman un círculo"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué característica tiene una topología en anillo?",
        opciones: [
            "Los dispositivos están conectados formando un círculo",
            "Existe un dispositivo central",
            "Todos los dispositivos usan un único cable lineal",
            "Todos están conectados con todos"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué ventaja puede ofrecer un doble anillo?",
        opciones: [
            "Mayor redundancia y tolerancia a fallos",
            "Menor número de conexiones",
            "Eliminación de todos los dispositivos",
            "Ausencia total de cables"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué caracteriza a una topología en estrella?",
        opciones: [
            "Los dispositivos están conectados a un dispositivo central",
            "Los dispositivos forman un círculo",
            "Todos los dispositivos están conectados entre sí",
            "Existe un único cable principal"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué caracteriza a una topología en malla?",
        opciones: [
            "Los dispositivos tienen múltiples conexiones entre ellos",
            "Existe un único dispositivo central",
            "Solo existe un cable principal",
            "Los dispositivos forman necesariamente un círculo"
        ],
        correcta: 0
    },


    // ==================================================
    // NUEVO CONTENIDO DE LAS DIAPOSITIVAS
    // ==================================================

    {
        pregunta: "¿Qué característica tiene actualmente la topología en bus según las diapositivas?",
        opciones: [
            "Está en desuso",
            "Es la más utilizada",
            "Es obligatoria en las LAN",
            "Solo se utiliza en redes WAN"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué inconveniente tiene el cable backbone de una topología en bus?",
        opciones: [
            "La señal se degrada cuanto más largo es el cable",
            "Necesita un servidor para cada ordenador",
            "No permite conectar ningún dispositivo",
            "No puede transportar señales"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué ocurre en una topología bus si se rompe el cable principal?",
        opciones: [
            "Puede caer toda la red",
            "Solo se apaga el dispositivo más cercano",
            "La red se convierte automáticamente en estrella",
            "No ocurre nada"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué característica de la topología en anillo dificulta añadir nuevos nodos?",
        opciones: [
            "Hay que romper el anillo para insertar un nuevo nodo",
            "Es necesario cambiar todos los cables",
            "Hay que apagar todos los servidores",
            "No se pueden añadir nodos nunca"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué ocurre si se rompe un anillo en una topología de anillo?",
        opciones: [
            "Puede caer toda la red",
            "Solo se pierde un ordenador",
            "La red se convierte en malla",
            "No afecta a la comunicación"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué característica tiene una topología de doble anillo?",
        opciones: [
            "Cada nodo se une a dos anillos",
            "Cada nodo se conecta solamente a un servidor",
            "Todos los nodos utilizan un único cable",
            "Solo existe un nodo conectado"
        ],
        correcta: 0
    },

    {
        pregunta: "En una topología de doble anillo, ¿cómo pueden circular las tramas?",
        opciones: [
            "Por los dos anillos en sentidos contrarios",
            "Solo por un cable principal",
            "Únicamente hacia el servidor",
            "Solo mediante conexiones inalámbricas"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuántos anillos están activos simultáneamente en la topología de doble anillo según las diapositivas?",
        opciones: [
            "Uno",
            "Dos",
            "Tres",
            "Ninguno"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuál es un inconveniente de la topología de doble anillo?",
        opciones: [
            "Tiene más cableado que la topología en anillo",
            "No tiene redundancia",
            "No permite transmitir tramas",
            "No permite conectar nodos"
        ],
        correcta: 0
    },

    {
        pregunta: "En una topología estrella, ¿a qué se conecta cada nodo?",
        opciones: [
            "A un concentrador, como un switch o HUB",
            "A todos los demás nodos directamente",
            "A un único cable backbone",
            "A dos anillos"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué ocurre en una topología estrella si un nodo deja de funcionar?",
        opciones: [
            "La red no tiene por qué caer",
            "Toda la red cae siempre",
            "Se rompe el backbone",
            "Se pierde el servidor"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuál es un punto de fallo de la topología estrella?",
        opciones: [
            "El HUB o concentrador",
            "Cada ordenador individual",
            "El cable de alimentación de cada PC",
            "La dirección IP"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué característica tiene una topología malla respecto a los fallos?",
        opciones: [
            "Permite encontrar caminos alternativos",
            "No permite caminos alternativos",
            "Siempre necesita un único servidor",
            "La red cae ante cualquier fallo"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuál es el principal inconveniente de la topología malla según las diapositivas?",
        opciones: [
            "Necesita muchísimo cableado",
            "No permite conectar nodos",
            "No tiene tolerancia a fallos",
            "Solo funciona con un ordenador"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cómo se caracteriza una topología en árbol?",
        opciones: [
            "La red se ramifica desde un servidor base conectado a un concentrador",
            "Todos los dispositivos forman un círculo",
            "Todos los dispositivos se conectan directamente entre sí",
            "Todos utilizan un único cable backbone"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué otro nombre recibe la topología en árbol según las diapositivas?",
        opciones: [
            "Estrella jerárquica o estrella extendida",
            "Doble bus",
            "Malla extendida",
            "Anillo jerárquico"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué ocurre si cae el segmento principal de una topología en árbol?",
        opciones: [
            "El segmento que depende de él también puede caer",
            "No ocurre nada",
            "Todos los equipos pasan automáticamente a una malla",
            "Solo se reinicia el servidor"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué topologías aparecen como obsoletas en las diapositivas?",
        opciones: [
            "Bus y anillo",
            "Estrella y malla",
            "Árbol y estrella",
            "Malla y árbol"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué controla una topología lógica de transmisión de tokens?",
        opciones: [
            "El acceso a la red mediante testigos o tokens",
            "La longitud de los cables",
            "La dirección IP de los ordenadores",
            "La potencia eléctrica"
        ],
        correcta: 0
    },

    {
        pregunta: "En una topología de transmisión de tokens, ¿cuándo puede transmitir una estación?",
        opciones: [
            "Cuando está en posesión del testigo",
            "Cuando quiera, sin ninguna condición",
            "Cuando se desconecta del servidor",
            "Cuando cambia su dirección IP"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué protocolo de nivel 2 aparece como ejemplo de topología broadcast?",
        opciones: [
            "Ethernet",
            "TCP",
            "IP",
            "HTTP"
        ],
        correcta: 0
    },


    // ==================================================
    // DOMINIOS DE RED
    // ==================================================

    {
        pregunta: "¿Qué es un dominio de difusión o broadcast?",
        opciones: [
            "Una agrupación lógica de equipos donde un mensaje de difusión llega a los demás equipos del segmento",
            "Un conjunto de cables que no pueden transmitir datos",
            "Una red donde solo existe un ordenador",
            "Un conjunto de servidores de Internet"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué ocurre cuando un equipo envía un mensaje de difusión dentro de su dominio de broadcast?",
        opciones: [
            "El mensaje llega a los demás equipos del dominio",
            "El mensaje solo llega al propio equipo",
            "El mensaje se elimina inmediatamente",
            "El mensaje llega únicamente al servidor"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué es un dominio de colisión?",
        opciones: [
            "Una agrupación de equipos donde transmisiones simultáneas pueden provocar una colisión",
            "Una agrupación de servidores DNS",
            "Una red sin ningún tipo de transmisión",
            "Una red donde todos los mensajes son privados"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué efecto puede producir una colisión en una red?",
        opciones: [
            "Un menor rendimiento de la red",
            "Un aumento automático del ancho de banda",
            "Una mejora de la señal",
            "Una reducción del número de dispositivos"
        ],
        correcta: 0
    },


    // ==================================================
    // TITULARIDAD
    // ==================================================

    {
        pregunta: "¿A quién pertenecen las redes públicas según las diapositivas?",
        opciones: [
            "A un proveedor de servicios de telecomunicaciones",
            "Siempre a un usuario particular",
            "Siempre a una empresa privada",
            "A un fabricante de ordenadores"
        ],
        correcta: 0
    },

    {
        pregunta: "¿A quién puede pertenecer una red privada?",
        opciones: [
            "A un particular o a una empresa",
            "Solo a un gobierno",
            "Solo a un proveedor de Internet",
            "A cualquier usuario de Internet simultáneamente"
        ],
        correcta: 0
    },


    // ==================================================
    // VENTAJAS E INCONVENIENTES
    // ==================================================

    {
        pregunta: "¿Cuál es una ventaja de las redes relacionada con los dispositivos?",
        opciones: [
            "Permiten compartir dispositivos como impresoras",
            "Obligan a tener una impresora por ordenador",
            "Impiden compartir recursos",
            "Eliminan todos los dispositivos físicos"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué permiten hacer las redes con los datos?",
        opciones: [
            "Intercambiarlos sin necesitar soportes intermedios",
            "Eliminar todos los datos automáticamente",
            "Impedir el acceso remoto",
            "Utilizarlos únicamente desde un ordenador"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué permite la administración centralizada en una red?",
        opciones: [
            "Gestionar los recursos de forma centralizada",
            "Eliminar los protocolos",
            "Evitar cualquier tipo de comunicación",
            "Desconectar automáticamente todos los equipos"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué permiten las copias de seguridad automáticas y remotas?",
        opciones: [
            "Realizar copias de seguridad de forma automática y desde ubicaciones remotas",
            "Eliminar los archivos originales siempre",
            "Impedir el acceso a los datos",
            "Eliminar la necesidad de almacenamiento"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuál es un inconveniente de las redes?",
        opciones: [
            "El coste de instalación, configuración y mantenimiento",
            "La imposibilidad de compartir datos",
            "La ausencia de servicios",
            "La imposibilidad de realizar copias de seguridad"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué problemas pueden aparecer durante la transmisión?",
        opciones: [
            "Ruidos, interferencias, ecos y atenuación de las señales",
            "Solo problemas de teclado",
            "Únicamente problemas de software",
            "Ningún problema"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué puede limitar la transmisión de datos en una red?",
        opciones: [
            "La capacidad del canal o ancho de banda",
            "El nombre del ordenador",
            "El sistema operativo únicamente",
            "El tamaño del teclado"
        ],
        correcta: 0
    },


    // ==================================================
    // CARACTERÍSTICAS DE UNA RED
    // ==================================================

    {
        pregunta: "¿Qué significa tolerancia a fallos en una red?",
        opciones: [
            "La capacidad de continuar funcionando ante determinados fallos",
            "La capacidad de eliminar todos los dispositivos",
            "La imposibilidad de sufrir fallos",
            "La obligación de apagar la red"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué significa QoS?",
        opciones: [
            "Calidad de Servicio",
            "Cantidad de Operaciones del Sistema",
            "Control de Ordenadores Seguros",
            "Calidad de Operaciones Simples"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué tres aspectos forman parte de la seguridad mencionada en las diapositivas?",
        opciones: [
            "Confidencialidad, integridad y disponibilidad",
            "Velocidad, tamaño y potencia",
            "Dirección, protocolo y cable",
            "Emisor, receptor y canal"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué requisito indica que una red debe poder adaptarse a nuevas tecnologías?",
        opciones: [
            "Flexibilidad",
            "Economía",
            "Equitatividad",
            "Robustez"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué requisito indica que una red debe poder crecer o decrecer según las necesidades?",
        opciones: [
            "Escalabilidad",
            "Seguridad",
            "Equitatividad",
            "Robustez"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué requisito busca que la red no sea excesivamente cara para la organización?",
        opciones: [
            "Económico",
            "Flexible",
            "Escalable",
            "Robusto"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué significa equitatividad en el diseño de una red?",
        opciones: [
            "Que los equipos que comparten tecnología dispongan de la misma cantidad de recursos ofrecidos por la red",
            "Que todos los equipos tengan la misma dirección IP",
            "Que todos utilicen el mismo sistema operativo",
            "Que todos tengan el mismo hardware"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué significa robustez en el diseño de una red según las diapositivas?",
        opciones: [
            "Que la información pueda viajar fluidamente por una red potente",
            "Que la red sea siempre inalámbrica",
            "Que todos los equipos sean iguales",
            "Que la red tenga un único servidor"
        ],
        correcta: 0
    },


    // ==================================================
    // MODELO OSI
    // ==================================================

    {
        pregunta: "¿Cuántas capas tiene el modelo OSI?",
        opciones: [
            "4",
            "5",
            "7",
            "8"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué significa OSI?",
        opciones: [
            "Open Systems Interconnection",
            "Operating System Internet",
            "Open Security Interface",
            "Online Systems Internet"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué función tiene la capa de Aplicación del modelo OSI?",
        opciones: [
            "Proporciona servicios de red a las aplicaciones",
            "Transmite bits por el medio físico",
            "Gestiona direcciones MAC",
            "Realiza el encaminamiento"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué función tiene la capa de Presentación?",
        opciones: [
            "Formato, cifrado y compresión de los datos",
            "Encaminamiento de paquetes",
            "Control de cables",
            "Asignación de direcciones MAC"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué función tiene la capa de Transporte?",
        opciones: [
            "Controla la entrega de datos entre procesos",
            "Solo transmite bits",
            "Gestiona únicamente cables",
            "Solo trabaja con direcciones MAC"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué función tiene la capa de Red?",
        opciones: [
            "Realiza el direccionamiento lógico y el encaminamiento",
            "Controla el medio físico",
            "Gestiona archivos",
            "Realiza únicamente cifrado"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué dirección utiliza la capa de Enlace para identificar físicamente los dispositivos?",
        opciones: [
            "Dirección MAC",
            "Dirección IP",
            "Puerto",
            "URL"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué dispositivo trabaja principalmente con direcciones MAC?",
        opciones: [
            "Switch",
            "Router",
            "Servidor DNS",
            "Módem"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué dispositivo se utiliza para realizar el encaminamiento entre redes?",
        opciones: [
            "Router",
            "Switch",
            "Hub",
            "Tarjeta gráfica"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cómo se llama la unidad de datos de la capa de Enlace?",
        opciones: [
            "Trama",
            "Paquete",
            "Segmento",
            "Bit"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué es la encapsulación?",
        opciones: [
            "Proceso de añadir información de control de las capas a los datos",
            "Eliminar todos los datos",
            "Apagar una conexión",
            "Cambiar una dirección IP"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué es el payload?",
        opciones: [
            "La información útil que se transporta",
            "La dirección MAC",
            "El cable utilizado",
            "El protocolo de red"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué es la desencapsulación?",
        opciones: [
            "Proceso inverso a la encapsulación al recibir los datos",
            "Crear una nueva red",
            "Asignar una dirección IP",
            "Crear un cable"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué es la multiplexación?",
        opciones: [
            "Permite gestionar varias comunicaciones utilizando un mismo medio",
            "Eliminar paquetes",
            "Apagar un dispositivo",
            "Crear una dirección MAC"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Para qué sirve el identificador o clave de multiplexación?",
        opciones: [
            "Para identificar a qué comunicación pertenece la información",
            "Para apagar el router",
            "Para cambiar el cable",
            "Para eliminar la información"
        ],
        correcta: 0
    },


    // ==================================================
    // NUEVO CONTENIDO DETALLADO DE OSI
    // ==================================================

    {
        pregunta: "¿Qué hacen las tres capas superiores del modelo OSI?",
        opciones: [
            "Ofrecen servicios a las aplicaciones",
            "Se encargan exclusivamente del transporte físico",
            "Transmiten únicamente bits",
            "Gestionan únicamente cables"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué hacen las cuatro capas inferiores del modelo OSI?",
        opciones: [
            "Organizan y realizan el transporte de los datos",
            "Solo proporcionan servicios a las aplicaciones",
            "Solo gestionan documentos",
            "Solo ejecutan programas"
        ],
        correcta: 0
    },

    {
        pregunta: "¿En qué unidades se va dividiendo la información al atravesar las capas OSI?",
        opciones: [
            "Segmentos, paquetes, tramas y bits",
            "Archivos, carpetas, discos y sectores",
            "Puertos, IP, MAC y URL",
            "Bytes, carpetas, archivos y discos"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué función tiene específicamente la capa de Sesión?",
        opciones: [
            "Iniciar, coordinar y finalizar conversaciones entre aplicaciones",
            "Transmitir bits por el medio",
            "Realizar el direccionamiento IP",
            "Construir tramas"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué realiza la capa de Sesión con el diálogo entre aplicaciones?",
        opciones: [
            "Administra el intercambio de datos y sincroniza el diálogo",
            "Realiza el encaminamiento",
            "Cifra todos los cables",
            "Asigna direcciones MAC"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué realiza la capa de Transporte con los bloques grandes de datos?",
        opciones: [
            "Los segmenta antes de transmitirlos y los reensambla en el destino",
            "Los convierte directamente en bits sin segmentarlos",
            "Los elimina",
            "Los almacena permanentemente"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué control realiza la capa de Transporte sobre la red?",
        opciones: [
            "Control de la congestión",
            "Control del brillo del monitor",
            "Control de los cables eléctricos",
            "Control de los usuarios"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué diferencia hay entre enrutamiento y direccionamiento en la capa de Red?",
        opciones: [
            "El enrutamiento busca el camino y el direccionamiento identifica el nodo destino",
            "El direccionamiento busca el camino y el enrutamiento identifica el nodo",
            "Ambos significan exactamente lo mismo",
            "Ninguno pertenece a la capa de Red"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué construye la capa de Enlace?",
        opciones: [
            "Frames o tramas",
            "Segmentos",
            "Paquetes IP únicamente",
            "Bits exclusivamente"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué controla la capa de Enlace respecto a los frames?",
        opciones: [
            "El orden de llegada de los frames y la notificación de errores físicos",
            "La resolución de nombres DNS",
            "La dirección IP pública",
            "La compresión de imágenes"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué tipo de características define la capa Física?",
        opciones: [
            "Características mecánicas, eléctricas y funcionales",
            "Direcciones IP y puertos",
            "Sesiones y aplicaciones",
            "Usuarios y contraseñas"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué transporta la capa Física a través del medio?",
        opciones: [
            "Un chorro de bits",
            "Aplicaciones completas",
            "Direcciones DNS",
            "Sesiones"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué aspectos físicos puede especificar la capa Física?",
        opciones: [
            "Voltaje, sincronización, frecuencia, distancias y conectores",
            "Usuarios, contraseñas y permisos",
            "Direcciones IP y nombres de dominio",
            "Archivos y carpetas"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué es una PDU?",
        opciones: [
            "Un bloque de información que se intercambia entre capas del modelo OSI",
            "Un dispositivo físico de red",
            "Una dirección IP",
            "Un protocolo de Internet"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué significa PDU?",
        opciones: [
            "Protocol Data Unit",
            "Protocol Device User",
            "Packet Data User",
            "Physical Data Unit"
        ],
        correcta: 0
    },


    // ==================================================
    // TCP/IP
    // ==================================================

    {
        pregunta: "¿Qué es TCP/IP?",
        opciones: [
            "Una suite de protocolos que permite que los ordenadores se comuniquen",
            "Un único protocolo de red",
            "Un tipo de cable",
            "Un modelo formado únicamente por hardware"
        ],
        correcta: 0
    },

    {
        pregunta: "¿De dónde procede el nombre TCP/IP?",
        opciones: [
            "De los protocolos Transmission Control Protocol e Internet Protocol",
            "De dos capas del modelo OSI",
            "De dos tipos de cables",
            "De dos fabricantes de routers"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuántas capas utiliza la arquitectura TCP/IP presentada en las diapositivas?",
        opciones: [
            "Cuatro",
            "Siete",
            "Dos",
            "Ocho"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuál es la capa superior de la arquitectura TCP/IP mostrada en las diapositivas?",
        opciones: [
            "Aplicación",
            "Internet",
            "Transporte",
            "Acceso de Red"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué capa de TCP/IP define el datagrama y maneja el enrutamiento?",
        opciones: [
            "Internet",
            "Aplicación",
            "Transporte",
            "Acceso de Red"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué capa de TCP/IP contiene las rutinas para acceder al medio físico?",
        opciones: [
            "Acceso de Red",
            "Aplicación",
            "Internet",
            "Transporte"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cómo se presenta TCP/IP respecto al modelo OSI?",
        opciones: [
            "TCP/IP es una implementación real, mientras que OSI es un modelo de referencia",
            "OSI es una implementación real y TCP/IP solo un modelo teórico",
            "Ambos son exactamente el mismo modelo",
            "TCP/IP no utiliza protocolos"
        ],
        correcta: 0
    },


    // ==================================================
    // ORGANISMOS DE NORMALIZACIÓN
    // ==================================================

    {
        pregunta: "¿Qué significa IETF?",
        opciones: [
            "Internet Engineering Task Force",
            "Internet Electronic Technology Foundation",
            "International Engineering Technical Federation",
            "Internet Ethernet Transport Framework"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuál es uno de los objetivos de la IETF?",
        opciones: [
            "Contribuir al desarrollo e ingeniería de Internet",
            "Fabricar ordenadores",
            "Gestionar exclusivamente cables submarinos",
            "Crear sistemas operativos"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué son las RFCs en el contexto de la IETF?",
        opciones: [
            "Propuestas y estándares de Internet",
            "Tipos de cables",
            "Direcciones IP privadas",
            "Sistemas operativos"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué significa IEEE?",
        opciones: [
            "Institute of Electrical and Electronics Engineers",
            "International Engineering Ethernet Organization",
            "Internet Electronic Engineering Enterprise",
            "Institute of Ethernet and Electronic Equipment"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué tipo de organización es IEEE según las diapositivas?",
        opciones: [
            "Una asociación técnico-profesional sin ánimo de lucro",
            "Una empresa privada de telecomunicaciones",
            "Un proveedor de Internet",
            "Un fabricante de routers"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué significa ITU?",
        opciones: [
            "International Telecommunication Union",
            "Internet Technical Union",
            "International Technology Users",
            "Internet Telecommunications Users"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué organismo regula las comunicaciones a nivel internacional según las diapositivas?",
        opciones: [
            "La ITU",
            "La IETF",
            "La IEEE",
            "La IANA"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué organismo gestiona el espacio de frecuencias radioeléctricas y las órbitas de los satélites?",
        opciones: [
            "La ITU",
            "La IETF",
            "La IEEE",
            "La IANA"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué significa IANA?",
        opciones: [
            "Internet Assigned Numbers Authority",
            "Internet Architecture Network Association",
            "International Assigned Network Authority",
            "Internet Access Numbers Administration"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué organismo se encarga de asignar recursos de números como direcciones IP?",
        opciones: [
            "IANA",
            "IEEE",
            "IETF",
            "ITU"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuál es una de las áreas de trabajo fundamentales de IANA?",
        opciones: [
            "La administración de nombres de dominio",
            "La fabricación de switches",
            "El diseño de cables de fibra",
            "La creación de sistemas operativos"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué otro recurso administra IANA además de las direcciones IP y nombres de dominio?",
        opciones: [
            "La asignación de protocolos, como números de puertos",
            "La fabricación de routers",
            "La creación de cables",
            "La instalación de sistemas operativos"
        ],
        correcta: 0
    },

    // ==================================================
    // WIRESHARK Y CAPTURA DE TRAMAS ETHERNET
    // ==================================================

    {
        pregunta: "¿Para qué sirve Wireshark?",
        opciones: [
            "Para capturar y analizar tráfico de red",
            "Para crear direcciones MAC",
            "Para sustituir el sistema operativo",
            "Para fabricar tarjetas de red"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué muestra el filtro icmp de Wireshark?",
        opciones: [
            "Solo los paquetes que coinciden con el protocolo ICMP",
            "Únicamente las direcciones MAC",
            "Solo el tráfico DNS",
            "Todos los archivos del ordenador"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué hace un filtro de visualización en Wireshark?",
        opciones: [
            "Impide que el tráfico filtrado llegue a la tarjeta de red",
            "Elimina los paquetes de Internet",
            "Limita lo que se muestra en pantalla, pero no impide que se capture otro tráfico",
            "Desconecta la interfaz de red"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué protocolo se utiliza habitualmente para comprobar la conectividad mediante ping?",
        opciones: [
            "HTTP",
            "ICMP",
            "FTP",
            "SMTP"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué mensaje ICMP envía normalmente el equipo que inicia un ping?",
        opciones: [
            "Echo Reply",
            "ARP Reply",
            "TCP SYN",
            "Echo Request"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Qué mensaje ICMP representa la respuesta a una petición de ping?",
        opciones: [
            "Echo Reply",
            "Echo Request",
            "ARP Request",
            "DNS Query"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué es una trama Ethernet II?",
        opciones: [
            "Una unidad de datos utilizada en una red Ethernet",
            "Un tipo de dirección IP",
            "Un programa para capturar tráfico",
            "Un protocolo de correo electrónico"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuántos bytes ocupa la dirección MAC de destino en una trama Ethernet II?",
        opciones: [
            "2 bytes",
            "4 bytes",
            "6 bytes",
            "8 bytes"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Cuántos bytes ocupa la dirección MAC de origen en una trama Ethernet II?",
        opciones: [
            "6 bytes",
            "2 bytes",
            "4 bytes",
            "12 bytes"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuántos bytes ocupa el campo EtherType de una trama Ethernet II?",
        opciones: [
            "6 bytes",
            "4 bytes",
            "8 bytes",
            "2 bytes"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Qué función tiene el campo EtherType?",
        opciones: [
            "Indicar el tipo de protocolo encapsulado en la trama",
            "Identificar la contraseña del equipo",
            "Indicar el nombre del usuario",
            "Mostrar la velocidad del procesador"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué valor EtherType identifica IPv4 en Ethernet II?",
        opciones: [
            "0x0806",
            "0x0800",
            "0x86DD",
            "0x0001"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué valor EtherType identifica ARP en Ethernet II?",
        opciones: [
            "0x0800",
            "0x0808",
            "0x0806",
            "0x0801"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué tamaño tiene el campo de datos de una trama Ethernet II según la práctica?",
        opciones: [
            "Entre 46 y 1500 bytes",
            "Siempre 6 bytes",
            "Entre 2 y 4 bytes",
            "Siempre 4 bytes"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué tamaño tiene el campo FCS de una trama Ethernet II?",
        opciones: [
            "2 bytes",
            "6 bytes",
            "8 bytes",
            "4 bytes"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Para qué sirve el campo FCS de una trama Ethernet?",
        opciones: [
            "Para asignar una dirección IP",
            "Para ayudar a detectar errores de transmisión",
            "Para resolver nombres de dominio",
            "Para identificar el sistema operativo"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué tamaño tiene el campo preámbulo más el delimitador de inicio de trama en el esquema de la práctica?",
        opciones: [
            "4 bytes",
            "6 bytes",
            "8 bytes",
            "12 bytes"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué tamaño tiene una dirección MAC?",
        opciones: [
            "48 bits",
            "32 bits",
            "64 bytes",
            "128 bits"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Cuántos dígitos hexadecimales representan una dirección MAC completa?",
        opciones: [
            "8",
            "10",
            "16",
            "12"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Qué identifica el OUI de una dirección MAC?",
        opciones: [
            "La dirección IP del router",
            "El fabricante asociado al prefijo de la dirección MAC",
            "El puerto TCP utilizado",
            "La máscara de subred"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué parte de una dirección MAC corresponde al OUI en el esquema explicado en la práctica?",
        opciones: [
            "Los dos últimos dígitos hexadecimales",
            "Los cuatro primeros dígitos hexadecimales",
            "Los seis primeros dígitos hexadecimales",
            "Los doce dígitos completos exclusivamente"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué dirección MAC de destino se utiliza en una petición ARP de difusión Ethernet?",
        opciones: [
            "FF:FF:FF:FF:FF:FF",
            "00:00:00:00:00:00",
            "127.0.0.1",
            "255.255.255.0"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Para qué se utiliza ARP en una red IPv4 local?",
        opciones: [
            "Para cifrar las tramas",
            "Para traducir nombres de dominio",
            "Para asignar direcciones MAC aleatorias",
            "Para averiguar la dirección MAC asociada a una dirección IPv4 local"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Por qué puede aparecer una petición ARP antes del primer ping a un equipo local?",
        opciones: [
            "Porque ICMP necesita una contraseña",
            "Porque el equipo necesita averiguar la dirección MAC del destino",
            "Porque Ethernet no admite direcciones MAC",
            "Porque el ping cambia la máscara de red"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué sucede normalmente con las direcciones MAC de origen y destino en la respuesta Ethernet de un ping local?",
        opciones: [
            "Se mantienen siempre idénticas a las de la petición",
            "Se sustituyen por nombres DNS",
            "Se intercambian respecto a la petición",
            "Desaparecen de la trama"
        ],
        correcta: 2
    },

    {
        pregunta: "Al hacer ping a un equipo remoto, ¿qué dirección MAC de destino utiliza normalmente la trama Ethernet que sale de la red local?",
        opciones: [
            "La MAC del router o puerta de enlace del siguiente salto",
            "Siempre la MAC del servidor DNS",
            "La MAC del equipo remoto, aunque esté en otra red",
            "La dirección de difusión en todos los casos"
        ],
        correcta: 0
    },

    {
        pregunta: "Al hacer ping a un servidor remoto, ¿qué ocurre normalmente con la IP de destino del paquete IP?",
        opciones: [
            "Se convierte en una dirección MAC",
            "Se cambia por la IP del equipo local",
            "Desaparece del paquete",
            "Corresponde a la dirección IP del servidor remoto"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Qué panel de Wireshark permite consultar los campos y protocolos de un paquete seleccionado?",
        opciones: [
            "El panel de configuración del sistema",
            "El panel de detalles del paquete",
            "El administrador de archivos",
            "El panel de usuarios"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué ocurre al detener una captura en Wireshark?",
        opciones: [
            "Se apaga el ordenador",
            "Se elimina obligatoriamente la captura",
            "Se detiene la captura de nuevos paquetes en esa sesión",
            "Se cambia automáticamente la dirección IP"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué representa el campo de datos de una trama Ethernet?",
        opciones: [
            "Los datos encapsulados de las capas superiores",
            "Únicamente la dirección MAC de origen",
            "Solo el campo FCS",
            "La contraseña de la red"
        ],
        correcta: 0
    },


    // ==================================================
    // MODELO OSI Y TCP/IP: AMPLIACIÓN
    // ==================================================

    {
        pregunta: "¿Qué capa OSI se encarga de establecer, mantener y cerrar sesiones?",
        opciones: [
            "Red",
            "Física",
            "Enlace",
            "Sesión"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Qué capa OSI se ocupa de la representación, compresión y cifrado de los datos?",
        opciones: [
            "Transporte",
            "Presentación",
            "Física",
            "Red"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué unidad de datos se asocia normalmente a la capa de Red?",
        opciones: [
            "Trama",
            "Bit",
            "Paquete",
            "Archivo"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué unidad de datos se asocia normalmente a la capa Física?",
        opciones: [
            "Bit",
            "Segmento",
            "Paquete",
            "Trama"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué unidad de datos se asocia normalmente a la capa de Transporte en el esquema general de las diapositivas?",
        opciones: [
            "Trama",
            "Bit",
            "Paquete",
            "Segmento"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Qué organismo aparece relacionado con el desarrollo del modelo OSI?",
        opciones: [
            "IANA",
            "ISO",
            "IEEE exclusivamente",
            "ICANN"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué recomendación de la ITU se relaciona con el modelo OSI en las diapositivas?",
        opciones: [
            "RFC 1918",
            "IEEE 802.3",
            "X.200",
            "HTTP"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué organización está relacionada con las recomendaciones y estándares de Internet mediante RFC?",
        opciones: [
            "IETF",
            "ISO exclusivamente",
            "IEEE exclusivamente",
            "ITU exclusivamente"
        ],
        correcta: 0
    },


    // ==================================================
    // TOPOLOGÍAS: REPASO DE DETALLES
    // ==================================================

    {
        pregunta: "¿Qué inconveniente tiene la topología en estrella?",
        opciones: [
            "No permite añadir nuevos equipos",
            "Necesita obligatoriamente dos anillos",
            "Todos los equipos deben conectarse entre sí",
            "El dispositivo central puede ser un punto único de fallo"
        ],
        correcta: 3
    },

    {
        pregunta: "¿Qué topología suele necesitar una gran cantidad de cableado debido a sus múltiples enlaces?",
        opciones: [
            "Bus",
            "Malla",
            "Anillo simple",
            "Estrella lógica de difusión"
        ],
        correcta: 1
    },

    {
        pregunta: "¿Qué característica distingue a la topología en árbol?",
        opciones: [
            "Todos los equipos forman un círculo",
            "Todos los equipos utilizan un único cable lineal",
            "La red se organiza mediante ramas o segmentos jerárquicos",
            "Cada equipo tiene conexión directa con todos los demás"
        ],
        correcta: 2
    },

    {
        pregunta: "¿Qué inconveniente presenta una topología en anillo al incorporar un nuevo equipo?",
        opciones: [
            "Puede requerir interrumpir el anillo para insertar el nodo",
            "Se convierte siempre en una WAN",
            "Desaparecen todas las direcciones IP",
            "No puede utilizar ningún protocolo"
        ],
        correcta: 0
    },

    {
        pregunta: "¿Qué describe una topología lógica de difusión?",
        opciones: [
            "Los datos solo pueden circular en un cable exclusivo",
            "Los equipos transmiten únicamente cuando tienen un token",
            "Cada equipo dispone de una conexión física con todos los demás",
            "Una transmisión se difunde a los equipos del dominio correspondiente"
        ],
        correcta: 3
    },
{
    pregunta: "¿Qué problema existía cuando cada fabricante establecía sus propias normas de conexión?",
    opciones: [
        "Los equipos de fabricantes distintos podían tener dificultades para interoperar",
        "Todos los equipos recibían la misma dirección MAC",
        "Las redes solo podían funcionar mediante fibra óptica",
        "Los protocolos dejaban de necesitar reglas"
    ],
    correcta: 0
},
{
    pregunta: "¿En qué año reconoce la ISO la necesidad de crear un estándar para las redes informáticas, según los apuntes?",
    opciones: [
        "1969",
        "1977",
        "1984",
        "1992"
    ],
    correcta: 1
},
{
    pregunta: "¿Qué comité creó la ISO en 1977 para trabajar en la normalización relacionada con la comunicación entre sistemas?",
    opciones: [
        "SC16",
        "IEEE 802.11",
        "IANA 200",
        "TCP /IP"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué recomendación de la ITU está asociada al modelo OSI en los documentos?",
    opciones: [
        "X.200",
        "RFC 1918",
        "IEEE 802.3",
        "HTTP 1.1"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué describen las recomendaciones X.211–X.217bis mencionadas en los apuntes?",
    opciones: [
        "Especificaciones más detalladas relacionadas con el modelo OSI",
        "Únicamente las direcciones privadas IPv4",
        "Los pasos para instalar Wireshark",
        "Los tipos de cable de una topología en estrella"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué significa que OSI sea un modelo de referencia?",
    opciones: [
        "Describe una organización conceptual de las funciones de comunicación entre nodos",
        "Es un programa obligatorio instalado en todos los ordenadores",
        "Es un protocolo que sustituye a todos los demás",
        "Es una topología física basada en un concentrador"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué representa TCP/IP en los apuntes?",
    opciones: [
        "Una suite o conjunto de protocolos que permite la comunicación entre ordenadores",
        "Un único cable utilizado en las redes LAN",
        "Una organización que asigna nombres de dominio",
        "Un modelo físico de siete conectores"
    ],
    correcta: 0
},
{
    pregunta: "¿De qué dos protocolos procede el nombre TCP/IP?",
    opciones: [
        "Transfer Control Program e Internet Process",
        "Transmission Control Protocol e Internet Protocol",
        "Transfer Communication Port e Internal Protocol",
        "Transmission Cable Protocol e Internet Port"
    ],
    correcta: 1
},
{
    pregunta: "Durante la encapsulación, ¿qué añade una capa a los datos que recibe de una capa superior?",
    opciones: [
        "Información de control propia, como una cabecera",
        "Siempre una nueva dirección MAC de fabricante",
        "Un cable físico adicional",
        "Una copia completa del sistema operativo"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué es el payload dentro de un mensaje encapsulado?",
    opciones: [
        "La información útil transportada dentro del mensaje",
        "La dirección física del router",
        "El identificador del fabricante de la tarjeta de red",
        "El nombre del organismo que publicó un estándar"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué sucede durante la desencapsulación en el equipo de destino?",
    opciones: [
        "Se retira progresivamente la información de control añadida por las capas correspondientes",
        "Se añaden cabeceras nuevas hasta llegar a la aplicación",
        "Se transforma siempre una dirección privada en pública",
        "Se elimina el contenido original del mensaje"
    ],
    correcta: 0
},
{
    pregunta: "¿Para qué sirve la llave de multiplexación descrita en los apuntes?",
    opciones: [
        "Para identificar a qué protocolo o servicio superior deben entregarse los datos",
        "Para indicar la longitud física del cable",
        "Para identificar el fabricante del switch",
        "Para determinar la topología física de la red"
    ],
    correcta: 0
},
{
    pregunta: "Cuando un mensaje llega al destino, ¿qué debe hacer el protocolo con el identificador de multiplexación?",
    opciones: [
        "Utilizarlo para entregar la carga útil al protocolo o aplicación correspondiente",
        "Convertirlo en una dirección MAC de difusión",
        "Añadirlo al nombre del equipo de origen",
        "Usarlo para seleccionar un cable de mayor longitud"
    ],
    correcta: 0
},
{
    pregunta: "¿Cuál es la diferencia entre encapsulación y PDU según los conceptos de los apuntes?",
    opciones: [
        "La encapsulación es el proceso de añadir información de control; la PDU es la unidad de datos de un protocolo",
        "La encapsulación es un organismo y la PDU una topología",
        "Ambas son nombres distintos para una dirección IP",
        "La PDU es el proceso de retirar cables y la encapsulación es una señal eléctrica"
    ],
    correcta: 0
},
{
    pregunta: "¿Cuál es una función de la IANA según los apuntes?",
    opciones: [
        "Coordinar recursos de numeración, nombres de dominio y asignaciones de protocolos",
        "Fabricar tarjetas de red para ordenadores",
        "Diseñar exclusivamente topologías en árbol",
        "Capturar paquetes con Wireshark"
    ],
    correcta: 0
},
{
    pregunta: "Además de los recursos de direcciones IP, ¿qué otro recurso gestiona la IANA según el documento?",
    opciones: [
        "La raíz del sistema de nombres de dominio y recursos de nombres internacionalizados",
        "La longitud de todos los cables Ethernet",
        "La memoria RAM de los routers",
        "Las contraseñas de los usuarios de una LAN"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué tipo de asignación de protocolos aparece entre las responsabilidades de la IANA?",
    opciones: [
        "La asignación de números de puerto",
        "La asignación de colores a las tramas",
        "La asignación de nombres comerciales a los cables",
        "La asignación de fabricantes a cada topología"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué tipo de entidad describe el documento que es IEEE?",
    opciones: [
        "Una asociación técnico-profesional sin ánimo de lucro vinculada a las nuevas tecnologías",
        "Una empresa dedicada exclusivamente a vender routers",
        "Un protocolo de transporte de Internet",
        "Un programa de análisis de tráfico de red"
    ],
    correcta: 0
},
{
    pregunta: "¿Cuál es uno de los objetivos del IEEE que aparecen en los apuntes?",
    opciones: [
        "Promover la creatividad y el desarrollo e integración de nuevas tecnologías",
        "Asignar direcciones IP privadas a todos los hogares",
        "Administrar las contraseñas de todos los equipos conectados",
        "Sustituir el modelo OSI por una topología física"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué función cumplen los RFC en el contexto de los protocolos de Internet?",
    opciones: [
        "Documentan especificaciones y aspectos técnicos relacionados con protocolos y estándares de Internet",
        "Son dispositivos que conectan físicamente dos redes",
        "Son campos obligatorios de todas las tramas Ethernet",
        "Son programas que sustituyen a las direcciones IP"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué organismo aparece relacionado con el desarrollo de estándares de telecomunicaciones y con la recomendación X.200?",
    opciones: [
        "ITU-T",
        "IANA",
        "Wireshark",
        "Ethernet"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué ventaja de una topología en estrella destaca el documento frente a un fallo de un nodo?",
    opciones: [
        "El fallo de un nodo no tiene por qué hacer caer toda la red",
        "El fallo de un nodo siempre desconecta todos los demás",
        "La red sigue funcionando aunque falle necesariamente el concentrador",
        "No necesita ningún dispositivo central"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué inconveniente de la topología en árbol se indica para el segmento principal?",
    opciones: [
        "Si falla el segmento principal, también puede caer el segmento que depende de él",
        "No permite conectar varios concentradores",
        "Todos los equipos deben conectarse directamente entre sí",
        "No admite cableado punto a punto"
    ],
    correcta: 0
},
{
    pregunta: "En la transmisión mediante tokens, ¿cuándo puede transmitir una estación?",
    opciones: [
        "Cuando está en posesión del testigo o token",
        "Solo cuando todos los equipos están apagados",
        "Siempre que envíe una dirección IP pública",
        "Únicamente después de recibir una trama ARP"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué dos ejemplos de protocolos de nivel 2 asociados a la transmisión mediante tokens se citan en el documento?",
    opciones: [
        "Token Ring y Token Bus",
        "TCP y UDP",
        "HTTP y HTTPS",
        "ARP e ICMP"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué caracteriza a la topología lógica de difusión o broadcast descrita en los apuntes?",
    opciones: [
        "Los hosts envían los datos hacia los demás hosts del medio sin un turno asignado mediante testigo",
        "Solo transmite el equipo que tiene un token",
        "Cada equipo dispone obligatoriamente de un cable exclusivo hasta Internet",
        "Los datos solo pueden circular en un único sentido por un anillo"
    ],
    correcta: 0
},
{
    pregunta: "¿Qué ventaja de la topología en árbol se destaca respecto a la compatibilidad?",
    opciones: [
        "Ofrece soporte para equipos de multitud de fabricantes",
        "Elimina la necesidad de configurar la red",
        "No necesita cableado entre segmentos",
        "Garantiza que nunca falle el segmento principal"
    ],
    correcta: 0
},
{
    pregunta: "En la práctica de Wireshark, ¿qué se recomienda hacer si no se sabe qué interfaz de red seleccionar para capturar tráfico?",
    opciones: [
        "Consultar los detalles de las interfaces para obtener más información",
        "Seleccionar siempre la primera interfaz sin comprobarla",
        "Cambiar todas las direcciones MAC manualmente",
        "Desinstalar el controlador de red"
    ],
    correcta: 0
},
      // ==================================================
    // PREGUNTAS NUEVAS - AMPLIACIÓN UT1
    // ==================================================

    {
        pregunta: "¿Qué elementos intervienen en un proceso de comunicación?",
        opciones: [
            "Emisor, receptor, medio, información y protocolo",
            "Únicamente emisor y receptor",
            "Router, switch, servidor y cable",
            "Dirección IP, máscara y puerta de enlace"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Por qué debe adaptarse la información al medio de transmisión?",
        opciones: [
            "Porque cada medio transmite señales de determinadas características",
            "Porque todos los medios transmiten únicamente señales eléctricas",
            "Porque los protocolos eliminan la necesidad de adaptar la información",
            "Porque la información solo puede transmitirse por cable"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué caracteriza a un medio de transmisión guiado?",
        opciones: [
            "Que la señal se transmite por un medio físicamente delimitado",
            "Que utiliza exclusivamente ondas de radio",
            "Que no existe ningún medio físico",
            "Que no necesita dispositivos de red"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es un ejemplo de medio de transmisión no guiado?",
        opciones: [
            "El aire por el que se propagan ondas de radio",
            "Un cable de par trenzado",
            "Un cable coaxial",
            "Una fibra óptica"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué ocurre en una comunicación simplex?",
        opciones: [
            "La información solo puede viajar en un sentido",
            "La información viaja en ambos sentidos simultáneamente",
            "La información viaja en ambos sentidos, pero por turnos",
            "No existe un emisor definido"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué diferencia fundamental existe entre semidúplex y dúplex completo?",
        opciones: [
            "En semidúplex se alternan los sentidos; en dúplex completo se transmite en ambos sentidos simultáneamente",
            "Semidúplex solo funciona por fibra y dúplex completo solo por radio",
            "En dúplex completo solo puede transmitir un dispositivo",
            "No existe ninguna diferencia"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué caracteriza a una red entre iguales o P2P?",
        opciones: [
            "Los equipos pueden compartir recursos sin depender necesariamente de un servidor dedicado",
            "Todos los equipos deben conectarse a un servidor central obligatorio",
            "Solo permite compartir impresoras",
            "No permite que los equipos compartan archivos"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué característica es propia de una arquitectura cliente-servidor?",
        opciones: [
            "Los clientes solicitan servicios que proporcionan los servidores",
            "Todos los equipos deben realizar exactamente la misma función",
            "No existen servicios centralizados",
            "Cada cliente tiene que funcionar como router"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué tipo de red suele abarcar una zona geográfica extensa, como varios países?",
        opciones: [
            "WAN",
            "PAN",
            "LAN",
            "Una red de área corporal"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es una ventaja habitual de una topología de estrella?",
        opciones: [
            "Un fallo en un cable de un equipo normalmente no desconecta los demás equipos",
            "No necesita ningún dispositivo central",
            "Todos los equipos comparten necesariamente un único cable principal",
            "Es imposible que falle el dispositivo central"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es una desventaja importante de la topología de estrella?",
        opciones: [
            "El dispositivo central puede convertirse en un punto único de fallo",
            "No permite conectar varios dispositivos",
            "No se puede ampliar la red",
            "Cada equipo necesita conectarse directamente con todos los demás"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué característica distingue a una topología de malla completa?",
        opciones: [
            "Cada nodo tiene un enlace directo con los demás nodos",
            "Todos los equipos dependen de un único cable troncal",
            "Los equipos forman obligatoriamente un único anillo",
            "Todos los equipos se conectan a un único concentrador"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué ventaja puede ofrecer una topología de malla frente a otras topologías?",
        opciones: [
            "La existencia de caminos alternativos si falla un enlace",
            "La eliminación de todos los costes de cableado",
            "La ausencia de cualquier configuración de red",
            "La garantía de que ningún nodo podrá fallar"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué caracteriza a una topología de árbol?",
        opciones: [
            "Organiza los dispositivos de forma jerárquica y ramificada",
            "Todos los dispositivos se conectan siempre en círculo",
            "Todos los dispositivos se conectan entre sí directamente",
            "Solo admite dos dispositivos"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué sucede en una topología de bus tradicional si falla el cable troncal?",
        opciones: [
            "Puede verse afectada la comunicación de gran parte o de toda la red",
            "Solo deja de funcionar el equipo más alejado",
            "La red se transforma automáticamente en una estrella",
            "La comunicación no puede verse afectada"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué significa que una red tenga escalabilidad?",
        opciones: [
            "Que puede crecer o reducirse según las necesidades",
            "Que todos los equipos deben tener el mismo tamaño físico",
            "Que nunca necesita mantenimiento",
            "Que solo funciona con un número fijo de equipos"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué busca la equitatividad en el diseño de una red?",
        opciones: [
            "Que los equipos que comparten tecnología dispongan de una distribución adecuada de los recursos ofrecidos",
            "Que un único equipo utilice todos los recursos",
            "Que todos los equipos tengan la misma dirección IP",
            "Que todos los cables midan lo mismo"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué objetivo tiene la robustez de una red?",
        opciones: [
            "Que la información pueda circular de forma fluida y la red soporte problemas",
            "Que la red solo funcione con un equipo",
            "Que el coste sea siempre cero",
            "Que no se utilicen protocolos"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué significa la disponibilidad dentro de la seguridad de una red?",
        opciones: [
            "Que los recursos y servicios estén accesibles cuando se necesitan",
            "Que cualquier persona pueda leer todos los datos",
            "Que los datos no puedan modificarse nunca",
            "Que todos los dispositivos tengan una dirección pública"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué objetivo persigue la confidencialidad?",
        opciones: [
            "Evitar que personas no autorizadas accedan a la información",
            "Garantizar que los datos siempre lleguen más rápido",
            "Permitir que cualquiera modifique la información",
            "Aumentar el número de conexiones físicas"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué propiedad de seguridad pretende evitar modificaciones no autorizadas de los datos?",
        opciones: [
            "Integridad",
            "Escalabilidad",
            "Flexibilidad",
            "Equitatividad"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es el principal objetivo de la normalización en redes?",
        opciones: [
            "Facilitar la interoperabilidad entre sistemas y fabricantes diferentes",
            "Obligar a utilizar un único fabricante de equipos",
            "Eliminar todos los protocolos de comunicación",
            "Sustituir los medios de transmisión por software"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Por qué fue importante desarrollar un modelo de referencia como OSI?",
        opciones: [
            "Para disponer de una arquitectura común que facilitara la comunicación entre sistemas diferentes",
            "Para impedir la conexión entre fabricantes distintos",
            "Para sustituir todas las redes por una sola red física",
            "Para eliminar la necesidad de dividir las comunicaciones en funciones"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué significa la sigla OSI?",
        opciones: [
            "Open Systems Interconnection",
            "Open Security Internet",
            "Operating System Interface",
            "Online Systems Installation"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué representa una PDU en una capa del modelo OSI?",
        opciones: [
            "La unidad de datos correspondiente a esa capa",
            "La dirección física del router",
            "El fabricante de una tarjeta de red",
            "Un tipo de cable de comunicaciones"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué sucede durante la desencapsulación en el receptor?",
        opciones: [
            "Se van procesando y retirando las cabeceras correspondientes a las capas",
            "Se añaden indefinidamente cabeceras nuevas al mensaje recibido",
            "Se convierten todas las direcciones IP en direcciones MAC",
            "Se elimina siempre el contenido original del mensaje"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué función cumple la capa física del modelo OSI?",
        opciones: [
            "Transmitir bits mediante el medio físico",
            "Elegir las aplicaciones del usuario",
            "Gestionar las sesiones de las aplicaciones",
            "Definir exclusivamente las direcciones IP"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué función se asocia principalmente con la capa de enlace de datos?",
        opciones: [
            "Organizar los datos en tramas y gestionar la comunicación a nivel de enlace",
            "Traducir nombres de dominio para las aplicaciones",
            "Gestionar exclusivamente las sesiones",
            "Ejecutar los programas del usuario"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué función caracteriza a la capa de red del modelo OSI?",
        opciones: [
            "El direccionamiento lógico y el encaminamiento de paquetes",
            "La presentación de imágenes al usuario",
            "La transmisión de bits sin estructura",
            "La administración de ventanas de aplicaciones"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué tarea puede realizar la capa de transporte?",
        opciones: [
            "Gestionar la comunicación extremo a extremo entre procesos",
            "Definir la forma física del conector Ethernet",
            "Transmitir únicamente señales luminosas",
            "Asignar fabricantes a las direcciones MAC"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué función se relaciona con la capa de sesión del modelo OSI?",
        opciones: [
            "Establecer, gestionar y finalizar sesiones de comunicación",
            "Definir la longitud física de un cable",
            "Asignar direcciones MAC a los fabricantes",
            "Convertir señales eléctricas directamente en ondas de radio"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué función se asocia con la capa de presentación del modelo OSI?",
        opciones: [
            "Representar y transformar los datos, por ejemplo mediante formatos o codificación",
            "Encaminar paquetes entre redes",
            "Controlar el acceso físico al cable exclusivamente",
            "Asignar direcciones IP públicas"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué capa del modelo OSI ofrece servicios de red directamente a las aplicaciones?",
        opciones: [
            "Aplicación",
            "Física",
            "Enlace de datos",
            "Red"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué organismo desarrolló el modelo OSI en colaboración con la ITU-T según los apuntes?",
        opciones: [
            "ISO",
            "IANA",
            "IEEE exclusivamente",
            "La ICANN"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué recomendación de la ITU se relaciona con el modelo OSI en los apuntes?",
        opciones: [
            "X.200",
            "802.11",
            "HTTP/1.1",
            "DNS-53"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué organismo está relacionado con la elaboración de estándares técnicos de redes como la familia IEEE 802?",
        opciones: [
            "IEEE",
            "IANA",
            "IETF exclusivamente",
            "ISO no tiene ninguna relación con estándares"
        ],
        correcta: 0
    },
    {
        pregunta: "En una trama Ethernet II, ¿cuánto ocupa el campo de dirección MAC de destino?",
        opciones: [
            "6 bytes",
            "2 bytes",
            "4 bytes",
            "8 bytes"
        ],
        correcta: 0
    },
    {
        pregunta: "En una trama Ethernet II, ¿cuánto ocupa el campo de dirección MAC de origen?",
        opciones: [
            "6 bytes",
            "1 byte",
            "2 bytes",
            "8 bytes"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cuánto ocupa el campo EtherType de una trama Ethernet II?",
        opciones: [
            "2 bytes",
            "6 bytes",
            "4 bytes",
            "8 bytes"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué valor EtherType identifica normalmente IPv4 en Ethernet II?",
        opciones: [
            "0x0800",
            "0x0806",
            "0x86DD",
            "0x0000"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué valor EtherType identifica normalmente ARP en Ethernet II?",
        opciones: [
            "0x0806",
            "0x0800",
            "0x0805",
            "0xFFFF"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué longitud tiene el campo FCS indicado en el esquema de Ethernet II de la práctica?",
        opciones: [
            "4 bytes",
            "2 bytes",
            "6 bytes",
            "8 bytes"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Para qué sirve el campo FCS de una trama Ethernet?",
        opciones: [
            "Para detectar errores en la trama mediante una comprobación",
            "Para indicar el nombre de dominio del destino",
            "Para almacenar la dirección IP del router",
            "Para indicar qué aplicación generó el mensaje"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué indica normalmente la dirección MAC de destino ff:ff:ff:ff:ff:ff?",
        opciones: [
            "Que la trama se envía a difusión en la red local",
            "Que la trama se dirige a un único servidor conocido",
            "Que el paquete no tiene dirección de destino",
            "Que se trata siempre de una dirección IPv4"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué información identifica el campo de dirección MAC de origen de una trama Ethernet?",
        opciones: [
            "La interfaz de red que ha enviado la trama en ese enlace",
            "La dirección IP pública del servidor DNS",
            "El número de puerto TCP de la aplicación",
            "La ruta completa que seguirá el paquete por Internet"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué representan los primeros 24 bits de una dirección MAC convencional, según la explicación de OUI de la práctica?",
        opciones: [
            "El identificador OUI asociado al fabricante",
            "El número de puerto TCP",
            "La dirección IPv4 de destino",
            "El campo FCS"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué permite conocer el campo de datos de una trama Ethernet?",
        opciones: [
            "El contenido del protocolo encapsulado, como un mensaje ARP o un paquete IP",
            "Únicamente la dirección MAC de origen",
            "Solo el fabricante de la tarjeta de red",
            "Exclusivamente el valor FCS"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Por qué una captura de Wireshark puede no mostrar el preámbulo Ethernet?",
        opciones: [
            "Porque la tarjeta de red puede procesarlo antes de entregar la trama capturada al programa",
            "Porque Ethernet nunca utiliza preámbulo",
            "Porque el preámbulo contiene siempre una dirección IP",
            "Porque Wireshark elimina todas las direcciones MAC"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué diferencia hay entre un filtro de visualización de Wireshark y detener la captura?",
        opciones: [
            "El filtro limita los paquetes mostrados; detener la captura detiene la recopilación de nuevos paquetes",
            "Ambas acciones borran automáticamente todos los paquetes",
            "El filtro apaga la tarjeta de red y detener la captura solo cambia el color de la pantalla",
            "El filtro impide físicamente que el tráfico llegue al equipo"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué protocolo permite resolver una dirección IPv4 local conocida para averiguar la dirección MAC correspondiente en una LAN IPv4?",
        opciones: [
            "ARP",
            "ICMP",
            "HTTP",
            "FTP"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Por qué puede aparecer una petición ARP antes del primer ping a la puerta de enlace?",
        opciones: [
            "Porque el equipo necesita conocer la MAC del siguiente salto para enviar la trama Ethernet",
            "Porque ARP asigna una nueva dirección IP pública",
            "Porque ICMP no puede funcionar con direcciones IP",
            "Porque el ping siempre cambia la dirección MAC del equipo"
        ],
        correcta: 0
    },
    {
        pregunta: "Cuando un equipo envía un paquete a una dirección IP de otra red, ¿a qué dispositivo suele dirigir la trama Ethernet inicial?",
        opciones: [
            "A la MAC de la puerta de enlace predeterminada",
            "A la MAC del servidor remoto a través de Internet directamente",
            "A la dirección MAC de difusión en todos los enlaces de Internet",
            "A la MAC del servidor DNS en todos los casos"
        ],
        correcta: 0
    },
    {
        pregunta: "En un ping, ¿qué mensaje ICMP envía normalmente el equipo que inicia la comprobación?",
        opciones: [
            "Echo Request",
            "Echo Reply",
            "ARP Reply",
            "TCP SYN"
        ],
        correcta: 0
    },
    {
        pregunta: "En un ping correcto, ¿qué mensaje ICMP suele devolver el destino?",
        opciones: [
            "Echo Reply",
            "Echo Request",
            "ARP Request",
            "DHCP Discover"
        ],
        correcta: 0
    },
    {
        pregunta: "Al comparar una petición de ping y su respuesta en un enlace Ethernet local, ¿qué suele ocurrir con las MAC de origen y destino?",
        opciones: [
            "Se invierten entre la petición y la respuesta del mismo enlace",
            "Las dos direcciones MAC siempre permanecen idénticas",
            "Las direcciones MAC se sustituyen por números de puerto",
            "Las direcciones MAC se convierten en nombres de dominio"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué tres paneles principales aparecen en la ventana de análisis de Wireshark descrita en la práctica?",
        opciones: [
            "Lista de paquetes, detalles del paquete y bytes del paquete",
            "Direcciones IP, usuarios y contraseñas",
            "Procesos, servicios y memoria",
            "Aplicaciones, archivos y registro del sistema"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Para qué sirve seleccionar un campo dentro del panel Detalles del paquete en Wireshark?",
        opciones: [
            "Para resaltar los bytes correspondientes a ese campo en el panel de bytes",
            "Para cambiar la dirección IP del equipo automáticamente",
            "Para modificar la trama que ya se ha recibido en la red",
            "Para reiniciar el router de la red"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué debes hacer si quieres iniciar una captura en una interfaz concreta de Wireshark?",
        opciones: [
            "Seleccionar la interfaz de red adecuada e iniciar la captura",
            "Elegir cualquier archivo del disco y cambiarle la extensión",
            "Desactivar todas las interfaces de red",
            "Aplicar un filtro antes de abrir Wireshark y cerrar el programa"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué información se puede comparar al analizar un ping a la puerta de enlace y otro a un servidor de Internet?",
        opciones: [
            "Las direcciones IP de destino y las direcciones MAC del siguiente salto en cada enlace",
            "Solo el nombre del usuario de Linux",
            "Únicamente la marca del monitor",
            "El número de archivos almacenados en el equipo"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué describe mejor el proceso de encapsulación en una comunicación de red?",
        opciones: [
            "Cada capa añade la información de control que necesita antes de entregar los datos a la capa inferior",
            "Todas las capas eliminan las cabeceras antes de transmitir",
            "Solo la capa física añade direcciones IP",
            "El mensaje se transmite sin ningún tipo de información de control"
        ],
        correcta: 0
    }
  

    
];


// ==================================================
// VARIABLES DEL TEST
// ==================================================

let preguntasTest = [];

let preguntaActual = 0;

let respuestasUsuario = [];

let opcionesMezcladas = [];

let modoAleatorioActual = false;

let tiempo = 0;

let intervalo = null;


// ==================================================
// ELEMENTOS HTML
// ==================================================

const seleccionModo = document.getElementById("seleccionModo");

const test = document.getElementById("test");

const resultado = document.getElementById("resultado");

const botonNormal = document.getElementById("modoNormal");

const botonAleatorio = document.getElementById("modoAleatorio");

const preguntaElemento = document.getElementById("pregunta");

const opcionesElemento = document.getElementById("opciones");

const botonAnterior = document.getElementById("botonAnterior");

const botonReiniciarTest = document.getElementById("botonReiniciarTest");

const botonSiguiente = document.getElementById("botonSiguiente");

const numeroPregunta = document.getElementById("numeroPregunta");

const puntuacionElemento = document.getElementById("puntuacion");

const contador = document.getElementById("contador");

const barraProgreso = document.getElementById("barra-progreso");

const nota = document.getElementById("nota");

const mensajeResultado = document.getElementById("mensajeResultado");

const tiempoFinal = document.getElementById("tiempoFinal");

const botonReiniciar = document.getElementById("botonReiniciar");


// ==================================================
// MEZCLAR ARRAY
// ==================================================

function mezclar(array) {

    return array.sort(() => Math.random() - 0.5);

}


// ==================================================
// INICIAR TEST
// ==================================================

function iniciarTest(aleatorio) {

    modoAleatorioActual = aleatorio;

    preguntasTest = [...preguntas];

    if (aleatorio) {

        preguntasTest = mezclar(preguntasTest);

    }

    preguntaActual = 0;

    respuestasUsuario =
        new Array(preguntasTest.length).fill(null);

    opcionesMezcladas =
        new Array(preguntasTest.length);


    // Mezclamos las respuestas una sola vez
    // para cada pregunta.

    preguntasTest.forEach((pregunta, indice) => {

        let opciones = pregunta.opciones.map(
            (texto, posicion) => {

                return {
                    texto: texto,
                    indice: posicion
                };

            }
        );

        opcionesMezcladas[indice] = mezclar(opciones);

    });


    seleccionModo.classList.add("oculto");

    resultado.classList.add("oculto");

    test.classList.remove("oculto");


    tiempo = 0;

    actualizarCronometro();

    iniciarCronometro();

    mostrarPregunta();

}


// ==================================================
// MOSTRAR PREGUNTA
// ==================================================

function mostrarPregunta() {

    const pregunta =
        preguntasTest[preguntaActual];

    const opciones =
        opcionesMezcladas[preguntaActual];


    preguntaElemento.textContent =
        pregunta.pregunta;


    numeroPregunta.textContent =
        `Pregunta ${preguntaActual + 1} de ${preguntasTest.length}`;


    puntuacionElemento.textContent =
        `Puntos: ${calcularPuntos()} `;


    const progreso =
        (preguntaActual / preguntasTest.length) * 100;


    barraProgreso.style.width =
        `${progreso}%`;


    opcionesElemento.innerHTML = "";


    opciones.forEach(opcion => {

        const boton =
            document.createElement("button");


        boton.classList.add("opcion");

        boton.textContent =
            opcion.texto;


        const respuestaGuardada =
            respuestasUsuario[preguntaActual];


        // Si ya había una respuesta seleccionada,
        // mostramos su estado.

        if (respuestaGuardada !== null) {

            if (opcion.indice === pregunta.correcta) {

                boton.classList.add("correcta");

            }

            if (
                opcion.indice === respuestaGuardada &&
                respuestaGuardada !== pregunta.correcta
            ) {

                boton.classList.add("incorrecta");

            }

            boton.disabled = true;

        } else {

            boton.addEventListener("click", () => {

                seleccionarRespuesta(
                    opcion.indice
                );

            });

        }


        opcionesElemento.appendChild(boton);

    });


    // Botón anterior

    if (preguntaActual === 0) {

        botonAnterior.disabled = true;

    } else {

        botonAnterior.disabled = false;

    }


    // Botón siguiente

    if (respuestasUsuario[preguntaActual] === null) {

        botonSiguiente.disabled = true;

    } else {

        botonSiguiente.disabled = false;

    }


    // En la última pregunta cambiamos el texto

    if (
        preguntaActual ===
        preguntasTest.length - 1
    ) {

        botonSiguiente.textContent =
            "Terminar ✓";

    } else {

        botonSiguiente.textContent =
            "Siguiente →";

    }

}


// ==================================================
// SELECCIONAR RESPUESTA
// ==================================================

function seleccionarRespuesta(indiceSeleccionado) {

    const pregunta =
        preguntasTest[preguntaActual];


    respuestasUsuario[preguntaActual] =
        indiceSeleccionado;


    mostrarPregunta();

}


// ==================================================
// CALCULAR PUNTOS
// ==================================================

function calcularPuntos() {

    let puntos = 0;


    respuestasUsuario.forEach(
        (respuesta, indice) => {

            if (
                respuesta !== null &&
                respuesta ===
                preguntasTest[indice].correcta
            ) {

                puntos++;

            }

        }
    );


    return puntos;

}


// ==================================================
// BOTÓN ANTERIOR
// ==================================================

botonAnterior.addEventListener("click", () => {

    if (preguntaActual > 0) {

        preguntaActual--;

        mostrarPregunta();

    }

});


// ==================================================
// BOTÓN SIGUIENTE
// ==================================================

botonSiguiente.addEventListener("click", () => {

    if (
        preguntaActual <
        preguntasTest.length - 1
    ) {

        preguntaActual++;

        mostrarPregunta();

    } else {

        terminarTest();

    }

});


// ==================================================
// REINICIAR TEST
// ==================================================

botonReiniciarTest.addEventListener("click", () => {

    clearInterval(intervalo);


    preguntasTest = [];

    respuestasUsuario = [];

    opcionesMezcladas = [];

    preguntaActual = 0;

    tiempo = 0;


    test.classList.add("oculto");

    resultado.classList.add("oculto");

    seleccionModo.classList.remove("oculto");


    botonSiguiente.textContent =
        "Siguiente →";


    botonSiguiente.disabled = true;

    botonAnterior.disabled = true;


    actualizarCronometro();

});


// ==================================================
// CRONÓMETRO
// ==================================================

function iniciarCronometro() {

    clearInterval(intervalo);


    intervalo = setInterval(() => {

        tiempo++;

        actualizarCronometro();

    }, 1000);

}


function actualizarCronometro() {

    const minutos =
        Math.floor(tiempo / 60);


    const segundos =
        tiempo % 60;


    contador.textContent =
        `⏱️ ${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

}


// ==================================================
// TERMINAR TEST
// ==================================================

function terminarTest() {

    clearInterval(intervalo);


    const puntos =
        calcularPuntos();


    const total =
        preguntasTest.length;


    const porcentaje =
        (puntos / total) * 100;


    const notaFinal =
        (puntos / total) * 10;


    test.classList.add("oculto");

    resultado.classList.remove("oculto");


    barraProgreso.style.width =
        "100%";


    nota.textContent =
        `${notaFinal.toFixed(2)}/10`;


    mensajeResultado.textContent =
        `Has acertado ${puntos} de ${total} preguntas (${porcentaje.toFixed(1)}%).`;


    const minutos =
        Math.floor(tiempo / 60);


    const segundos =
        tiempo % 60;


    tiempoFinal.textContent =
        `⏱️ Tiempo empleado: ${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

}


// ==================================================
// MODO NORMAL
// ==================================================

botonNormal.addEventListener("click", () => {

    iniciarTest(false);

});


// ==================================================
// MODO ALEATORIO
// ==================================================

botonAleatorio.addEventListener("click", () => {

    iniciarTest(true);

});


// ==================================================
// VOLVER A HACER EL TEST
// ==================================================

botonReiniciar.addEventListener("click", () => {

    clearInterval(intervalo);


    resultado.classList.add("oculto");

    test.classList.add("oculto");

    seleccionModo.classList.remove("oculto");


    preguntasTest = [];

    respuestasUsuario = [];

    opcionesMezcladas = [];

    preguntaActual = 0;

    tiempo = 0;


    botonSiguiente.textContent =
        "Siguiente →";


    botonSiguiente.disabled = true;

    botonAnterior.disabled = true;


    actualizarCronometro();

});
