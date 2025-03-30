<h1 align='center'>🏛 Mercure Emporium 🏛</h1>

<h2 align='center'> 🧠Description du projet🧠</h2>
Mercure Emporium sera une plateforme de vente, de location et d'échange d'objets de collection et d'antiquités.

#### Chaque utilisateur enregistré pourra :

- Creer une annonce.
- poster des commentaires sur les annonces existantes.
- Participer à des encheres.

#### Une annonce comportera les points suivants :
- La description de l'objet.
- Le mode de l'annonce:
    * Vente.
    * Location.
    * Echange.
- L'année de fabrication.
- Des images de l'objet.
- Les conditions de retour, d'expédition et de vente.
- Le prix.

#### Les annonces seront triées en fonctions de plusieurs catégories : 
- Objets à collectionner.
    * Cartes à collectionner.
    * Poupées et figurines.
    * Bandes dessinées.
- Décorations d'intérieures.
    * Verre et cristal.
    * Céramiques.
    * Miroirs.
    * Mobilier d'intérieur.
- Décorations d'exterieurs.
    * Mobilier d'extérieur.
    * Statues ornementales.
- Art de la table.
    * Services à diner.
    * Services à café.
    * Services à couverts.

#### 👨‍⚖️  Vente aux enchères 👨‍⚖️
Les utilisateurs pourront marquer leurs annonces comme : **Pouvant être inclues dans une vente aux enchères.**
Ces annonces seront inclues dans la prochaine vente suivant la date d'inclusion.
L'acheteur sera prévenu dans le cas où **l'objet est inclu** et si **l'objet est vendu**.
Les ventes comporteronts les points suivants :
- la liste des objets inclus.
- Le titre de l'annonce.
- Les dates de départ et de fin.

#### 💰 Vente directe 💰
Tout objet vendu en vente directe proposera le meilleur moyen d'éxpédition pour l'acheteur ainsi que la possibilité de retrait sur place.
L'acheteur pourra suivre son objet directement sur le site, dans son dashboard.

#### 🤝 Echanges 🤝
Lors d'une annonce de type échange. L'annonce comportera un espace dédié aux proposition d'échage. Cette partie comportera les points suivants :
- L'objet proposé.
- La valeur de l'objet proposé.

Une fois l'échange démarré, le proprétaire de l'annonce, pourra inclure un lien de suivi, que l'autre parti recevra. Pour que l'échange soit possible, l'autre parti recevra un lien dans lequel indiquer son numéro de suivi que le propriétaire de l'annonce pourra suivre également.

#### 🕝 Locations 🕝
Lors d'une annonce de type location, celle-ci comportera le tarif à l'heure et à la journée de la location.
Le loueur pourra choisir la durée de la location et sera facturé du montant indiquer.

<h2 align="center">🧑‍💻 Technologies utilisées 🧑‍💻</h2>

### FrontEnd
- NuxtJs [Documentation](https://nuxt.com/)
- Tailwindcss [Documentation](https://tailwindcss.com/)

### BackEnd
- AdonisJs [Documentation](https://adonisjs.com/)
- MariaDB [Documentation](https://mariadb.org/)

<h2 align='center'>🫵 Apporter votre aide 🫵</h2>
Si vous souhaitez participer à ce porjet. Suiver ces instructions :

```
1. Fork le projet
2. Creer une branche
3. Commit et push
4. Pousser la branche
5. Pull request
```

<h2 align='center'>📰 License 📰</h2>

Ce repos est sous license privée [ici](./LICENSE.txt).
<h2 align='center'> 🌳 Un apercu de la structure. 🌳</h2>

```
MercureEmporium
├─ Backend
│  ├─ .editorconfig
│  ├─ ace.js
│  ├─ adonisrc.ts
│  ├─ app
│  │  ├─ exceptions
│  │  │  └─ handler.ts
│  │  ├─ middleware
│  │  │  ├─ auth_middleware.ts
│  │  │  ├─ container_bindings_middleware.ts
│  │  │  ├─ force_json_response_middleware.ts
│  │  │  ├─ guest_middleware.ts
│  │  │  └─ silent_auth_middleware.ts
│  │  └─ models
│  │     └─ user.ts
│  ├─ bin
│  │  ├─ console.ts
│  │  ├─ server.ts
│  │  └─ test.ts
│  ├─ config
│  │  ├─ app.ts
│  │  ├─ auth.ts
│  │  ├─ bodyparser.ts
│  │  ├─ cors.ts
│  │  ├─ database.ts
│  │  ├─ hash.ts
│  │  ├─ logger.ts
│  │  └─ session.ts
│  ├─ database
│  │  └─ migrations
│  │     └─ 1743176471592_create_users_table.ts
│  ├─ eslint.config.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ start
│  │  ├─ env.ts
│  │  ├─ kernel.ts
│  │  └─ routes.ts
│  ├─ tests
│  │  └─ bootstrap.ts
│  └─ tsconfig.json
├─ FrontEnd
│  ├─ eslint.config.mjs
│  ├─ nuxt.config.ts
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ objets.json
│  │  └─ robots.txt
│  ├─ README.md
│  ├─ server
│  │  └─ tsconfig.json
│  ├─ src
│  │  ├─ app.config.ts
│  │  ├─ app.vue
│  │  ├─ assets
│  │  │  └─ css
│  │  │     └─ main.css
│  │  ├─ components
│  │  │  └─ Card_Item.vue
│  │  ├─ layouts
│  │  │  └─ default.vue
│  │  ├─ pages
│  │  │  ├─ about.vue
│  │  │  └─ index.vue
│  │  └─ theme
│  └─ tsconfig.json
├─ LICENSE.txt
└─ README.md

```