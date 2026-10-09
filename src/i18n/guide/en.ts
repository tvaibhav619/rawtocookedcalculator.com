import type { GuideContent } from './types';

export const enGuide: GuideContent = {
  badge: 'Comprehensive Reference & Science Guide',
  title: 'The Complete Guide to Raw vs. Cooked Food Weights, Moisture Dynamics, and Nutritional Accuracy',
  intro:
    'Anyone who has ever prepared a meal, stepped on a scale, or logged a meal into a fitness app knows that food does not emerge from the stove weighing what it did when it came out of the refrigerator. Animal proteins shrink and lose up to a third of their initial mass, while dry grains, pasta, and pulses absorb boiling water and double or triple in volume. This authoritative reference details the thermodynamics of culinary cooking yields, the universal mathematical conversion framework, official USDA yield figures, and practical strategies for meal prepping and macronutrient tracking.',

  sec1Title: '1. The Cellular Physics and Chemistry of Cooking Yields',
  sec1Intro:
    'The discrepancy between raw food weight and cooked food weight is not a mystery—it is a direct consequence of cellular biology and thermodynamics. Every whole food is comprised of water, proteins, lipids, carbohydrates, dietary fiber, and minerals. Heat fundamentally alters the physical structure of these components, causing water and fat either to be expelled or absorbed.',
  sec1ProteinTitle: 'Protein Denaturation in Meats and Seafood',
  sec1ProteinText:
    'Raw animal muscle tissue is approximately 70% to 75% water by weight, tightly bound within a grid of myofibrillar proteins consisting of myosin and actin. When you apply thermal energy to a skillet or oven:',
  sec1ProteinBullets: [
    'At 105°F to 130°F (40°C–55°C): Myosin proteins denature and unfold, causing the muscle fibers to shrink transversely (in diameter).',
    'At 140°F to 150°F (60°C–66°C): Connective collagen begins to contract longitudinally. Water that was previously held in the intercellular spaces is squeezed out like liquid from a compressed sponge.',
    'Above 165°F (74°C): Actin denatures, hardening the muscle matrix and forcing remaining moisture into vapor. Consequently, cooked meats weigh 15% to 35% less than their raw starting weight.',
  ],
  sec1StarchTitle: 'Starch Gelatinization in Grains and Legumes',
  sec1StarchText:
    'Dry starches such as white rice, brown rice, oats, lentils, and dry pasta enter the kitchen in a dehydrated state with moisture levels typically under 12%. When exposed to hot liquid:',
  sec1StarchBullets: [
    'Capillary Hydration: Water molecules penetrate the compact semicrystalline starch granules through microscopic channels.',
    'Gelatinization Threshold (140°F–185°F / 60°C–85°C): The intermolecular hydrogen bonds of amylose and amylopectin rupture, allowing the granules to absorb enormous volumes of water and swell.',
    'Mass Multiplication: Because water becomes trapped in the expanded gel network, grains expand to 2.2× to 3.5× their dry weight. Cooked rice consists of approximately 65% to 70% absorbed water.',
  ],
  sec1VegText:
    'Vegetables exhibit a third distinct mechanism. Many vegetables, such as spinach and zucchini, contain high moisture content trapped in cell vacuoles. Heat dissolves structural pectin in the cell walls and bursts the air pockets between cells. In spinach, this causes an 80% to 90% collapse in physical volume, even though the actual weight loss is only around 23%. By contrast, root vegetables like potatoes lose very little weight (approx. 6%) when boiled whole because starch gelatinization counterbalances moisture evaporation.',

  sec2Title: '2. The Universal Mathematical Conversion Framework',
  sec2Intro:
    'Converting between raw and cooked food weights is based on a single core scientific parameter: the Cooking Yield Percentage (Yield %). Established through decades of laboratory research by food scientists at the United States Department of Agriculture (USDA), yield represents the ratio of final edible cooked weight to initial raw weight:',
  sec2EquationLabel: 'Fundamental Yield Equation',
  sec2Equation: 'Cooking Yield % = (Cooked Weight ÷ Raw Weight) × 100',
  sec2SubIntro:
    'With the yield percentage in hand, two mathematical formulas allow you to convert in either direction with complete precision:',
  sec2FormulaATitle: 'Formula A: Converting Raw Weight to Cooked Weight',
  sec2FormulaADesc:
    'Use this formula when you are planning a meal, preparing portions from a raw package, or grocery shopping:',
  sec2FormulaACode: 'Cooked Weight = Raw Weight × (Yield % ÷ 100)',
  sec2FormulaAExampleHtml:
    '<strong>Step-by-step example:</strong> You have 250g of raw chicken breast (USDA yield = 72%):<br /><code>Cooked = 250g × 0.72 = 180g</code>. Your 250g raw cut will yield 180g of cooked meat on your plate.',
  sec2FormulaBTitle: 'Formula B: Converting Cooked Weight to Raw Weight',
  sec2FormulaBDesc:
    'Use this formula when you only have cooked food available (e.g., leftover containers or restaurants) and must determine the raw equivalent for nutrition tracking:',
  sec2FormulaBCode: 'Raw Weight Equivalent = Cooked Weight ÷ (Yield % ÷ 100)',
  sec2FormulaBExampleHtml:
    '<strong>Step-by-step example:</strong> You scooped 150g of cooked 80/20 ground beef from the fridge (USDA yield = 73%):<br /><code>Raw = 150g ÷ 0.73 = 205.5g</code>. You ate the nutritional equivalent of 205.5g raw ground beef.',
  sec2ShrinkageNoteHtml:
    '<strong>Understanding Shrinkage Percentage:</strong> For meats and fish where mass decreases, shrinkage percentage is simply <code>100% − Yield %</code>. A chicken breast with a 72% yield undergoes <code>100% − 72% = 28%</code> shrinkage. For grains that expand past 100%, the multiplier is greater than 1.0 (e.g., white rice with 300% yield has an expansion multiplier of 3.0×).',

  sec3Title: '3. Master Culinary Conversion Table (USDA-Verified Yields)',
  sec3Intro:
    'Below is the comprehensive conversion reference across meat, poultry, seafood, grains, legumes, and produce. Every value is sourced from USDA Agriculture Handbook No. 102, the USDA Table of Cooking Yields for Meat and Poultry, and USDA FoodData Central:',
  sec3ColFood: 'Food Item',
  sec3ColMethod: 'Standard Method',
  sec3ColYield: 'USDA Yield',
  sec3ColRtc: 'Raw→Cooked',
  sec3ColCtr: 'Cooked→Raw',
  sec3ColMoisture: 'Moisture Shift',
  sec3ColNotes: 'Culinary Note',
  tableRows: [
    { food: 'Chicken Breast (Boneless, Skinless)', method: 'Baking / Grilling', yieldPct: '72%', rtc: '× 0.72', ctr: '÷ 0.72', moisture: '−28%', notes: '200g raw yields ~144g cooked' },
    { food: 'Chicken Thighs (Boneless, Skinless)', method: 'Roasting / Pan-Sear', yieldPct: '74%', rtc: '× 0.74', ctr: '÷ 0.74', moisture: '−26%', notes: 'Higher fat retention than breast' },
    { food: 'Chicken Wings (Bone-in)', method: 'Baking / Air Fryer', yieldPct: '55%', rtc: '× 0.55', ctr: '÷ 0.55', moisture: '−45%', notes: 'Bones account for ~40% raw weight' },
    { food: 'Ground Turkey (93/7 Lean)', method: 'Skillet Pan-Fry', yieldPct: '78%', rtc: '× 0.78', ctr: '÷ 0.78', moisture: '−22%', notes: '200g raw yields ~156g cooked' },
    { food: 'Ground Beef (80/20 Chuck)', method: 'Pan-Fry / Grilling', yieldPct: '73%', rtc: '× 0.73', ctr: '÷ 0.73', moisture: '−27%', notes: '200g raw yields ~146g cooked' },
    { food: 'Ground Beef (90/10 Sirloin)', method: 'Skillet Pan-Fry', yieldPct: '81%', rtc: '× 0.81', ctr: '÷ 0.81', moisture: '−19%', notes: 'Leaner beef retains more mass' },
    { food: 'Beef Sirloin Steak', method: 'Medium Pan-Sear', yieldPct: '75%', rtc: '× 0.75', ctr: '÷ 0.75', moisture: '−25%', notes: 'Cooked medium to 145°F (63°C)' },
    { food: 'Beef Ribeye Steak', method: 'Grilling / Broiling', yieldPct: '71%', rtc: '× 0.71', ctr: '÷ 0.71', moisture: '−29%', notes: 'Marbled fat renders into pan' },
    { food: 'Pork Chops (Loin)', method: 'Pan-Sear / Oven', yieldPct: '78%', rtc: '× 0.78', ctr: '÷ 0.78', moisture: '−22%', notes: 'Cooked to 145°F internal' },
    { food: 'Pork Tenderloin', method: 'Roasting', yieldPct: '77%', rtc: '× 0.77', ctr: '÷ 0.77', moisture: '−23%', notes: 'Lean tender cut' },
    { food: 'Bacon (Cured Sliced)', method: 'Pan-Frying', yieldPct: '33%', rtc: '× 0.33', ctr: '÷ 0.33', moisture: '−67%', notes: 'Fat renders heavily' },
    { food: 'Atlantic Salmon Fillet', method: 'Baking / Pan-Sear', yieldPct: '85%', rtc: '× 0.85', ctr: '÷ 0.85', moisture: '−15%', notes: 'Omega-3 fats remain inside flesh' },
    { food: 'White Fish (Cod / Tilapia)', method: 'Baking / Steaming', yieldPct: '80%', rtc: '× 0.80', ctr: '÷ 0.80', moisture: '−20%', notes: 'Light flaky structure' },
    { food: 'Raw Peeled Shrimp', method: 'Sautéing / Boiling', yieldPct: '75%', rtc: '× 0.75', ctr: '÷ 0.75', moisture: '−25%', notes: '200g raw yields ~150g cooked' },
    { food: 'Canned Tuna (Chunk Light in Water)', method: 'Drained', yieldPct: '68%', rtc: '× 0.68', ctr: '÷ 0.68', moisture: '−32%', notes: '142g can yields ~97g drained' },
    { food: 'White Rice (Long Grain / Jasmine)', method: 'Boiling / Steaming', yieldPct: '300%', rtc: '× 3.00', ctr: '÷ 3.00', moisture: '+200%', notes: '100g dry rice yields 300g cooked' },
    { food: 'Brown Rice (Whole Grain)', method: 'Boiling / Simmering', yieldPct: '270%', rtc: '× 2.70', ctr: '÷ 2.70', moisture: '+170%', notes: 'Bran layer limits water uptake' },
    { food: 'Dry Pasta (Spaghetti / Penne)', method: 'Boiling Al Dente', yieldPct: '225%', rtc: '× 2.25', ctr: '÷ 2.25', moisture: '+125%', notes: '100g dry pasta yields ~225g cooked' },
    { food: 'Rolled Oats (Porridge)', method: 'Simmered in Water', yieldPct: '300%', rtc: '× 3.00', ctr: '÷ 3.00', moisture: '+200%', notes: '50g dry yields 150g cooked' },
    { food: 'Steel Cut Oats', method: 'Slow Simmered', yieldPct: '350%', rtc: '× 3.50', ctr: '÷ 3.50', moisture: '+250%', notes: 'Dense groats absorb more water' },
    { food: 'Dry Quinoa', method: 'Simmered', yieldPct: '310%', rtc: '× 3.10', ctr: '÷ 3.10', moisture: '+210%', notes: '100g dry seeds yields 310g cooked' },
    { food: 'Dry Brown Lentils', method: 'Boiling', yieldPct: '290%', rtc: '× 2.90', ctr: '÷ 2.90', moisture: '+190%', notes: '100g dry yields 290g cooked' },
    { food: 'Dry Black Beans', method: 'Soaked & Boiled', yieldPct: '240%', rtc: '× 2.40', ctr: '÷ 2.40', moisture: '+140%', notes: 'Expands 2.4× when cooked' },
    { food: 'Raw Spinach Leaves', method: 'Steamed / Wilted', yieldPct: '77%', rtc: '× 0.77', ctr: '÷ 0.77', moisture: '−23%', notes: 'Loses 80% volume, 23% mass' },
    { food: 'Broccoli Florets', method: 'Steamed / Boiled', yieldPct: '100%', rtc: '× 1.00', ctr: '÷ 1.00', moisture: '0%', notes: 'Surface water balances loss' },
    { food: 'Russet Potato (Whole)', method: 'Boiled / Baked', yieldPct: '94%', rtc: '× 0.94', ctr: '÷ 0.94', moisture: '−6%', notes: 'Skin traps interior steam' },
    { food: 'Sweet Potato (Cubed)', method: 'Oven Roasted', yieldPct: '78%', rtc: '× 0.78', ctr: '÷ 0.78', moisture: '−22%', notes: 'Roasting concentrates sugars' },
  ],

  sec4Title: '4. The Macronutrient Conservation Law & Avoiding Calorie Tracking Pitfalls',
  sec4Intro:
    'One of the most persistent misconceptions in nutrition and fitness is that cooking reduces or destroys the calories and macronutrients of food. In reality, basic physics applies: the Law of Conservation of Mass dictates that matter cannot simply vanish into thin air.',
  sec4CardTitle: 'What Actually Escapes the Pan During Cooking?',
  sec4CardText:
    'When a piece of chicken sizzles in a frying pan, the steam billowing into the kitchen is pure water (H2O). Water contains exactly zero calories, zero grams of protein, zero grams of carbohydrates, and zero grams of fat. The amino acids that form the chicken’s muscle proteins do not evaporate.',
  sec4RawLabel: 'Raw Chicken Breast (100g):',
  sec4RawCals: '120 Calories',
  sec4RawProtein: '22.5g Protein',
  sec4RawFat: '2.6g Fat • 0g Carbs',
  sec4CookedLabel: 'Finished Cooked Weight (~72g):',
  sec4CookedCals: '120 Calories (Unchanged)',
  sec4CookedProtein: '22.5g Protein (Unchanged)',
  sec4CookedFat: '2.6g Fat • 0g Carbs (Unchanged)',
  sec4CardSummaryHtml:
    'Because 28g of zero-calorie water evaporated, the cooked meat is now significantly more nutrient-dense per gram. Cooked chicken delivers roughly <strong>31.25g of protein per 100g cooked</strong>, whereas raw chicken delivers only <strong>22.5g of protein per 100g raw</strong>.',
  sec4TrapTitle: 'The Fatal Calorie Tracking Dilemma',
  sec4TrapP1:
    'Popular mobile nutrition apps such as MyFitnessPal, MacroFactor, Cronometer, and Lose It! rely on nutrition databases that list whole foods in their raw state by default (as defined by USDA FoodData Central). When users cook a batch of chicken, weigh 150g of cooked meat on their plate, and select a generic entry titled "Chicken Breast", the application assumes they consumed 150g of raw chicken.',
  sec4TrapP2Html:
    'In reality, 150g of cooked chicken came from <code>150g ÷ 0.72 = 208g</code> of raw chicken. The user actually consumed 250 calories and 46.8g of protein, but recorded only 180 calories and 33.8g of protein. In a single meal, they underreported their intake by <strong>70 calories and 13 grams of protein</strong>. Over the course of a day, this error easily compounds into a 200–300 calorie unrecorded discrepancy, completely masking why weight loss or fat loss has stalled!',
  sec4TrapP3:
    'The inverse error happens with grains: eating 200g of cooked white rice and logging it as dry white rice causes the app to record 730 calories instead of 245 calories—generating a phantom 485-calorie surplus that causes unnecessary panic.',

  sec5Title: '5. Batch Cooking and The "Pot Dilemma": Managing Multi-Serving Dishes',
  sec5Intro:
    'When meal prepping for the week or cooking for a family, weighing each raw ingredient individually per plate is impossible. You might brown 1.5 kg of raw chicken, simmer it with 400g of dry rice, and add 500g of vegetables into a single casserole or Dutch oven. How do you divide the finished dish with mathematical accuracy?',
  sec5Strat1Title: 'Strategy 1: The Total Cooked Tare Method',
  sec5Strat1Desc: 'Ideal for variable portions across different family members:',
  sec5Strat1StepsHtml: [
    '<strong>Tare Vessel:</strong> Weigh the empty cooking pot before cooking (e.g., 1,000g).',
    '<strong>Sum Raw Macros:</strong> Calculate total raw calories and protein across all ingredients (e.g., 2,400 kcal, 200g protein).',
    '<strong>Weigh Cooked Batch:</strong> Weigh pot with finished food (e.g., 3,000g gross) and subtract pot tare: <code>3,000g − 1,000g = 2,000g net cooked food</code>.',
    '<strong>Calculate Macro Density:</strong> Divide raw macros by net cooked grams: <code>2,400 kcal ÷ 2,000g = 1.2 kcal/g</code>.',
    '<strong>Plate & Log:</strong> Scoop any portion (e.g., 300g). Converted macros: <code>300g × 1.2 = 360 kcal</code>.',
  ],
  sec5Strat2Title: 'Strategy 2: The Equal Container Division Method',
  sec5Strat2Desc:
    'When meal prepping identical portions for yourself across the week, divide the finished cooked meal evenly across 5 containers. Log 1/5th (20%) of the raw ingredients into your tracking app daily. Weekly averages remain 100% accurate.',

  sec6Title: '6. How Cooking Methods and Core Temperatures Alter Final Yields',
  sec6Intro: 'Cooking technique and internal doneness directly influence final moisture retention:',
  sec6DryTitle: 'Air Frying & Grilling',
  sec6DryTextHtml:
    'High-velocity convection or open flames accelerate evaporation, lowering chicken yields to <strong>65% to 68%</strong>.',
  sec6MoistTitle: 'Braising & Stewing',
  sec6MoistTextHtml:
    'Trapped steam retains expelled juices within the sauce, preserving higher yields of <strong>76% to 79%</strong>.',
  sec6SousVideTitle: 'Sous-Vide Precision',
  sec6SousVideTextHtml:
    'Vacuum pouches eliminate atmospheric moisture loss entirely, delivering top yields of <strong>81% to 85%</strong>.',
  sec6DonenessTitle: 'Beef Doneness Temperature & Yield Correlation',
  donenessRows: [
    { name: 'Rare (125°F)', yield: '88–90% Yield' },
    { name: 'Med-Rare (135°F)', yield: '80–84% Yield' },
    { name: 'Medium (145°F)', yield: '74–78% Yield' },
    { name: 'Well (165°F+)', yield: '62–66% Yield' },
  ],

  sec7Title: '7. Special Considerations: Bone, Skin, and Water Injections',
  sec7BoneTitle: 'Bone-in vs. Boneless Cuts',
  sec7BoneText:
    'Bones contribute zero calories. Approximate bone percentages: bone-in chicken breast (20-25%), chicken wings (45-50%), T-bone steak (15-20%), pork spare ribs (35-40%). Weigh bone-in meat before eating, weigh cleaned bones afterward, and subtract to find true edible mass.',
  sec7InjectionTitle: 'Commercial Water Injections ("Plumped" Poultry)',
  sec7InjectionText:
    'Many supermarket chicken breasts contain up to 15% added saline broth solution. When heated, this injected water releases rapidly, causing shrinkage rates to spike up to 35%. Sourcing air-chilled, unenhanced poultry yields consistent conversions matching USDA standards.',

  sec8Title: '8. Scientific Data Integrity: The USDA Standard',
  sec8Text:
    'All yield percentages in this calculator are anchored in peer-reviewed data from the USDA Agricultural Research Service (ARS), specifically the USDA Table of Cooking Yields for Meat and Poultry, USDA Agriculture Handbook No. 102, and USDA FoodData Central. These standardized laboratory measurements eliminate the errors common in crowdsourced fitness apps.',

  sec9Title: '9. Kitchen Workflow Best Practices',
  sec9TipsHtml: [
    '<strong>Use a Digital Scale:</strong> Choose 1g precision with a reliable tare function.',
    '<strong>Track Added Cooking Oils:</strong> Always log cooking oils and butter separately from meat yields.',
    '<strong>Maintain Method Consistency:</strong> Consistent measurement habits guarantee reliable nutritional progress over time.',
  ],

  footerTeam: 'Research & Editorial Team: Raw to Cooked Calculator',
  footerSource: 'Anchored in official USDA Agricultural Handbooks & FoodData Central. Updated October 2026.',
  footerMethodology: 'View Full Methodology →',
  footerAbout: 'About Us',
};
