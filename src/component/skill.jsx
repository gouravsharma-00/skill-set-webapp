export default function Skill({ domain, bool }) {

    return(
        bool && <div id="button" className="flex">
            {
                domain.skill.map((skill) => {
                    return(
                        <button key={crypto.randomUUID()}>{skill}</button>
                    )
                })
            }
        </div>
    )
}