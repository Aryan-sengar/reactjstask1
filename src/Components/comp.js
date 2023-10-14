import React, { useState } from 'react';

function WordCounter() {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const handleInputChange = (event) => {
        setText(event.target.value);
        setWordCount(event.target.value.split(' ').filter(word => word !== '').length);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
        }}>
            <h1>Responsive Paragraph Word <br />Counter</h1>
            
            <textarea value={text} onChange={handleInputChange} cols="60" rows="10"></textarea>
            <p>Word Count: {wordCount}</p>
        </div>
        
    );
}

export default WordCounter;
