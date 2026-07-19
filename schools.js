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
{
    dise: "29041103802",
    name: "GOVT LPS KASUNAIK TANDA KEROOR",
    cluster: "HARSOOR",
    type: "LPS"
  },
  {
    dise: "29041102307",
    name: "GOVT LPS HARASOOR TANDA",
    cluster: "HARSOOR",
    type: "LPS"
  },
  {
    dise: "29041104302",
    name: "GOVT LPS URDU MALAGATTI",
    cluster: "HARSOOR",
    type: "LPS"
  },
  {
    dise: "29041102901",
    name: "GOVT LPS KADABUR",
    cluster: "HARSOOR",
    type: "LPS"
  },
  {
    dise: "29041102303",
    name: "GOVT HPS URDU HARSOOR",
    cluster: "HARSOOR",
    type: "HPS"
  },
  {
    dise: "29041102301",
    name: "GOVT HPS HARSOOR",
    cluster: "HARSOOR",
    type: "HPS"
  },
  {
    dise: "29041104301",
    name: "GOVT HPS MALAGATTI",
    cluster: "HARSOOR",
    type: "HPS"
  },
  {
    dise: "29041105202",
    name: "GOVT HPS SARADAGI(B)",
    cluster: "HARSOOR",
    type: "HPS"
  },
  {
    dise: "29041105203",
    name: "GOVT HS SARADAGI(B)",
    cluster: "HARSOOR",
    type: "HS"
  },
  {
    dise: "29041104001",
    name: "GOVT HPS KUMASI",
    cluster: "HARSOOR",
    type: "HPS"
  },
  {
    dise: "29041101501",
    name: "GOVT HPS BELAMAGI",
    cluster: "KAMALAPUR",
    type: "HPS"
  },
  {
    dise: "29041101801",
    name: "GOVT HPS FEROZABAD",
    cluster: "KAMALAPUR",
    type: "HPS"
  },
  {
    dise: "29041103601",
    name: "GOVT HPS KAMALAPUR",
    cluster: "KAMALAPUR",
    type: "HPS"
  },
  {
    dise: "29041103602",
    name: "GHS KAMALAPUR",
    cluster: "KAMALAPUR",
    type: "HS"
  },
  {
    dise: "29041104601",
    name: "GOVT HPS MOTAKAPALLI",
    cluster: "KAMALAPUR",
    type: "HPS"
  },
  {
    dise: "29041104701",
    name: "GOVT HPS MUDABAL(B)",
    cluster: "KAMALAPUR",
    type: "HPS"
  },
  {
    dise: "29041105801",
    name: "GOVT HPS TAJSULTANPUR",
    cluster: "TAJSULTANPUR",
    type: "HPS"
  },
  {
    dise: "29041105802",
    name: "GHS TAJSULTANPUR",
    cluster: "TAJSULTANPUR",
    type: "HS"
  },
  {
    dise: "29041105901",
    name: "GOVT HPS TIPPANHALLI",
    cluster: "TAJSULTANPUR",
    type: "HPS"
  },
  {
    dise: "29041106201",
    name: "GOVT HPS UPPALGAON",
    cluster: "TAJSULTANPUR",
    type: "HPS"
  },
  {
    dise: "29041106301",
    name: "GOVT HPS WADI",
    cluster: "TAJSULTANPUR",
    type: "HPS"
  },
  {
    dise: "29041106401",
    name: "GOVT HPS YADGA",
    cluster: "TAJSULTANPUR",
    type: "HPS"
  },
  {
    dise: "29041106601",
    name: "GOVT HPS YELGOD",
    cluster: "TAJSULTANPUR",
    type: "HPS"
  },
  {
    dise: "29041106701",
    name: "GOVT HPS ZAFARPUR",
    cluster: "TAJSULTANPUR",
    type: "HPS"
  },
  {
    dise: "29041106801",
    name: "GOVT LPS HALLIKHED(B)",
    cluster: "TAJSULTANPUR",
    type: "LPS"
  },
  {
    dise: "29041106901",
    name: "GOVT LPS HOSALLI",
    cluster: "TAJSULTANPUR",
    type: "LPS"
  },
  {
    dise: "29041107001",
    name: "GOVT LPS KALLUR",
    cluster: "TAJSULTANPUR",
    type: "LPS"
  },
  {
    dise: "29041107101",
    name: "GOVT LPS KINNI SADAK",
    cluster: "TAJSULTANPUR",
    type: "LPS"
  },
  {
    dise: "29041107301",
    name: "GOVT LPS MADAN HIPPARGA",
    cluster: "TAJSULTANPUR",
    type: "LPS"
  },
  {
    dise: "29041107401",
    name: "GOVT LPS MOGHA(B)",
    cluster: "TAJSULTANPUR",
    type: "LPS"
  },
  {
    dise: "29041107501",
    name: "GOVT LPS NAGANHALLI",
    cluster: "TAJSULTANPUR",
    type: "LPS"
  },
  {
    dise: "29041107601",
    name: "GOVT LPS RAJAPUR",
    cluster: "TAJSULTANPUR",
    type: "LPS"
  },
  {
    dise: "29041107801",
    name: "GOVT LPS SHIVOOR",
    cluster: "TAJSULTANPUR",
    type: "LPS"
  },
