# Ilustraciones de los cuentos

Prompts para generar la portada de cada cuento con el mismo estilo que la ilustración principal (`src/assets/hermanos-leyendo.png`). Los prompts están en inglés porque los generadores de imágenes responden mejor así; cada uno lleva un resumen en español.

## Estado

| Cuento | Portada |
|---|---|
| noe, liebre, caperucita, cerditos, blancanieves, patito, ricitos | ✅ `portada.jpg` (4:3, 1448 × 1086) |
| estrella, samaritano, semilla, leon | ⏳ pendiente (muestran el dibujo provisional) |

Las portadas se guardan en JPG de calidad alta (~600 KB) para no engordar el repositorio; la web genera después las versiones optimizadas. El formato 4:3 funciona bien: la tarjeta la recorta a 16:10 y la página del cuento la muestra entera.

## Cómo usarlos

1. Abre el generador (ChatGPT, Gemini, Midjourney…) y **adjunta `hermanos-leyendo.png` como referencia de estilo**. Es lo que más ayuda a que todas las imágenes parezcan del mismo libro.
2. Pega el **bloque de estilo** y, justo debajo, la **escena** del cuento.
3. Formato **horizontal 4:3 o 3:2**, de al menos 1400 px de ancho.
4. Genera varias versiones y elige la que mejor encaje. Si algo sale mal, pide cambios concretos ("más oscuro", "el ratón más pequeño", "quita el texto").
5. Guárdala como `portada.jpg` (o `.png`/`.webp`) en la carpeta del cuento: `src/content/cuentos/<clave>/portada.jpg`. La web la detecta sola.

### Encuadre

La misma imagen se recorta en dos sitios:
- **Tarjeta del catálogo**: 16:10, recorta un poco arriba y abajo.
- **Página del cuento**: 16:9 con la parte superior en **arco**, así que las esquinas de arriba quedan tapadas.

Por eso el prompt pide dejar **lo importante en el centro** y nada esencial en las esquinas superiores.

### Consejos

- Si un personaje sale en varias imágenes (por ejemplo, los hermanos), usa la misma imagen de referencia y repite su descripción literal.
- **Sin texto** dentro de la imagen: los generadores escriben mal las letras.
- Evita pedir parecidos con películas o marcas (nada de "estilo Disney"): además de ser un riesgo legal, rompe el estilo propio.
- Revisa las condiciones de uso comercial de la herramienta, porque la web tendrá anuncios y afiliados.

## Bloque de estilo (común a todos)

```text
Children's picture-book illustration in the exact style of the attached reference image: textured gouache and cut-paper collage look, visible painterly brush texture, rich layered depth with decorative stylized foliage in the foreground (rounded leaves in amber, teal and deep blue, small orange berries, delicate seed heads). Palette dominated by deep ultramarine and cobalt blues, teal, warm golden amber and soft orange, with cream highlights. Cute rounded characters with rosy cheeks, gentle expressions and soft simple faces. Warm, cozy, magical and calm mood, suitable for children aged 3 to 9. Nothing scary or violent. No text, no letters, no words, no watermark, no border. Landscape 3:2 composition; keep the main characters and action in the center, leave the top corners free of important elements.
```

## Escenas

### 1. La estrella que compartía su luz — `estrella`
*Lía, una estrellita, ilumina el camino de un pajarito bajo una nube oscura; abajo, un mar tranquilo con una barquita.*

```text
Scene: a small, friendly five-pointed star with a sweet face named Lia glows warmly in a deep blue night sky, sending a soft golden beam of light down through a dark, fluffy cloud. The beam lights the path of a little round songbird flying towards its nest in a leafy tree. Other small stars in the sky are starting to light up and smile. Below, a calm sea reflects the light, with a tiny wooden boat and a distant lighthouse on a rocky shore. Mood: generosity and quiet wonder.
```

### 2. El vecino que se detuvo — `samaritano`
*El buen samaritano ayuda al viajero herido a subir a su burro en un camino de colinas al atardecer.*

```text
Scene: a Bible parable for children, the Good Samaritan. On a winding dusty road between gentle hills at golden dusk, a kind man in simple ancient Middle Eastern robes and a headscarf gently helps a tired traveler with a bandaged arm climb onto a small grey donkey. The traveler smiles gratefully. The donkey has a woven saddle blanket. In the far background, two small figures walk away along the road. Olive trees, a warm sunset sky turning to deep blue with the first stars. Respectful, tender and hopeful. No injuries shown beyond a simple bandage.
```

### 3. La semilla paciente — `semilla`
*Mara y su abuelo junto a la ventana, cuidando un brote diminuto en una maceta azul, con dibujos de la maceta en la pared.*

```text
Scene: a cozy kitchen window at golden afternoon light. A small girl named Mara (about 6, dark curly hair in two puffs, mustard-yellow sweater) kneels on a chair beside her kind grandfather (white beard, round glasses, teal cardigan). Together they look at a blue ceramic flowerpot on the windowsill where a tiny green sprout with two leaves has just appeared. Mara holds a small watering can. Pinned on the wall next to them are several child's crayon drawings of the same pot, day by day. Through the window, a garden and a Mediterranean hillside village. Mood: patience and tenderness.
```

### 4. El león y el ratón — `leon`
*De noche, el ratoncito roe las cuerdas de la red que atrapa al león, bajo la luna.*

```text
Scene: a moonlit clearing in a forest. A big, gentle lion with a fluffy golden-amber mane lies tangled in a rope net tied to a tree, looking hopeful rather than scared. A tiny grey mouse with big round ears sits on the net, happily nibbling through one of the ropes; a few ropes are already cut. Big full golden moon, deep blue sky with paper-like stars, glowing fireflies. Mood: surprise, friendship and gratitude.
```

### 5. Noé y el arcoíris — `noe`
*El arca descansa en tierra tras la lluvia; Noé, su familia y los animales salen y miran el arcoíris.*

```text
Scene: a Bible story for children, Noah's ark. A large, rounded wooden ark rests on a green hilltop after the rain, its big door open like a ramp. An elderly Noah with a long white beard and simple robes, together with his family, steps out smiling. Pairs of friendly animals come out behind them: giraffes, elephants, lions, sheep and birds. A dove flies above carrying an olive branch. A soft, luminous rainbow arches across a sky clearing from deep blue clouds to warm light. Puddles reflect the colors. Mood: hope and new beginnings.
```

### 6. La liebre y la tortuga — `liebre`
*La tortuga llega a la meta entre animales que aplauden; al fondo, la liebre se despierta bajo un árbol.*

```text
Scene: a forest race at golden late afternoon. In the center, a determined, smiling tortoise crosses a finish line made of a garland of leaves and small flags (no letters), while forest animals cheer: a hedgehog, a squirrel, a badger, birds, a fox. In the background, under a big tree, a slender brown hare wakes up with a surprised face, stretching. A winding path through the trees shows the race route. Mood: joy, effort and perseverance.
```

### 7. Caperucita Roja — `caperucita`
*Caperucita con su cesta por el sendero del bosque; un lobo más curioso que amenazante la observa tras un árbol.*

```text
Scene: a girl of about 7 wearing a bright red hooded cape walks along a winding path in a tall blue forest, carrying a wicker basket with bread and fruit, picking a small flower. Behind a tree trunk nearby, a grey wolf peeks out with a curious, sly but not frightening expression (cartoonish, no teeth showing). Tall pine trees, dappled golden light, mushrooms and wildflowers along the path, a small cottage with a glowing window far in the distance. Mood: adventure and caution, never scary.
```

### 8. Los tres cerditos — `cerditos`
*Los tres cerditos trabajan juntos construyendo una casa de ladrillo con cimientos firmes.*

```text
Scene: three little pigs working together at the edge of a forest to build a sturdy brick house with a wooden door. One pig carries bricks in a wheelbarrow, one fits the wooden door, and the third spreads mortar with a trowel, showing the others how. Each pig wears a different simple outfit (straw hat and overalls, a blue scarf, a green apron). Nearby, a scattered pile of straw and some wooden planks. A friendly neighbor bird watches from a fence. Warm golden light, blue hills behind. Mood: teamwork and cheerful effort.
```

### 9. Blancanieves — `blancanieves`
*Blancanieves cocina y canta con sus siete amigos en una casita del bosque de sillas diminutas.*

```text
Scene: an original fairy-tale illustration (not based on any film design). Inside a cozy wooden cottage in a pine forest at night, a kind young woman with short black hair, pale skin and a simple dark-blue dress with an amber shawl cooks soup at a stone hearth, smiling. Around a long table with seven tiny wooden chairs sit seven small friendly miners with different hats, beards and colorful clothes, singing and laughing. Warm lantern light, copper pots, a window showing blue pines and stars. Mood: friendship, welcome and home.
```

### 10. El patito feo — `patito`
*En primavera, el joven cisne ve su reflejo en el estanque mientras otros cisnes se acercan a invitarlo.*

```text
Scene: a peaceful pond in early spring at dawn. A young swan with fresh white feathers and a long neck looks down in gentle surprise at its own reflection in the still water. Beside the reflection, faintly, the shape of the small grey chick it used to be. Two elegant adult white swans glide towards it in welcome. Reeds, water lilies, blossoming branches and small ducklings watching from the bank. Soft blue and golden light, mist over the water. Mood: self-acceptance and belonging.
```

### 11. Ricitos de Oro y los tres osos — `ricitos`
*Ricitos de Oro arregla la sillita rota junto a los tres osos, que la miran con cariño.*

```text
Scene: inside a cozy wooden cottage in the woods. A girl of about 7 with golden curly hair and a teal dress kneels on the floor, carefully gluing a small broken wooden chair, looking apologetic and kind. The three bears stand around her: a big papa bear, a medium mama bear with an apron, and a little baby bear who is helping by holding the chair leg. On the table behind them, three bowls of porridge of different sizes. Warm afternoon light through the window, forest outside. Mood: respect, forgiveness and kindness.
```

## Opcional: los hermanos como narradores

Para dar identidad a la web, los dos hermanos de la portada pueden aparecer pequeños en una esquina inferior de cada ilustración, mirando la escena. Añade al final del prompt:

```text
In the lower left corner, small and partly hidden among the foreground leaves, the two siblings from the reference image (one with dark curly hair, one with auburn wavy hair, both in orange and mustard sweaters) peek at the scene holding an open book, with the little fox beside them.
```
