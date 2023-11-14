const verbs = [
  {
    "Infinitive": "arise",
    "SimplePast": "arose",
    "PastParticiple": "arisen",
    "French": "Survenir | Se lever",
    "id": 1
  },
  {
    "Infinitive": "awake",
    "SimplePast": "awakened / awoke",
    "PastParticiple": "awakened / awoken",
    "French": "S'éveiller | Éveiller",
    "id": 2
  },
  {
    "Infinitive": "backslide",
    "PastParticiple": "backslidden / backslid",
    "SimplePast": "backslid",
    "French": "Revenir | Retomber | Récidiver",
    "id": 3
  },
  {
    "Infinitive": "be",
    "SimplePast": "was, were",
    "PastParticiple": "been",
    "French": "Être",
    "id": 4
  },
  {
    "Infinitive": "bear",
    "SimplePast": "bore",
    "PastParticiple": "born / borne",
    "French": "Porter | Supporter",
    "id": 5
  },
  {
    "Infinitive": "beat",
    "SimplePast": "beat",
    "PastParticiple": "beaten / beat",
    "French": "Battre",
    "id": 6
  },
  {
    "Infinitive": "become",
    "SimplePast": "became",
    "PastParticiple": "become",
    "French": "Devenir",
    "id": 7
  },
  {
    "Infinitive": "begin",
    "SimplePast": "began",
    "PastParticiple": "begun",
    "French": "Commencer",
    "id": 8
  },
  {
    "Infinitive": "bend",
    "SimplePast": "bent",
    "PastParticiple": "bent",
    "French": "Plier | Tordre",
    "id": 9
  },
  {
    "Infinitive": "bid",
    "SimplePast": "bid",
    "French": "Parier | Faire une enchère",
    "id": 10
  },
  {
    "Infinitive": "bind",
    "SimplePast": "bound",
    "PastParticiple": "bound",
    "French": "Lier | Attacher",
    "id": 11
  },
  {
    "Infinitive": "bite",
    "SimplePast": "bit",
    "PastParticiple": "bitten",
    "French": "Mordre",
    "id": 12
  },
  {
    "Infinitive": "bleed",
    "SimplePast": "bled",
    "PastParticiple": "bled",
    "French": "Saigner",
    "id": 13
  },
  {
    "Infinitive": "blow",
    "SimplePast": "blew",
    "PastParticiple": "blown",
    "French": "Souffler",
    "id": 14
  },
  {
    "Infinitive": "break",
    "SimplePast": "broke",
    "PastParticiple": "broken",
    "French": "Casser | Briser",
    "id": 15
  },
  {
    "Infinitive": "breed",
    "SimplePast": "bred",
    "PastParticiple": "bred",
    "French": "Élever",
    "id": 16
  },
  {
    "Infinitive": "bring",
    "SimplePast": "brought",
    "PastParticiple": "brought",
    "French": "Apporter",
    "id": 17
  },
  {
    "Infinitive": "broadcast",
    "SimplePast": "broadcast / broadcasted",
    "PastParticiple": "broadcast / broadcasted",
    "French": "Diffuser | Émettre",
    "id": 18
  },
  {
    "Infinitive": "browbeat",
    "SimplePast": "browbeat",
    "PastParticiple": "browbeaten / browbeat",
    "French": "Intimider",
    "id": 19
  },
  {
    "Infinitive": "build",
    "SimplePast": "built",
    "PastParticiple": "built",
    "French": "Construire",
    "id": 20
  },
  {
    "Infinitive": "burst",
    "SimplePast": "burst",
    "PastParticiple": "burst",
    "French": "Éclater",
    "id": 21
  },
  {
    "Infinitive": "bust",
    "SimplePast": "busted / bust",
    "PastParticiple": "busted / bust",
    "French": "Péter",
    "id": 22
  },
  {
    "Infinitive": "buy",
    "SimplePast": "bought",
    "PastParticiple": "bought",
    "French": "Acheter",
    "id": 23
  },
  {
    "Infinitive": "cast",
    "SimplePast": "cast",
    "PastParticiple": "cast",
    "French": "Jeter (un sort) | Mouler (un métal)",
    "id": 24
  },
  {
    "Infinitive": "catch",
    "SimplePast": "caught",
    "PastParticiple": "caught",
    "French": "Attraper",
    "id": 25
  },
  {
    "Infinitive": "choose",
    "SimplePast": "chose",
    "PastParticiple": "chosen",
    "French": "Choisir",
    "id": 26
  },
  {
    "Infinitive": "cling",
    "SimplePast": "clung",
    "PastParticiple": "clung",
    "French": "S'accrocher",
    "id": 27
  },
  {
    "Infinitive": "come",
    "SimplePast": "came",
    "PastParticiple": "come",
    "French": "Venir",
    "id": 28
  },
  {
    "Infinitive": "cost",
    "SimplePast": "cost",
    "PastParticiple": "cost",
    "French": "Coûter",
    "id": 29
  },
  {
    "Infinitive": "creep",
    "SimplePast": "crept",
    "PastParticiple": "crept",
    "French": "Ramper | Fluer",
    "id": 30
  },
  {
    "Infinitive": "crossbreed",
    "SimplePast": "crossbred",
    "PastParticiple": "crossbred",
    "French": "Croiser (génétiquement)",
    "id": 31
  },
  {
    "Infinitive": "cut",
    "SimplePast": "cut",
    "PastParticiple": "cut",
    "French": "Couper",
    "id": 32
  },
  {
    "Infinitive": "deal",
    "SimplePast": "dealt ",
    "PastParticiple": "dealt",
    "French": "Gérer",
    "id": 33
  },
  {
    "Infinitive": "dig",
    "SimplePast": "dug",
    "PastParticiple": "dug",
    "French": "Creuser",
    "id": 34
  },
  {
    "Infinitive": "disprove",
    "SimplePast": "disproved",
    "PastParticiple": "disproved / disproven",
    "French": "Réfuter",
    "id": 35
  },
  {
    "Infinitive": "dive",
    "SimplePast": "dove / dived",
    "PastParticiple": "dived",
    "Subtext": "jump head-first",
    "French": "Plonger",
    "id": 36
  },
  {
    "Infinitive": "dive",
    "SimplePast": "dived / dove",
    "PastParticiple": "dived",
    "Subtext": "scuba diving",
    "French": "Plonger",
    "id": 37
  },
  {
    "Infinitive": "do",
    "SimplePast": "did",
    "PastParticiple": "done",
    "French": "Faire",
    "id": 38
  },
  {
    "Infinitive": "draw",
    "SimplePast": "drew",
    "PastParticiple": "drawn",
    "French": "Dessiner",
    "id": 39
  },
  {
    "Infinitive": "drink",
    "SimplePast": "drank",
    "PastParticiple": "drunk",
    "French": "Boire",
    "id": 40
  },
  {
    "Infinitive": "drive",
    "SimplePast": "drove",
    "PastParticiple": "driven",
    "French": "Conduire",
    "id": 41
  },
  {
    "Infinitive": "eat",
    "SimplePast": "ate",
    "PastParticiple": "eaten",
    "French": "Manger",
    "id": 42
  },
  {
    "Infinitive": "fall",
    "SimplePast": "fell",
    "PastParticiple": "fallen",
    "French": "Tomber",
    "id": 43
  },
  {
    "Infinitive": "feed",
    "SimplePast": "fed",
    "PastParticiple": "fed",
    "French": "Nourrir",
    "id": 44
  },
  {
    "Infinitive": "feel",
    "SimplePast": "felt",
    "PastParticiple": "felt",
    "French": "Se sentir | Ressentir",
    "id": 45
  },
  {
    "Infinitive": "fight",
    "SimplePast": "fought",
    "PastParticiple": "fought",
    "French": "Se battre",
    "id": 46
  },
  {
    "Infinitive": "find",
    "SimplePast": "found",
    "PastParticiple": "found",
    "French": "Trouver",
    "id": 47
  },
  {
    "Infinitive": "flee",
    "SimplePast": "fled",
    "PastParticiple": "fled",
    "French": "Fuir",
    "id": 48
  },
  {
    "Infinitive": "fling",
    "SimplePast": "flung",
    "PastParticiple": "flung",
    "French": "Lancer | Jeter",
    "id": 49
  },
  {
    "Infinitive": "fly",
    "SimplePast": "flew",
    "PastParticiple": "flown",
    "French": "Voler",
    "id": 50
  },
  {
    "Infinitive": "forbid",
    "SimplePast": "forbade",
    "PastParticiple": "forbidden",
    "French": "Interdir",
    "id": 51
  },
  {
    "Infinitive": "forecast",
    "SimplePast": "forecast",
    "PastParticiple": "forecast",
    "French": "Prévoir",
    "id": 52
  },
  {
    "Infinitive": "forego",
    "SimplePast": "forewent",
    "PastParticiple": "foregone",
    "French": "Sacrifier",
    "id": 53
  },
  {
    "Infinitive": "foresee",
    "SimplePast": "foresaw",
    "PastParticiple": "foreseen",
    "French": "Imaginer | Voir à l'avance",
    "id": 54
  },
  {
    "Infinitive": "foretell",
    "SimplePast": "foretold",
    "PastParticiple": "foretold",
    "French": "Prédire",
    "id": 55
  },
  {
    "Infinitive": "forgive",
    "SimplePast": "forgave",
    "PastParticiple": "forgiven",
    "French": "Pardonner",
    "id": 56
  },
  {
    "Infinitive": "forsake",
    "SimplePast": "forsook",
    "PastParticiple": "forsaken",
    "French": "Renoncer à",
    "id": 57
  },
  {
    "Infinitive": "freeze",
    "SimplePast": "froze",
    "PastParticiple": "frozen",
    "French": "Geler",
    "id": 58
  },
  {
    "Infinitive": "frostbite",
    "SimplePast": "frostbit",
    "PastParticiple": "frostbitten",
    "French": "Gelure",
    "id": 59
  },
  {
    "Infinitive": "give",
    "SimplePast": "gave",
    "PastParticiple": "given",
    "French": "Donner",
    "id": 60
  },
  {
    "Infinitive": "go",
    "SimplePast": "went",
    "PastParticiple": "gone",
    "French": "Aller",
    "id": 61
  },
  {
    "Infinitive": "grind",
    "SimplePast": "ground",
    "PastParticiple": "ground",
    "French": "Broyer",
    "id": 62
  },
  {
    "Infinitive": "grow",
    "SimplePast": "grew",
    "PastParticiple": "grown",
    "French": "Grandir",
    "id": 63
  },
  {
    "Infinitive": "hand-feed",
    "SimplePast": "hand-fed",
    "PastParticiple": "hand-fed",
    "French": "Nourrir à la main",
    "id": 64
  },
  {
    "Infinitive": "handwrite",
    "SimplePast": "handwrote",
    "PastParticiple": "handwritten",
    "French": "Écrire à la main",
    "id": 65
  },
  {
    "Infinitive": "hang",
    "SimplePast": "hung",
    "PastParticiple": "hung",
    "French": "Suspendre",
    "id": 66
  },
  {
    "Infinitive": "have",
    "SimplePast": "had",
    "PastParticiple": "had",
    "French": "Avoir",
    "id": 67
  },
  {
    "Infinitive": "hear",
    "SimplePast": "heard",
    "PastParticiple": "heard",
    "French": "Entendre",
    "id": 68
  },
  {
    "Infinitive": "hew",
    "SimplePast": "hewed",
    "PastParticiple": "hewn / hewed",
    "French": "Tailler (du bois)",
    "id": 69
  },
  {
    "Infinitive": "hide",
    "SimplePast": "hid",
    "PastParticiple": "hidden",
    "French": "Cacher",
    "id": 70
  },
  {
    "Infinitive": "hit",
    "SimplePast": "hit",
    "PastParticiple": "hit",
    "French": "Frapper",
    "id": 71
  },
  {
    "Infinitive": "hold",
    "SimplePast": "held",
    "PastParticiple": "held",
    "French": "Tenir",
    "id": 72
  },
  {
    "Infinitive": "hurt",
    "SimplePast": "hurt",
    "PastParticiple": "hurt",
    "French": "Blesser",
    "id": 73
  },
  {
    "Infinitive": "inlay",
    "SimplePast": "inlaid",
    "PastParticiple": "inlaid",
    "French": "Incruster",
    "id": 74
  },
  {
    "Infinitive": "input",
    "SimplePast": "input / inputted",
    "PastParticiple": "input / inputted",
    "Subtext": "data into a database",
    "French": "Entrer",
    "id": 75
  },
  {
    "Infinitive": "interweave",
    "SimplePast": "interwove / interweaved",
    "PastParticiple": "interwoven / interweaved",
    "French": "S'entremêler",
    "id": 76
  },
  {
    "Infinitive": "keep",
    "SimplePast": "kept",
    "PastParticiple": "kept",
    "French": "Garder",
    "id": 77
  },
  {
    "Infinitive": "kneel",
    "SimplePast": "knelt / kneeled",
    "PastParticiple": "knelt / kneeled",
    "French": "S'agenouiller",
    "id": 78
  },
  {
    "Infinitive": "knit",
    "SimplePast": "knitted / knit",
    "PastParticiple": "knitted / knit",
    "French": "Tricoter",
    "id": 79
  },
  {
    "Infinitive": "know",
    "SimplePast": "knew",
    "PastParticiple": "known",
    "French": "Savoir",
    "id": 80
  },
  {
    "Infinitive": "lay",
    "SimplePast": "laid",
    "PastParticiple": "laid",
    "French": "Poser",
    "id": 81
  },
  {
    "Infinitive": "lead",
    "SimplePast": "led",
    "PastParticiple": "led",
    "French": "Diriger",
    "id": 82
  },
  {
    "Infinitive": "leave",
    "SimplePast": "left",
    "PastParticiple": "left",
    "French": "Quitter",
    "id": 83
  },
  {
    "Infinitive": "lend",
    "SimplePast": "lent",
    "PastParticiple": "lent",
    "French": "Prêter",
    "id": 84
  },
  {
    "Infinitive": "let",
    "SimplePast": "let",
    "PastParticiple": "let",
    "French": "Laisser",
    "id": 85
  },
  {
    "Infinitive": "lie",
    "SimplePast": "lay",
    "PastParticiple": "lain",
    "French": "Mentir",
    "id": 86
  },
  {
    "Infinitive": "light",
    "SimplePast": "lit / lighted",
    "PastParticiple": "lit / lighted",
    "French": "Éclairer",
    "id": 87
  },
  {
    "Infinitive": "lip-read",
    "SimplePast": "lip-read",
    "PastParticiple": "lip-read",
    "French": "Lire sur les lèvres",
    "id": 88
  },
  {
    "Infinitive": "lose",
    "SimplePast": "lost",
    "PastParticiple": "lost",
    "French": "Perdre",
    "id": 89
  },
  {
    "Infinitive": "make",
    "SimplePast": "made",
    "PastParticiple": "made",
    "French": "Faire | Produire",
    "id": 90
  },
  {
    "Infinitive": "mean",
    "SimplePast": "meant",
    "PastParticiple": "meant",
    "French": "Signifier",
    "id": 91
  },
  {
    "Infinitive": "meet",
    "SimplePast": "met",
    "PastParticiple": "met",
    "French": "Rencontrer",
    "id": 92
  },
  {
    "Infinitive": "mislead",
    "SimplePast": "misled",
    "PastParticiple": "misled",
    "French": "Duper",
    "id": 93
  },
  {
    "Infinitive": "misunderstand",
    "SimplePast": "misunderstood",
    "PastParticiple": "misunderstood",
    "French": "Mal comprendre",
    "id": 94
  },
  {
    "Infinitive": "mow",
    "SimplePast": "mowed",
    "PastParticiple": "mowed / mown",
    "French": "Faucher",
    "id": 95
  },
  {
    "Infinitive": "offset",
    "SimplePast": "offset",
    "PastParticiple": "offset",
    "French": "Compenser",
    "id": 96
  },
  {
    "Infinitive": "outbid",
    "SimplePast": "outbid",
    "PastParticiple": "outbid",
    "French": "Surenchérir",
    "id": 97
  },
  {
    "Infinitive": "outdo",
    "SimplePast": "outdid",
    "PastParticiple": "outdone",
    "French": "Surpasser",
    "id": 98
  },
  {
    "Infinitive": "overlay",
    "SimplePast": "overlaid",
    "PastParticiple": "overlaid",
    "French": "Recouvrir",
    "id": 99
  },
  {
    "Infinitive": "overpay",
    "SimplePast": "overpaid",
    "PastParticiple": "overpaid",
    "French": "Surpayer",
    "id": 100
  },
  {
    "Infinitive": "override",
    "SimplePast": "overrode",
    "PastParticiple": "overridden",
    "French": "Outrepasser",
    "id": 101
  },
  {
    "Infinitive": "overtake",
    "SimplePast": "overtook",
    "PastParticiple": "overtaken",
    "French": "Dépasser",
    "id": 102
  },
  {
    "Infinitive": "overthink",
    "SimplePast": "overthought",
    "PastParticiple": "overthought",
    "French": "Trop réfléchir",
    "id": 103
  },
  {
    "Infinitive": "overthrow",
    "SimplePast": "overthrew",
    "PastParticiple": "overthrown",
    "French": "Renverser (un gouvernement)",
    "id": 104
  },
  {
    "Infinitive": "partake",
    "SimplePast": "partook",
    "PastParticiple": "partaken",
    "French": "Participer",
    "id": 105
  },
  {
    "Infinitive": "pay",
    "SimplePast": "paid",
    "PastParticiple": "paid",
    "French": "Payer",
    "id": 106
  },
  {
    "Infinitive": "plead",
    "SimplePast": "pleaded / pled",
    "PastParticiple": "pleaded / pled",
    "French": "Plaider",
    "id": 107
  },
  {
    "Infinitive": "proofread",
    "SimplePast": "proofread",
    "PastParticiple": "proofread",
    "French": "Relire",
    "id": 108
  },
  {
    "Infinitive": "prove",
    "SimplePast": "proved",
    "PastParticiple": "proven / proved",
    "French": "Prouver",
    "id": 109
  },
  {
    "Infinitive": "put",
    "SimplePast": "put",
    "PastParticiple": "put",
    "French": "Mettre",
    "id": 110
  },
  {
    "Infinitive": "read",
    "SimplePast": "read",
    "PastParticiple": "read",
    "French": "Lire",
    "id": 111
  },
  {
    "Infinitive": "relay",
    "SimplePast": "relaid",
    "PastParticiple": "relaid",
    "French": "Relayer",
    "id": 112
  },
  {
    "Infinitive": "remake",
    "SimplePast": "remade",
    "PastParticiple": "remade",
    "French": "Rééditer",
    "id": 113
  },
  {
    "Infinitive": "repay",
    "SimplePast": "repaid",
    "PastParticiple": "repaid",
    "French": "Repayer",
    "id": 114
  },
  {
    "Infinitive": "reset",
    "SimplePast": "reset",
    "PastParticiple": "reset",
    "French": "Réinitialiser",
    "id": 115
  },
  {
    "Infinitive": "rethink",
    "SimplePast": "rethought",
    "PastParticiple": "rethought",
    "French": "Reconsidérer",
    "id": 116
  },
  {
    "Infinitive": "rewind",
    "SimplePast": "rewound",
    "PastParticiple": "rewound",
    "French": "Rembobiner",
    "id": 117
  },
  {
    "Infinitive": "rid",
    "SimplePast": "rid",
    "PastParticiple": "rid",
    "French": "Débarasser",
    "id": 118
  },
  {
    "Infinitive": "ride",
    "SimplePast": "rode",
    "PastParticiple": "ridden",
    "French": "Conduire | Monter",
    "id": 119
  },
  {
    "Infinitive": "ring",
    "SimplePast": "rang",
    "PastParticiple": "rung",
    "French": "Sonner",
    "id": 120
  },
  {
    "Infinitive": "rise",
    "SimplePast": "rose",
    "PastParticiple": "risen",
    "French": "Monter | Se lever",
    "id": 121
  },
  {
    "Infinitive": "run",
    "SimplePast": "ran",
    "PastParticiple": "run",
    "French": "Courir",
    "id": 122
  },
  {
    "Infinitive": "saw",
    "SimplePast": "sawed",
    "PastParticiple": "sawed / sawn",
    "French": "Scier",
    "id": 123
  },
  {
    "Infinitive": "say",
    "SimplePast": "said",
    "PastParticiple": "said",
    "French": "Dire",
    "id": 124
  },
  {
    "Infinitive": "see",
    "SimplePast": "saw",
    "PastParticiple": "seen",
    "French": "Voir",
    "id": 125
  },
  {
    "Infinitive": "seek",
    "SimplePast": "sought",
    "PastParticiple": "sought",
    "French": "Chercher",
    "id": 126
  },
  {
    "Infinitive": "sell",
    "SimplePast": "sold",
    "PastParticiple": "sold",
    "French": "Vendre",
    "id": 127
  },
  {
    "Infinitive": "send",
    "SimplePast": "sent",
    "PastParticiple": "sent",
    "French": "Envoyer",
    "id": 128
  },
  {
    "Infinitive": "set",
    "SimplePast": "set",
    "PastParticiple": "set",
    "French": "Fixer | Mettre | Placer",
    "id": 129
  },
  {
    "Infinitive": "sew",
    "SimplePast": "sewed",
    "PastParticiple": "sewn / sewed",
    "French": "Coudre",
    "id": 130
  },
  {
    "Infinitive": "shake",
    "SimplePast": "shook",
    "PastParticiple": "shaken",
    "French": "Secouer",
    "id": 131
  },
  {
    "Infinitive": "shave",
    "SimplePast": "shaved",
    "PastParticiple": "shaved / shaven",
    "French": "Raser",
    "id": 132
  },
  {
    "Infinitive": "shear",
    "SimplePast": "sheared",
    "PastParticiple": "sheared / shorn",
    "French": "Cisailler",
    "id": 133
  },
  {
    "Infinitive": "shed",
    "SimplePast": "shed",
    "PastParticiple": "shed",
    "French": "Verser (une larme)",
    "id": 134
  },
  {
    "Infinitive": "shit",
    "SimplePast": "shit / shat",
    "PastParticiple": "shit / shitted",
    "French": "Chier",
    "id": 135
  },
  {
    "Infinitive": "shoot",
    "SimplePast": "shot",
    "PastParticiple": "shot",
    "French": "Tirer (sur quelqu'un)",
    "id": 136
  },
  {
    "Infinitive": "show",
    "SimplePast": "showed",
    "PastParticiple": "shown / showed",
    "French": "Montrer",
    "id": 137
  },
  {
    "Infinitive": "shrink",
    "SimplePast": "shrank / shrunk",
    "PastParticiple": "shrunk",
    "French": "Retrécir",
    "id": 138
  },
  {
    "Infinitive": "shut",
    "SimplePast": "shut",
    "PastParticiple": "shut",
    "French": "Fermer (sa bouche, une porte...)",
    "id": 139
  },
  {
    "Infinitive": "sight-read",
    "SimplePast": "sight-read",
    "PastParticiple": "sight-read",
    "French": "Lire à vue (une partition)",
    "id": 140
  },
  {
    "Infinitive": "sing",
    "SimplePast": "sang",
    "PastParticiple": "sung",
    "French": "Chanter",
    "id": 141
  },
  {
    "Infinitive": "sink",
    "SimplePast": "sank / sunk",
    "PastParticiple": "sunk",
    "French": "Couler",
    "id": 142
  },
  {
    "Infinitive": "sit",
    "SimplePast": "sat",
    "PastParticiple": "sat",
    "French": "S'assoir",
    "id": 143
  },
  {
    "Infinitive": "slay",
    "SimplePast": "slew / slayed",
    "PastParticiple": "slain / slayed",
    "Subtext": "kill",
    "French": "Tuer (avec une épée)",
    "id": 144
  },
  {
    "Infinitive": "sleep",
    "SimplePast": "slept",
    "PastParticiple": "slept",
    "French": "Dormir",
    "id": 145
  },
  {
    "Infinitive": "slide",
    "SimplePast": "slid",
    "PastParticiple": "slid",
    "French": "Glisser",
    "id": 146
  },
  {
    "Infinitive": "sling",
    "SimplePast": "slung",
    "PastParticiple": "slung",
    "French": "Lancer (des cailloux)",
    "id": 147
  },
  {
    "Infinitive": "slit",
    "SimplePast": "slit",
    "PastParticiple": "slit",
    "French": "Fendre",
    "id": 148
  },
  {
    "Infinitive": "sneak",
    "SimplePast": "sneaked / snuck",
    "PastParticiple": "sneaked / snuck",
    "French": "Se faufiler",
    "id": 149
  },
  {
    "Infinitive": "sow",
    "SimplePast": "sowed",
    "PastParticiple": "sown / sowed",
    "French": "Semer",
    "id": 150
  },
  {
    "Infinitive": "speak",
    "SimplePast": "spoke",
    "PastParticiple": "spoken",
    "French": "Parler",
    "id": 151
  },
  {
    "Infinitive": "speed",
    "SimplePast": "sped / speeded",
    "PastParticiple": "sped / speeded",
    "French": "Galoper",
    "id": 152
  },
  {
    "Infinitive": "spend",
    "SimplePast": "spent",
    "PastParticiple": "spent",
    "French": "Dépenser",
    "id": 153
  },
  {
    "Infinitive": "spin",
    "SimplePast": "spun",
    "PastParticiple": "spun",
    "French": "Tourner",
    "id": 154
  },
  {
    "Infinitive": "spit",
    "SimplePast": "spit / spat",
    "PastParticiple": "spit / spat",
    "French": "Cracher",
    "id": 155
  },
  {
    "Infinitive": "split",
    "SimplePast": "split",
    "PastParticiple": "split",
    "French": "Fractionner",
    "id": 156
  },
  {
    "Infinitive": "spoon-feed",
    "SimplePast": "spoon-fed",
    "PastParticiple": "spoon-fed",
    "French": "Nourrir à la cuillère",
    "id": 157
  },
  {
    "Infinitive": "spread",
    "SimplePast": "spread",
    "PastParticiple": "spread",
    "French": "Propager",
    "id": 158
  },
  {
    "Infinitive": "spring",
    "SimplePast": "sprang / sprung",
    "PastParticiple": "sprung",
    "French": "Bondir",
    "id": 159
  },
  {
    "Infinitive": "stand",
    "SimplePast": "stood",
    "PastParticiple": "stood",
    "French": "Se lever",
    "id": 160
  },
  {
    "Infinitive": "steal",
    "SimplePast": "stole",
    "PastParticiple": "stolen",
    "French": "Voler",
    "id": 161
  },
  {
    "Infinitive": "stick",
    "SimplePast": "stuck",
    "PastParticiple": "stuck",
    "French": "Coller",
    "id": 162
  },
  {
    "Infinitive": "sting",
    "SimplePast": "stung",
    "PastParticiple": "stung",
    "French": "Piquer",
    "id": 163
  },
  {
    "Infinitive": "stink",
    "SimplePast": "stunk / stank",
    "PastParticiple": "stunk",
    "French": "Puer",
    "id": 164
  },
  {
    "Infinitive": "stride",
    "SimplePast": "strode",
    "PastParticiple": "stridden",
    "French": "Marcher à grands pas",
    "id": 165
  },
  {
    "Infinitive": "strike",
    "SimplePast": "struck",
    "PastParticiple": "struck / stricken",
    "French": "Frapper",
    "id": 166
  },
  {
    "Infinitive": "strive",
    "SimplePast": "strove / strived",
    "PastParticiple": "striven / strived",
    "French": "Lutter | Aspirer",
    "id": 167
  },
  {
    "Infinitive": "sublet",
    "SimplePast": "sublet",
    "PastParticiple": "sublet",
    "French": "Sous-louer",
    "id": 168
  },
  {
    "Infinitive": "swear",
    "SimplePast": "swore",
    "PastParticiple": "sworn",
    "French": "Jurer",
    "id": 169
  },
  {
    "Infinitive": "sweat",
    "SimplePast": "sweat / sweated",
    "PastParticiple": "sweat / sweated",
    "French": "Transpirer",
    "id": 170
  },
  {
    "Infinitive": "sweep",
    "SimplePast": "swept",
    "PastParticiple": "swept",
    "French": "Balayer",
    "id": 171
  },
  {
    "Infinitive": "swell",
    "SimplePast": "swelled",
    "PastParticiple": "swollen / swelled",
    "French": "Gonfler",
    "id": 172
  },
  {
    "Infinitive": "swim",
    "SimplePast": "swam",
    "PastParticiple": "swum",
    "French": "Nager",
    "id": 173
  },
  {
    "Infinitive": "swing",
    "SimplePast": "swung",
    "PastParticiple": "swung",
    "French": "Balancer",
    "id": 174
  },
  {
    "Infinitive": "take",
    "SimplePast": "took",
    "PastParticiple": "taken",
    "French": "Prendre",
    "id": 175
  },
  {
    "Infinitive": "teach",
    "SimplePast": "taught",
    "PastParticiple": "taught",
    "French": "Enseigner",
    "id": 176
  },
  {
    "Infinitive": "tear",
    "SimplePast": "tore",
    "PastParticiple": "torn",
    "French": "User",
    "id": 177
  },
  {
    "Infinitive": "tell",
    "SimplePast": "told",
    "PastParticiple": "told",
    "French": "Dire | Raconter",
    "id": 178
  },
  {
    "Infinitive": "test-drive",
    "SimplePast": "test-drove",
    "PastParticiple": "test-driven",
    "French": "Tester un véhicule",
    "id": 179
  },
  {
    "Infinitive": "think",
    "SimplePast": "thought",
    "PastParticiple": "thought",
    "French": "Penser",
    "id": 180
  },
  {
    "Infinitive": "throw",
    "SimplePast": "threw",
    "PastParticiple": "thrown",
    "French": "Jeter",
    "id": 181
  },
  {
    "Infinitive": "thrust",
    "SimplePast": "thrust",
    "PastParticiple": "thrust",
    "French": "Pousser | Enfoncer",
    "id": 182
  },
  {
    "Infinitive": "understand",
    "SimplePast": "understood",
    "PastParticiple": "understood",
    "French": "Comprendre",
    "id": 183
  },
  {
    "Infinitive": "undertake",
    "SimplePast": "undertook",
    "PastParticiple": "undertaken",
    "French": "Entreprendre | Assumer",
    "id": 184
  },
  {
    "Infinitive": "undo",
    "SimplePast": "undid",
    "PastParticiple": "undone",
    "French": "Annuler | Défaire",
    "id": 185
  },
  {
    "Infinitive": "unfreeze",
    "SimplePast": "unfroze",
    "PastParticiple": "unfrozen",
    "French": "Dégeler",
    "id": 186
  },
  {
    "Infinitive": "uphold",
    "SimplePast": "upheld",
    "PastParticiple": "upheld",
    "French": "Maintenir (en place)",
    "id": 187
  },
  {
    "Infinitive": "upset",
    "SimplePast": "upset",
    "PastParticiple": "upset",
    "French": "Contrarier",
    "id": 188
  },
  {
    "Infinitive": "wake",
    "SimplePast": "woke / waked",
    "PastParticiple": "woken / waked",
    "French": "Réveiller",
    "id": 189
  },
  {
    "Infinitive": "wear",
    "SimplePast": "wore",
    "PastParticiple": "worn",
    "French": "Porter (un vêtement) | User (un pneu)",
    "id": 190
  },
  {
    "Infinitive": "weave",
    "SimplePast": "wove / weaved",
    "PastParticiple": "woven / weaved",
    "French": "Tisser",
    "id": 191
  },
  {
    "Infinitive": "weep",
    "SimplePast": "wept",
    "PastParticiple": "wept",
    "French": "Pleurer | Suinter",
    "id": 192
  },
  {
    "Infinitive": "win",
    "SimplePast": "won",
    "PastParticiple": "won",
    "French": "Gagner",
    "id": 193
  },
  {
    "Infinitive": "wind",
    "SimplePast": "wound",
    "PastParticiple": "wound",
    "French": "Enrouler",
    "id": 194
  },
  {
    "Infinitive": "withdraw",
    "SimplePast": "withdrew",
    "PastParticiple": "withdrawn",
    "French": "Retirer (de l'argent)",
    "id": 195
  },
  {
    "Infinitive": "withhold",
    "SimplePast": "withheld",
    "PastParticiple": "withheld",
    "French": "Retenir | Refuser",
    "id": 196
  },
  {
    "Infinitive": "withstand",
    "SimplePast": "withstood",
    "PastParticiple": "withstood",
    "French": "Résister",
    "id": 197
  },
  {
    "Infinitive": "write",
    "SimplePast": "wrote",
    "PastParticiple": "written",
    "French": "Écrire",
    "id": 198
  }
];

export default verbs;