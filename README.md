# Gulp + FetchAPI
###### Moment 5 - DT173G 
#### Webbapplikationen ska hämta (GET) och skicka (POST) data till och från webbtjänsten med hjälp av FetchAPI. 

## Systemet
Med hjälp av en array som jag har döpt till “files”,har jag sparat samtliga sökvägar till filerna och dess mappar i olika objekt. Dessa objekt kan jag sedan enkelt nå med hjälp av funktionernas anrop, och behöver alltså inte uppge varje sökväg i alla funktioner. 
Varje sökväg pekar mot src-katalogen, där alla filer som redigeras i projektet finns. 

**copyHTML-funktionen** hämtar alla HTML-filer som finns i src-katalogen med ett anrop innehållandes objektet från files-arrayen med rätt sökväg. När filerna är hämtade skickas dem till pub-katalogen utan att att konkateneras eller reducera filstorleken.

**jsTask-funktionen** hämtar alla JavaScript-filer som finns i src-katalogen med ett anrop innehållandes objektet från files-arrayen med rätt sökväg. Med hjälp av Babel kan filerna konverteras till en tidigare version av ECMAScript.Filen reduceras sedan i storlek med hjälp av gulp-uglify-es, för att tillföra en snabbare laddningstid av webbsidan. De nya filerna skickas sedan till pub-katalogen.

**sassTask-funktionen** hämtar alla SCSS-filer som finns i src-katalogen, konverterar all syntax till CSS med hjälp av ett npm paket som heter node-sass. När filerna har konverterats till rätt format skickas de till pub-katalogen.

**watchTask-funktionen** följer arrayen med sökvägar för att kontrollera om någon fil förändras, och om en förändring skulle uppstå anropas copyHTML, jsTask och sassTask för att filerna skulle uppdateras och sedan publicerade i pub-katalogen. Efter att filerna har publicerats i katalogen skickas dem till en lokal statisk server som uppdateras varje gång  någon fil i pub-katalogen förändras.

**Systemet startas genom att anropa Gulp i terminalen ståendes i projektets mapp.** 


