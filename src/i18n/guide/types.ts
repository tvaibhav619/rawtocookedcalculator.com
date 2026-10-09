export interface TableRow {
  food: string;
  method: string;
  yieldPct: string;
  rtc: string;
  ctr: string;
  moisture: string;
  notes: string;
}

export interface DonenessRow {
  name: string;
  yield: string;
}

export interface GuideContent {
  badge: string;
  title: string;
  intro: string;

  // Sec 1: Physics & Chemistry
  sec1Title: string;
  sec1Intro: string;
  sec1ProteinTitle: string;
  sec1ProteinText: string;
  sec1ProteinBullets: string[];
  sec1StarchTitle: string;
  sec1StarchText: string;
  sec1StarchBullets: string[];
  sec1VegText: string;

  // Sec 2: Math
  sec2Title: string;
  sec2Intro: string;
  sec2EquationLabel: string;
  sec2Equation: string;
  sec2SubIntro: string;
  sec2FormulaATitle: string;
  sec2FormulaADesc: string;
  sec2FormulaACode: string;
  sec2FormulaAExampleHtml: string;
  sec2FormulaBTitle: string;
  sec2FormulaBDesc: string;
  sec2FormulaBCode: string;
  sec2FormulaBExampleHtml: string;
  sec2ShrinkageNoteHtml: string;

  // Sec 3: Table
  sec3Title: string;
  sec3Intro: string;
  sec3ColFood: string;
  sec3ColMethod: string;
  sec3ColYield: string;
  sec3ColRtc: string;
  sec3ColCtr: string;
  sec3ColMoisture: string;
  sec3ColNotes: string;
  tableRows: TableRow[];

  // Sec 4: Macros & Tracking
  sec4Title: string;
  sec4Intro: string;
  sec4CardTitle: string;
  sec4CardText: string;
  sec4RawLabel: string;
  sec4RawCals: string;
  sec4RawProtein: string;
  sec4RawFat: string;
  sec4CookedLabel: string;
  sec4CookedCals: string;
  sec4CookedProtein: string;
  sec4CookedFat: string;
  sec4CardSummaryHtml: string;
  sec4TrapTitle: string;
  sec4TrapP1: string;
  sec4TrapP2Html: string;
  sec4TrapP3: string;

  // Sec 5: Batch Cooking
  sec5Title: string;
  sec5Intro: string;
  sec5Strat1Title: string;
  sec5Strat1Desc: string;
  sec5Strat1StepsHtml: string[];
  sec5Strat2Title: string;
  sec5Strat2Desc: string;

  // Sec 6: Cooking Methods
  sec6Title: string;
  sec6Intro: string;
  sec6DryTitle: string;
  sec6DryTextHtml: string;
  sec6MoistTitle: string;
  sec6MoistTextHtml: string;
  sec6SousVideTitle: string;
  sec6SousVideTextHtml: string;
  sec6DonenessTitle: string;
  donenessRows: DonenessRow[];

  // Sec 7: Special Considerations
  sec7Title: string;
  sec7BoneTitle: string;
  sec7BoneText: string;
  sec7InjectionTitle: string;
  sec7InjectionText: string;

  // Sec 8: USDA Data Integrity
  sec8Title: string;
  sec8Text: string;

  // Sec 9: Kitchen Workflow
  sec9Title: string;
  sec9TipsHtml: string[];

  // Footer
  footerTeam: string;
  footerSource: string;
  footerMethodology: string;
  footerAbout: string;
}
