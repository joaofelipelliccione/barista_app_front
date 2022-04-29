import React from 'react';
import { useDispatch } from 'react-redux';
import { setVertuoCapsulesAC } from '../redux/actions/capsulesAC';
import Header from '../components/header/Header';
import SearchMethods from '../components/searchMethods/SearchMethods';
import RenderedCapsules from '../components/RenderedCapsules';
import Footer from '../components/Footer';
import '../styles/Vertuo.css';

function Vertuo() {
  const VERTUO_CAPSULES_ENDPOINT = 'https://barista-app-back.herokuapp.com/capsules/Vertuo';

  const [isFetching, setIsFetching] = React.useState(false);
  const [capsulesArray, setCapsulesArray] = React.useState([]);
  const [capsulesToRender, setCapsulesToRender] = React.useState([]);
  const [searchMethod, setSearchMethod] = React.useState('name');

  const dispatch = useDispatch();

  React.useEffect(() => {
    localStorage.removeItem('vertuoCapsules');
    setIsFetching(true);

    fetch(VERTUO_CAPSULES_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setCapsulesArray(data);
        setCapsulesToRender(data);
        dispatch(setVertuoCapsulesAC(data));
        localStorage.setItem('vertuoCapsules', JSON.stringify(data));
        setIsFetching(false);
      });
  }, []);

  return (
    <div className="vertuoPage">
      <Header />
      <main className="vertuoPageMain">
        <h1>
          Pesquise dentre as
          {' '}
          <em>Vertuo®</em>
          ...
        </h1>
        <SearchMethods
          capsulesArray={ capsulesArray }
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

export default Vertuo;
