const pois =[
  {
    "id": 1,
    "city": "Adrar",
    "lat": 27.8787483,
    "lon": -0.2834016
  },
  {
    "id": 2,
    "city": "Chlef",
    "lat": 36.1649724,
    "lon": 1.3365622
  },
  {
    "id": 3,
    "city": "Laghouat",
    "lat": 33.7817811,
    "lon": 2.8937381
  },
  {
    "id": 4,
    "city": "Oum El Bouaghi",
    "lat": 35.8688789,
    "lon": 7.1108266
  },
  {
    "id": 5,
    "city": "Batna",
    "lat": 35.5614190227548,
    "lon": 6.18072742224852
  },
  {
    "id": 6,
    "city": "Bejaia",
    "lat": 36.7451506,
    "lon": 5.0489621
  },
  {
    "id": 7,
    "city": "Biskra",
    "lat": 34.8449437,
    "lon": 5.7248567
  },
  {
    "id": 8,
    "city": "Bechar",
    "lat": 31.6238098,
    "lon": -2.2162443
  },
  {
    "id": 9,
    "city": "Blida",
    "lat": 36.4734137,
    "lon": 2.8309434
  },
  {
    "id": 10,
    "city": "Bouira",
    "lat": 36.3691846,
    "lon": 3.9006194
  },
  {
    "id": 11,
    "city": "Tamanrasset",
    "lat": 22.7966481937637,
    "lon": 5.52785065589733
  },
  {
    "id": 12,
    "city": "Tebessa",
    "lat": 35.3997358,
    "lon": 8.1099531
  },
  {
    "id": 13,
    "city": "Tlemcen",
    "lat": 34.8848416,
    "lon": -1.3270729
  },
  {
    "id": 14,
    "city": "Tiaret",
    "lat": 35.3449028,
    "lon": 1.3278222
  },
  {
    "id": 15,
    "city": "Tizi Ouzou",
    "lat": 36.713548,
    "lon": 4.0473075
  },
  {
    "id": 16,
    "city": "Azazga",
    "lat": 36.7453947,
    "lon": 4.3714004
  },
  {
    "id": 17,
    "city": "Alger Est",
    "lat": 36.7295732,
    "lon": 3.1571563
  },
  {
    "id": 18,
    "city": "Alger Centre",
    "lat": 36.7768809,
    "lon": 3.0582454
  },
  {
    "id": 19,
    "city": "Alger Ouest",
    "lat": 36.7137456,
    "lon": 2.8449957
  },
  {
    "id": 20,
    "city": "Djelfa",
    "lat": 34.6703956,
    "lon": 3.2503761
  },
  {
    "id": 21,
    "city": "Jijel",
    "lat": 36.8210144,
    "lon": 5.7634126
  },
  {
    "id": 22,
    "city": "Setif",
    "lat": 36.1897593,
    "lon": 5.4107984
  },
  {
    "id": 23,
    "city": "EL Eulma",
    "lat": 36.1505099,
    "lon": 5.6999461
  },
  {
    "id": 24,
    "city": "Saïda",
    "lat": 34.8415207,
    "lon": 0.1456055
  },
  {
    "id": 25,
    "city": "Skikda",
    "lat": 36.8805825,
    "lon": 6.9075396
  },
  {
    "id": 26,
    "city": "Sidi Bel Abbes",
    "lat": 35.1915872,
    "lon": -0.6270863
  },
  {
    "id": 27,
    "city": "Annaba",
    "lat": 36.898468,
    "lon": 7.7445281
  },
  {
    "id": 28,
    "city": "Guelma",
    "lat": 36.4627444,
    "lon": 7.4330833
  },
  {
    "id": 29,
    "city": "Constantine",
    "lat": 36.2570374,
    "lon": 6.5831384
  },
  {
    "id": 30,
    "city": "Medea",
    "lat": 36.2663697452543,
    "lon": 2.79785226434008
  },
  {
    "id": 31,
    "city": "Mostagamen",
    "lat": 35.9311454,
    "lon": 0.0909414
  },
  {
    "id": 32,
    "city": "M'sila",
    "lat": 35.7186646,
    "lon": 4.5233423
  },
  {
    "id": 33,
    "city": "Mascara",
    "lat": 35.4007865164628,
    "lon": 0.139743721299029
  },
  {
    "id": 34,
    "city": "Ouargla",
    "lat": 31.9527411,
    "lon": 5.3335348
  },
  {
    "id": 35,
    "city": "Oran",
    "lat": 35.6987388,
    "lon": -0.6349319
  },
  {
    "id": 36,
    "city": "Gdyel",
    "lat": 35.7035198,
    "lon": -0.6485293
  },
  {
    "id": 37,
    "city": "El Bayadh",
    "lat": 33.6854149,
    "lon": 1.0303543
  },
  {
    "id": 38,
    "city": "Illizi",
    "lat": 26.5052245821138,
    "lon": 8.47919611437651
  },
  {
    "id": 39,
    "city": "Bordj Bou Arreridj",
    "lat": 36.0739925,
    "lon": 4.7630271
  },
  {
    "id": 40,
    "city": "Boumerdes",
    "lat": 36.7510697,
    "lon": 3.4788905
  },
  {
    "id": 41,
    "city": "El Tarf",
    "lat": 36.7576678,
    "lon": 8.3076343
  },
  {
    "id": 42,
    "city": "Tindouf",
    "lat": 27.6769121188217,
    "lon": -8.13892268132915
  },
  {
    "id": 43,
    "city": "Tissemsilt",
    "lat": 35.6053781,
    "lon": 1.813098
  },
  {
    "id": 44,
    "city": "El Oued",
    "lat": 33.367811,
    "lon": 6.8516511
  },
  {
    "id": 45,
    "city": "Khenchela",
    "lat": 35.4269404,
    "lon": 7.1460155
  },
  {
    "id": 46,
    "city": "Souk Ahras",
    "lat": 36.2827045105856,
    "lon": 7.9454867902091
  },
  {
    "id": 47,
    "city": "Tipaza",
    "lat": 36.5906719,
    "lon": 2.4433723
  },
  {
    "id": 48,
    "city": "Mila",
    "lat": 36.4519049,
    "lon": 6.2584338
  },
  {
    "id": 49,
    "city": "Ain Defla",
    "lat": 36.263165907793,
    "lon": 1.96381182628364
  },
  {
    "id": 50,
    "city": "Naâma",
    "lat": 33.2668666754396,
    "lon": -0.309018323631392
  },
  {
    "id": 51,
    "city": "Aïn Témouchent",
    "lat": 35.3144999802798,
    "lon": -1.14348350661548
  },
  {
    "id": 52,
    "city": "Ghardaïa",
    "lat": 32.4943741,
    "lon": 3.64446
  },
  {
    "id": 53,
    "city": "Relizane",
    "lat": 35.7398997825274,
    "lon": 0.554097142588416
  },
  {
    "id": 54,
    "city": "Ouled Djellal",
    "lat": 34.42428,
    "lon": 5.06123
  },
  {
    "id": 55,
    "city": "Djanet",
    "lat": 24.55498,
    "lon": 9.48617
  }
]
export default pois ; 