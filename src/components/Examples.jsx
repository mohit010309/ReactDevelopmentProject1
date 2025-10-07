import TabButton from '../components/TabButton.jsx';
import Section from '../components/Section.jsx';
import { EXAMPLES } from '../data.js';
import {useState} from 'react';

export default function Examples()
{
    const [selectedTopic,setSelectedTopic] = useState();

    var tabContent = 'Please select a topic!';
    if(selectedTopic)
    {
        tabContent = (
            <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
            </div>
        )
    }
    return (<Section title = "Examples" id="examples">
          <menu>
            <TabButton isSelected = {selectedTopic === 'components'} onSelect={()=>(setSelectedTopic('components'))}>Components</TabButton>
            <TabButton isSelected = {selectedTopic === 'jsx'} onSelect={()=>(setSelectedTopic('jsx'))}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic === 'props'} onSelect={()=>(setSelectedTopic('props'))}>Props</TabButton>
            <TabButton isSelected = {selectedTopic === 'state'} onSelect={()=>(setSelectedTopic('state'))}>State</TabButton>
          </menu>

          {tabContent}
    </Section>);
}