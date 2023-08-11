import { useMemo } from "react";
import { Hero, getHeroByPublisher } from "..";
import { HeroCard } from "./HeroCard";

interface HeroListProps{
    publisher:string;
}

export const HeroList = ({publisher}:HeroListProps) => {
    const heroes: Hero[] = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
{
    heroes.map(hero => (
        <HeroCard key={hero.id} {...hero}/>
    ))
}
    </div>
  )
}
