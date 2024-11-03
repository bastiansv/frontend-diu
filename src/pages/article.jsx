import React from 'react';
import { useParams } from 'react-router-dom';
import cardboardRecyclingImage from '../assets/cardboard_recycling.png';

const ArticleList = [
    {

    },
    {

    },
    {

    },
    {
        title: 'Cómo reciclar cartón?',
        src: cardboardRecyclingImage,
        content: 'CÓMO RECICLAR: \n1)Remueve Elementos como clips, corchetes, cintas adhesivas y anillados. Aplana las Cajas\n NO SE RECICLAN:\n1) Servilletas, papel higiénico y cartón u hojas de papel con restos de comida o material orgánico\n¿PORQUE RECICLAR CARTÓN?\n1)Permite conseguir hasta 900 kilos de material reciclado\n2)Facilitar ahorrar hasta 140 litros de petróleo\n3)Permite ahorrar hasta 50,000 litros de agua'
    }
];

export const Article = () => {
    const params = useParams();
    const articleId = params.id;
    const article = ArticleList[parseInt(articleId)];

    if (!article) {
        return <div>Artículo no encontrado: {articleId}</div>;
    }

    const formattedContent = wrapUppercaseWithBold(article.content);

    return (
        <div style={{ padding: '15px' }}>
            <div>
                <h2 style={{margin:'5px 0'}}>{article.title}</h2>
                <p style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: formattedContent }} />
            </div>
            <img style={{borderRadius: '8px', width: '100%'}}src={article.src} alt={article.title} />
        </div>
    );
};

const wrapUppercaseWithBold = (text) => {
    return text.replace(/\b([A-ZÁÉÍÓÚÑ]+)\b/g, '<span class="bold-uppercase">$1</span>');
};