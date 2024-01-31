/*
import React, { useState } from 'react';
import api from '../services/api';

function ArticleForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/articles', { title, content }).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <div>
            <h2>Add Article</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <br />
                <button type="submit">Add Article</button>
            </form>
        </div>
    );
};

export default ArticleForm;
*/