function generateKey() {
    const today = new Date().toLocaleDateString();
    const saved = localStorage.getItem("lastKeyDate");

    if (saved === today) {
        document.getElementById("result").innerText =
            "Você já gerou uma key hoje!";
        return;
    }

    const key = "BACCON-" + Math.random().toString(36).substr(2, 10).toUpperCase();

    localStorage.setItem("lastKeyDate", today);
    localStorage.setItem("generatedKey", key);

    document.getElementById("result").innerText =
        "Sua key: " + key;
}
