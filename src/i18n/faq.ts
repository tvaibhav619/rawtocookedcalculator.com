import type { Locale } from './ui';
import { FOOD_FAQ_ES_BY_ID } from './faq-food/es';
import { FOOD_FAQ_FR_BY_ID } from './faq-food/fr';
import { FOOD_FAQ_DE_BY_ID } from './faq-food/de';
import { FOOD_FAQ_PT_BY_ID } from './faq-food/pt';
import { FOOD_FAQ_IT_BY_ID } from './faq-food/it';

/**
 * FAQ copy, per locale.
 *
 * Food-page questions are templates. Available placeholders:
 *   {food} / {Food}  the food, phrased for mid-sentence use in this locale
 *                    (romance locales include the definite article; {Food} is
 *                    the same phrase with a capital first letter)
 *   {pct}            USDA yield percentage
 *   {loss}           100 − yield, for foods that shrink
 *   {mult}           yield ÷ 100, one decimal, for foods that expand
 *
 * Templates deliberately keep {food} in object position — never after a
 * preposition — so that es/fr/pt/it articles never need to contract (del, du,
 * do, nel) and verbs never have to agree with a plural food name.
 */

export interface FaqItem {
  q: string;
  a: string;
}

export interface FoodFaqSet {
  /** chicken-breast only */
  chicken: FaqItem[];
  /** grains, pasta and legumes */
  grains: FaqItem[];
  /** appended for white rice */
  rice: FaqItem[];
  /** everything else */
  generic: FaqItem[];
  /** appended for spinach */
  spinach: FaqItem[];
}

// ── Homepage FAQ ───────────────────────────────────────────────────────────

export const HOME_FAQ: Record<Locale, FaqItem[]> = {
  en: [
    {
      q: 'How does a raw to cooked meat weight conversion calculator work?',
      a: 'A raw to cooked meat weight conversion calculator applies scientific USDA cooking yield percentages to compute exact weight changes during cooking. Meats lose between 15% and 35% of their mass through water evaporation and rendered fat. By entering raw or cooked weight, the calculator uses the formula Cooked = Raw × (Yield ÷ 100) to determine exact edible servings and ensure accurate macro logging.',
    },
    {
      q: 'Are nutrition labels based on raw or cooked weight?',
      a: 'Almost all packaged nutrition labels and databases — including USDA FoodData Central — list values based on raw weight unless the label explicitly says "cooked." This is the single most common source of tracking errors: the gram amounts on the label describe raw food, but most people weigh after cooking.',
    },
    {
      q: 'Do calories and macros change when food is cooked?',
      a: 'The total calories and macronutrients in the food do not change from cooking itself. What changes is the weight: water (and sometimes fat) is lost during cooking or absorbed from it. That means the same amount of protein, carbs, and fat is now packed into fewer grams for foods that shrink, or spread across more grams for foods that expand like rice. The food becomes more calorie-dense per gram when it shrinks, and less dense when it expands — but the absolute nutrient totals stay the same.',
    },
    {
      q: 'Should I weigh my food raw or cooked when tracking macros?',
      a: 'Weighing raw is generally more accurate and consistent, especially for meat, since cooking time and method both affect the final cooked weight in ways that are hard to predict. For rice, pasta, and other grains, many people prefer weighing cooked since they batch-cook and portion afterward — that works fine as long as you match the weight to the right database entry (dry/raw vs. cooked). The key is consistency: pick one approach and make sure the app entry you are using matches it.',
    },
    {
      q: 'Why do different apps show different calorie counts for the same food?',
      a: 'The most common reason is that one entry is for raw weight and another is for cooked weight of the same food. Because cooking changes how much water is in the food, the calories per gram differ significantly between raw and cooked entries. It is easy to accidentally select the wrong one. Always check whether the specific database entry you are using says raw or cooked before logging.',
    },
    {
      q: 'Is there a quick way to estimate this without a calculator?',
      a: 'A rough rule of thumb: for baked or roasted chicken breast, divide the cooked weight by about 0.72 to estimate the raw equivalent. But the exact percentage varies by food and cooking method — ground beef, pork, fish, vegetables, and grains all have different yield percentages, and even the same food behaves differently depending on how it is cooked. That is why a per-food calculator like this one gives more accurate results than any single blanket estimate.',
    },
    {
      q: 'How much raw meat do I need per person?',
      a: 'A common planning guideline is roughly 4–6 oz (110–170g) of raw protein per person for a standard meal. This is a general serving-size estimate, separate from the cooking yield data — the actual cooked portion will be smaller due to moisture loss. You can use the calculator to work out how much raw protein to start with for any number of servings.',
    },
    {
      q: 'Why is cooked weight lower for meat but higher for rice?',
      a: 'Meat starts full of water and loses it to heat; dry grains start with almost none and soak it up. Meat, poultry, seafood, and most vegetables are already water-rich, so heat drives that moisture out and the food loses weight. Dry grains, pasta, and legumes absorb water during boiling, so their weight goes up. There is no single universal rule — it comes down to the food’s starting water content and how it meets heat and liquid during cooking.',
    },
    {
      q: 'What does yield percentage mean in cooking?',
      a: 'Yield percentage is the cooked weight expressed as a percentage of the raw weight. A yield of 75% means 100g of raw food becomes 75g after cooking — the food lost weight. A yield above 100% means the food gained weight; for example, white rice has a yield of 300%, meaning 100g dry becomes roughly 300g cooked. Any number below 100% indicates weight loss (most meats and vegetables); any number above 100% indicates weight gain (grains, pasta, legumes). This is the same figure shown in the formula section on this page.',
    },
    {
      q: 'How accurate are these yield percentages?',
      a: 'These are research-based averages from USDA data, not a guarantee for your specific piece of food. Actual results vary by exact cut, size, starting moisture content, and how precisely you control the cooking method — variables that differ every time you cook. The goal is to get you meaningfully closer to accurate than not accounting for cooking loss at all, not to deliver laboratory precision. For most tracking purposes, the error from using these averages is far smaller than the error from assuming raw and cooked weights are the same.',
    },
  ],

  es: [
    {
      q: '¿Las etiquetas nutricionales se refieren al peso crudo o al cocido?',
      a: 'Casi todas las etiquetas y bases de datos —incluida USDA FoodData Central— dan los valores sobre el peso crudo, salvo que la etiqueta diga expresamente «cocido». Esta es, con diferencia, la causa más común de errores al contar: los gramos de la etiqueta describen el alimento crudo, pero la mayoría de la gente pesa después de cocinar.',
    },
    {
      q: '¿Las calorías y los macros cambian al cocinar el alimento?',
      a: 'Cocinar no cambia el total de calorías ni de macronutrientes del alimento. Lo que cambia es el peso: durante la cocción se pierde agua (y a veces grasa) o se absorbe. Es decir, la misma cantidad de proteína, carbohidratos y grasa queda concentrada en menos gramos cuando el alimento encoge, o repartida en más gramos cuando se expande, como el arroz. El alimento se vuelve más denso en calorías por gramo al encoger y menos denso al expandirse, pero los totales absolutos de nutrientes no varían.',
    },
    {
      q: '¿Debo pesar la comida en crudo o cocida para contar macros?',
      a: 'Pesar en crudo suele ser más preciso y constante, sobre todo con la carne, porque el tiempo y el método de cocción afectan al peso final de formas difíciles de prever. Con el arroz, la pasta y otros cereales, mucha gente prefiere pesar en cocido porque cocina en tandas y luego reparte en porciones: eso funciona bien siempre que el peso corresponda a la entrada correcta de la base de datos (seco/crudo o cocido). La clave es la constancia: elige un método y asegúrate de que la entrada de la app coincide con él.',
    },
    {
      q: '¿Por qué distintas apps muestran calorías diferentes para el mismo alimento?',
      a: 'La razón más habitual es que una entrada corresponde al peso crudo y otra al peso cocido del mismo alimento. Como la cocción cambia la cantidad de agua, las calorías por gramo difieren bastante entre una y otra. Es muy fácil escoger la equivocada sin darse cuenta. Antes de registrar, comprueba siempre si la entrada concreta que estás usando dice «crudo» o «cocido».',
    },
    {
      q: '¿Hay una forma rápida de estimarlo sin calculadora?',
      a: 'Una regla aproximada: para pechuga de pollo al horno o asada, divide el peso cocido entre 0,72 para estimar el equivalente en crudo. Pero el porcentaje exacto varía según el alimento y el método de cocción: la carne molida, el cerdo, el pescado, las verduras y los cereales tienen rendimientos distintos, y un mismo alimento se comporta de otra manera según cómo se cocine. Por eso una calculadora por alimento como esta da resultados más precisos que cualquier estimación general.',
    },
    {
      q: '¿Cuánta carne cruda necesito por persona?',
      a: 'Una guía habitual de planificación es de unos 110 a 170 g de proteína cruda por persona para una comida normal. Es una estimación general de ración, independiente de los datos de rendimiento: la porción ya cocida será más pequeña por la pérdida de humedad. Puedes usar la calculadora para saber con cuánta proteína cruda empezar según el número de raciones.',
    },
    {
      q: '¿Por qué el peso cocido es menor en la carne pero mayor en el arroz?',
      a: 'La carne parte llena de agua y la pierde con el calor; los cereales secos apenas tienen y la absorben. La carne, las aves, el pescado y la mayoría de las verduras ya contienen mucha agua, así que el calor la expulsa y el alimento pierde peso. Los cereales secos, la pasta y las legumbres absorben agua al hervir, de modo que ganan peso. No hay una regla universal: depende del agua que contenga el alimento de partida y de cómo se encuentre con el calor y el líquido durante la cocción.',
    },
    {
      q: '¿Qué significa el porcentaje de rendimiento en cocina?',
      a: 'El porcentaje de rendimiento es el peso cocido expresado como porcentaje del peso crudo. Un rendimiento del 75% significa que 100 g de alimento crudo se quedan en 75 g después de cocinarlo: el alimento perdió peso. Un rendimiento superior al 100% significa que ganó peso; por ejemplo, el arroz blanco tiene un rendimiento del 300%, es decir, 100 g en seco pasan a unos 300 g cocidos. Cualquier cifra por debajo del 100% indica pérdida de peso (casi todas las carnes y verduras) y cualquier cifra por encima indica ganancia (cereales, pasta, legumbres). Es el mismo dato que aparece en la sección de fórmulas de esta página.',
    },
    {
      q: '¿Qué tan precisos son estos porcentajes de rendimiento?',
      a: 'Son promedios basados en investigación con datos del USDA, no una garantía para tu pieza concreta de alimento. Los resultados reales varían según el corte exacto, el tamaño, la humedad inicial y lo bien que controles el método de cocción, variables que cambian cada vez que cocinas. El objetivo es acercarte mucho más a la realidad que si ignoraras por completo la pérdida por cocción, no ofrecerte precisión de laboratorio. Para casi cualquier seguimiento, el error de usar estos promedios es muchísimo menor que el de suponer que el peso crudo y el cocido son iguales.',
    },
  ],

  fr: [
    {
      q: 'Les étiquettes nutritionnelles se basent-elles sur le poids cru ou cuit ?',
      a: 'Presque toutes les étiquettes et bases de données — y compris USDA FoodData Central — indiquent des valeurs pour le poids cru, sauf mention explicite « cuit ». C’est de loin la première source d’erreurs de suivi : les grammes de l’étiquette décrivent l’aliment cru, alors que la plupart des gens pèsent après cuisson.',
    },
    {
      q: 'Les calories et les macros changent-elles à la cuisson ?',
      a: 'La cuisson en elle-même ne modifie pas le total de calories ni de macronutriments. Ce qui change, c’est le poids : de l’eau (et parfois de la graisse) est perdue pendant la cuisson, ou au contraire absorbée. La même quantité de protéines, de glucides et de lipides se retrouve donc concentrée dans moins de grammes pour les aliments qui rétrécissent, ou répartie sur davantage de grammes pour ceux qui gonflent, comme le riz. L’aliment devient plus dense en calories au gramme quand il rétrécit, moins dense quand il gonfle — mais les totaux absolus restent identiques.',
    },
    {
      q: 'Faut-il peser ses aliments crus ou cuits pour suivre ses macros ?',
      a: 'Peser cru est généralement plus précis et plus régulier, surtout pour la viande, car le temps et le mode de cuisson influent sur le poids final de façon difficile à prévoir. Pour le riz, les pâtes et les autres céréales, beaucoup préfèrent peser cuit parce qu’ils cuisinent en grande quantité puis portionnent : cela fonctionne très bien tant que le poids correspond à la bonne entrée de la base de données (sec/cru ou cuit). L’essentiel est la régularité : choisissez une méthode et vérifiez que l’entrée utilisée dans l’application y correspond.',
    },
    {
      q: 'Pourquoi les applications affichent-elles des calories différentes pour le même aliment ?',
      a: 'La raison la plus fréquente : une entrée correspond au poids cru et l’autre au poids cuit du même aliment. Comme la cuisson modifie la quantité d’eau, les calories au gramme diffèrent nettement entre les deux. Il est très facile de sélectionner la mauvaise sans s’en rendre compte. Vérifiez toujours si l’entrée précise que vous utilisez indique « cru » ou « cuit » avant d’enregistrer.',
    },
    {
      q: 'Existe-t-il une méthode rapide pour estimer sans calculateur ?',
      a: 'Une règle approximative : pour un blanc de poulet au four ou rôti, divisez le poids cuit par environ 0,72 pour estimer l’équivalent cru. Mais le pourcentage exact varie selon l’aliment et le mode de cuisson : bœuf haché, porc, poisson, légumes et céréales ont des rendements différents, et un même aliment se comporte autrement selon la cuisson. C’est pourquoi un calculateur par aliment comme celui-ci donne des résultats plus justes que n’importe quelle estimation générale.',
    },
    {
      q: 'Quelle quantité de viande crue prévoir par personne ?',
      a: 'Un repère de planification courant est d’environ 110 à 170 g de protéines crues par personne pour un repas standard. Il s’agit d’une estimation générale de portion, indépendante des données de rendement : la portion cuite sera plus petite en raison de la perte d’humidité. Le calculateur vous permet de déterminer la quantité de viande crue à prévoir pour n’importe quel nombre de parts.',
    },
    {
      q: 'Pourquoi le poids cuit est-il plus faible pour la viande et plus élevé pour le riz ?',
      a: 'La viande part gorgée d’eau et la perd à la chaleur ; les céréales sèches n’en ont presque pas et l’absorbent. Viandes, volailles, poissons et la plupart des légumes sont déjà riches en eau, donc la chaleur la fait partir et l’aliment perd du poids. Les céréales sèches, les pâtes et les légumineuses absorbent l’eau à l’ébullition, donc leur poids augmente. Il n’y a pas de règle universelle : tout dépend de la teneur en eau de départ et de la façon dont l’aliment rencontre la chaleur et le liquide.',
    },
    {
      q: 'Que signifie le pourcentage de rendement en cuisine ?',
      a: 'Le rendement est le poids cuit exprimé en pourcentage du poids cru. Un rendement de 75 % signifie que 100 g d’aliment cru donnent 75 g après cuisson : l’aliment a perdu du poids. Un rendement supérieur à 100 % signifie qu’il en a gagné ; le riz blanc, par exemple, affiche un rendement de 300 %, soit 100 g secs qui deviennent environ 300 g cuits. Toute valeur inférieure à 100 % traduit une perte (la plupart des viandes et des légumes) ; toute valeur supérieure traduit un gain (céréales, pâtes, légumineuses). C’est exactement le chiffre repris dans la section des formules de cette page.',
    },
    {
      q: 'Quelle est la fiabilité de ces pourcentages de rendement ?',
      a: 'Ce sont des moyennes issues des données de l’USDA, pas une garantie pour votre morceau précis. Les résultats réels varient selon le morceau exact, la taille, la teneur en eau de départ et la maîtrise du mode de cuisson — des variables qui changent à chaque fois. L’objectif est de vous rapprocher nettement de la réalité par rapport à une absence totale de prise en compte de la perte à la cuisson, pas d’atteindre une précision de laboratoire. Pour la plupart des suivis, l’erreur liée à ces moyennes reste bien inférieure à celle qui consiste à considérer que poids cru et poids cuit sont identiques.',
    },
  ],

  de: [
    {
      q: 'Beziehen sich Nährwertangaben auf das rohe oder das gegarte Gewicht?',
      a: 'Nahezu alle Etiketten und Datenbanken — auch USDA FoodData Central — geben die Werte für das rohe Gewicht an, sofern nicht ausdrücklich „gegart“ dabeisteht. Das ist mit Abstand die häufigste Fehlerquelle beim Tracken: Die Grammangaben auf dem Etikett beschreiben rohe Lebensmittel, gewogen wird aber meist nach dem Garen.',
    },
    {
      q: 'Ändern sich Kalorien und Makros beim Garen?',
      a: 'Die Gesamtmenge an Kalorien und Makronährstoffen ändert sich durch das Garen nicht. Was sich ändert, ist das Gewicht: Wasser (und manchmal Fett) geht verloren oder wird aufgenommen. Dieselbe Menge Protein, Kohlenhydrate und Fett steckt danach in weniger Gramm, wenn das Lebensmittel schrumpft, oder verteilt sich auf mehr Gramm, wenn es aufquillt wie Reis. Beim Schrumpfen steigt die Kaloriendichte pro Gramm, beim Aufquellen sinkt sie — die absoluten Nährstoffmengen bleiben gleich.',
    },
    {
      q: 'Sollte ich meine Lebensmittel roh oder gegart wiegen?',
      a: 'Roh zu wiegen ist in der Regel genauer und konstanter, besonders bei Fleisch, weil Garzeit und Garmethode das Endgewicht auf schwer vorhersehbare Weise beeinflussen. Bei Reis, Nudeln und anderem Getreide wiegen viele lieber gegart, weil sie auf Vorrat kochen und danach portionieren — das funktioniert gut, solange das Gewicht zum passenden Datenbankeintrag gehört (trocken/roh oder gegart). Entscheidend ist die Konsistenz: Leg dich auf eine Methode fest und achte darauf, dass der Eintrag in deiner App dazu passt.',
    },
    {
      q: 'Warum zeigen verschiedene Apps für dasselbe Lebensmittel unterschiedliche Kalorien?',
      a: 'Meist liegt es daran, dass ein Eintrag das rohe und ein anderer das gegarte Gewicht desselben Lebensmittels beschreibt. Da sich der Wassergehalt beim Garen ändert, unterscheiden sich die Kalorien pro Gramm deutlich. Den falschen Eintrag zu erwischen, passiert schnell. Prüfe deshalb vor dem Eintragen immer, ob beim konkreten Eintrag „roh“ oder „gegart“ steht.',
    },
    {
      q: 'Gibt es eine schnelle Schätzung ohne Rechner?',
      a: 'Als grobe Faustregel: Bei im Ofen gegarter oder gebratener Hähnchenbrust teilst du das Gargewicht durch etwa 0,72, um das Rohäquivalent zu schätzen. Der genaue Prozentsatz hängt aber vom Lebensmittel und der Garmethode ab — Hackfleisch, Schwein, Fisch, Gemüse und Getreide haben ganz unterschiedliche Ausbeuten, und dasselbe Lebensmittel verhält sich je nach Zubereitung anders. Deshalb liefert ein Rechner pro Lebensmittel wie dieser genauere Ergebnisse als jede pauschale Schätzung.',
    },
    {
      q: 'Wie viel rohes Fleisch brauche ich pro Person?',
      a: 'Als Planungsgröße gelten etwa 110 bis 170 g rohes Protein pro Person für eine normale Mahlzeit. Das ist eine allgemeine Portionsangabe und hat mit den Ausbeutedaten nichts zu tun — die fertige Portion fällt durch den Feuchtigkeitsverlust kleiner aus. Mit dem Rechner findest du heraus, mit wie viel rohem Fleisch du für eine beliebige Zahl an Portionen starten musst.',
    },
    {
      q: 'Warum ist das Gargewicht bei Fleisch niedriger, bei Reis aber höher?',
      a: 'Fleisch beginnt voller Wasser und verliert es an die Hitze; trockenes Getreide hat fast keines und saugt es auf. Fleisch, Geflügel, Fisch und die meisten Gemüse sind von Haus aus wasserreich, die Hitze treibt es aus und das Gewicht sinkt. Trockenes Getreide, Nudeln und Hülsenfrüchte nehmen beim Kochen Wasser auf, das Gewicht steigt. Eine allgemeingültige Regel gibt es nicht — entscheidend sind der Ausgangswassergehalt und das Zusammenspiel mit Hitze und Flüssigkeit.',
    },
    {
      q: 'Was bedeutet die Ausbeute in Prozent beim Garen?',
      a: 'Die Ausbeute ist das Gargewicht als Prozentsatz des Rohgewichts. Eine Ausbeute von 75 % bedeutet: Aus 100 g roh werden 75 g gegart — das Lebensmittel hat Gewicht verloren. Über 100 % bedeutet Gewichtszunahme; weißer Reis hat zum Beispiel eine Ausbeute von 300 %, aus 100 g trocken werden also rund 300 g gekocht. Alles unter 100 % steht für Verlust (die meisten Fleisch- und Gemüsesorten), alles darüber für Zunahme (Getreide, Nudeln, Hülsenfrüchte). Es ist derselbe Wert wie im Formelabschnitt auf dieser Seite.',
    },
    {
      q: 'Wie genau sind diese Ausbeutewerte?',
      a: 'Es sind forschungsbasierte Durchschnittswerte aus USDA-Daten, keine Garantie für dein konkretes Stück. Die tatsächlichen Ergebnisse hängen von Teilstück, Größe, Ausgangsfeuchte und davon ab, wie genau du die Garmethode kontrollierst — Variablen, die sich bei jedem Kochen unterscheiden. Ziel ist, dich der Realität spürbar näherzubringen, als wenn du den Garverlust gar nicht berücksichtigst, nicht Laborpräzision zu liefern. Für die meisten Zwecke ist der Fehler durch diese Durchschnittswerte weit kleiner als der Fehler, Roh- und Gargewicht gleichzusetzen.',
    },
  ],

  pt: [
    {
      q: 'Os rótulos nutricionais se baseiam no peso cru ou no cozido?',
      a: 'Quase todos os rótulos e bases de dados — inclusive a USDA FoodData Central — trazem os valores com base no peso cru, a menos que o rótulo diga expressamente "cozido". Essa é, de longe, a maior fonte de erro no controle alimentar: as gramas do rótulo descrevem o alimento cru, mas a maioria das pessoas pesa depois de cozinhar.',
    },
    {
      q: 'As calorias e os macros mudam quando o alimento é cozido?',
      a: 'O total de calorias e macronutrientes do alimento não muda por causa do cozimento em si. O que muda é o peso: durante o cozimento perde-se água (e às vezes gordura) ou absorve-se água. Ou seja, a mesma quantidade de proteína, carboidrato e gordura passa a caber em menos gramas nos alimentos que encolhem, ou se espalha por mais gramas nos que expandem, como o arroz. O alimento fica mais calórico por grama quando encolhe e menos calórico quando expande — mas os totais absolutos de nutrientes continuam os mesmos.',
    },
    {
      q: 'Devo pesar a comida crua ou cozida para contar macros?',
      a: 'Pesar cru costuma ser mais preciso e consistente, principalmente para carnes, já que o tempo e o método de cozimento afetam o peso final de formas difíceis de prever. Para arroz, massas e outros grãos, muita gente prefere pesar cozido porque cozinha em grande quantidade e porciona depois: isso funciona bem, desde que o peso corresponda à entrada certa da base de dados (seco/cru ou cozido). O essencial é a consistência: escolha um método e confira se a entrada do aplicativo combina com ele.',
    },
    {
      q: 'Por que aplicativos diferentes mostram calorias diferentes para o mesmo alimento?',
      a: 'O motivo mais comum é que uma entrada se refere ao peso cru e outra ao peso cozido do mesmo alimento. Como o cozimento altera a quantidade de água, as calorias por grama variam bastante entre as duas. É muito fácil escolher a errada sem perceber. Antes de registrar, confira sempre se a entrada específica que você está usando diz "cru" ou "cozido".',
    },
    {
      q: 'Existe um jeito rápido de estimar isso sem calculadora?',
      a: 'Uma regra aproximada: para peito de frango assado, divida o peso cozido por cerca de 0,72 para estimar o equivalente cru. Mas o percentual exato varia conforme o alimento e o método de cozimento — carne moída, suína, peixe, vegetais e grãos têm rendimentos diferentes, e o mesmo alimento se comporta de outro jeito dependendo de como é preparado. É por isso que uma calculadora por alimento como esta dá resultados mais precisos do que qualquer estimativa genérica.',
    },
    {
      q: 'Quanta carne crua eu preciso por pessoa?',
      a: 'Uma referência comum de planejamento é de cerca de 110 a 170 g de proteína crua por pessoa em uma refeição normal. É uma estimativa geral de porção, separada dos dados de rendimento — a porção já cozida sairá menor por causa da perda de umidade. Você pode usar a calculadora para descobrir com quanta proteína crua começar para qualquer número de porções.',
    },
    {
      q: 'Por que o peso cozido é menor na carne e maior no arroz?',
      a: 'A carne começa cheia de água e a perde para o calor; os grãos secos quase não têm e a absorvem. Carnes, aves, peixes e a maioria dos vegetais já são ricos em água, então o calor expulsa essa umidade e o alimento perde peso. Grãos secos, massas e leguminosas absorvem água ao cozinhar, então ganham peso. Não existe uma regra universal — depende do teor de água inicial e de como o alimento encontra o calor e o líquido durante o preparo.',
    },
    {
      q: 'O que significa percentual de rendimento na cozinha?',
      a: 'O percentual de rendimento é o peso cozido expresso como porcentagem do peso cru. Um rendimento de 75% significa que 100 g de alimento cru viram 75 g depois de cozidos — o alimento perdeu peso. Um rendimento acima de 100% significa que ele ganhou peso; o arroz branco, por exemplo, tem rendimento de 300%, ou seja, 100 g secos viram cerca de 300 g cozidos. Qualquer número abaixo de 100% indica perda (a maioria das carnes e vegetais); acima de 100%, ganho (grãos, massas, leguminosas). É o mesmo número mostrado na seção de fórmulas desta página.',
    },
    {
      q: 'Quão precisos são esses percentuais de rendimento?',
      a: 'São médias baseadas em pesquisa, vindas de dados do USDA, e não uma garantia para o seu pedaço específico. Os resultados reais variam conforme o corte, o tamanho, a umidade inicial e o quanto você controla o método de cozimento — variáveis que mudam a cada preparo. O objetivo é aproximar você bastante da realidade em comparação com ignorar completamente a perda no cozimento, não entregar precisão de laboratório. Para quase todo tipo de controle, o erro de usar essas médias é muito menor do que o de supor que peso cru e cozido são iguais.',
    },
  ],



  it: [
    {
      q: 'Le etichette nutrizionali si riferiscono al peso crudo o cotto?',
      a: 'Quasi tutte le etichette e i database — inclusa USDA FoodData Central — riportano i valori sul peso crudo, salvo indicazione esplicita "cotto". È di gran lunga la fonte più comune di errori nel monitoraggio: i grammi in etichetta descrivono l’alimento crudo, ma la maggior parte delle persone pesa dopo la cottura.',
    },
    {
      q: 'Calorie e macro cambiano quando l’alimento viene cotto?',
      a: 'La cottura in sé non modifica il totale di calorie e macronutrienti. Cambia il peso: durante la cottura si perde acqua (e talvolta grasso) oppure se ne assorbe. La stessa quantità di proteine, carboidrati e grassi finisce quindi concentrata in meno grammi negli alimenti che si restringono, o distribuita su più grammi in quelli che si gonfiano, come il riso. Restringendosi l’alimento diventa più denso di calorie per grammo, gonfiandosi meno denso — ma i totali assoluti dei nutrienti restano identici.',
    },
    {
      q: 'Per contare i macro devo pesare gli alimenti crudi o cotti?',
      a: 'Pesare da crudo è in genere più preciso e costante, soprattutto per la carne, perché tempo e metodo di cottura influenzano il peso finale in modi difficili da prevedere. Per riso, pasta e altri cereali molti preferiscono pesare da cotto perché cucinano in grandi quantità e porzionano dopo: va benissimo, purché il peso corrisponda alla voce giusta del database (secco/crudo oppure cotto). La cosa fondamentale è la coerenza: scegli un metodo e verifica che la voce usata nell’app corrisponda.',
    },
    {
      q: 'Perché app diverse mostrano calorie diverse per lo stesso alimento?',
      a: 'Il motivo più frequente è che una voce si riferisce al peso crudo e l’altra al peso cotto dello stesso alimento. Poiché la cottura cambia la quantità di acqua, le calorie per grammo differiscono parecchio tra le due. È facilissimo selezionare quella sbagliata senza accorgersene. Prima di registrare, controlla sempre se la voce specifica che stai usando dice "crudo" o "cotto".',
    },
    {
      q: 'C’è un modo rapido per stimarlo senza calcolatore?',
      a: 'Una regola pratica: per il petto di pollo al forno o arrosto, dividi il peso cotto per circa 0,72 per stimare l’equivalente da crudo. La percentuale esatta però varia in base all’alimento e al metodo di cottura: carne macinata, maiale, pesce, verdure e cereali hanno rese diverse, e lo stesso alimento si comporta in modo differente a seconda di come lo cuoci. Ecco perché un calcolatore per singolo alimento come questo dà risultati più accurati di qualsiasi stima generica.',
    },
    {
      q: 'Quanta carne cruda serve a persona?',
      a: 'Un riferimento comune per la pianificazione è di circa 110-170 g di proteine crude a persona per un pasto normale. È una stima generica di porzione, indipendente dai dati di resa: la porzione da cotta sarà più piccola per via della perdita di umidità. Con il calcolatore puoi ricavare da quanta carne cruda partire per un numero qualsiasi di porzioni.',
    },
    {
      q: 'Perché il peso da cotto è minore per la carne e maggiore per il riso?',
      a: 'La carne parte piena d’acqua e la perde con il calore; i cereali secchi non ne hanno quasi e la assorbono. Carne, pollame, pesce e la maggior parte delle verdure sono già ricchi d’acqua, quindi il calore la fa uscire e l’alimento perde peso. Cereali secchi, pasta e legumi assorbono acqua durante la bollitura, quindi aumentano di peso. Non esiste una regola universale: conta il contenuto d’acqua di partenza e il modo in cui l’alimento incontra calore e liquido.',
    },
    {
      q: 'Che cosa significa percentuale di resa in cucina?',
      a: 'La resa è il peso da cotto espresso come percentuale del peso da crudo. Una resa del 75% significa che 100 g di alimento crudo diventano 75 g dopo la cottura: l’alimento ha perso peso. Una resa superiore al 100% significa che ne ha guadagnato; il riso bianco, per esempio, ha una resa del 300%, quindi 100 g da secco diventano circa 300 g cotti. Qualsiasi valore sotto il 100% indica una perdita (quasi tutte le carni e le verdure); sopra il 100% indica un aumento (cereali, pasta, legumi). È lo stesso numero mostrato nella sezione delle formule di questa pagina.',
    },
    {
      q: 'Quanto sono accurate queste percentuali di resa?',
      a: 'Sono medie basate su ricerche e dati USDA, non una garanzia per il tuo pezzo specifico. I risultati reali variano in base al taglio esatto, alla pezzatura, all’umidità iniziale e a quanto controlli con precisione il metodo di cottura — variabili che cambiano ogni volta che cucini. L’obiettivo è avvicinarti in modo sensibile al dato corretto rispetto al non considerare affatto la perdita in cottura, non offrire una precisione da laboratorio. Per la gran parte degli usi, l’errore di queste medie è molto minore di quello che si commette dando per uguali peso crudo e peso cotto.',
    },
  ],

};

// ── Food-page FAQ ──────────────────────────────────────────────────────────

export const FOOD_FAQ: Record<Locale, FoodFaqSet> = {
  en: {
    chicken: [
      {
        q: 'How do I calculate raw to cooked chicken weight?',
        a: 'To calculate raw to cooked chicken weight, multiply the raw chicken weight by 0.72 (the standard USDA 72% yield for baked/roasted chicken breast). For example, 200g of raw chicken breast yields 144g cooked (200g × 0.72 = 144g). To calculate raw weight from cooked chicken, divide the cooked weight by 0.72 (e.g., 150g cooked ÷ 0.72 = 208g raw).',
      },
      {
        q: 'How much does chicken breast shrink when cooked?',
        a: 'Chicken breast loses about 28% of its weight when cooked, meaning a 200g raw breast yields approximately 144g cooked. Yield varies slightly by method: baked/roasted = 72%, grilled = 70%, boiled/poached = 77%, pan-fried = 72% (USDA data).',
      },
      {
        q: 'Should I track chicken macros raw or cooked?',
        a: 'Raw. USDA nutrition data and most food labels are measured on raw chicken, so the raw weight is the one that matches the numbers — log that, or convert your cooked weight back to raw first. This calculator always derives macros from the raw-weight equivalent, regardless of which direction you convert.',
      },
      {
        q: 'Why does chicken lose weight when cooked?',
        a: 'Water cooks out of it. Chicken breast is roughly 70–75% water by weight; heat makes the proteins denature and contract, forcing that moisture out of the muscle fibers, and some fat renders out as well — together that is the roughly 28% weight loss. The protein itself stays essentially intact, so you end up with the same nutrition packed into a smaller, denser piece.',
      },
      {
        q: 'How much weight does chicken breast lose when cooked?',
        a: 'About 28% — 100g of raw chicken breast comes down to roughly 72g cooked, a 72% USDA yield. It varies a little by method: baked or roasted retains about 72%, grilled about 70%, boiled or poached about 77%, and pan-fried about 72%. Use the cooking-method toggle on the calculator above for a method-specific result.',
      },
      {
        q: 'Does the cooking method actually make a meaningful difference?',
        a: 'Yes. Higher, drier heat — like grilling — causes more moisture to evaporate from the surface than moist-heat methods like boiling or poaching. That is why grilled chicken breast has a yield of around 70% while boiled or poached chicken retains more moisture at 77%. Even a 7-percentage-point spread in yield is a real difference in what weight you should be logging.',
      },
      {
        q: 'How do I convert cooked chicken weight back to raw?',
        a: 'Divide the cooked weight by the yield percentage as a decimal for whichever cooking method you used. For baked or roasted chicken breast: cooked weight ÷ 0.72. For grilled: ÷ 0.70. For boiled or poached: ÷ 0.77. The Cooked → Raw toggle on the calculator above handles this automatically once you select your cooking method.',
      },
      {
        q: 'What is the raw to cooked ratio for chicken breast?',
        a: 'Roughly 100:72 — 100g of raw chicken breast cooks down to about 72g when baked or roasted. The ratio shifts slightly by method: grilling is closer to 100:70, while boiling or poaching retains more moisture at about 100:77.',
      },
      {
        q: 'How much does chicken weigh after cooking?',
        a: '100g of raw chicken breast weighs roughly 72g after baking or roasting, based on the USDA yield of 72%. Grill it and expect around 70g; boil or poach it and you will get around 77g; pan-frying lands at about 72g. Enter your starting weight in the calculator above to get the exact result for your cooking method.',
      },
    ],
    grains: [
      {
        q: 'Should I weigh {food} raw or cooked?',
        a: 'Dry. USDA nutrition data is measured on the dry, uncooked product, so weigh {food} dry and track those macros — or enter either weight here and the calculator does the conversion.',
      },
      {
        q: 'How much does {food} expand when cooked?',
        a: '{Food} has a {pct}% yield, meaning it expands to {mult}× its dry weight when cooked. 100g dry becomes approximately {pct}g cooked.',
      },
      {
        q: 'Why does {food} gain weight when cooked instead of losing it like meat?',
        a: 'It soaks up water. The dry product starts with almost none, so when boiled it absorbs the surrounding liquid and swells to roughly {mult}× its dry weight — the cooked weight ends up well above the dry weight, not below. Meat goes the opposite direction because it already contains a lot of water that heat drives out.',
      },
    ],
    rice: [
      {
        q: 'How much cooked rice does dry rice make?',
        a: '100g of dry white rice makes roughly 300g of cooked rice — it triples in weight because it absorbs water as it cooks. This is based on the USDA yield of 300% for white rice. So if a recipe calls for 300g of cooked rice, you would start with about 100g dry. Dry rice and cooked rice have very different calorie densities per gram, which is why matching your log entry to the right weight matters.',
      },
    ],
    generic: [
      {
        q: 'How much weight does {food} lose when cooked?',
        a: '{Food} has a {pct}% cooking yield, losing {loss}% of its weight when cooked. Source: {source}.',
      },
      {
        q: 'Should I track macros for {food} raw or cooked?',
        a: 'Raw. USDA nutrition values are based on raw weight, so track the raw weight and calculate macros from there. This calculator always computes macros from the raw-weight equivalent.',
      },
    ],
    spinach: [
      {
        q: 'How much does spinach shrink when cooked?',
        a: 'By weight, only about 23% — USDA data puts spinach at a 77% cooking yield, so 100g of raw leaves becomes about 77g cooked. By volume it is a different story: a full pan of raw leaves wilts to a small handful, and the gap between those two impressions is what trips people up. Wilting drives out the air and structure that made the raw leaves bulky; most of the water stays put. If you are tracking macros, weigh spinach rather than judging it by how much the pan shrank.',
      },
    ],
  },

  es: {
    chicken: [
      {
        q: '¿Cuánto encoge la pechuga de pollo al cocinarse?',
        a: 'La pechuga de pollo pierde alrededor del 28% de su peso al cocinarse, así que 200 g de pechuga cruda dan unos 144 g cocidos. El rendimiento varía algo según el método: al horno o asada = 72%, a la parrilla = 70%, hervida o escalfada = 77%, a la sartén = 72% (datos del USDA).',
      },
      {
        q: '¿Los macros del pollo se cuentan en crudo o en cocido?',
        a: 'En crudo. Los datos nutricionales del USDA y casi todas las etiquetas se miden sobre el pollo crudo, así que el peso en crudo es el que cuadra con esas cifras: regístralo, o convierte antes tu peso cocido a crudo. Esta calculadora siempre deriva los macros del equivalente en peso crudo, sin importar en qué dirección conviertas.',
      },
      {
        q: '¿Por qué el pollo pierde peso al cocinarse?',
        a: 'El agua sale al cocinarlo. La pechuga de pollo es agua en torno a un 70–75% de su peso; el calor desnaturaliza y contrae las proteínas, que expulsan esa humedad de las fibras musculares, y además se derrite algo de grasa — en conjunto, esa es la pérdida de alrededor del 28%. La proteína en sí queda prácticamente intacta, así que acabas con los mismos nutrientes concentrados en una pieza más pequeña y densa.',
      },
      {
        q: '¿Cuánto peso pierde la pechuga de pollo al cocinarse?',
        a: 'Alrededor del 28%: 100 g de pechuga de pollo cruda se quedan en unos 72 g cocidos, un rendimiento USDA del 72%. Varía algo según el método: al horno o asada conserva un 72%, a la parrilla un 70%, hervida o escalfada un 77% y a la sartén un 72%. Usa el selector de método de cocción en la calculadora de arriba para un resultado específico.',
      },
      {
        q: '¿El método de cocción marca de verdad una diferencia?',
        a: 'Sí. El calor más alto y seco, como el de la parrilla, evapora más humedad de la superficie que los métodos húmedos como hervir o escalfar. Por eso la pechuga a la parrilla tiene un rendimiento cercano al 70%, mientras que hervida o escalfada retiene más agua y llega al 77%. Incluso siete puntos porcentuales de diferencia son una diferencia real en el peso que deberías registrar.',
      },
      {
        q: '¿Cómo convierto el peso del pollo cocido a crudo?',
        a: 'Divide el peso cocido entre el rendimiento en decimal del método que hayas usado. Para pechuga al horno o asada: peso cocido ÷ 0,72. A la parrilla: ÷ 0,70. Hervida o escalfada: ÷ 0,77. El botón Cocido → Crudo de la calculadora de arriba lo hace solo en cuanto eliges el método de cocción.',
      },
      {
        q: '¿Cuál es la proporción de crudo a cocido de la pechuga de pollo?',
        a: 'Aproximadamente 100:72: 100 g de pechuga de pollo cruda se quedan en unos 72 g al horno o asada. La proporción cambia algo según el método: a la parrilla se acerca a 100:70, mientras que hervida o escalfada retiene más humedad, cerca de 100:77.',
      },
      {
        q: '¿Cuánto pesa el pollo después de cocinarlo?',
        a: '100 g de pechuga de pollo cruda pesan aproximadamente 72 g después de hornearla o asarla, según el rendimiento del USDA del 72%. A la parrilla espera unos 70 g; hervida o escalfada, unos 77 g; a la sartén, unos 72 g. Introduce tu peso de partida en la calculadora de arriba para obtener el resultado exacto de tu método de cocción.',
      },
    ],
    grains: [
      {
        q: '¿Hay que pesar {food} en seco o después de cocer?',
        a: 'En seco. Los datos nutricionales del USDA se miden sobre el producto seco y sin cocer, así que pesa {food} en seco y registra esos macros — o introduce aquí cualquiera de los dos pesos y la calculadora hace la conversión.',
      },
      {
        q: '¿Cuánto aumenta el peso al cocer {food}?',
        a: 'El rendimiento es del {pct}%: al cocer {food} el peso se multiplica por unas {mult} veces respecto al peso en seco. 100 g en seco pasan a unos {pct} g ya cocidos.',
      },
      {
        q: '¿Por qué al cocer {food} el peso aumenta en vez de bajar como en la carne?',
        a: 'Absorbe agua. El producto seco apenas tiene, así que al hervirlo absorbe el líquido que lo rodea y se hincha hasta unas {mult} veces su peso en seco — el peso cocido acaba bastante por encima del seco, no por debajo. La carne va en dirección contraria porque ya contiene mucha agua que el calor expulsa.',
      },
    ],
    rice: [
      {
        q: '¿Cuánto arroz cocido sale del arroz seco?',
        a: '100 g de arroz blanco seco dan alrededor de 300 g de arroz cocido: triplica su peso porque absorbe agua mientras se cuece. Esto se basa en el rendimiento del USDA del 300% para el arroz blanco. Así que si una receta pide 300 g de arroz cocido, tendrías que partir de unos 100 g en seco. El arroz seco y el cocido tienen densidades calóricas por gramo muy distintas, y por eso importa tanto que el peso que registras corresponda a la entrada correcta.',
      },
    ],
    generic: [
      {
        q: '¿Cuánto peso se pierde al cocinar {food}?',
        a: 'El rendimiento de cocción es del {pct}%: al cocinar {food} se pierde el {loss}% del peso. Fuente: {source}.',
      },
      {
        q: '¿Se registran los macros pesando {food} en crudo o ya cocinado?',
        a: 'En crudo. Los valores nutricionales del USDA se basan en el peso crudo, así que registra el peso en crudo y calcula los macros a partir de ahí. Esta calculadora siempre calcula los macros desde el equivalente en peso crudo.',
      },
    ],
    spinach: [
      {
        q: '¿Cuánto encoge la espinaca al cocinarse?',
        a: 'En peso, solo alrededor del 23%: los datos del USDA dan a la espinaca un rendimiento del 77%, así que 100 g de hojas crudas se quedan en unos 77 g cocidas. En volumen es otra historia: una sartén llena de hojas crudas se queda en un puñado pequeño, y la diferencia entre esas dos impresiones es lo que confunde. Al pocharse, las hojas sueltan el aire y la estructura que las hacían voluminosas; el agua, en su mayor parte, se queda. Si llevas un registro de macros, pesa la espinaca en vez de guiarte por cuánto ha menguado la sartén.',
      },
    ],
  },

  fr: {
    chicken: [
      {
        q: 'De combien le blanc de poulet réduit-il à la cuisson ?',
        a: 'Le blanc de poulet perd environ 28 % de son poids à la cuisson : 200 g crus donnent à peu près 144 g cuits. Le rendement varie légèrement selon la méthode : au four ou rôti = 72 %, grillé = 70 %, bouilli ou poché = 77 %, poêlé = 72 % (données USDA).',
      },
      {
        q: 'Faut-il compter les macros du poulet cru ou cuit ?',
        a: 'Cru. Les données nutritionnelles de l’USDA et la plupart des étiquettes sont mesurées sur le poulet cru : c’est donc le poids cru qui correspond à ces chiffres — enregistrez-le, ou reconvertissez d’abord votre poids cuit en cru. Ce calculateur part toujours de l’équivalent en poids cru, quel que soit le sens de la conversion.',
      },
      {
        q: 'Pourquoi le poulet perd-il du poids à la cuisson ?',
        a: 'C’est l’eau qui part. Le blanc de poulet est composé à environ 70–75 % d’eau ; la chaleur dénature et contracte les protéines, qui chassent cette humidité des fibres musculaires, et une partie de la graisse fond aussi — ensemble, cela fait la perte d’environ 28 %. Les protéines, elles, restent pour l’essentiel intactes : vous obtenez les mêmes nutriments concentrés dans un morceau plus petit et plus dense.',
      },
      {
        q: 'Quelle quantité de poids le blanc de poulet perd-il à la cuisson ?',
        a: 'Environ 28 % : 100 g de blanc de poulet cru tombent à à peu près 72 g cuits, un rendement USDA de 72 %. Cela varie un peu selon la méthode : au four ou rôti on conserve environ 72 %, grillé environ 70 %, bouilli ou poché environ 77 %, poêlé environ 72 %. Utilisez le sélecteur de mode de cuisson du calculateur ci-dessus pour un résultat précis.',
      },
      {
        q: 'Le mode de cuisson change-t-il vraiment quelque chose ?',
        a: 'Oui. Une chaleur plus forte et plus sèche — le gril, par exemple — fait s’évaporer davantage d’eau en surface que les cuissons humides comme l’eau bouillante ou le pochage. C’est pourquoi le blanc grillé affiche un rendement d’environ 70 %, tandis que bouilli ou poché il retient plus d’eau et atteint 77 %. Même sept points d’écart, c’est une vraie différence sur le poids à enregistrer.',
      },
      {
        q: 'Comment reconvertir un poids de poulet cuit en poids cru ?',
        a: 'Divisez le poids cuit par le rendement exprimé en décimale, selon la cuisson utilisée. Pour un blanc au four ou rôti : poids cuit ÷ 0,72. Grillé : ÷ 0,70. Bouilli ou poché : ÷ 0,77. Le bouton Cuit → Cru du calculateur ci-dessus le fait automatiquement dès que vous sélectionnez votre mode de cuisson.',
      },
      {
        q: 'Quel est le rapport cru-cuit pour le blanc de poulet ?',
        a: 'Environ 100:72 — 100 g de blanc de poulet cru donnent à peu près 72 g au four ou rôti. Le rapport évolue un peu selon la cuisson : au gril il se rapproche de 100:70, tandis que bouilli ou poché il retient plus d’eau, autour de 100:77.',
      },
      {
        q: 'Combien pèse le poulet après cuisson ?',
        a: '100 g de blanc de poulet cru pèsent environ 72 g après une cuisson au four ou rôtie, sur la base du rendement USDA de 72 %. Au gril, comptez plutôt 70 g ; bouilli ou poché, environ 77 g ; poêlé, environ 72 g. Saisissez votre poids de départ dans le calculateur ci-dessus pour obtenir le résultat exact selon votre cuisson.',
      },
    ],
    grains: [
      {
        q: 'Faut-il peser {food} avant ou après cuisson ?',
        a: 'Avant cuisson. Les données nutritionnelles de l’USDA portent sur le produit sec, non cuit : pesez donc {food} à sec et enregistrez ces macros — ou saisissez ici l’un ou l’autre poids, le calculateur fait la conversion.',
      },
      {
        q: 'De combien le poids augmente-t-il quand on fait cuire {food} ?',
        a: 'Le rendement est de {pct} % : en cuisant {food}, le poids est multiplié par environ {mult} par rapport au poids sec. 100 g secs donnent à peu près {pct} g cuits.',
      },
      {
        q: 'Pourquoi le poids augmente-t-il quand on fait cuire {food}, alors que la viande en perd ?',
        a: 'Il absorbe l’eau. Le produit sec n’en contient presque pas : à l’ébullition, il absorbe le liquide qui l’entoure et gonfle jusqu’à environ {mult} fois son poids sec — le poids cuit finit donc nettement au-dessus du poids sec, et non en dessous. La viande évolue dans l’autre sens parce qu’elle contient déjà beaucoup d’eau que la chaleur fait partir.',
      },
    ],
    rice: [
      {
        q: 'Quelle quantité de riz cuit obtient-on à partir de riz sec ?',
        a: '100 g de riz blanc sec donnent environ 300 g de riz cuit : le poids triple parce que le riz absorbe l’eau pendant la cuisson. Ce chiffre repose sur le rendement USDA de 300 % pour le riz blanc. Si une recette demande 300 g de riz cuit, partez donc d’environ 100 g de riz sec. Le riz sec et le riz cuit n’ont pas du tout la même densité calorique au gramme, d’où l’importance de faire correspondre le poids enregistré à la bonne entrée.',
      },
    ],
    generic: [
      {
        q: 'Combien de poids perd-on en faisant cuire {food} ?',
        a: 'Le rendement de cuisson est de {pct} % : en cuisant {food}, on perd {loss} % du poids. Source : {source}.',
      },
      {
        q: 'Pour {food}, faut-il compter les macros avant ou après cuisson ?',
        a: 'Avant cuisson. Les valeurs nutritionnelles de l’USDA se basent sur le poids cru : enregistrez le poids cru et calculez les macros à partir de là. Ce calculateur part toujours de l’équivalent en poids cru.',
      },
    ],
    spinach: [
      {
        q: 'De combien les épinards réduisent-ils à la cuisson ?',
        a: 'En poids, seulement 23 % environ : d’après l’USDA, les épinards ont un rendement de cuisson de 77 %, donc 100 g de feuilles crues donnent environ 77 g cuits. En volume, c’est une autre histoire : une poêle pleine de feuilles crues se réduit à une petite poignée, et c’est l’écart entre ces deux impressions qui induit en erreur. En tombant, les feuilles perdent l’air et la structure qui les rendaient volumineuses ; l’eau, elle, reste en grande partie. Si vous suivez vos macros, pesez les épinards plutôt que de vous fier à la réduction apparente dans la poêle.',
      },
    ],
  },

  de: {
    chicken: [
      {
        q: 'Wie stark schrumpft Hähnchenbrust beim Garen?',
        a: 'Hähnchenbrust verliert beim Garen etwa 28 % ihres Gewichts: Aus 200 g roh werden rund 144 g gegart. Die Ausbeute schwankt je nach Methode leicht — im Ofen gebacken oder gebraten = 72 %, gegrillt = 70 %, gekocht oder pochiert = 77 %, in der Pfanne gebraten = 72 % (USDA-Daten).',
      },
      {
        q: 'Sollte ich die Makros von Hähnchen roh oder gegart tracken?',
        a: 'Roh. Die USDA-Nährwerte und die meisten Etiketten beziehen sich auf rohes Hähnchen — das Rohgewicht ist also der Wert, der zu diesen Zahlen passt. Trage es ein oder rechne dein Gargewicht zuerst auf roh zurück. Dieser Rechner leitet die Makros immer aus dem Rohgewichts-Äquivalent ab, egal in welche Richtung du umrechnest.',
      },
      {
        q: 'Warum verliert Hähnchen beim Garen an Gewicht?',
        a: 'Das Wasser gart heraus. Hähnchenbrust besteht zu etwa 70–75 % aus Wasser; die Hitze denaturiert die Proteine und zieht sie zusammen, wodurch diese Feuchtigkeit aus den Muskelfasern gepresst wird, und ein Teil des Fetts brät aus — zusammen ergibt das den Verlust von rund 28 %. Das Protein selbst bleibt praktisch unverändert, du hast am Ende dieselben Nährstoffe in einem kleineren, dichteren Stück.',
      },
      {
        q: 'Wie viel Gewicht verliert Hähnchenbrust beim Garen?',
        a: 'Etwa 28 %: 100 g rohe Hähnchenbrust kommen auf rund 72 g gegart, eine USDA-Ausbeute von 72 %. Je nach Methode schwankt das etwas: im Ofen gebacken oder gebraten bleiben rund 72 %, gegrillt etwa 70 %, gekocht oder pochiert etwa 77 %, in der Pfanne gebraten etwa 72 %. Nutze im Rechner oben die Auswahl der Garmethode für ein methodenspezifisches Ergebnis.',
      },
      {
        q: 'Macht die Garmethode wirklich einen spürbaren Unterschied?',
        a: 'Ja. Höhere, trockenere Hitze — etwa beim Grillen — lässt mehr Feuchtigkeit an der Oberfläche verdunsten als feuchte Methoden wie Kochen oder Pochieren. Deshalb liegt gegrillte Hähnchenbrust bei rund 70 % Ausbeute, während gekochtes oder pochiertes Fleisch mit 77 % mehr Feuchtigkeit behält. Schon sieben Prozentpunkte Unterschied sind ein realer Unterschied beim Gewicht, das du eintragen solltest.',
      },
      {
        q: 'Wie rechne ich gegartes Hähnchengewicht zurück auf roh?',
        a: 'Teile das Gargewicht durch die Ausbeute als Dezimalzahl für die jeweils genutzte Methode. Für im Ofen gebackene oder gebratene Hähnchenbrust: Gargewicht ÷ 0,72. Gegrillt: ÷ 0,70. Gekocht oder pochiert: ÷ 0,77. Die Umschaltung „Gegart → Roh“ im Rechner oben erledigt das automatisch, sobald du deine Garmethode auswählst.',
      },
      {
        q: 'Wie ist das Verhältnis roh zu gegart bei Hähnchenbrust?',
        a: 'Etwa 100:72 — 100 g rohe Hähnchenbrust ergeben im Ofen gebacken oder gebraten rund 72 g. Je nach Methode verschiebt sich das Verhältnis leicht: Beim Grillen liegt es näher bei 100:70, beim Kochen oder Pochieren bleibt mehr Feuchtigkeit erhalten, etwa 100:77.',
      },
      {
        q: 'Wie viel wiegt Hähnchen nach dem Garen?',
        a: '100 g rohe Hähnchenbrust wiegen nach dem Backen oder Braten rund 72 g, ausgehend von der USDA-Ausbeute von 72 %. Gegrillt sind es etwa 70 g, gekocht oder pochiert rund 77 g, in der Pfanne gebraten etwa 72 g. Gib dein Ausgangsgewicht im Rechner oben ein, um das genaue Ergebnis für deine Garmethode zu erhalten.',
      },
    ],
    grains: [
      {
        q: '{Food}: trocken oder gegart abwiegen?',
        a: 'Trocken. Die USDA-Nährwerte beziehen sich auf das trockene, ungegarte Produkt, also wiege die trockene Menge ab und tracke diese Makros — oder gib hier eines der beiden Gewichte ein und der Rechner übernimmt die Umrechnung.',
      },
      {
        q: 'Wie stark quillt {Food} beim Kochen auf?',
        a: '{Food} hat eine Ausbeute von {pct} % und quillt beim Kochen auf etwa das {mult}-Fache des Trockengewichts auf. Aus 100 g trocken werden rund {pct} g gegart.',
      },
      {
        q: 'Warum nimmt {Food} beim Kochen an Gewicht zu, statt wie Fleisch zu verlieren?',
        a: 'Es saugt Wasser auf. Das trockene Produkt enthält fast keines, also saugt es beim Kochen die umgebende Flüssigkeit auf und quillt auf etwa das {mult}-Fache seines Trockengewichts — das Gargewicht liegt am Ende deutlich über dem Trockengewicht, nicht darunter. Fleisch geht in die andere Richtung, weil es bereits viel Wasser enthält, das die Hitze austreibt.',
      },
    ],
    rice: [
      {
        q: 'Wie viel gekochter Reis wird aus trockenem Reis?',
        a: 'Aus 100 g trockenem weißem Reis werden rund 300 g gekochter Reis — das Gewicht verdreifacht sich, weil der Reis beim Garen Wasser aufnimmt. Grundlage ist die USDA-Ausbeute von 300 % für weißen Reis. Verlangt ein Rezept 300 g gekochten Reis, startest du also mit etwa 100 g trocken. Trockener und gekochter Reis haben eine sehr unterschiedliche Kaloriendichte pro Gramm — deshalb ist es wichtig, dass dein Eintrag zum richtigen Gewicht passt.',
      },
    ],
    generic: [
      {
        q: 'Wie viel Gewicht verliert {Food} beim Garen?',
        a: '{Food} hat eine Garausbeute von {pct} % und verliert beim Garen {loss} % des Gewichts. Quelle: {source}.',
      },
      {
        q: 'Makros für {Food}: roh oder gegart tracken?',
        a: 'Roh. Die USDA-Nährwerte beziehen sich auf das Rohgewicht, also tracke das Rohgewicht und berechne die Makros daraus. Dieser Rechner ermittelt die Makros immer aus dem Rohgewichts-Äquivalent.',
      },
    ],
    spinach: [
      {
        q: 'Wie stark schrumpft Spinat beim Garen?',
        a: 'Im Gewicht nur etwa 23 % — laut USDA liegt die Garausbeute bei 77 %, aus 100 g rohen Blättern werden also rund 77 g gegart. Im Volumen sieht es ganz anders aus: Eine volle Pfanne roher Blätter fällt auf eine kleine Handvoll zusammen, und genau diese Lücke zwischen den beiden Eindrücken führt in die Irre. Beim Zusammenfallen entweichen Luft und Struktur, die die rohen Blätter voluminös gemacht haben; das Wasser bleibt größtenteils drin. Wer Makros trackt, sollte Spinat wiegen, statt nach dem Schrumpfen in der Pfanne zu schätzen.',
      },
    ],
  },

  pt: {
    chicken: [
      {
        q: 'Quanto o peito de frango encolhe ao ser cozido?',
        a: 'O peito de frango perde cerca de 28% do peso ao ser cozido, ou seja, 200 g crus rendem aproximadamente 144 g cozidos. O rendimento varia um pouco conforme o método: assado = 72%, grelhado = 70%, cozido ou escalfado = 77%, frito na frigideira = 72% (dados do USDA).',
      },
      {
        q: 'Devo contar os macros do frango cru ou cozido?',
        a: 'Cru. Os dados nutricionais do USDA e a maioria dos rótulos são medidos no frango cru, então o peso cru é o que combina com esses números — registre-o, ou converta antes o peso cozido de volta para cru. Esta calculadora sempre deriva os macros do equivalente em peso cru, não importa a direção da conversão.',
      },
      {
        q: 'Por que o frango perde peso ao ser cozido?',
        a: 'É a água que sai. O peito de frango é composto por cerca de 70–75% de água; o calor desnatura e contrai as proteínas, que expulsam essa umidade das fibras musculares, e parte da gordura também derrete — juntos, isso dá a perda de cerca de 28%. A proteína em si permanece praticamente intacta, então você fica com os mesmos nutrientes concentrados em um pedaço menor e mais denso.',
      },
      {
        q: 'Quanto peso o peito de frango perde ao ser cozido?',
        a: 'Cerca de 28%: 100 g de peito de frango cru caem para aproximadamente 72 g cozidos, um rendimento USDA de 72%. Varia um pouco conforme o método: assado retém cerca de 72%, grelhado cerca de 70%, cozido ou escalfado cerca de 77% e frito na frigideira cerca de 72%. Use o seletor de método de cozimento na calculadora acima para um resultado específico.',
      },
      {
        q: 'O método de cozimento faz mesmo diferença?',
        a: 'Faz. Calor mais alto e seco — como o da grelha — evapora mais umidade da superfície do que métodos úmidos, como cozinhar em água ou escalfar. É por isso que o peito grelhado tem rendimento em torno de 70%, enquanto cozido ou escalfado retém mais umidade e chega a 77%. Mesmo sete pontos percentuais de diferença representam uma diferença real no peso que você deve registrar.',
      },
      {
        q: 'Como converter o peso do frango cozido de volta para cru?',
        a: 'Divida o peso cozido pelo rendimento em decimal do método que você usou. Para peito de frango assado: peso cozido ÷ 0,72. Grelhado: ÷ 0,70. Cozido ou escalfado: ÷ 0,77. O botão Cozido → Cru na calculadora acima faz isso automaticamente assim que você escolhe o método de cozimento.',
      },
      {
        q: 'Qual é a proporção de cru para cozido do peito de frango?',
        a: 'Aproximadamente 100:72 — 100 g de peito de frango cru rendem cerca de 72 g quando assados. A proporção muda um pouco conforme o método: grelhar chega perto de 100:70, enquanto cozinhar ou escalfar retém mais umidade, cerca de 100:77.',
      },
      {
        q: 'Quanto o frango pesa depois de cozido?',
        a: '100 g de peito de frango cru pesam por volta de 72 g depois de assados, com base no rendimento do USDA de 72%. Na grelha, espere cerca de 70 g; cozido ou escalfado, cerca de 77 g; na frigideira, cerca de 72 g. Digite seu peso inicial na calculadora acima para obter o resultado exato do seu método de preparo.',
      },
    ],
    grains: [
      {
        q: 'Devo pesar {food} seco ou depois de cozinhar?',
        a: 'Seco. Os dados nutricionais do USDA são medidos no produto seco e cru, então pese {food} ainda seco e registre esses macros — ou informe aqui qualquer um dos dois pesos e a calculadora faz a conversão.',
      },
      {
        q: 'Quanto o peso aumenta ao cozinhar {food}?',
        a: 'O rendimento é de {pct}%: ao cozinhar {food}, o peso é multiplicado por cerca de {mult} em relação ao peso seco. 100 g secos viram aproximadamente {pct} g cozidos.',
      },
      {
        q: 'Por que ao cozinhar {food} o peso aumenta em vez de cair como acontece com a carne?',
        a: 'Ele absorve água. O produto seco quase não tem, então ao ser cozido absorve o líquido ao redor e incha até cerca de {mult} vezes o peso seco — o peso cozido acaba bem acima do peso seco, e não abaixo. A carne vai na direção oposta porque já contém muita água, que o calor expulsa.',
      },
    ],
    rice: [
      {
        q: 'Quanto arroz cozido rende o arroz seco?',
        a: '100 g de arroz branco seco rendem cerca de 300 g de arroz cozido — o peso triplica porque o arroz absorve água ao cozinhar. Isso se baseia no rendimento do USDA de 300% para o arroz branco. Portanto, se uma receita pede 300 g de arroz cozido, você começaria com cerca de 100 g seco. Arroz seco e arroz cozido têm densidades calóricas por grama bem diferentes, e é por isso que importa casar o peso registrado com a entrada certa.',
      },
    ],
    generic: [
      {
        q: 'Quanto peso se perde ao cozinhar {food}?',
        a: 'O rendimento de cocção é de {pct}%: ao cozinhar {food}, perde-se {loss}% do peso. Fonte: {source}.',
      },
      {
        q: 'Para {food}, os macros devem ser contados no peso cru ou cozido?',
        a: 'Cru. Os valores nutricionais do USDA se baseiam no peso cru, então registre o peso cru e calcule os macros a partir dele. Esta calculadora sempre calcula os macros pelo equivalente em peso cru.',
      },
    ],
    spinach: [
      {
        q: 'Quanto o espinafre encolhe ao ser cozido?',
        a: 'Em peso, só cerca de 23%: os dados do USDA apontam um rendimento de 77%, então 100 g de folhas cruas viram cerca de 77 g cozidas. Em volume é outra história: uma frigideira cheia de folhas cruas murcha até virar um punhado pequeno, e é a distância entre essas duas impressões que engana. Ao murchar, as folhas perdem o ar e a estrutura que as deixavam volumosas; a água, em boa parte, permanece. Se você acompanha macros, pese o espinafre em vez de julgar pelo tanto que a panela encolheu.',
      },
    ],
  },



  it: {
    chicken: [
      {
        q: 'Quanto si riduce il petto di pollo in cottura?',
        a: 'Il petto di pollo perde circa il 28% del peso in cottura: 200 g crudi danno all’incirca 144 g cotti. La resa cambia leggermente secondo il metodo: al forno o arrosto = 72%, alla griglia = 70%, bollito o in camicia = 77%, in padella = 72% (dati USDA).',
      },
      {
        q: 'I macro del pollo si contano da crudo o da cotto?',
        a: 'Da crudo. I dati nutrizionali USDA e la maggior parte delle etichette sono misurati sul pollo crudo: è quindi il peso da crudo a corrispondere a quei numeri — registra quello, oppure riporta prima il peso da cotto a crudo. Questo calcolatore ricava sempre i macro dall’equivalente in peso da crudo, in qualunque direzione tu stia convertendo.',
      },
      {
        q: 'Perché il pollo perde peso in cottura?',
        a: 'È l’acqua che se ne va. Il petto di pollo è composto per circa il 70–75% di acqua; il calore denatura e contrae le proteine, che spingono quell’umidità fuori dalle fibre muscolari, e una parte del grasso si scioglie — insieme, è la perdita di circa il 28%. Le proteine restano sostanzialmente intatte, quindi ti ritrovi gli stessi nutrienti concentrati in un pezzo più piccolo e denso.',
      },
      {
        q: 'Quanto peso perde il petto di pollo in cottura?',
        a: 'Circa il 28%: 100 g di petto di pollo crudo scendono a circa 72 g da cotti, una resa USDA del 72%. Varia un po’ secondo il metodo: al forno o arrosto conserva circa il 72%, alla griglia circa il 70%, bollito o in camicia circa il 77%, in padella circa il 72%. Usa il selettore del metodo di cottura nel calcolatore qui sopra per un risultato specifico.',
      },
      {
        q: 'Il metodo di cottura fa davvero differenza?',
        a: 'Sì. Un calore più alto e più secco — come quello della griglia — fa evaporare più umidità dalla superficie rispetto ai metodi a calore umido come la bollitura o la cottura in camicia. Per questo il petto grigliato ha una resa intorno al 70%, mentre bollito o in camicia trattiene più umidità e arriva al 77%. Anche sette punti percentuali di scarto sono una differenza reale sul peso che dovresti registrare.',
      },
      {
        q: 'Come riporto il peso del pollo da cotto a crudo?',
        a: 'Dividi il peso da cotto per la resa espressa in decimali, secondo il metodo usato. Per il petto di pollo al forno o arrosto: peso cotto ÷ 0,72. Alla griglia: ÷ 0,70. Bollito o in camicia: ÷ 0,77. Il selettore Cotto → Crudo nel calcolatore qui sopra lo fa automaticamente appena scegli il metodo di cottura.',
      },
      {
        q: 'Qual è il rapporto crudo-cotto del petto di pollo?',
        a: 'Circa 100:72 — 100 g di petto di pollo crudo danno circa 72 g al forno o arrosto. Il rapporto cambia un po’ secondo il metodo: alla griglia si avvicina a 100:70, mentre bollito o in camicia trattiene più umidità, intorno a 100:77.',
      },
      {
        q: 'Quanto pesa il pollo dopo la cottura?',
        a: '100 g di petto di pollo crudo pesano all’incirca 72 g dopo la cottura al forno o arrosto, sulla base della resa USDA del 72%. Alla griglia aspettati circa 70 g; bollito o in camicia circa 77 g; in padella circa 72 g. Inserisci il tuo peso di partenza nel calcolatore qui sopra per il risultato esatto del tuo metodo di cottura.',
      },
    ],
    grains: [
      {
        q: 'Bisogna pesare {food} da secco o dopo la cottura?',
        a: 'Da secco. I dati nutrizionali USDA sono misurati sul prodotto secco e non cotto, quindi pesa {food} da secco e registra quei macro — oppure inserisci qui uno dei due pesi e il calcolatore fa la conversione.',
      },
      {
        q: 'Di quanto aumenta il peso cuocendo {food}?',
        a: 'La resa è del {pct}%: cuocendo {food}, il peso si moltiplica per circa {mult} rispetto al peso da secco. 100 g da secco diventano all’incirca {pct} g da cotti.',
      },
      {
        q: 'Perché cuocendo {food} il peso aumenta invece di calare come nella carne?',
        a: 'Assorbe acqua. Il prodotto secco non ne contiene quasi, quindi durante la bollitura assorbe il liquido circostante e si gonfia fino a circa {mult} volte il peso da secco — il peso da cotto risulta nettamente superiore a quello da secco, non inferiore. La carne va nella direzione opposta perché contiene già molta acqua, che il calore fa uscire.',
      },
    ],
    rice: [
      {
        q: 'Quanto riso cotto si ottiene dal riso secco?',
        a: '100 g di riso bianco secco danno all’incirca 300 g di riso cotto: il peso triplica perché il riso assorbe acqua durante la cottura. Il dato si basa sulla resa USDA del 300% per il riso bianco. Quindi, se una ricetta richiede 300 g di riso cotto, partirai da circa 100 g da secco. Riso secco e riso cotto hanno densità caloriche per grammo molto diverse: ecco perché è importante far corrispondere il peso registrato alla voce giusta.',
      },
    ],
    generic: [
      {
        q: 'Quanto peso si perde cuocendo {food}?',
        a: 'La resa di cottura è del {pct}%: cuocendo {food} si perde il {loss}% del peso. Fonte: {source}.',
      },
      {
        q: 'Per {food}, i macro vanno contati da crudo o da cotto?',
        a: 'Da crudo. I valori nutrizionali USDA si basano sul peso da crudo, quindi registra il peso da crudo e calcola i macro da lì. Questo calcolatore ricava sempre i macro dall’equivalente in peso da crudo.',
      },
    ],
    spinach: [
      {
        q: 'Quanto si riducono gli spinaci in cottura?',
        a: 'In peso, solo il 23% circa: secondo i dati USDA la resa di cottura è del 77%, quindi 100 g di foglie crude diventano circa 77 g da cotte. In volume è tutta un’altra storia: una padella piena di foglie crude si riduce a una piccola manciata, ed è proprio lo scarto tra queste due impressioni a trarre in inganno. Appassendo, le foglie perdono l’aria e la struttura che le rendevano voluminose; l’acqua invece resta in gran parte. Se tieni traccia dei macro, pesa gli spinaci invece di giudicare da quanto si è ridotta la padella.',
      },
    ],
  },

};

export function getHomeFaq(locale: Locale): FaqItem[] {
  return HOME_FAQ[locale] ?? HOME_FAQ.en;
}

export function getFoodFaqSet(locale: Locale): FoodFaqSet {
  return FOOD_FAQ[locale] ?? FOOD_FAQ.en;
}

// ── Per-food FAQ ──────────────────────────────────────────────────────────
//
// Hand-written question sets specific to one food, keyed by food id. These
// replace the templated `FOOD_FAQ` sets when an entry exists for the locale;
// any locale without a per-food set, and any food not listed, still gets the
// templated set above. No `{placeholder}` tokens — the copy is literal so it
// can quote the exact figure for that food. English is the source; the
// translations in `./faq-food/*` keep every figure identical.

const FOOD_FAQ_EN_BY_ID: Record<string, FaqItem[]> = {
  'chicken-breast': [
    {
      q: 'Does marinating chicken change the cooked yield?',
      a: 'An oil-and-acid marinade barely moves it — a point or two at most. A salt brine or a heavy salt-and-sugar marinade is different: the meat takes on water beforehand, so it starts heavier and can lose slightly more than the usual 28% as that added water cooks off. Weigh the breast before it goes in the marinade for the cleanest number.',
    },
    {
      q: 'Why did my chicken breast lose more than 28%?',
      a: 'Usually overcooking. Past an internal 74°C every extra minute drives off more water and can push the loss to 35% or more. Thin cutlets and small tenders also lose a bigger share than a thick whole breast because they have more surface area. Grilling over direct flame costs a few points versus baking.',
    },
    {
      q: 'Is the yield different for chicken tenderloins or diced breast?',
      a: 'Slightly lower. Tenderloins and diced pieces expose more surface to the heat per gram, so they dry a little faster than a whole breast — expect roughly 68–70% instead of 72% when pan-cooked. The macros per gram are the same as breast; only the water loss differs.',
    },
    {
      q: 'How do I log chicken breast if I cooked a big batch and portioned it later?',
      a: 'Weigh the whole batch raw and write it down. After cooking, weigh the whole cooked batch, then each portion. Each portion\'s raw-equivalent is (portion cooked weight ÷ total cooked weight) × total raw weight. Or weigh one portion cooked and divide by 0.72 for a baked batch.',
    },
    {
      q: 'Does the 72% yield include the juices left in the pan?',
      a: 'No. The yield is the weight of the drained cooked meat as a share of the raw weight. The juices and rendered fat left in the pan are part of the ~28% that left the meat. If you make a pan sauce from those juices and eat it, the protein loss is negligible but you are adding back a little fat.',
    },
  ],

  'chicken-thigh': [
    {
      q: 'Why does chicken thigh lose more weight than chicken breast?',
      a: 'Thigh is dark meat with more intramuscular fat (about 4.6g per 100g raw vs 2.6g for breast) and more connective tissue. When it cooks, water is squeezed out as usual and the extra fat renders and drips away too, so the total loss is higher — a 69% baked yield versus 72% for breast.',
    },
    {
      q: 'Is bone-in, skin-on thigh yield the same as boneless skinless?',
      a: 'No. The 69% figure is for boneless skinless meat only. A bone-in skin-on thigh is 25–35% bone and skin by weight, and the skin is almost pure fat. Weigh the meat you actually eat after pulling it off the bone, then convert that.',
    },
    {
      q: 'Why is the deep-fried breaded yield (80%) higher than baked?',
      a: 'Because the breading and absorbed oil add weight that was never chicken. The lean thigh meat inside still lost water — the number looks high only because of the coating. Do not use the 80% figure to back-calculate plain chicken macros; that portion has far more fat and carbs.',
    },
    {
      q: 'Which method yield should I use for a thigh curry or stew?',
      a: 'The braised figure, 73%. Thighs simmered in a sauce are surrounded by liquid, so they hold more weight than any dry-heat method. A 150g raw thigh comes out to about 110g in the curry.',
    },
    {
      q: 'Do boneless thighs from the store come trimmed of fat?',
      a: 'Partly. Most retail boneless skinless thighs still carry visible fat pockets that a lot of people trim off before or after cooking. If you trim significant fat, log a slightly lower raw-equivalent than the full thigh weight, since you are not eating all of it.',
    },
  ],

  'ground-beef-80-20': [
    {
      q: 'Should I log ground beef by the raw weight or the drained cooked weight?',
      a: 'Raw weight is the consistent choice and matches the USDA label. The drained cooked weight is unreliable because it depends on how much grease you poured off. If you do want to log cooked, use a cooked-ground-beef database entry, not a raw one — cooked crumbles are far more calorie-dense per gram.',
    },
    {
      q: 'If I drain the fat, am I still eating all the calories in the raw macros?',
      a: 'No. With 80/20, a meaningful share of that 20% fat renders out and gets poured away, so your real intake is somewhat below the raw-weight conversion. The gap is whatever fat is in the pan. Leaner 93/7 loses very little fat, so its raw conversion is close to accurate.',
    },
    {
      q: 'Why does 80/20 shrink more than 93/7?',
      a: 'Fat. 80/20 has 20g of fat per 100g raw and much of it melts and drips out; 93/7 has only 7g, so there is far less to lose. That is why 80/20 yields about 73% pan-browned and 93/7 holds about 77%.',
    },
    {
      q: 'How much cooked beef does a pound of raw ground beef make?',
      a: 'About 331g (11.7oz) of drained crumbles for 80/20 pan-browned, or about 350g for 93/7. Broiling under the element loses a little more. That is enough to feed four in tacos or a meat sauce.',
    },
    {
      q: 'Does browning beef for a sauce (not draining) change how I log it?',
      a: 'If you keep all the fat and juices in the pan and eat them in the sauce, then the raw-weight macros are accurate — nothing was thrown away. Draining is what makes the raw conversion overstate your fat.',
    },
  ],

  'ground-beef-93-7': [
    {
      q: 'Is the raw-weight macro conversion accurate for 93/7, or does fat drain off like with 80/20?',
      a: 'It is accurate. 93/7 has only about 7g of fat per 100g raw and very little of it renders out, so the cooked crumbles keep almost all of it. Converting your cooked portion back to raw weight gives a reliable calorie and fat read — unlike 80/20, where a lot of fat ends up in the pan.',
    },
    {
      q: 'Why does lean ground beef come out dry?',
      a: 'There is little fat to keep the crumbles moist, so on high heat it goes from juicy to chalky fast, and the yield slides from 77% toward the low 70s. Brown it gently and pull it off the heat while a little pink remains to stay near 77%.',
    },
    {
      q: 'Can I use 80/20 macros for 93/7 if that is all my app has?',
      a: 'No — the difference is large. 80/20 is 254 calories and 20g fat per 100g raw; 93/7 is 152 calories and 7.2g fat. Using the wrong entry misstates your fat intake by nearly threefold. Pick the entry that matches the pack.',
    },
    {
      q: 'How much cooked meat does a pound of 93/7 make?',
      a: 'About 350g (12.3oz) pan-browned — noticeably more than the ~331g you get from 80/20, because lean beef loses less fat. That is roughly four generous taco or chilli servings.',
    },
  ],

  'ribeye-steak': [
    {
      q: 'Does doneness change the ribeye yield?',
      a: 'Yes, more than for most cuts. Rare holds a few points above the 84% average because it has barely given up any moisture; well-done drops below 80% as the extended heat drives out more water and renders more fat. The 84% figure is a medium result.',
    },
    {
      q: 'Why does ribeye keep more weight than a lean steak like sirloin?',
      a: 'Marbling. Ribeye is about 23g fat per 100g raw, threaded through the muscle, and fat displaces water — so there is less water to lose. The melted fat also bastes the surface and slows evaporation. A lean cut has more water and less self-basting, so it loses more.',
    },
    {
      q: 'If I trim the fat cap after cooking, how should I log it?',
      a: 'Log a smaller raw-equivalent than the whole steak. The simplest way: weigh the trimmed cooked meat you actually eat, divide by about 0.84, and log that. You are leaving behind fat that the whole-steak macros would otherwise count.',
    },
    {
      q: 'Is bone-in ribeye (rib steak / tomahawk) yield the same?',
      a: 'The meat behaves the same, but 10–20% of a bone-in steak\'s raw weight is bone you do not eat. Weigh the meat off the bone after cooking and convert that, or subtract the bone estimate from the raw weight first.',
    },
  ],

  'pork-chop': [
    {
      q: 'Why does pulled pork shrink so much more than a pork chop?',
      a: 'A chop cooks in minutes and loses about 22%. Pork shoulder is cooked for hours, which renders out most of its fat and keeps evaporating water the whole time — it loses about 35% (a 65% yield). Use the pork shoulder page for carnitas or pulled pork.',
    },
    {
      q: 'Why did grilling my chop give a higher yield than pan-frying?',
      a: 'Hard direct heat sears the surface fast, setting a crust that traps moisture before the inside overcooks. USDA puts broiled/grilled chop at 83% versus 78% pan-fried. Braising, despite the liquid, comes in at 76% because the longer cook time works against it.',
    },
    {
      q: 'Should I cook pork chops to 145°F or 160°F, and does it matter for tracking?',
      a: 'Modern guidance is 145°F (63°C) plus a 3-minute rest, where the chop is faintly pink and near the 78% yield. Taking it to the old 160°F "no pink" standard drives off more water and can drop the yield into the low 70s — and dries the chop out.',
    },
    {
      q: 'How do I handle a bone-in pork chop?',
      a: 'Bone is 15–25% of a bone-in chop\'s weight and you do not eat it. Weigh the meat off the bone after cooking and divide by 0.78, or estimate the bone and subtract it from the raw weight before converting.',
    },
    {
      q: 'Does the pork chop yield apply to pork tenderloin?',
      a: 'Roughly. Tenderloin is similarly lean and quick-cooking and lands in the same high-70s range when roasted, though it dries fast if overcooked. For a rough log, using the 78% chop figure is close enough.',
    },
  ],

  'pork-shoulder': [
    {
      q: 'How much pulled pork will a 2kg raw shoulder make?',
      a: 'About 1.3kg of cooked, shredded meat — a 65% yield. Bone-in shoulder loses the bone on top of that, so figure another 8–12% less. Plan on roughly 150g cooked pulled pork per sandwich.',
    },
    {
      q: 'Why does pork shoulder lose so much more than other cuts?',
      a: 'It is fatty and full of connective tissue, and it is cooked low and slow for hours specifically to melt that collagen. Over that long cook almost all the fat renders out and water keeps evaporating — far more than a quick-cooked chop ever loses.',
    },
    {
      q: 'Should I log pulled pork before or after adding BBQ sauce?',
      a: 'Before. Weigh the plain shredded meat and convert it to raw weight, then log the sauce separately — BBQ sauce is mostly sugar and adds real calories that are not in the pork.',
    },
    {
      q: 'Is my fat intake really as high as the raw-weight conversion says?',
      a: 'Probably a bit lower. A lot of fat renders into the drip tray over a long cook. If you skim or discard the drippings rather than mixing them back in, nudge the fat figure down — the difference is the fat you poured off.',
    },
    {
      q: 'Does the 65% yield cover smoking as well as oven and slow cooker?',
      a: 'Yes. Smoked, oven-roasted and slow-cooked shoulder all land close to 65% because the endpoint is the same — you cook until it shreds, around 90–96°C internal, not to a fixed time.',
    },
  ],

  'turkey-breast': [
    {
      q: 'Why is turkey breast yield (79%) higher than chicken breast (72%)?',
      a: 'Mostly size. A whole turkey breast is a much larger piece of meat, so proportionally less of it is exposed to drying heat and the interior is buffered by surrounding mass. Cut turkey breast into thin cutlets and the yield drops toward chicken-breast territory.',
    },
    {
      q: 'Can I use the whole-roast-turkey yield for a plain breast?',
      a: 'No. Whole-turkey and stuffed-turkey figures (often quoted around 70–74%) average in dark meat, skin and cavity losses. A skinless breast on its own holds about 79%.',
    },
    {
      q: 'How do I log supermarket "self-basting" or brined turkey breast?',
      a: 'Those carry an injected solution that is 8–15% of the weight — water, salt and sometimes fat. It cooks off partly, so the yield is unpredictable. If the pack has a nutrition label, log from that; otherwise weigh raw and expect to lose a little more than 21%.',
    },
    {
      q: 'Is deli roast turkey the same as home-roasted breast?',
      a: 'No. Deli turkey is brined and often has added water and starch, with its own cooked-weight nutrition label. Use that label at roughly the weight of the slices — do not convert it as if it were raw breast.',
    },
  ],

  'salmon': [
    {
      q: 'Why does salmon only lose about 15% when chicken loses 28%?',
      a: 'Salmon is an oily fish — about 13g fat per 100g raw — built in short, delicate muscle flakes with almost no connective tissue. It firms up gently instead of contracting hard, and the fat keeps it moist rather than draining away. So most of the weight stays in the fillet: an 85% yield.',
    },
    {
      q: 'Is farmed salmon yield different from wild?',
      a: 'Slightly. Farmed salmon is fattier, so it holds a touch more weight than lean wild sockeye or coho cooked the same way. The difference is small — a couple of percentage points — and the 85% figure works for both.',
    },
    {
      q: 'How do I log a skin-on fillet?',
      a: 'The skin is 5–8% of the weight and stays on the scale even after it renders its fat. Weigh skinless if you can. If you cook skin-on and remove the skin before eating, weigh the cooked flesh alone and divide by 0.85.',
    },
    {
      q: 'Does the salmon yield apply to canned or smoked salmon?',
      a: 'No. Canned salmon is already cooked and packed, sometimes with added salt or oil; smoked salmon is cured, not cooked. Both have their own labels and should be logged directly from the weight you eat.',
    },
    {
      q: 'What about the white stuff that comes out of the salmon?',
      a: 'That is albumin, a water-soluble protein pushed out as the flesh cooks. The amount is tiny relative to the fillet\'s total protein and does not meaningfully change your macros — it just looks unappetising. More of it appears when the fish is cooked fast or overcooked.',
    },
  ],

  'shrimp': [
    {
      q: 'Why does shrimp look like it shrinks more than 25%?',
      a: 'Because it curls and clenches. The muscle contracts hard and fast — that is the raw-straight-to-tight-C curl — concentrating the same mass into a smaller, denser shape. It is not really shedding a quarter of its bulk; the scale shows the true 25% loss.',
    },
    {
      q: 'How do I account for shrimp sold "treated" with sodium phosphate?',
      a: 'Treated shrimp is brined to hold water, so it weighs more raw and can lose more than 25% when cooked because it is shedding that added water. If the ingredient list mentions salt or sodium tripolyphosphate, expect a lower cooked weight than a "dry" pack of the same size.',
    },
    {
      q: 'Is shell-on shrimp weight the same as peeled?',
      a: 'No. The shell, tail and head are 30–45% of a shell-on shrimp\'s weight. Weigh peeled shrimp, or if you cook shell-on, peel after cooking and convert only the peeled cooked weight.',
    },
    {
      q: 'How should I log pre-cooked frozen shrimp?',
      a: 'It has already lost its cooking water, so do not convert it as raw. Log it from a cooked-shrimp entry at roughly the weight in the bag (drained of any glaze or ice).',
    },
    {
      q: 'What does "16/20" or "31/40" mean on a shrimp bag?',
      a: 'It is the count of shrimp per pound — "16/20" means 16 to 20 shrimp per 454g, so each raw shrimp is about 23–28g. Lower numbers are bigger shrimp. It helps you estimate portions without weighing every piece.',
    },
  ],

  'white-rice': [
    {
      q: 'Why is my rice heavier or stickier than 3× the dry weight?',
      a: 'You added more water, cooked it longer, or used a stickier variety. Rice cooked soft, or short-grain and sushi rice, absorb more and can push past 320–330%. A firm, separate-grained pilaf sits lower, nearer 260–280%. The 308% figure is a middle-of-the-road boiled result.',
    },
    {
      q: 'Does the type of rice change the yield?',
      a: 'Yes. Plain boiled white rice is about 308%. Parboiled ("converted") rice reaches about 358% and instant rice about 350%, because their starch is pre-gelatinised and holds more water. Brown rice is about 335% and has its own page. Basmati and jasmine sit close to plain white.',
    },
    {
      q: 'If I rinse rice before cooking, does that affect tracking?',
      a: 'Rinsing removes surface starch and a very small amount of the grain, which slightly lowers the final cooked weight and makes the grains less sticky. The effect on macros is negligible — keep logging from the dry weight you measured before rinsing.',
    },
    {
      q: 'How much dry rice is one cup of cooked rice?',
      a: 'About 50–55g of dry white rice makes roughly 160–170g (one cup) cooked. A cup of dry rice, about 185g, makes close to 570g cooked — three to four side portions.',
    },
    {
      q: 'Can I weigh rice cooked instead of dry?',
      a: 'Yes, as long as your database entry is for cooked rice. The danger is logging a cooked weight against a dry "per 100g" entry, which roughly triples your calories. This calculator converts either direction so you can weigh whenever is convenient.',
    },
  ],

  'brown-rice': [
    {
      q: 'Why does brown rice expand more than white rice?',
      a: 'The bran and germ layers are fibrous and water-resistant, so brown rice needs more water and a longer cook — and ends up absorbing more of it. Its yield is about 335% versus 308% for white.',
    },
    {
      q: 'Can I log brown rice as white rice to save time?',
      a: 'Not accurately. Brown rice has a different yield (335% vs 308%) and different macros — more fat and fibre from the germ and bran. Logging it as white understates fat and fibre and misjudges the portion.',
    },
    {
      q: 'Does brown basmati or short-grain brown rice match this figure?',
      a: 'Closely enough for tracking. All wholegrain brown rices land in the 320–345% range. Use the 335% figure unless your package gives specific cooked-weight data.',
    },
    {
      q: 'How much dry brown rice per person?',
      a: 'About 48–60g dry for a 160–200g cooked side portion. That is slightly less dry rice than white for the same cooked serving, because brown expands more.',
    },
  ],

  'pasta': [
    {
      q: 'Why is my cooked pasta not exactly 2.25× the dry weight?',
      a: 'Doneness. Drained at firm al dente, dry pasta is closer to 200%. Cooked soft, or left sitting in sauce, it keeps absorbing and climbs past 240%. The 225% figure is a normal just-past-al-dente result.',
    },
    {
      q: 'Does pasta shape change the yield?',
      a: 'Somewhat. Thin and small shapes absorb faster and more evenly; thick rigatoni and large shells sit a little lower. Long pasta like spaghetti runs higher — closer to 290% — and has its own entry. This page is a general dry-pasta average.',
    },
    {
      q: 'Is fresh pasta the same as dry?',
      a: 'No. Fresh egg pasta already contains a lot of moisture, so it gains far less when cooked — roughly 140–170% — and has different macros. Do not use the dry-pasta yield for fresh.',
    },
    {
      q: 'A restaurant pasta dish is huge — how much dry is that?',
      a: 'A 300–400g plate of cooked pasta is about 130–180g dry, two to three times the 57g box "serving." Worth knowing when you log a meal out.',
    },
    {
      q: 'Should I weigh pasta before or after adding sauce?',
      a: 'Weigh it drained, before sauce. Once it sits in sauce it absorbs both sauce and more water, and you can no longer separate the pasta weight from the sauce. Log the sauce as its own item.',
    },
  ],

  'quinoa': [
    {
      q: 'Is quinoa\'s yield the same as rice?',
      a: 'Close by weight — quinoa is about 314% and white rice about 308% — but the macros are very different. Quinoa has nearly double the protein and much more fat per dry gram, so the entries are not interchangeable.',
    },
    {
      q: 'Does rinsing quinoa change the cooked weight?',
      a: 'Barely. Rinsing removes the bitter saponin coating and a trace of the seed. It affects flavour, not the yield or macros in any way worth tracking — keep logging from the dry weight.',
    },
    {
      q: 'Why is my quinoa fluffier and lighter than expected?',
      a: 'Cooked with less water, or drained and steamed dry, quinoa sits toward the lower end of its range. Cooked with extra water until very soft, it holds more. The 314% figure assumes the standard 1-to-1.75 absorption method.',
    },
    {
      q: 'How much dry quinoa for a grain bowl?',
      a: 'About 60–70g dry per person when quinoa is the base of the bowl, cooking to roughly 190–220g. As a side alongside a protein, 50g dry is enough.',
    },
  ],

  'lentils': [
    {
      q: 'Why are my lentils firmer and lighter than the calculator says?',
      a: 'You cooked them briefly. USDA puts a 20-minute simmer at 261% versus 289% for lentils boiled or baked until fully soft — a real 28g difference per 100g dry. Use the lower figure if you like your lentils with bite.',
    },
    {
      q: 'Do red, green and Puy lentils have the same yield?',
      a: 'Roughly, with a spread. Red and yellow split lentils collapse and absorb a lot, landing at the high end. Firm green and Puy lentils cooked to just-tender stay intact and absorb less. The 289% figure is a fully-cooked average.',
    },
    {
      q: 'How do I log canned lentils?',
      a: 'A 400g can drains to about 240g, equivalent to roughly 85g dry. Divide the drained weight by about 2.85 for the dry-equivalent, or log directly from the can\'s cooked-weight label if it has one.',
    },
    {
      q: 'Do lentils need soaking, and does soaking change the yield?',
      a: 'They do not need soaking — they are small and thin-skinned. Soaking shortens the cook time slightly and can nudge the final hydrated weight up a little, but the effect on macros is negligible. Log from the dry weight either way.',
    },
  ],

  'black-beans': [
    {
      q: 'Why do my home-cooked beans yield less than 2.5×?',
      a: 'Old beans and hard, mineral-rich water both resist hydration. Beans more than a year old, or cooked without soaking, swell less and can land nearer 220–235%. A long soak, fresh beans and soft water push toward or past 250%.',
    },
    {
      q: 'How much dry black beans equals one can?',
      a: 'A 400g can drains to about 240–260g of beans, which is roughly 100g dry. So a 1lb bag of dry beans is about four and a half cans\' worth of beans once cooked, far cheaper.',
    },
    {
      q: 'Should I log canned beans with or without the liquid?',
      a: 'Drain and rinse first, then weigh. The canning liquid (aquafaba) adds weight and sodium and is usually discarded. If a recipe uses the liquid, account for it separately.',
    },
    {
      q: 'Do black beans, pinto and kidney beans share a yield?',
      a: 'They are close but not identical. Black beans are about 250%, kidney beans about 238%, pinto beans similar to black. Lentils are higher at 289%. Use the specific entry where you can.',
    },
  ],

  'broccoli': [
    {
      q: 'Does boiled broccoli really not lose any weight?',
      a: 'Essentially none. Water lost as the tissue softens is offset by boiling water the florets absorb, for a net 100% yield. Raw and boiled broccoli weigh the same, so you can log either.',
    },
    {
      q: 'What about roasted broccoli?',
      a: 'Roasting is a different story — dry oven heat drives off real water and a roasted portion can weigh 30–50% less than raw. This dataset does not score roasted broccoli, so weigh it after roasting and log against a roasted entry, plus any oil.',
    },
    {
      q: 'Is frozen broccoli different from fresh?',
      a: 'No. Frozen broccoli is blanched before freezing but behaves the same on the scale when you cook it — the boiled yield is still about 100%.',
    },
    {
      q: 'Does the stalk count the same as the florets?',
      a: 'Nutritionally the stalk is similar to the florets once peeled, and it cooks with the same near-100% yield. It is just denser, so it takes a minute or two longer to soften.',
    },
  ],

  'spinach': [
    {
      q: 'Why does my spinach look like it lost 80% when the yield is 77%?',
      a: 'You are seeing volume, not weight. Raw spinach leaves are mostly air and rigid structure. Heat collapses that structure instantly, so the pile shrinks dramatically — but the water inside the cells, which is what weighs something, mostly stays. The weight loss is only about 23%.',
    },
    {
      q: 'Does steaming really hold that much more than boiling?',
      a: 'Yes. Steamed spinach is about 93% versus 77% boiled — a 16-point gap, wider than for almost any other vegetable. Pressure-cooking goes the other way, down to about 68%. How you cook spinach changes the number more than it does for most foods.',
    },
    {
      q: 'How do I log spinach after I squeeze the water out?',
      a: 'Squeezing removes water that the yield figure assumes is still there. Weigh what remains after squeezing and treat it as a lower raw-equivalent — hard-squeezed cooked spinach can be closer to 50–60% of the raw weight.',
    },
    {
      q: 'Is frozen spinach equivalent to a certain amount of fresh?',
      a: 'Roughly. A 250g block of frozen chopped spinach is already blanched and drained and is equivalent to about 700–800g of raw leaves. Log it from a cooked-spinach entry.',
    },
    {
      q: 'A recipe says "10 cups raw spinach" — how much is that cooked?',
      a: 'About 280–300g of raw leaves, which cooks down to roughly 215–230g boiled — a bit more than a cup. The cup count sounds enormous because raw spinach is almost all air.',
    },
  ],

  'potato': [
    {
      q: 'Why do fries lose so much more weight than a boiled potato?',
      a: 'Frying boils off a large fraction of the potato\'s water at high heat and replaces only some of it with oil. A boiled potato keeps about 94% of its weight; fries drop to about 55% — and then carry absorbed oil the raw-potato macros do not include.',
    },
    {
      q: 'How should I log roast potatoes?',
      a: 'Use the oiled-skin baked yield, about 81%, for the potato itself, then add the roasting oil separately — usually 5–10g of fat per portion. Logging roast potato as plain boiled potato misses both the water loss and the oil.',
    },
    {
      q: 'Does mashed potato use the same yield?',
      a: 'The potato part loses only a little in boiling (about 94%), but mash also contains milk, butter or cream. Weigh the potato before mashing and log the dairy and fat separately, or you will undercount calories.',
    },
    {
      q: 'Is a baked potato in foil different from one baked directly on the rack?',
      a: 'Yes. Foil traps steam, so a foil-baked potato holds about 95% of its weight. Baked directly with an oiled skin, more water escapes and it drops to about 81%.',
    },
    {
      q: 'How much raw potato do I need for mashed potato for four?',
      a: 'About 800g–1kg of raw potato — 200–250g per person — before adding milk and butter. It loses only a little weight boiling, so the raw weight is close to the cooked-potato weight you start mashing.',
    },
  ],

  'sweet-potato': [
    {
      q: 'Why does baked sweet potato lose weight but boiled sweet potato gain it?',
      a: 'Dry oven heat evaporates water and concentrates the flesh — a 78% baked yield. Boiling does the opposite: the flesh absorbs a little cooking water, ending slightly heavier than it started, a 101% yield. Same potato, opposite direction, depending on method.',
    },
    {
      q: 'Can I use regular potato yields for sweet potato?',
      a: 'No. Baked sweet potato loses about 22%, while a foil-baked regular potato loses only about 5%. Sweet potato is wetter and sugarier and behaves differently under heat.',
    },
    {
      q: 'Why does baked sweet potato taste so much sweeter than boiled?',
      a: 'Baking removes water and concentrates the sugars, and the dry heat lets them caramelise. The total sugar is the same as the raw potato — it is just packed into fewer grams, which is also why the baked yield is only 78%.',
    },
    {
      q: 'How do I log sweet potato fries?',
      a: 'Weigh them cooked and log against a sweet-potato-fries entry, or estimate the raw potato and add the frying oil separately. Like regular fries, they lose a lot of water and pick up oil the plain-potato macros miss.',
    },
  ],
};

/**
 * Per-food FAQ by locale. English is the source; es/fr/de/pt/it are full
 * translations. A locale not listed here falls through to the templated set.
 */
export const FOOD_FAQ_BY_ID: Partial<Record<Locale, Record<string, FaqItem[]>>> = {
  en: FOOD_FAQ_EN_BY_ID,
  es: FOOD_FAQ_ES_BY_ID,
  fr: FOOD_FAQ_FR_BY_ID,
  de: FOOD_FAQ_DE_BY_ID,
  pt: FOOD_FAQ_PT_BY_ID,
  it: FOOD_FAQ_IT_BY_ID,
};

/** Per-food FAQ for this locale, or null if this food uses the templated set. */
export function getFoodFaqById(locale: Locale, foodId: string): FaqItem[] | null {
  const byLocale = FOOD_FAQ_BY_ID[locale];
  if (!byLocale) return null;
  return byLocale[foodId] ?? FOOD_FAQ_EN_BY_ID[foodId] ?? null;
}
