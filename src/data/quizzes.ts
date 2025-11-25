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
    title: "Tucán toco",
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
        text: "¿Dónde habita el tucán toco?",
        options: [
          { text: "En los bosques tropicales del oriente", correct: true },
          { text: "En zonas de altura", correct: false },
          { text: "En desiertos", correct: false },
        ],
      },
    ],
  },
  {
    id: "oveja",
    title: "Oveja andina",
    description:
      "Animal doméstico fundamental para las comunidades altoandinas. Proporciona lana, carne y es parte integral de la cultura y economía local.",
    image: "https://images.unsplash.com/photo-1542727357-8b45eae0b465?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    firma: "/firmas/oveja-firma.jpg",
    questions: [
      {
        text: "¿Qué importancia tiene la oveja para las comunidades andinas?",
        options: [
          { text: "Proporciona lana, carne y sustento económico", correct: true },
          { text: "Es solo un animal decorativo", correct: false },
          { text: "Se usa para transporte de carga", correct: false },
        ],
      },
      {
        text: "¿Dónde se crían principalmente las ovejas en Bolivia?",
        options: [
          { text: "En regiones altoandinas", correct: true },
          { text: "En la Amazonía", correct: false },
          { text: "En el Chaco", correct: false },
        ],
      },
    ],
  },
  {
    id: "alpaca",
    title: "Alpaca",
    description:
      "Camélido sudamericano valorado por su fina lana. Habita en el altiplano boliviano y es crucial para la economía textil y la cultura andina.",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1472",
    firma: "/firmas/alpaca-firma.jpg",
    questions: [
      {
        text: "¿Por qué es valorada la alpaca?",
        options: [
          { text: "Por su lana fina y suave", correct: true },
          { text: "Por su velocidad", correct: false },
          { text: "Por ser un depredador", correct: false },
        ],
      },
      {
        text: "¿En qué región de Bolivia se encuentra principalmente?",
        options: [
          { text: "En el altiplano", correct: true },
          { text: "En los llanos orientales", correct: false },
          { text: "En los valles secos", correct: false },
        ],
      },
    ],
  },
  {
    id: "caiman",
    title: "Caimán negro",
    description:
      "Reptil que habita en ríos y lagunas de la Amazonía boliviana. Es un depredador importante para el equilibrio de los ecosistemas acuáticos.",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    firma: "/firmas/caiman-firma.jpg",
    questions: [
      {
        text: "¿Dónde vive el caimán negro en Bolivia?",
        options: [
          { text: "En ríos y lagunas de la Amazonía", correct: true },
          { text: "En el lago Titicaca", correct: false },
          { text: "En salares andinos", correct: false },
        ],
      },
      {
        text: "¿Qué papel ecológico cumple?",
        options: [
          { text: "Es depredador regulador de ecosistemas acuáticos", correct: true },
          { text: "Poliniza plantas acuáticas", correct: false },
          { text: "Purifica el agua", correct: false },
        ],
      },
    ],
  },
  {
    id: "perezoso",
    title: "Perezoso de tres dedos",
    description:
      "Mamífero arbóreo de movimientos lentos que habita en los bosques tropicales del norte de Bolivia. Está amenazado por la deforestación.",
    image: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    firma: "/firmas/perezoso-firma.jpg",
    questions: [
      {
        text: "¿Qué caracteriza al perezoso?",
        options: [
          { text: "Sus movimientos lentos y vida arbórea", correct: true },
          { text: "Su gran velocidad", correct: false },
          { text: "Su vida subterránea", correct: false },
        ],
      },
      {
        text: "¿Cuál es su principal amenaza?",
        options: [
          { text: "La deforestación de su hábitat", correct: true },
          { text: "La caza deportiva", correct: false },
          { text: "Las bajas temperaturas", correct: false },
        ],
      },
    ],
  },
  {
    id: "vizcacha",
    title: "Vizcacha andina",
    description:
      "Roedor que vive en zonas rocosas de los Andes. Conocido por su cola larga y peluda, es pariente de la chinchilla y activo principalmente al atardecer.",
    image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    firma: "/firmas/vizcacha-firma.jpg",
    questions: [
      {
        text: "¿Dónde habita la vizcacha?",
        options: [
          { text: "En zonas rocosas de los Andes", correct: true },
          { text: "En bosques húmedos", correct: false },
          { text: "En pantanos tropicales", correct: false },
        ],
      },
      {
        text: "¿Con qué animal está emparentada?",
        options: [
          { text: "Con la chinchilla", correct: true },
          { text: "Con el puma", correct: false },
          { text: "Con el cóndor", correct: false },
        ],
      },
    ],
  },
  {
    id: "gato-andino",
    title: "Gato andino",
    description:
      "Uno de los felinos más raros y amenazados del mundo. Habita en regiones montañosas áridas de los Andes y se alimenta de pequeños mamíferos.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    firma: "/firmas/gato-andino-firma.jpg",
    questions: [
      {
        text: "¿Por qué el gato andino es especial?",
        options: [
          { text: "Es uno de los felinos más raros del mundo", correct: true },
          { text: "Es el felino más grande de Bolivia", correct: false },
          { text: "Vive en árboles altos", correct: false },
        ],
      },
      {
        text: "¿Qué come principalmente?",
        options: [
          { text: "Pequeños mamíferos como vizcachas", correct: true },
          { text: "Frutas y semillas", correct: false },
          { text: "Peces de río", correct: false },
        ],
      },
    ],
  },
  {
    id: "oso-jucumari",
    title: "Oso Jucumari (Oso de anteojos)",
    description:
      "Único oso nativo de Sudamérica. Habita en los bosques nublados de los Yungas y es crucial para la dispersión de semillas. Está en peligro de extinción.",
    image: "https://images.unsplash.com/photo-1594736797933-d0d69c3d059d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    firma: "/firmas/oso-firma.jpg",
    questions: [
      {
        text: "¿Por qué es único el oso jucumari?",
        options: [
          { text: "Es el único oso nativo de Sudamérica", correct: true },
          { text: "Es el oso más grande del mundo", correct: false },
          { text: "Vive en el desierto", correct: false },
        ],
      },
      {
        text: "¿Qué importancia ecológica tiene?",
        options: [
          { text: "Dispersa semillas en los bosques", correct: true },
          { text: "Controla poblaciones de peces", correct: false },
          { text: "Poliniza flores nocturnas", correct: false },
        ],
      },
    ],
  },
];