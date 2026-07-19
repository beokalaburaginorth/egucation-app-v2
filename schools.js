const schools = [
  {
    dise: "29041109431",
    name: "GOVT HPS URDU ABUB BAKAR COLONY",
    cluster: "ADARSHA NAGAR URDU",
    type: "HPS"
  },
  {
    dise: "29041108601",
    name: "GOVT HPS URDU ADARSH NAGAR",
    cluster: "ADARSHA NAGAR URDU",
    type: "HPS"
  },
  {
    dise: "29041109401",
    name: "GOVT HPS MAHIBOOBNAGAR GLB",
    cluster: "ADARSHA NAGAR URDU",
    type: "HPS"
  },
  {
    dise: "29041110404",
    name: "GOVT HPS URDU ITTEHAD COLONY",
    cluster: "ADARSHA NAGAR URDU",
    type: "HPS"
  },
  {
    dise: "29041107908",
    name: "GHS URDU SONIYA GANDHI CLNY M",
    cluster: "ADARSHA NAGAR URDU",
    type: "HS"
  },
  {
    dise: "29041107908",
    name: "GHPS URDU SONIYA GANDHI CLNY M",
    cluster: "ADARSHA NAGAR URDU",
    type: "HPS"
  },
  {
    dise: "29041104102",
    name: "GOVT HPS URDU KURIKOTA",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041105401",
    name: "GOVT LPS SIRADONE",
    cluster: "ANKALAGA",
    type: "LPS"
  },
  {
    dise: "29041101401",
    name: "GOVT HPS BHUSANAGI",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041103002",
    name: "GOVT HPS KAGGANAMADI",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041105501",
    name: "GOVT LPS SIRAGAPUR",
    cluster: "ANKALAGA",
    type: "LPS"
  },
  {
    dise: "29041106502",
    name: "GOVT HPS YELAVANTAGI",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041100102",
    name: "GOVT HPS ANKALAGA",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041104101",
    name: "GOVT HPS KURIKOTA",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041100501",
    name: "GOVT HPS BABALAD (I.K",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041103501",
    name: "GHS KANNUR",
    cluster: "ANKALAGA",
    type: "HS"
  },
  {
    dise: "29041103501",
    name: "GOVT HPS KANNUR",
    cluster: "ANKALAGA",
    type: "HPS"
  },
  {
    dise: "29041108503",
    name: "GOVT HPS (KAN ASIF GUNJ",
    cluster: "ASIF GUNJ",
    type: "HPS"
  },
  {
    dise: "29041108514",
    name: "GOVT MPHS GULBARGA",
    cluster: "ASIF GUNJ",
    type: "HS"
  },
  {
    dise: "29041107703",
    name: "GOVT HPS AYYARWADI",
    cluster: "ASIF GUNJ",
    type: "HPS"
  },
  {
    dise: "29041108413",
    name: "GOVT HS SHAHABAZAR",
    cluster: "ASIF GUNJ",
    type: "HS"
  },
  {
    dise: "29041108504",
    name: "GOVT HPS (MARATHI ASIF GUNJ",
    cluster: "ASIF GUNJ",
    type: "HPS"
  },
  {
    dise: "29041108414",
    name: "KGBV RESI SHAHABAZAR GLB",
    cluster: "ASIF GUNJ",
    type: "HPS"
  },
  {
    dise: "29041100401",
    name: "KPS GOVT HPS AURAD [B]",
    cluster: "AURAB (B)",
    type: "HPS"
  },
  {
    dise: "29041100103",
    name: "GOVT HPS ALGUD",
    cluster: "AURAB (B)",
    type: "HPS"
  },
  {
    dise: "29041101001",
    name: "GOVT HPS BELUR [J]",
    cluster: "AURAB (B)",
    type: "HPS"
  },
  {
    dise: "29041106101",
    name: "GOVT LPS TONDAKAL",
    cluster: "AURAB (B)",
    type: "LPS"
  },
  {
    dise: "29041100701",
    name: "GOVT HPS BANNUR",
    cluster: "AURAB (B)",
    type: "HPS"
  },
  {
    dise: "29041100403",
    name: "KPS GOVT HS AURAD (B",
    cluster: "AURAB (B)",
    type: "HS"
  },
  {
    dise: "29041106003",
    name: "GOVT HS TAVARGERA",
    cluster: "AURAB (B)",
    type: "HS"
  },
  {
    dise: "29041106001",
    name: "GOVT HPS TAVARAGERA",
    cluster: "AURAB (B)",
    type: "HPS"
  },
  {
    dise: "29041103201",
    name: "GOVT HPS KALAMANDARGI",
    cluster: "DONGARGAON",
    type: "HPS"
  },
  {
    dise: "29041101710",
    name: "GOVT LPS HODIHAL TANDA",
    cluster: "DONGARGAON",
    type: "LPS"
  },
  {
    dise: "29041101709",
    name: "GOVT LPS CHAPLA NAYAK TANDA (S.S",
    cluster: "DONGARGAON",
    type: "LPS"
  },
  {
    dise: "29041105003",
    name: "GOVT LPS NEELAKHED TANDA",
    cluster: "DONGARGAON",
    type: "LPS"
  },
  {
    dise: "29041101601",
    name: "GOVT HPS DOHRJAMGA",
    cluster: "DONGARGAON",
    type: "HPS"
  },
  {
    dise: "29041101701",
    name: "GOVT MPS DONGARGAON",
    cluster: "DONGARGAON",
    type: "HPS"
  },
  {
    dise: "29041107201",
    name: "GOVT HPS KINNROAD",
    cluster: "DONGARGAON",
    type: "HPS"
  },
  {
    dise: "29041101711",
    name: "GOVT HS DONGARGAON",
    cluster: "DONGARGAON",
    type: "HS"
  },
  {
    dise: "29041102302",
    name: "GOVT HPS GIRLS HARSOOR",
    cluster: "HARSOOR",
    type: "HPS"
  },
  {
    dise: "29041102602",
    name: "GHS ITAGA (A)",
    cluster: "HARSOOR",
    type: "HS"
  },
  {
    dise: "29041102602",
    name: "GOVT HPS ITAGA (A)",
    cluster: "HARSOOR",
    type: "HPS"
  },
  {
    dise: "29041101201",
    name: "GOVT HPS BHUPAL TEGUNUR",
    cluster: "HARSOOR",
    type: "HPS"
  },
