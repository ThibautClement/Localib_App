**Questionnaire sur la sécurité applicative**


### 1-Que veut dire l'acronyme OWASP ?
> * OWASP signifie Open Web Application Security Project
* OWASP signifie Open Web Analysis Security Project
* OWASP signifie Open Web Application System Project
* OWASP signifie Open Web Application Security Protocol

### 2-Qu'est ce qu'une CVE ?
> * CVE signifie Common Vulnerabilities and Exposures
* Une CVE représente une faille de sécurité
* Une CVE représente le code source d'un projet
* Une CVE représente une ville au Guatemala

### 3-Que veut dire l'acronyme XSS ?
* XSS signifie Cross Site Scripting
> * XSS signifie Cross Site Script
* XSS signifie Xtreme Security Script
* XSS signifie Xtreme Sport Script

### 4-Qu'est ce que la méthode DEVSECOPS ?
> * La méthode DEVSECOPS est une méthode de développement qui permet de sécuriser les applications web
* La méthode DEVSECOPS est une méthode qui vise à sécuriser les Administrateurs Systèmes et Réseaux
* La méthode DEVSECOPS est implémentée dans toutes les entreprises
* La méthode DEVSECOPS remplace la méthode DEVOPS

### 5-Donnez un exemple de faille de sécurité OWASP ?

>**Injection** : attaque qui consiste à injecter un code malveillant dans un réseau, un programme ou une requête SQL et de récupèrer des données.

### 6-Donnez un exemple d'outils utilisé par les attaquants pour énumérer les services d'un serveur ?

>**Injection SQL**

### 7-Décrivez la faille "Directory Traversal" ?

>La plupart des applications web utilisent des ressources stockées localement pour réaliser leurs tâches. Parfois, ces ressources sont intégrées dans d’autres pages via des paramètres manipulables par un utilisateur.

>La faille directory traversal survient lorsque les paramètres utilisateurs ne sont pas sécurisés ou qu’il y a un manque de contrôle d’accès aux ressources.
Il est alors possible pour un attaquant de modifier les paramètres de la requête pour demander de retourner d’autres ressources.

### 8-Donnez un exemple d'injecton SQL ?

> ' OR 1=1 --

### 9-Qu'est ce que l'élévation de privilèges ?

> Cela consiste a obtenir des privilèges supérieur au niveau normalement affecté. Par exemple s'elever au rang d'administrateur.

### 10-Terminez cette phrase : "la sécurité doit être une responsabilité ..." de RedHat?

* ... de l'administrateur système
>* ... partagée par tous
* ... Du Client
* ... vis à vis du fournisseur de service


### 11-Quel est la version anglaise plus généralement adopté de cette définition : "Le durcisssement système" ?

>Hardening System

### 12-Qu'est ce que le "Bug Bounty" ?

>Le Bug Bounty est un programme de récompenses proposé par des sites web ou des développeurs de logiciel qui offre des récompenses aux personnes qui rapportent des bugs, surtout ceux associés à des vulnérabilités.

### 13-Donnez un exemple de plateforme permettant de s'entrainer du côté attaquant ?

>DVWA : Damn Vulnerable Web Application

### 14-Qu'elle est la couleur de l'équipe représentant les attaquant lors d'un pentest ou un audit de sécurité? 
>* Rouge
* Bleu
* Jaune
* Vert

### 15-Qu'elle faille de sécurité peut introduire ce code PHP ?

```php	
$prod_id = $_GET["prod_id"];

$sql = "SELECT * FROM Products WHERE product_id = " . $prod_id;
```

> Injection SQL

### 16-Qu'elle est la loi française qui décrit les risques encourus pour piratage ?

>La loi Godfrain

### 17-Qu'est ce que la CNIL ?

>**CNIL** : **C**ommission **N**ationale de l'**I**nformatique et des **L**ibertés

>Elle accompagne les professionnels dans leur mise en conformité et aide les particuliers à maîtriser leurs données personnelles et exercer leurs droits.

### 18-Qu'est ce qu'un rançongiciel ou ransomware ?

>C'est un code malveillant qui bloque l’accès à votre appareil ou à des fichiers en les chiffrant et qui vous réclame le paiement d’une rançon pour obtenir le déchiffrement de vos données.

### 19-Donnez un exemple de scanner de vulnérabilité ?

>C'est un programme conçu pour detecter les vulnerabilités d'une application ou d'un projet.

### 20-Qu'est ce qu'un White Hat ?

> White Hat = Hacker éthique

> Le white hat réalise des attaques d'intrusion pour tester la sécutité et la vulnerabilité des systemes.

**Question Bonus :**

### Donnez votre définition de l'Open Source ?

> 