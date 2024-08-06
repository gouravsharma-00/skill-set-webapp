import data from '../data/domain.json';
export default function Skill( { domain }) {
    return (
        <div>
            {
                let find = data.find(item => item.name == domain);
            }
        </div>
    )
}