export default function TabButton(props)
{
    // instead of props, we can also use destructuring to extract the properties directly
    // e.g., function TabButton({isSelected, onSelect, children})
    return (
        <li>
            <button className = {props.isSelected ? 'active':undefined} onClick={props.onSelect}>{props.children}</button>
        </li>
    );
}