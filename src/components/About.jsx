import { GlowCapture, Glow } from "@codaworks/react-glow"

export default function About(){
    return(
        <>
             <GlowCapture>
                <Glow color="#227fd6" >
                    <h1 className="flex-center bottom-margin-100px about-title">About Me</h1>
                    <article id="about" className="flex-center flex-col glowable-text">
                        <p>
                            I am a Front-end Developer with experience building web 
                            <br />applications. My hobbies includes programming
                            <br />competitive chess, and math.
                        </p>
                        <br />
                        <p>When I'm not programming, I'm probably watching the
                            <br /> latest chess tournament or studying chess theories for my 
                            <br /> next chess tournament.
                        </p>
                    </article>
                </Glow>
            </GlowCapture>
        </>
    )
}