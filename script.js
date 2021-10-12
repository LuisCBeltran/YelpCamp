// Close Aknowledgement

function closeAcknowledgement() {
    document.getElementById("acknowledgement").style.display = "none";
}

// Open Menu

function openMenu() {
    document.getElementById("navLinks").style.opacity = "1";
    document.getElementById("navLinks").style.visibility = "visible";
    document.getElementById("navButton").style.display = "none";
    document.getElementById("navButtonOpen").style.display = "flex";
}

// Close menu

function closeMenu() {
    document.getElementById("navLinks").style.opacity = "0";
    document.getElementById("navLinks").style.visibility = "hidden";
    document.getElementById("navButton").style.display = "flex";
    document.getElementById("navButtonOpen").style.display = "none";
}

// Login

function login() {
    document.getElementById("navLinksLogin").style.display = "flex";
    document.getElementById("navLinksLogout").style.display = "none";
}

// Logout

function logout() {
    document.getElementById("navLinksLogin").style.display = "none";
    document.getElementById("navLinksLogout").style.display = "flex";
}