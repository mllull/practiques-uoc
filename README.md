# Respositori dels projectes del curs: `Front End Web Developer CFCC 2023` de la UOC.

Aquí aniré afegint les PAC's del curs, ho aniré separant per carpetes, ja que les PAC's no estan relacionades entre elles.

## 10 de maig del 2023

Acabada la PAC3.

Per fer aquesta PAC he emprat [Vite + Typescript](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) emprant el template de _Vanilla + TS_.
Addicionalment, he decidit emprar SCSS per comoditat una vegada superada la PAC1 que era expressament de CSS.

### Router:

Per a realitzar aquesta PAC m'he basat fortament amb el funcionament de Vue-Router per a impementar el router intern de l'aplicació (molt bàsic), el qual proporciona aquestes simples funcionalitats:

- SPA per a l'intercanvi de pantalles.
- Intercepta i processa la càrrega de paràmetres a la URL (és a dir, si obris el navegador i entres a `http://localhost:5173/pokemon?id=157` directament, et mostrarà la informació del Pokemon 157).

Conjuntament amb el Router, he programat una petita llibreria per realitzar canvis al `DOM` (reemplaçar elements, afegir elements, etc.).

### Estils:

Per a estils globals he emprat un fitxer d'estils en format `SCSS`.

Per als estils individuals he emprat la llibreria [UnoCSS](https://unocss.dev/) que és la que empro habitualment.
Aquesta llibreria et proporciona la sintaxis de Tailwind (i altres llibreries) però únicament afegeix al DOM les classes que necessites (és a dir, és un "CSS on the fly"). Les darreres versions de Tailwind això també és possible emprant el seu [JIT](https://v2.tailwindcss.com/docs/just-in-time-mode), però prefereixo aquesta llibreria.

PS: He de dir que estic acostumat a emprar-la mitjançant Vue i fer-ho directament al navegador (emprant el seu [mode Runtime](https://unocss.dev/integrations/runtime)) ha estat un repte per jo.

## 17 d'abril del 2023

- Afegida la PAC2 del curs.

**Nota**: La PAC2 està programada emprant ES6, per tant, necessitareu un navegador mitjanament actualitzat.
