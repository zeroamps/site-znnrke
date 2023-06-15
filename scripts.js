const cookiesConsent = document.getElementById("cookies-consent");

if (!existCookiesConsentCookie()) {
  cookiesConsent.classList.toggle("hidden");
}

function handleToggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

function handleCookiesConsent() {
  setCookie("CookieConsent", true, 365);
  cookiesConsent.classList.toggle("hidden");
}

function existCookiesConsentCookie() {
  if (getCookie("CookieConsent") === null) {
    return false;
  }
  return true;
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  const expires = "; expires=" + date.toUTCString();

  document.cookie =
    name + "=" + (encodeURIComponent(value) || "") + expires + "; path=/";
}

function getCookie(name) {
  const nameEquals = name + "=";
  const cookieArray = document.cookie.split(";");

  for (cookie of cookieArray) {
    while (cookie.charAt(0) == " ") {
      cookie = cookie.slice(1, cookie.length);
    }

    if (cookie.indexOf(nameEquals) == 0) {
      return decodeURIComponent(cookie.slice(nameEquals.length, cookie.length));
    }
  }

  return null;
}
