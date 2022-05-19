import React from 'react'
import { Link } from 'react-router-dom'
import './individualArticle.css'

const Article = ({title, link, genre, level}) => {
        return (
                <div className="article">
                        <a href={link} className="articleTitle" target="_blank">{title}</a>
                        <p className="articleGenre">{genre}</p>
                </div>
        )
}

export default Article