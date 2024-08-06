export default function Skill({ domain, bool }: any) {

    return(
        bool && <div id="button" className="flex">
            {
                domain.skill.map((skill: any) => {
                    return(
                        <button key={crypto.randomUUID()}>{skill}</button>
                    )
                })
            }
        </div>
    )
}