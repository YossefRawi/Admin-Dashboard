

export default function Header(){
    const styles={
        background: '#0f172a'
    }
    return(
        <>
        <a style={styles} target="_blank" className="gitLink" href="https://github.com/YossefRawi"><i  className="devicon-github-original-wordmark"></i></a>

    <header>
        <img  src="assets/castle.jpg" alt="cat1"/>
        
            <h1 className="centered">Youssef Rawi</h1>
            <p className="centered-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium deserunt nam possimus ipsa commodi, corrupti cum nobis accusamus accusantium, libero unde sequi, ipsam omnis sunt perspiciatis quibusdam assumenda ea velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis quasi, libero saepe dignissimos quas laboriosam sit iure ut perspiciatis numquam repellat placeat neque fugit esse beatae inventore nihil ipsum.</p>
            <h2 className="bottom-left">My Work</h2>
        
    </header>
        </>
    )
}