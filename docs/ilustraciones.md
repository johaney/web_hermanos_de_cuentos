# Ilustraciones de los cuentos

Prompts para generar la portada de cada cuento con el mismo estilo que la ilustración principal (`src/assets/hermanos-leyendo.png`). Los prompts están en inglés porque los generadores de imágenes responden mejor así; cada uno lleva un resumen en español.

## Estado

| Cuento | Portada |
|---|---|
| Los 30 cuentos | ✅ `portada.jpg` (4:3, 1448 × 1086) |

Para cuentos nuevos, usar como referencia de estilo una de estas portadas (por ejemplo `caperucita/portada.jpg`) en lugar de `hermanos-leyendo.png`: las portadas siguen un estilo propio de acuarela cálida y luz dorada.

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

### 12. David y el gigante — `david`
*El joven David, junto al arroyo del valle, escoge cinco piedras lisas mientras a lo lejos se alzan los dos campamentos.*

```text
Scene: a Bible story for children, David and the giant. A young shepherd boy of about 12 with tousled brown hair, a simple cream tunic with an ochre sash and a leather sling at his belt kneels by a clear, sparkling stream in a sunny valley, happily choosing smooth round pebbles, holding one up to the light. His shepherd's staff and a small woven bag lie beside him. Far in the background, on two opposite hills, tiny tents and banners of two camps; a very tall, blurry armored figure stands small in the distance, not threatening. Wildflowers, olive trees. Mood: quiet courage and trust.
```

### 13. Hansel y Gretel — `hansel`
*Hansel y Gretel descubren la casita de pan, galleta y azúcar en un claro del bosque, guiados por un pajarillo blanco.*

```text
Scene: a boy of about 8 in a brown vest, green trousers and a patched cap, and his sister of about 7 in a mustard-yellow dress with a blue apron and braids, stand hand in hand at the edge of a sunny forest clearing, gazing in delight at a small cottage made of bread with a gingerbread roof, clear sugar windows and a striped candy-cane chimney. A little white bird perches on the roof. The boy holds a piece of gingerbread; a few white pebbles glint on the path behind them. Tall blue fir trees, mushrooms and ferns. Mood: wonder, sweetness and a touch of adventure, never scary.
```

### 14. Jonás y el gran pez — `jonas`
*Sobre un mar ya en calma, un enorme pez amable deja a Jonás en una playa dorada al amanecer.*

```text
Scene: a Bible story for children, Jonah and the great fish. At sunrise, an enormous, gentle blue-green fish with a friendly smiling face and soft round eyes rests at the edge of a calm turquoise sea, having just set a man down on a golden sandy beach. Jonah, a bearded man in a simple rust-orange robe with a little seaweed in his hair, sits on the sand smiling up at the warm sky, stretching his arms. Seagulls, shells, gentle foam. On the far horizon, a small sailing ship. Mood: relief, gratitude and a second chance.
```

### 15. La sopa de piedra — `sopa`
*Anselmo remueve un gran caldero junto a la fuente mientras los vecinos traen verduras a la plaza del pueblo.*

```text
Scene: in a small village square at dusk at the end of winter, a kind traveler with a wide-brimmed brown hat, a green striped scarf and a patched backpack stirs a big iron pot hanging over a small fire beside a stone fountain. A little girl with dark braids and a red wool coat watches him, smiling. Villagers in simple warm clothes come out of cozy houses with open shutters, carrying an onion, carrots, potatoes and a bunch of parsley. An old man holds a violin. Patches of melting snow on the rooftops, warm lamplight in the windows. Mood: warmth, sharing and togetherness.
```

### 16. José y la túnica de colores — `jose`
*José, con su túnica de muchos colores, abraza a su anciano padre Jacob mientras sus hermanos sonríen alrededor, en Egipto.*

```text
Scene: a Bible story for children, Joseph's family reunion in ancient Egypt. In the center, Joseph, a young man with short dark hair wearing a long coat striped in red, yellow and blue, warmly hugs his elderly father Jacob, who has a long white beard and a brown shepherd's cloak. Around them, his eleven brothers in simple earth-colored robes smile and wipe happy tears; the youngest boy holds a sack of grain. Behind them, carts with wheat sacks, a patient camel, palm trees, the green Nile and golden granaries. Mood: forgiveness and joy.
```

### 17. Los músicos de Bremen — `bremen`
*El burro, la perra, la gata y el gallo, subidos unos encima de otros, cantan frente a la ventana iluminada de una casita del bosque.*

```text
Scene: at night in a friendly forest, four old animal friends stand stacked in a tower in front of the glowing window of a small wooden cottage: at the bottom a grey donkey with a white-dusted back, on his back a brown floppy-eared dog, on top of the dog a grey tabby cat, and at the very top a proud red rooster with a golden tail, all singing with open mouths and happy faces. Warm candlelight spills from the window. Tall trees, a starry deep-blue sky, fireflies. No people visible. Mood: funny, brave and cheerful teamwork.
```

### 18. El bebé en la cesta del río — `moises`
*Miriam, escondida entre los juncos, vigila la cesta donde flota su hermanito mientras la princesa se acerca por la orilla.*

```text
Scene: a Bible story for children, baby Moses in the basket. On the reedy bank of a calm green river, a girl of about 9 named Miriam, with dark braided hair and a simple sky-blue dress, peeks out from behind tall papyrus reeds, watching carefully. In the gentle water floats a small woven basket with a sleeping baby wrapped in a cream blanket. Further along the bank, a kind Egyptian princess in a white linen dress with golden bracelets walks with two maids, just noticing the basket. Dragonflies, a heron, water lilies, morning light. Mood: tenderness and protection.
```

### 19. Cenicienta — `cenicienta`
*El hada madrina, una anciana con capa remendada y brillante, convierte la calabaza en carroza en el jardín, ante la mirada asombrada de Cenicienta.*

```text
Scene: in a moonlit garden full of pumpkins, a young woman in a simple grey dress and a checked apron, with a little cinder on her cheek, watches in amazement as a kind old woman in a patched cloak that shimmers with silver light touches a large pumpkin with a small hazel twig. The pumpkin is swirling into an elegant round golden carriage, sparkles rising around it. Nearby, six small green lizards on a stone begin to glow, and a plump friendly toad sits on the path. A pair of glass slippers rests on the grass. Starry deep blue sky. Mood: kindness rewarded and gentle magic.
```

### 20. Daniel y los leones — `daniel`
*Dentro de la cueva, Daniel duerme tranquilo entre leones mansos, bajo la luz suave de un ángel.*

```text
Scene: a Bible story for children, Daniel in the lions' den. Inside a cozy stone cave with straw on the floor, an older man with a short grey beard and a deep blue robe with a gold-trimmed shawl sits peacefully, eyes closed, resting against a large sleepy lion with a fluffy golden mane. Several other lions lie curled up nearby, calm and drowsy like big house cats, one yawning with its mouth closed. A soft, warm glow from a gentle angel figure with light wings fills the cave. A sliver of starry sky through a gap in the stone above. Mood: trust and peace.
```

### 21. El traje nuevo del emperador — `emperador`
*El emperador desfila muy orgulloso en camiseta y calzones de lunares mientras un niño, a hombros de su padre, dice la verdad.*

```text
Scene: a cheerful parade in a small city square with red roofs and cobbled streets. A round, mustached emperor with a golden crown walks proudly under a velvet canopy, wearing only a long white undershirt and long baggy polka-dot underpants to the knees, chin held high. Behind him, two pages carefully hold up an invisible train with their hands in the air. In the crowd, a small boy in a blue cap sits on his father’s shoulders, pointing and laughing kindly; people around him cover their smiles. Bunting and flowers on balconies. Mood: gentle humor and honesty, fully family-friendly.
```

### 22. El niño que compartió su merienda — `panes`
*Jesús recibe con ternura los cinco panes y los dos peces del niño en una ladera junto al lago, al atardecer, ante la multitud sentada en la hierba.*

```text
Scene: a Bible story for children, the feeding of the five thousand. On a grassy hillside beside a calm lake at golden sunset, a boy of about 8 in a simple cream tunic and a small cloth bag across his chest shyly holds out a cloth bundle with five round barley loaves and two small fish. Jesus, in simple ancient Middle Eastern robes, kneels to the boy's height and receives the gift with a warm smile. A disciple with a short beard watches kindly beside them. Behind them, families sit in groups on the green grass with wicker baskets, and small fishing boats rest on the lake. Mood: generosity and wonder.
```

### 23. El nabo gigante — `nabo`
*El abuelo, la abuela, Nina, el perro, el gato y el ratoncito tiran en fila de un nabo enorme en el huerto otoñal.*

```text
Scene: a cozy autumn vegetable garden beside a wooden fence, with golden birch trees and a small village cottage behind. A huge round white-and-purple turnip with umbrella-sized green leaves is half out of the soil. In a funny chain, a grandpa with a white beard and a green cap pulls the leaves, a grandma in a blue headscarf and apron holds his waist, a girl with two braids and a mustard dress holds her apron, a floppy-eared ginger dog tugs her skirt, a black cat holds the dog's tail, and a tiny grey mouse pulls the cat's tail. Mood: teamwork and cheerful effort.
```

### 24. Zaqueo, el hombre del árbol — `zaqueo`
*Zaqueo, bajito y con ropa elegante, asoma entre las hojas del sicómoro mientras Jesús se detiene y lo mira desde abajo.*

```text
Scene: a Bible story for children, Zacchaeus. On a sunny street in ancient Jericho lined with tall palm trees and market stalls of dates and figs, a short man with a small beard and a rich purple-and-amber robe peeks happily from the broad leaves of a big sycamore fig tree. Below, Jesus in simple light robes has stopped and looks up at him with a warm, welcoming smile, one hand raised in greeting. Around them, a crowd of townspeople with headscarves and water jars looks up in surprise, and children point at the tree. Mood: surprise, welcome and a fresh start.
```

### 25. El zapatero y los duendes — `zapatero`
*En Nochebuena, dos duendecillos bailan sobre la mesa del taller con la ropa y los zapatitos nuevos mientras el matrimonio los mira escondido.*

```text
Scene: a cozy old shoemaker’s workshop at night on Christmas Eve, lit by a single candle. On a wooden workbench among scissors, spools of thread and small leather shoes, two tiny elves no taller than a coffee cup dance joyfully, wearing new green waistcoats, linen shirts and red caps with little bells. Behind a curtain by the stairs, a kind older shoemaker with a grey beard and a leather apron and his wife in a blue shawl peek out, smiling tenderly. Snow falls outside the small window. Mood: gratitude, magic and warmth.
```

### 26. El hijo que volvió a casa — `prodigo`
*El padre corre por el camino de tierra a abrazar a su hijo, que vuelve cansado y con la ropa gastada, al atardecer.*

```text
Scene: a Bible parable for children, the prodigal son. On a winding dirt road between silvery olive groves and vineyards on gentle hills, at warm golden sunset, an older father with a grey beard and a simple ochre robe runs with open arms to hug his thin, tired young son, who wears worn, patched clothes and dusty sandals and looks tearful but relieved. In the background, a stone farmhouse with a glowing doorway and two small servants hurrying out carrying a folded robe. Mood: forgiveness, tenderness and homecoming.
```

### 27. Juan y las habichuelas mágicas — `habichuelas`
*Juan baja por la enorme planta de habichuelas con el arpa a la espalda y la gallina en su jaula, mientras su madre le espera abajo.*

```text
Scene: a brave boy of about 9 in a patched green tunic, brown trousers and a red scarf climbs down a gigantic beanstalk with umbrella-sized leaves that rises into fluffy white clouds. A small golden harp with a carved flower is strapped to his back, and he carries a little cage with a cinnamon-colored hen. Far above, on a cloud, a huge sleepy giant in a striped nightcap and nightgown yawns, looking grumpy but harmless. Below, a small cottage with a vegetable patch where his mother in a headscarf waits, looking up. Green fields and a white cow in the distance. Mood: courage and adventure, cozy and never scary.
```

### 28. Una estrella sobre Belén — `belen`
*En un establo sencillo, María y José contemplan al bebé en el pesebre con los animales y los pastores; arriba brilla una gran estrella.*

```text
Scene: a Bible story for children, the Nativity. A simple wooden stable at night on the edge of a small town of white houses. Inside, lit by a small lamp, Mary in a soft blue headscarf and Joseph in a brown robe gaze tenderly at baby Jesus wrapped in cloth, lying in a straw-filled manger. A gentle ox, a small grey donkey and curled-up sheep rest nearby, doves on the beams. Two humble shepherds kneel at the doorway, one holding a little lamb. Above the stable, a large bright golden star shines in a deep blue sky. Mood: peace, wonder and hope.
```

### 29. La cigarra y la hormiga — `cigarra`
*En invierno, la cigarra canta dentro del hormiguero y las hormigas bailan en corro junto a la despensa llena de semillas.*

```text
Scene: a cutaway view of a cozy underground anthill in winter, with warm earthy tunnels and round chambers. In the main chamber, a friendly cicada with shimmering clear wings and a soft blanket over her shoulders sings happily, while little ants, one wearing a small knitted scarf, dance in a ring around her. A pantry chamber is full of seeds and grains. Above ground, the roots of an old olive tree and a frosty white field under a pale blue sky. Mood: cozy, joyful and kind.
```

### 30. El ratón de campo y el ratón de ciudad — `raton`
*Los dos primos ratones, uno sencillo y otro elegante, cenan juntos en la casita del tronco rodeada de girasoles.*

```text
Scene: two mouse cousins share supper inside a hollow chestnut tree trunk turned into a cozy home, with a bed of moss, a small round window and a table made from a dried mushroom. The country mouse is plain brown, with a simple patched vest; the city mouse is sleek grey, with a velvet red waistcoat and a silk scarf and a tiny suitcase beside him. On the table: sunflower seeds, oats, blackberries and a little piece of cheese. Through the doorway, a golden sunflower field at sunset. Mood: friendship, simplicity and contentment.
```

## Opcional: los hermanos como narradores

Para dar identidad a la web, los dos hermanos de la portada pueden aparecer pequeños en una esquina inferior de cada ilustración, mirando la escena. Añade al final del prompt:

```text
In the lower left corner, small and partly hidden among the foreground leaves, the two siblings from the reference image (one with dark curly hair, one with auburn wavy hair, both in orange and mustard sweaters) peek at the scene holding an open book, with the little fox beside them.
```
