const FILE_NAME_LIST = [
  "test1.csv",
  "test2.csv",
  "test3.csv",
  "test18.csv",
  "test4.csv",
  "test5.csv",
  "test6.csv",
  "test9.csv",
  "test15.csv"
];

const FILE_LIST = [
  {
    file: "test2.csv",
    lines: [
      {
        text: "rZPBycPEJUZjlgvCO",
        number: "0044",
        hex: "9e3c0b9b7e6c64e0cc4964cea6731e40",
      },
    ],
  },
  {
    file: "test3.csv",
    lines: [
      {
        text: "tplOuqXDLrcmtyO",
        number: "105374",
        hex: "6c1bb29fc06aff72aa8f3f7e611b8b70",
      },
      {
        text: "dBWoERtHkePpwp",
        number: "668256606",
        hex: "19932c154e24c6f1d4d2ab52badcbd0a",
      },
      {
        text: "eQPMwETMGgCZEIfsBcmee",
        number: "21726",
        hex: "193e3e5a98c5b774e03f32930122a0c9",
      },
    ],
  },
  {
    file: "test18.csv",
    lines: [],
  },
  {
    file: "test6.csv",
    lines: [],
  },
  {
    file: "test9.csv",
    lines: [
      {
        text: "y",
        number: "865555",
        hex: "79da54a8dce21daae1d691807206cf57",
      },
      {
        text: "THrSbGMcAIqhixeqbOml",
        number: "807369",
        hex: "4a255546715b363d72cb04c2944e92f6",
      },
      {
        text: "evA",
        number: "3562",
        hex: "05b19f81f40c1bfb9b9e45da89927479",
      },
      {
        text: "rGRSQFSKoAzsXufwfpgivxh",
        number: "0563763632",
        hex: "1e081403e68f12d63130d24c84f3872a",
      },
      {
        text: "WZUUxyWKuCKF",
        number: "46",
        hex: "444439a2b748b51f8180df0efc918d05",
      },
      {
        text: "MBSjxmPgwTtzaoVIiGCmR",
        number: "928424567",
        hex: "0a35fcd143965f43879c153fb807d486",
      },
      {
        text: "juZBFElFZLUIBEpxGWzOFtGJUUr",
        number: "29",
        hex: "1b18f779162da3da2fce9b82e56d3af3",
      },
      {
        text: "eeGhG",
        number: "655797882",
        hex: "635e442ae98ea9637df691ea18632acc",
      },
      {
        text: "JTysxOxnqmcfMpqiRiIQNWIw",
        number: "446882",
        hex: "f19ecba7b3516e65cb2e5bc3e42b7055",
      },
      {
        text: "ajXmMKFudlAmRDDcPwTYHR",
        number: "53775858",
        hex: "96a118f90071a1668693f749cdf4ccf0",
      },
      {
        text: "tCqAEUCUuSbdRZlKL",
        number: "41",
        hex: "72ffd9955995dc2e7c3fc749ca1dbcc4",
      },
      {
        text: "cxLUer",
        number: "621736671",
        hex: "28c07896b70132a3738cb52c3a17b147",
      },
    ],
  },
  {
    file: "test15.csv",
    lines: [],
  },
];

const STORE_MOCK = {
  file: {
    files: FILE_LIST,
    fileNameList: FILE_NAME_LIST,
    fileItem: null,
    isLoading: false,
    isError: false,
  }
};

export { STORE_MOCK, FILE_LIST, FILE_NAME_LIST };
