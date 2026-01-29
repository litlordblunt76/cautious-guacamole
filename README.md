# Daily Tracker with Bible Verses & Motivational Quotes

A beautiful, responsive daily tracker web application that displays a new Bible verse and motivational quote each day.

## Features

- **Daily Bible Verse**: Automatically rotates through 31 different Bible verses, changing daily
- **Daily Motivational Quote**: Displays a new inspirational quote each day from a collection of 31 quotes
- **Daily Activity Tracker**: Track your daily spiritual and wellness activities:
  - Morning Prayer
  - Bible Reading
  - Meditation/Reflection
  - Gratitude Journal
  - Exercise
  - Evening Prayer
- **Persistent State**: Tracker checkboxes are saved to localStorage and reset each day
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations

## How It Works

The application uses the day of the year to determine which verse and quote to display. This ensures that:
- The same verse and quote appear on the same day each year
- Content automatically changes when the day changes (checked every minute)
- No server or database is required

## Usage

Simply open `index.html` in your web browser. The application will:
1. Display today's date
2. Show the Bible verse for today
3. Show the motivational quote for today
4. Allow you to track your daily activities
5. Save your progress throughout the day
6. Reset at midnight for a new day

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `data.js` - Database of Bible verses and motivational quotes
- `script.js` - JavaScript functionality for daily rotation and tracking

## Customization

You can easily customize the content by editing `data.js`:
- Add or remove Bible verses in the `bibleVerses` array
- Add or remove quotes in the `motivationalQuotes` array
- Modify tracker items in `index.html`

## Browser Compatibility

Works on modern browsers (minimum versions):
- Chrome 105+ (September 2022)
- Firefox 121+ (December 2023)
- Safari 15.4+ (March 2022)
- Edge 105+ (September 2022)

The application uses the `:has()` CSS selector for checkbox styling, which requires these minimum versions.

No installation or dependencies required - just open and use!
