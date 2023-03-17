# Ajouter la commande touch a PowerShell

## ! Ne marche pas sur les portables donné par cedeg!

Dans PowerShell:
```
notepad $PROFILE
```
> Si la commande donne une erreur, executer cette commande et puis re-essayer: `New-Item -Path $PROFILE -Type File -Force`

Dans la fenetre Bloc Note, ajouter: 
```
Set-Alias touch "New-Item" -Option AllScope
```
> Ne pas oublier de sauvegarder le fichier!

Recharger le profil PowerShell:
```
. $PROFILE
```