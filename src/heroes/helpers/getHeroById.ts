import { Hero, heroes } from ".."

export const getHeroById = (id: string | undefined): Hero | undefined => {
  return heroes.find(hero => hero.id === id);
}

