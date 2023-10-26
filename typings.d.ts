export interface Achievement {
  name: string;
  description: string;
  rewards: {
    xp: number;
    tobiasCoins: number;
    achievementPoints: number;
  };
  date: string;
  icon: string;
}

export interface AchievementCategory {
  name: string;
  icon: string;
}

export interface Item {
  name: string;
  category: string;
  price: float;
  description: string;
  image: string;
  characteristics: {
    dexterity: integer;
    strength: integer;
    intelligence: integer;
    constitution: integer;
    wisdom: integer;
    ap: integer;
    pm: integer;
    range: integer;
  };
  requirements: {
    dexterity: integer;
    strength: integer;
    intelligence: integer;
    constitution: integer;
    wisdom: integer;
    ap: integer;
    pm: integer;
    range: integer;
    kmRun: integer;
    jumpRope: integer;
    kmBike: integer;
    upperLimb: integer;
    absLimb: integer;
    lowerLimb: integer;
    meals: integer;
    drinks: integer;
    sleep: integer;
    study: integer;
    meditation: integer;
    reading: integer;
  };
}
