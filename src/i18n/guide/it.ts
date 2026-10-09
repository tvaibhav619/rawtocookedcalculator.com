import type { GuideContent } from './types';

export const itGuide: GuideContent = {
  badge: 'Guida di Riferimento Scientifico e Nutrizionale',
  title: 'La Guida Completa ai Pesi degli Alimenti Crudi vs. Cotti, Dinamica dell’Acqua e Precisione Nutrizionale',
  intro:
    'Chiunque abbia mai cucinato un pasto, utilizzato una bilancia da cucina o registrato le calorie in un’app di fitness sa che il cibo non esce dalla padella con lo stesso peso che aveva all’uscita dal frigorifero. Le proteine animali si ritirano e perdono fino a un terzo del loro peso iniziale per evaporazione e scioglimento dei grassi, mentre cereali, riso, pasta e legumi assorbono l’acqua bollente raddoppiando o triplicando di volume. Questo testo scientifico spiega la termodinamica delle rese di cottura, le formule matematiche universali, i dati ufficiali dell’USDA e i metodi pratici per il meal prep e il calcolo esatto dei macronutrienti.',

  sec1Title: '1. Fisica Cellulare e Chimica delle Rese di Cottura',
  sec1Intro:
    'La differenza tra peso a crudo e peso a cotto non è un mistero: è una conseguenza diretta della biologia cellulare e della termodinamica. Ogni alimento integro è composto da acqua, proteine, lipidi, carboidrati, fibre e minerali. Il calore modifica radicalmente la struttura fisica di questi componenti, provocando l’espulsione o l’assorbimento di acqua e grassi.',
  sec1ProteinTitle: 'Denaturazione Proteica nelle Carni e nel Pesce',
  sec1ProteinText:
    'Il tessuto muscolare animale a crudo è composto per circa il 70%–75% da acqua, trattenuta all’interno di un reticolo di proteine miofibrillari formato da miosina e actina. Con il calore:',
  sec1ProteinBullets: [
    'Tra 40°C e 55°C: Le proteine di miosina si denaturano e si srotolano, provocando un restringimento trasversale delle fibre muscolari.',
    'Tra 60°C e 66°C: Il collagene si contrae longitudinalmente. L’acqua trattenuta negli spazi intercellulari viene strizzata fuori come da una spugna compressa.',
    'Sopra i 74°C: L’actina si denatura completamente, indurendo la struttura fibrosa e vaporizzando i succhi cellulari. Per questo, le carni cotte pesano dal 15% al 35% in meno rispetto al crudo.',
  ],
  sec1StarchTitle: 'Gelatinizzazione dell’Amido in Cereali e Legumi',
  sec1StarchText:
    'Gli amidi secchi come riso bianco, riso integrale, fiocchi d’avena, lenticchie e pasta secca arrivano nella pentola disidratati, con meno del 12% di umidità. A contatto con l’acqua bollente:',
  sec1StarchBullets: [
    'Idratazione Capillare: Le molecole d’acqua penetrano nei granuli semicristallini di amido attraverso canali microscopici.',
    'Soglia di Gelatinizzazione (60°C–85°C): I legami a idrogeno di amilosio e amilopectina si spezzano, permettendo ai granuli di assorbire ingenti volumi d’acqua e rigonfiarsi.',
    'Moltiplicazione della Massa: Poiché l’acqua resta intrappolata nel gel, i chicchi si espandono da 2,2× a 3,5× il peso a secco. Il riso cotto è costituito per il 65%–70% da pura acqua assorbita.',
  ],
  sec1VegText:
    'Le verdure rispondono a un terzo meccanismo. Foglie come gli spinaci contengono grandi quantità d’acqua nelle vacuole cellulari. Il calore dissolve la pectina strutturale e rompe le sacche d’aria intercellulari. Negli spinaci, ciò produce un collasso dell’80%–90% del volume visivo, benché la perdita reale di peso sia solo del 23%. Al contrario, tuberi come le patate perdono pochissimo peso (circa il 6%) se bolliti interi, poiché la gelatinizzazione dell’amido bilancia l’evaporazione.',

  sec2Title: '2. Il Quadro Matematico Universale di Conversione',
  sec2Intro:
    'La conversione tra crudo e cotto dipende da un unico parametro scientifico: la Percentuale di Resa di Cottura (Yield %). Convalidata da decenni di analisi di laboratorio condotte dal Dipartimento dell’Agricoltura degli Stati Uniti (USDA), la resa esprime il rapporto tra il peso finale edibile cotto e il peso iniziale crudo:',
  sec2EquationLabel: 'Equazione Fondamentale della Resa',
  sec2Equation: 'Resa % = (Peso Cotto ÷ Peso Crudo) × 100',
  sec2SubIntro:
    'Conoscendo la percentuale di resa, due formule matematiche permettono di convertire in entrambe le direzioni con totale accuratezza:',
  sec2FormulaATitle: 'Formula A: Convertire il Peso Crudo in Peso Cotto',
  sec2FormulaADesc:
    'Utilizzala quando pianifichi i pasti, calcoli le porzioni da una confezione cruda o fai la spesa:',
  sec2FormulaACode: 'Peso Cotto = Peso Crudo × (Resa % ÷ 100)',
  sec2FormulaAExampleHtml:
    '<strong>Esempio pratico:</strong> Hai 250 g di petto di pollo crudo (resa USDA = 72%):<br /><code>Cotto = 250 g × 0,72 = 180 g</code>. Il tuo taglio crudo produrrà 180 g di carne cotta nel piatto.',
  sec2FormulaBTitle: 'Formula B: Convertire il Peso Cotto in Equivalente Crudo',
  sec2FormulaBDesc:
    'Utilizzala quando pesi cibo già cucinato (es. avanzi in frigorifero o al ristorante) e devi inserirlo nell’app:',
  sec2FormulaBCode: 'Equivalente Crudo = Peso Cotto ÷ (Resa % ÷ 100)',
  sec2FormulaBExampleHtml:
    '<strong>Esempio pratico:</strong> Hai pesato 150 g di macinato di manzo 80/20 cotto (resa USDA = 73%):<br /><code>Crudo = 150 g ÷ 0,73 = 205,5 g</code>. Hai consumato l’equivalente nutrizionale di 205,5 g di carne cruda.',
  sec2ShrinkageNoteHtml:
    '<strong>Percentuale di Calo Peso:</strong> Nelle carni in cui la massa diminuisce, il calo è semplicemente <code>100% − Resa %</code>. Un petto di pollo con resa del 72% subisce un calo del <code>100% − 72% = 28%</code>. Nei cereali che crescono oltre il 100%, il moltiplicatore è superiore a 1,0 (es. riso bianco con resa 300% ha un fattore di espansione di 3,0×).',

  sec3Title: '3. Tabella Maestra delle Rese di Cottura (Dati USDA)',
  sec3Intro:
    'Di seguito la tabella di conversione per carni, pollame, pesce, cereali, legumi e verdure, basata sull’Handbook nº 102 dell’USDA e sulla Tabella delle Rese di Cottura dell’USDA:',
  sec3ColFood: 'Alimento',
  sec3ColMethod: 'Metodo Tipico',
  sec3ColYield: 'Resa USDA',
  sec3ColRtc: 'Crudo→Cotto',
  sec3ColCtr: 'Cotto→Crudo',
  sec3ColMoisture: 'Variazione Acqua',
  sec3ColNotes: 'Nota Pratica',
  tableRows: [
    { food: 'Petto di Pollo (Senza pelle/ossa)', method: 'Forno / Griglia', yieldPct: '72%', rtc: '× 0,72', ctr: '÷ 0,72', moisture: '−28%', notes: '200 g crudo rende ~144 g cotto' },
    { food: 'Coscia di Pollo (Disossata)', method: 'Arrosto / Padella', yieldPct: '74%', rtc: '× 0,74', ctr: '÷ 0,74', moisture: '−26%', notes: 'Trattiene più grassi del petto' },
    { food: 'Ali di Pollo (Con osso)', method: 'Forno / Air Fryer', yieldPct: '55%', rtc: '× 0,55', ctr: '÷ 0,55', moisture: '−45%', notes: 'Le ossa sono ~40% del peso' },
    { food: 'Macinato di Tacchino (93/7 Magro)', method: 'Padella', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: '200 g crudo rende ~156 g cotto' },
    { food: 'Macinato di Manzo (80/20)', method: 'Padella / Griglia', yieldPct: '73%', rtc: '× 0,73', ctr: '÷ 0,73', moisture: '−27%', notes: '200 g crudo rende ~146 g cotto' },
    { food: 'Macinato di Manzo (90/10 Magro)', method: 'Padella', yieldPct: '81%', rtc: '× 0,81', ctr: '÷ 0,81', moisture: '−19%', notes: 'Carne magra che trattiene più peso' },
    { food: 'Bistecca di Manzo / Controfiletto', method: 'Media Cottura', yieldPct: '75%', rtc: '× 0,75', ctr: '÷ 0,75', moisture: '−25%', notes: 'Cotto a 63°C al cuore' },
    { food: 'Costata / Ribeye di Manzo', method: 'Griglia / Padella', yieldPct: '71%', rtc: '× 0,71', ctr: '÷ 0,71', moisture: '−29%', notes: 'Il grasso marezzato si scioglie' },
    { food: 'Braciola di Maiale (Lonza)', method: 'Padella / Forno', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: 'Cotto a 63°C al cuore' },
    { food: 'Filetto di Maiale', method: 'Arrosto', yieldPct: '77%', rtc: '× 0,77', ctr: '÷ 0,77', moisture: '−23%', notes: 'Taglio magro e tenero' },
    { food: 'Pancetta / Bacon a Fette', method: 'Padella', yieldPct: '33%', rtc: '× 0,33', ctr: '÷ 0,33', moisture: '−67%', notes: 'Forte perdita di grasso fuso' },
    { food: 'Trancio di Salmone dell’Atlantico', method: 'Forno / Padella', yieldPct: '85%', rtc: '× 0,85', ctr: '÷ 0,85', moisture: '−15%', notes: 'Gli omega-3 restano nella polpa' },
    { food: 'Pesce Bianco (Merluzzo / Tilapia)', method: 'Forno / Vapore', yieldPct: '80%', rtc: '× 0,80', ctr: '÷ 0,80', moisture: '−20%', notes: 'Polpa tenera e sfaldata' },
    { food: 'Gamberi Crudi Sgusciati', method: 'Saltati / Bolliti', yieldPct: '75%', rtc: '× 0,75', ctr: '÷ 0,75', moisture: '−25%', notes: '200 g crudo rende ~150 g cotto' },
    { food: 'Tonno in Scatola al Naturale', method: 'Sgocciolato', yieldPct: '68%', rtc: '× 0,68', ctr: '÷ 0,68', moisture: '−32%', notes: 'Scatola da 142 g dà ~97 g sgocciolati' },
    { food: 'Riso Bianco (Chicco Lungo / Basmati)', method: 'Bollito / Vapore', yieldPct: '300%', rtc: '× 3,00', ctr: '÷ 3,00', moisture: '+200%', notes: '100 g crudo rende 300 g cotto' },
    { food: 'Riso Integrale', method: 'Bollito', yieldPct: '270%', rtc: '× 2,70', ctr: '÷ 2,70', moisture: '+170%', notes: 'La crusca limita l’assorbimento' },
    { food: 'Pasta Secca di Semola (Spaghetti)', method: 'Bollita Al Dente', yieldPct: '225%', rtc: '× 2,25', ctr: '÷ 2,25', moisture: '+125%', notes: '100 g secco rende ~225 g cotto' },
    { food: 'Fiocchi d’Avena', method: 'Cotti in Acqua', yieldPct: '300%', rtc: '× 3,00', ctr: '÷ 3,00', moisture: '+200%', notes: '50 g secco rende 150 g di porridge' },
    { food: 'Avena Spezzata (Steel Cut)', method: 'Cottura Lenta', yieldPct: '350%', rtc: '× 3,50', ctr: '÷ 3,50', moisture: '+250%', notes: 'Chicco compatto che assorbe più acqua' },
    { food: 'Quinoa Secca', method: 'Bollita', yieldPct: '310%', rtc: '× 3,10', ctr: '÷ 3,10', moisture: '+210%', notes: '100 g secco rende 310 g cotto' },
    { food: 'Lenticchie Secche', method: 'Bollite', yieldPct: '290%', rtc: '× 2,90', ctr: '÷ 2,90', moisture: '+190%', notes: '100 g secco rende 290 g cotto' },
    { food: 'Fagioli Neri Secchi', method: 'Ammollati & Bolliti', yieldPct: '240%', rtc: '× 2,40', ctr: '÷ 2,40', moisture: '+140%', notes: 'Aumenta di 2,4× il volume' },
    { food: 'Spinaci Freschi Crudi', method: 'Vapore / Saltati', yieldPct: '77%', rtc: '× 0,77', ctr: '÷ 0,77', moisture: '−23%', notes: 'Perde 80% volume, 23% massa' },
    { food: 'Cime di Broccoli', method: 'Vapore / Bollite', yieldPct: '100%', rtc: '× 1,00', ctr: '÷ 1,00', moisture: '0%', notes: 'L’acqua esterna compensa la perdita' },
    { food: 'Patata Intera', method: 'Bollita / Forno', yieldPct: '94%', rtc: '× 0,94', ctr: '÷ 0,94', moisture: '−6%', notes: 'La buccia trattiene il vapore interno' },
    { food: 'Patata Dolce a Cubetti', method: 'Al Forno Arrosto', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: 'La cottura concentra gli zuccheri' },
  ],

  sec4Title: '4. Legge di Conservazione dei Macronutrienti e Errori di Tracking',
  sec4Intro:
    'Uno dei miti più diffusi nel fitness è che cucinare distrugga o riduca le calorie degli alimenti. La fisica dimostra il contrario: la Legge di Conservazione della Massa stabilisce che la materia non scompare nell’aria.',
  sec4CardTitle: 'Cosa Evapora Davvero dalla Padella?',
  sec4CardText:
    'Quando la carne sfrigola, il fumo bianco è puro vapore acqueo (H2O). L’acqua ha esattamente zero calorie, zero grammi di proteine, zero di carboidrati e zero di grassi. Gli amminoacidi delle proteine muscolari non evaporano.',
  sec4RawLabel: 'Petto di Pollo Crudo (100 g):',
  sec4RawCals: '120 Calorie',
  sec4RawProtein: '22,5 g Proteine',
  sec4RawFat: '2,6 g Grassi • 0 g Carboidrati',
  sec4CookedLabel: 'Peso Cotto Finale (~72 g):',
  sec4CookedCals: '120 Calorie (Invariate)',
  sec4CookedProtein: '22,5 g Proteine (Invariate)',
  sec4CookedFat: '2,6 g Grassi • 0 g Carboidrati',
  sec4CardSummaryHtml:
    'Poiché sono evaporati 28 g d’acqua priva di calorie, la carne cotta è molto più densa di nutrienti al grammo: apporta circa <strong>31,25 g di proteine per 100 g cotti</strong>, contro i <strong>22,5 g per 100 g a crudo</strong>.',
  sec4TrapTitle: 'La Trappola delle App di Conteggio Calorie',
  sec4TrapP1:
    'App popolari come MyFitnessPal, MacroFactor o Lose It! contengono database in cui gli alimenti integri sono registrati a crudo per impostazione predefinita. Quando si cuoce il pollo, si pesano 150 g di carne cotta nel piatto e si seleziona "Petto di Pollo" crudo, si commette un grosso errore.',
  sec4TrapP2Html:
    'In realtà, 150 g di pollo cotto corrispondono a <code>150 g ÷ 0,72 = 208 g</code> di pollo crudo. La persona ha assunto 250 calorie e 46,8 g di proteine, ma ne ha segnate solo 180 calorie e 33,8 g di proteine. In un solo pasto, mancano all’appello <strong>70 calorie e 13 grammi di proteine</strong>. Nella giornata, ciò si traduce in uno scarto non calcolato di 200–300 calorie che blocca il dimagrimento!',
  sec4TrapP3:
    'Con il riso accade l’opposto: mangiare 200 g di riso bianco cotto e registrarli come riso secco fa segnare all’app 730 calorie anziché 245 calorie reali, provocando un falso allarme calorico.',

  sec5Title: '5. Meal Prep e Gestione delle Porzioni da Pentole Grandi',
  sec5Intro:
    'Cucinando per tutta la settimana, pesare ogni ingrediente a crudo per singola vaschetta è impossibile. Come dividere con precisione matematica un piatto unico composto da 1,5 kg di pollo crudo, 400 g di riso e verdure?',
  sec5Strat1Title: 'Strategia 1: Metodo della Tara Totale Cotta',
  sec5Strat1Desc: 'Ideale se si servono porzioni di peso diverso per la famiglia:',
  sec5Strat1StepsHtml: [
    '<strong>Pesare la Pentola Vuota:</strong> Pesa la pentola prima di cucinare (es. 1.000 g).',
    '<strong>Sommare i Macro Crudi:</strong> Calcola tutte le calorie e proteine dei cibi crudi (es. 2.400 kcal, 200 g proteine).',
    '<strong>Pesare la Pentola Piena:</strong> Pesa la pentola a fine cottura (es. 3.000 g lordi) e togli la tara: <code>3.000 g − 1.000 g = 2.000 g netti cotti</code>.',
    '<strong>Calcolare la Densità al Grammo:</strong> Dividi i macro crudi per i grammi cotti netti: <code>2.400 kcal ÷ 2.000 g = 1,2 kcal/g</code>.',
    '<strong>Servire e Annotare:</strong> Impiatta una porzione qualsiasi (es. 300 g): <code>300 g × 1,2 = 360 kcal</code>.',
  ],
  sec5Strat2Title: 'Strategia 2: Ripartizione Uguale in Vaschette',
  sec5Strat2Desc:
    'Se prepari 5 pasti uguali per te, dividi il piatto in modo omogeneo in 5 contenitori. Registra 1/5 (20%) degli ingredienti crudi totali ogni giorno. La media settimanale sarà esatta al 100%.',

  sec6Title: '6. Metodi di Cottura e Temperatura al Cuore',
  sec6Intro: 'La tecnica culinaria e il livello di cottura influenzano direttamente la perdita d’acqua:',
  sec6DryTitle: 'Air Fryer e Griglia',
  sec6DryTextHtml:
    'La convezione rapida o la fiamma viva accelerano l’evaporazione, riducendo la resa del pollo al <strong>65% – 68%</strong>.',
  sec6MoistTitle: 'Stufati e Cottura in Umido',
  sec6MoistTextHtml:
    'Il coperchio intrappola il vapore e conserva i succhi nel fondo di cottura, mantenendo rese alte del <strong>76% – 79%</strong>.',
  sec6SousVideTitle: 'Precisione Sous-Vide',
  sec6SousVideTextHtml:
    'Il sacchetto sottovuoto impedisce ogni evaporazione verso l’aria, raggiungendo rese massime dell’<strong>81% – 85%</strong>.',
  sec6DonenessTitle: 'Gradi di Cottura del Manzo e Resa',
  donenessRows: [
    { name: 'Al Sangue (52°C)', yield: '88–90% Resa' },
    { name: 'Media Cottura (57°C)', yield: '80–84% Resa' },
    { name: 'Ben Cotto (63°C)', yield: '74–78% Resa' },
    { name: 'Molto Cotto (74°C+)', yield: '62–66% Resa' },
  ],

  sec7Title: '7. Ossa, Pelle e Iniezioni Industriali d’Acqua',
  sec7BoneTitle: 'Tagli Con Osso vs. Disossati',
  sec7BoneText:
    'Le ossa non apportano calorie commestibili. Medie del peso osseo: petto con osso (20-25%), ali di pollo (45-50%), fiorentina / T-bone (15-20%), costine di maiale (35-40%). Pesa la carne con osso prima di mangiare, pesa le ossa pulite al termine e sottrai per ottenere la polpa edibile effettiva.',
  sec7InjectionTitle: 'Iniezioni d’Acqua nel Pollame Industriale',
  sec7InjectionText:
    'Molti petti di pollo da supermercato contengono fino al 15% di soluzione salina iniettata. Durante la cottura l’acqua fuoriesce rapidamente, facendo salire il calo peso fino al 35%. Carni raffreddate ad aria e prive di additivi garantiscono conversioni fedeli agli standard USDA.',

  sec8Title: '8. Rigore dei Dati Scientifici: Lo Standard USDA',
  sec8Text:
    'Tutti i valori di resa di questo calcolatore provengono dalle ricerche di laboratorio dell’Agricultural Research Service dell’USDA (ARS), nello specifico la Tabella delle Rese di Cottura delle Carni, l’Handbook nº 102 e USDA FoodData Central. Dati analitici che evitano gli errori tipici dei database collaborativi.',

  sec9Title: '9. Buone Pratiche in Cucina',
  sec9TipsHtml: [
    '<strong>Usa una Bilancia Digitale:</strong> Precisione a 1 g con funzione tara immediata.',
    '<strong>Registra i Grassi di Cottura Separatamente:</strong> Calcola oli e burro sempre a parte rispetto al calo peso della carne.',
    '<strong>Mantieni la Costanza:</strong> Adottare lo stesso metodo settimana dopo settimana è il presupposto per monitorare con successo i tuoi progressi fisici.',
  ],

  footerTeam: 'Team Editoriale e Scientifico: Raw to Cooked Calculator',
  footerSource: 'Basato sui manuali agrari ufficiali del Dipartimento dell’Agricoltura degli Stati Uniti (USDA). Aggiornato a Ottobre 2026.',
  footerMethodology: 'Visualizza la Metodologia Completa →',
  footerAbout: 'Chi Siamo',
};
