import type { GuideContent } from './types';

export const deGuide: GuideContent = {
  badge: 'Wissenschaftlicher Leitfaden & Referenztabelle',
  title: 'Der Komplette Leitfaden zu Roh- vs. Gargefleisch-Gewichten, Feuchtigkeitsverlust und Nährstoffpräzision',
  intro:
    'Jeder, der schon einmal Mahlzeiten zubereitet, eine Küchenwaage benutzt oder Kalorien in einer Tracking-App erfasst hat, weiß: Gekochtes Essen wiegt nach der Zubereitung nicht mehr dasselbe wie im rohen Zustand. Fleisch und Fisch schrumpfen und verlieren durch Verdampfung und Fettschmelze bis zu einem Drittel ihres Ausgangsgewichts, während Getreide, Reis, Nudeln und Hülsenfrüchte kochendes Wasser aufsaugen und ihr Volumen verdoppeln oder verdreifachen. Diese fundierte Referenz erklärt die Thermodynamik kulinarischer Garverluste, universelle Umrechnungsformeln, offizielle USDA-Zahlen und praxiserprobte Methoden für Meal Prep und exaktes Makro-Tracking.',

  sec1Title: '1. Zellbiologie und Thermodynamik der Garverluste',
  sec1Intro:
    'Der Gewichtsunterschied zwischen rohen und gekochten Lebensmitteln ist kein Zufall, sondern ein direktes Ergebnis von Zellbiologie und Thermodynamik. Jedes vollwertige Lebensmittel besteht aus Wasser, Proteinen, Lipiden, Kohlenhydraten, Ballaststoffen und Mineralstoffen. Hitze verändert die physikalische Struktur dieser Bestandteile tiefgreifend und führt zum Austritt oder zur Einlagerung von Feuchtigkeit und Fett.',
  sec1ProteinTitle: 'Proteindenaturierung bei Fleisch und Fisch',
  sec1ProteinText:
    'Rohes Muskelgewebe besteht zu etwa 70 % bis 75 % aus Wasser, das in einem Netz von Myofibrillen (Myosin und Aktin) gebunden ist. Bei Hitzezufuhr geschehen folgende Prozesse:',
  sec1ProteinBullets: [
    'Bei 40 °C bis 55 °C: Myosin-Proteine denaturieren und entfalten sich, wodurch die Muskelfasern im Durchmesser querkontrahieren.',
    'Bei 60 °C bis 66 °C: Das kollagene Bindegewebe zieht sich längs zusammen. Das zwischen den Zellen gebundene Wasser wird wie aus einem zusammengedrückten Schwamm herausgepresst.',
    'Über 74 °C: Aktin denaturiert vollständig, verhärtet die Faserstruktur und treibt verbleibende Zellsäfte in den Dampfzustand. Dadurch wiegt gegartes Fleisch 15 % bis 35 % weniger als im Rohzustand.',
  ],
  sec1StarchTitle: 'Stärkeverkleisterung bei Getreide und Hülsenfrüchten',
  sec1StarchText:
    'Trockene stärkehaltige Lebensmittel wie weißer Reis, brauner Reis, Haferflocken, Linsen und trockene Pasta kommen mit weniger als 12 % Restfeuchte in den Kochtopf. Im kochenden Wasser passiert folgendes:',
  sec1StarchBullets: [
    'Kapillare Hydratation: Wassermoleküle dringen durch mikroskopische Poren in die semikristallinen Stärkekörner ein.',
    'Verkleisterungsschwelle (60 °C–85 °C): Wasserstoffbrücken von Amylose und Amylopektin brechen auf, wodurch die Stärkekörner massiv Wasser binden und aufquellen.',
    'Massevervielfachung: Da das Wasser im Gelnetzwerk gebunden bleibt, verdoppelt bis verdreifacht sich das Gewicht (Faktor 2,2× bis 3,5×). Gekochter Reis besteht zu 65 % bis 70 % aus reinem Wasser.',
  ],
  sec1VegText:
    'Gemüse unterliegt einem dritten Mechanismus. Sorten wie Spinat und Zucchini enthalten enorme Wassermengen in ihren Zellvakuolen. Hitze löst das Strukturpektin der Zellwände und zerstört die Luftkammern zwischen den Zellen. Bei Spinat führt dies zu einem optischen Volumeneinbruch von 80 % bis 90 %, obwohl der reale Gewichtsverlust nur 23 % beträgt. Wurzelgemüse wie Kartoffeln verlieren beim Kochen mit Schale kaum Gewicht (nur ca. 6 %), da die Stärkeverkleisterung die Verdampfung ausgleicht.',

  sec2Title: '2. Das Universelle Mathematische Umrechnungssystem',
  sec2Intro:
    'Die exakte Umrechnung basiert auf einer einzigen wissenschaftlichen Messgröße: dem Garertrag in Prozent (Yield %). Ermittelt durch jahrzehntelange Laboranalysen des US-Landwirtschaftsministeriums (USDA), beziffert der Garertrag das Verhältnis von fertigem essbarem Gargewicht zu rohem Ausgangsgewicht:',
  sec2EquationLabel: 'Grundlegende Ertragsformel',
  sec2Equation: 'Garertrag % = (Gargewicht ÷ Rohgewicht) × 100',
  sec2SubIntro:
    'Mit diesem Prozentsatz lässt sich jedes Lebensmittel in beide Richtungen fehlerfrei umrechnen:',
  sec2FormulaATitle: 'Formel A: Rohes Gewicht in Gargekochtes Gewicht umrechnen',
  sec2FormulaADesc:
    'Nutzen Sie diese Formel beim Vorkochen, der Einkaufsplanung oder beim Zubereiten roher Packungsgrößen:',
  sec2FormulaACode: 'Gargewicht = Rohgewicht × (Garertrag % ÷ 100)',
  sec2FormulaAExampleHtml:
    '<strong>Schritt-für-Schritt-Beispiel:</strong> Sie haben 250 g rohe Hähnchenbrust (USDA-Ertrag = 72 %):<br /><code>Gekocht = 250 g × 0,72 = 180 g</code>. Ihr rohes Fleisch ergibt 180 g gegartes Fleisch auf dem Teller.',
  sec2FormulaBTitle: 'Formel B: Gargekochtes Gewicht in Rohes Äquivalent umrechnen',
  sec2FormulaBDesc:
    'Nutzen Sie diese Formel, wenn Sie bereits fertiges Essen wiegen (z. B. Meal Prep oder im Restaurant) und für Ihre Nährwert-App das rohe Äquivalent ermitteln müssen:',
  sec2FormulaBCode: 'Rohgewicht-Äquivalent = Gargewicht ÷ (Garertrag % ÷ 100)',
  sec2FormulaBExampleHtml:
    '<strong>Schritt-für-Schritt-Beispiel:</strong> Sie wiegen 150 g gebratenes 80/20 Rinderhackfleisch (USDA-Ertrag = 73 %):<br /><code>Roh = 150 g ÷ 0,73 = 205,5 g</code>. Sie haben das Nährwert-Äquivalent von 205,5 g rohem Hackfleisch gegessen.',
  sec2ShrinkageNoteHtml:
    '<strong>Garverlust (Schrumpfung):</strong> Bei Fleisch beträgt der Masseverlust <code>100 % − Garertrag %</code>. Bei 72 % Ertrag schrumpft Hähnchenbrust um <code>100 % − 72 % = 28 %</code>. Bei Getreide mit über 100 % Ertrag ist der Faktor größer als 1,0 (z. B. weißer Reis mit 300 % Ertrag verdreifacht sich / 3,0× Multiplikator).',

  sec3Title: '3. Meistertabelle der Küchengewichte (USDA-Validierte Werte)',
  sec3Intro:
    'Vollständige Übersicht für Geflügel, Rind, Schwein, Fisch, Getreide, Hülsenfrüchte und Gemüse nach USDA Handbook No. 102 und der USDA Cooking Yields Table:',
  sec3ColFood: 'Lebensmittel',
  sec3ColMethod: 'Zubereitungsmethode',
  sec3ColYield: 'USDA-Ertrag',
  sec3ColRtc: 'Roh→Gargekocht',
  sec3ColCtr: 'Gargekocht→Roh',
  sec3ColMoisture: 'Wasser-/Masseänderung',
  sec3ColNotes: 'Praxishinweis',
  tableRows: [
    { food: 'Hähnchenbrust (Ohne Haut/Knochen)', method: 'Ofen / Grill', yieldPct: '72%', rtc: '× 0,72', ctr: '÷ 0,72', moisture: '−28%', notes: '200 g roh ergeben ~144 g gegart' },
    { food: 'Hähnchenkeule (Ohne Haut/Knochen)', method: 'Braten / Pfanne', yieldPct: '74%', rtc: '× 0,74', ctr: '÷ 0,74', moisture: '−26%', notes: 'Hält mehr Fett als Brustfleisch' },
    { food: 'Hähnchenflügel (Mit Knochen)', method: 'Ofen / Air Fryer', yieldPct: '55%', rtc: '× 0,55', ctr: '÷ 0,55', moisture: '−45%', notes: 'Knochen machen ca. 40 % aus' },
    { food: 'Putenhackfleisch (93/7 Mager)', method: 'Bratpfanne', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: '200 g roh ergeben ~156 g gegart' },
    { food: 'Rinderhackfleisch (80/20)', method: 'Pfanne / Grill', yieldPct: '73%', rtc: '× 0,73', ctr: '÷ 0,73', moisture: '−27%', notes: '200 g roh ergeben ~146 g gegart' },
    { food: 'Rinderhackfleisch (90/10 Mager)', method: 'Bratpfanne', yieldPct: '81%', rtc: '× 0,81', ctr: '÷ 0,81', moisture: '−19%', notes: 'Mageres Hackfleisch verliert weniger' },
    { food: 'Rumpsteak / Rinderfilet', method: 'Medium Gebraten', yieldPct: '75%', rtc: '× 0,75', ctr: '÷ 0,75', moisture: '−25%', notes: 'Gegart auf 63 °C Kerntemperatur' },
    { food: 'Ribeye / Entrecôte', method: 'Grill / Pfanne', yieldPct: '71%', rtc: '× 0,71', ctr: '÷ 0,71', moisture: '−29%', notes: 'Marmoriertes Fett schmilzt aus' },
    { food: 'Schweinekotelett (Lachs)', method: 'Pfanne / Ofen', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: 'Gegart auf 63 °C Kerntemperatur' },
    { food: 'Schweinefilet', method: 'Ofenbraten', yieldPct: '77%', rtc: '× 0,77', ctr: '÷ 0,77', moisture: '−23%', notes: 'Mageres zartes Fleisch' },
    { food: 'Frühstücksspeck (Bacon)', method: 'Bratpfanne', yieldPct: '33%', rtc: '× 0,33', ctr: '÷ 0,33', moisture: '−67%', notes: 'Massives Ausschmelzen von Fett' },
    { food: 'Lachsfilet (Atlantik)', method: 'Ofen / Pfanne', yieldPct: '85%', rtc: '× 0,85', ctr: '÷ 0,85', moisture: '−15%', notes: 'Omega-3-Fette bleiben im Fisch' },
    { food: 'Weißfisch (Kabeljau / Seelachs)', method: 'Ofen / Dämpfen', yieldPct: '80%', rtc: '× 0,80', ctr: '÷ 0,80', moisture: '−20%', notes: 'Zarte Faserstruktur' },
    { food: 'Rohe Garnelen (Geschält)', method: 'Braten / Kochen', yieldPct: '75%', rtc: '× 0,75', ctr: '÷ 0,75', moisture: '−25%', notes: '200 g roh ergeben ~150 g gegart' },
    { food: 'Thunfisch in Dose (Im eigenen Saft)', method: 'Abgetropft', yieldPct: '68%', rtc: '× 0,68', ctr: '÷ 0,68', moisture: '−32%', notes: '142-g-Dose ergibt ~97 g Einwaage' },
    { food: 'Weißer Reis (Langkorn / Basmati)', method: 'Kochen / Dämpfen', yieldPct: '300%', rtc: '× 3,00', ctr: '÷ 3,00', moisture: '+200%', notes: '100 g roh ergeben 300 g gekocht' },
    { food: 'Naturreis / Vollkornreis', method: 'Kochen', yieldPct: '270%', rtc: '× 2,70', ctr: '÷ 2,70', moisture: '+170%', notes: 'Samenschale hemmt Wasseraufnahme' },
    { food: 'Hartweizennudeln (Spaghetti)', method: 'Al Dente Gekocht', yieldPct: '225%', rtc: '× 2,25', ctr: '÷ 2,25', moisture: '+125%', notes: '100 g trocken ergeben ~225 g gekocht' },
    { food: 'Haferflocken (Porridge)', method: 'In Wasser Gekocht', yieldPct: '300%', rtc: '× 3,00', ctr: '÷ 3,00', moisture: '+200%', notes: '50 g trocken ergeben 150 g Brei' },
    { food: 'Stahlhafer (Steel Cut Oats)', method: 'Geköchelt', yieldPct: '350%', rtc: '× 3,50', ctr: '÷ 3,50', moisture: '+250%', notes: 'Nimmt mehr Flüssigkeit auf' },
    { food: 'Quinoa (Trocken)', method: 'Gekocht', yieldPct: '310%', rtc: '× 3,10', ctr: '÷ 3,10', moisture: '+210%', notes: '100 g trocken ergeben 310 g gekocht' },
    { food: 'Braune / Grüne Linsen', method: 'Gekocht', yieldPct: '290%', rtc: '× 2,90', ctr: '÷ 2,90', moisture: '+190%', notes: '100 g trocken ergeben 290 g gekocht' },
    { food: 'Schwarze Bohnen (Trocken)', method: 'Eingeweicht & Gekocht', yieldPct: '240%', rtc: '× 2,40', ctr: '÷ 2,40', moisture: '+140%', notes: 'Vergrößert sich auf das 2,4-fache' },
    { food: 'Frischer Spinat', method: 'Gedämpft / Blanchiert', yieldPct: '77%', rtc: '× 0,77', ctr: '÷ 0,77', moisture: '−23%', notes: 'Verliert 80 % Volumen, 23 % Masse' },
    { food: 'Brokkoliröschen', method: 'Gedämpft / Gekocht', yieldPct: '100%', rtc: '× 1,00', ctr: '÷ 1,00', moisture: '0%', notes: 'Oberflächenwasser gleicht Verlust aus' },
    { food: 'Ganze Kartoffeln', method: 'Gekocht / Ofen', yieldPct: '94%', rtc: '× 0,94', ctr: '÷ 0,94', moisture: '−6%', notes: 'Schale hält Innendampf fest' },
    { food: 'Süßkartoffeln (Gewürfelt)', method: 'Im Ofen Geröstet', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: 'Rösten konzentriert den Zuckergehalt' },
  ],

  sec4Title: '4. Energieerhaltungssatz der Makronährstoffe & Tracking-Fallen',
  sec4Intro:
    'Einer der hartnäckigsten Irrtümer im Fitnessbereich ist die Annahme, Kochen würde Nährstoffe oder Kalorien in Luft auflösen. Die Gesetze der Physik beweisen das Gegenteil: Nach dem Massenerhaltungssatz verschwindet keine Materie spurlos.',
  sec4CardTitle: 'Was Entweicht Wirklich aus der Pfanne?',
  sec4CardText:
    'Wenn Fleisch brutzelt, ist der aufsteigende weiße Dampf reines Wasser (H2O). Wasser hat exakt null Kalorien, null Gramm Eiweiß, null Gramm Kohlenhydrate und null Gramm Fett. Die lebenswichtigen Aminosäuren des Fleisches verdampfen nicht.',
  sec4RawLabel: 'Rohe Hähnchenbrust (100 g):',
  sec4RawCals: '120 Kalorien',
  sec4RawProtein: '22,5 g Eiweiß',
  sec4RawFat: '2,6 g Fett • 0 g Kohlenhydrate',
  sec4CookedLabel: 'Gekochtes Gewicht (~72 g):',
  sec4CookedCals: '120 Kalorien (Unverändert)',
  sec4CookedProtein: '22,5 g Eiweiß (Unverändert)',
  sec4CookedFat: '2,6 g Fett • 0 g Kohlenhydrate',
  sec4CardSummaryHtml:
    'Da 28 g kalorienfreies Wasser verdampft sind, ist das gegarte Fleisch pro Gramm deutlich nährstoffdichter: Es liefert rund <strong>31,25 g Eiweiß pro 100 g gegart</strong>, verglichen mit nur <strong>22,5 g pro 100 g roh</strong>.',
  sec4TrapTitle: 'Die Fatale Falle bei Fitness-Apps',
  sec4TrapP1:
    'Beliebte Ernährungs-Apps wie MyFitnessPal, MacroFactor oder Lose It! hinterlegen Vollwertkost standardmäßig als Rohgewicht. Wenn jemand 150 g gebratenes Hähnchen auf den Teller legt und den Eintrag „Hähnchenbrust“ auswählt, nimmt die App an, es handele sich um 150 g rohes Fleisch.',
  sec4TrapP2Html:
    'In Wahrheit stammen 150 g gegartes Hähnchen von <code>150 g ÷ 0,72 = 208 g</code> rohem Fleisch. Man hat 250 Kalorien und 46,8 g Eiweiß gegessen, aber nur 180 Kalorien und 33,8 g Eiweiß eingetragen. In einer Mahlzeit fehlen <strong>70 Kalorien und 13 g Eiweiß</strong>. Über den Tag summiert sich das auf 200 bis 300 unbemerkte Kalorien – der Grund, warum viele Diäten scheitern!',
  sec4TrapP3:
    'Bei Reis passiert der umgekehrte Fehler: Wer 200 g gekochten Reis als rohen Trockenreis trackt, bucht irrtümlich 730 statt 245 Kalorien ein – ein Scheingewinn von fast 500 Kalorien.',

  sec5Title: '5. Meal Prep & Das Topf-Dilemma bei Mehrportionengerichten',
  sec5Intro:
    'Wer Mahlzeiten für die ganze Woche vorkocht, kann Zutaten nicht einzeln pro Teller wiegen. Wie teilt man einen Schmortopf mit 1,5 kg Hähnchen, 400 g Reis und Gemüse mathematisch exakt auf?',
  sec5Strat1Title: 'Strategie 1: Die Tara-Gargewicht-Methode',
  sec5Strat1Desc: 'Ideal für variable Portionsgrößen:',
  sec5Strat1StepsHtml: [
    '<strong>Leertopf wiegen:</strong> Den leeren Topf vor dem Kochen wiegen (z. B. 1.000 g).',
    '<strong>Rohe Makros summieren:</strong> Kalorien und Eiweiß aller Rohzutaten addieren (z. B. 2.400 kcal, 200 g Eiweiß).',
    '<strong>Fertigen Topf wiegen:</strong> Vollen Topf nach dem Kochen wiegen (z. B. 3.000 g brutto) und Tara abziehen: <code>3.000 g − 1.000 g = 2.000 g Netto-Gargewicht</code>.',
    '<strong>Dichte berechnen:</strong> Rohe Makros durch gegarte Gramm teilen: <code>2.400 kcal ÷ 2.000 g = 1,2 kcal/g</code>.',
    '<strong>Portionieren:</strong> Beliebige Portion schöpfen (z. B. 300 g): <code>300 g × 1,2 = 360 kcal</code>.',
  ],
  sec5Strat2Title: 'Strategie 2: Gleichmäßige Dosen-Aufteilung',
  sec5Strat2Desc:
    'Wenn Sie 5 identische Portionen für sich selbst kochen, verteilen Sie das Gericht gleichmäßig auf 5 Dosen. Tragen Sie täglich 1/5 (20 %) der rohen Gesamtzutaten ein. Der Wochendurchschnitt bleibt zu 100 % exakt.',

  sec6Title: '6. Einfluss von Zubereitungsart und Kerntemperatur',
  sec6Intro: 'Die gewählte Hitzequelle und Gartemperatur beeinflussen die Feuchtigkeit direkt:',
  sec6DryTitle: 'Heißluftfritteuse & Grill',
  sec6DryTextHtml:
    'Starke Luftzirkulation oder offenes Feuer beschleunigen die Verdunstung und senken den Ertrag auf <strong>65 % – 68 %</strong>.',
  sec6MoistTitle: 'Schmoren & Dünsten',
  sec6MoistTextHtml:
    'Der geschlossene Deckel fängt Dampf auf und hält Zellsäfte in der Soße. Hoher Ertrag: <strong>76 % – 79 %</strong>.',
  sec6SousVideTitle: 'Sous-Vide Präzision',
  sec6SousVideTextHtml:
    'Der Vakuumbeutel verhindert jeden Verdampfungsverlust vollständig. Höchster Ertrag: <strong>81 % – 85 %</strong>.',
  sec6DonenessTitle: 'Rindfleisch-Garstufen & Garverlust',
  donenessRows: [
    { name: 'Rare (52 °C)', yield: '88–90% Ertrag' },
    { name: 'Medium Rare (57 °C)', yield: '80–84% Ertrag' },
    { name: 'Medium (63 °C)', yield: '74–78% Ertrag' },
    { name: 'Well Done (74 °C+)', yield: '62–66% Ertrag' },
  ],

  sec7Title: '7. Knochen, Haut und Industrielle Wasserinjektion',
  sec7BoneTitle: 'Fleisch mit Knochen vs. Knochenlos',
  sec7BoneText:
    'Knochen liefern null verwertbare Kalorien. Durchschnittliche Knochenanteile: Hähnchenbrust mit Knochen (20-25%), Hähnchenflügel (45-50%), T-Bone-Steak (15-20%), Spareribs (35-40%). Fleisch mit Knochen vor dem Essen wiegen, saubere Knochen danach wiegen und die Differenz als essbare Masse erfassen.',
  sec7InjectionTitle: 'Wasserzusätze bei Supermarktfleisch',
  sec7InjectionText:
    'Viele Geflügelprodukte aus dem Handel werden mit bis zu 15 % Salzlake injiziert. Beim Braten tritt dieses Wasser massiv aus, wodurch der Schrumpfwert auf bis zu 35 % ansteigt. Luftgekühltes Fleisch ohne Zusätze entspricht den USDA-Standards verlässlich.',

  sec8Title: '8. Wissenschaftliche Datenbasis: Der USDA-Standard',
  sec8Text:
    'Alle Ertragswerte dieses Rechners stammen aus Laboruntersuchungen des Agricultural Research Service (ARS) des USDA, namentlich der Table of Cooking Yields for Meat and Poultry, dem Agriculture Handbook No. 102 und FoodData Central. Verlässliche Labormessungen, die Fehleingaben aus Fitness-Communitys ausschließen.',

  sec9Title: '9. Best Practices in der Küche',
  sec9TipsHtml: [
    '<strong>Digitale Küchenwaage verwenden:</strong> 1-Gramm-Genauigkeit mit sofortiger Tara-Taste.',
    '<strong>Bratfette separat notieren:</strong> Öle und Butter stets unabhängig vom Fleischgewicht berechnen.',
    '<strong>Konstanz bewahren:</strong> Wer jede Woche dieselbe Methode anwendet, erzielt verlässliche Ergebnisse beim Körperfortschritt.',
  ],

  footerTeam: 'Redaktion & Wissenschaft: Raw to Cooked Calculator',
  footerSource: 'Basierend auf offiziellen USDA-Agrarhandbüchern und FoodData Central. Aktualisiert im Oktober 2026.',
  footerMethodology: 'Zur vollständigen Methodik →',
  footerAbout: 'Über uns',
};
