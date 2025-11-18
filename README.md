# TP 6 : Découverte des Hooks Avancés et des Hooks Personnalisés

## 📋 Description

Ce TP permet de pratiquer les notions suivantes :
- `useReducer` pour mieux gérer l'état complexe
- `useRef` pour manipuler le DOM ou garder une donnée sans re-render
- `useEffect` avec nettoyage
- Création d'un Hook personnalisé



##  Structure du projet

<img width="483" height="484" alt="Capture d’écran 2025-11-18 à 09 28 05" src="https://github.com/user-attachments/assets/cbbed38b-9760-4ffe-9a65-83142a32d1b1" />

##  Résultats 

### 1. Compteur avec useReducer
**Résultat attendu :**
- Affichage d'un compteur initialisé à 0
- Bouton "+1" qui incrémente le compteur
- Bouton "-1" qui décrémente le compteur
- Le compteur change de valeur sans erreur dans la console

**Test :**
- Cliquer plusieurs fois sur "+1" → Le compteur doit augmenter
- Cliquer plusieurs fois sur "-1" → Le compteur doit diminuer

---

### 2. Mettre le focus avec useRef
**Résultat attendu :**
- Un champ de texte avec le placeholder "Tapez ici..."
- Un bouton "Mettre le focus"
- Quand on clique sur le bouton, le curseur apparaît automatiquement dans le champ texte

**Test :**
- Cliquer sur "Mettre le focus" → Le curseur doit apparaître dans le champ texte

---

### 3. Compteur de rendus
**Résultat attendu :**
- Affichage du texte "Regarde la console pour voir le nombre de rendus."
- Dans la console du navigateur (F12), des messages s'affichent à chaque rendu :
  - "Le composant a été affiché 1 fois."
  - "Le composant a été affiché 2 fois."
  - etc.

**Test :**
- Ouvrir la console (F12 ou clic droit → Inspecter)
- Modifier n'importe quel autre composant pour déclencher un re-render
- Observer que le compteur de rendus augmente dans la console

---

### 4. Liste d'articles avec useFetch
**Résultat attendu :**
- Affichage initial : "Chargement en cours..."
- Puis affichage d'une liste d'articles (titres de posts)
- Chaque article est affiché sous forme de puce (li)
- La liste contient environ 100 articles

**Test :**
- Attendre quelques secondes après le chargement
- Vérifier que la liste d'articles s'affiche correctement
- Vérifier qu'il n'y a pas d'erreur dans la console

**Note :** Si vous êtes hors ligne, vous verrez un message d'erreur. C'est normal.

---

### 5. Timer avec nettoyage d'effet
**Résultat attendu :**
- Affichage de "Temps écoulé : X secondes"
- Le nombre de secondes s'incrémente automatiquement chaque seconde
- Le timer continue de fonctionner même si d'autres composants se mettent à jour

**Test :**
- Observer que le compteur de secondes augmente toutes les secondes
- Modifier d'autres composants → Le timer continue de fonctionner
- Si vous supprimez le composant Timer de App.js, le timer s'arrête (grâce au nettoyage)

---

## 🎯 Points clés à vérifier

### ✅ useReducer
- [ ] Le compteur fonctionne correctement
- [ ] Les actions 'increment' et 'decrement' sont bien gérées
- [ ] Pas d'erreur dans la console

### ✅ useRef
- [ ] Le focus fonctionne sur le champ texte
- [ ] Le compteur de rendus fonctionne sans déclencher de re-render

### ✅ Hook personnalisé useFetch
- [ ] Les données sont chargées correctement
- [ ] L'état de chargement s'affiche au début
- [ ] Les erreurs sont gérées si la connexion échoue

### ✅ useEffect avec nettoyage
- [ ] Le timer fonctionne correctement
- [ ] Le timer s'arrête quand le composant est supprimé (pas de fuite mémoire)

---

## 🔍 Vérifications dans la console

Ouvrez la console du navigateur (F12) et vérifiez :

1. **Pas d'erreurs rouges** - Tous les composants doivent fonctionner sans erreur
2. **Messages du CompteurRendu** - Vous devriez voir des messages de rendu
3. **Pas d'avertissements React** - Pas de warnings concernant les dépendances ou les effets

---

## 📝 Exercices facultatifs

Pour aller plus loin, vous pouvez :

1. **Modifier Compteur** : Ajouter un bouton "Reset" qui remet le compteur à zéro
   - Ajouter une action 'reset' dans le reducer
   - Ajouter un bouton qui dispatch cette action

2. **Créer useLocalStorage** : Hook personnalisé pour sauvegarder dans localStorage
   ```javascript
   // Exemple d'utilisation
   const [nom, setNom] = useLocalStorage('nom', '');
   ```

3. **Ajouter un affichage de date/heure** : Créer un composant qui affiche la date et l'heure toutes les secondes

---

## 🎓 Ce que vous avez appris

- ✅ Utiliser `useReducer` pour structurer l'état complexe
- ✅ Manipuler le DOM avec `useRef`
- ✅ Stocker des valeurs persistantes avec `useRef` sans déclencher de re-render
- ✅ Créer et utiliser un Hook personnalisé (`useFetch`)
- ✅ Gérer des effets avec nettoyage grâce à `useEffect`

---

## 🐛 Problèmes courants

### Le timer ne s'arrête pas
- Vérifiez que la fonction de nettoyage est bien retournée dans `useEffect`

### Erreur "Cannot read property 'map' of null"
- Dans `ListeArticles.js`, vérifiez que `data` existe avant d'utiliser `map()`

### Le focus ne fonctionne pas
- Vérifiez que `inputRef.current` n'est pas `null` avant d'appeler `focus()`

---

## 📚 Ressources

- [Documentation React - useReducer](https://react.dev/reference/react/useReducer)
- [Documentation React - useRef](https://react.dev/reference/react/useRef)
- [Documentation React - useEffect](https://react.dev/reference/react/useEffect)
- [Documentation React - Hooks personnalisés](https://react.dev/learn/reusing-logic-with-custom-hooks)
