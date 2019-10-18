 <h1>E03</h1>
 
<h3>**Clase de hoy**<h3>:


-No usar ramas públicas como master para hacer commit, usar las ramas locales.

-Tener copias lo más centralizadas posibles con fetched o pull.

-Rama producción para clientes: git tag para ponerle etiquetas.

-Rama staging: para arreglar fallos y dsp se mezcla con la rama master.

-Ramas para características (locales), ramas hotfixed (control errores no vistos) y ramas release (con tags) solo para arreglar fallos existentes, es una rama compartida.

-Rebase:mezclas rama e histórico o merge:mezclas la rama. Squash con rebase para hacer un rebase interactivo para no mezclar todo.

-Hacer merge en lugar de rebase para no cargarnos el histórico de nuestros compañeros. Es más seguro.

-Para arreglar los errores:

  > Crear una rama bug
  
  > Trabajar y hacer muchos commits
  
  > Rebase frecuentemente
  
  > Rebase squash interactivo 
  
  > Ramas que hay que tener: feature, master, hot fixed si hay error, producción (con código estable git tag).
  
**PASOS A SEGUIR**: 

1.**Pull** 

2.**Check out**: git checkout -b feature-1185-add-commenting

3.**Rebase/merge**: git rebase origin/master , git fetch origin master

4.**Merge con master** 

(4.5Hacer un pull para evitar conflictos de actualización(no le gusta, prefiere que hagamos git fetch para que no queden commits en la rama master)) 

5.**Push** (si hacemos merges hay que ir haciendo git fetch para ir teniendo el código actualizado, si no puede dar conflicto): git push origin master

***Alternativa para que no queden en el master commits***: 

> git checkout master 

> git pull

> git checkout feature-1185-add-commenting

> git merge master

