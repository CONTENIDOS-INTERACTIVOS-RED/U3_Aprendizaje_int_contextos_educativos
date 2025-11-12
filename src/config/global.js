export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Estrategias para la Mejora del Aprendizaje y el Desarrollo Cognitivo',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estrategias metacognitivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '¿Qué es la metacognición?',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipologías de la metacognición',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estrategias metacognitivas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas didácticas neurocientíficas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Vivas, J. P. (2020, 18 noviembre). <em>¿Qué es la metacognición? Ejemplos y estrategias</em>. psicologia-online.com.',
      link:
        'https://www.psicologia-online.com/que-es-la-metacognicion-ejemplos-y-estrategias-4267.html',
    },
    {
      referencia:
        'Sandia Rondel, L. (2004). <em>Metacognición en niños: una posibilidad a partir de la teoría Vygotskiana</em>. Acción Pedagógica, 13(2), 128-135. Universidad de los Andes, Venezuela.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/16807?page=3',
    },
    {
      referencia:
        'Zenteno, J. (2024, 23 noviembre). <em>Guía completa de estrategias metacognitivas de aprendizaje</em>. jorgeinnova.',
      link:
        'https://www.jorgeinnova.com/2024/10/guia-completa-de-estrategias-metacognitivas-de-aprendizaje.html',
    },
    {
      referencia:
        'Salazar Béjar, J. E., & Cáceres Mesa, M. L. (2022). <em>Estrategias metacognitivas para el logro de aprendizajes significativos</em>. Conrado, 18(84).',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1990-86442022000100006',
    },
    {
      referencia:
        'Vargas-Tipula, W. G., Zavala-Cáceres, E. M., & Zuñiga-Aparicio, P. (2024). <em>Estrategias para el aprendizaje desde la neurociencia: Revisión sistemática</em>. Koinonía, 9(supl.1).',
      link:
        'https://ve.scielo.org/scielo.php?script=sci_arttext&pid=S2542-30882024000300097',
    },
    {
      referencia:
        'Heldrich Santizo. (2025). <em>5 estrategias de neurociencia para mejorar el aprendizaje</em>. CESUMA.',
      link:
        'https://www.cesuma.mx/blog/5-estrategias-neurociencia-mejorar-aprendizaje.html',
    },
    {
      referencia:
        'Briceño, G. (2021). <em>El aprendizaje multimedia: el aporte de la teoría de Richard Mayer</em>. Aucal Blog.',
      link:
        'https://www.aucal.edu/blog/servicios-sociales-comunidad/el-aprendizaje-multimedia-el-aporte-de-la-teoria-de-richard-mayer/',
    },
    {
      referencia:
        'Varela, A. (2025, 24 marzo). <em>Métodos de enseñanza basados en la neuroeducación</em>. Psicoeducar Costa Rica.',
      link:
        'https://psicoeducarcr.com/metodos-de-ensenanza-basados-en-la-neuroeducacion/',
    },
    {
      referencia:
        'Jame, K. D. A., & Escobedo, Y. V. (2025). <em>Intervención psicopedagógica en estudiantes con trastornos de aprendizaje</em>. Revista Científica de Innovación Educativa y Sociedad Actual "ALCON", 5(3), 230–241.',
      link: 'https://soeici.org/index.php/alcon/article/download/588/973',
    },
    {
      referencia:
        'Almonte, E. (2007). <em>La evaluación psicopedagógica para la intervención oportuna en la deficiencia escolar</em>. Educación Superior, 6(1), 43–50.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9026188',
    },
    {
      referencia:
        'Palacio, C. R., López, G. C. H., & Nieto, L. Á. R. (2006). <em>Qué es la intervención psicopedagógica: definición, principios y componentes</em>. El Ágora USB Medellín-Colombia, 6(2), 215–226.',
      link:
        'https://www.academia.edu/download/38627809/Agora_Diez_Tema_4_Que_es_la_Intervencion_Psicopedagogica.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Andamiaje',
      significado:
        'Estrategia de apoyo gradual que ofrece el docente para que el estudiante alcance aprendizajes que aún no puede lograr por sí solo, clave en intervenciones pedagógicas.',
    },
    {
      termino: 'Autorregulación',
      significado:
        'Capacidad del estudiante para planificar, monitorear y evaluar su propio proceso de aprendizaje, esencial en estrategias metacognitivas.',
    },
    {
      termino: 'Codificación',
      significado:
        'Proceso cerebral mediante el cual la información sensorial se transforma y se almacena en la memoria; técnica central en enfoques neurocientíficos.',
    },
    {
      termino: 'Curiosidad',
      significado:
        'Motor emocional que activa el sistema de recompensa del cerebro, facilitando el aprendizaje; se potencia mediante métodos como el ABP y gamificación.',
    },
    {
      termino: 'Evaluación psicopedagógica',
      significado:
        'Proceso sistemático que busca comprender las necesidades cognitivas, emocionales y educativas de los estudiantes para tomar decisiones pedagógicas informadas.',
    },
    {
      termino: 'Flexibilidad cognitiva',
      significado:
        'Habilidad para adaptarse a nuevos contextos o cambiar estrategias de pensamiento; se fortalece con intercalado de temas y ejercicios metacognitivos.',
    },
    {
      termino: 'Gamificación',
      significado:
        'Técnica didáctica que incorpora elementos de juego en el aula para aumentar la motivación, participación y retención del aprendizaje.',
    },
    {
      termino: 'Neuroplasticidad',
      significado:
        'Capacidad del cerebro de reorganizarse y formar nuevas conexiones neuronales como respuesta a estímulos o aprendizajes; fundamento clave de técnicas neuroeducativas.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Proceso de ofrecer información precisa sobre el desempeño del estudiante para corregir y mejorar; fundamental tanto en metacognición como en intervención pedagógica.',
    },
    {
      termino: 'Zona de Desarrollo Próximo (ZDP)',
      significado:
        'Concepto de Vygotsky que identifica el espacio entre lo que un estudiante puede hacer solo y lo que logra con ayuda; guía para intervenciones educativas efectivas.',
    },
  ],
}
