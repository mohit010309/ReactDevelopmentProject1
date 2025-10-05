import CoreConcept from '../components/CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js'; 

export default function CoreConcepts()
{
    return (
        <section id="core-concepts">
            <h2>CoreConcepts</h2>
            <ul>
            {CORE_CONCEPTS.map((concept) => (
                <CoreConcept key = {concept.title} id={concept.title} {...concept}/>
            ))}
            </ul>
        </section>
    );
}