import { Link } from "react-router-dom";
import { Hero } from ".."

interface CharacterProps{
    alter_ego:string;
    characters: string;
}
const CharactersByHero =({alter_ego, characters}:CharacterProps)=>{
    if(alter_ego===characters) return(<></>);
    
    return <p>{characters}</p>
}
 
export const HeroCard = (hero: Hero) => {
    const heroImageUrl:string = `/src/assets/heroes/${hero.id}.jpg`
  return (
    <div className="col">
        <div className="card h-100 d-inline-block">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img className="card-img m-1" src={heroImageUrl} alt={hero.superhero} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{hero.superhero}</h5>
                        <p className="cadt-text">{hero.alter_ego}</p>
                        <CharactersByHero characters={hero.characters} alter_ego={hero.alter_ego}/>
                        <p className="card-text">
                            <small className="text-muted">
                                {hero.first_appearance}
                            </small>
                        </p>
                        <Link to ={`/hero/${hero.id}`}>
                            More...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
