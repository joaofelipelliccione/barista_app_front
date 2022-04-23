import React from 'react';
import { useDispatch } from 'react-redux';
import capsulesAC from '../redux/actions/capsulesAC';
import Header from '../components/header/Header';
import SearchMethods from '../components/searchMethods/SearchMethods';
import RenderedCapsules from '../components/renderedCapsules/RenderedCapsules';
import '../styles/Home.css';

function Home() {
  const ALL_CAPSULES_ENDPOINT = 'https://barista-app-back.herokuapp.com/capsules';

  const [isFetching, setIsFetching] = React.useState(false);
  const [capsulesToRender, setCapsulesToRender] = React.useState([]);
  const [searchMethod, setSearchMethod] = React.useState('name');
  const [searchedCapsule, setSearchedCapsule] = React.useState('');

  const dispatch = useDispatch();

  React.useEffect(() => {
    setIsFetching(true);
    localStorage.removeItem('allCapsules');

    fetch(ALL_CAPSULES_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setCapsulesToRender(data);
        dispatch(capsulesAC(data));
        localStorage.setItem('allCapsules', JSON.stringify(data));
      });

    setIsFetching(false);
  }, []);

  const onClickSearchBtn = async () => {
    const SEARCH_ONE_CAPSULE_ENDPOINT = `https://barista-app-back.herokuapp.com/capsules/search?capsuleName=${searchedCapsule}`;
    const res = await fetch(SEARCH_ONE_CAPSULE_ENDPOINT);
    const data = await res.json();

    setCapsulesToRender(data);
  };

  return (
    <div className="homePage">
      <Header
        isFetching={ isFetching }
      />
      <main className="homePageMain">
        <h1>Ache sua capsula Nespresso...</h1>
        <SearchMethods
          searchMethod={ searchMethod }
          setSearchMethod={ setSearchMethod }
          searchedCapsule={ searchedCapsule }
          setSearchedCapsule={ setSearchedCapsule }
          onClickSearchBtn={ onClickSearchBtn }
          setCapsulesToRender={ setCapsulesToRender }
        />
      </main>
      <RenderedCapsules
        capsulesToRender={ capsulesToRender }
      />
    </div>
  );
}

export default Home;
