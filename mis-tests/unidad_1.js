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
    }

];


// ==================================================
// VARIABLES DEL TEST
// ==================================================

let preguntasTest = [];

let preguntaActual = 0;

let puntos = 0;

let respuestaSeleccionada = false;

let tiempo = 0;

let intervalo = null;


// ==================================================
// ELEMENTOS HTML
// ==================================================

const seleccionModo =
    document.getElementById("seleccionModo");

const test =
    document.getElementById("test");

const resultado =
    document.getElementById("resultado");

const modoNormal =
    document.getElementById("modoNormal");

const modoAleatorioBoton =
    document.getElementById("modoAleatorio");

const numeroPregunta =
    document.getElementById("numeroPregunta");

const contador =
    document.getElementById("contador");

const puntuacion =
    document.getElementById("puntuacion");

const barraProgreso =
    document.getElementById("barra-progreso");

const pregunta =
    document.getElementById("pregunta");

const opciones =
    document.getElementById("opciones");

const botonSiguiente =
    document.getElementById("botonSiguiente");

const botonReiniciar =
    document.getElementById("botonReiniciar");

const nota =
    document.getElementById("nota");

const mensajeResultado =
    document.getElementById("mensajeResultado");

const tiempoFinal =
    document.getElementById("tiempoFinal");


// ==================================================
// FUNCIÓN PARA MEZCLAR
// ==================================================

function mezclar(array) {

    let copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {

        let posicion =
            Math.floor(Math.random() * (i + 1));

        let temporal =
            copia[i];

        copia[i] =
            copia[posicion];

        copia[posicion] =
            temporal;
    }

    return copia;
}


// ==================================================
// INICIAR TEST
// ==================================================

function iniciarTest(aleatorio) {

    preguntaActual = 0;

    puntos = 0;

    tiempo = 0;

    clearInterval(intervalo);


    if (aleatorio) {

        preguntasTest =
            mezclar(preguntas);

    } else {

        preguntasTest =
            [...preguntas];

    }


    seleccionModo.classList.add("oculto");

    resultado.classList.add("oculto");

    test.classList.remove("oculto");


    puntuacion.textContent =
        "Puntos: 0";


    contador.textContent =
        "⏱️ 00:00";


    intervalo = setInterval(function () {

        tiempo++;

        actualizarContador();

    }, 1000);


    mostrarPregunta();
}


// ==================================================
// ACTUALIZAR CONTADOR
// ==================================================

function actualizarContador() {

    let minutos =
        Math.floor(tiempo / 60);

    let segundos =
        tiempo % 60;


    let minutosTexto =
        minutos.toString().padStart(2, "0");

    let segundosTexto =
        segundos.toString().padStart(2, "0");


    contador.textContent =
        `⏱️ ${minutosTexto}:${segundosTexto}`;
}


// ==================================================
// MOSTRAR PREGUNTA
// ==================================================

function mostrarPregunta() {

    respuestaSeleccionada = false;

    botonSiguiente.disabled = true;


    let preguntaActualObjeto =
        preguntasTest[preguntaActual];


    numeroPregunta.textContent =
        `Pregunta ${preguntaActual + 1} de ${preguntasTest.length}`;


    pregunta.textContent =
        preguntaActualObjeto.pregunta;


    opciones.innerHTML = "";


    /*
     * Creamos una copia de las respuestas.
     *
     * Guardamos si cada respuesta es correcta
     * ANTES de mezclarlas.
     */

    let respuestas =
        preguntaActualObjeto.opciones.map(
            function (texto, indice) {

                return {
                    texto: texto,
                    correcta:
                        indice ===
                        preguntaActualObjeto.correcta
                };

            }
        );


    // Mezclar respuestas

    respuestas =
        mezclar(respuestas);


    // Crear botones

    respuestas.forEach(
        function (respuesta) {

            const boton =
                document.createElement("button");


            boton.classList.add("opcion");


            boton.textContent =
                respuesta.texto;


            boton.addEventListener(
                "click",
                function () {

                    seleccionarRespuesta(
                        respuesta.correcta,
                        boton
                    );

                }
            );


            opciones.appendChild(boton);

        }
    );


    // Actualizar barra

    let progreso =
        (
            (preguntaActual + 1)
            / preguntasTest.length
        ) * 100;


    barraProgreso.style.width =
        progreso + "%";
}


// ==================================================
// SELECCIONAR RESPUESTA
// ==================================================

function seleccionarRespuesta(
    esCorrecta,
    botonSeleccionado
) {

    if (respuestaSeleccionada) {

        return;
    }


    respuestaSeleccionada = true;


    // Buscar la respuesta correcta

    let preguntaActualObjeto =
        preguntasTest[preguntaActual];


    let respuestaCorrecta =
        preguntaActualObjeto.opciones[
            preguntaActualObjeto.correcta
        ];


    // Marcar la respuesta correcta

    const botones =
        document.querySelectorAll(".opcion");


    botones.forEach(
        function (boton) {

            if (
                boton.textContent ===
                respuestaCorrecta
            ) {

                boton.classList.add(
                    "correcta"
                );

            }

        }
    );


    // Comprobar respuesta

    if (esCorrecta) {

        puntos++;

        puntuacion.textContent =
            `Puntos: ${puntos}`;

    } else {

        botonSeleccionado.classList.add(
            "incorrecta"
        );

    }


    botonSiguiente.disabled =
        false;
}


// ==================================================
// SIGUIENTE PREGUNTA
// ==================================================

botonSiguiente.addEventListener(
    "click",
    function () {

        preguntaActual++;


        if (
            preguntaActual <
            preguntasTest.length
        ) {

            mostrarPregunta();

        } else {

            mostrarResultado();

        }

    }
);


// ==================================================
// MOSTRAR RESULTADO
// ==================================================

function mostrarResultado() {

    // Parar contador

    clearInterval(intervalo);


    // Ocultar test

    test.classList.add("oculto");


    // Mostrar resultado

    resultado.classList.remove("oculto");


    // Calcular nota

    let notaFinal =
        (puntos / preguntasTest.length) * 10;


    nota.textContent =
        notaFinal.toFixed(2) + "/10";


    mensajeResultado.textContent =
        `Has acertado ${puntos} de ${preguntasTest.length} preguntas.`;


    // Mostrar tiempo

    let minutos =
        Math.floor(tiempo / 60);

    let segundos =
        tiempo % 60;


    let minutosTexto =
        minutos.toString().padStart(2, "0");

    let segundosTexto =
        segundos.toString().padStart(2, "0");


    tiempoFinal.textContent =
        `⏱️ Tiempo empleado: ${minutosTexto}:${segundosTexto}`;
}


// ==================================================
// VOLVER A ELEGIR MODO
// ==================================================

botonReiniciar.addEventListener(
    "click",
    function () {

        clearInterval(intervalo);


        resultado.classList.add(
            "oculto"
        );


        seleccionModo.classList.remove(
            "oculto"
        );


        barraProgreso.style.width =
            "0%";


        contador.textContent =
            "⏱️ 00:00";
    }
);


// ==================================================
// MODO NORMAL
// ==================================================

modoNormal.addEventListener(
    "click",
    function () {

        iniciarTest(false);

    }
);


// ==================================================
// MODO ALEATORIO
// ==================================================

modoAleatorioBoton.addEventListener(
    "click",
    function () {

        iniciarTest(true);

    }
);
