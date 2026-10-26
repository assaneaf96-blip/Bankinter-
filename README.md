# Bankinter Web Portal

Application web bancaire interactive avec espace client, simulateurs et panneau d'administration.

## Structure du Projet
- `public/index.html` : Site web public Bankinter et simulateurs
- `public/cliente.html` : Espace client et gestion de compte
- `public/admin.html` : Panneau d'administration et back-office
- `server.js` : Serveur local Node.js

## Démarrage Local
```bash
node server.js
```
Accédez ensuite à [http://localhost:3000](http://localhost:3000).

## Déploiement GitHub Pages
Le workflow GitHub Actions `.github/workflows/deploy.yml` déploie automatiquement le dossier `public` sur GitHub Pages.
