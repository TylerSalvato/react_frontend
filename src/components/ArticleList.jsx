
import React, { useState, useEffect } from 'react';
import api from '../services/api';

function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        api.get('/articles').then((response) => {
            setArticles(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Articles</h2>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        {article.title} - {article.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;
