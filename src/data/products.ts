export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "steel-frame",
    name: "輕鋼架",
    shortName: "輕鋼架",
    tagline: "精密鍍鋅骨架，隔間結構的骨幹",
    description:
      "採用高精度鍍鋅鋼板製成，符合 CNS 國家標準，具備優異的抗鏽蝕與結構穩定性，廣泛應用於辦公室、商業空間與住宅隔間工程，是輕隔間系統最基礎也最關鍵的骨架材料。",
    features: ["鍍鋅防鏽處理", "符合 CNS 國家標準", "高結構穩定性", "施工快速好組裝"],
  },
  {
    slug: "partition-substructure",
    name: "隔間骨料",
    shortName: "隔間骨料",
    tagline: "槽鐵、角材與配件，讓骨架穩固到位",
    description:
      "提供隔間工程所需的槽鐵、角材、吊筋與各式支撐配件，完整搭配輕鋼架系統使用，確保骨架結構穩固垂直，大幅降低現場施工工時與人力成本。",
    features: ["完整配件系列", "精準模距設計", "降低現場工時", "穩固耐用不變形"],
  },
  {
    slug: "partition-boards",
    name: "隔間板材",
    shortName: "隔間板材",
    tagline: "石膏板、矽酸鈣板，防火又美觀",
    description:
      "涵蓋石膏板、矽酸鈣板等多種防火板材，符合消防法規防火時效需求，兼具優異的隔音性能與平整美觀的表面處理，適用於各類辦公、商業與住宅空間。",
    features: ["符合防火時效規範", "隔音效果佳", "表面平整易裝修", "多種厚度規格"],
  },
  {
    slug: "ceiling-systems",
    name: "天花板",
    shortName: "天花板",
    tagline: "輕鋼架天花板系統，造型與機能兼具",
    description:
      "採用輕鋼架 T-Bar 系統搭配礦纖板、玻纖板等多樣板材，提供豐富的造型變化與吸音效果，適用於辦公室、賣場、廠房及各類商業空間的天花裝修工程。",
    features: ["T-Bar 系統工法", "吸音降噪效果", "造型變化多元", "維護檢修便利"],
  },
  {
    slug: "rockwool",
    name: "岩綿",
    shortName: "岩綿",
    tagline: "不燃防火材料，隔音隔熱效果卓越",
    description:
      "高密度岩棉板與岩棉卷材，屬於國家標準認定之不燃材料，具備優異的防火時效、隔音與隔熱性能，符合 CNS 9737 規範，廣泛應用於防火區劃、管道間與設備房。",
    features: ["不燃材料認證", "優異防火時效", "隔音隔熱效果佳", "符合 CNS 9737"],
  },
];
