import type { Messages } from "./en";

const es: Messages = {
  meta: {
    title: "Tanya — un agente de código en vivo para la terminal",
    description:
      "Tanya es un agente de código de línea de comandos open-source y gratuito que lleva la fluidez de Claude Code a DeepSeek — y verifica el resultado, para que la confianza de un modelo barato nunca se convierta en un bug a las 2 de la mañana. Gratis hoy, gratis siempre.",
    ogAlt: "Tanya ejecutándose en una terminal, editando archivos y verificando el resultado",
  },
  nav: {
    features: "Funciones",
    how: "Cómo funciona",
    roadmap: "Roadmap",
    faq: "Preguntas",
    docs: "Docs",
    github: "GitHub",
    install: "Instalar",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  beta: "Beta pública · v0.7.0 · gratis para siempre",
  hero: {
    eyebrow: "CLI open-source · hecha para DeepSeek",
    titleLead: "Un agente de verdad.",
    titleAccent: "Precio de DeepSeek.",
    titleTail: "Resultado verificado.",
    subtitle:
      "Tanya lleva la fluidez de Claude Code a DeepSeek — y comprueba el estado final por sí misma, para que la confianza de un modelo barato nunca se convierta en tu bug de las 2 de la mañana. Gratis, open-source, y sigue así.",
    ctaPrimary: "Copiar comando de instalación",
    ctaSecondary: "Dar una estrella en GitHub",
    copied: "¡Copiado!",
    runHint: "luego ejecuta",
    terminalTitle: "tanya — sesión en vivo",
    terminalCaption: "✓ veredicto: LISTO — la propia Tanya revisó el build",
  },
  scenes: {
    steps: {
      connect: {
        label: "Conectar",
        caption: "Pon tu clave de DeepSeek y Tanya arranca con un solo comando.",
      },
      plan: {
        label: "Planificar",
        caption: "Tanya convierte tu petición de una línea en un plan ordenado antes de tocar el código.",
      },
      edit: {
        label: "Editar en vivo",
        caption: "Mira los archivos cambiar mientras escribe — ediciones en streaming, nunca una caja negra.",
      },
      verify: {
        label: "Verificar",
        caption: "La ventaja: Tanya ejecuta el build y revisa el resultado antes de decir que terminó.",
      },
      cost: {
        label: "Contar el costo",
        caption: "Los tokens de DeepSeek cuestan centavos. Tanya en sí es gratis, para siempre.",
      },
    },
  },
  openSource: {
    badge: "Gratis para siempre · open-source",
    title: "Hecha a la vista de todos. Gratis hoy, gratis siempre.",
    subtitle:
      "Tanya es open-source en GitHub y no hay ningún plan de pago esperando a la vuelta de la esquina. Lee cada línea, abre una issue o envía un pull request — el proyecto mejora porque gente como tú lo empuja hacia adelante.",
    ctaPrimary: "Estrella en GitHub",
    ctaSecondary: "Contribuir",
    points: [
      {
        title: "0 €, y sigue siendo 0 €",
        desc: "Sin suscripción, sin licencias por usuario, sin muro \"pro\" después. Lo único que pagas son tus propios tokens de DeepSeek.",
      },
      {
        title: "Haz fork, ajústala, publícala",
        desc: "El código completo está en github.com/matheusjkweber/tanya bajo una licencia abierta. Hazla tuya.",
      },
      {
        title: "Contribuciones bienvenidas",
        desc: "Bugs, ideas, skill-packs, docs — abre una issue o un PR. Cada contribuidor decide hacia dónde va Tanya.",
      },
    ],
  },
  proof: {
    eyebrow: "Por qué Tanya es diferente",
    title: "Los modelos baratos alucinan. Tanya revisa su trabajo.",
    subtitle:
      "Cualquier otro agente económico entrega lo que el modelo dice que hizo. Tanya ejecuta un verificador determinista sobre el estado final antes de avisarte de que la tarea terminó.",
    points: [
      {
        title: "Barato para tenerlo todo el día",
        desc: "Apunta Tanya a DeepSeek y déjalo trabajar — el trabajo rutinario se hace sin factura de modelo de frontera.",
      },
      {
        title: "Un veredicto en el que puedes confiar",
        desc: "Validadores por tarea más un verificador de estado final hacen que \"listo\" signifique listo — no \"el modelo dijo que sí\".",
      },
      {
        title: "Enruta los pasos difíciles",
        desc: "Tanya deja deepseek-chat en el trabajo pesado y escala los pasos realmente complicados a deepseek-reasoner — automáticamente.",
      },
    ],
  },
  features: {
    eyebrow: "Lo que trae dentro",
    title: "La ergonomía de Claude Code, afinada para DeepSeek",
    subtitle:
      "Todo lo que esperas de un agente de terminal serio — ediciones en vivo, subagentes, MCP, permisos — afinado para un modelo barato que necesita un segundo par de ojos.",
    items: {
      verifier: {
        tag: "La ventaja",
        title: "Verificador determinista de estado final",
        desc: "Tanya revisa el repositorio después de trabajar y muestra un veredicto real. Se acabó creerle a un modelo barato que el build pasa.",
      },
      providers: {
        tag: "Trae tu clave",
        title: "Hecha para DeepSeek",
        desc: "Tanya habla con DeepSeek por su endpoint compatible con OpenAI. Pon tu clave de DeepSeek y empieza a programar — sin pegamento, sin wrappers.",
      },
      streaming: {
        tag: "En vivo por defecto",
        title: "Mira cada edición ocurrir",
        desc: "La ejecución de herramientas en streaming muestra archivos cambiando y comandos ejecutándose en tiempo real — nunca una caja negra silenciosa.",
      },
      routing: {
        tag: "Gasta donde cuenta",
        title: "Enrutamiento deepseek-chat ↔ reasoner",
        desc: "Deja deepseek-chat en el trabajo pesado y manda los pasos realmente difíciles a deepseek-reasoner, automáticamente.",
      },
      subagents: {
        tag: "Divide y vencerás",
        title: "Herramienta de subagentes",
        desc: "Delega tareas grandes a subagentes enfocados que planifican, despachan y rinden cuentas — con TDD y autocorrección opcionales.",
      },
      mcp: {
        tag: "Conectada",
        title: "Soporte para servidores MCP",
        desc: "Conecta servidores Model Context Protocol para darle a Tanya tus herramientas, datos y APIs — el mismo ecosistema que ya usas.",
      },
      permissions: {
        tag: "Bajo control",
        title: "Permisos y reglas de gasto",
        desc: "Aprueba acciones arriesgadas, limita el gasto de tokens y pon barreras para que una ejecución impaciente nunca te sorprenda.",
      },
      memory: {
        tag: "Se vuelve más lista",
        title: "Memoria de golden-tasks y mapa del repo",
        desc: "Un mapa estructural del repositorio y la memoria de golden-tasks ayudan a Tanya a ubicarse rápido en código que ya ha visto.",
      },
    },
  },
  gallery: {
    eyebrow: "Míralo trabajar",
    title: "De carpeta vacía a app funcionando, paso a paso",
    subtitle:
      "Recorre una ejecución real de Tanya: conectar con DeepSeek, planificar, editar archivos en vivo y verificar el build antes de decir \"listo\".",
    caption: "Tanya construyendo y verificando una app de calculadora, de principio a fin.",
    note: "ejecución real · 2× más rápido",
    realLabel: "La grabación real",
    prev: "Clip anterior",
    next: "Clip siguiente",
    loadError: "Este clip no se pudo cargar. Sirve el sitio desde su raíz para que /media resuelva.",
  },
  byoKey: {
    eyebrow: "Trae tu clave",
    title: "Tanya es gratis. Solo traes una clave de DeepSeek.",
    subtitle:
      "Tanya nunca toca tu tarjeta — le pagas a DeepSeek directamente por los tokens que usas. Lo bueno: DeepSeek es uno de los modelos más baratos del mercado, con puntuaciones de código y razonamiento a la altura de los grandes modelos de frontera. Resultado de primera, factura de calderilla.",
    stepsTitle: "En marcha en tres pasos",
    steps: [
      {
        title: "Crea una cuenta en DeepSeek",
        desc: "Regístrate en platform.deepseek.com — un minuto, un correo, listo.",
      },
      {
        title: "Genera una clave de API y añade saldo",
        desc: "Abre la página de claves, crea una clave y carga unos pocos dólares — rinden muchísimo.",
      },
      {
        title: "Pásasela a Tanya",
        desc: "Define DEEPSEEK_API_KEY (o pégala en el primer arranque) y a programar.",
      },
    ],
    cta: "Consigue tu clave de DeepSeek",
    benchTitle: "¿Por qué DeepSeek?",
    benchDesc:
      "Benchmarks de frontera a una fracción del precio por token — justo el modelo barato-pero-capaz que el verificador de Tanya se hizo para mantener honesto. Tienes código casi de frontera sin la factura de frontera.",
    stats: [
      { value: "~US$ 0,02", label: "costo típico por tarea" },
      { value: "compatible con OpenAI", label: "endpoint plug-and-play" },
      { value: "chat + reasoner", label: "enrutado automáticamente" },
    ],
  },
  pricing: {
    eyebrow: "Precio",
    title: "Gratis, y open-source para siempre",
    subtitle:
      "Tanya en sí no cuesta nada y nunca costará. Lo único que pagas son tus propios tokens de DeepSeek — y mantener esa factura mínima es justo el punto.",
    planName: "Tanya CLI",
    price: "0 €",
    priceNote: "open-source · sin cuenta · gratis para siempre",
    includes: [
      "El agente completo — verificador, enrutamiento, subagentes, MCP",
      "Hecha para DeepSeek — pon tu clave de API y listo",
      "Comandos de barra, permisos y límites de gasto",
      "Solo le pagas a DeepSeek por los tokens que uses",
    ],
    cta: "Copiar comando de instalación",
    secondary: "Ver código en GitHub",
    finePrint: "Sin suscripción, sin licencias por usuario, sin muro de pago de telemetría. Instala desde npm y listo.",
  },
  faq: {
    eyebrow: "Preguntas",
    title: "El FAQ honesto",
    subtitle: "Tanya está en beta pública. Esto es exactamente lo que eso significa.",
    items: {
      cost: {
        q: "¿Tanya es de verdad gratis?",
        a: "Sí — gratis hoy y gratis siempre. Tanya es open-source, no cuesta nada instalarla ni usarla y no hay plan de pago en el horizonte. Solo le pagas a DeepSeek por los tokens que consumes, y como Tanya está construida en torno a un modelo barato, esa factura se mantiene pequeña.",
      },
      models: {
        q: "¿Qué modelo usa Tanya?",
        a: "DeepSeek. Tanya conecta con el endpoint compatible con OpenAI de DeepSeek — aportas tu propia clave de DeepSeek y la ejecutas. Usa deepseek-chat para el día a día y puede escalar los pasos más difíciles a deepseek-reasoner automáticamente.",
      },
      verifier: {
        q: "¿Qué hace el verificador en realidad?",
        a: "Cuando Tanya termina una tarea, un verificador determinista inspecciona el estado final de tu repositorio y los validadores por tarea comprueban el objetivo concreto. Recibes un veredicto real de pasa/falla en vez de confiar en que el modelo hizo lo que dijo.",
      },
      openSource: {
        q: "¿Dónde está el código fuente?",
        a: "En GitHub, en matheusjkweber/tanya, publicado en npm como @matheuskrumenauer/tanya. Las issues y las contribuciones de skill-packs son bienvenidas.",
      },
      platforms: {
        q: "¿Qué necesito para ejecutarla?",
        a: "Node.js y una terminal en macOS, Linux o Windows. Instálala globalmente con npm, configura tu clave de API de DeepSeek y ejecuta tanya. Una versión web alojada está en camino.",
      },
      claudeCode: {
        q: "¿En qué se diferencia de Claude Code?",
        a: "La misma ergonomía — chat en vivo, comandos de barra, subagentes, MCP — pero hecha para DeepSeek, con el verificador determinista como función estrella, porque un modelo más barato necesita esa comprobación aún más. Y es gratis y open-source.",
      },
    },
  },
  finalCta: {
    title: "Levanta Tanya con un solo comando",
    subtitle: "Abre una terminal, instala desde npm, apúntala a DeepSeek. Esa es toda la configuración — y es gratis.",
    primary: "Copiar comando de instalación",
    secondary: "Leer la documentación",
  },
  footer: {
    tagline: "El agente de código que funciona con lo que puedes pagar — y demuestra que funcionó.",
    product: "Producto",
    resources: "Recursos",
    legal: "Legal",
    links: {
      features: "Funciones",
      pricing: "Precio",
      faq: "Preguntas",
      github: "GitHub",
      npm: "Paquete npm",
      docs: "Documentación",
      terms: "Términos del Servicio",
      support: "Soporte",
      contact: "Contacto",
    },
    honesty:
      "Beta pública. En esta página no hay instalaciones, valoraciones ni reseñas falsas — solo el producto.",
    rights: "Tanya. Open-source, hecha para quienes construyen.",
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "De dónde viene Tanya — y hacia dónde va",
    subtitle:
      "Tanya ya resuelve lo difícil: un agente de código real que funciona en modelos baratos. Este es el camino hasta aquí y lo que viene después, hacia un poder nivel Claude Code con tus propias claves.",
    nowLabel: "Estás aquí",
    legend: { shipped: "Listo", next: "En curso", planned: "Planeado", later: "Después" },
    milestones: [
      {
        status: "shipped",
        title: "Un agente de código que aguanta DeepSeek",
        desc: "Parsing tolerante de tool calls, reintento con corrección, aplanado de esquemas y soporte para modelos de razonamiento — la base que hace usables a los modelos baratos.",
        items: ["Recuperación de tool call", "REPL en streaming", "Modelos de razonamiento"],
      },
      {
        status: "shipped",
        title: "El muro del verificador",
        desc: "Un verificador determinista, validadores por plataforma y una barrera de patrones prohibidos atrapan las alucinaciones y bugs que los modelos baratos colarían.",
        items: ["Verificador", "Validadores Apple / Android / Go / Prisma", "Barrera de patrones prohibidos"],
      },
      {
        status: "shipped",
        title: "Gasta menos, enruta mejor",
        desc: "Enrutamiento multiproveedor por paso con cascada por coste y tamaño de contexto, más un contador de tokens y USD en vivo para que la factura nunca sorprenda.",
        items: ["Enrutamiento multimodelo", "Cascada de coste", "Contador de coste en vivo"],
      },
      {
        status: "shipped",
        title: "Un agente que puedes extender",
        desc: "Cliente y servidor MCP, slash commands, paquetes de skills, memoria de proyecto y sub-agentes acotados — con reanudación de sesión para que el trabajo largo no se pierda.",
        items: ["MCP cliente + servidor", "Slash commands", "Skills", "Sub-agentes", "Reanudar sesión"],
      },
      {
        status: "next",
        title: "Núcleo de extensibilidad",
        desc: "Las funciones que convierten a Tanya de un agente en una plataforma que moldeas a tu flujo.",
        items: ["Hooks de ciclo de vida", "Sub-agentes con nombre", "Plantillas de slash command"],
      },
      {
        status: "planned",
        title: "Paridad del día a día",
        desc: "Las interacciones que hacen que un agente de código se sienta natural cada día.",
        items: ["Modo plan interactivo", "Memoria jerárquica + imports", "Herramientas web", "Shells en segundo plano"],
      },
      {
        status: "planned",
        title: "Potencia y confianza",
        desc: "Más control y seguridad para quien vive en la terminal.",
        items: ["Checkpoint / rewind", "Configuración unificada", "Vista de contexto + statusline", "Estilos de salida"],
      },
      {
        status: "later",
        title: "Ecosistema",
        desc: "Ir más allá de la CLI cuando el núcleo sea sólido.",
        items: ["Automatización de Git / PR", "Sandbox del SO", "Entrada de imagen", "SDK"],
      },
    ],
  },
  featureSuggest: {
    title: "¿Hay algo que deberíamos construir?",
    subtitle: "El roadmap lo define lo que quienes construyen realmente necesitan. Cuéntanos qué haría mejor a Tanya — llega directo a nuestra bandeja de entrada.",
    placeholder: "Ojalá Tanya pudiera…",
    emailPlaceholder: "tu@email.com (opcional, si quieres respuesta)",
    submit: "Enviar sugerencia",
    sending: "Enviando…",
    successTitle: "¡Recibido, gracias!",
    successBody: "Tu idea está en nuestra bandeja de entrada. Las mejores entran en el roadmap de arriba.",
    errorBody: "No pudimos enviarlo automáticamente, así que abrimos un borrador de correo ya rellenado para ti.",
  },
  common: {
    backHome: "Volver al inicio",
    lastUpdated: "Última actualización",
    comingSoon: "Próximamente",
    emailUs: "Escríbenos",
  },
  terms: {
    title: "Términos del Servicio",
    intro:
      "Tanya es software open-source ofrecido gratis. Al instalarla o usarla, aceptas los términos de abajo. Lenguaje claro, sin sorpresas.",
    sections: [
      {
        h: "1. El software",
        p: "Tanya es un agente de código de línea de comandos distribuido como el paquete npm @matheuskrumenauer/tanya y en GitHub. Se ofrece tal cual, como una beta pública que aún está evolucionando.",
      },
      {
        h: "2. Sin cuenta, sin tarifas",
        p: "Usar Tanya no requiere cuenta y no cuesta nada. Cualquier cargo que tengas proviene de DeepSeek, cuya clave de API tú aportas. Esa relación se rige por los propios términos de DeepSeek.",
      },
      {
        h: "3. Tu código y tus datos",
        p: "Tanya se ejecuta localmente en tu máquina y actúa sobre los archivos y comandos que tú le indiques. Los prompts y el código que envías a DeepSeek están sujetos a las políticas de datos de DeepSeek. No operamos un servidor que almacene tus repositorios.",
      },
      {
        h: "4. Uso aceptable",
        p: "Usa Tanya de forma lícita. Eres responsable de las acciones que ejecuta en tu nombre, incluido el código que escribe, los comandos que ejecuta y el dinero que gastas en tokens. Revisa los cambios antes de confiar en ellos.",
      },
      {
        h: "5. Propiedad intelectual y licencia",
        p: "El código de Tanya es abierto. El código que escribes con Tanya es tuyo. La salida del modelo de DeepSeek se rige por los términos de DeepSeek.",
      },
      {
        h: "6. Garantía y responsabilidad",
        p: "Tanya se ofrece sin garantía de ningún tipo. En la máxima medida permitida por la ley, los mantenedores no se responsabilizan por daños derivados de su uso, incluida la pérdida de datos o el gasto en DeepSeek. El verificador es una sólida red de seguridad, no una garantía de corrección.",
      },
      {
        h: "7. Ley aplicable",
        p: "Estos términos se rigen por las leyes de la jurisdicción del mantenedor [marcador — a finalizar antes de la disponibilidad general]. Si alguna cláusula resulta inaplicable, el resto sigue vigente.",
      },
      {
        h: "8. Cambios",
        p: "Podemos actualizar estos términos a medida que Tanya pase de beta a una versión estable. Los cambios importantes se reflejarán en la fecha de arriba y en el repositorio de GitHub.",
      },
    ],
  },
  support: {
    title: "Soporte",
    intro:
      "Tanya es un pequeño proyecto open-source en beta pública. La forma más rápida de obtener ayuda está abajo — lo leemos todo.",
    primaryChannel: "Escríbenos a",
    faqTitle: "Preguntas frecuentes",
    items: [
      {
        q: "Tanya no llega a DeepSeek — ¿y ahora?",
        a: "Ejecuta `tanya providers test` para validar tu clave de DeepSeek y el endpoint. La mayoría de los casos es una variable de entorno que falta o una base URL que no apunta al endpoint compatible con OpenAI de DeepSeek.",
      },
      {
        q: "¿Cómo reporto un bug o pido una función?",
        a: "Abre una issue en GitHub, en matheusjkweber/tanya. Incluye el comando que ejecutaste y la salida. El feedback de la beta moldea el roadmap de verdad.",
      },
      {
        q: "El agente hizo algo que no esperaba.",
        a: "Usa la capa de permisos y los límites de gasto para exigir aprobación en acciones arriesgadas, y `/verify` para volver a comprobar el resultado. Si algo se coló, abre una issue con los detalles de la sesión.",
      },
      {
        q: "¿Hay documentación?",
        a: "Sí — el README y los docs del repositorio de GitHub cubren proveedores, enrutamiento, economía de tokens y el verificador. Llegarán más guías a medida que madure la beta.",
      },
    ],
  },
  contact: {
    title: "Contacto",
    intro:
      "¿Dudas, ideas de colaboración o feedback de la beta? Envía una nota — llega a quienes construyen Tanya.",
    nameLabel: "Tu nombre",
    emailLabel: "Tu correo",
    messageLabel: "Mensaje",
    namePlaceholder: "Ada Lovelace",
    emailPlaceholder: "tu@ejemplo.com",
    messagePlaceholder: "Cuéntanos qué estás construyendo con Tanya…",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    successTitle: "Mensaje enviado",
    successBody: "Gracias por escribir — llegó directo a quienes construyen Tanya. Te responderemos al correo que nos dejaste.",
    sendAnother: "Enviar otro mensaje",
    errorBody:
      "No pudimos enviarlo automáticamente, así que abrimos un borrador de correo ya rellenado para ti. Si no apareció nada, escríbenos directo a contato@tanyahq.com.",
    directLabel: "¿Prefieres tu propio cliente de correo?",
    githubLabel: "¿Encontraste un bug?",
    githubDesc: "Abre una issue en GitHub — es el camino más rápido a la solución.",
  },
};

export default es;
