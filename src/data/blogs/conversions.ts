import type { BlogPost } from './types';

export const CONVERSION_BLOGS: BlogPost[] = [
  {
    slug: 'how-do-i-convert-raw-weight-to-cooked-weight',
    title: 'How to Convert Raw Weight to Cooked Weight? (USDA Yield Formulas & Cheat Sheet)',
    shortTitle: 'Raw to Cooked Weight Conversion Formula',
    description: 'Learn how to accurately convert raw food weight to cooked weight (and vice versa) using official USDA cooking yields. Master formulas, cheat sheets, and macro tracking.',
    category: 'Weight Conversions',
    readTime: '9 min read',
    publishedDate: '2026-10-09',
    modifiedDate: '2026-10-10',
    keywords: [
      'how to convert raw weight to cooked weight',
      'raw to cooked weight conversion formula',
      'usda cooking yield table',
      'raw food vs cooked food weight',
      'how to calculate cooked food macros',
      'chicken raw to cooked multiplier'
    ],
    summary: 'A complete scientific and culinary guide on how food mass transforms during cooking. Features official USDA yield percentages, forward and reverse formulas, and macro tracking best practices.',
    quickAnswer: {
      headline: 'The Two Universal Weight Conversion Formulas',
      text: 'Converting between raw and cooked food relies on the USDA Cooking Yield Percentage (the ratio of final cooked weight to initial raw weight).',
      keyStats: [
        { label: 'Raw to Cooked', value: 'Cooked = Raw × (Yield% ÷ 100)', note: 'E.g., 200g raw chicken breast × 0.72 = 144g cooked' },
        { label: 'Cooked to Raw', value: 'Raw = Cooked ÷ (Yield% ÷ 100)', note: 'E.g., 144g cooked chicken breast ÷ 0.72 = 200g raw' },
        { label: 'Meat Shrinkage', value: '15% – 35% Weight Loss', note: 'Due to moisture evaporation and fat rendering' },
        { label: 'Grain Expansion', value: '2.0× – 3.2× Weight Gain', note: 'Due to starch gelatinization and water absorption' }
      ]
    },
    keyTakeaways: [
      'Meat, poultry, and fish shrink by 15% to 35% during cooking as intracellular moisture evaporates and animal fats render out.',
      'Grains, dry pasta, and legumes absorb boiling water, swelling by 200% to 320% of their dry weight.',
      'Calorie counts and macronutrient databases (like USDA FoodData Central) are standardized on raw ingredients unless explicitly designated as cooked.',
      'If you weigh cooked food but log it as raw in fitness trackers, you will severely underestimate your caloric and macronutrient intake.',
      'Use the reverse formula (Cooked Weight ÷ Yield Factor) to deduce raw equivalent mass when meal prepping.'
    ],
    sections: [
      {
        id: 'why-weights-change',
        title: 'The Thermodynamics of Food: Why Raw and Cooked Weights Differ',
        content: `
          <p class="mb-4">When raw food meets heat, profound thermodynamic and physical transformations occur. The discrepancy between raw starting weight and finished cooked weight is primarily governed by water dynamics:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-2">Moisture Loss in Proteins</h4>
              <p class="text-sm text-[var(--color-body)] leading-relaxed">Raw muscle tissue in poultry, beef, and fish is roughly 70% to 75% water held within myofibrillar protein meshes. As cooking temperatures exceed 140°F (60°C), myosin and actin proteins denature and contract, squeezing bound moisture outward into the skillet or roasting pan.</p>
            </div>
            <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-2">Starch Hydration in Carbohydrates</h4>
              <p class="text-sm text-[var(--color-body)] leading-relaxed">Dry grains like rice, pasta, and oats enter the pot with less than 12% moisture. In simmering water, amylose and amylopectin molecules absorb water molecules, expanding the starch matrix into a tender gelatinized state that weighs up to three times its original mass.</p>
            </div>
          </div>
          <p class="text-[var(--color-body)] leading-relaxed">Because water contains zero calories, macronutrients (protein, carbohydrates, and fats) remain constant during standard cooking methods like boiling, steaming, and grilling. What changes dramatically is <em>nutrient density per 100 grams</em>.</p>
        `
      },
      {
        id: 'mathematical-formulas',
        title: 'Step-by-Step Conversion Mathematics & Yield Factors',
        content: `
          <p class="mb-4">The United States Department of Agriculture (USDA) measures culinary mass changes using the <strong>Cooking Yield Percentage</strong>:</p>
          <div class="p-4 my-4 bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] font-mono text-center text-sm">
            Yield % = (Cooked Weight ÷ Raw Weight) × 100
          </div>
          <p class="mb-4">To make calculations effortless in daily meal preparation, convert the yield percentage into a decimal multiplier:</p>
          <ul class="list-disc pl-6 space-y-2 text-sm text-[var(--color-body)] mb-6">
            <li><strong>Forward Multiplier (Raw to Cooked):</strong> Multiply raw grams by (Yield% / 100). For skinless chicken breast with a 72% yield: <code>250g × 0.72 = 180g cooked</code>.</li>
            <li><strong>Reverse Divisor (Cooked to Raw):</strong> Divide cooked grams by (Yield% / 100). If you have 150g of cooked chicken in your lunch container: <code>150g ÷ 0.72 = 208.3g raw equivalent</code>.</li>
          </ul>
        `
      },
      {
        id: 'macro-tracking-trap',
        title: 'The Macro Tracking Trap: Why Consistency Prevents Plateaus',
        content: `
          <p class="mb-4">The single most common mistake fitness enthusiasts and dieters make is confusing raw and cooked entries in tracking applications like MyFitnessPal, Cronometer, or MacroFactor.</p>
          <p class="mb-4">Consider 100 grams of chicken breast:</p>
          <ul class="list-disc pl-6 space-y-2 text-sm text-[var(--color-body)] mb-6">
            <li><strong>100g of RAW chicken breast:</strong> ~120 calories, 22.5g protein, 2.6g fat.</li>
            <li><strong>100g of COOKED chicken breast:</strong> ~165 calories, 31.0g protein, 3.6g fat.</li>
          </ul>
          <p class="text-[var(--color-body)] leading-relaxed">If you weigh 150g of cooked chicken on your plate but select "Chicken Breast, Raw" in your app, you will log 180 calories instead of the actual ~248 calories you consumed. Over three daily meals, that discrepancy compounds to a 200–300 calorie invisible surplus—frequently stalling fat loss goals.</p>
        `
      }
    ],
    tableData: {
      caption: 'USDA Average Cooking Yields for Common Dietary Staples',
      headers: ['Food Item', 'Raw State', 'Cooking Method', 'Yield %', 'Weight Multiplier', 'Typical Result'],
      rows: [
        ['Chicken Breast (Skinless)', 'Raw Boneless', 'Baked / Roasted', '72%', '0.72', '200g raw → 144g cooked'],
        ['Chicken Thighs (Skinless)', 'Raw Boneless', 'Pan Seared', '69%', '0.69', '200g raw → 138g cooked'],
        ['Ground Beef (80/20 Chuck)', 'Raw Ground', 'Pan Broiled', '73%', '0.73', '200g raw → 146g cooked'],
        ['Lean Ground Beef (90/10)', 'Raw Ground', 'Pan Broiled', '81%', '0.81', '200g raw → 162g cooked'],
        ['Atlantic Salmon Fillet', 'Raw Skinless', 'Baked / Broiled', '85%', '0.85', '200g raw → 170g cooked'],
        ['White Rice (Long Grain)', 'Dry Uncooked', 'Simmered / Steamed', '300%', '3.00', '100g dry → 300g cooked'],
        ['Brown Rice', 'Dry Uncooked', 'Simmered', '270%', '2.70', '100g dry → 270g cooked'],
        ['Dry Pasta (Spaghetti)', 'Dry Uncooked', 'Boiled Al Dente', '225%', '2.25', '100g dry → 225g cooked'],
        ['Rolled Oats', 'Dry Uncooked', 'Cooked with Water', '300%', '3.00', '50g dry → 150g cooked']
      ]
    },
    faqs: [
      {
        question: 'Should I weigh food before or after cooking for macro tracking?',
        answer: 'Weighing food RAW is the gold standard for accuracy because raw moisture content is consistent, whereas cooked weight fluctuates based on cooking time, heat intensity, and pan dryness. If you must weigh cooked food, use an entry explicitly labeled "cooked" or calculate the raw equivalent using the USDA yield ratio.'
      },
      {
        question: 'Why does my cooked meat weigh different amounts on different days?',
        answer: 'Cooking duration, internal temperature, and heat level dictate moisture evaporation. A steak cooked to rare (125°F) retains significantly more water (yielding ~82%) than a steak cooked to well-done (160°F, yielding ~70%). Higher cooking temperatures squeeze more liquid out of muscle fibers.'
      },
      {
        question: 'Does cooking food change its total protein or calorie content?',
        answer: 'Standard cooking methods like boiling, baking, and grilling do not destroy significant amounts of protein or calories. The macronutrients remain intact, but because water evaporates from meats or is absorbed by grains, the concentration of nutrients per gram changes drastically.'
      }
    ],
    calculatorCta: {
      title: 'Calculate Exact Food Conversions Instantly',
      description: 'Switch between raw and cooked weights across 25+ USDA-verified ingredients with our interactive conversion calculator.',
      buttonText: 'Open Free Raw to Cooked Calculator',
      targetUrl: '/'
    },
    relatedSlugs: [
      'is-100g-raw-chicken-the-same-as-100g-cooked-chicken',
      'how-much-will-200g-raw-meat-weigh-cooked',
      'when-to-weigh-food-cooked-or-raw',
      'how-to-weigh-food-raw-or-cooked-step-by-step'
    ]
  },
  {
    slug: 'is-100g-raw-chicken-the-same-as-100g-cooked-chicken',
    title: 'Is 100g Raw Chicken the Same as 100g Cooked Chicken? (Weight & Macro Guide)',
    shortTitle: 'Is 100g Raw Chicken Same as Cooked?',
    description: 'Discover why 100g of raw chicken is NOT the same as 100g of cooked chicken. Understand the 28% water weight loss, calorie discrepancies, and protein differences.',
    category: 'Weight Conversions',
    readTime: '7 min read',
    publishedDate: '2026-10-10',
    modifiedDate: '2026-10-10',
    keywords: [
      'is 100g raw chicken the same as 100g cooked chicken',
      '100g raw chicken vs 100g cooked chicken',
      'how much protein in 100g cooked chicken',
      'how much does 100g raw chicken weigh cooked',
      'chicken breast water loss percentage'
    ],
    summary: 'A direct comparison of 100g raw vs 100g cooked chicken breast. Learn how moisture loss concentrates protein and calories, and avoid the #1 macro logging mistake.',
    quickAnswer: {
      headline: 'No! 100g Raw Chicken is NOT the Same as 100g Cooked Chicken',
      text: '100g of raw chicken breast shrinks to approximately 72g when cooked. Conversely, 100g of cooked chicken requires roughly 139g of raw chicken to make.',
      keyStats: [
        { label: '100g Raw Yield', value: '~72g Cooked', note: '28% moisture loss during baking/roasting' },
        { label: '100g Cooked Raw Eq.', value: '~139g Raw', note: 'Calculated as 100g ÷ 0.72' },
        { label: 'Raw 100g Protein', value: '22.5g Protein', note: '120 kcal, 2.6g fat' },
        { label: 'Cooked 100g Protein', value: '31.2g Protein', note: '165 kcal, 3.6g fat' }
      ]
    },
    keyTakeaways: [
      '100g of raw chicken breast contains ~22.5g of protein and ~120 calories, whereas 100g of cooked chicken breast contains ~31.2g of protein and ~165 calories.',
      'Cooked chicken has about 38% more protein and calories per 100 grams than raw chicken because moisture has evaporated, concentrating the nutrients.',
      'If you cook 100g of raw chicken, it will weigh roughly 70g–74g on your scale when done.',
      'To end up with exactly 100g of cooked chicken on your plate, you must start with roughly 139g of raw chicken.',
      'Never log cooked chicken as "raw chicken breast" in nutrition apps, or you will severely undercount your calorie and protein intake.'
    ],
    sections: [
      {
        id: 'the-fundamental-difference',
        title: 'The Core Difference: Water Content vs. Nutrient Concentration',
        content: `
          <p class="mb-4">At a chemical level, raw chicken breast is composed of roughly <strong>74% to 75% water</strong>, 22.5% protein, and 2.5% to 3% fat, with trace minerals. During cooking, heat forces water molecules to vaporize or escape as pan drippings.</p>
          <p class="mb-4">Because the evaporated liquid is purely water, none of the chicken's amino acids or fatty acids vanish into thin air. Instead, the remaining solids become densely concentrated in a smaller overall volume:</p>
          <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] mb-6">
            <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-1">The Density Principle</h4>
            <p class="text-sm text-[var(--color-body)] leading-relaxed">
              When 100g of raw chicken shrinks to 72g cooked, all 22.5g of protein remain in that 72g cut.
              Therefore, if you scoop out a full 100g portion of <em>cooked</em> chicken, you are actually eating <strong>1.39 times as much chicken meat</strong> as what was in a 100g raw cut!
            </p>
          </div>
        `
      },
      {
        id: 'nutritional-comparison',
        title: 'Side-by-Side Nutritional Breakdown: 100g Raw vs 100g Cooked',
        content: `
          <p class="mb-4">Here is the exact USDA FoodData Central profile comparison for boneless, skinless chicken breast:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div class="p-4 bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <span class="text-xs font-mono uppercase text-[var(--color-mute)]">100g Raw Chicken Breast</span>
              <p class="text-2xl font-bold text-[var(--color-ink)] my-1">120 kcal</p>
              <ul class="text-sm space-y-1 text-[var(--color-body)]">
                <li>• Protein: <strong>22.5g</strong></li>
                <li>• Fat: <strong>2.6g</strong></li>
                <li>• Carbs: <strong>0.0g</strong></li>
                <li>• Water: <strong>~75.0g</strong></li>
              </ul>
            </div>
            <div class="p-4 bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <span class="text-xs font-mono uppercase text-[var(--color-mute)]">100g Cooked Chicken Breast (Roasted)</span>
              <p class="text-2xl font-bold text-[var(--color-ink)] my-1">165 kcal</p>
              <ul class="text-sm space-y-1 text-[var(--color-body)]">
                <li>• Protein: <strong>31.2g</strong></li>
                <li>• Fat: <strong>3.6g</strong></li>
                <li>• Carbs: <strong>0.0g</strong></li>
                <li>• Water: <strong>~65.0g</strong></li>
              </ul>
            </div>
          </div>
          <p class="text-sm text-[var(--color-body)]">Notice the 45-calorie and ~9-gram protein jump between the two 100-gram portions. That is why specifying the raw or cooked state in your diet log is crucial.</p>
        `
      },
      {
        id: 'real-world-scenarios',
        title: 'Real-World Kitchen Scenarios: What to Do in Meal Prep',
        content: `
          <p class="mb-4">Here is how to handle your measurements depending on your cooking routine:</p>
          <div class="space-y-3 mb-6">
            <div class="p-3 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <strong class="text-sm text-[var(--color-ink)]">Scenario A: You cook a single serving for yourself right now.</strong>
              <p class="text-xs text-[var(--color-body)] mt-1">Weigh it raw on your scale before it hits the skillet. Log the raw weight directly into your app. This is the most accurate method possible.</p>
            </div>
            <div class="p-3 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <strong class="text-sm text-[var(--color-ink)]">Scenario B: You batch-cook 1 kg of chicken for the entire week.</strong>
              <p class="text-xs text-[var(--color-body)] mt-1">Weigh the raw batch (1000g). Cook it all. Weigh the entire cooked batch (e.g., 720g). Divide into 4 equal containers (180g each). Each container contains exactly 250g worth of raw chicken macros (56g protein).</p>
            </div>
          </div>
        `
      }
    ],
    tableData: {
      caption: 'Weight and Macro Comparison: Raw vs Cooked Chicken Breast Portions',
      headers: ['Raw Weight', 'Cooked Yield (72%)', 'Calories', 'Protein', 'Fat'],
      rows: [
        ['100g raw', '72g cooked', '120 kcal', '22.5g', '2.6g'],
        ['139g raw', '100g cooked', '167 kcal', '31.3g', '3.6g'],
        ['150g raw', '108g cooked', '180 kcal', '33.8g', '3.9g'],
        ['200g raw', '144g cooked', '240 kcal', '45.0g', '5.2g'],
        ['250g raw', '180g cooked', '300 kcal', '56.3g', '6.5g'],
        ['300g raw', '216g cooked', '360 kcal', '67.5g', '7.8g']
      ]
    },
    faqs: [
      {
        question: 'If I ate 100g of cooked chicken, how much protein did I get?',
        answer: 'You consumed approximately 31 grams of protein. Because moisture evaporated during cooking, 100g of cooked chicken is more protein-dense than 100g of raw chicken.'
      },
      {
        question: 'Why did my 100g raw chicken breast shrink to only 65g instead of 72g?',
        answer: 'Cooking duration and heat level impact moisture loss. If chicken is cooked at high heat or cooked past an internal temperature of 165°F (74°C), more water evaporates, resulting in a drier cut and lower yield (65%–68%).'
      },
      {
        question: 'Does chicken thigh have the same raw vs cooked difference as breast?',
        answer: 'Chicken thighs have a slightly lower yield (~69% compared to 72% for breast) because thighs contain higher intramuscular fat that renders out into the pan in addition to evaporating water.'
      }
    ],
    calculatorCta: {
      title: 'Calculate Your Exact Chicken Portions',
      description: 'Convert any amount of raw or cooked chicken breast, thigh, drumstick, or wings with our dedicated chicken converter.',
      buttonText: 'Use Chicken Weight Calculator',
      targetUrl: '/chicken'
    },
    relatedSlugs: [
      'how-do-i-convert-raw-weight-to-cooked-weight',
      'how-much-raw-chicken-to-get-100g-cooked',
      'what-does-250g-raw-chicken-weigh-cooked',
      'how-much-protein-in-100g-raw-chicken'
    ]
  },
  {
    slug: 'how-much-will-200g-raw-meat-weigh-cooked',
    title: 'How Much Will 200g of Raw Meat Weigh When Cooked? (Beef, Chicken, Pork, Lamb)',
    shortTitle: 'How Much Does 200g Raw Meat Weigh Cooked?',
    description: 'Find out how much 200g of raw meat weighs when cooked. See exact yield percentages for chicken breast, steak, ground beef, pork chops, lamb, and turkey.',
    category: 'Weight Conversions',
    readTime: '8 min read',
    publishedDate: '2026-10-10',
    modifiedDate: '2026-10-10',
    keywords: [
      'how much will 200g of raw meat weigh when cooked',
      '200g raw meat cooked weight',
      '200g raw chicken breast cooked weight',
      'how much does 200g ground beef weigh cooked',
      'meat cooking loss percentage'
    ],
    summary: 'A definitive cut-by-cut breakdown of what happens when you cook 200 grams of raw meat. Understand cooking loss across lean meats, fatty steaks, and ground beef.',
    quickAnswer: {
      headline: '200g of Raw Meat Typically Weighs 140g to 165g Cooked',
      text: 'Depending on the cut and fat percentage, 200g of raw meat loses between 18% and 30% of its initial weight due to water loss and rendered fat.',
      keyStats: [
        { label: 'Chicken Breast', value: '~144g Cooked', note: '72% yield (loses ~56g water)' },
        { label: 'Ground Beef (80/20)', value: '~146g Cooked', note: '73% yield (water loss + rendered tallow)' },
        { label: 'Lean Ground Beef (90/10)', value: '~162g Cooked', note: '81% yield (less fat rendering)' },
        { label: 'Sirloin / Ribeye Steak', value: '~150g Cooked', note: '75% yield (medium doneness)' }
      ]
    },
    keyTakeaways: [
      '200g of raw meat will yield approximately 140g to 162g on your food scale after cooking.',
      'Leaner meats (like 90/10 beef or skinless chicken breast) lose mostly water, whereas fattier meats (80/20 ground beef, pork belly) lose both water and rendered fat.',
      'Doneness significantly influences the final weight: a rare steak retains ~80% of its raw weight, while well-done retains only ~70%.',
      'Cooking method matters: braising or stewing in a closed pot retains more moisture than open-flame grilling or broiling.',
      'For macro tracking, 200g of raw lean meat provides between 40g and 50g of high-biological-value protein.'
    ],
    sections: [
      {
        id: 'why-meats-shrink-differently',
        title: 'Why Different Meats Shrink at Different Rates',
        content: `
          <p class="mb-4">When heating 200g of raw meat, two distinct weight-reducing processes take place simultaneously:</p>
          <div class="space-y-4 mb-6">
            <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-1">1. Intracellular Moisture Evaporation</h4>
              <p class="text-sm text-[var(--color-body)] leading-relaxed">
                Animal muscle tissue is 70%–75% moisture. As collagen fibers and connective tissues tighten under heat, liquid is forced out and evaporates into the air. This happens across all meats, from poultry to venison.
              </p>
            </div>
            <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-1">2. Lipid Rendering (Fat Liquefaction)</h4>
              <p class="text-sm text-[var(--color-body)] leading-relaxed">
                Solid fats melt at roughly 95°F to 105°F (35°C–40°C). In fatty cuts like 80/20 ground beef or pork shoulder, large quantities of liquefied fat drain into the pan. This is why 80/20 beef shrinks far more visibly than 93/7 extra-lean beef.
              </p>
            </div>
          </div>
        `
      },
      {
        id: 'cut-by-cut-breakdown',
        title: 'Cut-by-Cut Cooked Weight of 200g Raw Meat',
        content: `
          <p class="mb-4">Here is what happens when you cook 200g of various raw animal proteins to a standard medium doneness:</p>
          <ul class="list-disc pl-6 space-y-2 text-sm text-[var(--color-body)] mb-6">
            <li><strong>200g Raw Chicken Breast (Boneless/Skinless):</strong> Yields <strong>144g cooked</strong> (28% loss). Delivers ~45g protein and ~240 calories.</li>
            <li><strong>200g Raw Chicken Thigh (Boneless/Skinless):</strong> Yields <strong>138g cooked</strong> (31% loss). Delivers ~40g protein and ~242 calories.</li>
            <li><strong>200g Raw Beef Sirloin Steak:</strong> Yields <strong>150g cooked</strong> (25% loss). Delivers ~42g protein and ~280 calories.</li>
            <li><strong>200g Raw 80/20 Ground Beef:</strong> Yields <strong>146g cooked</strong> (27% loss). Fat renders into the skillet.</li>
            <li><strong>200g Raw 90/10 Lean Ground Beef:</strong> Yields <strong>162g cooked</strong> (19% loss). High moisture retention.</li>
            <li><strong>200g Raw Pork Loin Chop:</strong> Yields <strong>156g cooked</strong> (22% loss). Delivers ~42g protein.</li>
            <li><strong>200g Raw Atlantic Salmon:</strong> Yields <strong>170g cooked</strong> (15% loss). Excellent moisture and omega-3 fat retention.</li>
          </ul>
        `
      },
      {
        id: 'how-cooking-doneness-affects-yield',
        title: 'The Impact of Internal Cooking Temperature',
        content: `
          <p class="mb-4">Internal temperature has a massive direct correlation with weight loss:</p>
          <div class="p-4 bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] mb-6">
            <ul class="text-sm space-y-2 text-[var(--color-body)]">
              <li>• <strong>Rare (125°F / 52°C):</strong> ~82% yield (200g raw → ~164g cooked). Tender and juicy.</li>
              <li>• <strong>Medium (145°F / 63°C):</strong> ~75% yield (200g raw → ~150g cooked). Standard baseline.</li>
              <li>• <strong>Well Done (165°F+ / 74°C):</strong> ~68% yield (200g raw → ~136g cooked). Extensive moisture loss.</li>
            </ul>
          </div>
          <p class="text-sm text-[var(--color-body)]">Using a digital instant-read thermometer ensures you do not overcook your meat, protecting both juiciness and final serving yield.</p>
        `
      }
    ],
    tableData: {
      caption: 'Cooked Yield & Protein Content of 200g Raw Meat Cuts',
      headers: ['Meat Cut', 'Yield %', 'Cooked Weight', 'Weight Lost', 'Total Protein (g)'],
      rows: [
        ['Chicken Breast (Skinless)', '72%', '144g', '56g (28%)', '45.0g'],
        ['Chicken Thigh (Skinless)', '69%', '138g', '62g (31%)', '39.4g'],
        ['Ground Beef (80/20)', '73%', '146g', '54g (27%)', '34.4g'],
        ['Ground Beef (90/10)', '81%', '162g', '38g (19%)', '40.0g'],
        ['Beef Ribeye Steak', '75%', '150g', '50g (25%)', '44.0g'],
        ['Pork Loin Chop', '78%', '156g', '44g (22%)', '43.2g'],
        ['Atlantic Salmon Fillet', '85%', '170g', '30g (15%)', '40.8g'],
        ['Ground Turkey (93/7)', '76%', '152g', '48g (24%)', '38.0g']
      ]
    },
    faqs: [
      {
        question: 'Did the 56 grams lost in my 200g raw chicken breast contain any protein?',
        answer: 'No. The 56 grams lost consisted almost entirely of pure water vapor and negligible dissolved mineral salts. The protein content remained preserved within the cooked meat.'
      },
      {
        question: 'Does pan-frying cause more shrinkage than baking in an oven?',
        answer: 'Pan-frying over high direct heat causes slightly more rapid surface moisture loss, but if meat is baked uncovered for extended durations, total oven evaporation can actually equal or exceed pan-frying. Slow-cooking or sous-vide minimizes shrinkage.'
      },
      {
        question: 'How do I log 200g of raw ground beef if I drain the grease after browning?',
        answer: 'If you brown 80/20 ground beef and discard the grease in the pan, you are pouring away significant rendered fat calories. To track accurately, either use a USDA entry for "80/20 ground beef, pan-browned, drained" or buy lean 90/10 or 93/7 beef where virtually no fat drains away.'
      }
    ],
    calculatorCta: {
      title: 'Compare Yields Across All Meats',
      description: 'Convert between raw and cooked beef, chicken, pork, and seafood with verified USDA multipliers.',
      buttonText: 'Try Meat Conversion Calculator',
      targetUrl: '/beef'
    },
    relatedSlugs: [
      'how-do-i-convert-raw-weight-to-cooked-weight',
      'what-does-250g-raw-chicken-weigh-cooked',
      'when-to-weigh-food-cooked-or-raw',
      'can-i-eat-200g-chicken-daily'
    ]
  },
  {
    slug: 'what-does-250g-raw-chicken-weigh-cooked',
    title: 'What Do 250 Grams of Raw Chicken Weigh When Cooked? (Yields, Macros & Servings)',
    shortTitle: '250g Raw Chicken Cooked Weight & Macros',
    description: 'Find out exactly what 250 grams of raw chicken weighs once cooked. Learn USDA yield percentages, protein content, cooking methods, and meal prep advice.',
    category: 'Weight Conversions',
    readTime: '7 min read',
    publishedDate: '2026-10-10',
    modifiedDate: '2026-10-10',
    keywords: [
      'what do 250 grams of raw chicken weigh when cooked',
      '250g raw chicken cooked weight',
      'how much protein in 250g raw chicken breast',
      '250g raw chicken breast calories',
      'chicken breast 250g meal prep'
    ],
    summary: 'A detailed breakdown of 250g raw chicken breast and thighs cooked weight, nutritional macros, and how to divide it into perfect daily protein portions.',
    quickAnswer: {
      headline: '250g of Raw Chicken Breast Weighs Approximately 180g Cooked',
      text: 'Based on official USDA cooking yield data (72% average for roasted/baked skinless chicken breast), 250 grams raw shrinks to 180 grams cooked, losing about 70 grams of water weight.',
      keyStats: [
        { label: 'Chicken Breast Cooked', value: '180g Cooked', note: 'Range: 175g–188g depending on method' },
        { label: 'Chicken Thigh Cooked', value: '172g Cooked', note: '69% yield (loses ~78g moisture & fat)' },
        { label: 'Total Protein', value: '56.3g Protein', note: 'Based on 22.5g protein per 100g raw' },
        { label: 'Total Calories', value: '~300 kcal', note: '250g raw skinless breast (6.5g fat)' }
      ]
    },
    keyTakeaways: [
      '250 grams of raw boneless, skinless chicken breast produces approximately 180 grams of cooked meat (72% yield).',
      '250 grams of raw chicken thighs produces approximately 172 grams of cooked meat (69% yield).',
      'A 250g raw chicken breast delivers ~56.3 grams of pure protein and roughly 300 calories, making it an ideal daily protein cornerstone for active individuals.',
      'Boiling or poaching yields the highest cooked weight (~192g) due to reduced evaporative drying, while grilling yields slightly less (~175g).',
      'You can split 180g of cooked chicken into two satisfying 90g meals (delivering ~28g protein per meal) or consume it in one high-protein post-workout feast.'
    ],
    sections: [
      {
        id: 'the-250g-conversion-math',
        title: 'The Exact Math for 250g Raw Chicken',
        content: `
          <p class="mb-4">Using the USDA Table of Cooking Yields for Meat and Poultry, skinless boneless chicken breast has a benchmark yield of <strong>72%</strong>:</p>
          <div class="p-4 bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] font-mono text-center text-sm mb-6">
            Cooked Weight = 250g × 0.72 = 180.0g
          </div>
          <p class="mb-4">This means during cooking, your 250g cut releases <strong>70 grams of water</strong> into steam and pan drippings. If you check your food scale after roasting and see 175g to 185g, you are right in line with scientific culinary averages.</p>
        `
      },
      {
        id: 'macros-in-250g-chicken',
        title: 'Full Nutritional Breakdown of 250g Raw Chicken Breast',
        content: `
          <p class="mb-4">Here are the complete macronutrient and caloric values for 250g of raw boneless, skinless chicken breast:</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div class="p-3 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] text-center">
              <span class="text-xs text-[var(--color-mute)] font-mono uppercase">Calories</span>
              <p class="text-xl font-bold text-[var(--color-ink)] mt-1">300 kcal</p>
            </div>
            <div class="p-3 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] text-center">
              <span class="text-xs text-[var(--color-mute)] font-mono uppercase">Protein</span>
              <p class="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">56.3 g</p>
            </div>
            <div class="p-3 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] text-center">
              <span class="text-xs text-[var(--color-mute)] font-mono uppercase">Fat</span>
              <p class="text-xl font-bold text-[var(--color-ink)] mt-1">6.5 g</p>
            </div>
            <div class="p-3 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] text-center">
              <span class="text-xs text-[var(--color-mute)] font-mono uppercase">Carbs</span>
              <p class="text-xl font-bold text-[var(--color-ink)] mt-1">0.0 g</p>
            </div>
          </div>
          <p class="text-sm text-[var(--color-body)]">Regardless of whether your finished cooked cut weighs 175g or 185g on your plate, it still carries this exact 56.3g protein and 300 kcal payload!</p>
        `
      },
      {
        id: 'cooking-method-differences',
        title: 'How Different Cooking Methods Change the 250g Cooked Weight',
        content: `
          <p class="mb-4">The method of heat application alters moisture evaporation:</p>
          <ul class="list-disc pl-6 space-y-2 text-sm text-[var(--color-body)] mb-6">
            <li><strong>Poaching / Boiling (77% yield):</strong> Yields <strong>~192g cooked</strong>. The water bath prevents surface dehydration.</li>
            <li><strong>Baking / Oven Roasting (72% yield):</strong> Yields <strong>~180g cooked</strong>. Standard even cooking.</li>
            <li><strong>Air Frying / Pan Searing (70%–72% yield):</strong> Yields <strong>~178g cooked</strong>. Rapid exterior crisping.</li>
            <li><strong>Outdoor Charcoal Grilling (70% yield):</strong> Yields <strong>~175g cooked</strong>. Higher direct radiant heat drives off more moisture.</li>
          </ul>
        `
      }
    ],
    tableData: {
      caption: '250g Raw Chicken Yield & Macros Across Different Cuts',
      headers: ['Chicken Cut', 'Raw Weight', 'Yield %', 'Cooked Weight', 'Protein (g)', 'Calories'],
      rows: [
        ['Skinless Chicken Breast', '250g', '72%', '180g', '56.3g', '300 kcal'],
        ['Skinless Chicken Thigh', '250g', '69%', '172g', '49.3g', '302 kcal'],
        ['Chicken Drumstick (Meat Only)', '250g', '76%', '190g', '51.5g', '298 kcal'],
        ['Chicken Wings (Meat & Skin)', '250g', '65%', '162g', '45.8g', '477 kcal']
      ]
    },
    faqs: [
      {
        question: 'Is 250 grams of raw chicken too much protein for one meal?',
        answer: 'A 250g raw chicken breast provides ~56g of protein. While research indicates that 30g to 40g of protein is optimal for maximizing muscle protein synthesis in a single spike, eating 56g in one meal is completely digested and utilized by the body over several hours without waste.'
      },
      {
        question: 'How many chicken breasts make up 250 grams raw?',
        answer: 'In modern supermarkets, a single average chicken breast half typically weighs between 200g and 280g. Therefore, 250g is usually one medium-to-large single chicken breast half.'
      },
      {
        question: 'How do I divide 250g of cooked chicken into two equal meals?',
        answer: 'Since 250g raw yields roughly 180g cooked, weigh out 90g of cooked chicken for each meal container. Each 90g cooked portion represents 125g raw chicken and gives you ~28g of protein.'
      }
    ],
    calculatorCta: {
      title: 'Need Custom Chicken Calculations?',
      description: 'Convert any raw or cooked chicken weight instantly with our dedicated nutrition tool.',
      buttonText: 'Open Chicken Calculator',
      targetUrl: '/chicken'
    },
    relatedSlugs: [
      'how-much-does-500g-raw-chicken-weigh-cooked',
      'is-100g-raw-chicken-the-same-as-100g-cooked-chicken',
      'how-much-raw-chicken-for-30g-protein',
      'protein-in-150g-raw-chicken-breast'
    ]
  }
];
