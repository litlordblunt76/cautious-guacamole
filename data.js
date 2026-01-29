// Bible Verses Database
const bibleVerses = [
    {
        text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
        reference: "Jeremiah 29:11"
    },
    {
        text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        reference: "Proverbs 3:5-6"
    },
    {
        text: "I can do all things through Christ who strengthens me.",
        reference: "Philippians 4:13"
    },
    {
        text: "The LORD is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.",
        reference: "Psalm 23:1-3"
    },
    {
        text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
        reference: "Isaiah 40:31"
    },
    {
        text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
        reference: "Romans 8:28"
    },
    {
        text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
        reference: "Joshua 1:9"
    },
    {
        text: "Cast all your anxiety on him because he cares for you.",
        reference: "1 Peter 5:7"
    },
    {
        text: "The LORD himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.",
        reference: "Deuteronomy 31:8"
    },
    {
        text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
        reference: "John 14:27"
    },
    {
        text: "This is the day that the LORD has made; let us rejoice and be glad in it.",
        reference: "Psalm 118:24"
    },
    {
        text: "Come to me, all you who are weary and burdened, and I will give you rest.",
        reference: "Matthew 11:28"
    },
    {
        text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
        reference: "Philippians 4:6"
    },
    {
        text: "The LORD is close to the brokenhearted and saves those who are crushed in spirit.",
        reference: "Psalm 34:18"
    },
    {
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        reference: "John 3:16"
    },
    {
        text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
        reference: "Galatians 6:9"
    },
    {
        text: "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear.",
        reference: "Matthew 6:25"
    },
    {
        text: "The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
        reference: "Lamentations 3:22-23"
    },
    {
        text: "In the beginning God created the heavens and the earth.",
        reference: "Genesis 1:1"
    },
    {
        text: "The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you.",
        reference: "Numbers 6:24-25"
    },
    {
        text: "Delight yourself in the LORD, and he will give you the desires of your heart.",
        reference: "Psalm 37:4"
    },
    {
        text: "If God is for us, who can be against us?",
        reference: "Romans 8:31"
    },
    {
        text: "Be still, and know that I am God.",
        reference: "Psalm 46:10"
    },
    {
        text: "Give thanks to the LORD, for he is good; his love endures forever.",
        reference: "Psalm 107:1"
    },
    {
        text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
        reference: "Romans 12:2"
    },
    {
        text: "The name of the LORD is a fortified tower; the righteous run to it and are safe.",
        reference: "Proverbs 18:10"
    },
    {
        text: "Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.",
        reference: "Mark 12:30"
    },
    {
        text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
        reference: "Matthew 6:33"
    },
    {
        text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you.",
        reference: "Isaiah 41:10"
    },
    {
        text: "Your word is a lamp for my feet, a light on my path.",
        reference: "Psalm 119:105"
    },
    {
        text: "The fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.",
        reference: "Galatians 5:22-23"
    }
];

// Motivational Quotes Database
const motivationalQuotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
        author: "Roy T. Bennett"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "Your limitation—it's only your imagination.",
        author: "Unknown"
    },
    {
        text: "Great things never come from comfort zones.",
        author: "Unknown"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Unknown"
    },
    {
        text: "Dream bigger. Do bigger.",
        author: "Unknown"
    },
    {
        text: "Success doesn't just find you. You have to go out and get it.",
        author: "Unknown"
    },
    {
        text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennett"
    },
    {
        text: "Work hard in silence, let your success be the noise.",
        author: "Frank Ocean"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
        author: "Henry David Thoreau"
    },
    {
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Hardships often prepare ordinary people for an extraordinary destiny.",
        author: "C.S. Lewis"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },
    {
        text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett"
    },
    {
        text: "Don't limit your challenges. Challenge your limits.",
        author: "Unknown"
    },
    {
        text: "Wake up with determination. Go to bed with satisfaction.",
        author: "Unknown"
    },
    {
        text: "Do something today that your future self will thank you for.",
        author: "Sean Patrick Flanery"
    },
    {
        text: "Little things make big days.",
        author: "Unknown"
    },
    {
        text: "It's going to be hard, but hard does not mean impossible.",
        author: "Unknown"
    },
    {
        text: "Don't wait for opportunity. Create it.",
        author: "Unknown"
    },
    {
        text: "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
        author: "Unknown"
    },
    {
        text: "The key to success is to focus on goals, not obstacles.",
        author: "Unknown"
    }
];
