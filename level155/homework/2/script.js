let cookies = 0;

    function addCookie() {
      cookies++;
      document.getElementById("cookieCount").textContent =
        "Cookies: " + cookies;
    }