import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HashRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const processHash = () => {
      const hash = window.location.hash;
      
      if (hash && hash.startsWith('#/')) {
        const path = hash.substring(1);
        
        const newUrl = window.location.pathname + window.location.search;
        window.history.replaceState(null, '', newUrl);
        
        navigate(path, { replace: false });
        
        return true;
      }
      return false;
    };

    processHash();

    const handleHashChange = () => {
      processHash();
    };

    window.addEventListener('hashchange', handleHashChange);

    window.addEventListener('popstate', processHash);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', processHash);
    };
  }, [navigate]);

  return null;
};

export default HashRedirect;