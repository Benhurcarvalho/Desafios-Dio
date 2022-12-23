
import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import './App.css';
import { Container } from './styles';


function App() {

  const [ currentRepo, setcurrentRepo ] = useState(''); 
  const [ repos, setRepos ] = useState([]);

  const handleSearchRepo = async () => {

    const { data } = await api.get(`repos/${currentRepo}`)

      if(data.id){

        const isExist = repos.find(repo => repo.id === data.id);

        if(!isExist){
          setRepos(prev => [...prev, data]);
          setcurrentRepo();
        }
      }
  }

  const handleRemoveRapo = (id) => {
    //logica
    repos.filter((item) => item.id !== id);
    setRepos(repos.filter((item) => item.id !== id))
    console.log(repos)

  }

  return (
    <Container>
      <i className="devicon-github-original-wordmark"></i> 
      <Input value={currentRepo} onChange={(e) => setcurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRapo={handleRemoveRapo} repo={repo}/>)}
    </Container>
  );
}

export default App;


          