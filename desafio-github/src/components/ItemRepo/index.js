import React from 'react'
import { ItemContainer } from './styles';


function ItemREpo({repo, handleRemoveRepo}) {

  const handleRemoveRepo=()=>{
    handleRemoveRepo(repo.id)
  }
  return (
    <ItemContainer onClick={handleRemoveRepo}>
       <h3>{repo.name}</h3>
       <p>{repo.full_name}</p>
       <a href={repo.html_url} rel="noreferrer"target="_blank">Ver repositorio</a>
       <a href='#' className="noreferrer">Remove</a>
       <hr />
    </ItemContainer>
  )
  
}

export default ItemREpo;
