---
title: Transparencia aditiva
date: 2020-02-07T21:05
layout: article.hbs
---

El primer fondo para mi matamarcianos se está haciendo de rogar, pero creo que voy por buen camino. Ya os daré noticias.

Mientras tanto, ayudando a [Zardoz](https://twitter.com/zardoz89) a conseguir compilar DLL's para DIV me he dado cuenta de que yo podría haber tenido el mismo problema previamente. Veréis.

Hace unos días, antes de la compo, intenté hacer una DLL que sustituyese el efecto de transparencia de DIV por un _blending_ aditivo, sin éxito. Pensé que el problema estaba en el propio DIV, que me daba acceso a su tabla _ghost_ pero no me permitía escribir en ella. Resulta que el fallo estaba en el compilador: estaba usando **Open Watcom**, cuando tenía que haber usado el viejo **Watcom 10.6**. El resultado ahí lo tenéis:

<video width="640" height="480" autoplay controls loop muted>
  <source src="/static/videos/ghost.mp4" type="video/mp4">
  <source src="/static/videos/ghost.webm" type="video/webm">
Your browser does not support the video tag.
</video>

Si programas en DIV y te interesa, puedes descargarla de [aquí mismo](/static/pub/ghost.zip). Basta con añadir `IMPORT "ghost.dll";` a tu programa y pasarás de tener la vieja y cutre transparencia clásica para disfrutar de una moderna y vistosa transparencia aditiva.

¡Un elemento indispensable para tu matamarcianos! ;)