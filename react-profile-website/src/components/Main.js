import Data from './Data'
import Card from './Card'

export default function Main(){

    const cards = Data.map(card => {
        return (
            <Card
                key={card.id}
                card={card}
                name={card.name}
                desc={card.desc}
                cardClass={card.class}
                image={card.image}
            />
        )
    })        

    return(
        <main>
            {cards}
        </main>
    )
}