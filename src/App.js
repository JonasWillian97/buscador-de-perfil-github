import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

function App () {

  const [search, setSearch] = useState('');
  const [info, setInfo] = useState(null);

  const handleSearch = () => {
    axios.get(`https://api.github.com/users/${search}`)
    .then((res) => {
      if(res.status === 200) {
      return res
      }
    })
  
    .then((data) => {
      setInfo(data);
      setSearch('');
    })

  }


  useEffect(() => {
  handleSearch()
  },[])
  return(
    <div className="main">
      <h1>Buscador de Perfil do GitHub</h1>
      <div className="search" >
        <input className="input" type='text' placeholder='Buscar um username...' value={search} onChange={e => setSearch(e.target.value)} />
        <button className="button" onClick={handleSearch}>Buscar</button>
      </div>

      {
        info
        ?
        (
      <div>
        <div>
          <div>
          <img className="image" src={info.data.avatar_url} />
            <h2 className="title-Name">{info.data.name}</h2>
          </div>
          <h3 className="bio">{info.data.bio}</h3>
        </div>
      </div>
        )
        :
        null
      }

    </div>
  )
}

export default App;