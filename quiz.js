// ============================================================
// 政治経済〈政治編〉一問一答 問題データ (第1講〜第13講)
// 共通テスト形式：四択・二択・正誤問題
//
// このファイルを編集することで問題の追加・修正ができます。
// index.html から <script src="quiz-data.js"></script> で読み込まれます。
//
// データ構造:
//   LECTURE_TITLES: { "1": "第1講 民主政治", ... }
//   QUIZ_DATA: {
//     "1": {
//       title: "第1講 民主政治",
//       items: [
//         {
//           type: "4choice" | "2choice",
//           prompt: "問題文",
//           choices: ["選択肢1", "選択肢2", "..."],
//           correct: 0,              // 正解のインデックス(0始まり)
//           answer: "正解の文字列",
//           category: "person|right|law|treaty|case|organization|cabinet|procedure|number|term"
//         },
//         {
//           type: "truefalse",
//           statement: "正誤を判定する文",
//           choices: ["正しい（○）", "誤り（×）"],
//           correct: 0,               // 0=正しい, 1=誤り
//           answer: "常に正しい文（解説表示用）",
//           category: "..."
//         }
//       ]
//     },
//     ...
//   }
// ============================================================

window.LECTURE_TITLES = {
  "1": "第1講 民主政治",
  "2": "第2講 政治体制と憲法",
  "3": "第3講 日本の憲法",
  "4": "第4講 基本的人権の尊重",
  "5": "第5講 新しい人権と公害・環境問題および資源・エネルギー問題",
  "6": "第6講 平和主義",
  "7": "第7講 国会（立法権）",
  "8": "第8講 内閣（行政権）",
  "9": "第9講 裁判所（司法権）",
  "10": "第10講 地方自治",
  "11": "第11講 政党政治",
  "12": "第12講 選挙と政治参加",
  "13": "第13講 国際政治"
};

window.QUIZ_DATA = {
  "1": {
    "title": "第1講 民主政治",
    "items": [
      {
        "type": "4choice",
        "prompt": "「人は政治的（ポリス的・社会的）動物である」と述べた古代ギリシャの哲学者は？",
        "choices": [
          "ムッソリーニ",
          "ブラクトン",
          "ロック",
          "アリストテレス"
        ],
        "correct": 3,
        "answer": "アリストテレス",
        "category": "person"
      },
      {
        "type": "truefalse",
        "statement": "矛盾や対立を調整し、社会秩序を維持・統制する強制的な力を法的安定性という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "矛盾や対立を調整し、社会秩序を維持・統制する強制的な力を政治権力という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "一定の領土内で強制力（国家権力・政治権力）を合法的に独占しているものを何というか？",
        "choices": [
          "議会制民主主義（代議制）",
          "国家"
        ],
        "correct": 1,
        "answer": "国家",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "国家の三要素のうち、領土・領海・領空からなるものは？",
        "choices": [
          "ゲティスバーグ演説",
          "議会制民主主義（代議制）",
          "領域",
          "プロイセン（ドイツ）"
        ],
        "correct": 2,
        "answer": "領域",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "国家の三要素のうち、領域に住む人間を何というか？",
        "choices": [
          "市民革命（ブルジョア革命）",
          "国民",
          "現代国家",
          "普通・平等・直接・秘密"
        ],
        "correct": 1,
        "answer": "国民",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "国家の三要素のうち、領域と国民に対して排他的・独占的に支配する権力を社会権という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国家の三要素のうち、領域と国民に対して排他的・独占的に支配する権力を主権という。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "外部勢力から干渉を受けず、内部勢力にも制約されない国家を何というか？",
        "choices": [
          "主権国家",
          "マグナ・カルタ（大憲章）"
        ],
        "correct": 0,
        "answer": "主権国家",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "絶対王政を支持する王権神授説を唱え、16世紀に『国家論』を著したフランスの思想家は？",
        "choices": [
          "ロック",
          "ボーダン",
          "モンテスキュー",
          "エドワード=コーク（エドワード=クック）"
        ],
        "correct": 1,
        "answer": "ボーダン",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "ボーダンが主権について初めて体系的に論じた著書は？",
        "choices": [
          "国際人権規約",
          "『法の精神』",
          "『国家論』",
          "直接民主制"
        ],
        "correct": 2,
        "answer": "『国家論』",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "18〜19世紀の、市民社会・立法国家・小さな政府を特徴とする国家を民主政治（デモクラシー）という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "18〜19世紀の、市民社会・立法国家・小さな政府を特徴とする国家を近代国家という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "19世紀にラッサール（独）が自由主義国家を批判するために用いた言葉は？",
        "choices": [
          "夜警国家（消極国家）",
          "チェック＆バランス"
        ],
        "correct": 0,
        "answer": "夜警国家（消極国家）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "19世紀末〜21世紀の、大衆社会・行政国家・大きな政府を特徴とする国家を何というか？",
        "choices": [
          "現代国家",
          "福祉国家",
          "清教徒（ピューリタン）革命",
          "間接民主制"
        ],
        "correct": 0,
        "answer": "現代国家",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "現代国家の特徴で、積極国家ともいわれる国家を何というか？",
        "choices": [
          "『法の精神』",
          "地方分権化の推進",
          "現代国家",
          "福祉国家"
        ],
        "correct": 3,
        "answer": "福祉国家",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "「支配の3類型」を提唱したドイツの社会学者はエドワード=コーク（エドワード=クック）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "「支配の3類型」を提唱したドイツの社会学者はマックス=ウェーバーである。",
        "category": "person"
      },
      {
        "type": "2choice",
        "prompt": "支配の3類型のうち、慣習にもとづく支配を何というか？",
        "choices": [
          "伝統的支配",
          "『法の精神』"
        ],
        "correct": 0,
        "answer": "伝統的支配",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "支配の3類型のうち、指導者の資質にもとづく支配を何というか？",
        "choices": [
          "カリスマ的支配",
          "政治権力",
          "少数意見の尊重",
          "夜警国家（消極国家）"
        ],
        "correct": 0,
        "answer": "カリスマ的支配",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "マックス=ウェーバーが最も正統性をもつと主張した支配は？",
        "choices": [
          "合法的支配",
          "ファシズム",
          "法の支配",
          "コモン・ロー"
        ],
        "correct": 0,
        "answer": "合法的支配",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "現代の国際社会で主権の最高性・独立性が弱まっている状況を福祉国家という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "現代の国際社会で主権の最高性・独立性が弱まっている状況を主権国家の限界という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "地方自治体が担う政治の役割が大きくなっていることを何というか？",
        "choices": [
          "地方分権化の推進",
          "普通・平等・直接・秘密"
        ],
        "correct": 0,
        "answer": "地方分権化の推進",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "国家が一定の手続きにより制定した法を何というか？",
        "choices": [
          "法律",
          "実定法",
          "アメリカ合衆国憲法",
          "社会法"
        ],
        "correct": 1,
        "answer": "実定法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "法や正義が被治者だけでなく権力者も拘束するという考え方を何というか？",
        "choices": [
          "主権国家",
          "法的安定性",
          "フランス革命",
          "法の支配"
        ],
        "correct": 3,
        "answer": "法の支配",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "「法の支配」は中世のファシズムで成立した。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "「法の支配」は中世のイギリスで成立した。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "憲法は権力を縛るためにあるという「法の支配」と密接な考え方は？",
        "choices": [
          "マグナ・カルタ（大憲章）",
          "立憲主義"
        ],
        "correct": 1,
        "answer": "立憲主義",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1215年にイギリスで貴族が「法の支配」を宣言した文書は？",
        "choices": [
          "バージニア権利章典",
          "伝統的支配",
          "マグナ・カルタ（大憲章）",
          "市民革命（ブルジョア革命）"
        ],
        "correct": 2,
        "answer": "マグナ・カルタ（大憲章）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "中世以来「法の支配」を発展させた背景にある普通法を何というか？",
        "choices": [
          "議会制民主主義（代議制）",
          "コモン・ロー",
          "普通・平等・直接・秘密",
          "マグナ・カルタ（大憲章）"
        ],
        "correct": 1,
        "answer": "コモン・ロー",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "「国王といえども神と法の下にある」と述べた13世紀の裁判官はモンテスキューである。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "「国王といえども神と法の下にある」と述べた13世紀の裁判官はブラクトンである。",
        "category": "person"
      },
      {
        "type": "2choice",
        "prompt": "17世紀前半にブラクトンの言葉を引用し、絶対君主ジェームズ1世の「人の支配」をいさめたイギリス人は？",
        "choices": [
          "ブラクトン",
          "エドワード=コーク（エドワード=クック）"
        ],
        "correct": 1,
        "answer": "エドワード=コーク（エドワード=クック）",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "議会が制定する法を何というか？",
        "choices": [
          "実定法",
          "法律",
          "アメリカ合衆国憲法",
          "公法"
        ],
        "correct": 1,
        "answer": "法律",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "国家と国民の関係を規律し、国家権力の発動にかかわる法を何というか？",
        "choices": [
          "実定法",
          "公法",
          "法律",
          "国際慣習法"
        ],
        "correct": 1,
        "answer": "公法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "国民どうしの関係を規律する法を法律という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国民どうしの関係を規律する法を私法という。",
        "category": "law"
      },
      {
        "type": "2choice",
        "prompt": "福祉や平等の観点から私法の領域に干渉・調整する法を何というか？",
        "choices": [
          "社会法",
          "ワイマール憲法"
        ],
        "correct": 0,
        "answer": "社会法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "国家間の合意にもとづく国際法を何というか？",
        "choices": [
          "条約",
          "アメリカ独立宣言",
          "世界人権宣言",
          "フランス人権宣言"
        ],
        "correct": 0,
        "answer": "条約",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "法として定められていなくても効力が与えられる国際法を何というか？",
        "choices": [
          "ワイマール憲法",
          "実定法",
          "国際慣習法",
          "社会法"
        ],
        "correct": 2,
        "answer": "国際慣習法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "「法の支配」に対し、議会制定の法律にもとづく行政という形式面を重視する考え方を市民革命（ブルジョア革命）という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "「法の支配」に対し、議会制定の法律にもとづく行政という形式面を重視する考え方を法治主義という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "法治主義は19世紀のどこの国で発展したか？",
        "choices": [
          "一般意志",
          "プロイセン（ドイツ）"
        ],
        "correct": 1,
        "answer": "プロイセン（ドイツ）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "議会制定法にもとづく行政の行使を何というか？",
        "choices": [
          "チェック＆バランス",
          "伝統的支配",
          "主権国家",
          "法治行政"
        ],
        "correct": 3,
        "answer": "法治行政",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "法があらゆる人に一律の基準で当てはめられる性質を何というか？",
        "choices": [
          "法的安定性",
          "近代国家",
          "立憲主義",
          "ロシア革命"
        ],
        "correct": 0,
        "answer": "法的安定性",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "民衆の支配・国民主権の政治制度や思想を福祉国家という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "民衆の支配・国民主権の政治制度や思想を民主政治（デモクラシー）という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "経済力をもった商工業者からなる新興市民階級を何というか？",
        "choices": [
          "夜警国家（消極国家）",
          "ブルジョアジー"
        ],
        "correct": 1,
        "answer": "ブルジョアジー",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "ブルジョアジーと絶対王政の対立から生じた革命を何というか？",
        "choices": [
          "地方分権化の推進",
          "市民革命（ブルジョア革命）",
          "現代国家",
          "名誉革命"
        ],
        "correct": 1,
        "answer": "市民革命（ブルジョア革命）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1642年に起きたイギリスの革命は？",
        "choices": [
          "ファシズム",
          "夜警国家（消極国家）",
          "社会契約説",
          "清教徒（ピューリタン）革命"
        ],
        "correct": 3,
        "answer": "清教徒（ピューリタン）革命",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1688年に起きたイギリスの無血革命はイギリスである。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1688年に起きたイギリスの無血革命は名誉革命である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1776年にアメリカで発表された文書は？",
        "choices": [
          "アメリカ独立宣言",
          "世界人権宣言"
        ],
        "correct": 0,
        "answer": "アメリカ独立宣言",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "1789年に起きたフランスの革命は？",
        "choices": [
          "プロイセン（ドイツ）",
          "ニュージーランド",
          "フランス革命",
          "ブルジョアジー"
        ],
        "correct": 2,
        "answer": "フランス革命",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "社会と国家の成立根拠を、自然権をもつ個人の契約に求めた思想を何というか？",
        "choices": [
          "直接民主制",
          "マグナ・カルタ（大憲章）",
          "社会契約説",
          "イギリス"
        ],
        "correct": 2,
        "answer": "社会契約説",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "自然法によって承認されている権利を人民主権という（＝天賦人権）。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "自然法によって承認されている権利を自然権という（＝天賦人権）。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "清教徒革命期に『リヴァイアサン』を著したイギリスの思想家は？",
        "choices": [
          "ヒトラー",
          "ホッブズ"
        ],
        "correct": 1,
        "answer": "ホッブズ",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "ホッブズが自然状態で起こると述べた闘争状態を何というか？",
        "choices": [
          "万人の万人に対する闘争",
          "権利章典",
          "法の支配",
          "普通・平等・直接・秘密"
        ],
        "correct": 0,
        "answer": "万人の万人に対する闘争",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "名誉革命期に『統治二論（市民政府二論）』を著したイギリスの思想家は？",
        "choices": [
          "リンカン",
          "ロック",
          "マックス=ウェーバー",
          "レーニン"
        ],
        "correct": 1,
        "answer": "ロック",
        "category": "person"
      },
      {
        "type": "truefalse",
        "statement": "ロックが認めた、政府に対する人民の権利を社会権という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "ロックが認めた、政府に対する人民の権利を抵抗権・革命権という。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "ロックが唱えた、代表を通じて政治を行う制度は？",
        "choices": [
          "法的安定性",
          "間接民主制"
        ],
        "correct": 1,
        "answer": "間接民主制",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "フランス革命前夜に『社会契約論』を著したフランスの思想家は？",
        "choices": [
          "ルソー",
          "ムッソリーニ",
          "アリストテレス",
          "ホッブズ"
        ],
        "correct": 0,
        "answer": "ルソー",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "ルソーが唱えた、共同体共通の利益を何というか？",
        "choices": [
          "チェック＆バランス",
          "法の支配",
          "少数意見の尊重",
          "一般意志"
        ],
        "correct": 3,
        "answer": "一般意志",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "ルソーが唱えた、人民自身が主権をもつという考え方は自然権である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "ルソーが唱えた、人民自身が主権をもつという考え方は人民主権である。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "ルソーが唱えた、人民が直接政治に参加する制度は？",
        "choices": [
          "直接民主制",
          "一般意志"
        ],
        "correct": 0,
        "answer": "直接民主制",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "「人民の、人民による、人民のための政治」と述べたアメリカ大統領は？",
        "choices": [
          "リンカン",
          "スターリン",
          "レーニン",
          "ロック"
        ],
        "correct": 0,
        "answer": "リンカン",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "リンカンが1863年に行った演説を何というか？",
        "choices": [
          "法の支配",
          "法治行政",
          "ゲティスバーグ演説",
          "普通選挙"
        ],
        "correct": 2,
        "answer": "ゲティスバーグ演説",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "『統治二論』で立法権と執行権・同盟権の分立を提唱したのはムッソリーニである。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "『統治二論』で立法権と執行権・同盟権の分立を提唱したのはロックである。",
        "category": "person"
      },
      {
        "type": "2choice",
        "prompt": "『法の精神』で三権分立を提唱したフランスの思想家は？",
        "choices": [
          "ホッブズ",
          "モンテスキュー"
        ],
        "correct": 1,
        "answer": "モンテスキュー",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "モンテスキューが三権分立を提唱した著書は？",
        "choices": [
          "国家",
          "少数意見の尊重",
          "『法の精神』",
          "マグナ・カルタ（大憲章）"
        ],
        "correct": 2,
        "answer": "『法の精神』",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "三権相互の抑制と均衡を何というか？",
        "choices": [
          "ゲティスバーグ演説",
          "チェック＆バランス",
          "領域",
          "ファシズム"
        ],
        "correct": 1,
        "answer": "チェック＆バランス",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "モンテスキューの思想と人民主権を結び付けた1787年制定の憲法は私法である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "モンテスキューの思想と人民主権を結び付けた1787年制定の憲法はアメリカ合衆国憲法である。",
        "category": "law"
      },
      {
        "type": "2choice",
        "prompt": "間接民主制（代表民主制）を具体化した制度を何というか？",
        "choices": [
          "少数意見の尊重",
          "議会制民主主義（代議制）"
        ],
        "correct": 1,
        "answer": "議会制民主主義（代議制）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "多数決の際にも軽視されてはならない原則は？",
        "choices": [
          "清教徒（ピューリタン）革命",
          "イギリス",
          "国家",
          "少数意見の尊重"
        ],
        "correct": 3,
        "answer": "少数意見の尊重",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1689年にイギリスで議会の立法権を確立した文書は？",
        "choices": [
          "近代国家",
          "権利章典",
          "万人の万人に対する闘争",
          "国民"
        ],
        "correct": 1,
        "answer": "権利章典",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1776年にアメリカで自然権を成文化した文書は議会制民主主義（代議制）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1776年にアメリカで自然権を成文化した文書はバージニア権利章典である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1787年に制定されたアメリカの憲法は？",
        "choices": [
          "国際慣習法",
          "アメリカ合衆国憲法"
        ],
        "correct": 1,
        "answer": "アメリカ合衆国憲法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "1789年にフランスで発表された人権宣言は？",
        "choices": [
          "世界人権宣言",
          "フランス人権宣言",
          "条約",
          "アメリカ独立宣言"
        ],
        "correct": 1,
        "answer": "フランス人権宣言",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "1919年にドイツで制定され、社会権を初めて規定した憲法は？",
        "choices": [
          "アメリカ合衆国憲法",
          "ワイマール憲法",
          "公法",
          "国際慣習法"
        ],
        "correct": 1,
        "answer": "ワイマール憲法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "1948年に国連で採択された、法的拘束力のない人権宣言は条約である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1948年に国連で採択された、法的拘束力のない人権宣言は世界人権宣言である。",
        "category": "treaty"
      },
      {
        "type": "2choice",
        "prompt": "1966年に国連で採択された、法的拘束力のある人権規約は？",
        "choices": [
          "大衆民主主義（マス・デモクラシー）",
          "国際人権規約"
        ],
        "correct": 1,
        "answer": "国際人権規約",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "名望家による制限選挙から移行した選挙制度を何というか？",
        "choices": [
          "主権国家",
          "領域",
          "普通選挙",
          "法の支配"
        ],
        "correct": 2,
        "answer": "普通選挙",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "選挙の四原則を答えよ。",
        "choices": [
          "主権国家",
          "普通・平等・直接・秘密",
          "法的安定性",
          "合法的支配"
        ],
        "correct": 1,
        "answer": "普通・平等・直接・秘密",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "世界で最初に女性参政権が認められた国は（1893年）はマグナ・カルタ（大憲章）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "世界で最初に女性参政権が認められた国は（1893年）はニュージーランドである。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "ワイマール憲法（1919年）で登場した、生存権を中心とする権利は？",
        "choices": [
          "人民主権",
          "社会権"
        ],
        "correct": 1,
        "answer": "社会権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "20世紀に大衆を基盤として現出した政治を何というか？",
        "choices": [
          "立憲主義",
          "地方分権化の推進",
          "大衆民主主義（マス・デモクラシー）",
          "カリスマ的支配"
        ],
        "correct": 2,
        "answer": "大衆民主主義（マス・デモクラシー）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "世界初の社会主義革命を何というか（1917年〜）？",
        "choices": [
          "近代国家",
          "チェック＆バランス",
          "ロシア革命",
          "ニュージーランド"
        ],
        "correct": 2,
        "answer": "ロシア革命",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "ロシア革命を主導した人物はムッソリーニである。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "ロシア革命を主導した人物はレーニンである。",
        "category": "person"
      },
      {
        "type": "2choice",
        "prompt": "1922年に成立した世界初の社会主義政権は？",
        "choices": [
          "ソ連",
          "立憲主義"
        ],
        "correct": 0,
        "answer": "ソ連",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "ソ連で左翼的全体主義の独裁政治を行った人物は？",
        "choices": [
          "スターリン",
          "ホッブズ",
          "ブラクトン",
          "ムッソリーニ"
        ],
        "correct": 0,
        "answer": "スターリン",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "国家が個人を抑圧する体制を何というか？",
        "choices": [
          "全体主義",
          "清教徒（ピューリタン）革命",
          "普通・平等・直接・秘密",
          "ロシア革命"
        ],
        "correct": 0,
        "answer": "全体主義",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "イタリアでファシスト党を率いた人物はホッブズである。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "イタリアでファシスト党を率いた人物はムッソリーニである。",
        "category": "person"
      },
      {
        "type": "2choice",
        "prompt": "ドイツでナチスを率いた人物は？",
        "choices": [
          "レーニン",
          "ヒトラー"
        ],
        "correct": 1,
        "answer": "ヒトラー",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "大衆動員を背景に国民の権利や自由を否定する右翼的全体主義を何というか？",
        "choices": [
          "コモン・ロー",
          "ファシズム",
          "市民革命（ブルジョア革命）",
          "全体主義"
        ],
        "correct": 1,
        "answer": "ファシズム",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1945年に連合国が結成した国際平和機構は？",
        "choices": [
          "国際連合",
          "サンフランシスコ会議",
          "日本社会党",
          "知的財産高等裁判所"
        ],
        "correct": 0,
        "answer": "国際連合",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "東西冷戦が終結したのは1991年である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "東西冷戦が終結したのは1989年である。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "ソ連が解体したのは何年か？",
        "choices": [
          "1991年",
          "1989年"
        ],
        "correct": 0,
        "answer": "1991年",
        "category": "number"
      }
    ]
  },
  "2": {
    "title": "第2講 政治体制と憲法",
    "items": [
      {
        "type": "4choice",
        "prompt": "イギリスや日本などで採用されている、立法権と行政権が連動する政治体制は？",
        "choices": [
          "ペレストロイカ",
          "アラブの春（アラブ革命）",
          "議院内閣制",
          "権力集中体制（プロレタリア独裁）"
        ],
        "correct": 2,
        "answer": "議院内閣制",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "アメリカなどで採用されている、三権が厳格に分立する政治体制は議員との兼職である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "アメリカなどで採用されている、三権が厳格に分立する政治体制は大統領制である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "ロシアやフランスなどで採用されている、議院内閣制と大統領制の中間的な体制は？",
        "choices": [
          "半大統領制",
          "責任を負わない"
        ],
        "correct": 0,
        "answer": "半大統領制",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "資本家と労働者の支配服従関係を廃し、生産手段の社会的共有を基礎とする体制は？",
        "choices": [
          "イラン革命",
          "開発独裁",
          "厳格な三権分立制",
          "権力集中体制（プロレタリア独裁）"
        ],
        "correct": 3,
        "answer": "権力集中体制（プロレタリア独裁）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "社会主義政党への権力集中こそ民主的であるという考え方を何というか？",
        "choices": [
          "政党内閣制",
          "民主集中制",
          "権力集中体制（プロレタリア独裁）",
          "独立国家共同体（CIS）"
        ],
        "correct": 1,
        "answer": "民主集中制",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "イギリス議会が上院・下院からなる制度を改革開放政策という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "イギリス議会が上院・下院からなる制度を二院制という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "イギリスで下院が上院より優越する原則を何というか？",
        "choices": [
          "グラスノスチ",
          "下院優位の原則"
        ],
        "correct": 1,
        "answer": "下院優位の原則",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "下院の多数党の党首が首相に任命される制度を何というか？",
        "choices": [
          "厳格な三権分立制",
          "民主集中制",
          "政党内閣制",
          "議院内閣制"
        ],
        "correct": 2,
        "answer": "政党内閣制",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "イギリスの内閣が議会に対して連帯責任を負う制度を何というか？",
        "choices": [
          "グラスノスチ",
          "下院優位の原則",
          "開発独裁",
          "責任内閣制"
        ],
        "correct": 3,
        "answer": "責任内閣制",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "責任内閣制は1742年、影の内閣（シャドー・キャビネット）の辞職により成立した。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "責任内閣制は1742年、ウォルポール内閣の辞職により成立した。",
        "category": "cabinet"
      },
      {
        "type": "2choice",
        "prompt": "イギリスの野党が政権交代に備えて組織するものを何というか？",
        "choices": [
          "影の内閣（シャドー・キャビネット）",
          "ウォルポール内閣"
        ],
        "correct": 0,
        "answer": "影の内閣（シャドー・キャビネット）",
        "category": "cabinet"
      },
      {
        "type": "4choice",
        "prompt": "イギリスのように成文化された憲法典をもたない憲法を何というか？",
        "choices": [
          "不文憲法",
          "欽定憲法",
          "軟性憲法",
          "硬性憲法"
        ],
        "correct": 0,
        "answer": "不文憲法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "イギリスの最高裁判所が設置されたのは何年か？",
        "choices": [
          "出席議員の3分の2以上での再議決",
          "第76条",
          "2009年",
          "11ブロック"
        ],
        "correct": 2,
        "answer": "2009年",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "イギリスの裁判所がもたない権限は拒否権（法案拒否権）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "イギリスの裁判所がもたない権限は違憲審査権（違憲法令・立法審査権）である。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "アメリカの、三権が厳格に分かれる仕組みを何というか？",
        "choices": [
          "厳格な三権分立制",
          "権力集中体制（プロレタリア独裁）"
        ],
        "correct": 0,
        "answer": "厳格な三権分立制",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "アメリカが州の自治を尊重する制度を何というか？",
        "choices": [
          "独立国家共同体（CIS）",
          "連邦制",
          "政党内閣制",
          "アラブの春（アラブ革命）"
        ],
        "correct": 1,
        "answer": "連邦制",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "アメリカ大統領は何によって選出されるか？",
        "choices": [
          "ペレストロイカ",
          "厳格な三権分立制",
          "国家主席",
          "間接選挙"
        ],
        "correct": 3,
        "answer": "間接選挙",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "アメリカで大統領・各省長官に禁止されていることは半大統領制である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "アメリカで大統領・各省長官に禁止されていることは議員との兼職である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "アメリカ大統領は議会に対しどのような責任を負うか？",
        "choices": [
          "責任を負わない",
          "厳格な三権分立制"
        ],
        "correct": 0,
        "answer": "責任を負わない",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "アメリカ大統領がもたない権限は何か？",
        "choices": [
          "違憲法令（立法）審査権",
          "不逮捕特権",
          "拒否権（法案拒否権）",
          "法案提出権"
        ],
        "correct": 3,
        "answer": "法案提出権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "アメリカ大統領が議会の可決した法案に対してもつ権限は？",
        "choices": [
          "違憲審査権（違憲法令・立法審査権）",
          "違憲（立法・法令）審査権",
          "拒否権（法案拒否権）",
          "法案提出権"
        ],
        "correct": 2,
        "answer": "拒否権（法案拒否権）",
        "category": "right"
      },
      {
        "type": "truefalse",
        "statement": "アメリカ連邦最高裁判所がもつ、憲法の最終解釈権にもとづく審査権は法案提出権である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "アメリカ連邦最高裁判所がもつ、憲法の最終解釈権にもとづく審査権は違憲法令（立法）審査権である。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "アメリカで司法権が優越することを何というか？",
        "choices": [
          "厳格な三権分立制",
          "司法権の優越"
        ],
        "correct": 1,
        "answer": "司法権の優越",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "中国の立法府（議会）にあたる機関は？",
        "choices": [
          "全国人民代表大会（全人代）",
          "弾劾裁判所",
          "職能団体",
          "両院協議会"
        ],
        "correct": 0,
        "answer": "全国人民代表大会（全人代）",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "全人代で選出される、任期5年の中国の元首は？",
        "choices": [
          "国家主席",
          "権力集中体制（プロレタリア独裁）",
          "責任内閣制",
          "独立国家共同体（CIS）"
        ],
        "correct": 0,
        "answer": "国家主席",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "中国の政治で全人代に権力が集中していることをイラン革命という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "中国の政治で全人代に権力が集中していることを権力集中という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1989年に中国で民主化を要求して起きた事件は？",
        "choices": [
          "第2次天安門事件",
          "『宴のあと』事件"
        ],
        "correct": 0,
        "answer": "第2次天安門事件",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "中国が経済的に採用している政策は？",
        "choices": [
          "改革開放政策",
          "ペレストロイカ",
          "議院内閣制",
          "権力集中体制（プロレタリア独裁）"
        ],
        "correct": 0,
        "answer": "改革開放政策",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "香港・マカオに採用されている制度は？",
        "choices": [
          "一国二制度",
          "厳格な三権分立制",
          "二院制",
          "独立国家共同体（CIS）"
        ],
        "correct": 0,
        "answer": "一国二制度",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "ゴルバチョフ政権による情報公開政策を改革開放政策という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "ゴルバチョフ政権による情報公開政策をグラスノスチという。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "ゴルバチョフ政権による一連の改革を何というか？",
        "choices": [
          "民主集中制",
          "ペレストロイカ"
        ],
        "correct": 1,
        "answer": "ペレストロイカ",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1991年のソ連消滅後に結成された組織は？",
        "choices": [
          "下院優位の原則",
          "責任内閣制",
          "権力集中",
          "独立国家共同体（CIS）"
        ],
        "correct": 3,
        "answer": "独立国家共同体（CIS）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "開発途上国において人権より経済成長を優先する権威主義体制を何というか？",
        "choices": [
          "大統領制",
          "開発独裁",
          "ペレストロイカ",
          "グラスノスチ"
        ],
        "correct": 1,
        "answer": "開発独裁",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "伝統的なイスラームの教えに帰ることを掲げる運動を半大統領制という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "伝統的なイスラームの教えに帰ることを掲げる運動をイスラーム原理主義という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "イスラーム原理主義が大きな潮流となる契機となった1979年の出来事は？",
        "choices": [
          "イラン革命",
          "民主集中制"
        ],
        "correct": 0,
        "answer": "イラン革命",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "2010〜11年にチュニジア・エジプト・リビアなどで広がった民主化運動を何というか？",
        "choices": [
          "間接選挙",
          "連邦制",
          "改革開放政策",
          "アラブの春（アラブ革命）"
        ],
        "correct": 3,
        "answer": "アラブの春（アラブ革命）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "憲法改正に厳格な手続きを必要としない憲法を何というか？",
        "choices": [
          "軟性憲法",
          "民定憲法",
          "硬性憲法",
          "不文憲法"
        ],
        "correct": 0,
        "answer": "軟性憲法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "憲法改正に法律の改正より厳格な手続きを必要とする憲法を軟性憲法という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "憲法改正に法律の改正より厳格な手続きを必要とする憲法を硬性憲法という。",
        "category": "law"
      },
      {
        "type": "2choice",
        "prompt": "君主の意思により制定される憲法を何というか？",
        "choices": [
          "欽定憲法",
          "成文憲法"
        ],
        "correct": 0,
        "answer": "欽定憲法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "国民が直接、もしくは議会を通じて制定する憲法を何というか？",
        "choices": [
          "軟性憲法",
          "欽定憲法",
          "不文憲法",
          "民定憲法"
        ],
        "correct": 3,
        "answer": "民定憲法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "成文化された憲法を何というか？",
        "choices": [
          "民定憲法",
          "硬性憲法",
          "不文憲法",
          "成文憲法"
        ],
        "correct": 3,
        "answer": "成文憲法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "成文化されていない憲法を民定憲法という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "成文化されていない憲法を不文憲法という。",
        "category": "law"
      }
    ]
  },
  "3": {
    "title": "第3講 日本の憲法",
    "items": [
      {
        "type": "4choice",
        "prompt": "藩閥政府への不満を背景に起きた、国会開設を求める運動は？",
        "choices": [
          "司法権の独立",
          "統帥権の独立",
          "昭和ファシズム",
          "自由民権運動"
        ],
        "correct": 3,
        "answer": "自由民権運動",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "内閣制度が創設されたのは第9条である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "内閣制度が創設されたのは1885年である。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "枢密院が設置されたのは何年か？",
        "choices": [
          "1890年",
          "1888年"
        ],
        "correct": 1,
        "answer": "1888年",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "大日本帝国憲法が制定されたのは何年か？",
        "choices": [
          "1947年5月3日",
          "1885年",
          "1889年",
          "1888年"
        ],
        "correct": 2,
        "answer": "1889年",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "帝国議会が開設されたのは何年か？",
        "choices": [
          "3分の2以上",
          "1885年",
          "1888年",
          "1890年"
        ],
        "correct": 3,
        "answer": "1890年",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "大日本帝国憲法の制定を中心となって進めた初代首相は松本烝治である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "大日本帝国憲法の制定を中心となって進めた初代首相は伊藤博文である。",
        "category": "person"
      },
      {
        "type": "2choice",
        "prompt": "大日本帝国憲法が公布されたのは何年何月何日、どの内閣の時か？",
        "choices": [
          "1889年2月11日・黒田清隆内閣",
          "幣原喜重郎内閣"
        ],
        "correct": 0,
        "answer": "1889年2月11日・黒田清隆内閣",
        "category": "cabinet"
      },
      {
        "type": "4choice",
        "prompt": "民権派によって作成された憲法草案を何というか？",
        "choices": [
          "私擬憲法",
          "民定憲法",
          "プロイセン（ドイツ）憲法",
          "欽定憲法"
        ],
        "correct": 0,
        "answer": "私擬憲法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "大日本帝国憲法は君主の意思で制定されたが、これを何というか？",
        "choices": [
          "プロイセン（ドイツ）憲法",
          "私擬憲法",
          "民定憲法",
          "欽定憲法"
        ],
        "correct": 3,
        "answer": "欽定憲法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "大日本帝国憲法が模範とした国の憲法は欽定憲法である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "大日本帝国憲法が模範とした国の憲法はプロイセン（ドイツ）憲法である。",
        "category": "law"
      },
      {
        "type": "2choice",
        "prompt": "大日本帝国憲法における主権のあり方を何というか？",
        "choices": [
          "天皇大権",
          "天皇主権（主権在君）"
        ],
        "correct": 1,
        "answer": "天皇主権（主権在君）",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "大日本帝国憲法で天皇は侵すことのできない存在とされたが、これを何というか？",
        "choices": [
          "議院内閣制",
          "統治権の総攬",
          "神聖不可侵",
          "GHQ案（マッカーサー草案）"
        ],
        "correct": 2,
        "answer": "神聖不可侵",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "天皇が統治権をまとめてもつことを何というか？",
        "choices": [
          "統帥権の独立",
          "統治権の総攬",
          "過半数の賛成",
          "国民主権・平和主義・基本的人権の尊重"
        ],
        "correct": 1,
        "answer": "統治権の総攬",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "天皇が行使する広範な権限を天皇主権（主権在君）という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "天皇が行使する広範な権限を天皇大権という。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "大日本帝国憲法の絶対主義的色彩が強い立憲主義を何というか？",
        "choices": [
          "外見的立憲主義",
          "民主化が不徹底だったため"
        ],
        "correct": 0,
        "answer": "外見的立憲主義",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "天皇大権としての陸海軍の指揮権を何というか？",
        "choices": [
          "統帥権",
          "天皇大権",
          "国民主権（主権在民）",
          "違憲立法審査権"
        ],
        "correct": 0,
        "answer": "統帥権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "統帥権が内閣から独立していたことを何というか？",
        "choices": [
          "統帥権の独立",
          "神聖不可侵",
          "民主化が不徹底だったため",
          "輔弼"
        ],
        "correct": 0,
        "answer": "統帥権の独立",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "大日本帝国憲法下で臣民の権利が法律によって制限されたことを昭和ファシズムという。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "大日本帝国憲法下で臣民の権利が法律によって制限されたことを法律の留保という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "大日本帝国憲法下で衆議院とともに置かれた非民選の議院は？",
        "choices": [
          "唯一の立法機関",
          "貴族院"
        ],
        "correct": 1,
        "answer": "貴族院",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "各大臣が天皇を補佐することを何というか？",
        "choices": [
          "象徴天皇制",
          "大正デモクラシー",
          "国民主権・平和主義・基本的人権の尊重",
          "輔弼"
        ],
        "correct": 3,
        "answer": "輔弼",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "大日本帝国憲法下で憲法改正を発議できたのは誰か？",
        "choices": [
          "美濃部達吉",
          "天皇",
          "伊藤博文",
          "松本烝治"
        ],
        "correct": 1,
        "answer": "天皇",
        "category": "person"
      },
      {
        "type": "truefalse",
        "statement": "第一次世界大戦後、政党内閣や普通選挙が実現した時期を法律の留保という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "第一次世界大戦後、政党内閣や普通選挙が実現した時期を大正デモクラシーという。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "満洲事変後に軍国主義化が進んだ時期を何というか？",
        "choices": [
          "昭和ファシズム",
          "民主化が不徹底だったため"
        ],
        "correct": 0,
        "answer": "昭和ファシズム",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "「天皇機関説」を唱えた学者は？",
        "choices": [
          "松本烝治",
          "天皇",
          "美濃部達吉",
          "吉野作造"
        ],
        "correct": 2,
        "answer": "美濃部達吉",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "「民本主義」を唱えた学者は？",
        "choices": [
          "美濃部達吉",
          "マッカーサー",
          "伊藤博文",
          "吉野作造"
        ],
        "correct": 3,
        "answer": "吉野作造",
        "category": "person"
      },
      {
        "type": "truefalse",
        "statement": "1945年8月14日に日本が受諾した宣言は日中共同声明である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1945年8月14日に日本が受諾した宣言はポツダム宣言である。",
        "category": "treaty"
      },
      {
        "type": "2choice",
        "prompt": "日本占領のためGHQを率いた最高司令官は？",
        "choices": [
          "マッカーサー",
          "松本烝治"
        ],
        "correct": 0,
        "answer": "マッカーサー",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "GHQから憲法改正の指示を受けた内閣は？",
        "choices": [
          "細川護熙内閣",
          "1889年2月11日・黒田清隆内閣",
          "幣原喜重郎内閣",
          "第一次吉田茂内閣"
        ],
        "correct": 2,
        "answer": "幣原喜重郎内閣",
        "category": "cabinet"
      },
      {
        "type": "4choice",
        "prompt": "幣原内閣が設置した憲法問題調査委員会の委員長は？",
        "choices": [
          "美濃部達吉",
          "吉野作造",
          "マッカーサー",
          "松本烝治"
        ],
        "correct": 3,
        "answer": "松本烝治",
        "category": "person"
      },
      {
        "type": "truefalse",
        "statement": "松本案が拒否された理由は憲法改正の限界である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "松本案が拒否された理由は民主化が不徹底だったためである。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "GHQが提示した草案を何というか？",
        "choices": [
          "GHQ案（マッカーサー草案）",
          "憲法改正の限界"
        ],
        "correct": 0,
        "answer": "GHQ案（マッカーサー草案）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "マッカーサー草案のもとになった三原則を何というか？",
        "choices": [
          "国民主権・平和主義・基本的人権の尊重",
          "神聖不可侵",
          "マッカーサー三原則",
          "自由民権運動"
        ],
        "correct": 2,
        "answer": "マッカーサー三原則",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "日本国憲法が公布されたのは何年何月何日か？",
        "choices": [
          "1946年11月3日",
          "2010年",
          "1947年5月3日",
          "1890年"
        ],
        "correct": 0,
        "answer": "1946年11月3日",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "日本国憲法が施行されたのは1885年である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "日本国憲法が施行されたのは1947年5月3日である。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "日本国憲法公布・施行時の内閣は？",
        "choices": [
          "第一次吉田茂内閣",
          "幣原喜重郎内閣"
        ],
        "correct": 0,
        "answer": "第一次吉田茂内閣",
        "category": "cabinet"
      },
      {
        "type": "4choice",
        "prompt": "日本国憲法の三大基本原理を答えよ。",
        "choices": [
          "法律の留保",
          "象徴天皇制",
          "国民主権・平和主義・基本的人権の尊重",
          "統帥権の独立"
        ],
        "correct": 2,
        "answer": "国民主権・平和主義・基本的人権の尊重",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "日本国憲法は国民が制定した憲法だが、これを何というか？",
        "choices": [
          "私擬憲法",
          "民定憲法",
          "プロイセン（ドイツ）憲法",
          "欽定憲法"
        ],
        "correct": 1,
        "answer": "民定憲法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "憲法が国の最高法規として位置づけられることをマッカーサー三原則という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "憲法が国の最高法規として位置づけられることを憲法の最高法規性という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "主権が国民にあることを何というか？",
        "choices": [
          "天皇主権（主権在君）",
          "国民主権（主権在民）"
        ],
        "correct": 1,
        "answer": "国民主権（主権在民）",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "日本国憲法における天皇の地位を定める制度を何というか？",
        "choices": [
          "昭和ファシズム",
          "象徴天皇制",
          "過半数の賛成",
          "憲法改正の限界"
        ],
        "correct": 1,
        "answer": "象徴天皇制",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "戦争放棄・戦力の不保持・交戦権の否認を規定する憲法の条文は？",
        "choices": [
          "1889年",
          "1885年",
          "第9条",
          "1946年11月3日"
        ],
        "correct": 2,
        "answer": "第9条",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "国会は国権の最高機関であり、国の衆議院とされる。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国会は国権の最高機関であり、国の唯一の立法機関とされる。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "衆議院と参議院のうち優越するのはどちらか？",
        "choices": [
          "衆議院",
          "唯一の立法機関"
        ],
        "correct": 0,
        "answer": "衆議院",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "内閣が国会に連帯責任を負う制度を何というか？",
        "choices": [
          "過半数の賛成",
          "法律の留保",
          "統治権の総攬",
          "議院内閣制"
        ],
        "correct": 3,
        "answer": "議院内閣制",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "最高裁判所がもつ、法律等が憲法に違反していないか審査する権限は？",
        "choices": [
          "天皇大権",
          "天皇主権（主権在君）",
          "違憲立法審査権",
          "統帥権"
        ],
        "correct": 2,
        "answer": "違憲立法審査権",
        "category": "right"
      },
      {
        "type": "truefalse",
        "statement": "司法権が独立していることを輔弼という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "司法権が独立していることを司法権の独立という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "憲法改正の発議には各議院の総議員のどれだけの賛成が必要か？",
        "choices": [
          "3分の2以上",
          "1890年"
        ],
        "correct": 0,
        "answer": "3分の2以上",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "憲法改正は国民投票でどれだけの賛成があれば成立するか？",
        "choices": [
          "民主化が不徹底だったため",
          "過半数の賛成",
          "輔弼",
          "神聖不可侵"
        ],
        "correct": 1,
        "answer": "過半数の賛成",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "三大基本原理は改正できないとされるが、これを何というか？",
        "choices": [
          "民主化が不徹底だったため",
          "神聖不可侵",
          "憲法改正の限界",
          "法律の留保"
        ],
        "correct": 2,
        "answer": "憲法改正の限界",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "国民投票法が施行されたのは1946年11月3日である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国民投票法が施行されたのは2010年である。",
        "category": "number"
      }
    ]
  },
  "4": {
    "title": "第4講 基本的人権の尊重",
    "items": [
      {
        "type": "4choice",
        "prompt": "自然権としてすべての人が生まれながらにもつ、侵すことのできない権利を何というか？",
        "choices": [
          "黙秘権",
          "知的財産権",
          "基本的人権（永久不可侵の権利）",
          "国家賠償請求権"
        ],
        "correct": 2,
        "answer": "基本的人権（永久不可侵の権利）",
        "category": "right"
      },
      {
        "type": "truefalse",
        "statement": "憲法第13条に規定される、基本的人権の核となる権利は社会権である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "憲法第13条に規定される、基本的人権の核となる権利は幸福追求権である。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "基本的人権が制約を受ける場合の根拠となる概念は？",
        "choices": [
          "公共の福祉",
          "財産権の不可侵（保障）"
        ],
        "correct": 0,
        "answer": "公共の福祉",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "「法の下の平等」を定める憲法の条文は？",
        "choices": [
          "2005年",
          "第14条",
          "2009年",
          "11ブロック"
        ],
        "correct": 1,
        "answer": "第14条",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "1985年に制定された、性別による雇用差別を禁止する法律は？",
        "choices": [
          "ワイマール憲法",
          "労働組合法・労働関係調整法・労働基準法",
          "男女雇用機会均等法",
          "労働契約法"
        ],
        "correct": 2,
        "answer": "男女雇用機会均等法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "1999年に制定された、男女共同参画社会の実現をめざす法律は労働契約法である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1999年に制定された、男女共同参画社会の実現をめざす法律は男女共同参画社会基本法である。",
        "category": "law"
      },
      {
        "type": "2choice",
        "prompt": "「国家からの自由」といわれる、国や公権力の干渉を排除する権利を何というか？",
        "choices": [
          "公務員の選定・罷免権",
          "自由権"
        ],
        "correct": 1,
        "answer": "自由権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "私人間の人権侵害に憲法を直接適用しないとした1973年の訴訟は？",
        "choices": [
          "財田川事件",
          "三菱樹脂事件",
          "堀木訴訟",
          "足利事件"
        ],
        "correct": 1,
        "answer": "三菱樹脂事件",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "信教の自由と一体の関係にある原則を何というか？",
        "choices": [
          "奴隷的拘束および苦役からの自由",
          "プログラム規定説",
          "検閲",
          "政教分離の原則"
        ],
        "correct": 3,
        "answer": "政教分離の原則",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1977年に違憲判決が出た、地鎮祭への公金支出をめぐる訴訟は津地鎮祭訴訟である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1977年に合憲判決が出た、地鎮祭への公金支出をめぐる訴訟は津地鎮祭訴訟である。",
        "category": "case"
      },
      {
        "type": "2choice",
        "prompt": "1997年に違憲判決が出た、玉串料の公金支出をめぐる訴訟は？",
        "choices": [
          "愛媛玉串料訴訟",
          "三菱樹脂事件"
        ],
        "correct": 0,
        "answer": "愛媛玉串料訴訟",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "2010年に違憲判決が出た、神社への市有地無償提供をめぐる訴訟は？",
        "choices": [
          "朝日訴訟",
          "空知太神社訴訟",
          "足利事件",
          "在外国民選挙権制限訴訟"
        ],
        "correct": 1,
        "answer": "空知太神社訴訟",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "2006年に最高裁が判断を示さなかった、首相・閣僚の参拝に関する問題は？",
        "choices": [
          "遡及処罰の禁止",
          "靖国神社公式参拝問題",
          "一事不再理",
          "検閲"
        ],
        "correct": 1,
        "answer": "靖国神社公式参拝問題",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1957年に刑法を違憲とした、文学作品をめぐる訴訟はチャタレー事件である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1957年に刑法を合憲とした、文学作品をめぐる訴訟はチャタレー事件である。",
        "category": "case"
      },
      {
        "type": "2choice",
        "prompt": "1999年に制定された、通信の秘密に関わる法律は？",
        "choices": [
          "通信傍受法",
          "労働組合法・労働関係調整法・労働基準法"
        ],
        "correct": 0,
        "answer": "通信傍受法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "表現物が発表前に審査され禁止されることを何というか？",
        "choices": [
          "公共の福祉",
          "検閲",
          "憲法尊重擁護義務",
          "被害者参加制度"
        ],
        "correct": 1,
        "answer": "検閲",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1993年に合憲判決が出た、高校日本史教科書の検定をめぐる訴訟は？",
        "choices": [
          "滝川（京大）事件",
          "愛媛玉串料訴訟",
          "チャタレー事件",
          "家永教科書訴訟"
        ],
        "correct": 3,
        "answer": "家永教科書訴訟",
        "category": "case"
      },
      {
        "type": "truefalse",
        "statement": "1933年に起きた、京都大学の学問の自由をめぐる事件は空知太神社訴訟である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1933年に起きた、京都大学の学問の自由をめぐる事件は滝川（京大）事件である。",
        "category": "case"
      },
      {
        "type": "2choice",
        "prompt": "1963年に「大学の自治」の範囲が争われた事件は？",
        "choices": [
          "東大ポポロ事件",
          "チャタレー事件"
        ],
        "correct": 0,
        "answer": "東大ポポロ事件",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "奴隷のような拘束や強制労働からの自由を何というか？",
        "choices": [
          "公共の福祉",
          "令状（令状主義）",
          "政教分離の原則",
          "奴隷的拘束および苦役からの自由"
        ],
        "correct": 3,
        "answer": "奴隷的拘束および苦役からの自由",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "どのような行為を犯罪とし、どのような刑罰を科すかを行為前に法律で定める原則は？",
        "choices": [
          "職業選択の自由",
          "遡及処罰の禁止",
          "検閲",
          "罪刑法定主義"
        ],
        "correct": 3,
        "answer": "罪刑法定主義",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1983年に再審無罪となった死刑冤罪事件は財田川事件である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1983年に再審無罪となった死刑冤罪事件は免田事件である。",
        "category": "case"
      },
      {
        "type": "2choice",
        "prompt": "1984年に再審無罪となった死刑冤罪事件は？",
        "choices": [
          "在外国民選挙権制限訴訟",
          "財田川事件"
        ],
        "correct": 1,
        "answer": "財田川事件",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "2010年に再審無罪となった冤罪事件は？",
        "choices": [
          "朝日訴訟",
          "堀木訴訟",
          "足利事件",
          "滝川（京大）事件"
        ],
        "correct": 2,
        "answer": "足利事件",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "法律に定める適正な手続きによらなければ刑罰を科されない原則を何というか？",
        "choices": [
          "奴隷的拘束および苦役からの自由",
          "政教分離の原則",
          "法定手続き（デュープロセス）の保障",
          "財産権の不可侵（保障）"
        ],
        "correct": 2,
        "answer": "法定手続き（デュープロセス）の保障",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "現行犯以外の逮捕等に必要な、裁判官が発行するものを無罪推定という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "現行犯以外の逮捕等に必要な、裁判官が発行するものを令状（令状主義）という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "日本が無調印である、1989年に国連で採択された条約は？",
        "choices": [
          "モントリオール議定書",
          "死刑廃止条約"
        ],
        "correct": 1,
        "answer": "死刑廃止条約",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "公平・迅速で公開の裁判を受ける権利を何というか？",
        "choices": [
          "請求権（受益権）",
          "最高裁判所裁判官の国民審査権",
          "公開裁判を受ける権利",
          "幸福追求権"
        ],
        "correct": 2,
        "answer": "公開裁判を受ける権利",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "刑事被告人が弁護人を依頼できる権利を何というか？",
        "choices": [
          "幸福追求権",
          "生存権",
          "弁護人依頼権",
          "社会権"
        ],
        "correct": 2,
        "answer": "弁護人依頼権",
        "category": "right"
      },
      {
        "type": "truefalse",
        "statement": "行為時に適法だった行為を後の法律で処罰することの禁止を奴隷的拘束および苦役からの自由という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "行為時に適法だった行為を後の法律で処罰することの禁止を遡及処罰の禁止という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "同一の犯罪について重ねて裁判を行わない原則を何というか？",
        "choices": [
          "一事不再理",
          "検閲"
        ],
        "correct": 0,
        "answer": "一事不再理",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "判決確定まで被疑者・被告人が無罪と推定される原則を何というか？",
        "choices": [
          "政教分離の原則",
          "被害者参加制度",
          "遡及処罰の禁止",
          "無罪推定"
        ],
        "correct": 3,
        "answer": "無罪推定",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "2004年に制定された、犯罪被害者の権利拡充に関する法律は？",
        "choices": [
          "労働組合法・労働関係調整法・労働基準法",
          "犯罪被害者等基本法",
          "男女共同参画社会基本法",
          "通信傍受法"
        ],
        "correct": 1,
        "answer": "犯罪被害者等基本法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "2008年から認められた、被害者が刑事裁判で意見を述べられる制度は憲法尊重擁護義務である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "2008年から認められた、被害者が刑事裁判で意見を述べられる制度は被害者参加制度である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "自白のみによる処罰を禁止する権利を何というか？",
        "choices": [
          "生存権",
          "黙秘権"
        ],
        "correct": 1,
        "answer": "黙秘権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "経済の自由が精神の自由より広く制約を受けるとする考え方を何というか？",
        "choices": [
          "検閲",
          "靖国神社公式参拝問題",
          "職業選択の自由",
          "二重の基準の理論"
        ],
        "correct": 3,
        "answer": "二重の基準の理論",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1975年に違憲判決が出た、薬局の距離制限をめぐる訴訟は？",
        "choices": [
          "在外国民選挙権制限訴訟",
          "足利事件",
          "空知太神社訴訟",
          "薬事法距離制限訴訟"
        ],
        "correct": 3,
        "answer": "薬事法距離制限訴訟",
        "category": "case"
      },
      {
        "type": "truefalse",
        "statement": "営業の自由を含む、職業を自由に選べる権利を被害者参加制度という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "営業の自由を含む、職業を自由に選べる権利を職業選択の自由という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "財産権が侵されない権利を何というか？",
        "choices": [
          "罪刑法定主義",
          "財産権の不可侵（保障）"
        ],
        "correct": 1,
        "answer": "財産権の不可侵（保障）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "著作権など知的財産を保護する権利を何というか？",
        "choices": [
          "自由権",
          "社会権",
          "弁護人依頼権",
          "知的財産権"
        ],
        "correct": 3,
        "answer": "知的財産権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "知的財産高等裁判所が設置されたのは何年か？",
        "choices": [
          "55年体制",
          "第13条（幸福追求権）",
          "2005年",
          "第14条"
        ],
        "correct": 2,
        "answer": "2005年",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "「国家による自由」といわれる、20世紀的な積極的権利を刑事補償請求権という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "「国家による自由」といわれる、20世紀的な積極的権利を社会権という。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "社会権を初めて掲げた1919年制定のドイツの憲法は？",
        "choices": [
          "ワイマール憲法",
          "男女共同参画社会基本法"
        ],
        "correct": 0,
        "answer": "ワイマール憲法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "「健康で文化的な最低限度の生活を営む権利」を定める憲法第25条の権利は？",
        "choices": [
          "黙秘権",
          "労働三権",
          "生存権",
          "最高裁判所裁判官の国民審査権"
        ],
        "correct": 2,
        "answer": "生存権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "1967年に合憲判決が出た、生活保護基準をめぐる訴訟は？",
        "choices": [
          "免田事件",
          "財田川事件",
          "朝日訴訟",
          "三菱樹脂事件"
        ],
        "correct": 2,
        "answer": "朝日訴訟",
        "category": "case"
      },
      {
        "type": "truefalse",
        "statement": "1982年に違憲判決が出た、児童扶養手当と障害福祉年金の併給禁止をめぐる訴訟は堀木訴訟である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1982年に合憲判決が出た、児童扶養手当と障害福祉年金の併給禁止をめぐる訴訟は堀木訴訟である。",
        "category": "case"
      },
      {
        "type": "2choice",
        "prompt": "生存権の規定はプログラムにすぎないとする学説は？",
        "choices": [
          "プログラム規定説",
          "法定手続き（デュープロセス）の保障"
        ],
        "correct": 0,
        "answer": "プログラム規定説",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "生存権は法的権利であるとする学説は？",
        "choices": [
          "法的権利説",
          "罪刑法定主義",
          "奴隷的拘束および苦役からの自由",
          "二重の基準の理論"
        ],
        "correct": 0,
        "answer": "法的権利説",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1947年制定、2006年改正の、憲法の精神を生かした法律は？",
        "choices": [
          "教育基本法",
          "男女共同参画社会基本法",
          "通信傍受法",
          "ワイマール憲法"
        ],
        "correct": 0,
        "answer": "教育基本法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "勤労の権利を請求権（受益権）という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "勤労の権利を勤労権という。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "団結権・団体交渉権・争議権をまとめて何というか？",
        "choices": [
          "最高裁判所裁判官の国民審査権",
          "労働三権"
        ],
        "correct": 1,
        "answer": "労働三権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "労働三法とは何か。",
        "choices": [
          "労働組合法・労働関係調整法・労働基準法",
          "犯罪被害者等基本法",
          "男女共同参画社会基本法",
          "通信傍受法"
        ],
        "correct": 0,
        "answer": "労働組合法・労働関係調整法・労働基準法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "2007年に制定され「労働四法」に含まれることもある法律は？",
        "choices": [
          "労働契約法",
          "教育基本法",
          "男女雇用機会均等法",
          "労働組合法・労働関係調整法・労働基準法"
        ],
        "correct": 0,
        "answer": "労働契約法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "公務員の労働三権のうち、中心的に制限されるのは幸福追求権である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "公務員の労働三権のうち、中心的に制限されるのは争議権である。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "公務員を選んだり辞めさせたりする国民の権利を何というか？",
        "choices": [
          "生存権",
          "公務員の選定・罷免権"
        ],
        "correct": 1,
        "answer": "公務員の選定・罷免権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "2005年に違憲判決が出た、在外日本人の選挙権をめぐる訴訟は？",
        "choices": [
          "在外国民選挙権制限訴訟",
          "空知太神社訴訟",
          "三菱樹脂事件",
          "堀木訴訟"
        ],
        "correct": 0,
        "answer": "在外国民選挙権制限訴訟",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "最高裁判所裁判官が適任かどうか国民が審査する制度は？",
        "choices": [
          "国家賠償請求権",
          "生存権",
          "基本的人権（永久不可侵の権利）",
          "最高裁判所裁判官の国民審査権"
        ],
        "correct": 3,
        "answer": "最高裁判所裁判官の国民審査権",
        "category": "right"
      },
      {
        "type": "truefalse",
        "statement": "国や地方公共団体に施策の実施等を求める権利を公務員の選定・罷免権という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国や地方公共団体に施策の実施等を求める権利を請求権（受益権）という。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "国会・地方議会などに平穏に希望を述べる権利を何というか？",
        "choices": [
          "請求権（受益権）",
          "請願権"
        ],
        "correct": 1,
        "answer": "請願権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "公務員の違法行為により損害を受けた国民が国等に賠償を求める権利は？",
        "choices": [
          "自由権",
          "幸福追求権",
          "国家賠償請求権",
          "争議権"
        ],
        "correct": 2,
        "answer": "国家賠償請求権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "冤罪で無罪になった場合に国に補償を求める権利は？",
        "choices": [
          "国家賠償請求権",
          "公務員の選定・罷免権",
          "社会権",
          "刑事補償請求権"
        ],
        "correct": 3,
        "answer": "刑事補償請求権",
        "category": "right"
      },
      {
        "type": "truefalse",
        "statement": "日本国憲法における国民の三大義務は遡及処罰の禁止である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "日本国憲法における国民の三大義務は子どもに普通教育を受けさせる義務・勤労の義務・納税の義務である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "公務員が負う、憲法を尊重し擁護する義務を何というか？",
        "choices": [
          "憲法尊重擁護義務",
          "検閲"
        ],
        "correct": 0,
        "answer": "憲法尊重擁護義務",
        "category": "term"
      }
    ]
  },
  "5": {
    "title": "第5講 新しい人権と公害・環境問題および資源・エネルギー問題",
    "items": [
      {
        "type": "4choice",
        "prompt": "日本国憲法に明文の規定はないが、幸福追求権などを根拠に唱えられるようになった人権を何というか？",
        "choices": [
          "プライバシーの権利",
          "新しい人権",
          "日照権",
          "平和的生存権"
        ],
        "correct": 1,
        "answer": "新しい人権",
        "category": "right"
      },
      {
        "type": "truefalse",
        "statement": "環境破壊や公害を防ぎ、良好な環境を享受して暮らす権利を日照権という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "環境破壊や公害を防ぎ、良好な環境を享受して暮らす権利を環境権という。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "環境権の根拠となる憲法の条文を2つ答えよ。",
        "choices": [
          "第13条（幸福追求権）と第25条（生存権）",
          "第21条（表現の自由）"
        ],
        "correct": 0,
        "answer": "第13条（幸福追求権）と第25条（生存権）",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "環境権に含まれる、たばこの煙を拒否する権利は？",
        "choices": [
          "アクセス権",
          "嫌煙権",
          "自己決定権",
          "環境権"
        ],
        "correct": 1,
        "answer": "嫌煙権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "環境権に含まれる、日照を確保する権利は？",
        "choices": [
          "嫌煙権",
          "知る権利",
          "環境権",
          "日照権"
        ],
        "correct": 3,
        "answer": "日照権",
        "category": "right"
      },
      {
        "type": "truefalse",
        "statement": "環境権が争われた代表的な1981年の訴訟は足尾銅山鉱毒事件である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "環境権が争われた代表的な1981年の訴訟は大阪空港公害訴訟である。",
        "category": "case"
      },
      {
        "type": "2choice",
        "prompt": "最高裁判所は環境権を明確に認めた判例があるか？",
        "choices": [
          "チェルノブイリ原発",
          "ない"
        ],
        "correct": 1,
        "answer": "ない",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "環境権を世界共通の基本的権利とした1972年の宣言は？",
        "choices": [
          "ワシントン条約",
          "京都議定書",
          "国連人間環境宣言",
          "気候変動枠組み条約"
        ],
        "correct": 2,
        "answer": "国連人間環境宣言",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "1993年に制定された環境権関連の基本法は？",
        "choices": [
          "環境アセスメント法（環境影響評価法）",
          "出入国管理及び難民認定法",
          "特定秘密保護法",
          "環境基本法"
        ],
        "correct": 3,
        "answer": "環境基本法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "1997年に制定された環境影響評価に関する法律は個人番号法である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1997年に制定された環境影響評価に関する法律は環境アセスメント法（環境影響評価法）である。",
        "category": "law"
      },
      {
        "type": "2choice",
        "prompt": "全国に先駆け環境アセスメント条例を制定した自治体は（1976年）？",
        "choices": [
          "神奈川県川崎市",
          "カドミウム"
        ],
        "correct": 0,
        "answer": "神奈川県川崎市",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "高度情報化社会で情報を国等に妨げられずに知る自由、または情報提供を求める権利は？",
        "choices": [
          "平和的生存権",
          "アクセス権",
          "知る権利",
          "新しい人権"
        ],
        "correct": 2,
        "answer": "知る権利",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "知る権利のおもな根拠となる憲法の条文は？",
        "choices": [
          "2003年",
          "COP3（京都会議）",
          "第13条（幸福追求権）と第25条（生存権）",
          "第21条（表現の自由）"
        ],
        "correct": 3,
        "answer": "第21条（表現の自由）",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "国の情報公開法が制定されたのは第13条（幸福追求権）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国の情報公開法が制定されたのは1999年である。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "外交・防衛の「特定秘密」漏洩に重罰を科す2013年制定の法律は？",
        "choices": [
          "特定秘密保護法",
          "環境アセスメント法（環境影響評価法）"
        ],
        "correct": 0,
        "answer": "特定秘密保護法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "知る権利（報道の自由）をめぐる最初の裁判（1978年）は？",
        "choices": [
          "『宴のあと』事件",
          "別子銅山煙害事件",
          "足尾銅山鉱毒事件",
          "外務省秘密電文漏洩事件"
        ],
        "correct": 3,
        "answer": "外務省秘密電文漏洩事件",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "私生活をみだりに公開されない権利、または自己情報をコントロールする権利を何というか？",
        "choices": [
          "平和的生存権",
          "日照権",
          "プライバシーの権利",
          "自己決定権"
        ],
        "correct": 2,
        "answer": "プライバシーの権利",
        "category": "right"
      },
      {
        "type": "truefalse",
        "statement": "プライバシーの権利のおもな根拠となる憲法の条文は1999年である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "プライバシーの権利のおもな根拠となる憲法の条文は第13条（幸福追求権）である。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "プライバシーの権利と表現の自由の調整が初めて認知された1964年の判決は？",
        "choices": [
          "足尾銅山鉱毒事件",
          "『宴のあと』事件"
        ],
        "correct": 1,
        "answer": "『宴のあと』事件",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "2002年に出版差し止めとなった、柳美里の作品をめぐる事件は？",
        "choices": [
          "大阪空港公害訴訟",
          "『石に泳ぐ魚』事件",
          "別子銅山煙害事件",
          "『宴のあと』事件"
        ],
        "correct": 1,
        "answer": "『石に泳ぐ魚』事件",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "国の個人情報保護法が制定されたのは何年か？",
        "choices": [
          "第13条（幸福追求権）",
          "2003年",
          "COP3（京都会議）",
          "1999年"
        ],
        "correct": 1,
        "answer": "2003年",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "2002年から稼働している、全国民の住民票にコード番号をつけて管理するシステムは「かけがえのない地球」である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "2002年から稼働している、全国民の住民票にコード番号をつけて管理するシステムは住民基本台帳ネットワーク（住基ネット）である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "2013年制定・2016年から本格開始のマイナンバー制度の根拠法は？",
        "choices": [
          "循環型社会形成推進基本法",
          "個人番号法"
        ],
        "correct": 1,
        "answer": "個人番号法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "マスメディアに意見広告や反論記事の掲載などを要求する権利は？",
        "choices": [
          "プライバシーの権利",
          "アクセス権",
          "日照権",
          "知る権利"
        ],
        "correct": 1,
        "answer": "アクセス権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "私的事項について権力的な干渉を受けず自ら決定する権利は？",
        "choices": [
          "環境権",
          "自己決定権",
          "新しい人権",
          "知る権利"
        ],
        "correct": 1,
        "answer": "自己決定権",
        "category": "right"
      },
      {
        "type": "truefalse",
        "statement": "近年の医療現場で欠かせない「説明にもとづく同意」をOPECという。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "近年の医療現場で欠かせない「説明にもとづく同意」をインフォームド・コンセントという。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "日本国憲法前文にある「平和のうちに生存する権利」を何というか？",
        "choices": [
          "平和的生存権",
          "環境権"
        ],
        "correct": 0,
        "answer": "平和的生存権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "国内の外国人を管理する法律（入管法）の正式名称は？",
        "choices": [
          "公害対策基本法",
          "出入国管理及び難民認定法",
          "特定秘密保護法",
          "環境アセスメント法（環境影響評価法）"
        ],
        "correct": 1,
        "answer": "出入国管理及び難民認定法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "大都市で問題化している、在日外国人への差別をあおる街頭宣伝活動を何というか？",
        "choices": [
          "ヘイトスピーチ",
          "四日市ぜんそく",
          "エネルギー革命",
          "福島第一原発"
        ],
        "correct": 0,
        "answer": "ヘイトスピーチ",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1991年から約10年間、国連難民高等弁務官事務所のトップを務めた日本人は田中正造である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1991年から約10年間、国連難民高等弁務官事務所のトップを務めた日本人は緒方貞子である。",
        "category": "person"
      },
      {
        "type": "2choice",
        "prompt": "産業革命以後の都市化と工業化の過程で発生した深刻な社会的災害を何というか？",
        "choices": [
          "「持続可能な開発」",
          "公害"
        ],
        "correct": 1,
        "answer": "公害",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "「日本の公害問題の原点」とされる、栃木県の事件は？",
        "choices": [
          "『石に泳ぐ魚』事件",
          "足尾銅山鉱毒事件",
          "『宴のあと』事件",
          "大阪空港公害訴訟"
        ],
        "correct": 1,
        "answer": "足尾銅山鉱毒事件",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "足尾銅山鉱毒事件を訴えた衆議院議員は？",
        "choices": [
          "田中正造",
          "緒方貞子",
          "グロティウス",
          "原敬"
        ],
        "correct": 0,
        "answer": "田中正造",
        "category": "person"
      },
      {
        "type": "truefalse",
        "statement": "明治期のもう一つの公害、愛媛県で起きた事件は足尾銅山鉱毒事件である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "明治期のもう一つの公害、愛媛県で起きた事件は別子銅山煙害事件である。",
        "category": "case"
      },
      {
        "type": "2choice",
        "prompt": "四大公害病のうち熊本県水俣湾で発生したものは？",
        "choices": [
          "水俣病",
          "第一次石油危機"
        ],
        "correct": 0,
        "answer": "水俣病",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "水俣病の原因物質は？",
        "choices": [
          "ない",
          "PPP",
          "スリーマイル島原発",
          "有機水銀（メチル水銀）"
        ],
        "correct": 3,
        "answer": "有機水銀（メチル水銀）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "水俣病の原因企業は？",
        "choices": [
          "FIT制度",
          "チッソ",
          "第一次石油危機",
          "スリーマイル島原発"
        ],
        "correct": 1,
        "answer": "チッソ",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "新潟県阿賀野川流域で発生した四大公害病はチッソである。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "新潟県阿賀野川流域で発生した四大公害病は第二（新潟）水俣病である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "富山県神通川流域で発生した四大公害病は？",
        "choices": [
          "原子力",
          "イタイイタイ病"
        ],
        "correct": 1,
        "answer": "イタイイタイ病",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "イタイイタイ病の原因物質は？",
        "choices": [
          "スリーマイル島原発",
          "『成長の限界』",
          "第二（新潟）水俣病",
          "カドミウム"
        ],
        "correct": 3,
        "answer": "カドミウム",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "三重県四日市市で発生した四大公害病は？",
        "choices": [
          "公害",
          "四日市ぜんそく",
          "酸性雨",
          "SDGs"
        ],
        "correct": 1,
        "answer": "四日市ぜんそく",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "四日市ぜんそくの原因物質は「持続可能な開発」である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "四日市ぜんそくの原因物質は亜硫酸ガスである。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "騒音・振動・悪臭・大気汚染・土壌汚染・水質汚濁・地盤沈下をまとめて何というか？",
        "choices": [
          "チッソ",
          "典型七公害"
        ],
        "correct": 1,
        "answer": "典型七公害",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1967年に制定された、環境基準の設定を規定する法律は？",
        "choices": [
          "環境基本法",
          "公害対策基本法",
          "特定秘密保護法",
          "循環型社会形成推進基本法"
        ],
        "correct": 1,
        "answer": "公害対策基本法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "1970年、公害対策基本法の「経済調和条項」が削除された国会を何というか？",
        "choices": [
          "四日市ぜんそく",
          "公害国会",
          "イタイイタイ病",
          "オゾン層"
        ],
        "correct": 1,
        "answer": "公害国会",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1971年に設置された環境行政機関は国連人間環境会議である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1971年に設置された環境行政機関は環境庁である。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "1993年、公害対策基本法と自然環境保全法を統合して制定された法律は？",
        "choices": [
          "環境基本法",
          "公害対策基本法"
        ],
        "correct": 0,
        "answer": "環境基本法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "3R（削減・再使用・再生利用）に取り組む社会をめざす2000年制定の法律は？",
        "choices": [
          "個人番号法",
          "特定秘密保護法",
          "環境基本法",
          "循環型社会形成推進基本法"
        ],
        "correct": 3,
        "answer": "循環型社会形成推進基本法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "廃棄物ゼロをめざす取り組みを何というか？",
        "choices": [
          "「持続可能な開発」",
          "住民基本台帳ネットワーク（住基ネット）",
          "ゼロ・エミッション",
          "FIT制度"
        ],
        "correct": 2,
        "answer": "ゼロ・エミッション",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "汚染者負担の原則を英語の略称でチェルノブイリ原発という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "汚染者負担の原則を英語の略称でPPPという。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "化石燃料燃焼にともなうCO2などの放出により気温上昇が起きる現象は？",
        "choices": [
          "地球温暖化",
          "公害国会"
        ],
        "correct": 0,
        "answer": "地球温暖化",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "フロンガスにより破壊される大気の層は？",
        "choices": [
          "FIT制度",
          "「かけがえのない地球」",
          "オゾン層",
          "イタイイタイ病"
        ],
        "correct": 2,
        "answer": "オゾン層",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "オゾン層破壊を防ぐため1987年に採択された議定書は？",
        "choices": [
          "モントリオール議定書",
          "生物多様性条約",
          "ワシントン条約",
          "ラムサール条約"
        ],
        "correct": 0,
        "answer": "モントリオール議定書",
        "category": "treaty"
      },
      {
        "type": "truefalse",
        "statement": "窒素酸化物や硫黄酸化物が原因で発生する現象は「かけがえのない地球」である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "窒素酸化物や硫黄酸化物が原因で発生する現象は酸性雨である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "水鳥の生息地である湿地を保護する1971年の条約は？",
        "choices": [
          "ラムサール条約",
          "気候変動枠組み条約"
        ],
        "correct": 0,
        "answer": "ラムサール条約",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "絶滅の恐れがある野生動植物の取引を規制する1973年の条約は？",
        "choices": [
          "パリ協定",
          "バーゼル条約",
          "ワシントン条約",
          "ラムサール条約"
        ],
        "correct": 2,
        "answer": "ワシントン条約",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "総合的な生物多様性を保護する1992年の条約は？",
        "choices": [
          "バーゼル条約",
          "生物多様性条約",
          "京都議定書",
          "モントリオール議定書"
        ],
        "correct": 1,
        "answer": "生物多様性条約",
        "category": "treaty"
      },
      {
        "type": "truefalse",
        "statement": "有害廃棄物の輸出入を規制する1989年採択の条約はラムサール条約である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "有害廃棄物の輸出入を規制する1989年採択の条約はバーゼル条約である。",
        "category": "treaty"
      },
      {
        "type": "2choice",
        "prompt": "1972年、スウェーデンのストックホルムで開催された会議は？",
        "choices": [
          "国連人間環境会議",
          "国連環境開発会議（地球サミット）"
        ],
        "correct": 0,
        "answer": "国連人間環境会議",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "国連人間環境会議のスローガンは？",
        "choices": [
          "ヘイトスピーチ",
          "「かけがえのない地球」",
          "エネルギー革命",
          "典型七公害"
        ],
        "correct": 1,
        "answer": "「かけがえのない地球」",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "国連人間環境会議で設立された機関は？",
        "choices": [
          "国連環境計画（UNEP）",
          "オゾン層",
          "有機水銀（メチル水銀）",
          "『成長の限界』"
        ],
        "correct": 0,
        "answer": "国連環境計画（UNEP）",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1992年、ブラジルのリオデジャネイロで開催された会議は国連人間環境会議である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1992年、ブラジルのリオデジャネイロで開催された会議は国連環境開発会議（地球サミット）である。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "地球サミットのスローガンは？",
        "choices": [
          "チェルノブイリ原発",
          "「持続可能な開発」"
        ],
        "correct": 1,
        "answer": "「持続可能な開発」",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "地球サミットで調印された、地球温暖化防止のための条約は？",
        "choices": [
          "ラムサール条約",
          "気候変動枠組み条約",
          "モントリオール議定書",
          "パリ協定"
        ],
        "correct": 1,
        "answer": "気候変動枠組み条約",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "1997年、京都で開催された気候変動枠組み条約第3回締約国会議は？",
        "choices": [
          "第13条（幸福追求権）と第25条（生存権）",
          "COP3（京都会議）",
          "2003年",
          "1999年"
        ],
        "correct": 1,
        "answer": "COP3（京都会議）",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "COP3で採択され、先進国に温室効果ガス削減を義務づけた議定書は気候変動枠組み条約である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "COP3で採択され、先進国に温室効果ガス削減を義務づけた議定書は京都議定書である。",
        "category": "treaty"
      },
      {
        "type": "2choice",
        "prompt": "2015年のCOP21で採択された協定は？",
        "choices": [
          "京都議定書",
          "パリ協定"
        ],
        "correct": 1,
        "answer": "パリ協定",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "2015年に採択された持続可能な開発目標を略称で何というか？",
        "choices": [
          "オゾン層",
          "SDGs",
          "第二（新潟）水俣病",
          "国連環境計画（UNEP）"
        ],
        "correct": 1,
        "answer": "SDGs",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "石炭から石油へエネルギーの中心が移ったことを何というか？",
        "choices": [
          "エネルギー革命",
          "公害国会",
          "スリーマイル島原発",
          "ない"
        ],
        "correct": 0,
        "answer": "エネルギー革命",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1972年、ローマクラブが資源枯渇を警告したレポートはエネルギー革命である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1972年、ローマクラブが資源枯渇を警告したレポートは『成長の限界』である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1973年に起きた原油価格高騰を何というか？",
        "choices": [
          "第一次石油危機",
          "原子力"
        ],
        "correct": 0,
        "answer": "第一次石油危機",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "石油輸出国が結成した組織の略称は？",
        "choices": [
          "OPEC",
          "ゼロ・エミッション",
          "原子力",
          "第二（新潟）水俣病"
        ],
        "correct": 0,
        "answer": "OPEC",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "世界の約10％近くの発電量を占めるが、廃棄物処理問題を抱えるエネルギーは？",
        "choices": [
          "有機水銀（メチル水銀）",
          "原子力",
          "亜硫酸ガス",
          "典型七公害"
        ],
        "correct": 1,
        "answer": "原子力",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "2011年に大事故を起こした日本の原発は公害国会である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "2011年に大事故を起こした日本の原発は福島第一原発である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1979年にアメリカで大事故を起こした原発は？",
        "choices": [
          "スリーマイル島原発",
          "典型七公害"
        ],
        "correct": 0,
        "answer": "スリーマイル島原発",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1986年にソ連（ウクライナ）で大事故を起こした原発は？",
        "choices": [
          "原子力",
          "「かけがえのない地球」",
          "酸性雨",
          "チェルノブイリ原発"
        ],
        "correct": 3,
        "answer": "チェルノブイリ原発",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "ドイツで1991年に始まった、再生可能エネルギーを固定価格で買い取る制度は？",
        "choices": [
          "住民基本台帳ネットワーク（住基ネット）",
          "神奈川県川崎市",
          "再生可能エネルギー固定価格買取制度",
          "亜硫酸ガス"
        ],
        "correct": 2,
        "answer": "再生可能エネルギー固定価格買取制度",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "日本で2012年に導入された、再生可能エネルギーの固定価格買取制度の略称は水俣病である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "日本で2012年に導入された、再生可能エネルギーの固定価格買取制度の略称はFIT制度である。",
        "category": "term"
      }
    ]
  },
  "6": {
    "title": "第6講 平和主義",
    "items": [
      {
        "type": "4choice",
        "prompt": "日本が敗戦したのは何年か？",
        "choices": [
          "1989年",
          "総議員の3分の2以上",
          "1945年",
          "第9条"
        ],
        "correct": 2,
        "answer": "1945年",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "日本国憲法の三大基本原理は保安隊である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "日本国憲法の三大基本原理は国民主権・平和主義・基本的人権の尊重である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "憲法前文にある「平和のうちに生存する権利」を何というか？",
        "choices": [
          "集団的自衛権",
          "平和的生存権"
        ],
        "correct": 1,
        "answer": "平和的生存権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "戦争放棄・戦力の不保持・交戦権の否認を規定する条文は？",
        "choices": [
          "1945年",
          "2010年",
          "第9条",
          "出席議員の3分の2以上"
        ],
        "correct": 2,
        "answer": "第9条",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "日本が1928年に締結した、戦争放棄を定めた条約は？",
        "choices": [
          "日ソ共同宣言",
          "MSA協定（日米相互防衛援助協定）",
          "日米相互協力及び安全保障条約（新安保条約）",
          "パリ不戦条約（ケロッグ・ブリアン条約）"
        ],
        "correct": 3,
        "answer": "パリ不戦条約（ケロッグ・ブリアン条約）",
        "category": "treaty"
      },
      {
        "type": "truefalse",
        "statement": "1951年、社会主義国を除く単独講和として調印された条約は日ソ共同宣言である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1951年、社会主義国を除く単独講和として調印された条約はサンフランシスコ平和条約である。",
        "category": "treaty"
      },
      {
        "type": "2choice",
        "prompt": "サンフランシスコ平和条約と同日に締結された条約は？",
        "choices": [
          "日米安全保障条約",
          "MSA協定（日米相互防衛援助協定）"
        ],
        "correct": 0,
        "answer": "日米安全保障条約",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "1952年、日米間で締結され米軍への基地提供や防衛分担金負担を定めた協定は？",
        "choices": [
          "日米行政協定",
          "日ソ共同宣言",
          "日米安全保障条約",
          "パリ不戦条約（ケロッグ・ブリアン条約）"
        ],
        "correct": 0,
        "answer": "日米行政協定",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "1955年に開催された、核兵器廃絶を訴える大会は？",
        "choices": [
          "国家安全保障会議（日本版NSC）",
          "第一回原水爆禁止世界大会",
          "防衛省",
          "皇室裁判所（または行政裁判所・軍法会議）"
        ],
        "correct": 1,
        "answer": "第一回原水爆禁止世界大会",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "1956年、日本とソ連の国交回復を実現した宣言は日米行政協定である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1956年、日本とソ連の国交回復を実現した宣言は日ソ共同宣言である。",
        "category": "treaty"
      },
      {
        "type": "2choice",
        "prompt": "日ソ共同宣言と同年に実現した日本の国際機関加盟は？",
        "choices": [
          "防衛計画の大綱",
          "国際連合加盟"
        ],
        "correct": 1,
        "answer": "国際連合加盟",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1960年安保闘争時の内閣総理大臣は？",
        "choices": [
          "天皇（内閣の指名にもとづき）",
          "ボーダン",
          "岸信介",
          "宮沢喜一"
        ],
        "correct": 2,
        "answer": "岸信介",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "1960年に締結され、アメリカの日本防衛義務を明記した条約は？",
        "choices": [
          "日ソ共同宣言",
          "日米行政協定",
          "日米相互協力及び安全保障条約（新安保条約）",
          "サンフランシスコ平和条約"
        ],
        "correct": 2,
        "answer": "日米相互協力及び安全保障条約（新安保条約）",
        "category": "treaty"
      },
      {
        "type": "truefalse",
        "statement": "新安保条約とともに締結され、国内における米軍の行動を定めた協定は日米安全保障条約である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "新安保条約とともに締結され、国内における米軍の行動を定めた協定は日米地位協定である。",
        "category": "treaty"
      },
      {
        "type": "2choice",
        "prompt": "1972年、日本に返還され、米軍基地の約70％が集中する地域は？",
        "choices": [
          "防衛計画の大綱",
          "沖縄"
        ],
        "correct": 1,
        "answer": "沖縄",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1950年に朝鮮戦争を受け発足した組織は？",
        "choices": [
          "警察予備隊",
          "保安隊",
          "非核三原則",
          "統治行為論"
        ],
        "correct": 0,
        "answer": "警察予備隊",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "警察予備隊発足時の内閣は？",
        "choices": [
          "鳩山由紀夫内閣",
          "1889年2月11日・黒田清隆内閣",
          "第三次吉田茂内閣",
          "第一次吉田茂内閣"
        ],
        "correct": 2,
        "answer": "第三次吉田茂内閣",
        "category": "cabinet"
      },
      {
        "type": "truefalse",
        "statement": "1952年、警察予備隊から改組されたものは国民主権・平和主義・基本的人権の尊重である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1952年、警察予備隊から改組されたものは保安隊である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1954年、日米間で締結され自衛隊発足のきっかけとなった協定は？",
        "choices": [
          "MSA協定（日米相互防衛援助協定）",
          "サンフランシスコ平和条約"
        ],
        "correct": 0,
        "answer": "MSA協定（日米相互防衛援助協定）",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "1954年に発足した組織は？",
        "choices": [
          "防衛装備移転三原則",
          "防衛計画の大綱",
          "国際連合加盟",
          "自衛隊"
        ],
        "correct": 3,
        "answer": "自衛隊",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "自衛隊の最高指揮監督権をもつのは誰か？",
        "choices": [
          "カンボジア",
          "非核三原則",
          "内閣総理大臣",
          "防衛装備移転三原則"
        ],
        "correct": 2,
        "answer": "内閣総理大臣",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "防衛庁長官（現・防衛大臣）が文民でなければならないという原則は統治行為論である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "防衛庁長官（現・防衛大臣）が文民でなければならないという原則は文民統制（シビリアン・コントロール）である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1976年に決定された、防衛費をGNP1％枠内とする方針は？",
        "choices": [
          "防衛計画の大綱",
          "内閣総理大臣"
        ],
        "correct": 0,
        "answer": "防衛計画の大綱",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1992年に制定された、自衛隊の海外派遣を可能にした法律は？",
        "choices": [
          "PKO協力法（国連平和維持活動協力法）",
          "安全保障関連法",
          "イラク復興支援特別措置法",
          "周辺事態法"
        ],
        "correct": 0,
        "answer": "PKO協力法（国連平和維持活動協力法）",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "PKO協力法制定時の内閣総理大臣は？",
        "choices": [
          "宮沢喜一",
          "岸信介",
          "モンテスキュー",
          "ホッブズ"
        ],
        "correct": 0,
        "answer": "宮沢喜一",
        "category": "person"
      },
      {
        "type": "truefalse",
        "statement": "1992年にPKO協力法にもとづき初めて自衛隊が派遣された国は内閣総理大臣である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1992年にPKO協力法にもとづき初めて自衛隊が派遣された国はカンボジアである。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "2007年、防衛庁が昇格してできた省庁は？",
        "choices": [
          "防衛省",
          "第一回原水爆禁止世界大会"
        ],
        "correct": 0,
        "answer": "防衛省",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "2013年に設置された、国防の重要事項を決定する機関は？",
        "choices": [
          "防衛省",
          "国家安全保障会議（日本版NSC）",
          "第一回原水爆禁止世界大会",
          "政党"
        ],
        "correct": 1,
        "answer": "国家安全保障会議（日本版NSC）",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "日米安保条約に関する合憲・違憲を争った1957年の訴訟は？",
        "choices": [
          "足尾銅山鉱毒事件",
          "恵庭事件",
          "長沼ナイキ基地訴訟",
          "砂川事件"
        ],
        "correct": 3,
        "answer": "砂川事件",
        "category": "case"
      },
      {
        "type": "truefalse",
        "statement": "砂川事件で最高裁が採用した、高度に政治的な問題への憲法判断を回避する理論は非核三原則である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "砂川事件で最高裁が採用した、高度に政治的な問題への憲法判断を回避する理論は統治行為論である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1962年に起きた自衛隊に関する訴訟は？",
        "choices": [
          "恵庭事件",
          "長沼ナイキ基地訴訟"
        ],
        "correct": 0,
        "answer": "恵庭事件",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "1982年に起きた自衛隊に関する訴訟は？",
        "choices": [
          "『石に泳ぐ魚』事件",
          "砂川事件",
          "長沼ナイキ基地訴訟",
          "恵庭事件"
        ],
        "correct": 2,
        "answer": "長沼ナイキ基地訴訟",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "政府解釈で「自衛のための必要最小限度の実力」は禁止されないとする立場を何というか？",
        "choices": [
          "沖縄",
          "国民主権・平和主義・基本的人権の尊重",
          "自衛力合憲論",
          "内閣総理大臣"
        ],
        "correct": 2,
        "answer": "自衛力合憲論",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1967年、第二次佐藤栄作内閣が表明した「もたず、作らず、もち込ませず」の原則は自衛力合憲論である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1967年、第二次佐藤栄作内閣が表明した「もたず、作らず、もち込ませず」の原則は非核三原則である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1967年、第二次佐藤栄作内閣が表明した武器輸出に関する原則は？",
        "choices": [
          "防衛計画の大綱",
          "武器輸出三原則"
        ],
        "correct": 1,
        "answer": "武器輸出三原則",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "2014年、武器輸出三原則にかわり閣議決定された原則は？",
        "choices": [
          "防衛装備移転三原則",
          "自衛力合憲論",
          "武器輸出三原則",
          "自衛隊"
        ],
        "correct": 0,
        "answer": "防衛装備移転三原則",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1999年制定の、周辺事態における自衛隊の米軍協力を定めた法律は？",
        "choices": [
          "海賊対処法",
          "周辺事態法",
          "テロ対策特別措置法",
          "PKO協力法（国連平和維持活動協力法）"
        ],
        "correct": 1,
        "answer": "周辺事態法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "2001年、アメリカ同時多発テロを受け制定された法律は安全保障関連法である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "2001年、アメリカ同時多発テロを受け制定された法律はテロ対策特別措置法である。",
        "category": "law"
      },
      {
        "type": "2choice",
        "prompt": "2003年、イラク戦争を受け制定された法律は？",
        "choices": [
          "海賊対処法",
          "イラク復興支援特別措置法"
        ],
        "correct": 1,
        "answer": "イラク復興支援特別措置法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "2009年、海上自衛隊をソマリアに派遣する根拠となった法律は？",
        "choices": [
          "安全保障関連法",
          "海賊対処法",
          "PKO協力法（国連平和維持活動協力法）",
          "周辺事態法"
        ],
        "correct": 1,
        "answer": "海賊対処法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "2014年に閣議決定された、憲法解釈の変更を伴う権利は？",
        "choices": [
          "拒否権",
          "男女普通選挙権",
          "平和的生存権",
          "集団的自衛権"
        ],
        "correct": 3,
        "answer": "集団的自衛権",
        "category": "right"
      },
      {
        "type": "truefalse",
        "statement": "2015年に制定された、集団的自衛権行使などを含む法律群は海賊対処法である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "2015年に制定された、集団的自衛権行使などを含む法律群は安全保障関連法である。",
        "category": "law"
      }
    ]
  },
  "7": {
    "title": "第7講 国会（立法権）",
    "items": [
      {
        "type": "4choice",
        "prompt": "国会の地位について規定する憲法の条文は？",
        "choices": [
          "第41条",
          "10日以内",
          "出席議員の3分の2以上",
          "60日以内"
        ],
        "correct": 0,
        "answer": "第41条",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "国会は「国権の最高機関」であり、国の両院協議会とされる。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国会は「国権の最高機関」であり、国の唯一の立法機関とされる。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "衆議院の定数と任期を答えよ。",
        "choices": [
          "465名・4年",
          "60日以内"
        ],
        "correct": 0,
        "answer": "465名・4年",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "衆議院議員の被選挙権年齢は？",
        "choices": [
          "60日以内",
          "総議員の3分の1以上",
          "150日",
          "25歳以上"
        ],
        "correct": 3,
        "answer": "25歳以上",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "衆議院の選挙制度は？",
        "choices": [
          "小選挙区比例代表並立制",
          "特別国会（特別会）",
          "アメリカ",
          "問責決議"
        ],
        "correct": 0,
        "answer": "小選挙区比例代表並立制",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "参議院の定数と任期は150日である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "参議院の定数と任期は248名・6年である。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "参議院議員の被選挙権年齢は？",
        "choices": [
          "30歳以上",
          "30日以内"
        ],
        "correct": 0,
        "answer": "30歳以上",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "参議院は何年ごとに半数改選されるか？",
        "choices": [
          "3年ごと",
          "総議員の3分の1以上",
          "248名・6年",
          "20人以上"
        ],
        "correct": 0,
        "answer": "3年ごと",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "政党化が進んだ参議院が揶揄される言葉は？",
        "choices": [
          "衆議院のカーボンコピー",
          "ねじれ国会",
          "特別国会（特別会）",
          "公聴会"
        ],
        "correct": 0,
        "answer": "衆議院のカーボンコピー",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "予算の議決・条約の承認・内閣総理大臣の指名で意見が一致しない場合に開かれる会議は弾劾裁判所である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "予算の議決・条約の承認・内閣総理大臣の指名で意見が一致しない場合に開かれる会議は両院協議会である。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "予算の議決・条約の承認において参議院が議決しない場合の期限は？",
        "choices": [
          "30日以内",
          "25歳以上"
        ],
        "correct": 0,
        "answer": "30日以内",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "内閣総理大臣の指名において参議院が議決しない場合の期限は？",
        "choices": [
          "衆参10人ずつ計20人",
          "150日",
          "30日以内",
          "10日以内"
        ],
        "correct": 3,
        "answer": "10日以内",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "参議院が法律案を否決した場合、衆議院が再可決するのに必要な要件は？",
        "choices": [
          "出席議員の3分の2以上の賛成",
          "248名・6年",
          "総議員の3分の1以上",
          "第41条"
        ],
        "correct": 0,
        "answer": "出席議員の3分の2以上の賛成",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "参議院が衆議院可決の法律案を受け取ってから総議員の3分の2以上に議決しないとみなし否決とされる。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "参議院が衆議院可決の法律案を受け取ってから60日以内に議決しないとみなし否決とされる。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "議員提出法案に必要な衆議院議員の賛成人数は？",
        "choices": [
          "20人以上",
          "25歳以上"
        ],
        "correct": 0,
        "answer": "20人以上",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "予算をともなう法律案の議員提出に必要な衆議院議員の賛成人数は？",
        "choices": [
          "3年ごと",
          "60日以内",
          "50人以上",
          "30歳以上"
        ],
        "correct": 2,
        "answer": "50人以上",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "条約締結権をもつ機関は？",
        "choices": [
          "内閣",
          "衆参10人ずつ計20人",
          "30歳以上",
          "60日以内"
        ],
        "correct": 0,
        "answer": "内閣",
        "category": "cabinet"
      },
      {
        "type": "truefalse",
        "statement": "憲法改正の発議に必要な各議院の賛成要件は60日以内である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "憲法改正の発議に必要な各議院の賛成要件は総議員の3分の2以上である。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "内閣の責任を追及するため参議院が行える決議は？",
        "choices": [
          "問責決議",
          "租税法律主義"
        ],
        "correct": 0,
        "answer": "問責決議",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "国政全般を調査する国会の権限は？",
        "choices": [
          "国政調査権",
          "不逮捕特権",
          "法案提出権",
          "免責特権"
        ],
        "correct": 0,
        "answer": "国政調査権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "国政調査権の行使に関して制定されている法律は？",
        "choices": [
          "議院証言法",
          "国会審議活性化法",
          "不文憲法",
          "特定秘密保護法"
        ],
        "correct": 0,
        "answer": "議院証言法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "国会に設置される、裁判官を罷免するための裁判所は両院協議会である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国会に設置される、裁判官を罷免するための裁判所は弾劾裁判所である。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "弾劾裁判所は何人の国会議員で構成されるか？",
        "choices": [
          "衆参7人ずつ計14人",
          "30歳以上"
        ],
        "correct": 0,
        "answer": "衆参7人ずつ計14人",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "裁判官訴追委員会は何人で構成されるか？",
        "choices": [
          "第41条",
          "衆参10人ずつ計20人",
          "出席議員の3分の2以上の賛成",
          "248名・6年"
        ],
        "correct": 1,
        "answer": "衆参10人ずつ計20人",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "国の収入である租税の賦課・徴収は法律によらなければならないという原則は？",
        "choices": [
          "通常国会（常会）",
          "問責決議",
          "租税法律主義",
          "国対政治"
        ],
        "correct": 2,
        "answer": "租税法律主義",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "議員の除名に必要な議決要件は60日以内である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "議員の除名に必要な議決要件は出席議員の3分の2以上である。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "毎年1回、1月に召集される国会は？",
        "choices": [
          "通常国会（常会）",
          "租税法律主義"
        ],
        "correct": 0,
        "answer": "通常国会（常会）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "通常国会の会期は？",
        "choices": [
          "30歳以上",
          "25歳以上",
          "第41条",
          "150日"
        ],
        "correct": 3,
        "answer": "150日",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "内閣が必要と認めたとき、またはいずれかの議院の総議員4分の1以上の要求で召集される国会は？",
        "choices": [
          "臨時国会（臨時会）",
          "ねじれ国会",
          "小選挙区比例代表並立制",
          "通常国会（常会）"
        ],
        "correct": 0,
        "answer": "臨時国会（臨時会）",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "衆議院解散後、総選挙後30日以内に召集される国会はアメリカである。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "衆議院解散後、総選挙後30日以内に召集される国会は特別国会（特別会）である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "衆議院閉会中に緊急事態が生じた際、内閣の求めで参議院のみで開かれる集会は？",
        "choices": [
          "参議院の緊急集会",
          "アメリカ"
        ],
        "correct": 0,
        "answer": "参議院の緊急集会",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "参議院の緊急集会の議決は、次の国会開会後何日以内に衆議院の同意が必要か？",
        "choices": [
          "465名・4年",
          "10日以内",
          "248名・6年",
          "60日以内"
        ],
        "correct": 1,
        "answer": "10日以内",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "本会議の成立に必要な出席要件は？",
        "choices": [
          "総議員の3分の1以上",
          "20人以上",
          "総議員の3分の2以上",
          "出席議員の3分の2以上の賛成"
        ],
        "correct": 0,
        "answer": "総議員の3分の1以上",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "議案の実質的審議を本会議に先立って行う、非公開の会議は唯一の立法機関である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "議案の実質的審議を本会議に先立って行う、非公開の会議は委員会である。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "日本の委員会中心主義はどこの国にならったものか？",
        "choices": [
          "歳費",
          "アメリカ"
        ],
        "correct": 1,
        "answer": "アメリカ",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "予算委員会で開会が義務づけられている、有識者らが意見陳述する会は？",
        "choices": [
          "歳費",
          "公聴会",
          "アメリカ",
          "租税法律主義"
        ],
        "correct": 1,
        "answer": "公聴会",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "国会議員が国庫から受ける報酬を何というか？",
        "choices": [
          "租税法律主義",
          "衆議院のカーボンコピー",
          "歳費",
          "通常国会（常会）"
        ],
        "correct": 2,
        "answer": "歳費",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "国会の会期中、現行犯を除き逮捕されない国会議員の特権は国政調査権である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国会の会期中、現行犯を除き逮捕されない国会議員の特権は不逮捕特権である。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "院内での発言について院外で責任を問われない国会議員の特権は？",
        "choices": [
          "国政調査権",
          "免責特権"
        ],
        "correct": 1,
        "answer": "免責特権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "法案をめぐる駆け引きが各党の国会対策委員間の折衝で行われる不透明な国会運営を何というか？",
        "choices": [
          "問責決議",
          "党首討論",
          "小選挙区比例代表並立制",
          "国対政治"
        ],
        "correct": 3,
        "answer": "国対政治",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "衆議院の与党と参議院の多数派が異なる状態を何というか？",
        "choices": [
          "通常国会（常会）",
          "公聴会",
          "アメリカ",
          "ねじれ国会"
        ],
        "correct": 3,
        "answer": "ねじれ国会",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1999年に成立した、政府委員制度廃止などを含む法律は議院証言法である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1999年に成立した、政府委員制度廃止などを含む法律は国会審議活性化法である。",
        "category": "law"
      },
      {
        "type": "2choice",
        "prompt": "イギリスのクエスチョン・タイムにならった、与野党党首による討論制度は？",
        "choices": [
          "党首討論",
          "公聴会"
        ],
        "correct": 0,
        "answer": "党首討論",
        "category": "term"
      }
    ]
  },
  "8": {
    "title": "第8講 内閣（行政権）",
    "items": [
      {
        "type": "4choice",
        "prompt": "内閣の地位と行政権について規定する憲法の条文は？",
        "choices": [
          "第65条",
          "1府12省庁体制",
          "14人以内",
          "4回"
        ],
        "correct": 0,
        "answer": "第65条",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "内閣の首長をビューロクラシーという。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "内閣の首長を内閣総理大臣（首相）という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "首相はどこから選出されるか？",
        "choices": [
          "同輩中の首席",
          "国会議員の中から国会の指名"
        ],
        "correct": 1,
        "answer": "国会議員の中から国会の指名",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "国務大臣を任命するのは誰か？",
        "choices": [
          "閣議",
          "JR",
          "事業仕分け",
          "内閣総理大臣"
        ],
        "correct": 3,
        "answer": "内閣総理大臣",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "閣僚に求められる条件は？",
        "choices": [
          "文民であること",
          "積極国家・福祉国家（大きな政府）・行政国家",
          "国会議員の中から国会の指名",
          "過半数"
        ],
        "correct": 0,
        "answer": "文民であること",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "内閣の存立が国会の信任を条件とする制度を積極国家・福祉国家（大きな政府）・行政国家という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "内閣の存立が国会の信任を条件とする制度を議院内閣制という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "国務大臣のうち国会議員でなければならない人数の条件は？",
        "choices": [
          "過半数",
          "テクノクラート"
        ],
        "correct": 0,
        "answer": "過半数",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "首相を除く国務大臣の人数の原則は？",
        "choices": [
          "10日以内",
          "14人以内",
          "7条解散",
          "1府12省庁体制"
        ],
        "correct": 1,
        "answer": "14人以内",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "内閣不信任決議可決後、何日以内に解散しないと内閣は総辞職するか？",
        "choices": [
          "1府12省庁体制",
          "10日以内",
          "69条解散",
          "第65条"
        ],
        "correct": 1,
        "answer": "10日以内",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "国の祝典に際し刑の効果を減免することを控訴という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国の祝典に際し刑の効果を減免することを恩赦という。",
        "category": "procedure"
      },
      {
        "type": "2choice",
        "prompt": "内閣総理大臣の判断による一般的な衆議院解散を何というか？",
        "choices": [
          "14人以内",
          "7条解散"
        ],
        "correct": 1,
        "answer": "7条解散",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "7条解散の合憲性が争われた訴訟は？",
        "choices": [
          "朝日訴訟",
          "ロッキード事件",
          "苫米地訴訟",
          "リクルート事件"
        ],
        "correct": 2,
        "answer": "苫米地訴訟",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "内閣不信任決議案可決による衆議院解散を何というか？",
        "choices": [
          "第65条",
          "7条解散",
          "1府12省庁体制",
          "69条解散"
        ],
        "correct": 3,
        "answer": "69条解散",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "69条解散はこれまで10日以内あった。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "69条解散はこれまで4回あった。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "大日本帝国憲法下で首相はどのような地位だったか？",
        "choices": [
          "同輩中の首席",
          "NTT"
        ],
        "correct": 0,
        "answer": "同輩中の首席",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "日本国憲法下で首相はどのような地位か？",
        "choices": [
          "同輩中の首席",
          "補助金行政",
          "内閣の首長",
          "消極国家・夜警国家（小さな政府）・立法国家"
        ],
        "correct": 2,
        "answer": "内閣の首長",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "民意に沿い首相を選ぶという考え方は？",
        "choices": [
          "パブリックコメント",
          "首相公選論",
          "ビューロクラシー",
          "NTT"
        ],
        "correct": 1,
        "answer": "首相公選論",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "すべての国務大臣が出席し非公開・全会一致で行われる会議は消極国家・夜警国家（小さな政府）・立法国家である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "すべての国務大臣が出席し非公開・全会一致で行われる会議は閣議である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "定例閣議は週何回開かれるか？",
        "choices": [
          "週2回",
          "4回"
        ],
        "correct": 0,
        "answer": "週2回",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "閣議を開かず閣僚に押印を求める慣例を何というか？",
        "choices": [
          "積極国家・福祉国家（大きな政府）・行政国家",
          "全体の奉仕者",
          "通達行政",
          "もち回り閣議"
        ],
        "correct": 3,
        "answer": "もち回り閣議",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "自衛隊の防衛出動・治安出動の命令は誰が発するか？",
        "choices": [
          "鉄の三角形",
          "パブリックコメント",
          "内閣総理大臣",
          "通達行政"
        ],
        "correct": 2,
        "answer": "内閣総理大臣",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "2001年の省庁再編で10日以内になった。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "2001年の省庁再編で1府12省庁体制になった。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "閣議事項の整理などをつかさどる機関は？",
        "choices": [
          "内閣官房",
          "オンブズマン制度"
        ],
        "correct": 0,
        "answer": "内閣官房",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "他の省庁より一段高い位置から行政活動の調整を行う機関は？",
        "choices": [
          "審議会",
          "公正取引委員会",
          "内閣府",
          "復興庁"
        ],
        "correct": 2,
        "answer": "内閣府",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "2011年の東日本大震災後、期間限定で設置された省庁は？",
        "choices": [
          "復興庁",
          "公正取引委員会",
          "行政委員会",
          "審議会"
        ],
        "correct": 0,
        "answer": "復興庁",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "内閣からある程度独立し準立法的・準司法的機能をもつ合議制機関を審議会という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "内閣からある程度独立し準立法的・準司法的機能をもつ合議制機関を行政委員会という。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "公正取引などを扱う行政委員会は？",
        "choices": [
          "内閣府",
          "公正取引委員会"
        ],
        "correct": 1,
        "answer": "公正取引委員会",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "18〜19世紀の国家観を3つ答えよ。",
        "choices": [
          "NTT",
          "消極国家・夜警国家（小さな政府）・立法国家",
          "JR",
          "文民であること"
        ],
        "correct": 1,
        "answer": "消極国家・夜警国家（小さな政府）・立法国家",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "20世紀の国家観を3つ答えよ。",
        "choices": [
          "過半数",
          "積極国家・福祉国家（大きな政府）・行政国家",
          "天下り",
          "内閣官房"
        ],
        "correct": 1,
        "answer": "積極国家・福祉国家（大きな政府）・行政国家",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "国会は法律の大枠のみ定め、細部を内閣の命令に委ねることを行政手続法という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国会は法律の大枠のみ定め、細部を内閣の命令に委ねることを委任立法という。",
        "category": "law"
      },
      {
        "type": "2choice",
        "prompt": "法令の根拠なしで企業に協力を求める日本独自の方法は？",
        "choices": [
          "同輩中の首席",
          "行政指導"
        ],
        "correct": 1,
        "answer": "行政指導",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "自由競争を制限する「護送船団方式」の改善のため1993年に制定された法律は？",
        "choices": [
          "行政手続法",
          "情報公開法",
          "委任立法",
          "地方財政法"
        ],
        "correct": 0,
        "answer": "行政手続法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "「通達」により政令・省令の解釈運用を示す行政を何というか？",
        "choices": [
          "NTT",
          "テクノクラシー",
          "内閣官房",
          "通達行政"
        ],
        "correct": 3,
        "answer": "通達行政",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "政府が地方自治体等に交付する補助金により統制することをもち回り閣議という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "政府が地方自治体等に交付する補助金により統制することを補助金行政という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "専門技術官僚をカタカナで何というか？",
        "choices": [
          "通達行政",
          "テクノクラート"
        ],
        "correct": 1,
        "answer": "テクノクラート",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "専門官僚支配を何というか？",
        "choices": [
          "同輩中の首席",
          "オンブズマン制度",
          "テクノクラシー",
          "パブリックコメント"
        ],
        "correct": 2,
        "answer": "テクノクラシー",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "官僚制の本格的研究を最初に行った学者は？",
        "choices": [
          "ブラクトン",
          "マックス=ウェーバー",
          "大隈重信",
          "ヒトラー"
        ],
        "correct": 1,
        "answer": "マックス=ウェーバー",
        "category": "person"
      },
      {
        "type": "truefalse",
        "statement": "官僚制の別名（カタカナ）は天下りである。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "官僚制の別名（カタカナ）はビューロクラシーである。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "高級官僚が退職後、特殊法人や関連民間企業に好条件で再就職することを何というか？",
        "choices": [
          "天下り",
          "全体の奉仕者"
        ],
        "correct": 0,
        "answer": "天下り",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "政治家・官僚・企業の癒着構造を何というか？",
        "choices": [
          "通達行政",
          "鉄の三角形",
          "議院内閣制",
          "テクノクラシー"
        ],
        "correct": 1,
        "answer": "鉄の三角形",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1976年に発覚した戦後の大規模な汚職事件は？",
        "choices": [
          "リクルート事件",
          "苫米地訴訟",
          "朝日訴訟",
          "ロッキード事件"
        ],
        "correct": 3,
        "answer": "ロッキード事件",
        "category": "case"
      },
      {
        "type": "truefalse",
        "statement": "1988年に発覚した汚職事件は苫米地訴訟である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1988年に発覚した汚職事件はリクルート事件である。",
        "category": "case"
      },
      {
        "type": "2choice",
        "prompt": "大日本帝国憲法下で公務員はどのような存在とされたか？",
        "choices": [
          "閣議",
          "天皇の官吏"
        ],
        "correct": 1,
        "answer": "天皇の官吏",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "日本国憲法下で公務員はどのような存在とされるか？",
        "choices": [
          "JR",
          "行政指導",
          "全体の奉仕者",
          "天皇の官吏"
        ],
        "correct": 2,
        "answer": "全体の奉仕者",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "有識者が専門的立場から行政機関に諮問する機関は？",
        "choices": [
          "内閣府",
          "復興庁",
          "行政委員会",
          "審議会"
        ],
        "correct": 3,
        "answer": "審議会",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "内閣の施策について決定前に広く国民の意見を募る制度は同輩中の首席である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "内閣の施策について決定前に広く国民の意見を募る制度はパブリックコメントである。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "19世紀初め、スウェーデンで創設された行政監察制度は？",
        "choices": [
          "内閣官房",
          "オンブズマン制度"
        ],
        "correct": 1,
        "answer": "オンブズマン制度",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1990年、日本で初めてオンブズマン制度を導入した自治体は？",
        "choices": [
          "内閣官房",
          "川崎市",
          "天下り",
          "JR"
        ],
        "correct": 1,
        "answer": "川崎市",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1985年に民営化された電電公社の後身は？",
        "choices": [
          "川崎市",
          "議院内閣制",
          "JR",
          "NTT"
        ],
        "correct": 3,
        "answer": "NTT",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1987年に分割民営化された国鉄の後身は消極国家・夜警国家（小さな政府）・立法国家である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1987年に分割民営化された国鉄の後身はJRである。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1999年に制定された情報公開に関する法律は？",
        "choices": [
          "行政手続法",
          "情報公開法"
        ],
        "correct": 1,
        "answer": "情報公開法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "2009年〜10年に導入された、予算の無駄を洗い出す取り組みは？",
        "choices": [
          "首相公選論",
          "補助金行政",
          "行政指導",
          "事業仕分け"
        ],
        "correct": 3,
        "answer": "事業仕分け",
        "category": "term"
      }
    ]
  },
  "9": {
    "title": "第9講 裁判所（司法権）",
    "items": [
      {
        "type": "4choice",
        "prompt": "裁判所と司法権の独立について規定する憲法の条文は？",
        "choices": [
          "満40歳以上",
          "満65歳",
          "第76条",
          "満70歳"
        ],
        "correct": 2,
        "answer": "第76条",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "大日本帝国憲法下で裁判官は児島惟謙の名において裁判を行った。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "大日本帝国憲法下で裁判官は天皇の名において裁判を行った。",
        "category": "person"
      },
      {
        "type": "2choice",
        "prompt": "特別な身分や事件にのみ裁判権をもつ、日本国憲法で禁止されている裁判所は？",
        "choices": [
          "知的財産高等裁判所",
          "特別裁判所"
        ],
        "correct": 1,
        "answer": "特別裁判所",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "大日本帝国憲法下にあった特別裁判所を1つ答えよ。",
        "choices": [
          "皇室裁判所（または行政裁判所・軍法会議）",
          "高等裁判所",
          "簡易裁判所",
          "最高裁判所"
        ],
        "correct": 0,
        "answer": "皇室裁判所（または行政裁判所・軍法会議）",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "裁判官がその良心に従い独立して職権を行うことを何というか？",
        "choices": [
          "尊属殺重罰規定",
          "裁判官の（職権の）独立",
          "裁判公開の原則",
          "憲法の番人"
        ],
        "correct": 1,
        "answer": "裁判官の（職権の）独立",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "裁判官が罷免される場合は陪審制度である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "裁判官が罷免される場合は心身の故障による裁判・弾劾裁判所の裁判・国民審査である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "これまで弾劾裁判所で罷免された裁判官は何人か？",
        "choices": [
          "満40歳以上",
          "8人"
        ],
        "correct": 1,
        "answer": "8人",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "最高裁判所裁判官の国民審査で罷免された実例はあるか？",
        "choices": [
          "憲法の番人",
          "ない",
          "尊属殺重罰規定",
          "ADR"
        ],
        "correct": 1,
        "answer": "ない",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "高等・地方・家庭裁判所の裁判官の定年は満何歳か？",
        "choices": [
          "満40歳以上",
          "満65歳",
          "6人の裁判員と3人の職業裁判官",
          "長官＋14人＝15人"
        ],
        "correct": 1,
        "answer": "満65歳",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "最高裁判所・簡易裁判所の裁判官の定年は11人である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "最高裁判所・簡易裁判所の裁判官の定年は満70歳である。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "1891年、訪日中のロシア皇太子が襲撃された事件は？",
        "choices": [
          "空知太神社訴訟",
          "大津事件"
        ],
        "correct": 1,
        "answer": "大津事件",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "大津事件で担当裁判官を説得した大審院長は？",
        "choices": [
          "鳩山一郎",
          "天皇（内閣の指名にもとづき）",
          "犬養毅",
          "児島惟謙"
        ],
        "correct": 3,
        "answer": "児島惟謙",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "大津事件で問題視されているのは何への干渉か？",
        "choices": [
          "司法取引制度",
          "陪審制度",
          "裁判官の（職権の）独立",
          "三審制"
        ],
        "correct": 2,
        "answer": "裁判官の（職権の）独立",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1969年、札幌地裁所長が担当裁判官に手紙を渡した事件は衆議院議員定数違憲訴訟である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1969年、札幌地裁所長が担当裁判官に手紙を渡した事件は平賀書簡事件である。",
        "category": "case"
      },
      {
        "type": "2choice",
        "prompt": "1948年、参議院の国政調査権行使が問題となった事件は？",
        "choices": [
          "浦和事件",
          "女性の再婚禁止期間違憲判決"
        ],
        "correct": 0,
        "answer": "浦和事件",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "最終判断をする終審裁判所は？",
        "choices": [
          "皇室裁判所（または行政裁判所・軍法会議）",
          "特別裁判所",
          "高等裁判所",
          "最高裁判所"
        ],
        "correct": 3,
        "answer": "最高裁判所",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "最高裁判所は長官と何人の裁判官で構成されるか？",
        "choices": [
          "長官＋14人＝15人",
          "満70歳",
          "8人",
          "11人"
        ],
        "correct": 0,
        "answer": "長官＋14人＝15人",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "最高裁判所長官は児島惟謙が任命する。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "最高裁判所長官は天皇（内閣の指名にもとづき）が任命する。",
        "category": "person"
      },
      {
        "type": "2choice",
        "prompt": "最高裁判事の資格要件は満何歳以上か？",
        "choices": [
          "満70歳",
          "満40歳以上"
        ],
        "correct": 1,
        "answer": "満40歳以上",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "全国8カ所に置かれる下級裁判所は？",
        "choices": [
          "簡易裁判所",
          "高等裁判所",
          "家庭裁判所",
          "皇室裁判所（または行政裁判所・軍法会議）"
        ],
        "correct": 1,
        "answer": "高等裁判所",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "東京高等裁判所内に置かれる専門裁判所（2005年設置）は？",
        "choices": [
          "簡易裁判所",
          "知的財産高等裁判所",
          "検察審査会",
          "家庭裁判所"
        ],
        "correct": 1,
        "answer": "知的財産高等裁判所",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "全国50カ所に置かれ、少年保護事件の審判を扱う裁判所は知的財産高等裁判所である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "全国50カ所に置かれ、少年保護事件の審判を扱う裁判所は家庭裁判所である。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "罰金以下の刑や140万円以下の請求を扱う裁判所は？",
        "choices": [
          "簡易裁判所",
          "家庭裁判所"
        ],
        "correct": 0,
        "answer": "簡易裁判所",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "検察官が犯罪被疑者を裁判所に訴えることを何というか？",
        "choices": [
          "上告",
          "起訴",
          "抗告",
          "再審制度"
        ],
        "correct": 1,
        "answer": "起訴",
        "category": "procedure"
      },
      {
        "type": "4choice",
        "prompt": "故意の場合に責任を問う裁判を何というか？",
        "choices": [
          "刑事裁判",
          "法テラス（日本司法支援センター）",
          "民事裁判",
          "ない"
        ],
        "correct": 0,
        "answer": "刑事裁判",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "故意でも過失でも責任を問う裁判をADRという。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "故意でも過失でも責任を問う裁判を民事裁判という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "裁判に比べ迅速で安価な紛争解決手続きの略称は？",
        "choices": [
          "陪審制度",
          "ADR"
        ],
        "correct": 1,
        "answer": "ADR",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "慎重な裁判を行うため同一事件で原則3回の審理機会を与える制度は？",
        "choices": [
          "抽象的違憲審査制",
          "三審制",
          "裁判員制度",
          "参審制度"
        ],
        "correct": 1,
        "answer": "三審制",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "第一審判決に対し上訴することを何というか？",
        "choices": [
          "抗告",
          "跳躍上告",
          "控訴",
          "起訴"
        ],
        "correct": 2,
        "answer": "控訴",
        "category": "procedure"
      },
      {
        "type": "truefalse",
        "statement": "第二審判決に対し上訴することを抗告という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "第二審判決に対し上訴することを上告という。",
        "category": "procedure"
      },
      {
        "type": "2choice",
        "prompt": "控訴審を飛び越えて直接上告することを何というか？",
        "choices": [
          "起訴",
          "跳躍上告"
        ],
        "correct": 1,
        "answer": "跳躍上告",
        "category": "procedure"
      },
      {
        "type": "4choice",
        "prompt": "判決によらない裁判所の命令・決定に対する上訴を何というか？",
        "choices": [
          "控訴",
          "再審制度",
          "起訴",
          "抗告"
        ],
        "correct": 3,
        "answer": "抗告",
        "category": "procedure"
      },
      {
        "type": "4choice",
        "prompt": "判決確定後、新証拠等により裁判のやり直しを求める制度は？",
        "choices": [
          "再審制度",
          "控訴",
          "抗告",
          "起訴"
        ],
        "correct": 0,
        "answer": "再審制度",
        "category": "procedure"
      },
      {
        "type": "truefalse",
        "statement": "裁判の対審及び判決を公開法廷で行う原則は統治行為論である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "裁判の対審及び判決を公開法廷で行う原則は裁判公開の原則である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "検察庁の不起訴処分に対し不服を申し立てる機関は？",
        "choices": [
          "皇室裁判所（または行政裁判所・軍法会議）",
          "検察審査会"
        ],
        "correct": 1,
        "answer": "検察審査会",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "検察審査会は何人の審査員で構成されるか？",
        "choices": [
          "11人",
          "満40歳以上",
          "満65歳",
          "長官＋14人＝15人"
        ],
        "correct": 0,
        "answer": "11人",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "2009年から、検察審査会が同一事件で起訴相当と2回議決した場合どうなるか？",
        "choices": [
          "抗告",
          "控訴",
          "強制起訴される",
          "上告"
        ],
        "correct": 2,
        "answer": "強制起訴される",
        "category": "procedure"
      },
      {
        "type": "truefalse",
        "statement": "すべての裁判所がもつ、法律等の憲法適合性を判断する権限は知的財産権である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "すべての裁判所がもつ、法律等の憲法適合性を判断する権限は違憲（立法・法令）審査権である。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "最高裁判所は俗に何とよばれるか？",
        "choices": [
          "憲法の番人",
          "統治行為論"
        ],
        "correct": 0,
        "answer": "憲法の番人",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "アメリカ型の、具体的事件の裁判の中で違憲審査を行う制度を何というか？",
        "choices": [
          "裁判官の（職権の）独立",
          "司法取引制度",
          "裁判公開の原則",
          "付随的審査制"
        ],
        "correct": 3,
        "answer": "付随的審査制",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "ドイツ・韓国などで採用される、特別の憲法裁判所による審査制を何というか？",
        "choices": [
          "裁判員制度",
          "裁判公開の原則",
          "刑事裁判",
          "抽象的違憲審査制"
        ],
        "correct": 3,
        "answer": "抽象的違憲審査制",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "高度に政治的な問題への憲法判断を回避する理論は裁判公開の原則である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "高度に政治的な問題への憲法判断を回避する理論は統治行為論である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1973年に違憲判決が出た刑法の規定は？",
        "choices": [
          "裁判官の（職権の）独立",
          "尊属殺重罰規定"
        ],
        "correct": 1,
        "answer": "尊属殺重罰規定",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1975年に違憲判決が出た訴訟は？",
        "choices": [
          "平賀書簡事件",
          "薬事法距離制限違憲訴訟",
          "女性の再婚禁止期間違憲判決",
          "愛媛玉串料訴訟"
        ],
        "correct": 1,
        "answer": "薬事法距離制限違憲訴訟",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "1976年・85年に違憲判決が出た訴訟は？",
        "choices": [
          "平賀書簡事件",
          "衆議院議員定数違憲訴訟",
          "在外国民選挙権制限違憲判決",
          "女性の再婚禁止期間違憲判決"
        ],
        "correct": 1,
        "answer": "衆議院議員定数違憲訴訟",
        "category": "case"
      },
      {
        "type": "truefalse",
        "statement": "1987年に合憲判決が出た訴訟は共有林分割制限違憲訴訟である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1987年に違憲判決が出た訴訟は共有林分割制限違憲訴訟である。",
        "category": "case"
      },
      {
        "type": "2choice",
        "prompt": "1997年に違憲判決が出た訴訟は？",
        "choices": [
          "薬事法距離制限違憲訴訟",
          "愛媛玉串料訴訟"
        ],
        "correct": 1,
        "answer": "愛媛玉串料訴訟",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "2005年に違憲判決が出て翌年公職選挙法が改正された判決は？",
        "choices": [
          "大津事件",
          "衆議院議員定数違憲訴訟",
          "浦和事件",
          "在外国民選挙権制限違憲判決"
        ],
        "correct": 3,
        "answer": "在外国民選挙権制限違憲判決",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "2008年に違憲判決が出て国籍法が改正された判決は？",
        "choices": [
          "非嫡出子国籍取得制限違憲判決",
          "空知太神社訴訟",
          "共有林分割制限違憲訴訟",
          "平賀書簡事件"
        ],
        "correct": 0,
        "answer": "非嫡出子国籍取得制限違憲判決",
        "category": "case"
      },
      {
        "type": "truefalse",
        "statement": "2010年に合憲判決が出た訴訟は空知太神社訴訟である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "2010年に違憲判決が出た訴訟は空知太神社訴訟である。",
        "category": "case"
      },
      {
        "type": "2choice",
        "prompt": "2013年に違憲判決が出て民法が改正された判決は？",
        "choices": [
          "平賀書簡事件",
          "婚外子相続差別違憲判決"
        ],
        "correct": 1,
        "answer": "婚外子相続差別違憲判決",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "2015年に違憲判決が出た判決は？",
        "choices": [
          "衆議院議員定数違憲訴訟",
          "婚外子相続差別違憲判決",
          "女性の再婚禁止期間違憲判決",
          "大津事件"
        ],
        "correct": 2,
        "answer": "女性の再婚禁止期間違憲判決",
        "category": "case"
      },
      {
        "type": "4choice",
        "prompt": "2009年から導入された、国民が刑事裁判に参加する制度は？",
        "choices": [
          "裁判官の（職権の）独立",
          "参審制度",
          "陪審制度",
          "裁判員制度"
        ],
        "correct": 3,
        "answer": "裁判員制度",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "裁判員制度では長官＋14人＝15人が合議する。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "裁判員制度では6人の裁判員と3人の職業裁判官が合議する。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "ドイツ・フランスなどで採用される、一般市民と裁判官が合議する制度は？",
        "choices": [
          "参審制度",
          "ADR"
        ],
        "correct": 0,
        "answer": "参審制度",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "アメリカ・イギリスなどで採用される、一般市民が有罪無罪を判断する制度は？",
        "choices": [
          "付随的審査制",
          "陪審制度",
          "民事裁判",
          "憲法の番人"
        ],
        "correct": 1,
        "answer": "陪審制度",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "2004年から設置されている専門職大学院は？",
        "choices": [
          "簡易裁判所",
          "高等裁判所",
          "法科大学院（ロースクール）",
          "家庭裁判所"
        ],
        "correct": 2,
        "answer": "法科大学院（ロースクール）",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "2006年から設置されている法律相談窓口は尊属殺重罰規定である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "2006年から設置されている法律相談窓口は法テラス（日本司法支援センター）である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "2018年に導入された、捜査協力により刑罰の減免を得られる制度は？",
        "choices": [
          "三審制",
          "司法取引制度"
        ],
        "correct": 1,
        "answer": "司法取引制度",
        "category": "term"
      }
    ]
  },
  "10": {
    "title": "第10講 地方自治",
    "items": [
      {
        "type": "4choice",
        "prompt": "「地方自治は民主主義の学校」と述べたイギリスの政治学者は？",
        "choices": [
          "グロティウス",
          "トックビル",
          "美濃部達吉",
          "ブライス"
        ],
        "correct": 3,
        "answer": "ブライス",
        "category": "person"
      },
      {
        "type": "truefalse",
        "statement": "「地方自治制度の自由に対する関係は小学校の学問に対するそれと同じ」と述べたフランスの思想家はブライスである。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "「地方自治制度の自由に対する関係は小学校の学問に対するそれと同じ」と述べたフランスの思想家はトックビルである。",
        "category": "person"
      },
      {
        "type": "2choice",
        "prompt": "地域住民の福祉の実現を何というか？",
        "choices": [
          "自治事務",
          "シビル・ミニマム"
        ],
        "correct": 1,
        "answer": "シビル・ミニマム",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "行政の全国的水準を維持するという原則は？",
        "choices": [
          "ナショナル・ミニマム",
          "自治事務",
          "三割自治",
          "ない"
        ],
        "correct": 0,
        "answer": "ナショナル・ミニマム",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "大日本帝国憲法に地方自治の規定はあったか？",
        "choices": [
          "ナショナル・ミニマム",
          "三位一体の改革",
          "イニシアティブ（住民発案）",
          "なかった"
        ],
        "correct": 3,
        "answer": "なかった",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "地方公共団体が中央政府から自立した統治組織であることを地方税という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "地方公共団体が中央政府から自立した統治組織であることを団体自治という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "地域住民が直接・間接に地方政治に参加することを何というか？",
        "choices": [
          "三位一体の改革",
          "住民自治"
        ],
        "correct": 1,
        "answer": "住民自治",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1947年に制定された、地方公共団体の組織・運営の大綱を規定する法律は？",
        "choices": [
          "地方自治法",
          "NPO法（特定非営利活動促進法）",
          "地方分権一括法",
          "地方財政法"
        ],
        "correct": 0,
        "answer": "地方自治法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "1948年に制定された地方財政に関する法律は？",
        "choices": [
          "NPO法（特定非営利活動促進法）",
          "地方分権一括法",
          "地方財政法",
          "地方自治法"
        ],
        "correct": 2,
        "answer": "地方財政法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "都道府県議会・市区町村議会議員の任期は1741（平成の大合併）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "都道府県議会・市区町村議会議員の任期は4年である。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "都道府県知事・市区町村長の任期は？",
        "choices": [
          "有権者の3分の1以上",
          "4年"
        ],
        "correct": 1,
        "answer": "4年",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "地方公共団体に司法機関はあるか？",
        "choices": [
          "ない",
          "国庫支出金",
          "法定受託事務",
          "ナショナル・ミニマム"
        ],
        "correct": 0,
        "answer": "ない",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "中立・公正確保のため首長の権限から除外される行政委員会を1つ答えよ。",
        "choices": [
          "広域連合",
          "唯一の立法機関",
          "国際司法裁判所（ICJ）",
          "教育委員会（または選挙管理委員会）"
        ],
        "correct": 3,
        "answer": "教育委員会（または選挙管理委員会）",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "国政の議院内閣制とは異なる、地方の首長と議会の関係を国庫支出金という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国政の議院内閣制とは異なる、地方の首長と議会の関係を二元代表制という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "首長が議会の議決に対しもつ拒否権を何というか？",
        "choices": [
          "議会解散権",
          "再議に付す権利"
        ],
        "correct": 1,
        "answer": "再議に付す権利",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "議会が首長の拒否権を覆すのに必要な要件は？",
        "choices": [
          "1741（平成の大合併）",
          "出席議員の3分の2以上での再議決",
          "総議員の3分の2以上出席し、その4分の3以上の賛成",
          "有権者の50分の1以上"
        ],
        "correct": 1,
        "answer": "出席議員の3分の2以上での再議決",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "議会の首長に対する不信任決議に必要な要件は？",
        "choices": [
          "出席議員の3分の2以上での再議決",
          "有権者の50分の1以上",
          "有権者の3分の1以上",
          "総議員の3分の2以上出席し、その4分の3以上の賛成"
        ],
        "correct": 3,
        "answer": "総議員の3分の2以上出席し、その4分の3以上の賛成",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "首長が不信任決議を受け辞職しない場合にもつ権限は再議に付す権利である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "首長が不信任決議を受け辞職しない場合にもつ権限は議会解散権である。",
        "category": "right"
      },
      {
        "type": "2choice",
        "prompt": "1999年制定、機関委任事務を廃止した法律は？",
        "choices": [
          "地方分権一括法",
          "NPO法（特定非営利活動促進法）"
        ],
        "correct": 0,
        "answer": "地方分権一括法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "地方公共団体が独自の責任で処理する事務を何というか？",
        "choices": [
          "国庫支出金",
          "なかった",
          "自治事務",
          "地方交付税"
        ],
        "correct": 2,
        "answer": "自治事務",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "国の関与が必要で法令で定められる事務を何というか？",
        "choices": [
          "法定受託事務",
          "夕張市",
          "シビル・ミニマム",
          "自治事務"
        ],
        "correct": 0,
        "answer": "法定受託事務",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "住民が首長・議員などの解職を請求する権利をなかったという。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "住民が首長・議員などの解職を請求する権利をリコール（解職請求）という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "首長・議員の解職請求に必要な署名数は？",
        "choices": [
          "有権者の3分の1以上",
          "4年"
        ],
        "correct": 0,
        "answer": "有権者の3分の1以上",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "住民による条例の制定・改廃請求を何というか？",
        "choices": [
          "法定受託事務",
          "イニシアティブ（住民発案）",
          "三位一体の改革",
          "ナショナル・ミニマム"
        ],
        "correct": 1,
        "answer": "イニシアティブ（住民発案）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "イニシアティブに必要な署名数は？",
        "choices": [
          "4年",
          "有権者の50分の1以上",
          "総議員の3分の2以上出席し、その4分の3以上の賛成",
          "1741（平成の大合併）"
        ],
        "correct": 1,
        "answer": "有権者の50分の1以上",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "地方公共団体の事業の管理等の監査を求める権利はリコール（解職請求）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "地方公共団体の事業の管理等の監査を求める権利は監査請求である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "ある地方公共団体にのみ適用される特別法についての住民投票を何というか？",
        "choices": [
          "レファレンダム（住民投票）",
          "夕張市"
        ],
        "correct": 0,
        "answer": "レファレンダム（住民投票）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "地方公共団体の自主財源で一般財源にあたるものは？",
        "choices": [
          "道州制",
          "二元代表制",
          "地方交付税の見直し・国庫支出金の削減・地方への税源移譲",
          "地方税"
        ],
        "correct": 3,
        "answer": "地方税",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "地方公共団体の財政格差是正のため国から交付される、使途自由な依存財源は？",
        "choices": [
          "リコール（解職請求）",
          "監査請求",
          "レファレンダム（住民投票）",
          "地方交付税"
        ],
        "correct": 3,
        "answer": "地方交付税",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "事業ごとに使途が指定される国からの依存財源はレファレンダム（住民投票）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "事業ごとに使途が指定される国からの依存財源は国庫支出金である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "地方税収入が全体の3〜4割しかないことを何というか？",
        "choices": [
          "三割自治",
          "道州制"
        ],
        "correct": 0,
        "answer": "三割自治",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "2007年に財政破綻した北海道の市は？",
        "choices": [
          "夕張市",
          "ナショナル・ミニマム",
          "二元代表制",
          "監査請求"
        ],
        "correct": 0,
        "answer": "夕張市",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "2002年以降、小泉純一郎内閣が進めた地方財政改革を何というか？",
        "choices": [
          "団体自治",
          "三位一体の改革",
          "レファレンダム（住民投票）",
          "夕張市"
        ],
        "correct": 1,
        "answer": "三位一体の改革",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "三位一体の改革の内容は自治事務である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "三位一体の改革の内容は地方交付税の見直し・国庫支出金の削減・地方への税源移譲である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1998年制定、NPOに法人格を与える法律は？",
        "choices": [
          "地方財政法",
          "NPO法（特定非営利活動促進法）"
        ],
        "correct": 1,
        "answer": "NPO法（特定非営利活動促進法）",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "1998年度に3232あった市町村が2015年までに何に再編されたか？",
        "choices": [
          "1741（平成の大合併）",
          "有権者の50分の1以上",
          "総議員の3分の2以上出席し、その4分の3以上の賛成",
          "有権者の3分の1以上"
        ],
        "correct": 0,
        "answer": "1741（平成の大合併）",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "都道府県を廃止し道・州を新設する構想は？",
        "choices": [
          "なかった",
          "道州制",
          "国庫支出金",
          "三割自治"
        ],
        "correct": 1,
        "answer": "道州制",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "複数の地方公共団体が事務処理を共同で行う組織は教育委員会（または選挙管理委員会）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "複数の地方公共団体が事務処理を共同で行う組織は広域連合である。",
        "category": "organization"
      }
    ]
  },
  "11": {
    "title": "第11講 政党政治",
    "items": [
      {
        "type": "4choice",
        "prompt": "独自の政策綱領を掲げ政権獲得をめざす政治団体を何というか？",
        "choices": [
          "圧力団体（利益集団）",
          "日本社会党",
          "経営者団体",
          "政党"
        ],
        "correct": 3,
        "answer": "政党",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "17世紀後半、イギリスで結成された政党のはじまりとされる2つの政党は民主党である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "17世紀後半、イギリスで結成された政党のはじまりとされる2つの政党はトーリー党とホイッグ党である。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "教養・財産をもつ有産階級中心の政党を何というか？",
        "choices": [
          "名望家政党（議員政党）",
          "日本社会党"
        ],
        "correct": 0,
        "answer": "名望家政党（議員政党）",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "一般大衆の党員が組織の中心となる政党を何というか？",
        "choices": [
          "大衆政党（組織政党）",
          "トーリー党とホイッグ党",
          "包括政党",
          "民主党"
        ],
        "correct": 0,
        "answer": "大衆政党（組織政党）",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "国民各層から幅広く支持を得ようとする政党を何というか？",
        "choices": [
          "トーリー党とホイッグ党",
          "自由民主党",
          "包括政党",
          "名望家政党（議員政党）"
        ],
        "correct": 2,
        "answer": "包括政党",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "単独政権になりやすい政党制は大政翼賛会である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "単独政権になりやすい政党制は二大政党制である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "二大政党制を採用する国を2つ答えよ。",
        "choices": [
          "多党制（小党分立制）",
          "アメリカ・イギリス"
        ],
        "correct": 1,
        "answer": "アメリカ・イギリス",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "連立政権になりやすい政党制は？",
        "choices": [
          "ロビイング",
          "一党制",
          "世襲議員",
          "多党制（小党分立制）"
        ],
        "correct": 3,
        "answer": "多党制（小党分立制）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "少数政党が主導権を握ることを何というか？",
        "choices": [
          "マニフェスト（政権公約）",
          "キャスティングボート",
          "無党派層（浮動層）",
          "大政翼賛会"
        ],
        "correct": 1,
        "answer": "キャスティングボート",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "独裁政権になりやすい政党制は労働組合である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "独裁政権になりやすい政党制は一党制である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1898年、初の政党内閣を組織した人物は？",
        "choices": [
          "鳩山一郎",
          "大隈重信"
        ],
        "correct": 1,
        "answer": "大隈重信",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "1918年、初の本格的政党内閣を組織した人物は？",
        "choices": [
          "高市早苗",
          "犬養毅",
          "原敬",
          "大隈重信"
        ],
        "correct": 2,
        "answer": "原敬",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "1925年に制定され、男子普通選挙制が始まった法律は？",
        "choices": [
          "公害対策基本法",
          "特定秘密保護法",
          "普通選挙法",
          "軟性憲法"
        ],
        "correct": 2,
        "answer": "普通選挙法",
        "category": "law"
      },
      {
        "type": "truefalse",
        "statement": "1932年の五・一五事件で暗殺された首相は大隈重信である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1932年の五・一五事件で暗殺された首相は犬養毅である。",
        "category": "person"
      },
      {
        "type": "2choice",
        "prompt": "1940年、全政党が解散し発足した組織は？",
        "choices": [
          "無党派層（浮動層）",
          "大政翼賛会"
        ],
        "correct": 1,
        "answer": "大政翼賛会",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1955年に成立した政党は？",
        "choices": [
          "経営者団体",
          "自由民主党",
          "日本社会党",
          "日本共産党"
        ],
        "correct": 1,
        "answer": "自由民主党",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "自由民主党の初代総裁は？",
        "choices": [
          "犬養毅",
          "大隈重信",
          "鳩山一郎",
          "高市早苗"
        ],
        "correct": 2,
        "answer": "鳩山一郎",
        "category": "person"
      },
      {
        "type": "truefalse",
        "statement": "1955年、自由民主党と対立する形で左右統一された政党は名望家政党（議員政党）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1955年、自由民主党と対立する形で左右統一された政党は日本社会党である。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "自民党と社会党を中心とする長期政権体制を何というか？",
        "choices": [
          "保守が約3分の2、革新が約3分の1を占める体制",
          "55年体制"
        ],
        "correct": 1,
        "answer": "55年体制",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "55年体制はどのような一党優位体制か？",
        "choices": [
          "保守が約3分の2、革新が約3分の1を占める体制",
          "55年体制",
          "国会議席5名以上、または直近国政選挙で得票率2％以上",
          "1994年"
        ],
        "correct": 0,
        "answer": "保守が約3分の2、革新が約3分の1を占める体制",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "1993年、非自民8党派連立で55年体制を崩壊させた内閣は？",
        "choices": [
          "鳩山由紀夫内閣",
          "影の内閣（シャドー・キャビネット）",
          "細川護熙内閣",
          "第一次吉田茂内閣"
        ],
        "correct": 2,
        "answer": "細川護熙内閣",
        "category": "cabinet"
      },
      {
        "type": "truefalse",
        "statement": "特定の支持政党をもたない層を一党制という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "特定の支持政党をもたない層を無党派層（浮動層）という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "2009年、政権交代を実現した政党は？",
        "choices": [
          "民主党",
          "日本社会党"
        ],
        "correct": 0,
        "answer": "民主党",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "2009年に成立した民主党内閣は？",
        "choices": [
          "第三次吉田茂内閣",
          "幣原喜重郎内閣",
          "細川護熙内閣",
          "鳩山由紀夫内閣"
        ],
        "correct": 3,
        "answer": "鳩山由紀夫内閣",
        "category": "cabinet"
      },
      {
        "type": "4choice",
        "prompt": "2025年〜、日本初の女性内閣総理大臣となったのは誰か？",
        "choices": [
          "高市早苗",
          "原敬",
          "大隈重信",
          "犬養毅"
        ],
        "correct": 0,
        "answer": "高市早苗",
        "category": "person"
      },
      {
        "type": "truefalse",
        "statement": "選挙のさい各政党が発表する選挙公約をロビイストという。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "選挙のさい各政党が発表する選挙公約をマニフェスト（政権公約）という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "政党交付金の対象となる要件を答えよ。",
        "choices": [
          "保守が約3分の2、革新が約3分の1を占める体制",
          "国会議席5名以上、または直近国政選挙で得票率2％以上"
        ],
        "correct": 1,
        "answer": "国会議席5名以上、または直近国政選挙で得票率2％以上",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "政党交付金の受給を拒否している政党は？",
        "choices": [
          "職能団体",
          "トーリー党とホイッグ党",
          "日本共産党",
          "民主党"
        ],
        "correct": 2,
        "answer": "日本共産党",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "政党助成法が制定されたのは何年か？",
        "choices": [
          "国会議席5名以上、または直近国政選挙で得票率2％以上",
          "55年体制",
          "1994年",
          "保守が約3分の2、革新が約3分の1を占める体制"
        ],
        "correct": 2,
        "answer": "1994年",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "1976年に発覚した、田中角栄前首相が逮捕された汚職事件は女性の再婚禁止期間違憲判決である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1976年に発覚した、田中角栄前首相が逮捕された汚職事件はロッキード事件である。",
        "category": "case"
      },
      {
        "type": "2choice",
        "prompt": "議員が採決時に所属政党の決定に従うよう求められることを何というか？",
        "choices": [
          "党議拘束",
          "アメリカ・イギリス"
        ],
        "correct": 0,
        "answer": "党議拘束",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "特定分野に精通し官庁等と結びつき政策決定に影響力をもつ議員を何というか？",
        "choices": [
          "キャスティングボート",
          "ロビイング",
          "労働組合",
          "族議員"
        ],
        "correct": 3,
        "answer": "族議員",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "アメリカで圧力団体の代理人として政策決定に影響力をもつ者を何というか？",
        "choices": [
          "労働組合",
          "党議拘束",
          "マニフェスト（政権公約）",
          "ロビイスト"
        ],
        "correct": 3,
        "answer": "ロビイスト",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "祖父・父の選挙基盤を継承した議員を党議拘束という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "祖父・父の選挙基盤を継承した議員を世襲議員という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "政府や議会に影響力を行使し、集団固有の利益を促進する組織を何というか？",
        "choices": [
          "トーリー党とホイッグ党",
          "圧力団体（利益集団）"
        ],
        "correct": 1,
        "answer": "圧力団体（利益集団）",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "議員や官僚への働きかけを何というか？",
        "choices": [
          "キャスティングボート",
          "マニフェスト（政権公約）",
          "アメリカ・イギリス",
          "ロビイング"
        ],
        "correct": 3,
        "answer": "ロビイング",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "日本経団連などが該当する圧力団体の種類は？",
        "choices": [
          "経営者団体",
          "民主党",
          "政党",
          "日本社会党"
        ],
        "correct": 0,
        "answer": "経営者団体",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "日本医師会などが該当する圧力団体の種類はトーリー党とホイッグ党である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "日本医師会などが該当する圧力団体の種類は職能団体である。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "連合（日本労働組合総連合会）が該当する圧力団体の種類は？",
        "choices": [
          "一党制",
          "労働組合"
        ],
        "correct": 1,
        "answer": "労働組合",
        "category": "term"
      }
    ]
  },
  "12": {
    "title": "第12講 選挙と政治参加",
    "items": [
      {
        "type": "4choice",
        "prompt": "選挙の4原則を答えよ。",
        "choices": [
          "金権選挙",
          "メディア・スクラム",
          "普通選挙・平等選挙・秘密選挙・直接選挙",
          "連座制"
        ],
        "correct": 2,
        "answer": "普通選挙・平等選挙・秘密選挙・直接選挙",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "有権者の投票価値を平等に扱う原則は一票の格差（議員定数不均衡）問題である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "有権者の投票価値を平等に扱う原則は平等選挙（投票価値の平等原則）である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "無記名で行う投票を何というか？",
        "choices": [
          "ゲリマンダー",
          "秘密選挙（秘密投票）"
        ],
        "correct": 1,
        "answer": "秘密選挙（秘密投票）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1925年、25歳以上の男子に与えられた選挙権を何というか？",
        "choices": [
          "男女普通選挙権",
          "国政調査権",
          "議会解散権",
          "男子普通選挙権"
        ],
        "correct": 3,
        "answer": "男子普通選挙権",
        "category": "right"
      },
      {
        "type": "4choice",
        "prompt": "1945年、20歳以上の男女に与えられた選挙権を何というか？",
        "choices": [
          "男子普通選挙権",
          "アクセス権",
          "請求権（受益権）",
          "男女普通選挙権"
        ],
        "correct": 3,
        "answer": "男女普通選挙権",
        "category": "right"
      },
      {
        "type": "truefalse",
        "statement": "2015年の法改正で選挙権年齢は148になった。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "2015年の法改正で選挙権年齢は満18歳以上になった。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "1つの選挙区の定数が1人の制度を何というか？",
        "choices": [
          "小選挙区制",
          "期日前投票制度"
        ],
        "correct": 0,
        "answer": "小選挙区制",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "小選挙区制の短所として、落選者に投じられ無効となりやすい票を何というか？",
        "choices": [
          "記者クラブ",
          "メディア・スクラム",
          "死票",
          "ゲリマンダー"
        ],
        "correct": 2,
        "answer": "死票",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "自らに有利な選挙区割りを行うことを何というか？",
        "choices": [
          "メディア・リテラシー（情報リテラシー）",
          "ドント式",
          "期日前投票制度",
          "ゲリマンダー"
        ],
        "correct": 3,
        "answer": "ゲリマンダー",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1つの選挙区の定数が2人以上の制度を記者クラブという。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1つの選挙区の定数が2人以上の制度を大選挙区制という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "定数3〜5人の大選挙区をとくに何というか？",
        "choices": [
          "通常選挙",
          "中選挙区"
        ],
        "correct": 1,
        "answer": "中選挙区",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "政党の得票数に比例して議席を配分する制度は？",
        "choices": [
          "第四の権力",
          "中選挙区",
          "在外選挙制度",
          "比例代表制"
        ],
        "correct": 3,
        "answer": "比例代表制",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "小選挙区制と比例代表制を組み合わせた衆議院の選挙制度は？",
        "choices": [
          "マスコミュニケーション（マスコミ）",
          "小選挙区比例代表並立制",
          "通常選挙",
          "記者クラブ"
        ],
        "correct": 1,
        "answer": "小選挙区比例代表並立制",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "全部改選の衆議院議員選挙を伝統型無関心という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "全部改選の衆議院議員選挙を総選挙という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "半数改選の参議院議員選挙を何というか？",
        "choices": [
          "大衆政治（ポピュリズム）",
          "通常選挙"
        ],
        "correct": 1,
        "answer": "通常選挙",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1950年に制定された、選挙全般を規定する法律は？",
        "choices": [
          "政治資金規正法",
          "国会審議活性化法",
          "公職選挙法",
          "政党助成法"
        ],
        "correct": 2,
        "answer": "公職選挙法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "衆議院の小選挙区の議席数は？",
        "choices": [
          "148",
          "289",
          "100",
          "満18歳以上"
        ],
        "correct": 1,
        "answer": "289",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "衆議院の比例代表の議席数は289である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "衆議院の比例代表の議席数は176である。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "衆議院の比例代表は何ブロック単位か？",
        "choices": [
          "176",
          "11ブロック"
        ],
        "correct": 1,
        "answer": "11ブロック",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "各政党があらかじめ当選順位を確定させる比例代表の方式は？",
        "choices": [
          "ユビキタス情報社会",
          "世論",
          "拘束名簿式",
          "通常選挙"
        ],
        "correct": 2,
        "answer": "拘束名簿式",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "得票数を整数で割り、商の大きい順に議席を配分する方式は？",
        "choices": [
          "ユビキタス情報社会",
          "伝統型無関心",
          "ドント式",
          "大衆政治（ポピュリズム）"
        ],
        "correct": 2,
        "answer": "ドント式",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "参議院の選挙区の議席数は満18歳以上である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "参議院の選挙区の議席数は148である。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "参議院の比例代表の議席数は？",
        "choices": [
          "11ブロック",
          "100"
        ],
        "correct": 1,
        "answer": "100",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "当選者の順位が確定していない比例代表の方式は？",
        "choices": [
          "大選挙区制",
          "非拘束名簿式",
          "ドント式",
          "記者クラブ"
        ],
        "correct": 1,
        "answer": "非拘束名簿式",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "立候補届出日から投票日前日までしか行えないという選挙運動の制限は？",
        "choices": [
          "事前運動の禁止",
          "メディア・スクラム",
          "拘束名簿式",
          "成年被後見人"
        ],
        "correct": 0,
        "answer": "事前運動の禁止",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "家庭を1軒ずつ訪問して投票を依頼することの禁止を死票という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "家庭を1軒ずつ訪問して投票を依頼することの禁止を戸別訪問の禁止という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "選挙区ごとの議員定数と有権者数の比率格差の問題を何というか？",
        "choices": [
          "一票の格差（議員定数不均衡）問題",
          "連座制"
        ],
        "correct": 0,
        "answer": "一票の格差（議員定数不均衡）問題",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "最高裁が定数配分を「違憲」としつつ選挙自体は無効としない判決を何というか？",
        "choices": [
          "強制起訴される",
          "事情判決",
          "恩赦",
          "跳躍上告"
        ],
        "correct": 1,
        "answer": "事情判決",
        "category": "procedure"
      },
      {
        "type": "4choice",
        "prompt": "若者を中心とする政治への無関心を何というか？",
        "choices": [
          "通常選挙",
          "小選挙区制",
          "政治的無関心（ポリティカル・アパシー）",
          "普通選挙・平等選挙・秘密選挙・直接選挙"
        ],
        "correct": 2,
        "answer": "政治的無関心（ポリティカル・アパシー）",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "選挙当日に投票できない人が事前に投票する制度（私用でも可）は金権選挙である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "選挙当日に投票できない人が事前に投票する制度（私用でも可）は期日前投票制度である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "外国在住の日本人が投票できる制度は？",
        "choices": [
          "在外選挙制度",
          "普通選挙・平等選挙・秘密選挙・直接選挙"
        ],
        "correct": 0,
        "answer": "在外選挙制度",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "2013年に解禁された、選挙運動でのインターネット利用は？",
        "choices": [
          "インターネットによる選挙運動",
          "デジタル・ディバイド",
          "供託金制度",
          "期日前投票制度"
        ],
        "correct": 0,
        "answer": "インターネットによる選挙運動",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "買収・供応などが後を絶たない選挙を何というか？",
        "choices": [
          "一票の格差（議員定数不均衡）問題",
          "金権選挙",
          "記者クラブ",
          "期日前投票制度"
        ],
        "correct": 1,
        "answer": "金権選挙",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "選挙違反があった場合、候補者本人が関与していなくても当選無効となる制度は小選挙区比例代表並立制である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "選挙違反があった場合、候補者本人が関与していなくても当選無効となる制度は連座制である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1994年に改正され、政治家個人への企業団体献金を禁止した法律は？",
        "choices": [
          "政治資金規正法",
          "公職選挙法"
        ],
        "correct": 0,
        "answer": "政治資金規正法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "国民一人あたり年額250円を財源とする、政党への交付金制度の根拠法は？",
        "choices": [
          "公職選挙法",
          "男女雇用機会均等法",
          "政党助成法",
          "政治資金規正法"
        ],
        "correct": 2,
        "answer": "政党助成法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "2013年、選挙権が回復されたのはどのような人々か？",
        "choices": [
          "メディア・リテラシー（情報リテラシー）",
          "政治的無関心（ポリティカル・アパシー）",
          "成年被後見人",
          "現代型無関心"
        ],
        "correct": 2,
        "answer": "成年被後見人",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "泡沫候補の乱立を防ぐための制度は秘密選挙（秘密投票）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "泡沫候補の乱立を防ぐための制度は供託金制度である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "公共の問題について多数の国民が共通してもつ意見を何というか？",
        "choices": [
          "世論",
          "デジタル・ディバイド"
        ],
        "correct": 0,
        "answer": "世論",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "内閣支持率などを数値化する調査を何というか？",
        "choices": [
          "普通選挙・平等選挙・秘密選挙・直接選挙",
          "世論調査",
          "成年被後見人",
          "期日前投票制度"
        ],
        "correct": 1,
        "answer": "世論調査",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "大衆の世論により政治が左右されることを何というか？",
        "choices": [
          "大衆政治（ポピュリズム）",
          "比例代表制",
          "第四の権力",
          "平等選挙（投票価値の平等原則）"
        ],
        "correct": 0,
        "answer": "大衆政治（ポピュリズム）",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "不特定多数に情報を一方的に大量伝達することを小選挙区比例代表並立制という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "不特定多数に情報を一方的に大量伝達することをマスコミュニケーション（マスコミ）という。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "官庁や大企業に存在し、取材対象と癒着しやすいとされる組織は？",
        "choices": [
          "記者クラブ",
          "小選挙区制"
        ],
        "correct": 0,
        "answer": "記者クラブ",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "集団的過熱取材を何というか？",
        "choices": [
          "中選挙区",
          "小選挙区比例代表並立制",
          "メディア・スクラム",
          "比例代表制"
        ],
        "correct": 2,
        "answer": "メディア・スクラム",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "立法・行政・司法に次ぐ影響力をもつとされるマスメディアの呼び名は？",
        "choices": [
          "デジタル・ディバイド",
          "第四の権力",
          "現代型無関心",
          "マスコミュニケーション（マスコミ）"
        ],
        "correct": 1,
        "answer": "第四の権力",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "リースマンが唱えた、政治に無知な政治的無関心の類型はメディア・スクラムである。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "リースマンが唱えた、政治に無知な政治的無関心の類型は伝統型無関心である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "リースマンが唱えた、政治に冷淡な政治的無関心の類型は？",
        "choices": [
          "現代型無関心",
          "マスコミュニケーション（マスコミ）"
        ],
        "correct": 0,
        "answer": "現代型無関心",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "いつでもどこでも情報通信技術を利用できる社会を何というか？",
        "choices": [
          "記者クラブ",
          "期日前投票制度",
          "金権選挙",
          "ユビキタス情報社会"
        ],
        "correct": 3,
        "answer": "ユビキタス情報社会",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "情報を主体的に読み取り活用する能力を何というか？",
        "choices": [
          "通常選挙",
          "政治的無関心（ポリティカル・アパシー）",
          "メディア・リテラシー（情報リテラシー）",
          "普通選挙・平等選挙・秘密選挙・直接選挙"
        ],
        "correct": 2,
        "answer": "メディア・リテラシー（情報リテラシー）",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "年齢や経済力などにより生じる情報格差を伝統型無関心という。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "年齢や経済力などにより生じる情報格差をデジタル・ディバイドという。",
        "category": "term"
      }
    ]
  },
  "13": {
    "title": "第13講 国際政治",
    "items": [
      {
        "type": "4choice",
        "prompt": "1648年、三十年戦争後に開催された初の国際会議は？",
        "choices": [
          "国際連合",
          "欧州連合（EU）",
          "ウェストファリア会議",
          "安全保障理事会"
        ],
        "correct": 2,
        "answer": "ウェストファリア会議",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "ウェストファリア会議はデタントで開かれた。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "ウェストファリア会議はドイツで開かれた。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1920年に成立した国際平和機関は？",
        "choices": [
          "提唱国アメリカの不参加・全会一致制（武力制裁規定の欠如も可）",
          "国際連盟"
        ],
        "correct": 1,
        "answer": "国際連盟",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1945年に成立した国際平和機関は？",
        "choices": [
          "国際連合",
          "欧州連合（EU）",
          "安全保障理事会",
          "北大西洋条約機構（NATO）"
        ],
        "correct": 0,
        "answer": "国際連合",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "自然法の立場から国際法を理論化し「国際法の父」と呼ばれる人物は？",
        "choices": [
          "天皇",
          "グロティウス",
          "レーニン",
          "ウィルソン"
        ],
        "correct": 1,
        "answer": "グロティウス",
        "category": "person"
      },
      {
        "type": "truefalse",
        "statement": "グロティウスの主著はCIS（独立国家共同体）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "グロティウスの主著は『海洋自由論』『戦争と平和の法』である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "国家間の一般的慣行が法として認められたものを何というか？",
        "choices": [
          "国際慣習法",
          "公害対策基本法"
        ],
        "correct": 0,
        "answer": "国際慣習法",
        "category": "law"
      },
      {
        "type": "4choice",
        "prompt": "国家間の文書による合意を何というか？",
        "choices": [
          "大西洋憲章",
          "日中共同声明",
          "条約",
          "マルタ会談"
        ],
        "correct": 2,
        "answer": "条約",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "1899年、オランダのハーグで創設された裁判所は？",
        "choices": [
          "国際原子力機関（IAEA）",
          "国際連合",
          "常設仲裁裁判所",
          "サンフランシスコ会議"
        ],
        "correct": 2,
        "answer": "常設仲裁裁判所",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "1945年設立、国際連合の主要司法機関は安全保障理事会である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1945年設立、国際連合の主要司法機関は国際司法裁判所（ICJ）である。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "国際司法裁判所が置かれる都市は？",
        "choices": [
          "提唱国アメリカの不参加・全会一致制（武力制裁規定の欠如も可）",
          "オランダのハーグ"
        ],
        "correct": 1,
        "answer": "オランダのハーグ",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "国際司法裁判所は何人の裁判官（任期何年）で構成されるか？",
        "choices": [
          "平和原則14カ条",
          "任期9年の15人",
          "51カ国",
          "1933年"
        ],
        "correct": 1,
        "answer": "任期9年の15人",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "2002年設立、非人道的な戦争犯罪などを裁く、国連から独立した機関は？",
        "choices": [
          "国際労働機関（ILO）",
          "国際刑事裁判所（ICC）",
          "国際連合",
          "国際司法裁判所（ICJ）"
        ],
        "correct": 1,
        "answer": "国際刑事裁判所（ICC）",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "アメリカ・ロシア・中国が加盟していない国際機関は国際連合である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "アメリカ・ロシア・中国が加盟していない国際機関は国際刑事裁判所（ICC）である。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "各国間の軍事力の均衡により安定を図る方式を何というか？",
        "choices": [
          "スイスのジュネーブ",
          "勢力均衡方式（バランス・オブ・パワー）"
        ],
        "correct": 1,
        "answer": "勢力均衡方式（バランス・オブ・パワー）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "軍事的侵略国に全加盟国が共同制裁を加える方式は？",
        "choices": [
          "東西ドイツ統一",
          "国際連盟",
          "集団安全保障方式",
          "提唱国アメリカの不参加・全会一致制（武力制裁規定の欠如も可）"
        ],
        "correct": 2,
        "answer": "集団安全保障方式",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "集団安全保障の理論的先駆けとなった、カントの著書は？",
        "choices": [
          "ベルリンの壁",
          "『永久平和のために』",
          "国連軍（UNF）",
          "朝鮮戦争"
        ],
        "correct": 1,
        "answer": "『永久平和のために』",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "国際連盟の本部が置かれた都市は第五福竜丸である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国際連盟の本部が置かれた都市はスイスのジュネーブである。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "国際連盟設立を提唱したアメリカ大統領は？",
        "choices": [
          "グロティウス",
          "ウィルソン"
        ],
        "correct": 1,
        "answer": "ウィルソン",
        "category": "person"
      },
      {
        "type": "4choice",
        "prompt": "ウィルソンが1918年に発表した原則は？",
        "choices": [
          "51カ国",
          "任期9年の15人",
          "42カ国",
          "平和原則14カ条"
        ],
        "correct": 3,
        "answer": "平和原則14カ条",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "国際連盟の原加盟国数は？",
        "choices": [
          "42カ国",
          "2年",
          "1933年",
          "193カ国"
        ],
        "correct": 0,
        "answer": "42カ国",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "国際連盟の問題点はアメリカのニューヨークである。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "国際連盟の問題点は提唱国アメリカの不参加・全会一致制（武力制裁規定の欠如も可）である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "日本とドイツが国際連盟を脱退したのは何年か？",
        "choices": [
          "1933年",
          "2年"
        ],
        "correct": 0,
        "answer": "1933年",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "国際連合の本部が置かれた都市は？",
        "choices": [
          "オランダのハーグ",
          "CIS（独立国家共同体）",
          "第五福竜丸",
          "アメリカのニューヨーク"
        ],
        "correct": 3,
        "answer": "アメリカのニューヨーク",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1941年、ローズヴェルトとチャーチルが会談し発表した憲章は？",
        "choices": [
          "包括的核実験禁止条約（CTBT）",
          "核兵器禁止条約",
          "サンフランシスコ平和条約",
          "大西洋憲章"
        ],
        "correct": 3,
        "answer": "大西洋憲章",
        "category": "treaty"
      },
      {
        "type": "truefalse",
        "statement": "1945年2月、戦後の国際秩序を決定した会談は日中共同声明である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1945年2月、戦後の国際秩序を決定した会談はヤルタ会談である。",
        "category": "treaty"
      },
      {
        "type": "2choice",
        "prompt": "1945年、国連憲章が採択された会議は？",
        "choices": [
          "国際連合",
          "サンフランシスコ会議"
        ],
        "correct": 1,
        "answer": "サンフランシスコ会議",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "国際連合の原加盟国数は？",
        "choices": [
          "2年",
          "1933年",
          "193カ国",
          "51カ国"
        ],
        "correct": 3,
        "answer": "51カ国",
        "category": "number"
      },
      {
        "type": "4choice",
        "prompt": "2025年現在の国連加盟国数は？",
        "choices": [
          "平和原則14カ条",
          "42カ国",
          "193カ国",
          "51カ国"
        ],
        "correct": 2,
        "answer": "193カ国",
        "category": "number"
      },
      {
        "type": "truefalse",
        "statement": "全加盟国で構成される国連の最高機関はオランダのハーグである。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "全加盟国で構成される国連の最高機関は総会である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "安全保障問題を話し合う、総会に優越する国連の主要機関は？",
        "choices": [
          "ワルシャワ条約機構",
          "安全保障理事会"
        ],
        "correct": 1,
        "answer": "安全保障理事会",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "安保理の常任理事国5カ国を答えよ。",
        "choices": [
          "ブレグジット",
          "朝鮮戦争",
          "集団安全保障方式",
          "アメリカ・イギリス・フランス・ロシア・中国"
        ],
        "correct": 3,
        "answer": "アメリカ・イギリス・フランス・ロシア・中国",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "常任理事国がもつ、実質事項の決定を阻止できる権利は？",
        "choices": [
          "知る権利",
          "勤労権",
          "拒否権",
          "最高裁判所裁判官の国民審査権"
        ],
        "correct": 2,
        "answer": "拒否権",
        "category": "right"
      },
      {
        "type": "truefalse",
        "statement": "非常任理事国の任期は51カ国である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "非常任理事国の任期は2年である。",
        "category": "number"
      },
      {
        "type": "2choice",
        "prompt": "安保理が拒否権により機能しない際、総会が集団的措置を勧告できる決議は？",
        "choices": [
          "「平和のための結集」決議",
          "中華人民共和国"
        ],
        "correct": 0,
        "answer": "「平和のための結集」決議",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "国連事務局の最高責任者は？",
        "choices": [
          "事務総長",
          "『永久平和のために』",
          "アメリカのニューヨーク",
          "ブレグジット"
        ],
        "correct": 0,
        "answer": "事務総長",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1994年のパラオ独立で活動を終了した国連の主要機関は？",
        "choices": [
          "欧州連合（EU）",
          "常設仲裁裁判所",
          "信託統治理事会",
          "国際刑事裁判所（ICC）"
        ],
        "correct": 2,
        "answer": "信託統治理事会",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "スイスのジュネーブに本部を置く専門機関は欧州連合（EU）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "スイスのジュネーブに本部を置く専門機関は国際労働機関（ILO）である。",
        "category": "organization"
      },
      {
        "type": "2choice",
        "prompt": "フランスのパリに本部を置く専門機関は？",
        "choices": [
          "国連教育科学文化機関（UNESCO）",
          "国際刑事裁判所（ICC）"
        ],
        "correct": 0,
        "answer": "国連教育科学文化機関（UNESCO）",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "イタリアのローマに本部を置く専門機関は？",
        "choices": [
          "アジア・アフリカ会議（バンドン会議）",
          "安全保障理事会",
          "ウェストファリア会議",
          "国連食糧農業機関（FAO）"
        ],
        "correct": 3,
        "answer": "国連食糧農業機関（FAO）",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "オーストリアのウィーンに本部を置く関連機関は？",
        "choices": [
          "国連教育科学文化機関（UNESCO）",
          "安全保障理事会",
          "ウェストファリア会議",
          "国際原子力機関（IAEA）"
        ],
        "correct": 3,
        "answer": "国際原子力機関（IAEA）",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "ケニアのナイロビに本部を置く計画・基金は集団安全保障方式である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "ケニアのナイロビに本部を置く計画・基金は国連環境計画（UNEP）である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "日本の東京に本部を置く国連機関は？",
        "choices": [
          "国際連盟",
          "国連大学（UNU）"
        ],
        "correct": 1,
        "answer": "国連大学（UNU）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "国連憲章に規定された形では設置されていない軍事組織は？",
        "choices": [
          "『永久平和のために』",
          "ブレグジット",
          "オランダのハーグ",
          "国連軍（UNF）"
        ],
        "correct": 3,
        "answer": "国連軍（UNF）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1946年、イギリス前首相チャーチルが行った演説は？",
        "choices": [
          "「平和のための結集」決議",
          "「鉄のカーテン」演説",
          "集団安全保障方式",
          "国連大学（UNU）"
        ],
        "correct": 1,
        "answer": "「鉄のカーテン」演説",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1947年、アメリカ大統領が発表した対ソ封じ込め政策は国連軍（UNF）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1947年、アメリカ大統領が発表した対ソ封じ込め政策はトルーマン・ドクトリンである。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1949年に結成された西側の軍事同盟は？",
        "choices": [
          "北大西洋条約機構（NATO）",
          "アジア・アフリカ会議（バンドン会議）"
        ],
        "correct": 0,
        "answer": "北大西洋条約機構（NATO）",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "1949年に成立した国は？",
        "choices": [
          "ブレグジット",
          "中華人民共和国",
          "国連軍（UNF）",
          "CIS（独立国家共同体）"
        ],
        "correct": 1,
        "answer": "中華人民共和国",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1950年から53年まで続いた戦争は？",
        "choices": [
          "「平和のための結集」決議",
          "国連軍（UNF）",
          "朝鮮戦争",
          "『海洋自由論』『戦争と平和の法』"
        ],
        "correct": 2,
        "answer": "朝鮮戦争",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1954年、アメリカのビキニ水爆実験で被曝した日本の漁船は国連大学（UNU）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1954年、アメリカのビキニ水爆実験で被曝した日本の漁船は第五福竜丸である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1955年、平和十原則を発表した会議は？",
        "choices": [
          "国連教育科学文化機関（UNESCO）",
          "アジア・アフリカ会議（バンドン会議）"
        ],
        "correct": 1,
        "answer": "アジア・アフリカ会議（バンドン会議）",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "1955年に結成された東側の軍事同盟は？",
        "choices": [
          "サンフランシスコ会議",
          "アジア・アフリカ会議（バンドン会議）",
          "ワルシャワ条約機構",
          "国際刑事裁判所（ICC）"
        ],
        "correct": 2,
        "answer": "ワルシャワ条約機構",
        "category": "organization"
      },
      {
        "type": "4choice",
        "prompt": "1962年、米ソ間で緊張が高まった危機は？",
        "choices": [
          "オランダのハーグ",
          "キューバ危機",
          "スイスのジュネーブ",
          "東西ドイツ統一"
        ],
        "correct": 1,
        "answer": "キューバ危機",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "緊張緩和を意味する語はオランダのハーグである。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "緊張緩和を意味する語はデタントである。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1968年に採択された、核兵器の拡散を防ぐ条約は？",
        "choices": [
          "核拡散防止条約（NPT）",
          "日中共同声明"
        ],
        "correct": 0,
        "answer": "核拡散防止条約（NPT）",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "1989年、米ソ首脳が冷戦終結を宣言した会談は？",
        "choices": [
          "サンフランシスコ平和条約",
          "核兵器禁止条約",
          "日中共同声明",
          "マルタ会談"
        ],
        "correct": 3,
        "answer": "マルタ会談",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "1989年に崩壊した、東西ドイツを分断していたものは？",
        "choices": [
          "ソ連",
          "ベルリンの壁",
          "総会",
          "国連大学（UNU）"
        ],
        "correct": 1,
        "answer": "ベルリンの壁",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1990年に実現した出来事はウクライナ侵攻である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1990年に実現した出来事は東西ドイツ統一である。",
        "category": "term"
      },
      {
        "type": "2choice",
        "prompt": "1991年に解体した国は？",
        "choices": [
          "提唱国アメリカの不参加・全会一致制（武力制裁規定の欠如も可）",
          "ソ連"
        ],
        "correct": 1,
        "answer": "ソ連",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "ソ連解体後に成立した組織の略称は？",
        "choices": [
          "CIS（独立国家共同体）",
          "「鉄のカーテン」演説",
          "「平和のための結集」決議",
          "『海洋自由論』『戦争と平和の法』"
        ],
        "correct": 0,
        "answer": "CIS（独立国家共同体）",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "1993年に発足した組織は？",
        "choices": [
          "国際連合",
          "国連教育科学文化機関（UNESCO）",
          "国際司法裁判所（ICJ）",
          "欧州連合（EU）"
        ],
        "correct": 3,
        "answer": "欧州連合（EU）",
        "category": "organization"
      },
      {
        "type": "truefalse",
        "statement": "1996年に国連で採択された、核実験を禁止する条約は核拡散防止条約（NPT）である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1996年に国連で採択された、核実験を禁止する条約は包括的核実験禁止条約（CTBT）である。",
        "category": "treaty"
      },
      {
        "type": "2choice",
        "prompt": "2017年に採択された条約は？",
        "choices": [
          "大西洋憲章",
          "核兵器禁止条約"
        ],
        "correct": 1,
        "answer": "核兵器禁止条約",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "2020年にEUから離脱したイギリスの動きを何というか？",
        "choices": [
          "ブレグジット",
          "国連環境計画（UNEP）",
          "提唱国アメリカの不参加・全会一致制（武力制裁規定の欠如も可）",
          "『海洋自由論』『戦争と平和の法』"
        ],
        "correct": 0,
        "answer": "ブレグジット",
        "category": "term"
      },
      {
        "type": "4choice",
        "prompt": "2022年に始まった軍事侵攻は？",
        "choices": [
          "ウクライナ侵攻",
          "スイスのジュネーブ",
          "「平和のための結集」決議",
          "オランダのハーグ"
        ],
        "correct": 0,
        "answer": "ウクライナ侵攻",
        "category": "term"
      },
      {
        "type": "truefalse",
        "statement": "1951年、日本が独立を回復した条約は日韓基本条約である。",
        "choices": [
          "正しい（○）",
          "誤り（×）"
        ],
        "correct": 1,
        "answer": "1951年、日本が独立を回復した条約はサンフランシスコ平和条約である。",
        "category": "treaty"
      },
      {
        "type": "2choice",
        "prompt": "1965年、日本と韓国が結んだ条約は？",
        "choices": [
          "日韓基本条約",
          "サンフランシスコ平和条約"
        ],
        "correct": 0,
        "answer": "日韓基本条約",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "1972年、日本と中国が発表した声明は？",
        "choices": [
          "日中共同声明",
          "ヤルタ会談",
          "大西洋憲章",
          "条約"
        ],
        "correct": 0,
        "answer": "日中共同声明",
        "category": "treaty"
      },
      {
        "type": "4choice",
        "prompt": "1978年、日本と中国が結んだ条約は？",
        "choices": [
          "マルタ会談",
          "包括的核実験禁止条約（CTBT）",
          "日中平和友好条約",
          "サンフランシスコ平和条約"
        ],
        "correct": 2,
        "answer": "日中平和友好条約",
        "category": "treaty"
      }
    ]
  }
};
