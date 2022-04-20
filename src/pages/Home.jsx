import React from 'react';
import { useDispatch } from 'react-redux';
import capsulesAC from '../redux/actions/capsulesAC';
import Header from '../components/header/Header';
import '../styles/Home.css';

function Home() {
  const ALL_CAPSULES_ENDPOINT = 'https://barista-app-back.herokuapp.com/capsules';

  const [isFetching, setIsFetching] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setIsFetching(true);
    localStorage.removeItem('allCapsules');

    fetch(ALL_CAPSULES_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        dispatch(capsulesAC(data));
        localStorage.setItem('allCapsules', JSON.stringify(data));
      });

    setIsFetching(false);
  }, []);

  return (
    <div className="homePage">
      {console.log(isFetching)}
      <Header />
    </div>
  );
}

export default Home;
