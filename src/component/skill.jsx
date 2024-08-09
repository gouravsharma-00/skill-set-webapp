export default function Skill({ domain, bool }) {
    const handleClick = () => {
        document.getElementById('model').showModal();
    }
    const handleClose = () => {
        document.getElementById('model').close();
    }
    return(
        bool && <div id="button" className="flex">
            {
                domain.skill.map((skill) => {
                    return(
                        <button key={crypto.randomUUID()} className="buttonskill">{skill}</button>
                    )
                })
            }
           <div>
           <p id="arrow" onClick={handleClick}>show resources&#8594;</p>
           </div>
           <dialog id='model'>
            <ol>
                <li><a href='https://www.w3schools.com/'>W3School</a></li>
                <li><a href='https://www.udemy.com/'>Udemy</a></li>
                <li><a href='https://www.coursera.org/'>coursera</a></li>
                <li><a href='https://www.youtube.com/'>Youtube</a></li>
                <li><a href='https://archive.org/details/texts'>Books</a></li>
                <li><a href='#'>Devindra sir notes</a></li>
            </ol>
            <span>Note: Resources are not limited to these you may find other useful resources on the <a href='https://www.google.co.in/'>internet</a></span>
            <button class="button" id='submit' data-modal-close onClick={handleClose}>Close</button>
        </dialog>
        </div>
    )
}
