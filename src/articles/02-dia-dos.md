---
title: Día dos
date: 2020-02-02T20:53
layout: article.hbs
---

Esto que os voy a enseñar en realidad lo tengo hecho desde ayer, pero no quería dejar pasar un día sin poner algo en el blog, así que ahí va.

<video width="640" height="480" autoplay controls loop muted>
  <source src="/static/videos/video1.mp4" type="video/mp4">
  <source src="/static/videos/video1.webm" type="video/webm">
Your browser does not support the video tag.
</video>

Como me gusta complicarme la vida, he decidido que quiero darle un efecto 3D a mi matamarcianos. En el vídeo podéis ver cómo muevo la nave por la pantalla y a distintas profundidades. La nave es un modelo retocado en Blender, convertido a voxels y exportado a un FPG con las "rodajas" del modelo. Cada "rodaja" la mueve un subproceso del proceso `nave`.

En el juego no se podrá cambiar la altitud de la nave, seguirá siendo un juego 2D prácticamente en todos los aspectos. Esto es sólamente para darle vistosidad.

El proceso para crear los gráficos de esta manera es todavía un poco rebuscado, por lo que hoy he dedicado el día a hacerme unos scripts en Python para simplificarlo. En cuanto tenga lista esta parte del _workflow_ quiero empezar a trabajar en el primer escenario. Los fondos pueden quedar muy chulos con este sistema, otra cosa es que queden _bonitos_, que yo muy artista no soy, pero bueno.

Podéis ver cómo va progresando todo en el [repo](https://github.com/vii1/Scavengers).