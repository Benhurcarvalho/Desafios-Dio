import React from 'react';
import { ItemRepoContainer } from './styles';

function ItemRepo ({repo, handleRemoveRapo}) {

  const handleRemove = () => {
    handleRemoveRapo(repo.id)
  }
  
    return (
      <ItemRepoContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <br/>
        <a href={repo.html_url} className='ver'>Ver repositório</a>
        <br/>
        <p>Remover</p>
        <hr/>
      </ItemRepoContainer>
    )
  }

export default ItemRepo;