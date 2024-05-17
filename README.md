# Back-end

Back-end permettant la gestion des films du movie app.

  - Technologie: nodejs/express
  - SGBD: Postgresql

Le back-end gère les API REST suivantes : 

| Resource           | POST                  | GET                            | PATCH                                    | PUT | DELETE           |
| ------------------ | --------------------- | ------------------------------ | ---------------------------------------- | --- | ---------------- |
| **/movies**      | Créer un nouveau film | Avoir tous les films          | X                                        | X   |     X            |
| **/movies/1**    | X                     | Avoir le détail du film 1 | X | Mettre à jour le film 1   | Supprimer le film 1 |

Un film a les caractéristiques suivantes : 

``` typescript
class movie {
  id: number;
  name: string;
  description: string;
  yearPublication: date;
  genre: string;
  image?: string;
  rating?: number;
}
```

[Lien vers la doc Postman et les tests](https://documenter.getpostman.com/view/25420143/2sA3JT3JB1).
Pour lancer l'application, utilisez la commande:
 ``` node app.js ```. 
Installez les dépendances nécessaires pour le projet avec ```npm install``` 

