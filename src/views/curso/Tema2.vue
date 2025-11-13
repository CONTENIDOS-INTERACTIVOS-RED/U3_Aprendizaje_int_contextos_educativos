<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Técnicas didácticas neurocientíficas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La neurociencia estudia el sistema nervioso, que incluye el cerebro, la médula espinal y los nervios periféricos. Su objetivo es comprender cómo estos elementos interactúan y se comunican para llevar a cabo funciones cognitivas, emocionales y motoras. De la confluencia entre neurociencia y educación surge la neuroeducación, un campo interdisciplinario cuyo propósito es aplicar descubrimientos neurocientíficos para mejorar los procesos de enseñanza y aprendizaje.
    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En este contexto, Araya y Espinoza (2020), citados por Vargas-Típula et al. (2024), sostienen que para lograr un proceso educativo eficaz, es necesario intencionar el aprendizaje, considerando tanto factores cognitivos como emocionales, como el interés del estudiante. De forma complementaria, Briones y Benavides (2021), también citados por Vargas-Típula et al., afirman que cuando un docente comprende cómo el cerebro aprende, procesa y retiene información, puede ajustar su estilo de enseñanza, su lenguaje, su actitud y sus emociones, influyendo positivamente en el desarrollo cerebral y en la forma de aprender de sus estudiantes.
    
    p El aprendizaje es un proceso vital en la vida humana y la calidad educativa es esencial para el desarrollo de habilidades, conocimientos y competencias necesarias para el éxito personal, laboral y social. En las últimas décadas, el crecimiento exponencial de la neurociencia ha permitido entender mejor cómo el cerebro humano procesa y almacena información, lo cual ha sido aplicado progresivamente en contextos educativos que abarcan desde la infancia hasta la adultez.

    p.mb-5 A continuación, se presentan cinco estrategias propuestas por Santizo que, desde una base neurocientífica, tienen el potencial de promover un aprendizaje profundo, significativo y adaptativo.

    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Aprendizaje espaciado
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Una de las técnicas más efectivas y validadas por la neurociencia es el aprendizaje espaciado (o práctica distribuida), que consiste en repartir las sesiones de estudio a lo largo del tiempo, en lugar de concentrarlas en un solo bloque intensivo. A diferencia del estudio masivo, esta estrategia favorece una consolidación más profunda y duradera del conocimiento. 
        p(data-aos="fade-left") Desde la neurociencia, se sostiene que el esfuerzo por recuperar información después de un breve período de olvido refuerza los circuitos neuronales, especialmente en el hipocampo, clave para transferir la memoria de corto a largo plazo. Este proceso activa mecanismos como la potenciación a largo plazo (LTP), que fortalece las sinapsis y genera mayor estabilidad en la memoria. Las aplicaciones prácticas del aprendizaje espaciado son: 
    
    .bg-full-width.bg-color-10
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Cronogramas de repaso
                p.mb-0 Diseñar planes de estudio con revisiones escalonadas (día 1, día 3, día 6, etc.), permitiendo consolidar el conocimiento con el tiempo.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Herramientas digitales
                p.mb-0 Uso de apps como Anki o Quizlet, que aplican algoritmos de repetición espaciada basados en el rendimiento del estudiante.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Actividades de repaso progresivo
                p.mb-0 Integración en el aula de ejercicios que reactiven conocimientos previos: autoevaluaciones, cuestionarios diferidos, repaso oral o en grupo.
    
    .row.justify-content-center.align-items-center.bg-color-6.mb-5.bg-full-width
      .px-4.px-md-5
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.p-4
              h5 Ejemplo aplicado
              p Clase sobre funciones ejecutivas:
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Día 1</b>: Lectura del material base (inhibición, memoria de trabajo, flexibilidad cognitiva).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Día 3</b>: Esquema visual conectando funciones ejecutivas con estrategias metacognitivas.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Día 6</b>: Explicación en voz alta del esquema (estrategia learning by teaching).
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Día 10</b>: Creación de actividad lúdica relacionada con la inhibición cognitiva.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 <b>Día 15</b>: Reflexión en diario de aprendizaje sobre las estrategias más eficaces.
              p Este proceso permite que el cerebro consolide los aprendizajes a través de repeticiones espaciadas, fortaleciendo las redes neuronales.
            .col-lg-3(data-aos="zoom-in")
              img.img-fluid(src='@/assets/curso/tema2/7.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
        
    h2(data-aos="fade-left") Codificación dual
    p.mb-5 La codificación dual, propuesta por Allan Paivio (1971), postula que el aprendizaje mejora cuando la información se presenta simultáneamente en formatos verbales y visuales. Esta estrategia se apoya en la existencia de dos sistemas diferenciados de procesamiento cerebral: uno para información verbal (palabras, frases, explicaciones) y otro para información visual (imágenes, diagramas, esquemas). Activar ambos sistemas de manera conjunta crea múltiples rutas de acceso a la memoria, lo que:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Mejora la retención a largo plazo.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Reduce la carga cognitiva.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Favorece una comprensión más profunda.
    
    p.mb-5 Este fenómeno se relaciona con el efecto de superioridad pictórica, que indica que las imágenes se recuerdan con mayor facilidad que las palabras aisladas. Las aplicaciones prácticas de la codificación dual son: 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Materiales didácticos combinados")
            p Diseño de contenidos que integren texto con imágenes significativas: infografías, diagramas, ilustraciones explicativas.
    
          .div(titulo="Presentaciones multimedia")
            p Uso de slides o vídeos que combinen narración oral con gráficos en movimiento, sincronizados para reforzar el mensaje.
    
          .div(titulo="Actividades de codificación activa")
            p Propuestas donde los estudiantes convierten conceptos verbales en dibujos, mapas conceptuales o esquemas visuales.

    .row.justify-content-center.align-items-center.bg-color-7.mb-5.bg-full-width
      .px-4.px-md-5
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.p-4
              h5 Ejemplo aplicado
              p En una clase sobre el cuerpo humano, se puede presentar:
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Un diagrama anatómico (visual) de los sistemas corporales.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Una descripción escrita (verbal) que explique cada función.
              p Esta combinación permite al estudiante formar una representación mental más sólida al integrar lo perceptivo con lo simbólico.
            .col-lg-4(data-aos="zoom-in")
              img.img-fluid(src='@/assets/curso/tema2/10.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8 
        h2(data-aos="fade-left") Intercalado de temas (interleaving)
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La estrategia de intercalado de temas, o interleaving, consiste en alternar el estudio de contenidos o habilidades en lugar de abordarlos de manera secuencial y exhaustiva. A diferencia del aprendizaje en bloque (centrado en un solo tema hasta dominarlo), esta técnica propone una dinámica más exigente y flexible, que estimula el procesamiento activo de la información.
        p(data-aos="fade-left") Desde la neurociencia, el intercalado activa procesos de comparación, discriminación y recuperación activa, favoreciendo la reconfiguración neuronal. Esto fortalece la comprensión profunda y la transferencia de lo aprendido a contextos nuevos, además de prevenir la ilusión de competencia (creencia errónea de haber dominado un tema por su repetición inmediata). A continuación, se resumen los beneficios cognitivos más importantes asociados al uso del intercalado de temas:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Estimula el pensamiento crítico
              p Obliga al estudiante a identificar y aplicar la estrategia adecuada según el tipo de contenido o problema.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Fortalece la memoria a largo plazo
              p Requiere recuperar información en contextos variados, reforzando su consolidación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Mejora la transferencia de aprendizajes
              p Favorece el uso flexible del conocimiento en situaciones nuevas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desarrolla la flexibilidad cognitiva
              p Entrena al cerebro para adaptarse a cambios constantes en el contenido, promoviendo agilidad mental.
    
    p.mb-5 A continuación, se presenta algunas formas prácticas de aplicar el intercalado en el aula o en el estudio autónomo:

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Alternancia temática en el estudio")
            p Estudiar biología y luego química en sesiones de 30 a 45 minutos, en lugar de dedicar horas seguidas a un solo tema.
    
          .div(titulo="Actividades que mezclan habilidades distintas")
            p Resolver ejercicios de lógica y luego analizar un texto argumentativo.
    
          .div(titulo="Uso de <em>flashcards</em> mezcladas")
            p Crear tarjetas con conceptos de diferentes materias o temas para fomentar la recuperación activa.
    
          .div(titulo="Repasos con preguntas intercaladas")
            p Diseñar cuestionarios con preguntas variadas de temas vistos anteriormente, combinando áreas de conocimiento.
    
    .bg-full-width.bg-color-10
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/18.svg", data-aos="zoom-in")
          .col-lg-9
            h2(data-aos="fade-left") Efecto de generación
            .bg-color-13.p-4.mb-3(data-aos="fade-left")
              p.mb-0 El efecto de generación es un principio neurocognitivo según el cual recordamos mejor lo que generamos por nosotros mismos que aquello que simplemente escuchamos o leemos. En contextos escolares, implica fomentar que los estudiantes construyan activamente su conocimiento, promoviendo un aprendizaje más significativo y duradero.
            p(data-aos="fade-left") Cuando los estudiantes generan ideas, explicaciones o ejemplos, activan regiones clave del cerebro como el hipocampo y la corteza prefrontal, implicadas en la memoria, la atención sostenida, la creatividad y el pensamiento crítico. Esta implicación activa fortalece las conexiones neuronales y estimula el desarrollo de procesos cognitivos superiores. A continuación, se presentan distintas estrategias prácticas para aplicar el efecto de generación en contextos educativos:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/19.svg" alt="" style="width: 90px")
              h5.text-center Creación de explicaciones personales
              p.mb-0.text-center Pedir al estudiante que explique un concepto a un compañero usando sus propias palabras.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/20.svg" alt="" style="width: 90px")
              h5.text-center Formulación de preguntas
              p.mb-0.text-center Invitar a los niños a generar preguntas relevantes sobre el tema en estudio.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/21.svg" alt="" style="width: 90px")
              h5.text-center Actividades de producción creativa
              p.mb-0.text-center Solicitar que inventen ejemplos, creen cuentos o desarrollen esquemas que representen el contenido aprendido.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/22.svg" alt="" style="width: 90px")
              h5.text-center Diarios de aprendizaje ilustrados
              p.mb-0.text-center Reflexionar sobre lo aprendido mediante textos y dibujos que representen sus experiencias y comprensiones personales.
    
    h2(data-aos="fade-left") Técnicas de regulación emocional
    p.mb-5 La regulación emocional es una habilidad esencial en el proceso de aprendizaje, ya que las emociones influyen directamente en la atención, la memoria, la motivación y el rendimiento académico. Desde la neurociencia, se ha demostrado que el estrés y la ansiedad pueden bloquear el acceso a la memoria de trabajo, mientras que las emociones positivas estimulan la dopamina, un neurotransmisor que favorece el aprendizaje y la neuroplasticidad. A continuación, se presentan algunos fundamentos neurocientíficos clave sobre la relación entre emociones y aprendizaje:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/23.png")
            .col-lg-7
              h5 Dopamina
              p Refuerza experiencias placenteras, favoreciendo la motivación y la consolidación de recuerdos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/24.png")
            .col-lg-7
              h5 Amígdala cerebral
              p Si detecta amenaza, bloquea el pensamiento racional y limita la atención y la toma de decisiones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/25.png")
            .col-lg-7
              h5 Corteza prefrontal
              p Funciona mejor con estabilidad emocional; regula la planificación, el juicio y el control de impulsos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/26.png")
            .col-lg-7
              h5 Neuroplasticidad
              p Se potencia con emociones positivas, facilitando la reorganización de las redes neuronales para aprender mejor.
    
    .bg-full-width.bg-color-10
      .px-4.px-md-5.pb-md-3
        p.mb-5 Estas son algunas aplicaciones prácticas que permiten regular el clima emocional en el aula o durante el estudio personal:
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/28.png' alt='AvatarTop').mx-auto.mb-3
                h4.text-center.mb-4 Rutinas de inicio emocional
                p.text-center.p-4 Ejercicios de respiración, visualización positiva o música relajante para iniciar la jornada con calma y enfoque.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/29.png' alt='AvatarTop').mx-auto.mb-3
                h4.text-center.mb-4 Metas alcanzables
                p.text-center.p-4 Objetivos breves que generan sensación de logro y fortalecen la autoestima.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/30.png' alt='AvatarTop').mx-auto.mb-3
                h4.text-center.mb-4 Ambientes seguros
                p.text-center.p-4 Espacios donde el error se normaliza como parte del proceso de aprendizaje.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/31.png' alt='AvatarTop').mx-auto.mb-3
                h4.text-center.mb-4 Diarios emocionales
                p.text-center.p-4 Registro de emociones antes y después de una actividad para promover la conciencia emocional.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/32.png' alt='AvatarTop').mx-auto.mb-3
                h4.text-center.mb-4 Pausas activas
                p.text-center.p-4 Breves momentos de movimiento o juego para liberar tensiones y renovar la atención.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema2/27.png', alt='')


    h2(data-aos="fade-left") Aprendizaje multisensorial
    p.mb-5 Las escuelas de ética filosófica han influido profundamente en el pensamiento humano, ofreciendo perspectivas diversas sobre la virtud, la felicidad y la vida moral.

    .row.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/33.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-1.p-4.mb-3(data-aos="fade-left")
              p.mb-0 El aprendizaje multisensorial, según Briceño (2021), es una estrategia que parte del principio de que la estimulación simultánea de varios sentidos (vista, oído, tacto, movimiento) activa múltiples áreas cerebrales, mejorando la codificación y recuperación de la información.
            p(data-aos="fade-left") Este enfoque está respaldado por la teoría del aprendizaje multimedia de Mayer (2005), que sostiene que el cerebro procesa la información verbal y visual por canales separados y que su uso combinado mejora la comprensión y la retención. A continuación, se presenta cómo se activa cada canal sensorial en una experiencia educativa multisensorial:
    
    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/34.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Visual
              p.mb-0 Visualización de videos, diagramas, esquemas o ilustraciones del contenido.
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/35.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Kinestésico
              p.mb-0 Manipulación de objetos, uso de maquetas tridimensionales o dinámicas físicas.
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/36.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Auditivo
              p.mb-0 Narraciones del docente, efectos sonoros asociados o lectura en voz alta.
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/37.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Participación activa
              p.mb-0 Dramatizaciones, representaciones grupales o creación de contenidos por parte del estudiante.
      
    .bg-full-width.bg-color-11
      .px-4.px-md-5.pb-md-3
        ul.lista-ul--color.mb-0
          li.mb-0.d-flex
            i.far.fa-arrow-alt-circle-right
            p.mb-0 <b>Ejemplo aplicado</b>
        p Tema: El sistema digestivo

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/38.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Se proyecta un video animado del recorrido de los alimentos.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/39.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Los estudiantes manipulan una maqueta del aparato digestivo.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/40.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Escuchan sonidos del cuerpo humano (latidos, gorgoteos).
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/41.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Representan con sus cuerpos los órganos y explican sus funciones.

    h2(data-aos="fade-left") Aprendizaje basado en proyectos (ABP)
    p.mb-5 El Aprendizaje Basado en Proyectos (ABP), según Varela (2025), es una metodología activa que convierte al estudiante en protagonista del aprendizaje, fomentando la investigación, la autonomía, la colaboración y el pensamiento crítico. A continuación, se presentan las características principales del ABP:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/42.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Fomenta la curiosidad")
            p A través de preguntas auténticas o problemas reales que despiertan el interés por investigar.
    
          .div(titulo="Desarrolla habilidades sociales")
            p Impulsa la comunicación, el trabajo en equipo, la negociación de roles y el respeto mutuo.
    
          .div(titulo="Promueve el pensamiento crítico")
            p Los estudiantes analizan información, plantean hipótesis y elaboran soluciones justificadas.

    ul.lista-ul--color.mb-0
      li.mb-0.d-flex
        i.far.fa-arrow-alt-circle-right
        p.mb-0 <b>Ejemplo aplicado</b>
    p Proyecto: “¿Cómo podemos mejorar el reciclaje en nuestra escuela?”

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/43.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 1
              p.mb-0 Investigación sobre residuos.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/44.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 2
              p.mb-0 Encuestas y entrevistas al personal.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/45.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 3
              p.mb-0 Creación de campañas y presentación de propuestas.

    .bg-full-width.bg-color-10
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Gamificación
        p.mb-5 La gamificación consiste en incorporar elementos propios del juego en contextos educativos para incrementar la motivación, el compromiso y el aprendizaje activo. No se trata de jugar por jugar, sino de utilizar dinámicas lúdicas con fines pedagógicos. A continuación, se describe cómo se aplican elementos del juego en el aula con fines educativos:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/46.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Niveles
                p.mb-0 Superar retos o etapas para avanzar en el contenido curricular.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/47.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Puntos
                p.mb-0 Acumular puntos por tareas, participación o progreso individual.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/48.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Insignias
                p.mb-0 Obtener medallas simbólicas por logros específicos (ej. “Explorador de la lectura”).

    .row.justify-content-center.align-items-center.bg-color-6.bg-full-width
      .px-4.px-md-5
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.p-4
              p Beneficios neuroeducativos de la gamificación:
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Libera dopamina, mejorando la atención y la memoria.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Transforma el error en una oportunidad de reintento sin juicio negativo.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Refuerza la perseverancia mediante objetivos progresivos y recompensas.
            .col-lg-5(data-aos="zoom-in")
              img.img-fluid(src='@/assets/curso/tema2/49.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.text-white.order-lg-2
            h2.mb-4(data-aos="flip-up") Intervenciones psicopedagógicas
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Intervenciones psicopedagógicas, donde se aborda la evolución, fundamentos, y modelos de intervención en el campo de la psicopedagogía. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Intervenciones psicopedagógicas.
    
          .col-lg-5.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/50.png', alt='')


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/184215?page=2 " target="_blank" rel="noopener noreferrer") Bodoque-Osma, A. R. (Coord.) & González-Víllora, S. (Coord.). (2021). Neuroeducación: ayudando a aprender desde las evidencias científicas: ( ed.). Ediciones Morata, S. L. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://lumen.uv.mx/resources/files/documents/2022/5/29/6745/c2d3386f-34eb-4dd4-a2c1-44726fc58f40.pdf" target="_blank" rel="noopener noreferrer") Rotger, M. (2018). Neurociencia neuroaprendizaje: Las emociones y el aprendizaje (2a ed.). Editorial Brujas. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ideaprende.com/2025/01/28/5-estrategias-didacticas-basadas-en-la-neurociencia/" target="_blank" rel="noopener noreferrer") Admin. (2025, 28 enero). 5 estrategias Didácticas Basadas en la Neurociencia – ideaprende.com.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=BqGj_XyKE_g " target="_blank" rel="noopener noreferrer") Palabra Maestra. (2019, 3 de abril). Gamificación en Educación: Qué es y Cómo Aplicarla en Clase [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              ' ¿Cuál de las siguientes opciones representa una estrategia metacognitiva?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Memorizar listas de conceptos sin analizarlos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Realizar tareas de forma automática',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Reflexionar sobre las propias estrategias de aprendizaje ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Repetir contenido sin considerar su comprensión',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué técnica didáctica neurocientífica se basa en activar diferentes canales sensoriales para favorecer la codificación del contenido?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aprendizaje por repetición',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Codificación dual ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aprendizaje masivo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evaluación sumativa',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿En qué fase de la evaluación psicopedagógica se analiza la información recopilada para establecer hipótesis y comprender el caso?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Toma de decisiones',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Interpretación de datos ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Recogida de información',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Identificación de aspectos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es una ventaja de aplicar gamificación en contextos educativos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Se garantiza el aprendizaje mecánico',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Disminuye la motivación del estudiante',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Transforma el error en castigo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Fomenta el compromiso y la motivación ',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Según la neurociencia, ¿qué emoción está vinculada con la liberación de dopamina y la consolidación del aprendizaje?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ansiedad',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Estrés',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Curiosidad ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Indiferencia',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
