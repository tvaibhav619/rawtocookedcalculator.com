import type { GuideContent } from './types';

export const esGuide: GuideContent = {
  badge: 'Guía Científica y de Referencia Integral',
  title: 'Guía Completa de Pesos de Alimentos Crudos vs. Cocidos, Dinámica de Humedad y Precisión Nutricional',
  intro:
    'Cualquiera que haya preparado una comida, usado una báscula o registrado sus alimentos en una app de nutrición sabe que la comida no sale de la sartén con el mismo peso con el que salió del refrigerador. Las proteínas animales se contraen y pierden hasta un tercio de su masa inicial por evaporación y pérdida de grasa, mientras que los cereales, la pasta y las legumbres secas absorben agua hirviendo y duplican o triplican su volumen. Esta referencia científica detalla la termodinámica de los rendimientos culinarios, las fórmulas matemáticas de conversión, las cifras oficiales del USDA y estrategias prácticas para el meal prep y el control exacto de macronutrientes.',

  sec1Title: '1. Física Celular y Química de los Rendimientos de Cocción',
  sec1Intro:
    'La diferencia entre el peso del alimento crudo y el cocido no es ningún misterio: es una consecuencia directa de la biología celular y la termodinámica. Todo alimento entero está compuesto por agua, proteínas, lípidos, carbohidratos, fibra dietética y minerales. El calor altera profundamente la estructura física de estos componentes, provocando la expulsión o la absorción de agua y grasa.',
  sec1ProteinTitle: 'Desnaturalización de Proteínas en Carnes y Mariscos',
  sec1ProteinText:
    'El tejido muscular animal crudo contiene aproximadamente entre un 70% y un 75% de agua en peso, fuertemente retenida dentro de una matriz de proteínas miofibrilares compuesta por miosina y actina. Al aplicar calor:',
  sec1ProteinBullets: [
    'Entre 40°C y 55°C (105°F–130°F): Las proteínas de miosina se desnaturalizan y se desenrollan, provocando que las fibras musculares se encojan en diámetro transversal.',
    'Entre 60°C y 66°C (140°F–150°F): El colágeno conectivo se contrae longitudinalmente. El agua retenida en los espacios intercelulares es exprimida hacia afuera como una esponja comprimida.',
    'Por encima de 74°C (165°F): La actina se desnaturaliza por completo, endureciendo la fibra y convirtiendo los jugos en vapor. En consecuencia, las carnes cocidas pesan entre un 15% y un 35% menos que en crudo.',
  ],
  sec1StarchTitle: 'Gelatinización del Almidón en Granos y Legumbres',
  sec1StarchText:
    'Los almidones secos como el arroz blanco, el arroz integral, la avena, las lentejas y la pasta seca entran a la olla deshidratados, con humedades inferiores al 12%. Al sumergirse en agua hirviendo:',
  sec1StarchBullets: [
    'Hidratación Capilar: Las moléculas de agua penetran los gránulos semicristalinos de almidón a través de canales microscópicos.',
    'Umbral de Gelatinización (60°C–85°C / 140°F–185°F): Los enlaces de hidrógeno de la amilosa y amilopectina se rompen, permitiendo que los gránulos absorban gran volumen de agua y se hinchen.',
    'Multiplicación de Masa: Al quedar el agua atrapada en la red de gel, los granos se expanden entre 2,2× y 3,5× su peso en seco. El arroz cocido contiene entre un 65% y un 70% de agua absorbida.',
  ],
  sec1VegText:
    'Las verduras presentan un tercer mecanismo. Alimentos como la espinaca y el calabacín contienen abundante agua atrapada en vacuolas celulares. El calor disuelve la pectina estructural y rompe las bolsas de aire entre las células. En la espinaca, esto produce un colapso del 80% al 90% en volumen visual, a pesar de que la pérdida de masa real es de solo un 23%. En cambio, tubérculos como la papa pierden muy poco peso (aprox. 6%) al hervirse enteros, ya que la gelatinización del almidón compensa la evaporación.',

  sec2Title: '2. Marco Matemático Universal de Conversión',
  sec2Intro:
    'Convertir pesos entre crudo y cocido depende de un único parámetro científico: el Porcentaje de Rendimiento de Cocción (Yield %). Respaldado por investigaciones del Departamento de Agricultura de EE. UU. (USDA), el rendimiento representa la proporción del peso comestible final cocido frente al peso inicial en crudo:',
  sec2EquationLabel: 'Ecuación Fundamental de Rendimiento',
  sec2Equation: 'Rendimiento % = (Peso Cocido ÷ Peso Crudo) × 100',
  sec2SubIntro:
    'Conociendo el porcentaje de rendimiento, dos fórmulas matemáticas permiten convertir en cualquier dirección con total exactitud:',
  sec2FormulaATitle: 'Fórmula A: Convertir Peso Crudo a Peso Cocido',
  sec2FormulaADesc:
    'Úsala al planificar tus comidas, calcular porciones desde un paquete crudo o hacer la compra:',
  sec2FormulaACode: 'Peso Cocido = Peso Crudo × (Rendimiento % ÷ 100)',
  sec2FormulaAExampleHtml:
    '<strong>Ejemplo paso a paso:</strong> Tienes 250 g de pechuga de pollo cruda (rendimiento USDA = 72%):<br /><code>Cocido = 250 g × 0,72 = 180 g</code>. Tu pieza cruda rendirá 180 g cocidos en el plato.',
  sec2FormulaBTitle: 'Fórmula B: Convertir Peso Cocido a Equivalente Crudo',
  sec2FormulaBDesc:
    'Úsala cuando pesas comida ya cocinada (por ejemplo, sobras o restaurantes) y necesitas saber el equivalente crudo para registrarlo en tu app:',
  sec2FormulaBCode: 'Equivalente Crudo = Peso Cocido ÷ (Rendimiento % ÷ 100)',
  sec2FormulaBExampleHtml:
    '<strong>Ejemplo paso a paso:</strong> Pesaste 150 g de carne molida 80/20 cocida (rendimiento USDA = 73%):<br /><code>Crudo = 150 g ÷ 0,73 = 205,5 g</code>. Has consumido el equivalente nutricional de 205,5 g de carne cruda.',
  sec2ShrinkageNoteHtml:
    '<strong>Porcentaje de Merma (Contracción):</strong> En carnes donde la masa disminuye, la merma es simplemente <code>100% − Rendimiento %</code>. Un pollo con 72% de rendimiento tiene una merma del <code>100% − 72% = 28%</code>. En cereales que se expanden por encima del 100%, el multiplicador es mayor a 1,0 (ej. arroz blanco con 300% de rendimiento tiene un factor de expansión de 3,0×).',

  sec3Title: '3. Tabla Maestra de Conversión Culinaria (Rendimientos USDA)',
  sec3Intro:
    'A continuación se presenta la tabla de conversión de carnes, aves, mariscos, cereales, legumbres y verduras. Todos los valores provienen del Manual de Agricultura del USDA Nº 102, la Tabla de Rendimientos de Cocción de Carnes y USDA FoodData Central:',
  sec3ColFood: 'Alimento',
  sec3ColMethod: 'Método Típico',
  sec3ColYield: 'Rendimiento USDA',
  sec3ColRtc: 'Crudo→Cocido',
  sec3ColCtr: 'Cocido→Crudo',
  sec3ColMoisture: 'Variación de Agua',
  sec3ColNotes: 'Nota Culinaria',
  tableRows: [
    { food: 'Pechuga de Pollo (Sin piel ni hueso)', method: 'Horno / Parrilla', yieldPct: '72%', rtc: '× 0,72', ctr: '÷ 0,72', moisture: '−28%', notes: '200 g crudo rinde ~144 g cocido' },
    { food: 'Muslo de Pollo (Sin piel ni hueso)', method: 'Asado / Sartén', yieldPct: '74%', rtc: '× 0,74', ctr: '÷ 0,74', moisture: '−26%', notes: 'Mayor retención de grasa que pechuga' },
    { food: 'Alitas de Pollo (Con hueso)', method: 'Horno / Air Fryer', yieldPct: '55%', rtc: '× 0,55', ctr: '÷ 0,55', moisture: '−45%', notes: 'Los huesos son ~40% del peso crudo' },
    { food: 'Pavo Molido (93/7 Magro)', method: 'Sartén', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: '200 g crudo rinde ~156 g cocido' },
    { food: 'Carne Molida de Res (80/20)', method: 'Sartén / Parrilla', yieldPct: '73%', rtc: '× 0,73', ctr: '÷ 0,73', moisture: '−27%', notes: '200 g crudo rinde ~146 g cocido' },
    { food: 'Carne Molida de Res (90/10 Magra)', method: 'Sartén', yieldPct: '81%', rtc: '× 0,81', ctr: '÷ 0,81', moisture: '−19%', notes: 'Carne más magra retiene más masa' },
    { food: 'Bife / Filete de Res', method: 'Sartén Término Medio', yieldPct: '75%', rtc: '× 0,75', ctr: '÷ 0,75', moisture: '−25%', notes: 'Cocido a 63°C (145°F)' },
    { food: 'Ribeye de Res', method: 'Parrilla', yieldPct: '71%', rtc: '× 0,71', ctr: '÷ 0,71', moisture: '−29%', notes: 'Grasa marmoleada se funde en sartén' },
    { food: 'Chuleta de Cerdo (Lomo)', method: 'Sartén / Horno', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: 'Cocido a 63°C interno' },
    { food: 'Solomillo de Cerdo', method: 'Asado', yieldPct: '77%', rtc: '× 0,77', ctr: '÷ 0,77', moisture: '−23%', notes: 'Corte magro y tierno' },
    { food: 'Tiras de Tocino (Bacon)', method: 'Sartén', yieldPct: '33%', rtc: '× 0,33', ctr: '÷ 0,33', moisture: '−67%', notes: 'Pérdida masiva de grasa fundida' },
    { food: 'Salmón del Atlántico (Filete)', method: 'Horno / Sartén', yieldPct: '85%', rtc: '× 0,85', ctr: '÷ 0,85', moisture: '−15%', notes: 'Grasas omega-3 se retienen en carne' },
    { food: 'Pescado Blanco (Bacalao / Tilapia)', method: 'Horno / Vapor', yieldPct: '80%', rtc: '× 0,80', ctr: '÷ 0,80', moisture: '−20%', notes: 'Carne magra y delicada' },
    { food: 'Camarones Crudos Pelados', method: 'Salteado / Hervido', yieldPct: '75%', rtc: '× 0,75', ctr: '÷ 0,75', moisture: '−25%', notes: '200 g crudos rinden ~150 g cocidos' },
    { food: 'Atún en Lata al Agua', method: 'Escurrido', yieldPct: '68%', rtc: '× 0,68', ctr: '÷ 0,68', moisture: '−32%', notes: 'Lata de 142 g rinde ~97 g escurrido' },
    { food: 'Arroz Blanco (Grano Largo / Jazmín)', method: 'Hervido / Vapor', yieldPct: '300%', rtc: '× 3,00', ctr: '÷ 3,00', moisture: '+200%', notes: '100 g seco rinde 300 g cocido' },
    { food: 'Arroz Integral', method: 'Hervido', yieldPct: '270%', rtc: '× 2,70', ctr: '÷ 2,70', moisture: '+170%', notes: 'El salvado limita absorción de agua' },
    { food: 'Pasta Seca (Espaguetis / Plumas)', method: 'Hervida Al Dente', yieldPct: '225%', rtc: '× 2,25', ctr: '÷ 2,25', moisture: '+125%', notes: '100 g seco rinde ~225 g cocido' },
    { food: 'Copos de Avena', method: 'Cocida en Agua', yieldPct: '300%', rtc: '× 3,00', ctr: '÷ 3,00', moisture: '+200%', notes: '50 g seco rinde 150 g cocido' },
    { food: 'Avena Cortada (Steel Cut)', method: 'Cocción Lenta', yieldPct: '350%', rtc: '× 3,50', ctr: '÷ 3,50', moisture: '+250%', notes: 'Grano denso absorbe más líquido' },
    { food: 'Quinua Seca', method: 'Hervida', yieldPct: '310%', rtc: '× 3,10', ctr: '÷ 3,10', moisture: '+210%', notes: '100 g seco rinde 310 g cocido' },
    { food: 'Lentejas Secas', method: 'Hervidas', yieldPct: '290%', rtc: '× 2,90', ctr: '÷ 2,90', moisture: '+190%', notes: '100 g seco rinde 290 g cocido' },
    { food: 'Frijoles Negros Secos', method: 'Remojados y Hervidos', yieldPct: '240%', rtc: '× 2,40', ctr: '÷ 2,40', moisture: '+140%', notes: 'Se expande 2,4× al cocinarse' },
    { food: 'Espinacas Crudas', method: 'Vapor / Salteadas', yieldPct: '77%', rtc: '× 0,77', ctr: '÷ 0,77', moisture: '−23%', notes: 'Pierde 80% volumen, 23% masa' },
    { food: 'Brócoli en Ramitos', method: 'Vapor / Hervido', yieldPct: '100%', rtc: '× 1,00', ctr: '÷ 1,00', moisture: '0%', notes: 'El agua superficial balancea pérdida' },
    { food: 'Papa Entera', method: 'Hervida / Asada', yieldPct: '94%', rtc: '× 0,94', ctr: '÷ 0,94', moisture: '−6%', notes: 'La cáscara atrapa el vapor interior' },
    { food: 'Batata / Camote en Cubos', method: 'Horno Asado', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: 'El asado concentra los azúcares' },
  ],

  sec4Title: '4. Ley de Conservación de Macronutrientes y Errores al Registrar Calorías',
  sec4Intro:
    'Uno de los errores más persistentes en el fitness y la nutrición es pensar que cocinar destruye o reduce las calorías de los alimentos. La física elemental lo desmiente: la Ley de Conservación de la Masa demuestra que la materia no desaparece en el aire.',
  sec4CardTitle: '¿Qué se Evapora Realmente de la Sartén?',
  sec4CardText:
    'Cuando el pollo chisporrotea, el vapor que sube es agua pura (H2O). El agua contiene exactamente cero calorías, cero gramos de proteína, cero de carbohidratos y cero de grasa. Los aminoácidos de las proteínas musculares no se evaporan.',
  sec4RawLabel: 'Pechuga Cruda (100 g):',
  sec4RawCals: '120 Calorías',
  sec4RawProtein: '22,5 g Proteína',
  sec4RawFat: '2,6 g Grasa • 0 g Carbohidratos',
  sec4CookedLabel: 'Peso Cocido Final (~72 g):',
  sec4CookedCals: '120 Calorías (Sin cambio)',
  sec4CookedProtein: '22,5 g Proteína (Sin cambio)',
  sec4CookedFat: '2,6 g Grasa • 0 g Carbohidratos',
  sec4CardSummaryHtml:
    'Al evaporarse 28 g de agua sin calorías, la carne cocida es ahora más densa en nutrientes por gramo: aporta aproximadamente <strong>31,25 g de proteína por cada 100 g cocidos</strong>, frente a solo <strong>22,5 g por cada 100 g en crudo</strong>.',
  sec4TrapTitle: 'La Trampa Crítica al Registrar en Apps',
  sec4TrapP1:
    'Apps como MyFitnessPal, Cronometer, MacroFactor o Lose It! tienen bases de datos que registran alimentos enteros en su estado crudo por defecto. Cuando alguien cocina pollo, pesa 150 g de carne cocida en su plato y selecciona "Pechuga de Pollo" cruda en la app, comete un error grave.',
  sec4TrapP2Html:
    'En realidad, 150 g de pollo cocido equivalen a <code>150 g ÷ 0,72 = 208 g</code> en crudo. La persona consumió 250 calorías y 46,8 g de proteína, pero anotó solo 180 calorías y 33,8 g de proteína. En una sola comida, dejó sin contar <strong>70 calorías y 13 gramos de proteína</strong>. ¡A lo largo del día esto genera un desfase de 200–300 calorías que frena cualquier objetivo de pérdida de grasa!',
  sec4TrapP3:
    'Con los cereales ocurre lo contrario: comer 200 g de arroz blanco cocido y registrarlo como arroz seco hace que la app compute 730 calorías en lugar de 245 calorías, generando un falso exceso de 485 calorías.',

  sec5Title: '5. Meal Prep y el Dilema de la Olla Compartida en Platos Múltiples',
  sec5Intro:
    'Al preparar comidas para toda la semana, pesar cada ingrediente en crudo por plato resulta imposible. Si cocinas 1,5 kg de pollo crudo con 400 g de arroz seco y verduras en una sola cacerola, ¿cómo dividirlo con exactitud matemática?',
  sec5Strat1Title: 'Estrategia 1: Método de la Tara Total Cocida',
  sec5Strat1Desc: 'Ideal cuando se sirven porciones de tamaños diferentes:',
  sec5Strat1StepsHtml: [
    '<strong>Pesar la Olla Vacía:</strong> Pesa la olla limpia antes de cocinar (ej. 1.000 g).',
    '<strong>Sumar Macros Crudos:</strong> Suma todas las calorías y proteínas de los ingredientes crudos (ej. 2.400 kcal, 200 g proteína).',
    '<strong>Pesar la Olla Llena:</strong> Tras cocinar, pesa la olla con comida (ej. 3.000 g bruto) y resta la tara: <code>3.000 g − 1.000 g = 2.000 g neto cocido</code>.',
    '<strong>Calcular Densidad por Gramo:</strong> Divide los macros crudos entre los gramos cocidos netos: <code>2.400 kcal ÷ 2.000 g = 1,2 kcal/g</code>.',
    '<strong>Servir y Registrar:</strong> Sirve cualquier porción (ej. 300 g). Macros calculados: <code>300 g × 1,2 = 360 kcal</code>.',
  ],
  sec5Strat2Title: 'Estrategia 2: División Equitativa en Recipientes',
  sec5Strat2Desc:
    'Si preparas 5 almuerzos iguales para ti mismo, reparte la comida de forma pareja en 5 recipientes. Registra 1/5 (20%) de los ingredientes crudos totales cada día. El promedio semanal será 100% exacto.',

  sec6Title: '6. Cómo Afectan los Métodos de Cocción y la Temperatura al Rendimiento',
  sec6Intro: 'La técnica culinaria y el punto de cocción determinan la retención de agua final:',
  sec6DryTitle: 'Air Fryer y Parrilla',
  sec6DryTextHtml:
    'La convección intensa o el fuego abierto aceleran la evaporación, bajando el rendimiento del pollo al <strong>65% – 68%</strong>.',
  sec6MoistTitle: 'Cocción Lenta y Guisados',
  sec6MoistTextHtml:
    'La tapa atrapa el vapor, reteniendo los jugos en la salsa y conservando rendimientos más altos del <strong>76% – 79%</strong>.',
  sec6SousVideTitle: 'Precisión Sous-Vide',
  sec6SousVideTextHtml:
    'Las bolsas al vacío impiden por completo la evaporación al aire, logrando rendimientos máximos del <strong>81% – 85%</strong>.',
  sec6DonenessTitle: 'Punto de Cocción de la Res y Rendimiento',
  donenessRows: [
    { name: 'Rojo / Poco Hecho (52°C)', yield: '88–90% Rendimiento' },
    { name: 'Término Medio (57°C)', yield: '80–84% Rendimiento' },
    { name: 'Tres Cuartos (63°C)', yield: '74–78% Rendimiento' },
    { name: 'Bien Cocido (74°C+)', yield: '62–66% Rendimiento' },
  ],

  sec7Title: '7. Consideraciones Especiales: Huesos, Piel e Inyección de Agua',
  sec7BoneTitle: 'Cortes Con Hueso vs. Deshuesados',
  sec7BoneText:
    'Los huesos no aportan calorías comestibles. Porcentajes aproximados de hueso: pechuga con hueso (20-25%), alitas de pollo (45-50%), chuletón / T-bone (15-20%), costillas de cerdo (35-40%). Pesa la carne con hueso antes de comer, pesa los huesos limpios al terminar y resta para hallar la masa comestible real.',
  sec7InjectionTitle: 'Inyecciones Industriales de Agua en Pollo',
  sec7InjectionText:
    'Muchas pechugas de supermercado contienen hasta un 15% de salmuera inyectada. Al cocinarse, este líquido se libera con rapidez, haciendo que la merma suba hasta el 35%. Comprar pollo sin marinar y refrigerado por aire garantiza conversiones más fieles a los estándares del USDA.',

  sec8Title: '8. Integridad de los Datos Científicos: El Estándar USDA',
  sec8Text:
    'Todos los porcentajes de rendimiento de esta calculadora provienen de estudios de laboratorio del Servicio de Investigación Agrícola del USDA (ARS), específicamente la Tabla de Rendimientos de Cocción de Carnes y Aves, el Manual de Agricultura Nº 102 y USDA FoodData Central. Mediciones de laboratorio fiables que evitan los errores de las apps comunitarias.',

  sec9Title: '9. Buenas Prácticas en la Cocina',
  sec9TipsHtml: [
    '<strong>Usa una Báscula Digital:</strong> Escoge una con precisión de 1 g y botón de tara instantáneo.',
    '<strong>Registra Aceites de Cocina Aparte:</strong> Anota siempre los aceites y la mantequilla de forma independiente al rendimiento de la carne.',
    '<strong>Mantén la Constancia:</strong> Seguir el mismo método de pesaje semana tras semana garantiza mediciones útiles y reales en tu progreso físico.',
  ],

  footerTeam: 'Equipo Editorial y Científico: Raw to Cooked Calculator',
  footerSource: 'Respaldado por manuales agrícolas oficiales del USDA y FoodData Central. Actualizado a Octubre 2026.',
  footerMethodology: 'Ver Metodología Completa →',
  footerAbout: 'Sobre Nosotros',
};
