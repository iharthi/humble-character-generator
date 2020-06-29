export type score = [number, number, number, number];

export type character = [score, score, score, score, score, score];

export type characterRoll = {
  rolledCharacter: character;
  rollOrdinalNumber: number;
};

export type statNumber = {
  result: number;
  sortOrder: number;
};

export type statDescription = {
  total: number;
  usedNumbers: Array<statNumber>;
  unusedNumbers: Array<statNumber>;
  modifier: number;
  modifierString: string;
  sortOrder: number;
};

export type rollDescription = {
  stats: Array<statDescription>;
  rollOrdinalNumber: number;
  rolledCharacter: character;
};
