<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Estrategias metacognitivas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4.text-white
            p.mb-0(data-aos="fade-up") Nuestro cerebro funciona como una máquina predictiva que ayuda a disminuir la incertidumbre del entorno. Gracias a nuestras capacidades cerebrales y al sistema nervioso, podemos comprender mejor el mundo que nos rodea. Para Vivas (2020), entre las diversas habilidades mentales destacan aquellas relacionadas con el procesamiento cognitivo: aprendizaje, memoria, lenguaje, pensamiento y, en particular, la metacognición.

    .bg-full-width.bg-color-10
      .px-4.px-md-5.pb-md-3
        #t_1_1.titulo-segundo(data-aos="flip-up")
          h2 #[span 1.1] ¿Qué es la metacognición?
        
        p.mb-5 A continuación, se presenta un podcast que profundiza en el concepto de metacognición, explorando sus fundamentos teóricos, implicancias neuropsicológicas y aplicaciones pedagógicas clave para el desarrollo del pensamiento crítico y la autorregulación en los estudiantes.

        .row.justify-content-center.align-items-center
          .col-lg-6.order-2
            figure
              img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
          .col-lg-6.order-1.mb-3.mb-lg-0
   
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
    
    h2(data-aos="fade-left") Perspectivas teóricas de la metacognición
    p.mb-5 Según Sandia Rondel (2004), el estudio de la metacognición se ha abordado desde tres marcos teóricos:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Epistemología genética (Piaget)")
            p Destaca la construcción progresiva del conocimiento a través de la interacción con el entorno.
    
          .div(titulo="Procesamiento de la información")
            p Analiza cómo el cerebro recibe, codifica, almacena y recupera información.
    
          .div(titulo="Teoría histórico-cultural (Vygotsky)")
            p Considerada la más relevante, ya que introduce la Zona de Dearrollo Próximo y el uso de mediadores como el lenguaje, fundamentales para el desarrollo de la metacognición.
    
    .row.justify-content-center.align-items-center.bg-color-5.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0
            p La teoría vygotskiana enfatiza que el aprendizaje impulsa el desarrollo hacia niveles superiores de funcionamiento. Este enfoque tiene implicaciones directas en la enseñanza de la metacognición en niños, pues no basta con evaluar el nivel actual del desarrollo, sino que se deben diseñar estrategias que faciliten la transición hacia una mayor conciencia y autorregulación.
            p.mb-0 Para lograrlo, se requiere el uso de mediadores como el lenguaje y una comunicación efectiva entre docente y alumno. En este contexto, el maestro actúa como guía del proceso de enseñanza-aprendizaje, promoviendo prácticas que estimulen la reflexión y la autonomía.
          .col-lg-3(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/4.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Tipologías de la metacognición

    p.mb-5 La metacognición se manifiesta en diferentes formas, cada una vinculada a funciones cognitivas específicas que permiten al individuo observar, regular y adaptar sus procesos mentales para mejorar el aprendizaje. Según Vivas (2020), estas modalidades fortalecen la autonomía del estudiante y su capacidad para aprender de manera consciente y estratégica. Los tipos de metacognición son:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7
              h5 Metacognición de la memoria
              p Conocimiento y monitoreo del funcionamiento de la memoria. El sujeto reconoce qué recuerda mejor, cómo relaciona conocimientos y qué estrategias usa para recordar. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Ejemplo</b>. usar mapas mentales para activar conocimientos previos antes de estudiar un nuevo tema.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              h5 Metacognición de la atención
              p Conciencia sobre la capacidad de mantener el foco, identificar distracciones y aplicar estrategias para recuperar la concentración. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p <b>Ejemplo</b>. reconocer que el ruido ambiental afecta el rendimiento y decidir estudiar en un espacio tranquilo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7
              h5 Metacognición de la comprensión
              p Habilidad para evaluar el nivel real de entendimiento, distinguir entre comprender y memorizar, y aplicar conocimientos en otros contextos. 
              
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p <b>Ejemplo</b>. parafrasear un texto para verificar su comprensión.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7
              h5 Metacognición del pensamiento
              p Capacidad de reflexionar sobre los propios procesos de pensamiento, identificar sesgos y elegir estrategias de razonamiento más eficaces. 
              
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p <b>Ejemplo</b>. evaluar si se está pensando de forma lógica o emocional ante una decisión importante.
  
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Desde la neuroeducación, estos tipos se relacionan estrechamente con el desarrollo de las funciones ejecutivas y la autorregulación emocional, componentes clave para un aprendizaje autónomo y estratégico.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        h2(data-aos="fade-left") Aplicaciones prácticas y reflexivas
        p(data-aos="fade-left") La metacognición, entendida como la capacidad de pensar sobre el propio pensamiento, tiene aplicaciones fundamentales en campos como la educación, la psicología y la neuroeducación. No solo implica saber qué se piensa, sino también cómo, por qué y para qué se piensa de determinada manera. Este nivel de conciencia permite optimizar el rendimiento cognitivo a través de la observación, regulación y ajuste de estrategias mentales.
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Un ejemplo cotidiano es cuando una persona anticipa la dificultad de una tarea. Al reflexionar sobre su complejidad, activa procesos de planificación y selección de estrategias, lo que le permite prepararse y reducir la ansiedad. Este tipo de anticipación es una forma clara de autorregulación cognitiva.
        p Otro ejemplo es el control consciente de estrategias de aprendizaje: un estudiante que decide usar esquemas, mapas conceptuales o resúmenes, y luego evalúa su utilidad, está ejerciendo pensamiento metacognitivo. Este proceso de selección, aplicación y evaluación le permite ajustar su enfoque de estudio según la tarea y sus propias capacidades.

    .row.justify-content-center.align-items-center.bg-color-13.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.order-2
            p La autoevaluación de fortalezas y debilidades también es esencial. Reconocer, por ejemplo, una buena memoria visual pero dificultades auditivas, permite adaptar los métodos de estudio y maximizar el rendimiento. Esta práctica fomenta una conciencia crítica sobre el aprendizaje.
            p Asimismo, ser consciente de los procesos mentales activados en distintas situaciones —como razonar lógicamente, actuar por impulso emocional o utilizar estrategias automáticas— permite intervenir y optimizar el pensamiento. Esta conciencia facilita una mayor eficacia cognitiva.
          .col-lg-3(data-aos="zoom-in").order-1
            img.img-fluid(src='@/assets/curso/tema1/11.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Un signo claro de metacognición ocurre cuando un estudiante detecta que una estrategia no está funcionando y decide cambiarla. Este ajuste requiere no solo conciencia, sino también flexibilidad cognitiva y disposición al cambio, cualidades esenciales en entornos de aprendizaje dinámicos.
          figure.d-flex.justify-content-end
            img(src="@/assets/curso/tema1/13.svg" data-aos="zoom-in", style="max-width: 67px")
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-7.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Finalmente, un aspecto fascinante de la metacognición es su capacidad predictiva. El cerebro puede anticipar escenarios y consecuencias, lo que permite tomar decisiones más informadas y adaptativas. Por ejemplo, ante una situación nueva, una persona puede prever dificultades, imaginar soluciones y prepararse, lo que mejora su desempeño y capacidad de adaptación.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Estrategias metacognitivas
    
    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/14.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Las estrategias metacognitivas son técnicas que permiten reflexionar sobre el proceso de aprendizaje, lo cual implica ir más allá de adquirir información: se trata de ser conscientes de cómo se aprende y de cómo se puede mejorar esa adquisición (Zenteno, 2024). Estas estrategias no solo optimizan el rendimiento académico, sino que también transforman la relación del estudiante con su propio proceso cognitivo, promoviendo la autonomía, la autorregulación y el pensamiento crítico.

    p.mb-5 Aplicar estrategias metacognitivas implica gestionar procesos mentales como la memoria, la comprensión o la resolución de problemas mediante la observación, el ajuste y la mejora de estos. Según Zenteno (2024), estas estrategias se organizan en tres etapas fundamentales, como se muestra a continuación:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/15.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="17.5%" y="57.5%" numero="+")
                h5 Monitoreo
                p Observar y evaluar el progreso durante la actividad. 
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Ej.</b>: ¿Estoy comprendiendo? ¿Necesito ajustar mi método?
                
              .bg-color-white.box-shadow.p-3(x="17%" y="27%" numero="+")
                h5 Planificación
                p Establecer metas claras antes de iniciar una tarea. 
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Ej.</b>: ¿Qué quiero lograr? ¿Qué conocimientos previos tengo? ¿Qué estrategia debo usar?
    
              .bg-color-white.box-shadow.p-3(x="85%" y="43%" numero="+")
                h5 Evaluación
                p Reflexionar al finalizar la tarea. 
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Ej.</b>: ¿Alcancé mis metas? ¿Funcionó la estrategia? ¿Qué cambiaré la próxima vez?

    h2(data-aos="fade-left") Relación entre estrategias cognitivas y metacognitivas
    p.mb-5 Para entender cómo interactúan las estrategias metacognitivas con otras formas de aprendizaje, es importante diferenciar su función en relación con las estrategias cognitivas. La siguiente tabla resume esta distinción:


    .bg-full-width.bg-color-11
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/16.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Cognitivas
                p.mb-0 Procedimientos que facilitan el procesamiento de la información y su aplicación en la resolución de problemas.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/17.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Metacognitivas
                p.mb-0 Acciones dirigidas a observar, regular y mejorar el uso de estrategias cognitivas.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Desde la neuroeducación, estos tipos se relacionan estrechamente con el desarrollo de las funciones ejecutivas y la autorregulación emocional, componentes clave para un aprendizaje autónomo y estratégico.
    
    h2(data-aos="fade-left") Criterios para la enseñanza de estrategias metacognitivas
    p.mb-5 Salazar Béjar y Cáceres Mesa (2022) proponen dos criterios fundamentales para implementar estrategias metacognitivas: el grado de conciencia sobre las estrategias y el nivel de ayuda docente. A continuación, se presenta una clasificación según el grado de conciencia sobre las estrategias: 

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Entrenamiento ciego" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-7.mb-4.mb-md-0
            h4 Entrenamiento ciego
            p El estudiante realiza tareas sin saber por qué o para qué, dificultando la transferencia del conocimiento.
    
          .col-md-8.col-lg-5.col-xl-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/19.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Entrenamiento " :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-7.mb-4.mb-md-0
            h4 Entrenamiento 
            p Se explican las razones y la utilidad de las estrategias, promoviendo comprensión y uso flexible.
    
          .col-md-8.col-lg-5.col-xl-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/20.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Entrenamiento metacognitivo" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-7.mb-4.mb-md-0
            h4 Entrenamiento metacognitivo
            p El estudiante comprueba por sí mismo la efectividad de las estrategias, desarrollando una conciencia profunda y autonomía en el aprendizaje.
    
          .col-md-8.col-lg-5.col-xl-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/21.png', alt='', style="width: 100%;")
    
    
    .bg-full-width.bg-color-10
      .px-4.px-md-5.pb-md-3
        p.mb-5 A continuación, se describe el segundo criterio, relacionado con el tipo de apoyo ofrecido por el docente:
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/23.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 1. Instrucción explícita
                p.text-center El docente explica de manera clara las estrategias, diferenciando el saber qué, cómo y cuándo/usarlas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/24.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 2. Modelado cognitivo
                p.text-center El profesor verbaliza sus propios procesos de pensamiento, mostrando cómo planifica, supervisa y evalúa.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 3. Práctica guiada
                p.text-center El docente acompaña al alumno durante la aplicación de las estrategias, proporcionando apoyo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/26.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 4. Práctica cooperativa
                p.text-center Se trabaja en grupo, compartiendo el control de la actividad, lo que favorece el aprendizaje colaborativo y el diálogo metacognitivo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/27.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 5. Práctica individual
                p.text-center El estudiante aplica de forma autónoma las estrategias con ayuda de guías de autointerrogación, lo que fortalece la autorregulación.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/22.png', alt='')
    
    h2(data-aos="fade-left") Estrategias metacognitivas aplicadas en el aula
    p.mb-5 Finalmente, Zenteno (2024) ofrece ejemplos concretos de estrategias aplicables en contextos educativos. Estas herramientas fomentan un entorno de aprendizaje consciente, reflexivo y autónomo, como se detalla en la siguiente tabla:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/28.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Diarios de aprendizaje reflexivo")
            p Registro sistemático de experiencias, emociones, dificultades y estrategias utilizadas. Fomenta la autorregulación y la conciencia emocional y cognitiva.
    
          .div(titulo="Mapas conceptuales interactivos")
            p Representaciones gráficas que organizan la información jerárquicamente. Facilitan conexiones entre ideas y promueven el diálogo metacognitivo al ser compartidos.
    
          .div(titulo="Discusiones guiadas")
            p Conversaciones estructuradas con preguntas abiertas que estimulan el pensamiento crítico, la argumentación y la reformulación de ideas.
    
    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/29.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left")
          p Las estrategias metacognitivas son una guía esencial para lograr un aprendizaje profundo, flexible y autorregulado. Favorecen la mejora de la comprensión, la memoria, la toma de decisiones y la resolución de problemas, además de consolidar la autonomía del estudiante.
          p.mb-0 En palabras de Zenteno (2024), implementar estas estrategias transforma el aula en un espacio donde los estudiantes se convierten en protagonistas de su propio aprendizaje. Ya sea para aprobar un examen, adquirir una nueva habilidad o avanzar profesionalmente, las técnicas metacognitivas son aliadas indispensables en el proceso educativo.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/16807?page=3 " target="_blank" rel="noopener noreferrer") Sandia Rondel, L. (2004). Metacognición en niños: una posibilidad a partir de la teoría Vygotskiana. Acción Pedagógica, 13 (2), 128-135: ( ed.). D - Universidad de los Andes Venezuela. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.jorgeinnova.com/2024/10/guia-completa-de-estrategias-metacognitivas-de-aprendizaje.html " target="_blank" rel="noopener noreferrer") Zenteno, J. (2024, 23 noviembre). 



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=zFLbmOJqzhU " target="_blank" rel="noopener noreferrer") Banco Interamericano de Desarrollo. (2025, 15 de abril). Cómo desarrollar la metacognición, el aprender a aprender, la autorregulación y el autoconocimiento [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
