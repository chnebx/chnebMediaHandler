Copier les fichiers chnebMediaHandler.css et chnebMediaHandler.js dans n'importe quel projet et les importer ensuite dans le fichier html

_ placer <link rel="stylesheet" href="(chemin pour chnebMediaHandler.css)"> dans la partie <head> de l'html ( en haut de la page )
_ placer <script src="(chemin pour chnebMediaHandler.js)"></script> tout en bas dans la balise principale <body>

La première partie est faite, ensuite il ne reste plus qu'a créer des liens html <a></a> et leur donner la classe : "chneb-media-btn".
Exemple :

pour les images:
<a class="chneb-media-btn" href="images/img.jpg">Lien vers l'image</a>

pour les vidéos:
<a class="chneb-media-btn" href="videos/hello.mp4">Lien vers la vidéo</a>

Le programme déterminera automatiquement le type de média selon l'extension ( mp4, jpg, etc... )

pour changer le design de la vidéo et du fond noir transparent il faut éditer la classe ".chneb-overlay" dans chnebMediaHandler.css