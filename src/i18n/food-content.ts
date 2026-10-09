/**
 * Long-form, food-specific page content.
 *
 * This is the prose that makes each food page more than "template + numbers":
 * a food-specific intro on why the weight moves the way it does, a worked
 * raw→cooked example per cooking method, a practical "how much raw to buy"
 * section, and the logging mistakes that are specific to this food.
 *
 * Translated for every locale in `FOOD_FULL_CONTENT_LOCALES` (en, es, fr, de,
 * pt, it). `FoodContent.astro` renders these blocks only for those locales via
 * `foodPageHasFullContent`; any locale not listed keeps the shorter templated
 * layout and is `noindex`'d. FAQ copy for these foods lives in `faq.ts` under
 * `FOOD_FAQ_BY_ID`.
 *
 * Yield figures and macros are quoted from `food-data.json`. Worked examples
 * use the USDA macros-per-100g-raw for that food; keep the arithmetic in sync
 * with the data file if either changes. Translations keep the same gram and
 * percentage figures — only the prose is localized.
 */

import type { Locale } from './ui';
import { ES } from './food-content/es';
import { FR } from './food-content/fr';
import { DE } from './food-content/de';
import { PT } from './food-content/pt';
import { IT } from './food-content/it';

export interface FoodLongContent {
  /** Heading for the "why the weight changes" section. */
  introHeading: string;
  /** 3–4 paragraphs, specific to this food's muscle structure / fat / starch. */
  intro: string[];
  /** Heading for the worked-example / per-method section. */
  methodHeading: string;
  /** Prose wrapped around the per-method yields, with real gram + macro maths. */
  method: string[];
  /** Heading for the buying section, e.g. "How much raw chicken breast to buy". */
  buyingHeading: string;
  /** Practical, keyword-rich, genuinely useful shopping maths. */
  buying: string[];
  /** Heading for the mistakes section. */
  mistakesHeading: string;
  /** 2–3 specific logging errors people make with this food. */
  mistakes: string[];
}

const EN: Record<string, FoodLongContent> = {
  // ── Meat, poultry & seafood ──────────────────────────────────────────────

  'chicken-breast': {
    introHeading: 'Raw to Cooked Chicken Weight: Why Chicken Breast Shrinks About 28%',
    intro: [
      'Calculating raw to cooked chicken weight is essential for accurate nutrition tracking. Skinless, boneless chicken breast is roughly 74% water by weight and almost pure lean muscle — about 22.5g of protein and only 2.6g of fat per 100g raw. There is very little fat and almost no connective tissue to hold moisture in place, so when the muscle fibres hit heat they behave like a wrung-out sponge: the proteins denature at around 60–65°C, the fibre bundles contract lengthwise and sideways, and the water they were holding is squeezed out into the pan. That water loss is essentially the entire 28% the breast drops on the way to a 72% USDA yield.',
      'Because the loss is almost all water and barely any fat, the protein you started with stays in the meat. A 200g raw breast still contains about 45g of protein after cooking — it is just now packed into roughly 144g instead of 200g, which is why cooked chicken breast tests at around 31g protein per 100g while raw tests at 22.5g. Same protein, less water, denser meat.',
      'Chicken breast punishes overcooking harder than fattier cuts. With no fat or collagen buffering it, every extra minute past an internal 74°C drives off more water and pushes the yield down toward the mid-60s. Thin-pounded cutlets and small tenders lose a higher share than a thick whole breast because they have more surface area for evaporation relative to their mass.',
      'This is the food most macro trackers get wrong: they weigh the cooked breast, look up a raw-weight nutrition label, and quietly undercount their protein by a quarter. The fix is always to calculate the raw-weight equivalent using our raw to cooked chicken weight calculator.',
    ],
    methodHeading: 'Raw to Cooked Chicken Weight by Cooking Method: Baked vs. Grilled vs. Poached',
    method: [
      'Dry, high heat evaporates more surface moisture than gentle wet heat, so the cooking method moves the yield by about seven points. USDA figures for skinless breast: baked or roasted 72%, pan-fried 72%, grilled 70%, boiled or poached 77%.',
      'Start with a 200g raw breast. Baked at 200°C it comes out to 200 × 0.72 ≈ 144g cooked. Grilled over direct flame the same breast lands at 200 × 0.70 = 140g — the extra char and radiant heat cost you a few more grams. Poached in barely-simmering water it holds 200 × 0.77 = 154g, because the meat is surrounded by water instead of dry air and almost nothing evaporates.',
      'All three portions carry the same macros, because they all came from 200g raw: about 240 calories, 45g protein, 5.2g fat. If you only have the cooked weight, divide by the yield for your method — a 150g grilled portion is 150 ÷ 0.70 ≈ 214g raw; baked, the same 150g is 150 ÷ 0.72 ≈ 208g raw. Use the cooking-method toggle on the calculator to pick the right divisor automatically.',
    ],
    buyingHeading: 'How much raw chicken breast to buy',
    buying: [
      'Work backwards from the cooked portion you want on the plate. For a 150g cooked serving, buy about 150 ÷ 0.72 ≈ 210g raw per person if you are baking or roasting; closer to 215g if you grill. For a 6oz (170g) cooked portion, plan on roughly 235–240g raw each.',
      'Packaged breasts usually run 200–280g each, so one average breast feeds one hungry adult with a little to spare, and a 1kg / 2.2lb tray of three to four breasts yields roughly 700–720g cooked — about four 175g portions. If you meal-prep five 150g cooked servings, start with about 1.05kg raw.',
    ],
    mistakesHeading: 'Common chicken-breast logging mistakes',
    mistakes: [
      'Weighing after cooking, then logging against a raw "per 100g" label. A 150g cooked breast is ~208g raw; logging 150g undercounts you by around 13g of protein and 70 calories.',
      'Using the poached/boiled yield (77%) for a breast you actually grilled (70%). That is a 10% error in the raw weight you back-calculate.',
      'Logging pre-marinated or brined "seasoned" breast from the store as plain chicken. The added solution can be 10–15% of the pack weight and is mostly water and salt, not protein.',
    ],
  },

  'chicken-thigh': {
    introHeading: 'Why chicken thigh loses more than the breast',
    intro: [
      'Boneless, skinless thigh is dark meat: the muscles a chicken uses for standing and walking. They are worked harder than the breast, so they carry more myoglobin, more intramuscular fat (about 4.6g per 100g raw versus 2.6g for breast) and noticeably more connective tissue. That structure is why thigh cooks to a 69% baked yield — a ~31% loss — while the breast holds 72%.',
      'Two things leave the meat at once. Water is squeezed out as the fibres contract, same as any muscle, and the fat renders: the higher heat of roasting or broiling melts intramuscular fat and it drips away with the juices. A fattier cut with more to render loses more total weight, even though the collagen it contains is busy turning to gelatin and holding some moisture back.',
      'That collagen is also why thigh is more forgiving to eat than breast at the same yield. Overcook a breast and it is dry and stringy; overcook a thigh and the connective tissue has broken down enough that it still reads as juicy. The scale still shows the weight loss even when your mouth does not.',
      'For tracking, thigh matters because the method spread is huge — wider than almost any other cut on this site — so a single "chicken" yield number is not good enough here.',
    ],
    methodHeading: 'The widest method spread of any chicken cut',
    method: [
      'USDA documents boneless thigh from 59% deep-fried to 80% deep-fried-and-breaded, with braised at 73%, oven-fried at 66%, pan-fried at 66%, broiled at 61% and barbecue-broiled at 64%. The 69% headline figure is the baked/roasted value.',
      'Take a 150g raw thigh. Braised in a sauce it holds 150 × 0.73 ≈ 110g. Broiled close to the element it drops to 150 × 0.61 ≈ 92g — an 18g difference from the braised version of the same piece of meat. Oven-fried lands at 150 × 0.66 = 99g.',
      'Every one of those portions still logs as 150g raw: about 192 calories, 30.6g protein, 6.9g fat. The breaded deep-fried figure (80%) is the odd one out — it looks like a high yield only because the breading and absorbed oil add weight that was never chicken, so do not use it to back-calculate lean thigh macros.',
    ],
    buyingHeading: 'How much raw chicken thigh to buy',
    buying: [
      'Boneless skinless thighs average 90–130g raw each. For a 120g cooked portion, buy about 120 ÷ 0.69 ≈ 175g raw per person when roasting or baking — roughly two smaller thighs or one and a half large ones.',
      'A 1kg pack of boneless thighs roasts down to about 690g cooked, or four 170g portions. If you are braising for a curry or stew, the yield climbs to 73% and the same 1kg gives you about 730g of cooked meat.',
    ],
    mistakesHeading: 'Common chicken-thigh logging mistakes',
    mistakes: [
      'Reusing the chicken-breast yield (72%) for thighs. Thigh runs lower at almost every method; baked, it is 69%, and broiled it is closer to 61%.',
      'Logging bone-in, skin-on thighs by their raw package weight as if it were edible meat. Skin and bone are 25–35% of a bone-in thigh and the skin is almost all fat.',
      'Treating deep-fried breaded thigh (80% "yield") as lean chicken. The extra weight is batter and oil, not protein — that portion has far more fat and carbs than the raw-thigh macros suggest.',
    ],
  },

  'ground-beef-80-20': {
    introHeading: 'Why 80/20 ground beef loses about a quarter of its weight',
    intro: [
      'Standard 80/20 ground beef is 20% fat by raw weight — about 20g of fat and 254 calories per 100g. When it cooks, two separate things leave the pan. The lean muscle contracts and pushes out water, and a large share of that 20% fat melts and renders out as liquid. Together they take the crumbled beef down to a 73% pan-broiled yield, a 27% loss, most of it visible as the grease you pour or blot off.',
      'Because so much of the loss is rendered fat rather than water, cooked 80/20 is meaningfully leaner per gram than the raw macros imply — some of the fat is now in the pan, not on your plate. This is the one common food where logging the raw-weight equivalent slightly overstates the fat you actually ate. It is still far more accurate than logging the drained cooked weight against a raw label, which understates everything.',
      'Grind size and fat content drive the yield. Leaner grinds (see 93/7) lose less because there is less fat to render. A coarse grind cooked gently loses less than a fine grind blasted on high heat, which shatters more cells and frees more liquid.',
      'For a stable number, weigh the raw beef before it goes in the pan. Trying to weigh cooked crumbles after draining introduces a second variable — how much grease you drained — on top of the yield itself.',
    ],
    methodHeading: 'Pan-broiled vs. broiled, worked through',
    method: [
      'USDA lists 80/20 crumbles at 73% pan-broiled (browned in a skillet) and 69% broiled (under the element, where more fat drips away). Leaner 93/7 runs 77% and 73% for the same two methods.',
      'Brown a full 1lb / 454g pack in a skillet and you get about 454 × 0.73 ≈ 331g of cooked, drained crumbles. Broil the same pound and it comes down to 454 × 0.69 ≈ 313g, with more fat lost to the tray.',
      'On a raw basis, that 454g started as about 1,153 calories, 78g protein and 91g fat. The cooked crumbles carry all the protein but only part of that fat, depending on how much grease you drained — which is exactly why the raw weight is the consistent thing to log.',
    ],
    buyingHeading: 'How much raw ground beef to buy',
    buying: [
      'For burgers, a 1/3lb (150g) raw patty cooks to about 110g; a 1/4lb (113g) patty to about 82g. Buy 150–170g raw per burger if people expect a substantial patty.',
      'For a sauce, chilli or taco filling where beef is one component, 100–125g raw per person is generous. A 1lb / 454g pack browns down to roughly 330g cooked and comfortably feeds four in a bolognese or four to five in tacos.',
    ],
    mistakesHeading: 'Common ground-beef logging mistakes',
    mistakes: [
      'Logging the drained cooked weight against a raw "per 100g" entry. Cooked crumbles are far more calorie-dense per gram than raw beef, so this overcounts calories and fat badly.',
      'Assuming all grinds behave the same. 80/20 yields ~73% pan-browned; 93/7 holds ~77% because there is less fat to render.',
      'Forgetting that draining removes fat the raw macros still count. If you pour off the grease, your real fat intake is a bit below what the raw-weight conversion shows — the gap is the fat in the pan.',
    ],
  },

  'ground-beef-93-7': {
    introHeading: 'Why 93/7 ground beef holds its weight better than 80/20',
    intro: [
      'Lean 93/7 ground beef is only 7% fat by raw weight — about 7.2g fat and 152 calories per 100g, against 20g and 254 for 80/20. The lean muscle still contracts and sheds water when it cooks, but there is far less fat available to render out of the pan. That missing fat loss is the whole reason 93/7 cooks to a 77% pan-broiled yield while 80/20 drops to 73%.',
      'Less rendered fat also means the raw-weight macro conversion is more honest for 93/7 than for fattier grinds. Very little fat ends up in the pan, so the cooked crumbles carry close to the full raw fat figure — logging the raw-weight equivalent is both the consistent choice and an accurate one here.',
      'The trade-off cooks feel is dryness. With little fat to keep the crumbles moist, 93/7 goes from juicy to chalky fast on high heat, and the yield slides toward the low 70s if you push it. Gentle browning and pulling it off the heat while a little pink remains keeps you near the 77% figure.',
      'For chilli, tacos, meat sauce and meal-prep bowls where people want the protein without the grease, 93/7 is the default — and its higher yield means a pack of it goes further on the plate than the same weight of 80/20.',
    ],
    methodHeading: 'Pan-broiled vs. broiled, worked through',
    method: [
      'USDA figures for 93/7 crumbles: 77% pan-broiled in a skillet, 73% broiled under the element.',
      'A 1lb / 454g pack browned in a skillet gives about 454 × 0.77 ≈ 350g cooked and drained — noticeably more than the ~331g you would get from 80/20. Broiled, the same pack comes down to 454 × 0.73 ≈ 331g.',
      'That 454g raw is about 690 calories, 95g protein and 33g fat. Because almost none of that fat renders away, the cooked crumbles keep nearly all of it, so converting your cooked portion back to raw weight gives an accurate macro read.',
    ],
    buyingHeading: 'How much raw lean ground beef to buy',
    buying: [
      'For a protein-focused meal-prep bowl, 150g raw per portion cooks to about 115g and delivers around 31g of protein. Five portions need about 750g raw.',
      'A 1lb / 454g pack yields roughly 350g cooked — enough for four generous taco or chilli servings at about 115g cooked each, or three larger bowls.',
    ],
    mistakesHeading: 'Common lean-ground-beef logging mistakes',
    mistakes: [
      'Using the 80/20 yield (73%) for 93/7. Lean beef holds more weight — about 77% pan-browned — so you would under-estimate the raw weight and short your protein.',
      'Logging cooked crumbles against a raw label. Even lean beef concentrates as it loses water, so cooked is more calorie-dense per gram than raw.',
      'Swapping 93/7 and 80/20 macros freely. The fat and calorie difference is nearly threefold per gram of fat — pick the entry that matches the pack.',
    ],
  },

  'ribeye-steak': {
    introHeading: 'Why ribeye keeps 84% of its weight — the highest of any meat here',
    intro: [
      'Ribeye is a heavily marbled steak: roughly 23g of fat per 100g raw, threaded through the muscle as intramuscular marbling rather than sitting in a separate cap. When it cooks, that marbling melts but much of it stays trapped between the muscle fibres instead of draining away, and the fat that does liquefy keeps the surface basted so less water evaporates. The result is an 84% USDA yield — only a 16% loss, the gentlest of any meat or fish on this site.',
      'The muscle still loses water as it firms up, and the steak weeps juice when it rests, but a fatty cut simply has less water in it per gram to begin with — fat displaces water — so there is less to lose. A lean cut like eye of round, cooked the same way, would drop noticeably more.',
      'Doneness is the real lever for a steak. USDA notes ribeye yield varies meaningfully from rare to well-done: a rare steak has barely given up any moisture, while a well-done one has been held at temperature long enough to push the loss past 20%. The 84% figure is a mid-range average.',
      'Because the fat stays largely in the meat, the raw-weight macro conversion is accurate for ribeye — what you log is close to what you eat, marbling included.',
    ],
    methodHeading: 'A worked example, rare to well-done',
    method: [
      'The site uses a single 84% yield for ribeye (USDA Table of Cooking Yields), representing a typical medium result. Treat rare as a few points higher and well-done as several points lower.',
      'A 12oz / 340g raw ribeye cooked to medium comes out to about 340 × 0.84 ≈ 286g on the plate. Cooked rare it might hold closer to 300g; taken to well-done, expect around 265–270g as the extended heat drives out more water and renders more fat.',
      'All of those came from 340g raw: about 989 calories, 66g protein and 79g fat. Weigh the steak raw if you can — trying to back it out from the cooked weight means guessing your own doneness, which swings the yield by ten points.',
    ],
    buyingHeading: 'How much raw ribeye to buy',
    buying: [
      'Steakhouse portions are 8–16oz (225–450g) raw. An 8oz raw steak eats as about 190g cooked; a 12oz as about 286g cooked. For a normal dinner alongside sides, 8–10oz raw per person is plenty; for a steak-forward meal, 12oz.',
      'Bone-in ribeye (rib steak / tomahawk) carries 10–20% bone weight that is not edible — buy proportionally more, or weigh the meat off the bone after cooking and convert that.',
    ],
    mistakesHeading: 'Common ribeye logging mistakes',
    mistakes: [
      'Trimming visible fat after cooking but logging the whole raw weight. If you cut off and leave the fat cap, log a smaller raw-equivalent than the full steak.',
      'Using a lean-steak yield. Sirloin or round loses more than ribeye; at 84%, ribeye is near the top of the range.',
      'Ignoring doneness. A well-done ribeye can weigh 15–20g less per 340g than a rare one cooked from the same raw steak.',
    ],
  },

  'pork-chop': {
    introHeading: 'Why a pork chop loses about 22% — and pork shoulder loses far more',
    intro: [
      'A boneless pork chop is a lean, quick-cooking cut: about 21.5g protein and 5.6g fat per 100g raw, cut from the loin. It behaves much like chicken breast — the muscle fibres contract, water is forced out, and a quick-cooked chop settles at a 78% pan-fried yield, a 22% loss.',
      'What makes pork chop tricky is how narrow its safe window is. Modern guidance cooks pork to 63°C plus a rest, where it is still faintly pink and juicy. Push it to the old 71°C "no pink" standard and you evaporate a lot more water — the yield can fall into the low 70s and the chop turns dry and pale.',
      'Method matters more for pork chop than for most cuts because the options genuinely differ: braising surrounds it with liquid so it holds 76%, while broiling or grilling over direct heat with the surface searing hard can actually finish higher at 83%, since the exterior sets fast and seals moisture in before the interior overcooks.',
      'Pork shoulder is a different animal — a fatty, collagen-rich cut cooked low and slow for hours, which is why it loses about 35% (a 65% yield). Long time at temperature renders most of the fat and drives off far more water than a five-minute chop ever could.',
    ],
    methodHeading: 'Pan-fried vs. braised vs. grilled',
    method: [
      'USDA method figures for a generic boneless chop (averaged across blade, loin and rib): pan-fried 78%, braised 76%, broiled or grilled 83%.',
      'A 6oz / 170g raw chop pan-fried comes out to about 170 × 0.78 ≈ 133g. Braised in a pan sauce it holds 170 × 0.76 ≈ 129g. Grilled hard over direct heat it can finish at 170 × 0.83 ≈ 141g, because the seared crust locks moisture in.',
      'Each portion logs as 170g raw: about 243 calories, 37g protein, 9.5g fat. If you only weighed it cooked, a 130g pan-fried chop is 130 ÷ 0.78 ≈ 167g raw.',
    ],
    buyingHeading: 'How much raw pork chop to buy',
    buying: [
      'Boneless chops run 140–225g raw each. For a 150g cooked portion, buy about 150 ÷ 0.78 ≈ 192g raw per person — one average chop.',
      'Bone-in chops carry 15–25% bone. A 250g bone-in chop has roughly 190–210g of meat, which cooks to about 150–165g. Buy bone-in by count (one per person) rather than by weight.',
    ],
    mistakesHeading: 'Common pork-chop logging mistakes',
    mistakes: [
      'Applying the chop yield (78%) to pulled pork or carnitas. Pork shoulder cooked for hours yields about 65% — a 500g raw piece becomes roughly 325g cooked, not 390g.',
      'Logging bone-in chop weight as edible meat. Subtract 15–25% for the bone before converting.',
      'Overcooking to "no pink," then wondering why your cooked weight is low. A chop taken to 71°C+ can yield closer to 72% than 78%.',
    ],
  },

  'pork-shoulder': {
    introHeading: 'Why pork shoulder loses about 35% — the biggest drop of any meat here',
    intro: [
      'Pork shoulder (Boston butt / picnic) is the opposite of a lean chop: about 14g of fat per 100g raw, plus thick seams of collagen-rich connective tissue and a fat cap. It is cooked deliberately slowly — hours at 90–120°C, or a long braise — to give that collagen time to melt into gelatin. The price of that low-and-slow transformation is a 65% USDA yield, a 35% weight loss.',
      'Almost everything leaves over those hours. The intramuscular and cap fat largely renders out into the pan or the smoker drip tray. Water that a quick-cooked cut never has time to lose keeps evaporating for the entire cook. Even the collagen, once gelatinised, releases some of the water it was bound to. What is left is concentrated, shreddable meat.',
      'The yield is remarkably consistent for pulled pork precisely because the endpoint is consistent — you cook it until it shreds, around 90–96°C internal, not to a fixed time. Whether you smoke it, oven-roast it or slow-cook it, you land near 65%.',
      'For tracking, this is the cut where using a generic "pork" yield does the most damage: a chop yield would overstate your cooked pulled pork by a third.',
    ],
    methodHeading: 'A worked example: from raw roast to pulled pork',
    method: [
      'The site uses a single 65% yield for pork shoulder (USDA Table of Cooking Yields), covering low-and-slow braising, roasting and smoking, which all land close together.',
      'A 2kg / 4.4lb raw boneless shoulder pulls down to about 2000 × 0.65 = 1300g of cooked meat. A 1kg piece gives about 650g. Bone-in shoulder loses the bone weight on top — figure another 8–12%.',
      'That 2kg raw is about 4,020 calories, 348g protein and 284g fat before cooking. A good deal of the fat renders into the tray, so the 1300g of pulled meat is leaner per gram than the raw macros suggest — but the raw-weight conversion is still the consistent way to log it, and you can nudge the fat down if you skimmed the drippings.',
    ],
    buyingHeading: 'How much raw pork shoulder to buy',
    buying: [
      'Plan on about 150g cooked pulled pork per person in sandwiches, which means roughly 150 ÷ 0.65 ≈ 230g raw boneless per head. For a crowd, the caterer\'s rule of "1/3 lb cooked per person, so 1/2 lb raw" lands in the same place.',
      'A whole boneless shoulder is usually 2–3.5kg. A 3kg roast yields about 1.95kg cooked — enough for a dozen generous sandwiches. Bone-in, buy about 15% more to cover the bone.',
    ],
    mistakesHeading: 'Common pork-shoulder logging mistakes',
    mistakes: [
      'Using a pork-chop or "average pork" yield. At 65%, shoulder loses far more than a chop\'s 78%; a chop yield overstates your cooked pulled pork by about a third.',
      'Logging the cooked, sauced weight. BBQ sauce adds sugar and calories that are not in the pork — weigh the meat before saucing, or log the sauce separately.',
      'Ignoring rendered fat. If you skim or drain the drippings, your actual fat intake is below the raw-weight conversion; the difference is the fat left in the pan.',
    ],
  },

  'turkey-breast': {
    introHeading: 'Why turkey breast loses about 21% when roasted',
    intro: [
      'Skinless turkey breast is the leanest major poultry cut on this site — about 24.6g of protein and just 1g of fat per 100g raw, even leaner than chicken breast. It is close to pure muscle and water, so when it roasts the story is almost entirely water loss: proteins denature, fibres contract, moisture is pushed out, and the breast settles at a 79% USDA yield, a 21% loss.',
      'It loses a touch less than chicken breast (72%) mainly because a turkey breast is a much bigger piece of meat. A whole 2–3kg breast has a low surface-area-to-mass ratio, so proportionally less of it is exposed to drying heat, and the interior is buffered by the mass around it. Cut it into cutlets and the yield drops toward chicken-breast territory.',
      'The classic mistake with turkey is cooking to the old 74°C+ "well done" bird standard out of caution. Pulled at 71°C and rested, breast holds near 79%; taken to 80°C it turns sawdust-dry and the yield falls several points.',
      'The 79% figure here is specifically for the breast. Whole-turkey and stuffed-turkey yields are lower and not comparable — they average in dark meat, skin and cavity losses.',
    ],
    methodHeading: 'A worked example: roasted turkey breast',
    method: [
      'The site uses a single 79% yield for turkey breast (USDA Agriculture Handbook No. 102), for roasting. Poaching or steaming would hold slightly more; slicing into thin cutlets and pan-searing would hold slightly less.',
      'A 250g raw portion of breast roasts to about 250 × 0.79 ≈ 198g cooked. A whole 2.5kg boneless breast roast yields roughly 1.98kg cooked sliced meat.',
      'That 250g raw is about 285 calories, 61.5g protein and 2.5g fat. If you carved first and weighed after, a 150g cooked serving is 150 ÷ 0.79 ≈ 190g raw. Deli "roast turkey breast" is not comparable — it is brined and often has added water, so log it from its own cooked-weight label.',
    ],
    buyingHeading: 'How much raw turkey breast to buy',
    buying: [
      'For a 150g cooked portion, buy about 150 ÷ 0.79 ≈ 190g raw boneless breast per person. For Thanksgiving-style leftovers, double that.',
      'A bone-in turkey breast is roughly 30–40% bone and skin. For 6 people wanting 150g cooked each (900g cooked, ~1.14kg raw boneless equivalent), buy a bone-in breast of about 2.7–3kg, or a 1.2kg boneless roast.',
    ],
    mistakesHeading: 'Common turkey-breast logging mistakes',
    mistakes: [
      'Using whole-roast-turkey yield data (often quoted around 70–74%) for a plain breast. The breast alone holds about 79%.',
      'Logging brined, pre-basted or "self-basting" supermarket breast as plain turkey. The injected solution is 8–15% of the weight and is water, salt and sometimes fat.',
      'Treating deli turkey slices as home-roasted breast. Deli meat carries added water and sodium and has its own (cooked-weight) nutrition label — use that.',
    ],
  },

  'salmon': {
    introHeading: 'Why salmon only loses about 15% when cooked',
    intro: [
      'Salmon fillet is an oily fish — roughly 13.4g of fat per 100g raw, most of it unsaturated oil distributed through the flesh and concentrated in the fat lines between the muscle flakes. That oil is the reason salmon posts an 85% USDA yield, the highest of any protein on this site: fish muscle is built in short, delicate flakes with very little connective tissue, so it firms up gently and the fat keeps it moist rather than draining away.',
      'When salmon cooks, the muscle proteins coagulate and squeeze out a little water and the white stuff you see on the surface — that is albumin, a water-soluble protein. But the fibre bundles are short and the fat is everywhere, so the flesh never contracts and wrings itself out the way a chicken breast does. Most of the weight stays put.',
      'Overcooking still costs you. Past an internal 55–60°C the flakes tighten, more albumin and oil are forced out, and a well-done fillet can drop toward 78–80%. Farmed salmon, being fattier than wild, tends to hold slightly more weight than wild sockeye.',
      'Because so little leaves the fillet and the fat stays in it, converting your cooked portion back to raw weight gives an accurate macro read — including the omega-3 fat, which is most of why people track salmon in the first place.',
    ],
    methodHeading: 'A worked example: baked, grilled or poached salmon',
    method: [
      'The site uses a single 85% yield for salmon (USDA Agriculture Handbook No. 102). Poaching holds a point or two more; hard grilling or well-done baking a few points less.',
      'A 6oz / 170g raw fillet baked at 190°C comes out to about 170 × 0.85 ≈ 144g. Poached gently it might hold ~148g; grilled to firm and flaky, ~138g.',
      'That 170g raw fillet is about 354 calories, 34g protein and 22.8g fat. If you only weighed the cooked portion, a 130g piece is 130 ÷ 0.85 ≈ 153g raw. Skin-on fillets: the skin is 5–8% of the weight and mostly renders its fat but stays on the scale, so weigh skinless if you can, or subtract it.',
    ],
    buyingHeading: 'How much raw salmon to buy',
    buying: [
      'For a 150g cooked portion, buy about 150 ÷ 0.85 ≈ 175g raw per person. Standard fillet portions are 140–200g raw, so one portion per person covers it.',
      'A whole side of salmon is 900g–1.4kg and yields about 85% of that cooked — a 1.2kg side gives roughly 1kg cooked, or about six to seven 150g servings. Budget extra if the side is skin-on and you will discard the skin.',
    ],
    mistakesHeading: 'Common salmon logging mistakes',
    mistakes: [
      'Applying a meat yield like 72% to salmon. Fish holds far more weight — salmon is about 85% — so a meat yield inflates your back-calculated raw weight and overcounts calories and fat.',
      'Logging canned or smoked salmon as fresh raw fillet. Canned salmon is cooked and packed (often with added salt or oil); smoked salmon is cured. Both have their own labels.',
      'Weighing a skin-on fillet and logging it as skinless. The skin adds weight but is not counted in a skinless entry.',
    ],
  },

  'shrimp': {
    introHeading: 'Why shrimp loses about 25% — and why it looks like more',
    intro: [
      'Shrimp is almost pure lean protein: about 24g per 100g raw with only 0.3g of fat, and a dense, tightly-packed muscle in a small package. When it cooks, the muscle proteins contract fast and hard — that is the sudden curl from a straight raw shrimp to a tight "C" — and squeeze out water. The USDA yield is 75%, a 25% loss, almost all of it surface and internal moisture.',
      'The visual shrink looks bigger than the weight loss because the curling and tightening concentrate the same mass into a smaller, denser shape. A shrimp does not really shed a quarter of its bulk; it clenches. The scale tells the truth better than your eyes here.',
      'Overcooking is brutal with shrimp because there is no fat and the pieces are small — a few extra seconds and they go from a "C" to a tight "O", rubbery, with the yield dropping further as more water is forced out. Large and jumbo shrimp hold proportionally more weight than small salad shrimp, which have more surface area per gram.',
      'One wrinkle: much shrimp is sold treated with sodium tripolyphosphate or a salt brine to retain water. That shrimp weighs more raw than "dry" shrimp and can actually lose more than 25% when cooked, because it is shedding added water on top of its own.',
    ],
    methodHeading: 'A worked example: boiled, sautéed or grilled shrimp',
    method: [
      'The site uses a single 75% yield for shrimp (USDA Agriculture Handbook No. 102), covering boiling, steaming, sautéing and grilling, which land close together for such a quick-cooking food.',
      'Start with 200g of raw peeled shrimp. Boiled or sautéed it comes out to about 200 × 0.75 = 150g cooked. Grilled over high heat, expect a gram or two less as the surface dries.',
      'That 200g raw is about 198 calories and 48g protein — shrimp is the leanest high-protein food on this site. If you weighed cooked, a 120g portion is 120 ÷ 0.75 = 160g raw. Shell-on shrimp: the shell and head are 30–45% of the weight, so weigh peeled, or convert only the peeled cooked weight.',
    ],
    buyingHeading: 'How much raw shrimp to buy',
    buying: [
      'Shrimp is sold by count per pound (e.g. "16/20" = 16–20 shrimp per lb, about 23–28g each raw). For a 120g cooked main portion, buy about 160g raw peeled per person; for shrimp as part of a pasta or stir-fry, 100–120g raw each.',
      'A 1lb / 454g bag of raw peeled shrimp cooks to about 340g — two to three main portions, or four to five as a component. If the bag is shell-on, expect only 55–70% of the bag weight to be edible before cooking.',
    ],
    mistakesHeading: 'Common shrimp logging mistakes',
    mistakes: [
      'Weighing shell-on shrimp and logging it as peeled. Shells and heads are a third to nearly half the raw weight.',
      'Ignoring added phosphate/brine water. Treated shrimp can lose more than the standard 25% because it is shedding retained water — its cooked weight comes in low relative to a "dry" pack.',
      'Logging pre-cooked frozen shrimp against a raw entry. Pre-cooked shrimp has already lost its water; log it from a cooked-shrimp entry at roughly the weight in the bag.',
    ],
  },

  // ── Grains, pasta & legumes ──────────────────────────────────────────────

  'white-rice': {
    introHeading: 'Why dry white rice roughly triples in weight when cooked',
    intro: [
      'Dry white rice is about 80% starch and only 10–12% water — it has been milled and dried specifically to be shelf-stable. Cooking is rehydration: the starch granules inside each grain absorb water, swell, and gelatinise, and the grain roughly triples in weight. The USDA yield for boiled white rice is 308%, so 100g dry becomes about 308g cooked.',
      'Nothing is lost — this is the opposite of meat. The dry grain gains the entire weight difference from the cooking water it soaks up. That means the calories and macros in your bowl of cooked rice all came from the dry weight: about 365 calories, 7.1g protein and 80g carbs per 100g dry, now spread across three times as many grams.',
      'How much water it takes up depends on the rice and the method. A firm, separate-grained pilaf sits lower; rice cooked with extra water until soft, or rinsed and boiled in abundant water, sits higher. Parboiled ("converted") rice and instant rice absorb even more — around 350–358% — because their starch has been pre-gelatinised.',
      'This is the food where people most often weigh cooked and log correctly by accident, because so many rice database entries are cooked-weight. The danger is mixing them up: logging 200g of cooked rice against a dry "per 100g" entry roughly triples your calorie count.',
    ],
    methodHeading: 'Boiled vs. parboiled vs. instant',
    method: [
      'USDA figures for white rice: boiled 308%, parboiled/converted 358%, instant or precooked 350%.',
      'Cook 75g of dry rice — a very common single serving — by the absorption method and you get about 75 × 3.08 ≈ 231g cooked. The same 75g of parboiled rice yields about 75 × 3.58 ≈ 269g, and instant rice about 263g, because their pre-cooked starch holds more water.',
      'Every one of those bowls carries the macros of 75g dry: about 274 calories, 5.3g protein, 60g carbs. Going the other way, 250g of cooked boiled rice is 250 ÷ 3.08 ≈ 81g dry. Use the method toggle on the calculator if you cook parboiled or instant rice.',
    ],
    buyingHeading: 'How much dry rice to cook',
    buying: [
      'A standard cooked side portion is 150–200g. At a 308% yield that is about 50–65g dry per person. A "cup" of dry rice (about 185g) cooks to roughly 570g — three to four side portions.',
      'For meal prep: five 180g cooked portions need about 900g cooked, or roughly 290g dry. Rice keeps 4–5 days cooked and refrigerated, and reheating from chilled does not change the weight you logged.',
    ],
    mistakesHeading: 'Common rice logging mistakes',
    mistakes: [
      'Logging cooked rice weight against a dry "per 100g" entry. 200g cooked is only about 65g dry — the dry entry would triple your calories.',
      'Using the plain boiled yield for parboiled or instant rice. Those absorb more water (350–358%), so the same dry weight makes more cooked grams.',
      'Assuming brown rice behaves identically. Brown rice yields about 335% and has its own macros — the bran changes both.',
    ],
  },

  'brown-rice': {
    introHeading: 'Why brown rice expands even more than white',
    intro: [
      'Brown rice is the whole grain with the bran and germ still on. Those outer layers are fibrous and water-resistant, so brown rice takes longer to cook and needs more water — and it ends up absorbing more of it. The USDA yield is 335%, higher than white rice\'s 308%: 100g dry becomes about 335g cooked.',
      'As with white rice, the weight gain is pure absorbed water and nothing is lost. The dry grain carries about 370 calories, 7.9g protein, 77g carbs and 2.9g fat per 100g — the germ adds the fat and some of the protein — and all of that ends up in the cooked bowl, just diluted across more grams.',
      'The bran layer is also why brown rice stays chewier and the grains stay more separate: it physically limits how much the starch can swell and gelatinise, so you rarely get the sticky over-absorbed texture that pushes white rice yields higher. The trade-off is a 40–50 minute cook instead of 15.',
      'For tracking, the key point is that brown and white rice are not interchangeable entries — different yield, different macros. Logging a brown-rice bowl as white understates fibre and fat and misjudges the portion.',
    ],
    methodHeading: 'A worked example: brown rice, dry to cooked',
    method: [
      'The site uses a single 335% yield for brown rice (USDA Agriculture Handbook No. 102), for boiling or the absorption method.',
      'Cook 75g of dry brown rice and you get about 75 × 3.35 ≈ 251g cooked. Cook a "cup" (about 190g dry) and you get roughly 637g cooked — around four 160g portions.',
      'That 75g dry is about 278 calories, 5.9g protein, 58g carbs and 2.2g fat, and those numbers do not change when it becomes 251g cooked. Going backwards, 250g of cooked brown rice is 250 ÷ 3.35 ≈ 75g dry.',
    ],
    buyingHeading: 'How much dry brown rice to cook',
    buying: [
      'A cooked side portion of 160–200g works out to about 48–60g dry per person at a 335% yield — slightly less dry rice than white for the same cooked portion, because brown expands more.',
      'For five meal-prep portions of 180g cooked (900g total), cook about 270g dry. Brown rice reheats and freezes well, and the cooked weight you logged holds through storage.',
    ],
    mistakesHeading: 'Common brown-rice logging mistakes',
    mistakes: [
      'Logging it as white rice. Different yield (335% vs 308%) and different macros — you would miss the fat and undercount fibre.',
      'Logging cooked weight against a dry entry. 200g cooked brown rice is only about 60g dry.',
      'Assuming "wild rice" or "brown basmati" match this entry exactly. They cook and absorb differently; use the closest specific entry you can.',
    ],
  },

  'pasta': {
    introHeading: 'Why dry pasta a bit more than doubles when cooked',
    intro: [
      'Dry pasta is durum wheat semolina and water, extruded and dried hard. It is denser and lower in surface starch than rice, and it is boiled in abundant water rather than absorbing a measured amount, so it takes up proportionally less: the yield here is 225%, meaning 100g dry becomes about 225g cooked at a normal, just-past-al-dente doneness.',
      'The weight gain is absorbed cooking water, and — as with all grains — nothing is lost, so the macros stay tied to the dry weight: about 371 calories, 13g protein and 75g carbs per 100g dry, now carried in 225g of cooked pasta. Cooked pasta therefore tests at roughly 160 calories per 100g against 371 dry.',
      'Doneness is the whole ballgame for pasta yield. Drained at firm al dente, pasta sits closer to 200%; cooked soft, or held in sauce and left to sit, it keeps absorbing and climbs past 240%. Fresh egg pasta is different again — it starts with more moisture and gains less.',
      'Shape matters too. Thin long pasta and small shapes absorb faster and more evenly; thick rigatoni or large shells sit lower. This entry is a general dry-pasta average; long pasta like spaghetti runs higher.',
    ],
    methodHeading: 'A worked example: al dente vs. well cooked',
    method: [
      'The site uses a single 225% yield for generic dry pasta (USDA FoodData Central raw-vs-cooked). Treat firm al dente as roughly 200% and soft or sauce-held pasta as 240%+.',
      'A 2oz / 57g dry portion — the standard box serving — cooks to about 57 × 2.25 ≈ 128g. An 85g dry portion (a more realistic main) yields about 191g cooked. Cook that same 85g soft and it can reach 205–215g.',
      'The macros track the dry weight regardless: 85g dry is about 315 calories, 11g protein, 64g carbs. Backwards, 250g of cooked pasta is 250 ÷ 2.25 ≈ 111g dry — worth checking, because a restaurant "portion" of cooked pasta is often 300–400g, i.e. 130–180g dry.',
    ],
    buyingHeading: 'How much dry pasta to cook',
    buying: [
      'The box says 2oz / 57g dry per person; that is a light side. A satisfying main is 85–100g dry, cooking to roughly 190–225g. A 500g box feeds about five as a main or eight as a side.',
      'For meal prep, cook pasta a touch firm — it keeps absorbing sauce and moisture in the fridge, and starting al dente keeps the reheated portion closer to the weight you logged.',
    ],
    mistakesHeading: 'Common pasta logging mistakes',
    mistakes: [
      'Logging cooked pasta against a dry "per 100g" entry. 250g cooked is only about 110g dry — the dry entry would more than double your calories.',
      'Using one yield for every doneness. Al dente (~200%) and soft (~240%) differ enough to matter over a big portion.',
      'Weighing pasta after it has sat in sauce. It has absorbed sauce weight and more water; weigh drained pasta, and log the sauce separately.',
    ],
  },

  'quinoa': {
    introHeading: 'Why quinoa expands to about 3× its dry weight',
    intro: [
      'Quinoa is a small pseudo-cereal seed — botanically not a grass grain, though it cooks like one. Each seed is dense with starch but also carries more protein (14.1g per 100g dry) and fat (6.1g) than rice, along with an outer ring of germ that unwinds into the little white "tail" you see in cooked quinoa. It absorbs water readily and posts a 314% yield: 100g dry becomes about 314g cooked.',
      'Like every grain and legume here, quinoa gains weight rather than losing it, and the gain is entirely absorbed cooking water. The macros belong to the dry seed and are simply spread thinner once cooked — cooked quinoa lands around 117 calories per 100g versus 368 dry.',
      'Quinoa is usually cooked by absorption in a fixed ratio (about 1 part seed to 1.75–2 parts water), so its yield is fairly stable compared with boil-and-drain grains. Toasting the dry seed first or rinsing off its bitter saponin coating changes the flavour more than the yield.',
      'For trackers, quinoa\'s appeal is the protein-plus-fibre profile, so getting the portion right matters. Its dry-weight macros are close enough to rice by calories but quite different by protein and fat — do not swap the entries.',
    ],
    methodHeading: 'A worked example: quinoa, dry to cooked',
    method: [
      'The site uses a single 314% yield for quinoa (USDA FoodData Central, calculated from raw-vs-cooked nutrient ratios), for the standard absorption method.',
      'Cook 90g of dry quinoa — a generous single serving — and you get about 90 × 3.14 ≈ 283g cooked. A "cup" of dry quinoa (about 170g) yields roughly 534g cooked, or three to four portions.',
      'That 90g dry is about 331 calories, 12.7g protein, 58g carbs and 5.5g fat, and none of that changes when it becomes 283g cooked. Backwards, 250g of cooked quinoa is 250 ÷ 3.14 ≈ 80g dry.',
    ],
    buyingHeading: 'How much dry quinoa to cook',
    buying: [
      'A cooked portion of 180–220g is about 57–70g dry per person. For a salad where quinoa is the base, lean to the higher end; as a side alongside protein, 50–60g dry is plenty.',
      'For five meal-prep bowls at 200g cooked (1kg total), cook about 320g dry quinoa. It holds its texture in the fridge better than rice and does not need reheating for cold grain bowls.',
    ],
    mistakesHeading: 'Common quinoa logging mistakes',
    mistakes: [
      'Logging cooked quinoa against a dry entry. 250g cooked is only about 80g dry — roughly a threefold calorie error.',
      'Swapping quinoa and rice entries because "they\'re both grains." Quinoa has nearly double the protein and much more fat per dry gram.',
      'Weighing quinoa in a dressed salad and logging it as plain. The dressing and any added oil are separate — weigh the plain cooked quinoa before it goes in.',
    ],
  },

  'lentils': {
    introHeading: 'Why dry lentils nearly triple in weight when cooked',
    intro: [
      'Dry lentils are about 11–12% water, 60g of carbohydrate and a notably high 25.8g of protein per 100g — the highest-protein whole food in this list after soy. They cook by absorbing water into their starch and protein matrix and swelling, with no soaking strictly required because they are small and thin-skinned. The USDA yield for fully boiled or baked lentils is 289%: 100g dry becomes about 289g cooked.',
      'Nothing is lost; the weight difference is all absorbed cooking liquid. So the protein and carbs in your bowl of dal or lentil soup came entirely from the dry weight — about 353 calories, 25.8g protein and 60g carbs per 100g dry, diluted across nearly three times the cooked grams.',
      'Lentil type and doneness swing the result. Red and yellow split lentils collapse into a purée and absorb a lot; firm green or Puy lentils cooked briefly stay intact and absorb less. USDA notes that lentils simmered only 20 minutes land at 261%, versus 289% when boiled or baked to fully soft — a real gap if you like them with bite.',
      'Canned lentils are already cooked and sit near that fully-hydrated weight; drained, a 400g can is roughly 240g, equivalent to about 85g dry.',
    ],
    methodHeading: 'Fully cooked vs. 20-minute simmer',
    method: [
      'USDA lentil figures: boiled or baked to fully soft 289%, simmered 20 minutes 261%.',
      'Cook 100g of dry lentils fully soft for a dal and you get about 289g. Simmer the same 100g for just 20 minutes for a firm salad lentil and you get about 261g — 28g less from the same starting weight, because they are less hydrated.',
      'Both carry the macros of 100g dry: about 353 calories, 25.8g protein, 60g carbs. Backwards, 200g of cooked soft lentils is 200 ÷ 2.89 ≈ 69g dry. For a drained can, divide the drained weight by about 2.85.',
    ],
    buyingHeading: 'How much dry lentils to cook',
    buying: [
      'A hearty cooked portion in a stew or dal is 200–250g, which is about 70–85g dry per person. As a side, 50g dry is enough.',
      'A "cup" of dry lentils (about 190g) cooks to roughly 550g — three to four servings. For five meal-prep portions of 220g cooked (1.1kg), cook about 380g dry.',
    ],
    mistakesHeading: 'Common lentil logging mistakes',
    mistakes: [
      'Logging cooked or canned lentils against a dry "per 100g" entry. 200g cooked is only about 70g dry.',
      'Using the fully-soft yield (289%) for firm, briefly-simmered lentils (261%) or vice versa. Match the doneness you actually cooked.',
      'Treating a drained can as its full labelled weight of dry-equivalent. A 400g can drains to ~240g, about 85g dry.',
    ],
  },

  'black-beans': {
    introHeading: 'Why dry black beans swell to about 2.5× when cooked',
    intro: [
      'Dry black beans are hard, low-moisture seeds — about 12% water, 62g carbohydrate and 21.6g protein per 100g — with a thick, waxy seed coat built to keep water out until the bean germinates. Cooking them is a two-stage soak: they take on water during soaking, then absorb more and gelatinise their starch during the boil. The USDA-derived yield is 250%, so 100g dry becomes about 250g cooked — a smaller multiple than lentils because that tough skin limits swelling.',
      'The weight gain is entirely absorbed water; nothing leaches out except a little colour and some of the oligosaccharides that cause gas. The macros stay with the dry weight: about 341 calories, 21.6g protein and 62g carbs per 100g dry, now spread through 2.5× the cooked grams, so cooked black beans land near 130–135 calories per 100g.',
      'Soaking, bean age and hard water all move the number. Older beans and hard, mineral-heavy water resist hydration and yield a bit less; a long soak and a pinch of baking soda push absorption higher. Unsoaked "quick-cook" beans tend to sit lower and cook unevenly.',
      'Canned black beans are fully cooked and near this hydrated weight — a 400g can drains to roughly 240–260g, equivalent to about 100g dry.',
    ],
    methodHeading: 'A worked example: dry beans and canned beans',
    method: [
      'The site uses a single 250% yield for black beans (USDA FoodData Central, calculated from raw-vs-cooked nutrient ratios).',
      'Cook 100g of dry black beans (soaked, then boiled until tender) and you get about 250g cooked drained beans. A "cup" of dry beans (about 190g) yields roughly 475g cooked — close to 3 cups.',
      'That 100g dry is about 341 calories, 21.6g protein, 62g carbs. Backwards, 250g of home-cooked beans is 250 ÷ 2.5 = 100g dry; a 400g can drained to 250g is also about 100g dry-equivalent. If your can\'s label gives cooked-weight macros, that is the simplest thing to log directly.',
    ],
    buyingHeading: 'How much dry black beans to cook',
    buying: [
      'A cooked portion as a side or in a bowl is 130–160g, about 55–65g dry per person. One 400g can (≈240g drained) serves two to three.',
      'A 1lb / 454g bag of dry beans cooks to roughly 1.1kg — about seven to eight servings, or the equivalent of four and a half cans, at a fraction of the cost. For five meal-prep portions of 150g cooked, cook about 300g dry.',
    ],
    mistakesHeading: 'Common black-bean logging mistakes',
    mistakes: [
      'Logging cooked or canned beans against a dry "per 100g" entry. 250g cooked is 100g dry — the dry entry would roughly 2.5× your calories.',
      'Logging canned beans without draining. The aquafaba liquid adds weight and some sodium; drain and, ideally, rinse before weighing.',
      'Assuming all beans share a yield. Black beans are about 250%; lentils are 289% and kidney beans about 238% — close, but not identical.',
    ],
  },

  // ── Vegetables ───────────────────────────────────────────────────────────

  'broccoli': {
    introHeading: 'Why boiled broccoli comes out weighing almost exactly the same',
    intro: [
      'Broccoli is about 89% water, held in fairly rigid cell walls with a lot of surface area — all those florets and stalk. When you boil it, two opposite things happen and roughly cancel out: some cell water is lost as the walls soften and the tissue collapses, but the florets also trap and absorb boiling water in their crevices and cut surfaces. The net USDA yield for boiled broccoli is 100% — no measurable weight change.',
      'That makes broccoli almost unique on this site: raw and cooked weight are interchangeable for tracking, so a 100g raw portion is still ~100g cooked and carries the same 34 calories, 2.8g protein and 6.6g carbs. The nutrients that do change — vitamin C leaching into the cooking water, for instance — do not affect the macros or the weight.',
      'Method tips the balance slightly. Steaming, with no bath to absorb from, comes in a touch under at 95%. Pressure-cooking forces water into the tissue and pushes slightly over at 104%. Roasting, which this dataset does not score, would drive off real water and land much lower.',
      'The practical upshot: if you boil or steam your broccoli, you can weigh it whenever is convenient and the number holds.',
    ],
    methodHeading: 'Boiled vs. steamed vs. pressure-cooked',
    method: [
      'USDA method figures for broccoli: boiled 100%, steamed 95%, pressure-cooked 104%.',
      'Take 150g of raw broccoli florets. Boiled, they come out at about 150g cooked. Steamed, closer to 150 × 0.95 ≈ 143g, because there is no bath water to take up. Pressure-cooked, about 150 × 1.04 = 156g as the tissue is forced full of water.',
      'All three carry the macros of 150g raw: about 51 calories, 4.2g protein, 9.9g carbs. Because the spread is so small, logging raw broccoli weight for a boiled or steamed portion is accurate to within a rounding error — the calculator mostly matters here for roasted broccoli, which is not in this dataset and loses far more.',
    ],
    buyingHeading: 'How much raw broccoli to buy',
    buying: [
      'A cooked vegetable portion is about 80–120g. Because the yield is ~100%, that is essentially the same raw weight: buy 100–120g of florets per person.',
      'A whole broccoli head is 300–500g, of which the crown is roughly 60–70% and the stalk the rest (edible if peeled). One large head serves three to four as a side. Frozen broccoli is pre-blanched and behaves the same on the scale.',
    ],
    mistakesHeading: 'Common broccoli logging mistakes',
    mistakes: [
      'Assuming boiled broccoli shrinks like other greens and under-logging the portion. It does not — the yield is about 100%.',
      'Applying the boiled/steamed yield to roasted broccoli. Roasting drives off substantial water; a roasted portion can weigh 30–50% less than raw and this dataset does not cover it.',
      'Weighing broccoli with butter, oil or cheese sauce added. Log the plain cooked vegetable and the fat separately.',
    ],
  },

  'spinach': {
    introHeading: 'Why spinach barely loses weight even though the pan looks empty',
    intro: [
      'Spinach is the single most misjudged food on this site. A large pan of raw leaves wilts down to a few forkfuls, so it looks like it must have lost most of its weight. It has not: the USDA yield for boiled spinach is 77%, a loss of only about 23%. 100g of raw leaves is still about 77g cooked.',
      'The reason is that volume and weight are two different things. Raw spinach leaves are mostly air and rigid structure — thin sheets of tissue holding their shape, with lots of space between them. Heat destroys that structure almost instantly: the cell walls go limp, the leaves collapse against each other, and all the air is squeezed out. The volume falls off a cliff. But the water inside the cells is still mostly there, and water is what weighs something.',
      'So the leaves lose their bulk long before they lose their mass. A little cell water does cook out — that is the 23% — but the dramatic shrink you see is air and geometry, not weight.',
      'Method matters more for spinach than for almost any other vegetable. Steaming keeps it at 93%; boiling drops it to 77%; pressure-cooking pushes it down to 68% as the forced heat drives out more cell water.',
    ],
    methodHeading: 'Steamed vs. boiled vs. pressure-cooked',
    method: [
      'USDA method figures for spinach: steamed 93%, boiled 77%, pressure-cooked 68%.',
      'Start with 200g of raw spinach — a large bag, maybe 4–5 litres of loose leaves. Steamed, it comes out to about 200 × 0.93 = 186g. Boiled and squeezed, about 200 × 0.77 = 154g. Pressure-cooked, about 200 × 0.68 = 136g. All of it fits in a small bowl regardless of method.',
      'Each portion carries the macros of 200g raw: about 46 calories, 5.8g protein, 7.2g carbs. Going backwards, 100g of cooked boiled spinach came from 100 ÷ 0.77 ≈ 130g raw — so a "small handful" of cooked spinach can represent a genuinely large serving of leaves.',
    ],
    buyingHeading: 'How much raw spinach to buy',
    buying: [
      'Raw spinach for cooking collapses so much that portions look tiny — plan on 150–200g raw per person for a cooked side, which yields only about 115–155g cooked but represents a big nutritional serving.',
      'A 200g "family" bag serves one generously as a cooked side or two modestly. For a spinach-heavy dish like saag or a filling, buy 250–300g raw per person. Frozen chopped spinach is already blanched and drained — a 250g block is roughly equivalent to 700–800g of raw leaves.',
    ],
    mistakesHeading: 'Common spinach logging mistakes',
    mistakes: [
      'Assuming a ~70% weight loss because the pan looks empty. The real loss is about 23%; the disappearing act is volume, not weight.',
      'Using the boiled yield (77%) for steamed spinach (93%) — that is a 16-point error, larger than for most foods.',
      'Logging squeezed, drained cooked spinach and then not accounting for the water you pressed out. If you wrung it hard, weigh what remains and treat it as a lower raw-equivalent.',
    ],
  },

  'potato': {
    introHeading: 'Why a boiled potato barely shrinks but fries lose almost half',
    intro: [
      'A raw potato is about 79% water locked inside a dense, uniform starch structure with a thin skin. Boiled or steamed, that structure holds the water in remarkably well — the skin and the gelatinising starch both act as barriers — so a boiled potato keeps about 94% of its weight and a steamed one about 99%. Only a little surface water is lost.',
      'The macros are modest and carbohydrate-dominated: about 77 calories, 2g protein and 17.5g carbs per 100g raw. Because boiling loses so little, raw and cooked weights are close enough that a boiled-potato portion can be logged either way without much error.',
      'What changes everything is dry, fatty heat. Baking a potato with an oiled skin drives the yield down to 81%; deep-frying for chips or fries collapses it to about 55%, and hash browns to about 60%. Frying does two things at once — it boils off a large fraction of the water and replaces some of it with absorbed oil, so a fry is both lighter than the raw potato and far more calorie-dense, a double hit the raw-potato macros completely miss.',
      'So the cooking method is not a rounding detail for potato; it is the difference between a 94% yield and a 55% one, and between "just a potato" and "a potato plus a lot of oil."',
    ],
    methodHeading: 'Boiled vs. baked vs. fried',
    method: [
      'USDA method figures for potato: steamed 99%, baked in foil 95%, boiled 94%, baked with oiled skin 81%, hash-browned 60%, French-fried 55%.',
      'Take a 200g raw potato. Boiled, about 200 × 0.94 = 188g. Baked with an oiled skin, about 200 × 0.81 = 162g. Turned into fries, about 200 × 0.55 = 110g — plus whatever oil it soaked up, which the yield figure does not include.',
      'The raw macros for that 200g potato are about 154 calories, 4g protein, 35g carbs. Those hold for the boiled and baked versions. For fries, the potato contribution is right but you must add the frying oil separately — typically 5–10g of fat per 100g of finished fries — or the log will badly understate calories.',
    ],
    buyingHeading: 'How much raw potato to buy',
    buying: [
      'A side portion is 150–250g raw. For mash, buy about 200–250g raw per person (it loses a little in boiling, then you add milk and butter separately). For a baked potato, one 200–300g potato each.',
      'A 2kg bag of potatoes is roughly eight to ten medium potatoes — dinner sides for a family for several nights. For fries, remember you lose almost half the weight: 1kg of raw potato makes only about 550g of fries.',
    ],
    mistakesHeading: 'Common potato logging mistakes',
    mistakes: [
      'Using the boiled yield (94%) for roast potatoes or fries. Oil-roasted potato is about 81% and fries about 55% — and both have added oil on top.',
      'Logging fries as "potato" with no fat added. The oil is often a third or more of a fry\'s calories.',
      'Weighing mash and logging it as plain potato. Mash includes milk, butter or cream — weigh the potato before mashing, or log the additions separately.',
    ],
  },

  'sweet-potato': {
    introHeading: 'Why baked sweet potato loses weight but boiled sweet potato gains it',
    intro: [
      'Sweet potato is wetter and sugarier than a regular potato — about 77% water, 20g of carbohydrate per 100g raw, a good share of it as sugars, plus more soluble fibre. That composition makes it behave differently depending on whether heat is drying it out or water is soaking into it.',
      'Baked, a sweet potato loses about 22% of its weight — a 78% yield. The dry oven heat evaporates surface and near-surface water, the sugars concentrate and caramelise (that sticky, sweet exterior), and the flesh becomes denser. This is why a baked sweet potato tastes so much sweeter than a boiled one: same sugar, less water.',
      'Boiled, it goes the other way and actually gains weight — a 101% yield — because the flesh absorbs some of the cooking water, slightly more than it loses. Steamed sits just under at 98%. So the same raw sweet potato can come out heavier or lighter than it started depending purely on method.',
      'For tracking, that means the method choice flips the sign of the correction: bake and you log less than the raw weight, boil and you log a touch more.',
    ],
    methodHeading: 'Baked vs. boiled vs. steamed',
    method: [
      'USDA method figures for sweet potato: boiled 101%, steamed 98%, baked 78%.',
      'Take a 150g raw sweet potato. Baked, it comes out to about 150 × 0.78 ≈ 117g — noticeably smaller and denser. Boiled, about 150 × 1.01 ≈ 152g. Steamed, about 150 × 0.98 = 147g.',
      'All carry the macros of 150g raw: about 129 calories, 2.4g protein, 30g carbs. So a 117g baked sweet potato and a 152g boiled one from identical raw potatoes have the same calories — the baked one just feels more concentrated. Backwards: a 120g baked portion is 120 ÷ 0.78 ≈ 154g raw.',
    ],
    buyingHeading: 'How much raw sweet potato to buy',
    buying: [
      'A side portion is 150–200g raw. For baked sweet potato, buy one 200–250g potato per person, knowing it will bake down to roughly 155–195g. For mash or boiled cubes, 150–200g raw each is plenty since the weight barely drops.',
      'Sweet potatoes vary wildly in size — a "medium" ranges from 130g to 250g — so weigh rather than counting. A 1kg batch baked yields about 780g of cooked flesh (a little less once you discard the skin).',
    ],
    mistakesHeading: 'Common sweet-potato logging mistakes',
    mistakes: [
      'Assuming it behaves like a regular potato. Baked sweet potato loses about 22% (78% yield); baked regular potato in foil loses only about 5%.',
      'Using the baked yield for boiled sweet potato. Boiled, it gains a little weight (101%), so converting with 78% would understate your portion badly.',
      'Logging sweet potato fries or candied sweet potato as plain. Fries carry absorbed oil; candied versions add butter and sugar — log those separately.',
    ],
  },
};

/**
 * Long-form content by locale. English is the source; es/fr/de/pt/it are full
 * translations that keep every gram and percentage figure identical. A locale
 * that is missing (or missing one food) falls back to English so the page is
 * never left with an empty section.
 */
export const FOOD_LONG_CONTENT: Partial<Record<Locale, Record<string, FoodLongContent>>> = {
  en: EN,
  es: ES,
  fr: FR,
  de: DE,
  pt: PT,
  it: IT,
};

export function getFoodLongContent(
  locale: string,
  foodId: string
): FoodLongContent | undefined {
  const byLocale = FOOD_LONG_CONTENT[locale as Locale] ?? EN;
  return byLocale[foodId] ?? EN[foodId];
}

/**
 * Locales whose food pages carry the full long-form content above (plus
 * translated per-food FAQ sets).
 *
 * Everything downstream keys off this: `FoodContent.astro` renders the long-form
 * sections only for these locales, and the other locales' food pages are
 * `noindex`'d and kept out of the sitemap so the thin templated layout isn't
 * submitted for indexing. Add a locale here once its content is translated.
 */
const FOOD_FULL_CONTENT_LOCALES: ReadonlySet<string> = new Set([
  'en',
  'es',
  'fr',
  'de',
  'pt',
  'it',
]);

/** Whether `locale`'s food pages are complete enough to index. */
export function foodPageHasFullContent(locale: string): boolean {
  return FOOD_FULL_CONTENT_LOCALES.has(locale);
}
