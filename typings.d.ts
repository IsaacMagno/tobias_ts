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
