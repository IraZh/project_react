import React from 'react';
import Card from './components/cards';

const cards = [{
  title: "Translate this word into Russian",
  word: "Adventure",  
},{
  title: "Translation",
  word: "Приключение",
}
]

class App extends React.Component {
  render() {
  return (
    <div className="container_card">
      {
        cards.map ((card) =>
        <Card title={card.title} word={card.word}></Card>
        )
      }
    </div>
  );
  }
}

export default App;