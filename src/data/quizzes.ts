export type Question = {
  text: string;
  options: { text: string; correct: boolean }[];
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  image: string;
  questions: Question[];
  firma?: string; // firma descargable tras completar
};

export const lessons: Lesson[] = [
  {
    id: "intro",
    title: "Introducción a la fauna boliviana",
    description:
      "Bolivia alberga una increíble diversidad de especies, muchas de ellas en peligro. Aprende cómo protegerlas y reconoce su importancia ecológica.",
    image: "https://images.unsplash.com/photo-1762301394049-2f818ead47b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1473",
    questions: [
      {
        text: "¿Qué porcentaje del territorio boliviano está cubierto por áreas protegidas?",
        options: [
          { text: "Alrededor del 17%", correct: true },
          { text: "Menos del 5%", correct: false },
          { text: "Más del 50%", correct: false },
        ],
      },
      {
        text: "¿Qué significa 'en peligro de extinción'?",
        options: [
          { text: "Que ya se extinguió", correct: false },
          { text: "Que tiene riesgo de desaparecer", correct: true },
          { text: "Que no es nativa", correct: false },
        ],
      },
    ],
  },
  {
    id: "armadillo",
    title: "Armadillo gigante (Tatú Carreta)",
    description:
      "Este mamífero, símbolo del Chaco boliviano, está amenazado por la pérdida de hábitat y la caza. Puede excavar madrigueras de más de 3 metros.",
    image: "https://images.unsplash.com/photo-1685042854774-97584230f824?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    firma: "/firmas/armadillo-firma.jpg",
    questions: [
      {
        text: "¿Cuál es la principal amenaza del armadillo gigante?",
        options: [
          { text: "Caza y deforestación", correct: true },
          { text: "Contaminación marina", correct: false },
          { text: "Cambio climático polar", correct: false },
        ],
      },
      {
        text: "¿Dónde habita principalmente el armadillo gigante?",
        options: [
          { text: "En la Amazonía húmeda", correct: false },
          { text: "En el Chaco y sabanas", correct: true },
          { text: "En los Andes altos", correct: false },
        ],
      },
    ],
  },
  {
    id: "delfin",
    title: "Delfín rosado boliviano",
    description:
      "El delfín rosado habita en los ríos de la cuenca amazónica. Es una especie única en Sudamérica y está en peligro por la contaminación de ríos.",
    image: "https://images.unsplash.com/photo-1733711354853-01a129f2b6cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    firma: "/firmas/delfin-firma.jpg",
    questions: [
      {
        text: "¿Dónde vive el delfín rosado?",
        options: [
          { text: "En los ríos amazónicos", correct: true },
          { text: "En el océano Atlántico", correct: false },
          { text: "En lagunas altoandinas", correct: false },
        ],
      },
      {
        text: "¿Por qué está en peligro?",
        options: [
          { text: "Por contaminación y redes de pesca", correct: true },
          { text: "Por el frío extremo", correct: false },
          { text: "Por falta de alimento", correct: false },
        ],
      },
    ],
  },
  {
    id: "serpiente",
    title: "Serpiente cascabel boliviana",
    description:
      "Habita zonas áridas del sur boliviano. Es importante para el equilibrio ecológico al controlar poblaciones de roedores.",
    image: "https://images.unsplash.com/photo-1596763950802-1d88da92758a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    firma: "/firmas/serpiente-firma.jpg",
    questions: [
      {
        text: "¿Qué función ecológica cumple la serpiente cascabel?",
        options: [
          { text: "Controla plagas de roedores", correct: true },
          { text: "Produce oxígeno", correct: false },
          { text: "Poliniza flores", correct: false },
        ],
      },
      {
        text: "¿Por qué se le teme injustamente?",
        options: [
          { text: "Por su veneno, aunque evita ataques", correct: true },
          { text: "Porque destruye cultivos", correct: false },
          { text: "Porque es ruidosa", correct: false },
        ],
      },
    ],
  },
  {
    id: "tortuga",
    title: "Tortuga del pantano",
    description:
      "Vive en ríos y lagunas del Beni y Santa Cruz. La extracción ilegal de huevos amenaza su población.",
    image: "https://images.unsplash.com/photo-1565282234722-a675114238e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1513",
    firma: "/firmas/tortuga-firma.jpg",
    questions: [
      {
        text: "¿Dónde vive principalmente la tortuga del pantano?",
        options: [
          { text: "En zonas húmedas y ríos", correct: true },
          { text: "En montañas frías", correct: false },
          { text: "En el desierto", correct: false },
        ],
      },
      {
        text: "¿Qué pone en riesgo a la especie?",
        options: [
          { text: "La extracción de huevos", correct: true },
          { text: "La sobrepesca", correct: false },
          { text: "El turismo", correct: false },
        ],
      },
    ],
  },
  {
    id: "tucan",
    title: "Tucán",
    description:
      "Famoso por su gran pico de colores, vive en los bosques tropicales del oriente boliviano. Ayuda a dispersar semillas.",
    image: "https://images.unsplash.com/photo-1543507805-14b3bc710088?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    firma: "/firmas/tucan-firma.jpg",
    questions: [
      {
        text: "¿Cuál es su función ecológica principal?",
        options: [
          { text: "Dispersar semillas", correct: true },
          { text: "Excavar madrigueras", correct: false },
          { text: "Purificar agua", correct: false },
        ],
      },
      {
        text: "¿Dónde habita el tucán?",
        options: [
          { text: "En los bosques tropicales del oriente", correct: true },
          { text: "En zonas de altura", correct: false },
          { text: "En desiertos", correct: false },
        ],
      },
    ],
  },
  {
    id: "alpaca",
    title: "Alpaca",
    description:
        "La alpaca es un camélido sudamericano domesticado, valorado por su lana y adaptado a la puna boliviana.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSej0DctQPoxZC2PSXWlpfgrEhgyXOeSkGNcw&s",
    firma: "/firmas/alpaca-firma.jpg",
    questions: [
      {
        text: "¿Dónde se encuentra principalmente la alpaca en Bolivia?",
        options: [
          { text: "En la Amazonía", correct: false },
          { text: "En la puna y altiplano", correct: true },
          { text: "En bosques tropicales", correct: false },
        ],
      },
      {
        text: "¿Para qué se utiliza principalmente la alpaca?",
        options: [
          { text: "Carne exclusivamente", correct: false },
          { text: "Lana y fibras", correct: true },
          { text: "Como mascota urbana", correct: false },
        ],
      },
    ],
  },
  {
    id: "caiman",
    title: "Caimán",
    description:
        "El caimán habita ríos y humedales del norte de Bolivia. Es fundamental para el equilibrio de los ecosistemas acuáticos.",
    image: "https://as1.ftcdn.net/jpg/01/35/79/42/1000_F_135794202_BZjhYYEZ2ntRz0yfqbpdkXCIoG9lXAnZ.jpg",
    firma: "/firmas/caiman-firma.jpg",
    questions: [
      {
        text: "¿Cuál es el hábitat principal del caimán boliviano?",
        options: [
          { text: "Ríos y humedales", correct: true },
          { text: "Montañas rocosas", correct: false },
          { text: "Desiertos", correct: false },
        ],
      },
      {
        text: "¿Por qué es importante el caimán en el ecosistema?",
        options: [
          { text: "Controla poblaciones de peces y otros animales", correct: true },
          { text: "Purifica el aire", correct: false },
          { text: "Dispersa semillas", correct: false },
        ],
      },
    ],
  },
  {
    id: "gato-andino",
    title: "Gato andino",
    description:
        "El gato andino es un felino pequeño y esquivo que habita zonas de alta montaña. Su conservación depende de la protección de su hábitat.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Gato_andino.jpg",
    firma: "/firmas/gato-andino-firma.jpg",
    questions: [
      {
        text: "¿Dónde habita principalmente el gato andino?",
        options: [
          { text: "Selvas bajas", correct: false },
          { text: "Zonas de alta montaña", correct: true },
          { text: "Desiertos áridos", correct: false },
        ],
      },
      {
        text: "¿Cuál es la mayor amenaza para el gato andino?",
        options: [
          { text: "Degradación del hábitat", correct: true },
          { text: "Sobrepesca", correct: false },
          { text: "Fiebre aviar", correct: false },
        ],
      },
    ],
  },
  {
    id: "oso-jucumari",
    title: "Oso jucumari",
    description:
        "El oso andino, o jucumari, vive en bosques montanos de Bolivia y es la única especie de oso en Sudamérica.",
    image: "https://ccjusticiabolivia.org/wp-content/uploads/2018/12/oso-jukumari.jpg",
    firma: "/firmas/oso-jucumari-firma.jpg",
    questions: [
      {
        text: "¿Dónde vive el oso jucumari?",
        options: [
          { text: "Bosques montanos", correct: true },
          { text: "Altiplano árido", correct: false },
          { text: "Ríos amazónicos", correct: false },
        ],
      },
      {
        text: "¿Cuál es su dieta principal?",
        options: [
          { text: "Carnívora estricta", correct: false },
          { text: "Omnívora", correct: true },
          { text: "Herbívora exclusiva", correct: false },
        ],
      },
    ],
  },
  {
    id: "oveja",
    title: "Oveja",
    description:
        "La oveja es un animal domesticado que se cría por su lana y carne en regiones altas y templadas de Bolivia.",
    image: "https://www.cenda.org/images/1_queso_oveja.jpg",
    firma: "/firmas/oveja-firma.jpg",
    questions: [
      {
        text: "¿Para qué se cría principalmente la oveja?",
        options: [
          { text: "Transporte de carga", correct: false },
          { text: "Lana y carne", correct: true },
          { text: "Como mascota", correct: false },
        ],
      },
      {
        text: "¿Dónde se encuentran principalmente las ovejas en Bolivia?",
        options: [
          { text: "Altiplano y valles", correct: true },
          { text: "Selva amazónica", correct: false },
          { text: "Desierto del sur", correct: false },
        ],
      },
    ],
  },
  {
    id: "perezoso",
    title: "Perezoso",
    description:
        "El perezoso habita en los bosques tropicales de Bolivia y es conocido por su movimiento lento y su adaptación arbórea.",
    image: "https://pxcdn.eldeber.com.bo/eldeber/523873/092025/1757229454021.jpg",
    firma: "/firmas/perezoso-firma.jpg",
    questions: [
      {
        text: "¿Dónde vive el perezoso en Bolivia?",
        options: [
          { text: "Bosques tropicales", correct: true },
          { text: "Montañas secas", correct: false },
          { text: "Altiplano", correct: false },
        ],
      },
      {
        text: "¿Cuál es su característica más notable?",
        options: [
          { text: "Velocidad extrema", correct: false },
          { text: "Movimiento lento y adaptación arbórea", correct: true },
          { text: "Caza activa", correct: false },
        ],
      },
    ],
  },
  {
    id: "vizcacha",
    title: "Vizcacha",
    description:
        "La vizcacha es un roedor que habita en zonas áridas y rocosas del altiplano boliviano, formando colonias en madrigueras.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Bolivian_vizcacha.jpg",
    firma: "/firmas/vizcacha-firma.jpg",
    questions: [
      {
        text: "¿Dónde vive la vizcacha?",
        options: [
          { text: "Altiplano rocoso", correct: true },
          { text: "Selvas tropicales", correct: false },
          { text: "Pantanos", correct: false },
        ],
      },
      {
        text: "¿Qué hace la vizcacha para protegerse?",
        options: [
          { text: "Se camufla y vive en madrigueras", correct: true },
          { text: "Vuelo rápido", correct: false },
          { text: "Construye nidos altos", correct: false },
        ],
      },
    ],
  },
];
