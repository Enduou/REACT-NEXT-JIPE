interface ListaItens{
    name: string;
    isListed: boolean;
}

function Item({ name, isListed}: ListaItens) {
    return <li className="item">{name}</li>;
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Nova Lista</h1>
        <ul>
          <Item 
            isListed={true} 
            name="Item 1" 
          />
          <Item 
            isListed={true} 
            name="Item 2" 
          />
          <Item 
            isListed={false} 
            name="Item 3" 
          />
        </ul>
      </section>
    );
  }