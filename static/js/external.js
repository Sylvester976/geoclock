// Global base URL for User Service API
const USER_SERVICE_API_BASE = "http://localhost:8001/api/";

const INACTIVITY_TIMEOUT = 15 * 60 * 1000; // 15 minutes
let inactivityTimer;

function startInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        autoLogout();
    }, INACTIVITY_TIMEOUT);
}

function resetInactivityTimer() {
    startInactivityTimer();
}

function logout() {
    const token = sessionStorage.getItem("access_token");

    if (!token) {
        sessionStorage.clear();
        window.location.href = "/loggingOut/";
        return;
    }

    fetch(USER_SERVICE_API_BASE + "logout/", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === 'success') {
            sessionStorage.clear();
            window.location.href = "/loggingOut/";
        } else {
            alert("Logout failed. Clearing local session anyway.");
        }
    })
    .catch(error => {
        console.error("Logout error:", error);
        alert(error)
    });
}




function autoLogout() {
    const token = sessionStorage.getItem("access_token");
    if (!token) {
        window.location.href = "/loggingOut/";
        return;
    }

    fetch(USER_SERVICE_API_BASE + "logout/", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }).finally(() => {
        sessionStorage.clear();
        alert("You have been logged out due to inactivity.");
        window.location.href = "/loggingOut/";
    });
}

(function enforceLogin() {
    const token = sessionStorage.getItem("access_token");
    const currentPage = window.location.pathname;

    // Treat root "/" as login page
    const isPublicPage = ["/", "/loggingOut/"].includes(currentPage);

    if (!token && !isPublicPage) {
        window.location.href = "/loggingOut/";
    }
})();

function goBack() {
  window.history.back();
}


// Attach activity listeners
window.onload = startInactivityTimer;
document.onmousemove = resetInactivityTimer;
document.onkeypress = resetInactivityTimer;
document.onscroll = resetInactivityTimer;
document.onclick = resetInactivityTimer;


//email checker
$('#emailInput').on('input', function () {
        const email = $(this).val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        const feedback = $('#emailFeedback');

        if (!email) feedback.text('').removeClass();
        else if (emailRegex.test(email)) feedback.text('Looks good!').removeClass().addClass('form-text text-success');
        else feedback.text('Please enter a valid email like name@example.com').removeClass().addClass('form-text text-danger');
    });

