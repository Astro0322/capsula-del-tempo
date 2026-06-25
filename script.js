// 1. La data del compleanno: 24 Luglio 2026
const dataCompleanno = new Date('2026-07-24T00:00:00').getTime();

// 2. Il database completo di 30 giorni (dal 25 Giugno al 24 Luglio)
const capsulaDelTempo = [
    {
        data: '2026-06-25', // Giorno 1 (OGGI)
        messaggio: "Giorno 1: Ciaoooo amore mio!! Benvenuta nella capsula del tempo... Ti ricordi questo giorno? Possiamo definirla la nostra prima uscita seria (dopo il primo maggio!), forse non ti sembrava ma io ero un sacco in ansia e timido... Però mi sono divertito, come sempre! (Quanto sei bella mammamia)",
        immagine: "assets/foto_giorno_1.jpg"
    },
    {
        data: '2026-06-26', // Giorno 2
        messaggio: "Giorno 2: Amore mettiti le cuffie oggi. Questa canzone mi fa subito pensare a te e a noi! (Anche se non basterebbe una playlist intera per te!)",
        canzone: "assets/canzone_giorno_2.mp3"
    },
    {
        data: '2026-06-27', // Giorno 3
        messaggio: "Giorno 3: Amore oggi niente foto o canzoni, solo un piccolo promemoria: sei la persona più speciale della mia vita e sono felicissimo per ogni singolo momento insieme amore mio!! Buona giornataaaa! ❤️"
    },
    {
        data: '2026-06-28', // Giorno 4
        messaggio: "Giorno 4: Amore ricordi? Mentre sto facendo questo programma sto ridendo troppo HAHAHAHAHAHAH. Guarda che stile, nonna. (Non nego che rimani stupenda...)",
        video: "assets/video_giorno_4.mp4"
    },
    {
        data: '2026-06-29', // Giorno 5
        messaggio: "Giorno 5: Amore mio, potrebbe sembrare una foto normale questa, ma in realtà qui era da poco venuta a mancare Guenda, ma grazie a te non mi è mai andato via il sorriso, e sono riuscito a stare meglio! Sei spaciale, grazie amore.",
        immagine: "assets/foto_giorno_5.jpg"
    },
    {
        data: '2026-06-30', // Giorno 6
        messaggio: "Giorno 6: Buongiorno amoreeeee!! Come va?? Spero male. Per iniziare bene questa giornata mettiamo un pezzo che gasa, metti le cuffie cane e balla!!",
        canzone: "assets/canzone_giorno_6.mp3"
    },
    {
        data: '2026-07-01', // Giorno 7
        messaggio: "Giorno 7: È già passata una settimana da quando è iniziato questo conto alla rovescia wow. Spero che questi piccoli pensieri ti stiano facendo capire quanto vali per me!!! Ti voglio taaaantoooooo bene amore mioooo."
    },
    {
        data: '2026-07-02', // Giorno 8
        messaggio: "Giorno 8: Primo di tutto stai calma... secondo, QUANTO SEI BELLA MHMHMHMHMHMHM!! Ti ricordi questo sushi ehhh, poi siamo riusciti ad andare a casa mia ti ricordi come eravamo gasati!! Sono stato un sacco bene quel giorno amore mio.",
        video: "assets/video_giorno_8.mp4"
    },
    {
        data: '2026-07-03', // Giorno 9
        messaggio: "Giorno 9: Quanto mi mancano queste colazioni insieme cane, però sono sicuro che ce ne saranno delle altre!! (Bello fare sempre colazione gratis eh...)",
        immagine: "assets/foto_giorno_9.jpg"
    },
    {
        data: '2026-07-04', // Giorno 10
        messaggio: "Giorno 10: Ogni volta che ascolto questa canzone mi ritorna in mente quanto abbiamo ballato a casa mia insieme, ti ricordi??? METTI LE CUFFIE E ASCOLTA!!",
        canzone: "assets/canzone_giorno_10.mp3"
    },
    {
        data: '2026-07-05', // Giorno 11
        messaggio: "Giorno 11: Domenica! Oggi niente distrazioni, in chiesa mi raccomando eh. Volevo solo ricordarti che sei il mio pensiero fisso preferito. Goditi la giornata, amore miooo!!!"
    },
    {
        data: '2026-07-06', // Giorno 12
        messaggio: "Giorno 12: Ti ricordi questo giorno amore? Ci ho messo un pò prima di chiederti di fidanzarci ufficialmente però poi alla fine ce l'ho fatta dai... Guarda quanto sei bellissima!! (Non si dice DRI martini..)",
        video: "assets/video_giorno_12.mp4"
    },
    {
        data: '2026-07-07', // Giorno 13
        messaggio: "Giorno 13: Amore miooooo!! Ti ricordi quando ancora dovevamo studiare? Era una merda però con te mi riusciva facile e mi divertivo davvero tantissimo!! L'anno prossimo uguale mi raccomando...",
        immagine: "assets/foto_giorno_13.jpg"
    },
    {
        data: '2026-07-08', // Giorno 14
        messaggio: "Giorno 14: Amore questa canzone me l'hai fatta conoscere te!! Devo dire veramente veramente bella, anche se io ti prometto che sarò sempre quell'deale che quasi non esiste che viene citato a fine canzone...",
        canzone: "assets/canzone_giorno_14.mp3"
    },
    {
        data: '2026-07-09', // Giorno 15
        messaggio: "Giorno 15: Amoreee, siamo esattamente a metà... MANCANO 15 giorni al tuo compleanno. SEI GASATA??? Chissà se hai già capito quale sarà la sorpresa finale... Tu continua a seguire i giorni, cane! 😉"
    },
    {
        data: '2026-07-10', // Giorno 16
        messaggio: "Giorno 16: AMORE, scusami, te vorresti entrare nel senato? Giusto per ricordare questa perla...",
        video: "assets/video_giorno_16.mp4"
    },
    {
        data: '2026-07-11', // Giorno 17
        messaggio: "Giorno 17: GUARDA QUANTO SEI BELLA, NON TI DEVI COPRIRE MAI!! Poi guarda questo vestito che ti piace tanto, non potevo non metterlo nelle foto (Sembri mia nonna)",
        immagine: "assets/foto_giorno_17.jpg"
    },
    {
        data: '2026-07-12', // Giorno 18
        messaggio: "Giorno 18: Amoreeee, questa canzone so benissimo che la conosci, è trap, quindi mi raccomando cantala come solo te sai fare!! (Pensamo a ME, ovviamente :) )",
        canzone: "assets/canzone_giorno_18.mp3"
    },
    {
        data: '2026-07-13', // Giorno 19
        messaggio: "Giorno 19: Buongiornoo amore, inizia una nuova settimana. Spero che tu stia passando una giornata serena, io sciuramente ti sto pensando, come sempre."
    },
    {
        data: '2026-07-14', // Giorno 20
        messaggio: "Giorno 20: Amoreeeee, mancano esattamente 10 giorniii, oggi ho sempre una canzone, ma un pò diversa dal solito... E' la mia cantante preferita!!",
        video: "assets/video_giorno_20.mp4"
    },
    {
        data: '2026-07-15', // Giorno 21
        messaggio: "Giorno 21: Amore ci avviciniamo sempre di più, e te diventi sempre più grande! Anche se io ti vedrò per sempre come la MIA bambina!! Guarda che bella che sei...",
        immagine: "assets/foto_giorno_21.jpg"
    },
    {
        data: '2026-07-16', // Giorno 22
        messaggio: "Giorno 22: Non vorrei tirarla amore mio hahahahah, ma non potevo non mettere la tua canzone preferita di Cocciante!! Però mi raccomando non prenderla alla lettera eh... L'unica cosa che prevedo io è un futuro bellissimo con te!",
        canzone: "assets/canzone_giorno_22.mp3"
    },
    {
        data: '2026-07-17', // Giorno 23
        messaggio: "Giorno 23: Mhhhhh, se potessi esprimere un desiderio adesso, sarebbe semplicemente quello di essere lì di fianco a te a BACIARTI e a STRITOLARTI. Qualsiasi cosa stia facendo mi manchi tantissimo, e ti sto pensando amore."
    },
    {
        data: '2026-07-18', // Giorno 24
        messaggio: "Giorno 24: AHAHAHHAHHAHAHA, te lo ricordi amore si? Chiedo ancora umilmente scusa, non era mia intenzione... Quanto mi manca baciarti però, e quanto mi manca la tua risata!!",
        video: "assets/video_giorno_24.mp4"
    },
    {
        data: '2026-07-19', // Giorno 25
        messaggio: "Giorno 25: Amore mancano 5 giorni! Guarda questa foto... Quanto mi piace reglarti i fiori, in più è stato veramente gentile quel fioraio a regalarti quello rosso, vabbè ma a una bella come te non poteva non regalarlo!!",
        immagine: "assets/foto_giorno_25.jpg"
    },
    {
        data: '2026-07-20', // Giorno 26
        messaggio: "Giorno 26: Amore metti le cuffie e alza il volume... Questa canzone è per te!!! (MI MANCHI TANTISSIMO)",
        canzone: "assets/canzone_giorno_26.mp3"
    },
    {
        data: '2026-07-21', // Giorno 27
        messaggio: "Giorno 27: MANCANO 3 GIORNI! Passa in fretta il tempo vero amore? L'attesa sta per finire. Comincia a pensare a cosa ti piacerebbe fare, vediamo se ci arrivi hihihihihihi"
    },
    {
        data: '2026-07-22', // Giorno 28
        messaggio: "Giorno 28: Amore. siamo arrivati all'ultima foto!! Ho messo questa, la mia preferita, e sicuramente saprai il motivo. E' stato veramente uno dei giorni più felici della mia vita amore!!",
        immagine: "assets/foto_giorno_28.jpg"
    },
    {
        data: '2026-07-23', // Giorno 29 (Il giorno prima)
        messaggio: "Giorno 29: Amore so che questa canzone è importante per te, e te la volevo dedicare, metti le cuffie e ascolta!! Domani questo bottone sbloccherà qualcosa di immenso. Dormi bene stasera amore mio... a mezzanotte si aprirà il paradiso! ✨",
        canzone: "assets/canzone_giorno_29.mp3"
    },
    {
        data: '2026-07-24', // Giorno 30 (IL COMPLEANNO!)
        messaggio: "🎉 BUON COMPLEANNO AMORE MIO! 🎉<br><br>Questo conto alla rovescia finisce qui, perchè il regalo più grande non poteva entrare nello schermo! <br><br><b>PREPARA LE VALIGIE: ANDIAMO IN MONTAGNA INSIEME AMOREMIOOOO! 🏔️❤️🌲</b><br><br>Spero che questa sorpresa ti tolga il fiato tanto quanto tu lo togli a me ogni giorno!!!",
        immagine: "assets/sorpresa_montagna.jpg" // Metti la foto delle montagne o dello chalet!
    }
];

// 3. Gestione del Countdown (Aggiornata per il post-compleanno)
function aggiornaCountdown() {
    const ora = new Date().getTime();
    const distanza = dataCompleanno - ora;
    const display = document.getElementById("countdown-display");
    
    // Otteniamo la data di oggi in formato testuale YYYY-MM-DD
    const oggiStr = new Date().toISOString().split('T')[0];

    // Se il compleanno è passato (Dal 25 Luglio in poi)
    if (oggiStr > '2026-07-24') {
        display.innerHTML = "I nostri ricordi 📖";
        display.style.color = "#FCE4EC";
        document.getElementById("open-gift-btn").innerHTML = "Sfoglia l'Album";
        return;
    }

    // Se è esattamente il giorno del compleanno (24 Luglio)
    if (distanza < 0 && oggiStr === '2026-07-24') {
        display.innerHTML = "È IL TUO GIORNO!";
        display.style.color = "#FFC107"; // Diventa dorato
        return;
    }

    // Calcolo normale dei giorni mancanti (arrotondato per eccesso)
    const giorni = Math.ceil(distanza / (1000 * 60 * 60 * 24));
    display.innerHTML = giorni + (giorni === 1 ? " giorno" : " giorni");
}

// 4. Gestione del bottone (con Modalità ALBUM)
const bottoneRegalo = document.getElementById("open-gift-btn");
const testoMessaggio = document.getElementById("daily-message");

bottoneRegalo.addEventListener("click", function() {
    const oggi = new Date().toISOString().split('T')[0]; 

    // --- MODALITÀ ALBUM: se la data è dal 25 Luglio in poi ---
    if (oggi > '2026-07-24') {
        let htmlAlbum = "<h3 style='margin-bottom: 20px; color: #FCE4EC; font-family: \"Dancing Script\", cursive; font-size: 30px;'>La nostra Capsula del Tempo ✨</h3>";
        
        // Scorriamo tutti i giorni e li mettiamo in fila
        capsulaDelTempo.forEach(giorno => {
            // Riformattiamo la data da YYYY-MM-DD a GG/MM/AAAA
            let dataFormattata = giorno.data.split('-').reverse().join('/');

            htmlAlbum += `<div style="margin-bottom: 40px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); text-align: left;">`;
            htmlAlbum += `<p style="color: #A0AABF; font-size: 14px; margin-bottom: 10px; font-weight: bold;">📅 ${dataFormattata}</p>`;
            htmlAlbum += `<p style="line-height: 1.6;">${giorno.messaggio}</p>`;

            if (giorno.immagine) {
                htmlAlbum += `<img src="${giorno.immagine}" style="max-width: 100%; border-radius: 10px; margin-top: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">`;
            }
            if (giorno.video) {
                htmlAlbum += `<video controls playsinline style="max-width: 100%; border-radius: 10px; margin-top: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);"><source src="${giorno.video}" type="video/mp4">Il tuo telefono non supporta i video.</video>`;
            }
            if (giorno.canzone) {
                htmlAlbum += `<audio controls style="margin-top: 15px; width: 100%; outline: none;"><source src="${giorno.canzone}" type="audio/mpeg">Il tuo telefono non supporta l'audio.</audio>`;
            }
            htmlAlbum += `</div>`;
        });

        testoMessaggio.innerHTML = htmlAlbum;
        testoMessaggio.classList.remove("hidden");
        testoMessaggio.classList.add("visible");
        
        // Aggiungiamo uno "scroll" interno per non far sformare la pagina se i contenuti sono troppi
        testoMessaggio.style.maxHeight = "60vh"; 
        testoMessaggio.style.overflowY = "auto";
        testoMessaggio.style.textAlign = "left";

        bottoneRegalo.style.display = "none"; // Nascondiamo il bottone dopo aver aperto l'album
        return; // Ferma l'esecuzione qui
    }

    // --- NORMALE GESTIONE GIORNALIERA (Fino al 24 Luglio) ---
    const contenutoDiOggi = capsulaDelTempo.find(giorno => giorno.data === oggi);

    if (contenutoDiOggi) {
        let htmlContenuto = `<p>${contenutoDiOggi.messaggio}</p>`;

        if (contenutoDiOggi.immagine) {
            htmlContenuto += `<br><img src="${contenutoDiOggi.immagine}" style="max-width: 100%; border-radius: 10px; margin-top: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">`;
        }

        if (contenutoDiOggi.video) {
            htmlContenuto += `<br><video controls playsinline style="max-width: 100%; border-radius: 10px; margin-top: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);"><source src="${contenutoDiOggi.video}" type="video/mp4"></video>`;
        }

        if (contenutoDiOggi.canzone) {
            htmlContenuto += `<br><audio controls style="margin-top: 15px; width: 100%; outline: none;"><source src="${contenutoDiOggi.canzone}" type="audio/mpeg"></audio>`;
        }

        testoMessaggio.innerHTML = htmlContenuto;
        testoMessaggio.classList.remove("hidden");
        testoMessaggio.classList.add("visible");
        
        bottoneRegalo.innerHTML = "Regalo Aperto! 💖";
        bottoneRegalo.style.backgroundColor = "#A0AABF"; 
        bottoneRegalo.style.color = "#fff";

        // Effetto speciale per il compleanno
        if (oggi === '2026-07-24') {
            bottoneRegalo.classList.add('giorno-speciale');
            var duration = 3 * 1000;
            var end = Date.now() + duration;
            (function frame() {
                confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#FCE4EC', '#FFFFFF', '#0B1021'] });
                confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#FCE4EC', '#FFFFFF', '#0B1021'] });
                if (Date.now() < end) requestAnimationFrame(frame);
            }());
        }
    } else {
        testoMessaggio.innerHTML = "Oggi non c'è nessun nuovo messaggio. La pazienza rende il regalo più bello, torna domani! ⏳";
        testoMessaggio.classList.remove("hidden");
        testoMessaggio.classList.add("visible");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let contatoreClick = 0;
    let timerReset;
    const titoloSegreto = document.getElementById("main-title");

    if (titoloSegreto) {
        titoloSegreto.style.cursor = "pointer"; // Fa apparire la manina del mouse

        titoloSegreto.addEventListener("click", function() {
            contatoreClick++;
            
            // 📢 Questo manderà un messaggio invisibile ma reale al PC!
            console.log("🔥 Click registrato! Sei al numero: " + contatoreClick);
            
            clearTimeout(timerReset); 
            
            if (contatoreClick === 5) {
                alert("Sei il cane mio, non pensavo fossi così intelligente da scoprire questo trucchetto, ma molto probabilmene te l'avrò detto io hihihihihih... MI MANCHI AMORE❤️❤️");
                contatoreClick = 0; 
            }
            
            // Se aspetti più di 4 secondi, si resetta
            timerReset = setTimeout(() => { 
                console.log("⏱️ Tempo scaduto! Il contatore è tornato a 0.");
                contatoreClick = 0; 
            }, 4000); 
        });
    }
});

// --- TRUCCHETTO EXTRA: Versione FLUIDA (CSS) dei Cuoricini Volanti al click ---
const areaCountdown = document.getElementById("countdown-display");

if (areaCountdown) {
    areaCountdown.style.cursor = "pointer"; // Fa capire che si può cliccare
    
    areaCountdown.addEventListener("click", function(e) {
        // Creiamo 6 cuoricini a ogni click
        for (let i = 0; i < 6; i++) {
            const cuore = document.createElement("div");
            cuore.innerHTML = "❤️";
            cuore.classList.add("cuore-volante"); // Collega la classe CSS con l'animazione
            
            // Posizione iniziale esatta del click
            cuore.style.left = e.clientX + "px";
            cuore.style.top = e.clientY + "px";
            
            // Grandezza casuale per varietà
            cuore.style.fontSize = (Math.random() * 10 + 20) + "px"; 
            
            // Trucco Magico: Generiamo uno spostamento orizzontale CASUALE 
            // e lo passiamo al CSS tramite una variabile (così ogni cuore va in una direzione diversa)
            const spostamentoCasualeX = (Math.random() * 100 - 50) + "px"; // Tra -50px e +50px
            cuore.style.setProperty('--drift-x', spostamentoCasualeX);

            document.body.appendChild(cuore);
            
            // Rimuoviamo il cuore dal codice dopo che l'animazione CSS è finita (1.5s)
            setTimeout(() => { cuore.remove(); }, 1500);
        }
    });
}

// Inizializza l'app
aggiornaCountdown();
setInterval(aggiornaCountdown, 1000);