/*
import React, { useState } from 'react';
import api from '../services/api';

function ArticleUpdate ({ article }) {
    const [title, setTitle] = useState(article.title);
    const [content, setContent] = useState(article.content);

    const handleUpdate = () => {
        api.put(`/articles/${article.id}`, { title, content }).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <div>
            <h2>Edit Article</h2>
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
            <button onClick={handleUpdate}>Update Article</button>
        </div>
    );
};

export default ArticleUpdate;
*/