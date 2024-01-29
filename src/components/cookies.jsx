function getCSRFToken(cookies) {
    if (!cookies) {
      console.error('Cookies are undefined or null.');
      return null;
    }
  
    const cookieArray = cookies.split(';').map(cookie => cookie.trim());
    const csrfCookie = cookieArray.find(cookie => cookie.startsWith('CSRF-TOKEN='));
  
    if (!csrfCookie) {
      console.error('CSRF token not found in cookies.');
      return null;
    }
  
    return csrfCookie.split('=')[1];
  }
  
