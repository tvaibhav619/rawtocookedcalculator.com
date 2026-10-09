export const LOCALES = ['en', 'es', 'fr', 'de', 'pt', 'it'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  it: 'Italiano',
};

export const ui = {
  en: {
    // Nav
    'nav.wordmark': 'Raw→Cooked',
    'nav.chicken': 'Chicken',
    'nav.rice': 'Rice',
    'nav.beef': 'Beef',
    'nav.darkMode': 'Toggle dark mode',
    'nav.language': 'Language',

    // Hero
    'hero.eyebrow': 'Based on USDA cooking yield data',
    'hero.heading': 'Raw to Cooked Weight Conversion Calculator',
    'hero.description':
      'Free raw to cooked weight conversion calculator and raw to cooked meat weight conversion calculator. Convert raw to cooked chicken weight, beef, pork, steak, rice, and pasta with USDA cooking yields and complete macronutrients.',
    'hero.usda':
      'All yields sourced from USDA FoodData Central, the USDA Table of Cooking Yields, and USDA Agriculture Handbook No. 102.',

    // Browse
    'browse.heading': 'Browse by food',
    'browse.description':
      '{n} foods across all three major categories, each with its USDA cooking yield and a full macro breakdown.',
    'browse.catMeat': 'Meat, Poultry & Seafood',
    'browse.catGrains': 'Grains, Pasta & Legumes',
    'browse.catVeg': 'Vegetables',
    'browse.note.chicken': 'Loses 28% when cooked',
    'browse.note.beef': 'Loses 27% when cooked',
    'browse.note.salmon': 'Loses 15% when cooked',
    'browse.note.pork': 'Loses 22% when cooked',
    'browse.note.rice': 'Expands 3× when cooked',
    'browse.note.pasta': 'Expands 2.25× when cooked',
    'browse.note.lentils': 'Expands 2.9× when cooked',
    'browse.note.quinoa': 'Expands 3.1× when cooked',
    'browse.note.spinach': 'Loses 23% when cooked',
    'browse.note.broccoli': 'No net weight change',
    'browse.note.potato': 'Loses 6% when cooked',
    'browse.note.sweetPotato': 'Loses 22% when cooked',

    // Food names (browse list)
    'browse.food.chicken': 'Chicken Breast',
    'browse.food.beef': 'Ground Beef (80/20)',
    'browse.food.salmon': 'Salmon Fillet',
    'browse.food.pork': 'Pork Chop',
    'browse.food.rice': 'White Rice',
    'browse.food.pasta': 'Pasta',
    'browse.food.lentils': 'Lentils',
    'browse.food.quinoa': 'Quinoa',
    'browse.food.spinach': 'Spinach',
    'browse.food.broccoli': 'Broccoli',
    'browse.food.potato': 'Potato',
    'browse.food.sweetPotato': 'Sweet Potato',

    // Callout (spinach/rice)
    'callout.eyebrow': 'Surprising yields',
    'callout.heading': 'Spinach collapses in volume — but only loses 23% of its weight',
    'callout.description':
      "Spinach has a 77% cooking yield — 100g of raw leaves still weighs about 77g cooked, a loss of just 23%. A full pan of raw spinach wilts to almost nothing, so nearly everyone assumes the weight drops just as steeply, but what collapses is the volume, not the mass. White rice runs the other way: 100g dry becomes 300g cooked. Both are why a kitchen scale beats eyeballing.",
    'callout.spinachBtn': 'Spinach calculator →',
    'callout.riceBtn': 'Rice calculator →',

    // Why USDA
    'usda.heading': 'Why USDA data?',
    'usda.meatLabel': 'Meat & Poultry',
    'usda.meatText':
      'Yields from the <strong>USDA Table of Cooking Yields for Meat and Poultry</strong> — the same source used by food manufacturers and dietitians.',
    'usda.grainsLabel': 'Grains & Vegetables',
    'usda.grainsText':
      'Yields from <strong>USDA Agriculture Handbook No. 102</strong> and from comparing raw vs. cooked entries in <strong>USDA FoodData Central</strong> (fdc.nal.usda.gov), the authoritative US nutrient database.',

    // Calculator
    'calc.foodLabel': 'Food',
    'calc.foodPlaceholder': 'Search — chicken breast, white rice, broccoli…',
    'calc.clearFood': 'Clear food selection',
    'calc.foodSuggestions': 'Food suggestions',
    'calc.noFoodsFound': 'No foods found.',
    'calc.directionLabel': 'Direction',
    'calc.rawToCooked': 'Raw → Cooked',
    'calc.cookedToRaw': 'Cooked → Raw',
    'calc.rawWeight': 'Raw weight',
    'calc.cookedWeight': 'Cooked weight',
    'calc.weightPlaceholder': 'e.g. 200',
    'calc.emptyState': 'Search for a food above to get started.',
    'calc.nutritionHeader': 'Nutrition — for this amount',
    'calc.calories': 'Calories',
    'calc.protein': 'Protein',
    'calc.carbs': 'Carbs',
    'calc.fat': 'Fat',
    'calc.sourceLabel': 'Source',
    'calc.estimateSource': 'Industry-standard estimate (USDA data unavailable for this item)',
    'calc.estimateNote':
      'This yield figure is an industry-standard estimate. USDA has not published a direct cooking-yield measurement for this item.',
    'calc.morePrecise': '+ More precise: choose cooking method',
    'calc.hidePrecise': '− Hide cooking method',
    'calc.cookingMethodLabel': 'Cooking method',
    'calc.unitLabel': 'Weight unit',
    'calc.yieldExpand': 'Expands to {n}× its dry weight · USDA yield: {pct}%',
    'calc.yieldLoss': '{loss}% weight loss when cooked · USDA yield: {pct}%',

    // Footer
    'footer.tagline':
      'Free raw to cooked weight conversion calculator with USDA cooking yields for meat, chicken, grains, and produce. Full macros for every conversion.',
    'footer.popularFoods': 'Popular Foods',
    'footer.dataSources': 'Data Sources',
    'footer.usdaMeat': 'USDA Table of Cooking Yields for Meat and Poultry',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.usdaHandbook': "USDA Agriculture Handbook No. 102 (1975)",
    'footer.nonUsdaNote':
      "Soy chunks use IFCT 2017 (India’s official tables); USDA does not track that food.",
    'footer.disclaimer':
      'Values are per the USDA data above. Always weigh your food with a kitchen scale for accuracy.',

    // Food page
    'food.estimatedYield': 'Estimated yield',
    'food.rawToCookedCalc': 'Raw to Cooked Calculator',
    'food.usdaCookingYield': 'USDA cooking yield',
    'food.source': 'Source',
    'food.estimateSource':
      'Industry-standard estimate — USDA has not published direct cooking-yield data for this food.',
    'food.yieldByMethod': 'Yield by cooking method',
    'food.yieldByMethodSource': 'Source: USDA Table of Cooking Yields for Meat and Poultry',
    'food.chickenHeading': 'Why chicken breast is the macro-tracking gold standard',
    'food.chickenP1':
      'Skinless, boneless chicken breast delivers roughly 22.5g of protein per 100g raw — one of the highest protein-per-calorie ratios of any whole food. At only 120 calories and 2.6g of fat per 100g raw, it\'s the go-to lean protein for bodybuilders, athletes, and anyone managing a caloric deficit.',
    'food.chickenP2':
      'Because chicken breast loses about 28% of its weight when cooked, <strong>logging the cooked weight against a raw-weight label undercounts your actual protein</strong>. A 150g cooked portion came from roughly 210g raw — 210g is the number to log against the USDA nutrition label.',
    'food.calcHeading': '{name} Weight Conversion Calculator',
    'food.faqHeading': 'Frequently asked questions',
    'food.relatedLabel': 'Related calculators',
    'food.allFoods': 'All foods →',

    // Page titles / SEO
    'page.homeTitle': 'Raw to Cooked Weight Conversion Calculator | Meat & Food Converter',
    'page.homeDescription':
      'Free raw to cooked weight conversion calculator and raw to cooked meat weight conversion calculator. Convert raw to cooked chicken weight, beef, steak, and grains with USDA yields.',
    // Footer company links, yield descriptions, data-source labels
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.methodology": "Methodology",
    "yield.loses": "Loses {loss}% of its weight when cooked",
    "yield.expands": "Expands to {n}× its dry weight when cooked",
    "source.usdaMeatTable": "USDA Table of Cooking Yields for Meat and Poultry",
    "source.usdaHandbook102": "USDA Agriculture Handbook No. 102 (1975)",
    "source.usdaFdc": "USDA FoodData Central (raw vs. cooked entries)",
    "source.ifct": "IFCT 2017 — Indian Food Composition Tables (India’s official nutrition authority)",
    "calc.ifctNote":
      "This yield is a real, calculated figure — but it comes from IFCT 2017, India’s official food composition tables, rather than USDA, which does not track this food.",
    "calc.noteLabel": "Note:",

    "footer.brand": "Raw→Cooked Calculator",
  },

  es: {
    'nav.wordmark': 'Crudo→Cocido',
    'nav.chicken': 'Pollo',
    'nav.rice': 'Arroz',
    'nav.beef': 'Res',
    'nav.darkMode': 'Cambiar modo oscuro',
    'nav.language': 'Idioma',

    'hero.eyebrow': 'Basado en datos de rendimiento del USDA',
    'hero.heading': 'Calculadora Crudo a Cocido',
    'hero.description':
      'La carne cocida pesa entre un 15% y un 35% menos que en crudo; el arroz y la pasta pesan dos o tres veces más. Introduce cualquier peso, crudo o cocido, para convertirlo — con los macros completos (calorías, proteínas, carbohidratos, grasas) para carnes, cereales y verduras.',
    'hero.usda':
      'Todos los rendimientos provienen de USDA FoodData Central, la Tabla de Rendimientos de Cocción del USDA y el Manual de Agricultura n.º 102 del USDA.',

    'browse.heading': 'Explorar por alimento',
    'browse.description':
      '{n} alimentos en las tres categorías principales, cada uno con su rendimiento de cocción del USDA y el desglose completo de macros.',
    'browse.catMeat': 'Carne, Aves y Mariscos',
    'browse.catGrains': 'Cereales, Pasta y Legumbres',
    'browse.catVeg': 'Verduras',
    'browse.note.chicken': 'Pierde el 28% al cocinar',
    'browse.note.beef': 'Pierde el 27% al cocinar',
    'browse.note.salmon': 'Pierde el 15% al cocinar',
    'browse.note.pork': 'Pierde el 22% al cocinar',
    'browse.note.rice': 'Se expande 3× al cocinar',
    'browse.note.pasta': 'Se expande 2,25× al cocinar',
    'browse.note.lentils': 'Se expande 2,9× al cocinar',
    'browse.note.quinoa': 'Se expande 3,1× al cocinar',
    'browse.note.spinach': 'Pierde el 23% al cocinar',
    'browse.note.broccoli': 'Sin cambio neto de peso',
    'browse.note.potato': 'Pierde el 6% al cocinar',
    'browse.note.sweetPotato': 'Pierde el 22% al cocinar',

    'browse.food.chicken': 'Pechuga de pollo',
    'browse.food.beef': 'Carne molida (80/20)',
    'browse.food.salmon': 'Filete de salmón',
    'browse.food.pork': 'Chuleta de cerdo',
    'browse.food.rice': 'Arroz blanco',
    'browse.food.pasta': 'Pasta',
    'browse.food.lentils': 'Lentejas',
    'browse.food.quinoa': 'Quinoa',
    'browse.food.spinach': 'Espinaca',
    'browse.food.broccoli': 'Brócoli',
    'browse.food.potato': 'Papa',
    'browse.food.sweetPotato': 'Camote',

    'callout.eyebrow': 'Rendimientos sorprendentes',
    'callout.heading': 'La espinaca se desploma en volumen, pero solo pierde el 23% de su peso',
    'callout.description':
      'La espinaca tiene un rendimiento de cocción del 77%: 100 g de hojas crudas siguen pesando unos 77 g ya cocidas, una pérdida de solo el 23%. Una sartén llena de espinaca cruda se reduce a casi nada, así que casi todo el mundo da por hecho que el peso cae igual de rápido, pero lo que se desploma es el volumen, no la masa. El arroz blanco va en sentido contrario: 100 g seco se convierte en 300 g cocido. Por eso conviene usar una báscula en lugar de calcular a ojo.',
    'callout.spinachBtn': 'Calculadora de espinaca →',
    'callout.riceBtn': 'Calculadora de arroz →',

    'usda.heading': '¿Por qué datos del USDA?',
    'usda.meatLabel': 'Carne y Aves',
    'usda.meatText':
      'Rendimientos de la <strong>Tabla de Rendimientos de Cocción del USDA para Carne y Aves</strong> — la misma fuente utilizada por fabricantes de alimentos y dietistas.',
    'usda.grainsLabel': 'Cereales y Verduras',
    'usda.grainsText':
      'Rendimientos del <strong>Manual de Agricultura n.º 102 del USDA</strong> y de comparar entradas crudas y cocidas en <strong>USDA FoodData Central</strong> (fdc.nal.usda.gov), la base de datos nutricional oficial de EE.UU.',

    'calc.foodLabel': 'Alimento',
    'calc.foodPlaceholder': 'Buscar — pechuga de pollo, arroz blanco, brócoli…',
    'calc.clearFood': 'Borrar selección de alimento',
    'calc.foodSuggestions': 'Sugerencias de alimentos',
    'calc.noFoodsFound': 'No se encontraron alimentos.',
    'calc.directionLabel': 'Dirección',
    'calc.rawToCooked': 'Crudo → Cocido',
    'calc.cookedToRaw': 'Cocido → Crudo',
    'calc.rawWeight': 'Peso crudo',
    'calc.cookedWeight': 'Peso cocido',
    'calc.weightPlaceholder': 'ej. 200',
    'calc.emptyState': 'Busca un alimento arriba para comenzar.',
    'calc.nutritionHeader': 'Nutrición — para esta cantidad',
    'calc.calories': 'Calorías',
    'calc.protein': 'Proteínas',
    'calc.carbs': 'Carbohidratos',
    'calc.fat': 'Grasas',
    'calc.sourceLabel': 'Fuente',
    'calc.estimateSource': 'Estimación estándar del sector (datos USDA no disponibles)',
    'calc.estimateNote':
      'Este rendimiento es una estimación estándar del sector. El USDA no ha publicado mediciones directas para este alimento.',
    'calc.morePrecise': '+ Más preciso: elegir método de cocción',
    'calc.hidePrecise': '− Ocultar método de cocción',
    'calc.cookingMethodLabel': 'Método de cocción',
    'calc.unitLabel': 'Unidad de peso',
    'calc.yieldExpand': 'Se expande a {n}× su peso seco · Rendimiento USDA: {pct}%',
    'calc.yieldLoss': '{loss}% de pérdida de peso al cocinar · Rendimiento USDA: {pct}%',

    'footer.tagline':
      'Datos de rendimiento de cocción del USDA para carne, cereales y verduras. Macros completos para cada conversión.',
    'footer.popularFoods': 'Alimentos populares',
    'footer.dataSources': 'Fuentes de datos',
    'footer.usdaMeat': 'Tabla de Rendimientos de Cocción del USDA para Carne y Aves',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.usdaHandbook': "Manual de Agricultura n.º 102 del USDA (1975)",
    'footer.nonUsdaNote':
      "La soja texturizada usa IFCT 2017 (tablas oficiales de la India); el USDA no cubre ese alimento.",
    'footer.disclaimer':
      'Los valores corresponden a los datos del USDA anteriores. Pesa siempre tus alimentos con una báscula de cocina para mayor precisión.',

    'food.estimatedYield': 'Rendimiento estimado',
    'food.rawToCookedCalc': 'Calculadora Crudo a Cocido',
    'food.usdaCookingYield': 'Rendimiento de cocción USDA',
    'food.source': 'Fuente',
    'food.estimateSource':
      'Estimación estándar del sector — el USDA no ha publicado datos directos de rendimiento de cocción para este alimento.',
    'food.yieldByMethod': 'Rendimiento por método de cocción',
    'food.yieldByMethodSource': 'Fuente: Tabla de Rendimientos de Cocción del USDA para Carne y Aves',
    'food.chickenHeading': 'Por qué la pechuga de pollo es el estándar para el seguimiento de macros',
    'food.chickenP1':
      'La pechuga de pollo sin piel y sin hueso aporta aproximadamente 22,5g de proteína por 100g crudo — una de las mejores relaciones proteína-caloría de cualquier alimento entero. Con solo 120 calorías y 2,6g de grasa por 100g crudo, es la proteína magra favorita de culturistas, deportistas y personas que gestionan un déficit calórico.',
    'food.chickenP2':
      'Como la pechuga de pollo pierde alrededor del 28% de su peso al cocinarse, <strong>registrar el peso cocido contra una etiqueta en crudo subestima tu proteína real</strong>. Una porción de 150 g cocidos provino de unos 210 g crudos — 210 g es el número que debes registrar contra la etiqueta nutricional del USDA.',
    'food.calcHeading': 'Calculadora de {name}',
    'food.faqHeading': 'Preguntas frecuentes',
    'food.relatedLabel': 'Calculadoras relacionadas',
    'food.allFoods': 'Todos los alimentos →',

    'page.homeTitle': 'Calculadora Crudo a Cocido | Datos de Rendimiento USDA y Macros Completos',
    'page.homeDescription':
      'Convierte el peso de cualquier alimento entre crudo y cocido. Obtén calorías, proteínas, carbohidratos y grasas para cualquier cantidad. Cubre carne, cereales y verduras — basado en datos del USDA.',
    // Footer company links, yield descriptions, data-source labels
    "footer.company": "Empresa",
    "footer.about": "Sobre nosotros",
    "footer.contact": "Contacto",
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Términos y condiciones",
    "footer.methodology": "Metodología",
    "yield.loses": "Pérdida del {loss}% del peso al cocinarse",
    "yield.expands": "El peso se multiplica por {n} al cocinarse",
    "source.usdaMeatTable": "Tabla de Rendimientos de Cocción del USDA para Carne y Aves",
    "source.usdaHandbook102": "Manual de Agricultura n.º 102 del USDA (1975)",
    "source.usdaFdc": "USDA FoodData Central (entradas en crudo y cocido)",
    "source.ifct": "IFCT 2017 — Tablas de Composición de Alimentos de la India (autoridad oficial de nutrición de la India)",
    "calc.ifctNote":
      "Este rendimiento es una cifra real y calculada, pero procede de IFCT 2017, las tablas oficiales de composición de alimentos de la India, y no del USDA, que no cubre este alimento.",
    "calc.noteLabel": "Nota:",

    "footer.brand": "Calculadora Crudo→Cocido",
  },

  fr: {
    'nav.wordmark': 'Cru→Cuit',
    'nav.chicken': 'Poulet',
    'nav.rice': 'Riz',
    'nav.beef': 'Bœuf',
    'nav.darkMode': 'Basculer le mode sombre',
    'nav.language': 'Langue',

    'hero.eyebrow': 'Basé sur les données de rendement de cuisson de l\'USDA',
    'hero.heading': 'Calculateur Cru à Cuit',
    'hero.description':
      'La viande cuite pèse 15 à 35 % de moins que crue ; le riz et les pâtes pèsent deux à trois fois plus. Saisissez n’importe quel poids, cru ou cuit, pour le convertir — avec les macros complets (calories, protéines, glucides, lipides) pour les viandes, céréales et légumes.',
    'hero.usda':
      'Tous les rendements proviennent de USDA FoodData Central, du Tableau des rendements de cuisson de l\'USDA et du Manuel agricole n° 102 de l\'USDA.',

    'browse.heading': 'Parcourir par aliment',
    'browse.description':
      '{n} aliments répartis dans les trois grandes catégories, chacun avec son rendement de cuisson USDA et le détail complet des macros.',
    'browse.catMeat': 'Viandes, Volailles & Fruits de mer',
    'browse.catGrains': 'Céréales, Pâtes & Légumineuses',
    'browse.catVeg': 'Légumes',
    'browse.note.chicken': 'Perd 28% à la cuisson',
    'browse.note.beef': 'Perd 27% à la cuisson',
    'browse.note.salmon': 'Perd 15% à la cuisson',
    'browse.note.pork': 'Perd 22% à la cuisson',
    'browse.note.rice': 'S\'étend à 3× à la cuisson',
    'browse.note.pasta': 'S\'étend à 2,25× à la cuisson',
    'browse.note.lentils': 'S\'étend à 2,9× à la cuisson',
    'browse.note.quinoa': 'S\'étend à 3,1× à la cuisson',
    'browse.note.spinach': 'Perd 23% à la cuisson',
    'browse.note.broccoli': 'Aucune perte nette de poids',
    'browse.note.potato': 'Perd 6% à la cuisson',
    'browse.note.sweetPotato': 'Perd 22% à la cuisson',

    'browse.food.chicken': 'Blanc de poulet',
    'browse.food.beef': 'Bœuf haché (80/20)',
    'browse.food.salmon': 'Filet de saumon',
    'browse.food.pork': 'Côtelette de porc',
    'browse.food.rice': 'Riz blanc',
    'browse.food.pasta': 'Pâtes',
    'browse.food.lentils': 'Lentilles',
    'browse.food.quinoa': 'Quinoa',
    'browse.food.spinach': 'Épinards',
    'browse.food.broccoli': 'Brocoli',
    'browse.food.potato': 'Pomme de terre',
    'browse.food.sweetPotato': 'Patate douce',

    'callout.eyebrow': 'Rendements surprenants',
    'callout.heading': 'Les épinards s\'effondrent en volume, mais ne perdent que 23% de leur poids',
    'callout.description':
      'Les épinards ont un rendement de cuisson de 77 % : 100 g de feuilles crues pèsent encore environ 77 g une fois cuites, une perte de seulement 23 %. Une poêle pleine d\'épinards crus fond jusqu\'à presque rien, si bien que chacun en déduit que le poids chute tout aussi brutalement, mais ce qui s\'effondre, c\'est le volume, pas la masse. Le riz blanc va dans le sens inverse : 100 g sec devient 300 g cuit. D\'où l\'intérêt d\'une balance plutôt que d\'une estimation à l\'œil.',
    'callout.spinachBtn': 'Calculateur épinards →',
    'callout.riceBtn': 'Calculateur riz →',

    'usda.heading': 'Pourquoi les données USDA ?',
    'usda.meatLabel': 'Viandes & Volailles',
    'usda.meatText':
      'Rendements issus du <strong>Tableau des rendements de cuisson de l\'USDA pour la viande et la volaille</strong> — la même source utilisée par les fabricants alimentaires et les diététiciens.',
    'usda.grainsLabel': 'Céréales & Légumes',
    'usda.grainsText':
      'Rendements issus du <strong>Manuel agricole n° 102 de l\'USDA</strong> et de la comparaison des entrées crues et cuites dans <strong>USDA FoodData Central</strong> (fdc.nal.usda.gov), la base de données nutritionnelles officielle américaine.',

    'calc.foodLabel': 'Aliment',
    'calc.foodPlaceholder': 'Rechercher — blanc de poulet, riz blanc, brocoli…',
    'calc.clearFood': 'Effacer la sélection',
    'calc.foodSuggestions': 'Suggestions d\'aliments',
    'calc.noFoodsFound': 'Aucun aliment trouvé.',
    'calc.directionLabel': 'Direction',
    'calc.rawToCooked': 'Cru → Cuit',
    'calc.cookedToRaw': 'Cuit → Cru',
    'calc.rawWeight': 'Poids cru',
    'calc.cookedWeight': 'Poids cuit',
    'calc.weightPlaceholder': 'ex. 200',
    'calc.emptyState': 'Recherchez un aliment ci-dessus pour commencer.',
    'calc.nutritionHeader': 'Nutrition — pour cette quantité',
    'calc.calories': 'Calories',
    'calc.protein': 'Protéines',
    'calc.carbs': 'Glucides',
    'calc.fat': 'Lipides',
    'calc.sourceLabel': 'Source',
    'calc.estimateSource': 'Estimation standard du secteur (données USDA non disponibles)',
    'calc.estimateNote':
      'Ce rendement est une estimation standard du secteur. L\'USDA n\'a pas publié de mesures directes pour cet aliment.',
    'calc.morePrecise': '+ Plus précis : choisir la méthode de cuisson',
    'calc.hidePrecise': '− Masquer la méthode de cuisson',
    'calc.cookingMethodLabel': 'Méthode de cuisson',
    'calc.unitLabel': 'Unité de poids',
    'calc.yieldExpand': 'S\'étend à {n}× son poids sec · Rendement USDA : {pct}%',
    'calc.yieldLoss': '{loss}% de perte de poids à la cuisson · Rendement USDA : {pct}%',

    'footer.tagline':
      'Données de rendement de cuisson de l\'USDA pour la viande, les céréales et les légumes. Macros complets pour chaque conversion.',
    'footer.popularFoods': 'Aliments populaires',
    'footer.dataSources': 'Sources de données',
    'footer.usdaMeat': 'Tableau des rendements de cuisson de l\'USDA pour la viande et la volaille',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.usdaHandbook': "Manuel agricole n° 102 de l’USDA (1975)",
    'footer.nonUsdaNote':
      "Le soja texturé s’appuie sur l’IFCT 2017 (tables officielles indiennes) ; l’USDA ne référence pas cet aliment.",
    'footer.disclaimer':
      'Les valeurs sont issues des données USDA ci-dessus. Pesez toujours vos aliments avec une balance de cuisine pour plus de précision.',

    'food.estimatedYield': 'Rendement estimé',
    'food.rawToCookedCalc': 'Calculateur Cru à Cuit',
    'food.usdaCookingYield': 'Rendement de cuisson USDA',
    'food.source': 'Source',
    'food.estimateSource':
      'Estimation standard du secteur — l\'USDA n\'a pas publié de données directes de rendement de cuisson pour cet aliment.',
    'food.yieldByMethod': 'Rendement par méthode de cuisson',
    'food.yieldByMethodSource': 'Source : Tableau des rendements de cuisson de l\'USDA pour la viande et la volaille',
    'food.chickenHeading': 'Pourquoi le blanc de poulet est l\'étalon-or du suivi des macros',
    'food.chickenP1':
      'Le blanc de poulet sans peau et sans os apporte environ 22,5g de protéines pour 100g cru — l\'un des meilleurs ratios protéines/calories de tous les aliments entiers. Avec seulement 120 calories et 2,6g de lipides pour 100g cru, c\'est la protéine maigre de référence pour les culturistes, les sportifs et toute personne gérant un déficit calorique.',
    'food.chickenP2':
      'Comme le blanc de poulet perd environ 28 % de son poids à la cuisson, <strong>enregistrer le poids cuit face à une étiquette exprimée en cru sous-estime vos protéines réelles</strong>. Une portion de 150 g cuit provient d\'environ 210 g cru — c\'est 210 g qu\'il faut enregistrer face à l\'étiquette nutritionnelle de l\'USDA.',
    'food.calcHeading': 'Calculateur {name}',
    'food.faqHeading': 'Questions fréquemment posées',
    'food.relatedLabel': 'Calculateurs associés',
    'food.allFoods': 'Tous les aliments →',

    'page.homeTitle': 'Calculateur Cru à Cuit | Données de Rendement USDA & Macros Complets',
    'page.homeDescription':
      'Convertissez le poids de n\'importe quel aliment entre l\'état cru et cuit. Obtenez les calories, protéines, glucides et lipides pour n\'importe quelle quantité — basé sur les données USDA.',
    // Footer company links, yield descriptions, data-source labels
    "footer.company": "Entreprise",
    "footer.about": "À propos",
    "footer.contact": "Contact",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions générales",
    "footer.methodology": "Méthodologie",
    "yield.loses": "Perte de {loss} % du poids à la cuisson",
    "yield.expands": "Poids multiplié par {n} à la cuisson",
    "source.usdaMeatTable": "Table des rendements de cuisson de l’USDA pour la viande et la volaille",
    "source.usdaHandbook102": "Manuel agricole n° 102 de l’USDA (1975)",
    "source.usdaFdc": "USDA FoodData Central (entrées crues et cuites)",
    "source.ifct": "IFCT 2017 — Tables indiennes de composition des aliments (autorité nutritionnelle officielle de l’Inde)",
    "calc.ifctNote":
      "Ce rendement est un chiffre réel et calculé, mais il provient de l’IFCT 2017, les tables officielles indiennes de composition des aliments, et non de l’USDA, qui ne référence pas cet aliment.",
    "calc.noteLabel": "Remarque :",

    "footer.brand": "Calculateur Cru→Cuit",
  },

  de: {
    'nav.wordmark': 'Roh→Gekocht',
    'nav.chicken': 'Hähnchen',
    'nav.rice': 'Reis',
    'nav.beef': 'Rind',
    'nav.darkMode': 'Dunkelmodus umschalten',
    'nav.language': 'Sprache',

    'hero.eyebrow': 'Basierend auf USDA-Garverlustdaten',
    'hero.heading': 'Roh-zu-Gekocht-Rechner',
    'hero.description':
      'Gegartes Fleisch wiegt 15 bis 35 % weniger als rohes; Reis und Nudeln wiegen zwei- bis dreimal mehr. Gib ein beliebiges Gewicht ein, roh oder gegart, um es umzurechnen — mit vollständigen Makros (Kalorien, Protein, Kohlenhydrate, Fett) für Fleisch, Getreide und Gemüse.',
    'hero.usda':
      'Alle Garverluste stammen aus USDA FoodData Central, der USDA-Tabelle der Garverluste und dem USDA Agriculture Handbook Nr. 102.',

    'browse.heading': 'Nach Lebensmittel stöbern',
    'browse.description':
      '{n} Lebensmittel in allen drei Hauptkategorien, jeweils mit USDA-Garausbeute und vollständiger Makroaufschlüsselung.',
    'browse.catMeat': 'Fleisch, Geflügel & Meeresfrüchte',
    'browse.catGrains': 'Getreide, Nudeln & Hülsenfrüchte',
    'browse.catVeg': 'Gemüse',
    'browse.note.chicken': 'Verliert 28% beim Garen',
    'browse.note.beef': 'Verliert 27% beim Garen',
    'browse.note.salmon': 'Verliert 15% beim Garen',
    'browse.note.pork': 'Verliert 22% beim Garen',
    'browse.note.rice': 'Dehnt sich 3× beim Garen aus',
    'browse.note.pasta': 'Dehnt sich 2,25× beim Garen aus',
    'browse.note.lentils': 'Dehnt sich 2,9× beim Garen aus',
    'browse.note.quinoa': 'Dehnt sich 3,1× beim Garen aus',
    'browse.note.spinach': 'Verliert 23% beim Garen',
    'browse.note.broccoli': 'Keine Netto-Gewichtsänderung',
    'browse.note.potato': 'Verliert 6% beim Garen',
    'browse.note.sweetPotato': 'Verliert 22% beim Garen',

    'browse.food.chicken': 'Hähnchenbrust',
    'browse.food.beef': 'Hackfleisch (80/20)',
    'browse.food.salmon': 'Lachsfilet',
    'browse.food.pork': 'Schweinekotelett',
    'browse.food.rice': 'Weißer Reis',
    'browse.food.pasta': 'Nudeln',
    'browse.food.lentils': 'Linsen',
    'browse.food.quinoa': 'Quinoa',
    'browse.food.spinach': 'Spinat',
    'browse.food.broccoli': 'Brokkoli',
    'browse.food.potato': 'Kartoffel',
    'browse.food.sweetPotato': 'Süßkartoffel',

    'callout.eyebrow': 'Überraschende Garverluste',
    'callout.heading': 'Spinat fällt im Volumen zusammen — verliert aber nur 23% seines Gewichts',
    'callout.description':
      'Spinat hat eine Garausbeute von 77 %: 100 g rohe Blätter wiegen gegart noch rund 77 g, ein Verlust von nur 23 %. Eine volle Pfanne roher Spinat fällt auf fast nichts zusammen, deshalb nimmt praktisch jeder an, das Gewicht breche genauso ein, doch was zusammenfällt, ist das Volumen, nicht die Masse. Weißer Reis geht in die entgegengesetzte Richtung: 100 g trocken werden zu 300 g gekocht. Beides spricht für die Küchenwaage statt fürs Augenmaß.',
    'callout.spinachBtn': 'Spinat-Rechner →',
    'callout.riceBtn': 'Reis-Rechner →',

    'usda.heading': 'Warum USDA-Daten?',
    'usda.meatLabel': 'Fleisch & Geflügel',
    'usda.meatText':
      'Garverluste aus der <strong>USDA-Tabelle der Garverluste für Fleisch und Geflügel</strong> — dieselbe Quelle, die von Lebensmittelherstellern und Diätassistenten verwendet wird.',
    'usda.grainsLabel': 'Getreide & Gemüse',
    'usda.grainsText':
      'Garausbeuten aus dem <strong>USDA Agriculture Handbook Nr. 102</strong> und aus dem Vergleich von roh und gekocht in <strong>USDA FoodData Central</strong> (fdc.nal.usda.gov), der maßgeblichen US-amerikanischen Nährstoffdatenbank.',

    'calc.foodLabel': 'Lebensmittel',
    'calc.foodPlaceholder': 'Suchen — Hähnchenbrust, weißer Reis, Brokkoli…',
    'calc.clearFood': 'Lebensmittelauswahl löschen',
    'calc.foodSuggestions': 'Lebensmittelvorschläge',
    'calc.noFoodsFound': 'Keine Lebensmittel gefunden.',
    'calc.directionLabel': 'Richtung',
    'calc.rawToCooked': 'Roh → Gekocht',
    'calc.cookedToRaw': 'Gekocht → Roh',
    'calc.rawWeight': 'Rohgewicht',
    'calc.cookedWeight': 'Gekochtes Gewicht',
    'calc.weightPlaceholder': 'z.B. 200',
    'calc.emptyState': 'Suche oben nach einem Lebensmittel, um zu beginnen.',
    'calc.nutritionHeader': 'Nährwerte — für diese Menge',
    'calc.calories': 'Kalorien',
    'calc.protein': 'Protein',
    'calc.carbs': 'Kohlenhydrate',
    'calc.fat': 'Fett',
    'calc.sourceLabel': 'Quelle',
    'calc.estimateSource': 'Branchenübliche Schätzung (USDA-Daten nicht verfügbar)',
    'calc.estimateNote':
      'Dieser Garverlustwert ist eine branchenübliche Schätzung. Die USDA hat keine direkten Garverlustwerte für dieses Lebensmittel veröffentlicht.',
    'calc.morePrecise': '+ Genauer: Garmethode wählen',
    'calc.hidePrecise': '− Garmethode ausblenden',
    'calc.cookingMethodLabel': 'Garmethode',
    'calc.unitLabel': 'Gewichtseinheit',
    'calc.yieldExpand': 'Dehnt sich auf {n}× des Trockengewichts aus · USDA-Ausbeute: {pct}%',
    'calc.yieldLoss': '{loss}% Gewichtsverlust beim Garen · USDA-Ausbeute: {pct}%',

    'footer.tagline':
      'USDA-Garverlustdaten für Fleisch, Getreide und Gemüse. Vollständige Makros für jede Umrechnung.',
    'footer.popularFoods': 'Beliebte Lebensmittel',
    'footer.dataSources': 'Datenquellen',
    'footer.usdaMeat': 'USDA-Tabelle der Garverluste für Fleisch und Geflügel',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.usdaHandbook': "USDA Agriculture Handbook Nr. 102 (1975)",
    'footer.nonUsdaNote':
      "Sojaschnetzel stützen sich auf IFCT 2017 (offizielle indische Tabellen); die USDA erfasst dieses Lebensmittel nicht.",
    'footer.disclaimer':
      'Die Werte basieren auf den oben genannten USDA-Daten. Wiege deine Lebensmittel stets mit einer Küchenwaage für genaue Ergebnisse.',

    'food.estimatedYield': 'Geschätzter Garverlustwert',
    'food.rawToCookedCalc': 'Roh-zu-Gekocht-Rechner',
    'food.usdaCookingYield': 'USDA-Garausbeute',
    'food.source': 'Quelle',
    'food.estimateSource':
      'Branchenübliche Schätzung — die USDA hat keine direkten Garverlustwerte für dieses Lebensmittel veröffentlicht.',
    'food.yieldByMethod': 'Ausbeute nach Garmethode',
    'food.yieldByMethodSource': 'Quelle: USDA-Tabelle der Garverluste für Fleisch und Geflügel',
    'food.chickenHeading': 'Warum Hähnchenbrust der Gold-Standard für Makro-Tracking ist',
    'food.chickenP1':
      'Hähnchenbrust ohne Haut und Knochen liefert etwa 22,5g Protein pro 100g roh — eines der besten Protein-Kalorien-Verhältnisse aller Vollwertkost. Mit nur 120 Kalorien und 2,6g Fett pro 100g roh ist sie das bevorzugte magere Protein für Bodybuilder, Sportler und alle, die ein Kaloriendefizit verwalten.',
    'food.chickenP2':
      'Da Hähnchenbrust beim Garen rund 28 % ihres Gewichts verliert, <strong>zählt das Eintragen des Gargewichts gegen ein Etikett mit Rohwerten dein tatsächliches Protein zu niedrig</strong>. Eine Portion von 150 g gegart stammt aus etwa 210 g roh — 210 g ist die Zahl, die du gegen das USDA-Nährwertetikett einträgst.',
    'food.calcHeading': '{name}-Rechner',
    'food.faqHeading': 'Häufig gestellte Fragen',
    'food.relatedLabel': 'Verwandte Rechner',
    'food.allFoods': 'Alle Lebensmittel →',

    'page.homeTitle': 'Roh-zu-Gekocht-Rechner | USDA-Ausbeute & Vollständige Makros',
    'page.homeDescription':
      'Rechne das Gewicht beliebiger Lebensmittel zwischen roh und gekocht um. Erhalte Kalorien, Protein, Kohlenhydrate und Fett für jede Menge. Fleisch, Getreide und Gemüse — basierend auf USDA-Daten.',
    // Footer company links, yield descriptions, data-source labels
    "footer.company": "Unternehmen",
    "footer.about": "Über uns",
    "footer.contact": "Kontakt",
    "footer.privacy": "Datenschutzerklärung",
    "footer.terms": "Allgemeine Geschäftsbedingungen",
    "footer.methodology": "Methodik",
    "yield.loses": "{loss} % Gewichtsverlust beim Garen",
    "yield.expands": "{n}-faches Gewicht nach dem Garen",
    "source.usdaMeatTable": "USDA-Tabelle der Garausbeuten für Fleisch und Geflügel",
    "source.usdaHandbook102": "USDA Agriculture Handbook Nr. 102 (1975)",
    "source.usdaFdc": "USDA FoodData Central (rohe und gegarte Einträge)",
    "source.ifct": "IFCT 2017 — Indische Lebensmittel-Nährwerttabellen (Indiens offizielle Ernährungsbehörde)",
    "calc.ifctNote":
      "Dieser Ausbeutewert ist eine echte, berechnete Zahl — er stammt jedoch aus IFCT 2017, den offiziellen indischen Lebensmitteltabellen, und nicht von der USDA, die dieses Lebensmittel nicht erfasst.",
    "calc.noteLabel": "Hinweis:",

    "footer.brand": "Roh→Gekocht Rechner",
  },

  pt: {
    'nav.wordmark': 'Cru→Cozido',
    'nav.chicken': 'Frango',
    'nav.rice': 'Arroz',
    'nav.beef': 'Carne',
    'nav.darkMode': 'Alternar modo escuro',
    'nav.language': 'Idioma',

    'hero.eyebrow': 'Baseado em dados de rendimento de cozimento do USDA',
    'hero.heading': 'Calculadora de Cru para Cozido',
    'hero.description':
      'A carne cozida pesa de 15% a 35% menos que crua; arroz e massas pesam duas a três vezes mais. Insira qualquer peso, cru ou cozido, para convertê-lo — com os macros completos (calorias, proteínas, carboidratos, gorduras) para carnes, grãos e vegetais.',
    'hero.usda':
      'Todos os rendimentos são provenientes do USDA FoodData Central, da Tabela de Rendimentos de Cozimento do USDA e do Manual de Agricultura n.º 102 do USDA.',

    'browse.heading': 'Explorar por alimento',
    'browse.description':
      '{n} alimentos nas três principais categorias, cada um com seu rendimento de cocção do USDA e a composição completa de macros.',
    'browse.catMeat': 'Carnes, Aves e Frutos do Mar',
    'browse.catGrains': 'Grãos, Massas e Leguminosas',
    'browse.catVeg': 'Vegetais',
    'browse.note.chicken': 'Perde 28% ao cozinhar',
    'browse.note.beef': 'Perde 27% ao cozinhar',
    'browse.note.salmon': 'Perde 15% ao cozinhar',
    'browse.note.pork': 'Perde 22% ao cozinhar',
    'browse.note.rice': 'Expande 3× ao cozinhar',
    'browse.note.pasta': 'Expande 2,25× ao cozinhar',
    'browse.note.lentils': 'Expande 2,9× ao cozinhar',
    'browse.note.quinoa': 'Expande 3,1× ao cozinhar',
    'browse.note.spinach': 'Perde 23% ao cozinhar',
    'browse.note.broccoli': 'Sem mudança líquida de peso',
    'browse.note.potato': 'Perde 6% ao cozinhar',
    'browse.note.sweetPotato': 'Perde 22% ao cozinhar',

    'browse.food.chicken': 'Peito de frango',
    'browse.food.beef': 'Carne moída (80/20)',
    'browse.food.salmon': 'Filé de salmão',
    'browse.food.pork': 'Costeleta de porco',
    'browse.food.rice': 'Arroz branco',
    'browse.food.pasta': 'Macarrão',
    'browse.food.lentils': 'Lentilhas',
    'browse.food.quinoa': 'Quinoa',
    'browse.food.spinach': 'Espinafre',
    'browse.food.broccoli': 'Brócolis',
    'browse.food.potato': 'Batata',
    'browse.food.sweetPotato': 'Batata-doce',

    'callout.eyebrow': 'Rendimentos surpreendentes',
    'callout.heading': 'O espinafre desaba em volume, mas perde apenas 23% do peso',
    'callout.description':
      'O espinafre tem um rendimento de cozimento de 77%: 100 g de folhas cruas ainda pesam cerca de 77 g depois de cozidas, uma perda de apenas 23%. Uma frigideira cheia de espinafre cru murcha até quase nada, então quase todo mundo supõe que o peso despenca na mesma proporção, mas o que desaba é o volume, não a massa. O arroz branco vai na direção oposta: 100 g cru vira 300 g cozido. Os dois casos mostram por que a balança vence o olhômetro.',
    'callout.spinachBtn': 'Calculadora de espinafre →',
    'callout.riceBtn': 'Calculadora de arroz →',

    'usda.heading': 'Por que dados do USDA?',
    'usda.meatLabel': 'Carnes & Aves',
    'usda.meatText':
      'Rendimentos da <strong>Tabela de Rendimentos de Cozimento do USDA para Carnes e Aves</strong> — a mesma fonte usada por fabricantes de alimentos e nutricionistas.',
    'usda.grainsLabel': 'Grãos & Vegetais',
    'usda.grainsText':
      'Rendimentos do <strong>Manual de Agricultura n.º 102 do USDA</strong> e da comparação de entradas cruas e cozidas no <strong>USDA FoodData Central</strong> (fdc.nal.usda.gov), o banco de dados nutricional oficial dos EUA.',

    'calc.foodLabel': 'Alimento',
    'calc.foodPlaceholder': 'Buscar — peito de frango, arroz branco, brócolis…',
    'calc.clearFood': 'Limpar seleção de alimento',
    'calc.foodSuggestions': 'Sugestões de alimentos',
    'calc.noFoodsFound': 'Nenhum alimento encontrado.',
    'calc.directionLabel': 'Direção',
    'calc.rawToCooked': 'Cru → Cozido',
    'calc.cookedToRaw': 'Cozido → Cru',
    'calc.rawWeight': 'Peso cru',
    'calc.cookedWeight': 'Peso cozido',
    'calc.weightPlaceholder': 'ex. 200',
    'calc.emptyState': 'Pesquise um alimento acima para começar.',
    'calc.nutritionHeader': 'Nutrição — para esta quantidade',
    'calc.calories': 'Calorias',
    'calc.protein': 'Proteínas',
    'calc.carbs': 'Carboidratos',
    'calc.fat': 'Gorduras',
    'calc.sourceLabel': 'Fonte',
    'calc.estimateSource': 'Estimativa padrão do setor (dados USDA não disponíveis)',
    'calc.estimateNote':
      'Este rendimento é uma estimativa padrão do setor. O USDA não publicou medições diretas para este alimento.',
    'calc.morePrecise': '+ Mais preciso: escolher método de cozimento',
    'calc.hidePrecise': '− Ocultar método de cozimento',
    'calc.cookingMethodLabel': 'Método de cozimento',
    'calc.unitLabel': 'Unidade de peso',
    'calc.yieldExpand': 'Expande para {n}× do peso seco · Rendimento USDA: {pct}%',
    'calc.yieldLoss': '{loss}% de perda de peso ao cozinhar · Rendimento USDA: {pct}%',

    'footer.tagline':
      'Dados de rendimento de cozimento do USDA para carnes, grãos e vegetais. Macros completos para cada conversão.',
    'footer.popularFoods': 'Alimentos populares',
    'footer.dataSources': 'Fontes de dados',
    'footer.usdaMeat': 'Tabela de Rendimentos de Cozimento do USDA para Carnes e Aves',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.usdaHandbook': "Manual de Agricultura n.º 102 do USDA (1975)",
    'footer.nonUsdaNote':
      "A soja texturizada usa o IFCT 2017 (tabelas oficiais da Índia); o USDA não cobre esse alimento.",
    'footer.disclaimer':
      'Os valores são baseados nos dados do USDA acima. Sempre pese seus alimentos com uma balança de cozinha para maior precisão.',

    'food.estimatedYield': 'Rendimento estimado',
    'food.rawToCookedCalc': 'Calculadora de Cru para Cozido',
    'food.usdaCookingYield': 'Rendimento de cozimento USDA',
    'food.source': 'Fonte',
    'food.estimateSource':
      'Estimativa padrão do setor — o USDA não publicou dados diretos de rendimento de cozimento para este alimento.',
    'food.yieldByMethod': 'Rendimento por método de cozimento',
    'food.yieldByMethodSource': 'Fonte: Tabela de Rendimentos de Cozimento do USDA para Carnes e Aves',
    'food.chickenHeading': 'Por que o peito de frango é o padrão-ouro para monitorar macros',
    'food.chickenP1':
      'O peito de frango sem pele e sem osso fornece aproximadamente 22,5g de proteína por 100g cru — uma das melhores relações proteína-caloria de qualquer alimento integral. Com apenas 120 calorias e 2,6g de gordura por 100g cru, é a proteína magra favorita de fisiculturistas, atletas e qualquer pessoa gerenciando um déficit calórico.',
    'food.chickenP2':
      'Como o peito de frango perde cerca de 28% do peso ao ser cozido, <strong>registrar o peso cozido contra um rótulo em peso cru subestima sua proteína real</strong>. Uma porção de 150 g cozido veio de aproximadamente 210 g cru — 210 g é o número a registrar contra o rótulo nutricional do USDA.',
    'food.calcHeading': 'Calculadora de {name}',
    'food.faqHeading': 'Perguntas frequentes',
    'food.relatedLabel': 'Calculadoras relacionadas',
    'food.allFoods': 'Todos os alimentos →',

    'page.homeTitle': 'Calculadora Cru para Cozido | Dados de Rendimento USDA & Macros Completos',
    'page.homeDescription':
      'Converta o peso de qualquer alimento entre cru e cozido. Obtenha calorias, proteínas, carboidratos e gorduras para qualquer quantidade. Carnes, grãos e vegetais — baseado em dados do USDA.',
    // Footer company links, yield descriptions, data-source labels
    "footer.company": "Empresa",
    "footer.about": "Sobre nós",
    "footer.contact": "Contato",
    "footer.privacy": "Política de privacidade",
    "footer.terms": "Termos e condições",
    "footer.methodology": "Metodologia",
    "yield.loses": "Perda de {loss}% do peso ao cozinhar",
    "yield.expands": "O peso é multiplicado por {n} ao cozinhar",
    "source.usdaMeatTable": "Tabela de Rendimentos de Cocção do USDA para Carnes e Aves",
    "source.usdaHandbook102": "Manual de Agricultura n.º 102 do USDA (1975)",
    "source.usdaFdc": "USDA FoodData Central (entradas cruas e cozidas)",
    "source.ifct": "IFCT 2017 — Tabelas Indianas de Composição de Alimentos (autoridade oficial de nutrição da Índia)",
    "calc.ifctNote":
      "Este rendimento é um número real e calculado, mas vem do IFCT 2017, as tabelas oficiais de composição de alimentos da Índia, e não do USDA, que não cobre este alimento.",
    "calc.noteLabel": "Observação:",

    "footer.brand": "Calculadora Cru→Cozido",
  },



  it: {
    'nav.wordmark': 'Crudo→Cotto',
    'nav.chicken': 'Pollo',
    'nav.rice': 'Riso',
    'nav.beef': 'Manzo',
    'nav.darkMode': 'Attiva/disattiva modalità scura',
    'nav.language': 'Lingua',

    'hero.eyebrow': 'Basato sui dati di resa di cottura USDA',
    'hero.heading': 'Calcolatore da Crudo a Cotto',
    'hero.description':
      'La carne cotta pesa il 15-35% in meno rispetto a cruda; riso e pasta pesano due o tre volte di più. Inserisci qualsiasi peso, da crudo o da cotto, per convertirlo — con i macronutrienti completi (calorie, proteine, carboidrati, grassi) per carni, cereali e verdure.',
    'hero.usda':
      'Tutte le rese provengono da USDA FoodData Central, dalla Tabella delle rese di cottura USDA e dal Manuale di Agricoltura n. 102 dell\'USDA.',

    'browse.heading': 'Sfoglia per alimento',
    'browse.description':
      '{n} alimenti nelle tre categorie principali, ciascuno con la resa di cottura USDA e il dettaglio completo dei macro.',
    'browse.catMeat': 'Carne, Pollame e Frutti di mare',
    'browse.catGrains': 'Cereali, Pasta e Legumi',
    'browse.catVeg': 'Verdure',
    'browse.note.chicken': 'Perde il 28% durante la cottura',
    'browse.note.beef': 'Perde il 27% durante la cottura',
    'browse.note.salmon': 'Perde il 15% durante la cottura',
    'browse.note.pork': 'Perde il 22% durante la cottura',
    'browse.note.rice': 'Si espande 3× durante la cottura',
    'browse.note.pasta': 'Si espande 2,25× durante la cottura',
    'browse.note.lentils': 'Si espande 2,9× durante la cottura',
    'browse.note.quinoa': 'Si espande 3,1× durante la cottura',
    'browse.note.spinach': 'Perde il 23% durante la cottura',
    'browse.note.broccoli': 'Nessuna variazione netta di peso',
    'browse.note.potato': 'Perde il 6% durante la cottura',
    'browse.note.sweetPotato': 'Perde il 22% durante la cottura',

    'browse.food.chicken': 'Petto di pollo',
    'browse.food.beef': 'Carne macinata (80/20)',
    'browse.food.salmon': 'Filetto di salmone',
    'browse.food.pork': 'Braciola di maiale',
    'browse.food.rice': 'Riso bianco',
    'browse.food.pasta': 'Pasta',
    'browse.food.lentils': 'Lenticchie',
    'browse.food.quinoa': 'Quinoa',
    'browse.food.spinach': 'Spinaci',
    'browse.food.broccoli': 'Broccoli',
    'browse.food.potato': 'Patata',
    'browse.food.sweetPotato': 'Patata dolce',

    'callout.eyebrow': 'Rese sorprendenti',
    'callout.heading': 'Gli spinaci crollano di volume, ma perdono solo il 23% del peso',
    'callout.description':
      'Gli spinaci hanno una resa di cottura del 77%: 100 g di foglie crude pesano ancora circa 77 g da cotte, una perdita di appena il 23%. Una padella piena di spinaci crudi appassisce fino a quasi nulla, così quasi tutti danno per scontato che anche il peso crolli allo stesso modo, ma a crollare è il volume, non la massa. Il riso bianco va nella direzione opposta: 100 g secco diventa 300 g cotto. Entrambi i casi spiegano perché la bilancia batte l\'occhio.',
    'callout.spinachBtn': 'Calcolatore spinaci →',
    'callout.riceBtn': 'Calcolatore riso →',

    'usda.heading': 'Perché i dati USDA?',
    'usda.meatLabel': 'Carne e Pollame',
    'usda.meatText':
      'Rese dalla <strong>Tabella delle rese di cottura USDA per carne e pollame</strong> — la stessa fonte utilizzata dai produttori alimentari e dai dietisti.',
    'usda.grainsLabel': 'Cereali e Verdure',
    'usda.grainsText':
      'Rese dal <strong>Manuale di Agricoltura n. 102 dell\'USDA</strong> e dal confronto tra voci crude e cotte in <strong>USDA FoodData Central</strong> (fdc.nal.usda.gov), il database nutrizionale ufficiale statunitense.',

    'calc.foodLabel': 'Alimento',
    'calc.foodPlaceholder': 'Cerca — petto di pollo, riso bianco, broccoli…',
    'calc.clearFood': 'Cancella selezione alimento',
    'calc.foodSuggestions': 'Suggerimenti alimenti',
    'calc.noFoodsFound': 'Nessun alimento trovato.',
    'calc.directionLabel': 'Direzione',
    'calc.rawToCooked': 'Crudo → Cotto',
    'calc.cookedToRaw': 'Cotto → Crudo',
    'calc.rawWeight': 'Peso crudo',
    'calc.cookedWeight': 'Peso cotto',
    'calc.weightPlaceholder': 'es. 200',
    'calc.emptyState': 'Cerca un alimento sopra per iniziare.',
    'calc.nutritionHeader': 'Nutrizione — per questa quantità',
    'calc.calories': 'Calorie',
    'calc.protein': 'Proteine',
    'calc.carbs': 'Carboidrati',
    'calc.fat': 'Grassi',
    'calc.sourceLabel': 'Fonte',
    'calc.estimateSource': 'Stima standard del settore (dati USDA non disponibili)',
    'calc.estimateNote':
      'Questo valore di resa è una stima standard del settore. L\'USDA non ha pubblicato misurazioni dirette della resa di cottura per questo alimento.',
    'calc.morePrecise': '+ Più preciso: scegli il metodo di cottura',
    'calc.hidePrecise': '− Nascondi il metodo di cottura',
    'calc.cookingMethodLabel': 'Metodo di cottura',
    'calc.unitLabel': 'Unità di peso',
    'calc.yieldExpand': 'Si espande a {n}× del suo peso secco · Resa USDA: {pct}%',
    'calc.yieldLoss': '{loss}% perdita di peso durante la cottura · Resa USDA: {pct}%',

    'footer.tagline':
      'Dati di resa di cottura USDA per carne, cereali e verdure. Macronutrienti completi per ogni conversione.',
    'footer.popularFoods': 'Alimenti popolari',
    'footer.dataSources': 'Fonti dei dati',
    'footer.usdaMeat': 'Tabella delle rese di cottura USDA per carne e pollame',
    'footer.usdaFdc': 'USDA FoodData Central',
    'footer.usdaHandbook': "Manuale di Agricoltura n. 102 dell’USDA (1975)",
    'footer.nonUsdaNote':
      "La soia texturizzata usa IFCT 2017 (tabelle ufficiali indiane); l’USDA non copre questo alimento.",
    'footer.disclaimer':
      'I valori si basano sui dati USDA sopra indicati. Pesa sempre il cibo con una bilancia da cucina per maggiore precisione.',

    'food.estimatedYield': 'Resa stimata',
    'food.rawToCookedCalc': 'Calcolatore da Crudo a Cotto',
    'food.usdaCookingYield': 'Resa di cottura USDA',
    'food.source': 'Fonte',
    'food.estimateSource':
      'Stima standard del settore — l\'USDA non ha pubblicato dati diretti sulla resa di cottura per questo alimento.',
    'food.yieldByMethod': 'Resa per metodo di cottura',
    'food.yieldByMethodSource': 'Fonte: Tabella delle rese di cottura USDA per carne e pollame',
    'food.chickenHeading': 'Perché il petto di pollo è il gold standard per il tracciamento dei macronutrienti',
    'food.chickenP1':
      'Il petto di pollo senza pelle e senza osso fornisce circa 22,5g di proteine per 100g crudo — uno dei migliori rapporti proteine/calorie tra tutti gli alimenti interi. Con sole 120 calorie e 2,6g di grassi per 100g crudo, è la proteina magra preferita da bodybuilder, atleti e chiunque gestisca un deficit calorico.',
    'food.chickenP2':
      'Poiché il petto di pollo perde circa il 28% del suo peso in cottura, <strong>registrare il peso cotto rispetto a un\'etichetta espressa sul crudo fa sottostimare le proteine reali</strong>. Una porzione di 150 g cotto proviene da circa 210 g crudo — 210 g è il numero da registrare rispetto all\'etichetta nutrizionale USDA.',
    'food.calcHeading': 'Calcolatore {name}',
    'food.faqHeading': 'Domande frequenti',
    'food.relatedLabel': 'Calcolatori correlati',
    'food.allFoods': 'Tutti gli alimenti →',

    'page.homeTitle': 'Calcolatore da Crudo a Cotto | Dati di Resa USDA e Macronutrienti Completi',
    'page.homeDescription':
      'Converti il peso di qualsiasi alimento tra crudo e cotto. Ottieni calorie, proteine, carboidrati e grassi per qualsiasi quantità. Carni, cereali e verdure — basato sui dati USDA.',
    // Footer company links, yield descriptions, data-source labels
    "footer.company": "Azienda",
    "footer.about": "Chi siamo",
    "footer.contact": "Contatti",
    "footer.privacy": "Informativa sulla privacy",
    "footer.terms": "Termini e condizioni",
    "footer.methodology": "Metodologia",
    "yield.loses": "Perdita del {loss}% del peso in cottura",
    "yield.expands": "Peso moltiplicato per {n} in cottura",
    "source.usdaMeatTable": "Tabella USDA delle rese di cottura per carne e pollame",
    "source.usdaHandbook102": "Manuale di Agricoltura n. 102 dell’USDA (1975)",
    "source.usdaFdc": "USDA FoodData Central (voci crude e cotte)",
    "source.ifct": "IFCT 2017 — Tabelle indiane di composizione degli alimenti (autorità nutrizionale ufficiale dell’India)",
    "calc.ifctNote":
      "Questa resa è un dato reale e calcolato, ma proviene da IFCT 2017, le tabelle ufficiali indiane di composizione degli alimenti, e non dall’USDA, che non copre questo alimento.",
    "calc.noteLabel": "Nota:",

    "footer.brand": "Calcolatore Crudo→Cotto",
  },

} as const;

export type TranslationKey = keyof (typeof ui)['en'];
