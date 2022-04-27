import React from 'react';
import { useDispatch } from 'react-redux';
import capsulesAC from '../redux/actions/capsulesAC';
import Header from '../components/header/Header';
import SearchMethods from '../components/searchMethods/SearchMethods';
import RenderedCapsules from '../components/RenderedCapsules';
import Footer from '../components/Footer';
import '../styles/Home.css';

function Home() {
  const ALL_CAPSULES_ENDPOINT = 'https://barista-app-back.herokuapp.com/capsules';

  const [isFetching, setIsFetching] = React.useState(false);
  const [capsulesToRender, setCapsulesToRender] = React.useState([]);
  const [searchMethod, setSearchMethod] = React.useState('name');

  const dispatch = useDispatch();

  React.useEffect(() => {
    localStorage.removeItem('allCapsules');
    setIsFetching(true);

    fetch(ALL_CAPSULES_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setCapsulesToRender(data);
        dispatch(capsulesAC(data));
        localStorage.setItem('allCapsules', JSON.stringify(data));
        console.log(data);
        setIsFetching(false);
      });
  }, []);

  return (
    <div className="homePage">
      <Header />
      <main className="homePageMain">
        <h1>Ache sua cápsula Nespresso®...</h1>
        <SearchMethods
          searchMethod={ searchMethod }
          setSearchMethod={ setSearchMethod }
          setIsFetching={ setIsFetching }
          setCapsulesToRender={ setCapsulesToRender }
        />
      </main>
      <RenderedCapsules
        capsulesToRender={ capsulesToRender }
        isFetching={ isFetching }
      />
      <Footer typeOfFooter="regularFooter" />
    </div>
  );
}

export default Home;
