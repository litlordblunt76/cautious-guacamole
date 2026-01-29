// Daily Tracker Script

// Function to get index based on current date
function getDailyIndex(arrayLength) {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const diff = today - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    return dayOfYear % arrayLength;
}

// Function to format date
function formatDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
}

// Function to load daily content
function loadDailyContent() {
    // Set current date
    document.getElementById('currentDate').textContent = formatDate();

    // Get daily Bible verse
    const verseIndex = getDailyIndex(bibleVerses.length);
    const dailyVerse = bibleVerses[verseIndex];
    document.getElementById('verseText').textContent = `"${dailyVerse.text}"`;
    document.getElementById('verseReference').textContent = `— ${dailyVerse.reference}`;

    // Get daily motivational quote
    const quoteIndex = getDailyIndex(motivationalQuotes.length);
    const dailyQuote = motivationalQuotes[quoteIndex];
    document.getElementById('quoteText').textContent = `"${dailyQuote.text}"`;
    document.getElementById('quoteAuthor').textContent = `— ${dailyQuote.author}`;
}

// Function to save tracker state to localStorage
function saveTrackerState() {
    const trackerState = {};
    const checkboxes = document.querySelectorAll('.tracker-item input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        trackerState[checkbox.id] = checkbox.checked;
    });
    
    const today = new Date().toDateString();
    localStorage.setItem('trackerState', JSON.stringify({
        date: today,
        state: trackerState
    }));
}

// Function to load tracker state from localStorage
function loadTrackerState() {
    const saved = localStorage.getItem('trackerState');
    if (saved) {
        const { date, state } = JSON.parse(saved);
        const today = new Date().toDateString();
        
        // Only load state if it's from today
        if (date === today) {
            Object.keys(state).forEach(id => {
                const checkbox = document.getElementById(id);
                if (checkbox) {
                    checkbox.checked = state[id];
                }
            });
        } else {
            // Clear state for a new day
            localStorage.removeItem('trackerState');
        }
    }
}

// Function to initialize tracker
function initializeTracker() {
    const checkboxes = document.querySelectorAll('.tracker-item input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', saveTrackerState);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadDailyContent();
    loadTrackerState();
    initializeTracker();
    
    // Initialize the last check date
    const currentDate = new Date().toDateString();
    localStorage.setItem('lastCheckDate', currentDate);
});

// Check for day change and reload content
setInterval(() => {
    const currentDate = new Date().toDateString();
    const storedDate = localStorage.getItem('lastCheckDate');
    
    if (storedDate && storedDate !== currentDate) {
        localStorage.setItem('lastCheckDate', currentDate);
        location.reload();
    }
}, 60000); // Check every minute
