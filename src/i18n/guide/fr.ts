import type { GuideContent } from './types';

export const frGuide: GuideContent = {
  badge: 'Guide de Référence Scientifique et Nutritionnel',
  title: 'Le Guide Complet des Poids d’Aliments Crus vs. Cuits, de la Rétention d’Eau et de la Précision Nutritionnelle',
  intro:
    'Quiconque a déjà cuisiné un repas, utilisé une balance de cuisine ou consigné ses calories dans une application de suivi nutritionnel sait que les aliments ne pèsent pas à la sortie de la poêle ce qu’ils pesaient à la sortie du réfrigérateur. Les protéines animales rétrécissent et perdent jusqu’à un tiers de leur masse initiale par évaporation et fonte des graisses, tandis que les féculents, le riz, les pâtes et les légumineuses absorbent l’eau bouillante et doublent ou triplent de volume. Ce guide de référence détaille la thermodynamique des rendements culinaires, les formules mathématiques de conversion, les données officielles de l’USDA et les stratégies pratiques pour le batch cooking et le suivi précis des macronutriments.',

  sec1Title: '1. Physique Cellulaire et Chimie des Rendements de Cuisson',
  sec1Intro:
    'La différence entre le poids cru et le poids cuit découle directement de la biologie cellulaire et de la thermodynamique. Tout aliment brut contient eau, protéines, lipides et glucides. La chaleur modifie ces structures, provoquant l’expulsion ou l’absorption d’eau et de lipides.',
  sec1ProteinTitle: 'Dénaturation des Protéines dans les Viandes et Poissons',
  sec1ProteinText:
    'Le tissu musculaire animal cru est composé d’environ 70 % à 75 % d’eau en masse, étroitement liée au sein d’un réseau de protéines myofibrillaires formé de myosine et d’actine. Sous l’effet de la chaleur :',
  sec1ProteinBullets: [
    'Entre 40°C et 55°C : Les molécules de myosine se dénaturent et se déroulent, ce qui entraîne une contraction transversale (en diamètre) des fibres musculaires.',
    'Entre 60°C et 66°C : Le collagène conjonctif commence à se rétracter longitudinalement. L’eau retenue dans les espaces intercellulaires est alors expulsée comme l’eau d’une éponge que l’on compresse.',
    'Au-delà de 74°C : L’actine se dénature complètement, rigidifiant le réseau musculaire et vaporisant les jus restants. Ainsi, les viandes cuites pèsent entre 15 % et 35 % de moins qu’à l’état cru.',
  ],
  sec1StarchTitle: 'Gélatinisation de l’Amidon dans les Céréales et Légumineuses',
  sec1StarchText:
    'Les féculents secs tels que le riz blanc, le riz complet, l’avoine, les lentilles et les pâtes sèches arrivent dans la casserole déshydratés, avec un taux d’humidité inférieur à 12 %. Au contact de l’eau bouillante :',
  sec1StarchBullets: [
    'Hydratation Capillaire : Les molécules d’eau pénètrent dans les granules d’amidon semi-cristallins par des canaux microscopiques.',
    'Seuil de Gélatinisation (60°C–85°C) : Les liaisons hydrogène de l’amylose et de l’amylopectine se rompent, permettant aux granules d’absorber un volume massif d’eau et de gonfler.',
    'Multiplication de la Masse : L’eau restant emprisonnée dans le gel d’amidon, les grains se dilatent pour atteindre 2,2× à 3,5× leur poids sec. Le riz cuit est constitué de 65 % à 70 % d’eau absorbée.',
  ],
  sec1VegText:
    'Les légumes réagissent différemment. Les épinards et courgettes contiennent une forte proportion d’eau cellulaire. La chaleur dissout la pectine et affaisse les poches d’air. Pour les épinards, cela provoque un effondrement de 80 % à 90 % du volume, mais une perte de masse réelle de 23 %. Les tubercules comme les pommes de terre ne perdent qu’environ 6 % bouillis entiers, l’amidon retenant l’eau.',

  sec2Title: '2. Le Cadre Mathématique Universel de Conversion',
  sec2Intro:
    'La conversion entre poids cru et poids cuit repose sur un paramètre scientifique unique : le Rendement de Cuisson (Yield %). Établi par des décennies de mesures scientifiques menées par le Département de l’Agriculture des États-Unis (USDA), le rendement représente le ratio entre le poids comestible final cuit et le poids brut initial cru :',
  sec2EquationLabel: 'Équation Fondamentale du Rendement',
  sec2Equation: 'Rendement % = (Poids Cuit ÷ Poids Cru) × 100',
  sec2SubIntro:
    'Une fois ce pourcentage de rendement connu, deux formules mathématiques permettent de convertir dans les deux sens avec une précision absolue :',
  sec2FormulaATitle: 'Formule A : Convertir le Poids Cru en Poids Cuit',
  sec2FormulaADesc:
    'Utilisez cette formule lorsque vous préparez vos repas, prévoyez vos portions ou faites vos courses :',
  sec2FormulaACode: 'Poids Cuit = Poids Cru × (Rendement % ÷ 100)',
  sec2FormulaAExampleHtml:
    '<strong>Exemple pas à pas :</strong> Vous disposez de 250 g de filet de poulet cru (rendement USDA = 72 %) :<br /><code>Cuit = 250 g × 0,72 = 180 g</code>. Votre morceau cru donnera 180 g de viande cuite dans votre assiette.',
  sec2FormulaBTitle: 'Formule B : Convertir le Poids Cuit en Équivalent Cru',
  sec2FormulaBDesc:
    'Utilisez cette formule lorsque vous pesez un plat déjà cuit (ex. restes au réfrigérateur ou restaurant) et devez renseigner la valeur crue dans votre application :',
  sec2FormulaBCode: 'Équivalent Cru = Poids Cuit ÷ (Rendement % ÷ 100)',
  sec2FormulaBExampleHtml:
    '<strong>Exemple pas à pas :</strong> Vous avez servi 150 g de bœuf haché 80/20 cuit (rendement USDA = 73 %) :<br /><code>Cru = 150 g ÷ 0,73 = 205,5 g</code>. Vous avez consommé l’équivalent nutritionnel de 205,5 g de bœuf cru.',
  sec2ShrinkageNoteHtml:
    '<strong>Comprendre la Perte en Masse (Réduction) :</strong> Pour les viandes où la masse diminue, le taux de réduction est simplement <code>100 % − Rendement %</code>. Un filet de poulet avec un rendement de 72 % subit une réduction de <code>100 % − 72 % = 28 %</code>. Pour les céréales qui gonflent au-delà de 100 %, le multiplicateur est supérieur à 1,0 (ex. le riz blanc avec 300 % de rendement possède un multiplicateur d’expansion de 3,0×).',

  sec3Title: '3. Tableau de Référence Culinologique (Rendements USDA)',
  sec3Intro:
    'Voici le tableau comparatif complet des viandes, volailles, poissons, céréales, légumineuses et légumes. Chaque valeur est issue du Manuel Agricole USDA nº 102, du Tableau des Rendements de Cuisson des Viandes et de USDA FoodData Central :',
  sec3ColFood: 'Aliment',
  sec3ColMethod: 'Mode de Cuisson',
  sec3ColYield: 'Rendement USDA',
  sec3ColRtc: 'Cru→Cuit',
  sec3ColCtr: 'Cuit→Cru',
  sec3ColMoisture: 'Variation d’Eau',
  sec3ColNotes: 'Note Culinaire',
  tableRows: [
    { food: 'Blanc de Poulet (Sans peau ni os)', method: 'Four / Gril', yieldPct: '72%', rtc: '× 0,72', ctr: '÷ 0,72', moisture: '−28%', notes: '200 g cru donne ~144 g cuit' },
    { food: 'Cuisse de Poulet (Désossée)', method: 'Rôtie / Poêle', yieldPct: '74%', rtc: '× 0,74', ctr: '÷ 0,74', moisture: '−26%', notes: 'Plus riche en gras que le blanc' },
    { food: 'Ailes de Poulet (Avec os)', method: 'Four / Air Fryer', yieldPct: '55%', rtc: '× 0,55', ctr: '÷ 0,55', moisture: '−45%', notes: 'Les os représentent ~40% du poids' },
    { food: 'Dinde Hachée (93/7 Maigre)', method: 'Poêle', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: '200 g cru donne ~156 g cuit' },
    { food: 'Bœuf Haché (80/20)', method: 'Poêle / Gril', yieldPct: '73%', rtc: '× 0,73', ctr: '÷ 0,73', moisture: '−27%', notes: '200 g cru donne ~146 g cuit' },
    { food: 'Bœuf Haché (90/10 Maigre)', method: 'Poêle', yieldPct: '81%', rtc: '× 0,81', ctr: '÷ 0,81', moisture: '−19%', notes: 'Viande maigre retenant plus d’eau' },
    { food: 'Faux-Filet / Pavé de Bœuf', method: 'Saisi à Point', yieldPct: '75%', rtc: '× 0,75', ctr: '÷ 0,75', moisture: '−25%', notes: 'Cuit à 63°C à cœur' },
    { food: 'Entrecôte de Bœuf', method: 'Gril / Poêle', yieldPct: '71%', rtc: '× 0,71', ctr: '÷ 0,71', moisture: '−29%', notes: 'Le gras persillé fond à la cuisson' },
    { food: 'Côtelette de Porc (Échine/Longe)', method: 'Poêle / Four', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: 'Cuit à 63°C à cœur' },
    { food: 'Filet Mignon de Porc', method: 'Rôti', yieldPct: '77%', rtc: '× 0,77', ctr: '÷ 0,77', moisture: '−23%', notes: 'Morceau maigre et tendre' },
    { food: 'Bacon / Lardons Grillés', method: 'Poêle', yieldPct: '33%', rtc: '× 0,33', ctr: '÷ 0,33', moisture: '−67%', notes: 'Fonte majeure des lipides' },
    { food: 'Pavé de Saumon de l’Atlantique', method: 'Four / Poêle', yieldPct: '85%', rtc: '× 0,85', ctr: '÷ 0,85', moisture: '−15%', notes: 'Les oméga-3 restent dans la chair' },
    { food: 'Poisson Blanc (Cabillaud / Tilapia)', method: 'Four / Vapeur', yieldPct: '80%', rtc: '× 0,80', ctr: '÷ 0,80', moisture: '−20%', notes: 'Chair délicate et feuilletée' },
    { food: 'Crevettes Crues Décortiquées', method: 'Sautées / Bouillies', yieldPct: '75%', rtc: '× 0,75', ctr: '÷ 0,75', moisture: '−25%', notes: '200 g cru donne ~150 g cuit' },
    { food: 'Thon en Boîte au Naturel', method: 'Égoutté', yieldPct: '68%', rtc: '× 0,68', ctr: '÷ 0,68', moisture: '−32%', notes: 'Une boîte de 142 g donne ~97 g net' },
    { food: 'Riz Blanc (Long Grain / Basmati)', method: 'Bouilli / Vapeur', yieldPct: '300%', rtc: '× 3,00', ctr: '÷ 3,00', moisture: '+200%', notes: '100 g cru donne 300 g cuit' },
    { food: 'Riz Complet (Brun)', method: 'Bouilli', yieldPct: '270%', rtc: '× 2,70', ctr: '÷ 2,70', moisture: '+170%', notes: 'Le son freine l’absorption d’eau' },
    { food: 'Pâtes Sèches (Spaghetti / Penne)', method: 'Bouillies Al Dente', yieldPct: '225%', rtc: '× 2,25', ctr: '÷ 2,25', moisture: '+125%', notes: '100 g sec donne ~225 g cuit' },
    { food: 'Flocons d’Avoine', method: 'Bouillie à l’Eau', yieldPct: '300%', rtc: '× 3,00', ctr: '÷ 3,00', moisture: '+200%', notes: '50 g sec donne 150 g cuit' },
    { food: 'Avoine Concassée (Steel Cut)', method: 'Mijotée', yieldPct: '350%', rtc: '× 3,50', ctr: '÷ 3.50', moisture: '+250%', notes: 'Grains denses absorbant plus d’eau' },
    { food: 'Quinoa Sec', method: 'Bouilli', yieldPct: '310%', rtc: '× 3,10', ctr: '÷ 3,10', moisture: '+210%', notes: '100 g sec donne 310 g cuit' },
    { food: 'Lentilles Vertes / Brunes', method: 'Bouillies', yieldPct: '290%', rtc: '× 2,90', ctr: '÷ 2,90', moisture: '+190%', notes: '100 g sec donne 290 g cuit' },
    { food: 'Haricots Noirs Secs', method: 'Trempés & Bouillis', yieldPct: '240%', rtc: '× 2,40', ctr: '÷ 2,40', moisture: '+140%', notes: 'Prend 2,4× son volume d’origine' },
    { food: 'Épinards Crus', method: 'Vapeur / Tombés', yieldPct: '77%', rtc: '× 0,77', ctr: '÷ 0,77', moisture: '−23%', notes: 'Perd 80% volume, 23% masse' },
    { food: 'Brocoli en Fleurettes', method: 'Vapeur / Bouilli', yieldPct: '100%', rtc: '× 1,00', ctr: '÷ 1,00', moisture: '0%', notes: 'L’eau de surface compense la perte' },
    { food: 'Pomme de Terre Entière', method: 'Bouillie / Four', yieldPct: '94%', rtc: '× 0,94', ctr: '÷ 0,94', moisture: '−6%', notes: 'La peau retient la vapeur interne' },
    { food: 'Patate Douce en Cubes', method: 'Four Rôtie', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: 'Le rôtissage concentre les sucres' },
  ],

  sec4Title: '4. Loi de Conservation des Macronutriments et Pièges du Suivi Caloric',
  sec4Intro:
    'L’une des idées reçues les plus tenaces dans le domaine du fitness et de la nutrition consiste à croire que la cuisson détruit ou diminue les calories des aliments. Les lois fondamentales de la physique prouvent le contraire : la Loi de Conservation de la Masse démontre que la matière ne disparaît pas dans l’air.',
  sec4CardTitle: 'Qu’est-ce qui s’Échappe Vraiment de la Poêle ?',
  sec4CardText:
    'Lorsque votre viande grésille dans la poêle, la fumée blanche qui s’en élève est de la vapeur d’eau pure (H2O). L’eau contient exactement zéro calorie, zéro gramme de protéine, zéro gramme de glucide et zéro gramme de lipide. Les acides aminés des protéines musculaires ne s’évaporent pas.',
  sec4RawLabel: 'Blanc de Poulet Cru (100 g) :',
  sec4RawCals: '120 Calories',
  sec4RawProtein: '22,5 g Protéines',
  sec4RawFat: '2,6 g Lipides • 0 g Glucides',
  sec4CookedLabel: 'Poids Cuit Obtenu (~72 g) :',
  sec4CookedCals: '120 Calories (Inchangé)',
  sec4CookedProtein: '22,5 g Protéines (Inchangé)',
  sec4CookedFat: '2,6 g Lipides • 0 g Glucides',
  sec4CardSummaryHtml:
    'Parce que 28 g d’eau sans calorie se sont évaporés, la viande cuite est devenue beaucoup plus dense en nutriments au gramme près : elle apporte environ <strong>31,25 g de protéines pour 100 g cuits</strong>, contre seulement <strong>22,5 g pour 100 g crus</strong>.',
  sec4TrapTitle: 'Le Piège Redoutable des Applications de Comptage',
  sec4TrapP1:
    'Des applications comme MyFitnessPal ou MacroFactor intègrent des bases de données où les aliments bruts sont renseignés à l’état cru par défaut. Quand vous cuisez du poulet, pesez 150 g de viande cuite et sélectionnez « Blanc de Poulet » brut, vous commettez une lourde erreur.',
  sec4TrapP2Html:
    'En réalité, 150 g de poulet cuit correspondent à <code>150 g ÷ 0,72 = 208 g</code> cru. Vous avez consommé 250 calories et 46,8 g de protéines, mais votre journal n’a noté que 180 calories et 33,8 g. Sur un seul repas, vous sous-estimez <strong>70 calories et 13 g de protéines</strong>. Sur une journée, cet écart cumulé de 200 à 300 calories bloque une perte de gras !',
  sec4TrapP3:
    'L’erreur inverse survient avec les féculents : peser 200 g de riz blanc cuit et le renseigner comme riz sec fait enregistrer 730 calories au lieu de 245 calories réelles.',

  sec5Title: '5. Batch Cooking et le Dilemme de la Marmite Partagée',
  sec5Intro:
    'En cuisinant pour la semaine, peser chaque ingrédient cru individuellement par assiette est impossible. Si vous cuisinez 1,5 kg de poulet cru avec 400 g de riz sec et des légumes dans une cocotte, comment diviser les portions avec rigueur ?',
  sec5Strat1Title: 'Stratégie 1 : La Méthode de la Tare Totale Cuite',
  sec5Strat1Desc: 'Parfaite pour servir des portions de tailles différentes :',
  sec5Strat1StepsHtml: [
    '<strong>Peser la Marmite Vide :</strong> Notez la tare avant cuisson (ex. 1 000 g).',
    '<strong>Sommer les Macros Crus :</strong> Calculez calories et protéines totales (ex. 2 400 kcal, 200 g protéines).',
    '<strong>Peser le Plat Cuit :</strong> Pesez le plat plein (ex. 3 000 g brut) et soustrayez la tare : <code>3 000 g − 1 000 g = 2 000 g net cuit</code>.',
    '<strong>Calculer la Densité :</strong> Divisez les macros par le poids cuit : <code>2 400 kcal ÷ 2 000 g = 1,2 kcal/g</code>.',
    '<strong>Servir :</strong> Servez une portion (ex. 300 g) : <code>300 g × 1,2 = 360 kcal</code>.',
  ],
  sec5Strat2Title: 'Stratégie 2 : La Répartition Égale en Boîtes Repas',
  sec5Strat2Desc:
    'Si vous préparez 5 repas identiques, répartissez le plat de manière égale dans 5 boîtes. Consignez 1/5 (20 %) de la recette crue chaque jour. La moyenne hebdomadaire est 100 % exacte.',

  sec6Title: '6. Impact des Modes de Cuisson et de la Température sur les Rendements',
  sec6Intro: 'La technique employée et la température finale à cœur influencent directement la rétention d’eau :',
  sec6DryTitle: 'Air Fryer et Grillades',
  sec6DryTextHtml:
    'La convection d’air très rapide ou la flamme vive accélèrent l’évaporation, réduisant le rendement du poulet à <strong>65 % – 68 %</strong>.',
  sec6MoistTitle: 'Mijotés et Cuisson en Cocotte',
  sec6MoistTextHtml:
    'Le couvercle retient la vapeur, conservant les sucs dans la sauce et maintenant des rendements élevés de <strong>76 % – 79 %</strong>.',
  sec6SousVideTitle: 'Précision Sous-Vide',
  sec6SousVideTextHtml:
    'L’absence d’air dans les sachets scellés empêche toute perte évaporatoire, atteignant les rendements les plus hauts : <strong>81 % – 85 %</strong>.',
  sec6DonenessTitle: 'Cuisson du Bœuf et Rendements Observés',
  donenessRows: [
    { name: 'Saignant (52°C)', yield: '88–90% Rendement' },
    { name: 'À Point (57°C)', yield: '80–84% Rendement' },
    { name: 'Bien Cuit (63°C)', yield: '74–78% Rendement' },
    { name: 'Très Cuit (74°C+)', yield: '62–66% Rendement' },
  ],

  sec7Title: '7. Considérations Spéciales : Os, Peau et Injection d’Eau Industrielle',
  sec7BoneTitle: 'Morceaux Avec Os vs. Sans Os',
  sec7BoneText:
    'Les os n’apportent aucune calorie digestible. Pourcentages moyens de masse osseuse : blanc de poulet avec os (20-25%), ailes de poulet (45-50%), côte de bœuf (15-20%), travers de porc (35-40%). Pesez la viande avec os avant le repas, pesez les os nettoyés après et soustrayez pour obtenir la chair comestible réelle.',
  sec7InjectionTitle: 'Viandes Injectées d’Eau en Grande Surface',
  sec7InjectionText:
    'Nombre de filets de volaille industriels sont saumurés avec jusqu’à 15 % de solution aqueuse. À la poêle, cette eau s’échappe abondamment, provoquant un rétrécissement atteignant 35 %. Choisir des volailles fermières ou refroidies à l’air garantit des rendements conformes aux données USDA.',

  sec8Title: '8. Fiabilité Scientifique : Le Standard Officiel USDA',
  sec8Text:
    'Tous les coefficients de rendement de ce calculateur proviennent des études du Service de Recherche Agricole de l’USDA (ARS), notamment le Tableau des Rendements de Cuisson des Viandes, le Manuel Agricole nº 102 et USDA FoodData Central. Des protocoles de laboratoire reproductibles qui éliminent les erreurs des applications participatives.',

  sec9Title: '9. Conseils Pratiques en Cuisine',
  sec9TipsHtml: [
    '<strong>Utilisez une Balance Digitale :</strong> Précision au gramme près avec bouton de tare instantané.',
    '<strong>Comptez les Matières Grasses Séparément :</strong> Pesez toujours les huiles de cuisson et le beurre indépendamment du rendement de la viande.',
    '<strong>Privilégiez la Régularité :</strong> Adopter la même méthode de mesure semaine après semaine est la clé d’une progression physique mesurable.',
  ],

  footerTeam: 'Équipe Éditoriale et Scientifique : Raw to Cooked Calculator',
  footerSource: 'Fondé sur les rapports scientifiques du Département de l’Agriculture des États-Unis (USDA). Mis à jour en Octobre 2026.',
  footerMethodology: 'Consulter la Méthodologie Complète →',
  footerAbout: 'À Propos',
};
