import type { BlogPost } from './types';

export const PORTIONS_VISUALS_BLOGS: BlogPost[] = [
  {
    slug: 'how-much-does-500g-raw-chicken-weigh-cooked',
    title: 'How Much Does 500g Raw Chicken Weigh Cooked? (Bulk Meal Prep & Portion Calculator)',
    shortTitle: '500g Raw Chicken Cooked Weight & Portions',
    description: 'Find out exactly what 500 grams of raw chicken weighs when cooked. See USDA yield calculations for chicken breast and thighs, protein macros, and meal prep splits.',
    category: 'Portion & Visual Guides',
    readTime: '8 min read',
    publishedDate: '2026-10-10',
    modifiedDate: '2026-10-10',
    keywords: [
      'how much does 500g raw chicken weigh cooked',
      '500g raw chicken breast cooked weight',
      'how much protein in 500g raw chicken',
      '500g chicken meal prep portions',
      'half kg raw chicken cooked yield'
    ],
    summary: 'A definitive meal-prep guide on cooking 500g (half a kilogram) of raw chicken breast and thighs. Learn exact cooked weights, moisture loss, and meal distribution.',
    quickAnswer: {
      headline: '500g of Raw Chicken Breast Weighs ~360g Cooked (Losing 140g Water)',
      text: 'Applying the standard USDA 72% cooking yield, 500 grams (0.5 kg / 1.1 lbs) of raw skinless boneless chicken breast yields approximately 360 grams of cooked meat. Chicken thighs yield roughly 345 grams.',
      keyStats: [
        { label: 'Chicken Breast Cooked', value: '360g Cooked', note: '72% yield (range: 350g–375g)' },
        { label: 'Chicken Thigh Cooked', value: '345g Cooked', note: '69% yield (water & fat loss)' },
        { label: 'Total Protein (Breast)', value: '112.5g Protein', note: '22.5g protein per 100g raw' },
        { label: 'Total Calories (Breast)', value: '600 kcal', note: 'Pure lean protein baseline' }
      ]
    },
    keyTakeaways: [
      '500g of raw boneless, skinless chicken breast yields roughly 360g cooked, losing 140g of water during cooking.',
      '500g of raw chicken provides 112.5 grams of high-quality complete protein and only 600 calories.',
      'For meal prepping, you can divide 360g cooked chicken into two large 180g meals (56g protein each) or three balanced 120g meals (37.5g protein each).',
      'Do not panic if your scale says 345g or 370g; slight variations in oven temperature or meat brine cause small moisture shifts.',
      'Tracking 500g raw in your diet app accounts for the exact full macronutrient profile regardless of whether your cooked weight came out slightly higher or lower.'
    ],
    sections: [
      {
        id: 'the-500g-math',
        title: 'The Mathematical Yield of 500g Raw Chicken',
        content: `
          <p class="mb-4">500 grams (half a kilogram) is the most standard retail package size for boneless chicken in grocery stores around the world. Here is how that 500g transforms under heat:</p>
          <div class="p-4 bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] font-mono text-center text-sm mb-6">
            Cooked Weight = 500g × 0.72 = 360.0g (Skinless Breast)<br/>
            Cooked Weight = 500g × 0.69 = 345.0g (Skinless Thigh)
          </div>
          <p class="mb-4">During standard roasting or baking, roughly <strong>140 milliliters of water vapor</strong> exits the chicken breast. That water loss concentrates the remaining proteins and nutrients into a compact 360-gram cooked payload.</p>
        `
      },
      {
        id: 'portioning-360g-cooked',
        title: 'How to Divide 360g Cooked Chicken for Daily Meal Prepping',
        content: `
          <p class="mb-4">Once your 500g raw batch yields 360g of cooked meat, you can distribute it across your daily meals depending on your fitness goals:</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div class="p-3 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] text-center">
              <span class="text-xs font-mono uppercase text-[var(--color-mute)]">2-Meal Split (High Protein)</span>
              <p class="text-lg font-bold text-[var(--color-ink)] my-1">180g Cooked / Meal</p>
              <p class="text-xs text-[var(--color-body)]"><strong>56.3g Protein</strong> & 300 kcal per container. Perfect for bodybuilders & athletes.</p>
            </div>
            <div class="p-3 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] text-center">
              <span class="text-xs font-mono uppercase text-[var(--color-mute)]">3-Meal Split (Balanced)</span>
              <p class="text-lg font-bold text-[var(--color-ink)] my-1">120g Cooked / Meal</p>
              <p class="text-xs text-[var(--color-body)]"><strong>37.5g Protein</strong> & 200 kcal per container. Ideal for fat loss & steady MPS.</p>
            </div>
            <div class="p-3 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] text-center">
              <span class="text-xs font-mono uppercase text-[var(--color-mute)]">4-Meal Split (Snack / Low Cal)</span>
              <p class="text-lg font-bold text-[var(--color-ink)] my-1">90g Cooked / Meal</p>
              <p class="text-xs text-[var(--color-body)]"><strong>28.1g Protein</strong> & 150 kcal per container. Great for high-frequency eaters.</p>
            </div>
          </div>
        `
      },
      {
        id: 'macros-in-500g',
        title: 'Nutritional Summary for 500g Raw Chicken Breast',
        content: `
          <p class="mb-4">Here is the verified USDA nutritional profile of 500g raw skinless, boneless chicken breast:</p>
          <ul class="list-disc pl-6 space-y-2 text-sm text-[var(--color-body)] mb-6">
            <li><strong>Total Calories:</strong> 600 kcal</li>
            <li><strong>Total Protein:</strong> 112.5 grams (100% complete amino acid spectrum)</li>
            <li><strong>Total Fat:</strong> 13.0 grams (mostly monounsaturated and polyunsaturated)</li>
            <li><strong>Total Carbohydrates:</strong> 0.0 grams</li>
            <li><strong>Micronutrients:</strong> Rich in Vitamin B3 (Niacin), Vitamin B6, Phosphorus, and Selenium.</li>
          </ul>
        `
      }
    ],
    tableData: {
      caption: 'Cooking Method Impact on 500g Raw Chicken Breast Yield',
      headers: ['Cooking Method', 'Yield %', 'Cooked Weight', 'Moisture Lost', 'Texture Profile'],
      rows: [
        ['Poached / Boiled', '77%', '385g', '115g (23%)', 'Extremely tender, highest moisture'],
        ['Baked / Oven Roasted', '72%', '360g', '140g (28%)', 'Juicy interior, light browning'],
        ['Air Fried (375°F / 190°C)', '71%', '355g', '145g (29%)', 'Crisp exterior crust'],
        ['Charcoal Grilled', '70%', '350g', '150g (30%)', 'Smoky, firm, highest surface drying'],
        ['Pan Seared in Skillet', '72%', '360g', '140g (28%)', 'Golden brown crust, even yield']
      ]
    },
    faqs: [
      {
        question: 'Can one person eat 500g of raw chicken (360g cooked) in one day?',
        answer: 'Yes! For an athletic person or strength trainer targeting 120–160g of daily protein, consuming 360g of cooked chicken across the day easily supplies 112g of protein toward that goal without excess calories.'
      },
      {
        question: 'How long can I store 360g of cooked meal-prepped chicken?',
        answer: 'Stored in an airtight container at 38°F (3°C) or colder, cooked chicken stays fresh and safe for 3 to 4 days. If prepping for 5–7 days, freeze half of the containers.'
      },
      {
        question: 'How much raw chicken is 500g in pounds?',
        answer: '500 grams equals exactly 1.102 pounds, or about 17.6 ounces of raw meat.'
      }
    ],
    calculatorCta: {
      title: 'Calculate Bulk Meal Prep Portions',
      description: 'Quickly convert half-kilo or multi-pound family meal batches with our free tool.',
      buttonText: 'Open Chicken Calculator',
      targetUrl: '/chicken'
    },
    relatedSlugs: [
      'what-does-250g-raw-chicken-weigh-cooked',
      'how-much-raw-chicken-to-get-100g-cooked',
      'can-i-eat-200g-chicken-daily',
      'how-much-chicken-to-eat-for-100g-protein'
    ]
  },
  {
    slug: 'how-much-raw-chicken-to-get-100g-cooked',
    title: 'How Much Raw Chicken to Get 100g Cooked? (Reverse Conversion Formula)',
    shortTitle: 'Raw Chicken Needed for 100g Cooked',
    description: 'Learn exactly how much raw chicken you need to cook to get 100 grams of cooked chicken. Master the inverse yield formula (Cooked ÷ Yield%) and shopping calculations.',
    category: 'Portion & Visual Guides',
    readTime: '7 min read',
    publishedDate: '2026-10-10',
    modifiedDate: '2026-10-10',
    keywords: [
      'how much raw chicken to get 100g cooked',
      'how much raw chicken equals 100g cooked',
      'reverse raw to cooked chicken calculator',
      'raw chicken needed for cooked portion',
      '100g cooked chicken breast raw equivalent'
    ],
    summary: 'A precise culinary guide to calculating the exact raw chicken purchase weight required to put 100g of finished cooked meat on your plate.',
    quickAnswer: {
      headline: 'You Need Approximately 139 Grams of Raw Chicken Breast for 100g Cooked',
      text: 'Because chicken breast loses roughly 28% of its mass to water evaporation during cooking (72% yield), you divide 100g by 0.72 to find the raw requirement: exactly 138.9 grams.',
      keyStats: [
        { label: 'Raw Breast Needed', value: '139g Raw', note: 'Formula: 100g ÷ 0.72 = 138.9g' },
        { label: 'Raw Thigh Needed', value: '145g Raw', note: 'Formula: 100g ÷ 0.69 = 144.9g' },
        { label: 'Cooked 100g Protein', value: '31.2g Protein', note: 'Concentrated protein in 100g cooked cut' },
        { label: 'Cooked 100g Calories', value: '165 kcal', note: 'Skinless breast (roasted)' }
      ]
    },
    keyTakeaways: [
      'To plate 100g of cooked skinless chicken breast, you must cook approximately 139g of raw meat.',
      'To plate 100g of cooked skinless chicken thighs, you must cook approximately 145g of raw meat.',
      'The reverse calculation formula is: Raw Weight = Desired Cooked Weight ÷ (Yield% ÷ 100).',
      'A 100g portion of cooked chicken breast contains roughly 31.2 grams of protein and 165 calories.',
      'When shopping for multiple days, multiply 139g by your total desired 100g cooked portions to know exact butcher counter weights.'
    ],
    sections: [
      {
        id: 'the-reverse-math-explained',
        title: 'The Reverse Conversion Mathematics',
        content: `
          <p class="mb-4">Most dietary guidelines or high-protein recipes call for a specific amount of <em>cooked</em> chicken on your plate (e.g., "Add 100g cooked sliced chicken to your salad"). But when you stand in front of the butcher counter, the chicken is raw.</p>
          <p class="mb-4">To solve this, use the <strong>Inverse Yield Formula</strong>:</p>
          <div class="p-4 bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] font-mono text-center text-sm mb-6">
            Raw Weight Needed = Desired Cooked Weight ÷ Decimal Yield Factor
          </div>
          <p class="mb-4">Plugging in the USDA benchmark figures:</p>
          <ul class="list-disc pl-6 space-y-2 text-sm text-[var(--color-body)] mb-6">
            <li><strong>For Chicken Breast (72% yield / 0.72 factor):</strong><br/><code>100g ÷ 0.72 = 138.89g raw chicken breast</code> (round up to <strong>140g</strong> at the grocery store).</li>
            <li><strong>For Chicken Thighs (69% yield / 0.69 factor):</strong><br/><code>100g ÷ 0.69 = 144.92g raw chicken thigh</code> (round up to <strong>145g</strong>).</li>
          </ul>
        `
      },
      {
        id: 'scaling-up-the-grocery-list',
        title: 'Scaling Up: How Much Raw Chicken to Buy for the Week',
        content: `
          <p class="mb-4">Use this multiplier table to buy the right amount of raw meat for your weekly meal prep:</p>
          <div class="space-y-3 mb-6">
            <div class="p-3 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <strong class="text-sm text-[var(--color-ink)]">3 Servings of 100g Cooked (300g total):</strong>
              <p class="text-xs text-[var(--color-body)] mt-1">Buy <code>3 × 139g = 417g raw chicken breast</code>.</p>
            </div>
            <div class="p-3 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <strong class="text-sm text-[var(--color-ink)]">5 Servings of 100g Cooked (500g total):</strong>
              <p class="text-xs text-[var(--color-body)] mt-1">Buy <code>5 × 139g = 695g raw chicken breast</code> (~0.7 kg / 1.5 lbs).</p>
            </div>
            <div class="p-3 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <strong class="text-sm text-[var(--color-ink)]">7 Servings of 100g Cooked (700g total):</strong>
              <p class="text-xs text-[var(--color-body)] mt-1">Buy <code>7 × 139g = 973g raw chicken breast</code> (~1.0 kg / 2.1 lbs).</p>
            </div>
          </div>
        `
      },
      {
        id: 'macros-in-100g-cooked',
        title: 'What Macros Are in That 100g Cooked Chicken Serving?',
        content: `
          <p class="mb-4">When you plate your 100g cooked portion, here are the nutritional values you are receiving:</p>
          <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] space-y-2 text-sm mb-6">
            <p>• <strong>Protein:</strong> 31.2 grams (fulfills the leucine threshold for maximum muscle protein synthesis)</p>
            <p>• <strong>Calories:</strong> 165 kcal</p>
            <p>• <strong>Fat:</strong> 3.6 grams</p>
            <p>• <strong>Carbohydrates:</strong> 0.0 grams</p>
          </div>
        `
      }
    ],
    tableData: {
      caption: 'Raw Meat Required to Produce Various Cooked Chicken Portions',
      headers: ['Target Cooked Weight', 'Raw Breast Needed (72%)', 'Raw Thigh Needed (69%)', 'Total Protein (g)'],
      rows: [
        ['100g cooked', '139g raw', '145g raw', '31.2g'],
        ['125g cooked', '174g raw', '181g raw', '39.0g'],
        ['150g cooked', '208g raw', '217g raw', '46.8g'],
        ['175g cooked', '243g raw', '254g raw', '54.6g'],
        ['200g cooked', '278g raw', '290g raw', '62.4g'],
        ['250g cooked', '347g raw', '362g raw', '78.0g']
      ]
    },
    faqs: [
      {
        question: 'Why does 100g of cooked chicken have more protein than 100g of raw chicken?',
        answer: 'Because cooking removes water, leaving the remaining meat more concentrated. 100g of cooked chicken began as ~139g of raw meat containing all 31g of protein.'
      },
      {
        question: 'What if I cook with bones in? How much raw chicken do I need then?',
        answer: 'Bone-in cuts contain 20% to 35% inedible bone. To get 100g of cooked meat from bone-in chicken thighs, buy roughly 185g to 200g of raw bone-in chicken.'
      },
      {
        question: 'Is 100g of cooked chicken a good portion for lunch?',
        answer: 'Yes! 100g of cooked chicken delivers ~31g of high-quality protein with minimal fat, making it an ideal lean lunch centerpiece.'
      }
    ],
    calculatorCta: {
      title: 'Run Reverse Calculations for Any Weight',
      description: 'Select "Cooked to Raw" on our calculator to instantly determine raw purchase amounts.',
      buttonText: 'Open Reverse Calculator',
      targetUrl: '/chicken'
    },
    relatedSlugs: [
      'is-100g-raw-chicken-the-same-as-100g-cooked-chicken',
      'how-big-is-100-grams-of-chicken-pieces',
      'what-does-150g-of-chicken-look-like',
      'how-much-raw-chicken-for-30g-protein'
    ]
  },
  {
    slug: 'what-does-150g-of-chicken-look-like',
    title: 'What Does 150g of Chicken Look Like? (Visual Size Guide, Palm Rule & Kitchen Items)',
    shortTitle: 'What 150g of Chicken Looks Like',
    description: 'Learn what 150 grams of chicken looks like without a food scale. Visual comparisons using hands, decks of cards, piece counts, and measuring cups.',
    category: 'Portion & Visual Guides',
    readTime: '7 min read',
    publishedDate: '2026-10-10',
    modifiedDate: '2026-10-10',
    keywords: [
      'what does 150g of chicken look like',
      '150g chicken visual comparison',
      'how much is 150g chicken breast in pieces',
      '150 grams chicken breast hand size',
      '150g chicken cups visual guide'
    ],
    summary: 'A visual portion guide for estimating 150 grams of chicken breast when you do not have access to a food scale. Compares palms, card decks, cups, and smartphone sizes.',
    quickAnswer: {
      headline: '150g of Raw Chicken is Roughly the Size of an Open Adult Hand or 1.5 Decks of Cards',
      text: 'A 150g raw skinless chicken breast half is about the length and width of your palm plus the base of your fingers (approx. 5 inches long, 3 inches wide, and 1 inch thick at the center). Once cooked, 150g equals about 1 heaped cup of diced cubes.',
      keyStats: [
        { label: 'Card Deck Rule', value: '1.5 Decks of Cards', note: 'Standard playing card size benchmark' },
        { label: 'Hand Comparison', value: 'Palm + Finger Base', note: 'Average adult hand volume' },
        { label: 'Measuring Cup', value: '1 to 1.25 Cups Diced', note: 'Cooked bite-sized cubes' },
        { label: 'Tenders Count', value: '3 Small Tenders', note: 'Average 50g per raw tenderloin' }
      ]
    },
    keyTakeaways: [
      '150 grams of raw chicken breast looks like 1.5 decks of playing cards or roughly the size of a modern 6.1-inch smartphone (like an iPhone 15) in surface area.',
      'In chicken tenders, 150 grams raw equals approximately 3 medium-sized chicken tenderloins.',
      'In diced cooked cubes, 150 grams fills roughly 1 level to 1.25 measuring cups.',
      'A 150g raw chicken breast delivers ~33.8g of protein and 180 calories, shrinking to ~108g cooked.',
      'If estimating 150g of COOKED chicken, it is significantly larger (equal to ~208g raw), looking like two full palms of meat.'
    ],
    sections: [
      {
        id: 'visual-comparisons-raw-150g',
        title: 'Visualizing 150 Grams of RAW Chicken Breast',
        content: `
          <p class="mb-4">When you are traveling, dining at a buffet, or cooking at a friend's house without your food scale, use these four everyday visual anchors to estimate 150g of raw chicken breast:</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-1">1. The Palm + Fingers Benchmark</h4>
              <p class="text-xs text-[var(--color-body)] leading-relaxed">
                While a standard 100g portion matches an average palm (excluding fingers), 150g raw extends from the heel of your palm up across the first knuckle of your fingers, roughly 1 inch thick at its thickest lobe.
              </p>
            </div>
            <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-1">2. One and a Half Decks of Cards</h4>
              <p class="text-xs text-[var(--color-body)] leading-relaxed">
                Imagine one deck of playing cards flat on the cutting board with another half-deck placed directly beside it. That total volume matches a 150g raw fillet almost perfectly.
              </p>
            </div>
            <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-1">3. The Smartphone Footprint</h4>
              <p class="text-xs text-[var(--color-body)] leading-relaxed">
                A 150g raw breast has almost the exact length and width of a standard smartphone (approx. 5.8 to 6.1 inches), tapering from 1 inch thickness at the shoulder down to 1/4 inch at the tail.
              </p>
            </div>
            <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-1">4. Three Tenderloins</h4>
              <p class="text-xs text-[var(--color-body)] leading-relaxed">
                Commercial chicken tenderloins (the pectoralis minor muscle beneath the main breast) weigh an average of 45g to 55g each. Three tenders equal almost exactly 150g raw.
              </p>
            </div>
          </div>
        `
      },
      {
        id: 'visualizing-cooked-150g',
        title: 'What Does 150g of COOKED Chicken Look Like?',
        content: `
          <p class="mb-4">Do not confuse raw volume with cooked volume! Remember: 150g of <em>cooked</em> chicken started as 208g of raw chicken before water evaporated.</p>
          <div class="p-4 bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] mb-6">
            <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-2">Cooked 150g Visual Measures</h4>
            <ul class="text-xs space-y-1.5 text-[var(--color-body)]">
              <li>• <strong>In Diced 1-inch Cubes:</strong> Fills roughly 1 generous cup to 1.25 cups of chopped meat.</li>
              <li>• <strong>In Whole Breasts:</strong> Represents one large whole cooked breast or two small-to-medium cooked cutlets.</li>
              <li>• <strong>Protein Delivered:</strong> Provides a massive ~46.8 grams of pure protein and 248 kcal!</li>
            </ul>
          </div>
        `
      },
      {
        id: 'macros-in-150g-chicken',
        title: 'Macros for 150g Chicken (Raw vs Cooked Comparison)',
        content: `
          <p class="mb-4">Here is how the numbers shake out depending on which 150g portion you are looking at:</p>
          <ul class="list-disc pl-6 space-y-2 text-sm text-[var(--color-body)] mb-6">
            <li><strong>150g RAW Chicken Breast:</strong> ~180 calories, 33.8g protein, 3.9g fat (shrinks to ~108g cooked).</li>
            <li><strong>150g COOKED Chicken Breast:</strong> ~248 calories, 46.8g protein, 5.4g fat (required ~208g raw).</li>
          </ul>
        `
      }
    ],
    tableData: {
      caption: 'Visual Object Comparisons for Chicken Portion Sizes',
      headers: ['Portion Weight', 'Card Deck Equivalent', 'Hand Rule', 'Pieces Count', 'Measuring Cup (Diced)'],
      rows: [
        ['100g Raw', '1 Deck of Cards', 'Palm of Hand (No Fingers)', '2 Tenderloins', '3/4 Cup'],
        ['150g Raw', '1.5 Decks of Cards', 'Palm + Base of Fingers', '3 Tenderloins', '1 Cup'],
        ['200g Raw', '2 Decks of Cards', 'Full Hand (Palm + Fingers)', '4 Tenderloins', '1.3 Cups'],
        ['150g Cooked', '2 Decks of Cards', 'Two Palms of Cooked Cutlets', '4 Cooked Tenders', '1.25 Cups']
      ]
    },
    faqs: [
      {
        question: 'How many chicken breasts are in 150 grams?',
        answer: 'Most modern supermarket chicken breasts weigh between 200g and 300g each. Therefore, 150g is usually about half to three-quarters of a single grocery store chicken breast half.'
      },
      {
        question: 'Is 150g of chicken breast enough protein for one meal?',
        answer: 'Yes! 150g of raw chicken breast provides 33.8g of protein, which is ideal for stimulating muscle protein synthesis for most active adults.'
      },
      {
        question: 'How accurate is the palm method compared to a food scale?',
        answer: 'Hand size estimation generally has a 15% to 25% margin of error due to variations in meat thickness and hand sizes. It is fantastic for restaurants or travel, but use a digital scale at home whenever possible.'
      }
    ],
    calculatorCta: {
      title: 'Verify Your Visual Estimate with Real Numbers',
      description: 'Convert between raw and cooked weights instantly with our food calculator.',
      buttonText: 'Try Chicken Converter',
      targetUrl: '/chicken'
    },
    relatedSlugs: [
      'how-big-is-100-grams-of-chicken-pieces',
      'protein-in-150g-raw-chicken-breast',
      'how-much-raw-chicken-for-30g-protein',
      'how-to-weigh-food-raw-or-cooked-step-by-step'
    ]
  },
  {
    slug: 'how-big-is-100-grams-of-chicken-pieces',
    title: 'How Big is 100 Grams of Chicken? (Size, Number of Pieces & Visual Guide)',
    shortTitle: 'How Big is 100 Grams of Chicken?',
    description: 'Find out how big 100 grams of chicken is in pieces, hand comparisons, and everyday objects. See exact piece counts for tenders, wings, drumsticks, and cubes.',
    category: 'Portion & Visual Guides',
    readTime: '7 min read',
    publishedDate: '2026-10-10',
    modifiedDate: '2026-10-10',
    keywords: [
      'how big is 100 grams of chicken',
      'how many pieces is 100 grams of chicken',
      '100g chicken breast size visual',
      'how many chicken tenders is 100g',
      '100g chicken pieces visual comparison'
    ],
    summary: 'A visual and piece-count guide to understanding what 100 grams of chicken looks like across breast cutlets, tenders, drumsticks, wings, and diced bites.',
    quickAnswer: {
      headline: '100g of Chicken is the Exact Size of One Deck of Cards or 2 Tenderloins',
      text: '100g of raw chicken matches the exact surface area and thickness of a standard deck of playing cards, or the palm of your hand without fingers. In bite-sized pieces, it equals roughly 5 to 6 one-inch cooked cubes.',
      keyStats: [
        { label: 'Deck of Cards', value: 'Exactly 1 Deck', note: 'Standard international visual standard' },
        { label: 'Tenders Count', value: '2 Small Tenders', note: 'Average 45g–50g per raw tenderloin' },
        { label: 'Bite-Sized Cubes', value: '5 – 6 Cubes', note: 'One-inch cubed chicken pieces' },
        { label: 'Whole Breast', value: 'About 1/2 Breast', note: 'Based on ~200g commercial average' }
      ]
    },
    keyTakeaways: [
      '100 grams of chicken is roughly the size of one standard deck of playing cards or the palm of an average adult hand.',
      'In chicken tenderloins, 100g equals approximately 2 small-to-medium raw tenders.',
      'In whole chicken breasts, 100g represents slightly less than half of an average supermarket breast half.',
      'In cooked, diced cubes, 100g amounts to 5–6 bite-sized one-inch cubes (about 3/4 of an 8-ounce measuring cup).',
      'For bone-in drumsticks, 1 medium drumstick contains roughly 50g–60g of edible meat, so 2 drumsticks equal ~100g of meat.'
    ],
    sections: [
      {
        id: 'how-many-pieces-in-100g',
        title: 'How Many Pieces is 100 Grams of Chicken? (Cut-by-Cut Guide)',
        content: `
          <p class="mb-4">Because chicken comes in many cuts and preparations, here is the exact piece-count breakdown for 100 grams:</p>
          <div class="space-y-4 mb-6">
            <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-1">Chicken Tenderloins (Raw)</h4>
              <p class="text-xs text-[var(--color-body)] leading-relaxed">
                Raw tenderloins weigh between 45g and 55g each. <strong>Two tenderloins</strong> equal almost exactly 100 grams.
              </p>
            </div>
            <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-1">Diced Cooked Cubes</h4>
              <p class="text-xs text-[var(--color-body)] leading-relaxed">
                If you cut cooked chicken breast into 1-inch (2.5 cm) bite-sized cubes for a salad or stir-fry, each cube weighs about 16g to 18g. <strong>5 to 6 cubes</strong> make up 100 grams.
              </p>
            </div>
            <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-1">Chicken Wings (Party Wings)</h4>
              <p class="text-xs text-[var(--color-body)] leading-relaxed">
                One cooked chicken flat or drumette has about 20g to 25g of edible meat and skin. You need <strong>4 to 5 small wing pieces</strong> to yield 100g of edible meat.
              </p>
            </div>
            <div class="p-4 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)]">
              <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-1">Chicken Drumsticks</h4>
              <p class="text-xs text-[var(--color-body)] leading-relaxed">
                A medium cooked chicken drumstick provides about 45g to 50g of edible meat once the bone is removed. <strong>Two medium drumsticks</strong> equal roughly 100g of meat.
              </p>
            </div>
          </div>
        `
      },
      {
        id: 'the-palm-rule-explained',
        title: 'The Palm Rule: How to Measure 100g Anywhere',
        content: `
          <p class="mb-4">The "Palm Rule" is the most widely taught portion control technique in clinical nutrition:</p>
          <div class="p-4 bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-[var(--radius-sm)] mb-6">
            <h4 class="font-semibold text-sm text-[var(--color-ink)] mb-2">The Exact Palm Anatomy for 100g</h4>
            <p class="text-xs text-[var(--color-body)] leading-relaxed">
              Open your hand flat. Look only at your palm—exclude your fingers and thumb entirely.
              A portion of chicken that matches the circular surface area of your palm, with a thickness matching the meat of your thumb base (about 3/4 to 1 inch thick), weighs almost exactly <strong>100 grams raw</strong> (or ~72g cooked).
            </p>
          </div>
        `
      },
      {
        id: 'macros-in-100g-pieces',
        title: 'Nutrition Inside 100 Grams of Chicken',
        content: `
          <p class="mb-4">Depending on whether your 100g is raw or cooked:</p>
          <ul class="list-disc pl-6 space-y-2 text-sm text-[var(--color-body)] mb-6">
            <li><strong>100g RAW Chicken Breast:</strong> 120 calories | 22.5g protein | 2.6g fat</li>
            <li><strong>100g COOKED Chicken Breast:</strong> 165 calories | 31.2g protein | 3.6g fat</li>
          </ul>
        `
      }
    ],
    tableData: {
      caption: 'Piece Counts for 100g Chicken Across Different Preparations',
      headers: ['Chicken Form', 'State', 'Approximate Pieces for 100g', 'Edible Protein (g)'],
      rows: [
        ['Tenderloins', 'Raw', '2 tenderloins', '22.5g'],
        ['Diced 1-inch Cubes', 'Cooked', '5 – 6 cubes', '31.2g'],
        ['Chicken Breast Half', 'Raw', 'About 1/2 of one breast', '22.5g'],
        ['Drumsticks (Meat Only)', 'Cooked', '2 medium drumsticks', '28.0g'],
        ['Party Wings (Flats/Drums)', 'Cooked', '4 – 5 wing pieces', '24.0g'],
        ['Chicken Nuggets', 'Cooked / Breaded', '5 standard nuggets', '14.0g']
      ]
    },
    faqs: [
      {
        question: 'Can I just count chicken pieces instead of weighing on a scale?',
        answer: 'Piece counting is convenient for casual eating, but poultry pieces vary in size by 30% or more. For strict body composition or athletic tracking, a digital scale is far more dependable.'
      },
      {
        question: 'How many slices of deli chicken breast is 100 grams?',
        answer: 'Standard deli counter thin slices weigh about 20g to 25g each. Four to five thin slices equal roughly 100 grams of cooked deli chicken.'
      },
      {
        question: 'How much does 100 grams of chicken weigh in ounces?',
        answer: '100 grams equals 3.527 ounces. In restaurant terminology, this is a standard 3.5-ounce portion.'
      }
    ],
    calculatorCta: {
      title: 'Calculate Portions for Any Chicken Cut',
      description: 'Convert between raw and cooked weights across chicken breast, thighs, drumsticks, and wings.',
      buttonText: 'Open Chicken Calculator',
      targetUrl: '/chicken'
    },
    relatedSlugs: [
      'what-does-150g-of-chicken-look-like',
      'is-100g-raw-chicken-the-same-as-100g-cooked-chicken',
      'how-much-raw-chicken-to-get-100g-cooked',
      'how-much-protein-in-100g-raw-chicken'
    ]
  }
];
