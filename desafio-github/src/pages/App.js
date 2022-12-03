import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import ItemREpo from '../components/ItemRepo';
import Button from '../components/Button';
import { api } from '../services/api'

import {Container} from './styles';

function App() {
  
  const [currentRepo, setCurretRepo] = useState('');
  const [respos, setRepos] = useState([]); 

  const handleRemoveRepo =(id)=>{
  
  }

  const handSearchRepo = async() =>{
      const {data} = await api.get(` repos/${currentRepo}`)

      if(data.id){

        const isExit = repos.find(repo => repo.id === data.id)

        if(!isExit){
          setRepos(prev=> [...prev, data])
          setCurretRepo('')
          return
        }
          alert('Repositorio não encontrado')
      
      }
    
  }

 


  return (
    <Container>
        <img src={gitLogo} width={72} height={72} alt="git log"/>
    <Input value={currentRepo} onChange={(e)=>setCurretRepo(e.target.value)}/>
    <Button onClick={handSearchRepo}/>
    {respos.map(repo=> <ItemREpo handleRemoveRepo={handleRemoveRepo} rerpo={repo}/>)}
    </Container>
  );
}

export default App;
