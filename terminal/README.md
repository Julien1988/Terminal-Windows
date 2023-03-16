# Terminal

## Personnaliser le terminal

Voir [omp.md](./omp.md)

## Commandes fréquentes

| Commande    	| Description                 	| Example       	|
|---------	    |-----------------------	|---------------	|
| `cd [chemin_dossier]` 	| Ouvre le dossier donné         | `cd projects_cedeg `          	|
| `ls`  	    | Affiche les fichiers et dossiers dans le repertoire actuel         	| `ls`         	
| `code .`  	    | Ouvre le repertoire actuel dans VSCode         	|        
| `mkdir [nom_dossier]`  	    | Créer un nouveau dossier          	|   `mkdir newFolder`
| `touch [nom_fichier.txt]`  	    | Créer un nouveau fichier          	|   `touch test.txt`

> Attention! La commande touch ne fonctionnera pas si vous l'ajoutez pas! Voir [Ajouter touch a PowerShell](./touch.md)

## Chemin d'un fichier

🗀 projet_cedeg<br>
├── 🗀 assets<br>
├── index.html<br>
├── 🗀 javascript<br>
└── 🗀 terminal<br>

`cd assets` -> Ouvre le fichier assets
> emplacement actuel: projet_cedeg/assets

`cd ..` -> Ouvre le fichier parent (revient en arriere)
> emplacement actuel: projet_cedeg

`cd assets/mes_images/` -> Ouvre le fichier mes_images dans assets
> emplacement actuel: projet_cedeg/assets/mes_images
