import React from 'react';
import { useDispatch } from 'react-redux';
import { setOriginalCapsulesAC } from '../redux/actions/capsulesAC';
import Header from '../components/header/Header';
import SearchMethods from '../components/searchMethods/SearchMethods';
import RenderedCapsules from '../components/RenderedCapsules';
import Footer from '../components/Footer';
import '../styles/Original.css';

function Original() {
  const ORIGINAL_CAPSULES_ENDPOINT = 'https://barista-app-back.herokuapp.com/capsules/Original';

  const [isFetching, setIsFetching] = React.useState(false);
  const [capsulesArray, setCapsulesArray] = React.useState([]);
  const [capsulesToRender, setCapsulesToRender] = React.useState([]);
  const [searchMethod, setSearchMethod] = React.useState('name');

  const dispatch = useDispatch();

  React.useEffect(() => {
    localStorage.removeItem('originalCapsules');
    setIsFetching(true);

    fetch(ORIGINAL_CAPSULES_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setCapsulesArray(data);
        setCapsulesToRender(data);
        dispatch(setOriginalCapsulesAC(data));
        localStorage.setItem('originalCapsules', JSON.stringify(data));
        setIsFetching(false);
      });
  }, []);

  return (
    <div className="originalPage">
      <Header />
      <main className="originalPageMain">
        <h1>
          Pesquise dentre as
          {' '}
          <em>Original®</em>
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

export default Original;
