import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const BackBTN = () => {
  const location = useLocation();
  useEffect(() => {
    // location.state
  }, [location]);

  return (
    <NavLink to={location.state ?? '/'} type="button">
      back
    </NavLink>
  );
};
