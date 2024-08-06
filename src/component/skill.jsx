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
            <div>
                <ol>
                    <li>W3school</li>
                    <li>Official documentation </li>
                    <li>YouTube code with hary, web dev simplified, bro code and etc.</li>
                    <li>Class notes by Devendra sir.</li>
                    <li>Online resources and website like Odin Project and github, stakeOverflow</li>
                </ol>
            </div>
        </div>
    )
}
