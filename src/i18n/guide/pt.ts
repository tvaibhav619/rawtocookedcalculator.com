import type { GuideContent } from './types';

export const ptGuide: GuideContent = {
  badge: 'Guia de Referência Científica e Nutricional',
  title: 'O Guia Completo de Pesos de Alimentos Crus vs. Cozidos, Dinâmica de Umidade e Precisão Nutricional',
  intro:
    'Quem já preparou uma refeição, usou uma balança de cozinha ou registrou alimentos em um aplicativo fitness sabe que a comida não sai da panela com o mesmo peso que tinha ao sair da geladeira. As proteínas animais encolhem e perdem até um terço da sua massa inicial por evaporação de água e derretimento de gordura, enquanto grãos, arroz, massas e leguminosas absorvem água fervente e duplicam ou triplicam de volume. Esta referência definitiva detalha a termodinâmica dos rendimentos culinários, fórmulas matemáticas universais de conversão, dados oficiais do USDA e métodos práticos para o meal prep e controle preciso de macronutrientes.',

  sec1Title: '1. Física Celular e Química dos Rendimentos Culinários',
  sec1Intro:
    'A discrepância entre o peso do alimento cru e cozido não é nenhum mistério: é uma consequência direta da biologia celular e da termodinâmica. Todo alimento integral é composto por água, proteínas, lipídios, carboidratos, fibras alimentares e minerais. O calor altera profundamente a estrutura física desses componentes, provocando a expulsão ou a absorção de umidade e gordura.',
  sec1ProteinTitle: 'Desnaturação de Proteínas em Carnes e Peixes',
  sec1ProteinText:
    'O tecido muscular animal cru é composto por cerca de 70% a 75% de água em peso, fortemente retida em uma rede de proteínas miofibrilares de miosina e actina. Sob ação do calor:',
  sec1ProteinBullets: [
    'Entre 40°C e 55°C: As proteínas de miosina se desnaturalizam e desenrolam, fazendo com que as fibras musculares encolham em diâmetro transversal.',
    'Entre 60°C e 66°C: O colágeno conjuntivo começa a se contrair longitudinalmente. A água retida nos espaços intercelulares é espremida para fora como uma esponja comprimida.',
    'Acima de 74°C: A actina se desnaturaliza por completo, enrijecendo a fibra e transformando os sucos celulares em vapor. Com isso, carnes cozidas pesam de 15% a 35% menos que cruas.',
  ],
  sec1StarchTitle: 'Gelatinização do Amido em Grãos e Leguminosas',
  sec1StarchText:
    'Amidos secos como arroz branco, arroz integral, aveia, lentilhas e macarrão seco entram na panela desidratados, com menos de 12% de umidade. Em contato com a água fervente:',
  sec1StarchBullets: [
    'Hidratação Capilar: As moléculas de água penetram nos grânulos semicristalinos de amido através de canais microscópicos.',
    'Limiar de Gelatinização (60°C–85°C): As pontes de hidrogênio da amilose e amilopectina se rompem, permitindo aos grânulos absorver grande quantidade de água e inchar.',
    'Multiplicação da Massa: A água fica retida na rede em gel, fazendo os grãos expandirem de 2,2× a 3,5× o peso seco. O arroz cozido é composto por 65% a 70% de água pura absorvida.',
  ],
  sec1VegText:
    'Os vegetais apresentam um terceiro mecanismo. Folhas como o espinafre contêm grande quantidade de água nas suas células. O calor dissolve a pectina estrutural e rompe as bolsas de ar intercelulares. No espinafre, isso causa um colapso de 80% a 90% no volume visual, embora a perda real de massa seja de apenas 23%. Em contrapartida, tubérculos como a batata perdem muito pouco peso (aprox. 6%) quando cozidos inteiros, pois a gelatinização do amido compensa a evaporação.',

  sec2Title: '2. O Sistema Matemático Universal de Conversão',
  sec2Intro:
    'A conversão entre alimentos crus e cozidos apoia-se em um único parâmetro científico: a Porcentagem de Rendimento de Cozimento (Yield %). Estabelecido por décadas de pesquisas laboratoriais do Departamento de Agricultura dos Estados Unidos (USDA), o rendimento expressa a relação entre o peso final cozido comestível e o peso inicial cru:',
  sec2EquationLabel: 'Equação Fundamental de Rendimento',
  sec2Equation: 'Rendimento % = (Peso Cozido ÷ Peso Cru) × 100',
  sec2SubIntro:
    'Com o rendimento em mãos, duas fórmulas matemáticas permitem a conversão exata em qualquer direção:',
  sec2FormulaATitle: 'Fórmula A: Converter Peso Cru em Peso Cozido',
  sec2FormulaADesc:
    'Use esta fórmula ao planejar marmitas, calcular porções a partir de embalagens cruas ou fazer compras:',
  sec2FormulaACode: 'Peso Cozido = Peso Cru × (Rendimento % ÷ 100)',
  sec2FormulaAExampleHtml:
    '<strong>Exemplo passo a passo:</strong> Você tem 250g de peito de frango cru (rendimento USDA = 72%):<br /><code>Cozido = 250g × 0,72 = 180g</code>. Sua porção crua renderá 180g de carne pronta no prato.',
  sec2FormulaBTitle: 'Fórmula B: Converter Peso Cozido em Equivalente Cru',
  sec2FormulaBDesc:
    'Use esta fórmula quando pesar a comida já pronta (ex. sobras na geladeira ou restaurante) e precisar registrar no app fitness:',
  sec2FormulaBCode: 'Equivalente Cru = Peso Cozido ÷ (Rendimento % ÷ 100)',
  sec2FormulaBExampleHtml:
    '<strong>Exemplo passo a passo:</strong> Você serviu 150g de carne moída 80/20 cozida (rendimento USDA = 73%):<br /><code>Cru = 150g ÷ 0,73 = 205,5g</code>. Você consumiu o equivalente nutricional de 205,5g de carne moída crua.',
  sec2ShrinkageNoteHtml:
    '<strong>Entendendo a Perda por Encolhimento:</strong> Em carnes onde a massa diminui, a perda é simplesmente <code>100% − Rendimento %</code>. Um frango com 72% de rendimento sofre <code>100% − 72% = 28%</code> de redução. Em grãos que se expandem acima de 100%, o multiplicador é maior que 1,0 (ex. arroz branco com 300% de rendimento tem fator de expansão de 3,0×).',

  sec3Title: '3. Tabela Mestra de Conversão Culinária (Valores Oficiais USDA)',
  sec3Intro:
    'Abaixo está a tabela comparativa completa para carnes, aves, peixes, grãos, leguminosas e vegetais, baseada no Handbook nº 102 do USDA e na Tabela de Rendimentos de Carnes do USDA:',
  sec3ColFood: 'Alimento',
  sec3ColMethod: 'Método Típico',
  sec3ColYield: 'Rendimento USDA',
  sec3ColRtc: 'Cru→Cozido',
  sec3ColCtr: 'Cozido→Cru',
  sec3ColMoisture: 'Variação de Massa',
  sec3ColNotes: 'Nota Prática',
  tableRows: [
    { food: 'Peito de Frango (Sem pele/osso)', method: 'Forno / Grelha', yieldPct: '72%', rtc: '× 0,72', ctr: '÷ 0,72', moisture: '−28%', notes: '200g cru rende ~144g cozido' },
    { food: 'Sobrecoxa de Frango (Desossada)', method: 'Assada / Frigideira', yieldPct: '74%', rtc: '× 0,74', ctr: '÷ 0,74', moisture: '−26%', notes: 'Retém mais gordura que o peito' },
    { food: 'Asas de Frango (Com osso)', method: 'Forno / Air Fryer', yieldPct: '55%', rtc: '× 0,55', ctr: '÷ 0,55', moisture: '−45%', notes: 'Ossos representam ~40% do peso' },
    { food: 'Carne de Peru Moída (93/7 Magra)', method: 'Frigideira', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: '200g cru rende ~156g cozido' },
    { food: 'Carne Moída Bovina (80/20)', method: 'Frigideira / Grelha', yieldPct: '73%', rtc: '× 0,73', ctr: '÷ 0,73', moisture: '−27%', notes: '200g cru rende ~146g cozido' },
    { food: 'Carne Moída Bovina (90/10 Magra)', method: 'Frigideira', yieldPct: '81%', rtc: '× 0,81', ctr: '÷ 0,81', moisture: '−19%', notes: 'Carne magra retém mais peso' },
    { food: 'Filé / Alcatra Bovina', method: 'Frigideira ao Ponto', yieldPct: '75%', rtc: '× 0,75', ctr: '÷ 0,75', moisture: '−25%', notes: 'Cozido a 63°C no centro' },
    { food: 'Contrafilé / Ribeye', method: 'Grelha / Frigideira', yieldPct: '71%', rtc: '× 0,71', ctr: '÷ 0,71', moisture: '−29%', notes: 'Gordura marmorizada derrete na panela' },
    { food: 'Bisteca / Lombo Suíno', method: 'Frigideira / Forno', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: 'Cozido a 63°C no centro' },
    { food: 'Filé Mignon Suíno', method: 'Assado', yieldPct: '77%', rtc: '× 0,77', ctr: '÷ 0,77', moisture: '−23%', notes: 'Corte magro e macio' },
    { food: 'Bacon em Fatias', method: 'Frigideira', yieldPct: '33%', rtc: '× 0,33', ctr: '÷ 0,33', moisture: '−67%', notes: 'Perda maciça de gordura líquida' },
    { food: 'Filé de Salmão do Atlântico', method: 'Forno / Frigideira', yieldPct: '85%', rtc: '× 0,85', ctr: '÷ 0,85', moisture: '−15%', notes: 'Ômega-3 permanece na carne' },
    { food: 'Peixe Branco (Bacalhau / Tilápia)', method: 'Forno / Vapor', yieldPct: '80%', rtc: '× 0,80', ctr: '÷ 0,80', moisture: '−20%', notes: 'Carne delicada e magra' },
    { food: 'Camarão Cru Descascado', method: 'Salteado / Cozido', yieldPct: '75%', rtc: '× 0,75', ctr: '÷ 0,75', moisture: '−25%', notes: '200g cru rende ~150g cozido' },
    { food: 'Atum em Lata ao Natural', method: 'Escorrido', yieldPct: '68%', rtc: '× 0,68', ctr: '÷ 0,68', moisture: '−32%', notes: 'Lata de 142g rende ~97g drenado' },
    { food: 'Arroz Branco (Longo / Agulhinha)', method: 'Cozido / Vapor', yieldPct: '300%', rtc: '× 3,00', ctr: '÷ 3,00', moisture: '+200%', notes: '100g cru rende 300g cozido' },
    { food: 'Arroz Integral', method: 'Cozido', yieldPct: '270%', rtc: '× 2,70', ctr: '÷ 2,70', moisture: '+170%', notes: 'Casca limita a absorção de água' },
    { food: 'Macarrão Seco (Espaguete)', method: 'Cozido Al Dente', yieldPct: '225%', rtc: '× 2,25', ctr: '÷ 2,25', moisture: '+125%', notes: '100g seco rende ~225g cozido' },
    { food: 'Aveia em Flocos', method: 'Cozida em Água', yieldPct: '300%', rtc: '× 3,00', ctr: '÷ 3,00', moisture: '+200%', notes: '50g cru rende 150g de mingau' },
    { food: 'Aveia Cortada (Steel Cut)', method: 'Fogo Baixo', yieldPct: '350%', rtc: '× 3,50', ctr: '÷ 3,50', moisture: '+250%', notes: 'Grão denso absorve mais água' },
    { food: 'Quinoa Seca', method: 'Cozida', yieldPct: '310%', rtc: '× 3,10', ctr: '÷ 3,10', moisture: '+210%', notes: '100g seco rende 310g cozido' },
    { food: 'Lentilhas Secas', method: 'Cozidas', yieldPct: '290%', rtc: '× 2,90', ctr: '÷ 2,90', moisture: '+190%', notes: '100g seco rende 290g cozido' },
    { food: 'Feijão Preto Seco', method: 'Demolhado e Cozido', yieldPct: '240%', rtc: '× 2,40', ctr: '÷ 2,40', moisture: '+140%', notes: 'Expande 2,4× ao cozinhar' },
    { food: 'Espinafre Cru', method: 'Vapor / Refogado', yieldPct: '77%', rtc: '× 0,77', ctr: '÷ 0,77', moisture: '−23%', notes: 'Perde 80% volume, 23% massa' },
    { food: 'Brócolis em Floretes', method: 'Vapor / Cozido', yieldPct: '100%', rtc: '× 1,00', ctr: '÷ 1,00', moisture: '0%', notes: 'Água superficial equilibra perda' },
    { food: 'Batata Inteira', method: 'Cozida / Forno', yieldPct: '94%', rtc: '× 0,94', ctr: '÷ 0,94', moisture: '−6%', notes: 'Casca retém o vapor interior' },
    { food: 'Batata-Doce em Cubos', method: 'Assada no Forno', yieldPct: '78%', rtc: '× 0,78', ctr: '÷ 0,78', moisture: '−22%', notes: 'O assado concentra os açúcares' },
  ],

  sec4Title: '4. Conservação de Macronutrientes e Armadilhas de Contagem de Calorias',
  sec4Intro:
    'Um dos erros mais comuns no mundo fitness é achar que cozinhar diminui ou elimina as calorias dos alimentos. A física prova o contrário: a Lei da Conservação da Massa demonstra que a matéria não desaparece no ar.',
  sec4CardTitle: 'O que Realmente Escapa da Panela?',
  sec4CardText:
    'Quando o frango chia na frigideira, o vapor branco que sobe é pura água (H2O). A água contém exatamente zero calorias, zero gramas de proteína, zero de carboidratos e zero de gordura. Os aminoácidos das proteínas musculares não evaporam.',
  sec4RawLabel: 'Peito de Frango Cru (100g):',
  sec4RawCals: '120 Calorias',
  sec4RawProtein: '22,5g Proteína',
  sec4RawFat: '2,6g Gordura • 0g Carboidratos',
  sec4CookedLabel: 'Peso Cozido Final (~72g):',
  sec4CookedCals: '120 Calorias (Inalterado)',
  sec4CookedProtein: '22,5g Proteína (Inalterado)',
  sec4CookedFat: '2,6g Gordura • 0g Carboidratos',
  sec4CardSummaryHtml:
    'Como 28g de água sem calorias evaporaram, a carne cozida ficou mais concentrada em nutrientes por grama: ela entrega cerca de <strong>31,25g de proteína por 100g cozidos</strong>, contra <strong>22,5g por 100g crus</strong>.',
  sec4TrapTitle: 'A Armadilha Fatal nos Aplicativos Fitness',
  sec4TrapP1:
    'Aplicativos como MyFitnessPal, MacroFactor ou Lose It! usam bancos de dados em que alimentos inteiros estão cadastrados no peso cru por padrão. Ao cozinhar frango, pesar 150g de carne cozida no prato e registrar "Peito de Frango" cru, comete-se um erro drástico.',
  sec4TrapP2Html:
    'Na realidade, 150g de frango cozido vieram de <code>150g ÷ 0,72 = 208g</code> de frango cru. A pessoa comeu 250 calorias e 46,8g de proteína, mas registrou apenas 180 calorias e 33,8g de proteína. Em apenas uma refeição, deixou de contar <strong>70 calorias e 13 gramas de proteína</strong>. No fim do dia, isso gera um erro de 200 a 300 calorias não registradas que paralisa a perda de gordura!',
  sec4TrapP3:
    'Com arroz ocorre o inverso: comer 200g de arroz branco cozido e registrar como arroz cru faz o app marcar 730 calorias em vez de 245 calorias, gerando um excesso fantasma de quase 500 calorias.',

  sec5Title: '5. Meal Prep e a Divisão de Panelas Grandes',
  sec5Intro:
    'Ao cozinhar para a semana inteira, é impossível pesar cada ingrediente cru por marmita. Se você refoga 1,5 kg de frango cru com 400g de arroz seco e legumes na mesma panela, como dividir tudo com exatidão matemática?',
  sec5Strat1Title: 'Estratégia 1: Método da Tara Total Cozida',
  sec5Strat1Desc: 'Ideal para porções de tamanhos variados:',
  sec5Strat1StepsHtml: [
    '<strong>Pesar a Panela Vazia:</strong> Pese a panela limpa antes de cozinhar (ex. 1.000g).',
    '<strong>Somar os Macros Crus:</strong> Some todas as calorias e proteínas dos ingredientes crus (ex. 2.400 kcal, 200g proteína).',
    '<strong>Pesar a Panela Cheia:</strong> Pese a panela pronta após o cozimento (ex. 3.000g) e desconte a tara: <code>3.000g − 1.000g = 2.000g líquido cozido</code>.',
    '<strong>Calcular Densidade por Grama:</strong> Divida os macros crus pelo peso cozido: <code>2.400 kcal ÷ 2.000g = 1,2 kcal/g</code>.',
    '<strong>Servir e Registrar:</strong> Sirva qualquer porção (ex. 300g): <code>300g × 1,2 = 360 kcal</code>.',
  ],
  sec5Strat2Title: 'Estratégia 2: Divisão Igualitária em Potes',
  sec5Strat2Desc:
    'Se for preparar 5 refeições iguais para si mesmo, distribua a receita de forma uniforme em 5 potes. Registre 1/5 (20%) dos ingredientes crus totais por dia. A média semanal será 100% precisa.',

  sec6Title: '6. Métodos de Cozimento e Temperatura Interna',
  sec6Intro: 'O método de calor e o ponto de cozimento afetam diretamente a retenção de água:',
  sec6DryTitle: 'Air Fryer e Grelha',
  sec6DryTextHtml:
    'O ar em alta velocidade ou a chama aberta aceleram a evaporação, baixando o rendimento do frango para <strong>65% a 68%</strong>.',
  sec6MoistTitle: 'Cozimento Lento e Ensopados',
  sec6MoistTextHtml:
    'A tampa prende o vapor e mantém os líquidos no molho, assegurando rendimentos altos de <strong>76% a 79%</strong>.',
  sec6SousVideTitle: 'Precisão Sous-Vide',
  sec6SousVideTextHtml:
    'A embalagem a vácuo impede qualquer evaporação para o ambiente, obtendo os maiores rendimentos: <strong>81% a 85%</strong>.',
  sec6DonenessTitle: 'Ponto da Carne Bovina e Rendimento',
  donenessRows: [
    { name: 'Malpassada (52°C)', yield: '88–90% Rendimento' },
    { name: 'Ao Ponto para Mal (57°C)', yield: '80–84% Rendimiento' },
    { name: 'Ao Ponto (63°C)', yield: '74–78% Rendimento' },
    { name: 'Bem Passada (74°C+)', yield: '62–66% Rendimento' },
  ],

  sec7Title: '7. Ossos, Pele e Injeção Industrial de Água',
  sec7BoneTitle: 'Carnes Com Osso vs. Desossadas',
  sec7BoneText:
    'Ossos não possuem calorias comestíveis. Médias de peso ósseo: peito com osso (20-25%), asas de frango (45-50%), bisteca/T-bone (15-20%), costelinha suína (35-40%). Pese a carne com osso antes de comer, pese os ossos limpos depois e subtraia para encontrar a massa comestível real.',
  sec7InjectionTitle: 'Injeção Industrial de Água em Aves',
  sec7InjectionText:
    'Muitos frangos de supermercado contêm até 15% de salmoura injetada. Ao fritar, essa água sai rapidamente, elevando o encolhimento para até 35%. Carnes resfriadas a ar e sem aditivos garantem conversões compatíveis com o USDA.',

  sec8Title: '8. Integridade dos Dados Científicos: Padrão USDA',
  sec8Text:
    'Todos os valores de rendimento deste conversor têm como base pesquisas do Serviço de Pesquisa Agrícola do USDA (ARS), em especial a Tabela de Rendimentos de Carnes, o Handbook nº 102 e o USDA FoodData Central. Dados obtidos em laboratório que superam estimativas imprecisas de apps colaborativos.',

  sec9Title: '9. Melhores Práticas na Cozinha',
  sec9TipsHtml: [
    '<strong>Use Balança Digital:</strong> Precisão de 1g com botão de tara instantâneo.',
    '<strong>Pese Gorduras de Cozimento Separadamente:</strong> Anote óleos e manteiga separadamente do rendimento da carne.',
    '<strong>Mantenha a Consistência:</strong> Adotar o mesmo método semana após semana é o segredo para monitorar resultados corporais reais.',
  ],

  footerTeam: 'Equipe Editorial e Científica: Raw to Cooked Calculator',
  footerSource: 'Baseado em relatórios e manuais oficiais do USDA e FoodData Central. Atualizado em Outubro de 2026.',
  footerMethodology: 'Ver Metodologia Completa →',
  footerAbout: 'Sobre Nós',
};
