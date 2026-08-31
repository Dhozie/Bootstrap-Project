// SCROLL PROGRESS

const progressBar =
    document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    if (documentHeight <= 0) return;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width =
        `${scrollPercentage}%`;

});

// THEME TOGGLE

const nav = document.getElementById("mainNav");
const themeToggle = document.getElementById("themeToggle");

function applyTheme(mode) {

    const isDark = mode === "dark";

    document.body.classList.toggle("dark-mode", isDark);

    localStorage.setItem("themeMode", mode);

    if (themeToggle) {

        themeToggle.checked = isDark;

        themeToggle.setAttribute(
            "aria-label",
            isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
        );

    }
}

function updateNavState() {

    if (!nav) return;

    nav.classList.toggle(
        "scroll",
        window.scrollY > 90
    );

}

const savedTheme =
    localStorage.getItem("themeMode") || "light";

applyTheme(savedTheme);
updateNavState();

window.addEventListener(
    "scroll",
    updateNavState
);

if (themeToggle) {

    themeToggle.addEventListener(
        "change",
        () => {

            const nextMode =
                themeToggle.checked
                    ? "dark"
                    : "light";

            applyTheme(nextMode);

        }
    );

}


// BOOK PAGE

document.addEventListener("DOMContentLoaded", () => {

    // Get book from URL

    const params =
        new URLSearchParams(window.location.search);

    const bookName =
        params.get("book");


    // Book data

    const books = {

        "dune": {

            title: "Dune",
            author: "Frank Herbert",

            genre: [
                "Sci-Fi",
                "Adventure"
            ],

            cover: "My Images/Dune.jfif",

            rating: "4.8",
            reviewCount: 1240,
            price: "₦48,500",

            publisher: "Chilton Company",
            published: "1965",
            pages: "688",
            language: "English",
            isbn: "978-0441013593",

            description:
                "A young heir is drawn into a dangerous struggle for power, survival, and control of a mysterious desert world.",

         summary: [
    {
        heading: "A Dangerous World",
        text: `Dune follows Paul Atreides, the young heir of House Atreides,
        whose family is given control of the dangerous desert planet Arrakis.
        Arrakis is the only known source of spice, a valuable substance that
        plays a major role in the political and economic power of the galaxy.`
    },

    {
        heading: "Betrayal and Survival",
        text: `When Paul's family is betrayed, he is forced to survive in the harsh
        desert alongside the Fremen, the people who have made Arrakis their home.
        As Paul discovers more about his abilities and his destiny, he becomes
        caught in a much larger struggle involving politics, religion, power,
        and survival.`
    },

    {
        heading: "Power and Destiny",
        text: `The story explores leadership, environmental survival, ambition,
        loyalty, and the consequences of controlling powerful resources.`
    }
],
       reasons: [

    {
        icon: "fa-users",
        heading: "Engaging Characters",
        text: "Follow unforgettable characters through an extraordinary world of politics, conflict and survival."
    },

    {
        icon: "fa-globe",
        heading: "Epic World-Building",
        text: "Explore the fascinating world of Arrakis and its unique cultures, environments and history."
    },

    {
        icon: "fa-bolt",
        heading: "Fast-Paced Adventure",
        text: "A gripping story filled with danger, betrayal, adventure and unexpected turns."
    },

    {
        icon: "fa-rocket",
        heading: "Great for Sci-Fi Lovers",
        text: "Perfect for readers who enjoy imaginative worlds, epic adventures and futuristic stories."
    }

            ],
       
       readerReviews: [

    {
        stars: "★★★★★",
        text: "One of the most immersive books I have ever read.",
        name: "Husky"
    },

    {
        stars: "★★★★☆",
        text: "A powerful story filled with politics, adventure and mystery.",
        name: "Emmy"
    },

    {
        stars: "★★★★★",
        text: "The world-building is incredible. Arrakis feels like a real place.",
        name: "Nenye"
    }

],

        },


        "1984": {

            title: "1984",
            author: "George Orwell",

            genre: [
                "Dystopian",
                "Fiction"
            ],

            cover: "My Images/1984.png",

            rating: "4.7",
            reviewCount: 2100,
            price: "₦57,500",

            publisher: "Secker & Warburg",
            published: "1949",
            pages: "328",
            language: "English",
            isbn: "978-0451524935",

            description:
                "A chilling story about surveillance, government control, propaganda, and the fight for individual freedom.",

           summary: [
    {
        heading: "A World Under Surveillance",
        text: `1984 follows Winston Smith, a man living under the control of
        an authoritarian government known as the Party. Every aspect of life
        is monitored, including people's thoughts, relationships, and private
        conversations.`
    },

    {
        heading: "The Fight for Freedom",
        text: `Winston secretly begins questioning the Party and its control over
        society. His desire for truth and freedom leads him into a dangerous
        relationship and eventually puts him directly against the system.`
    },

    {
        heading: "Truth and Control",
        text: `The novel explores surveillance, censorship, propaganda, manipulation,
        freedom, and the power of truth.`
    }
],
          reasons: [

    {
        icon: "fa-users",
        heading: "Memorable Characters",
        text: "Follow Winston as he struggles against a world built on fear, control and constant surveillance."
    },

    {
        icon: "fa-eye",
        heading: "A World Under Watch",
        text: "Experience a chilling society where privacy is almost impossible and every action can be monitored."
    },

    {
        icon: "fa-brain",
        heading: "Thought-Provoking Themes",
        text: "Explore powerful ideas about freedom, truth, propaganda and the manipulation of information."
    },

    {
        icon: "fa-pen-nib",
        heading: "Powerful Writing",
        text: "Orwell's writing creates a dark and immersive world that remains unsettling and memorable."
    }

            ],
          
          readerReviews: [

    {
        stars: "★★★★★",
        text: "A disturbing but incredibly powerful story about freedom and control.",
        name: "Dymphna"
    },

    {
        stars: "★★★★☆",
        text: "The themes of surveillance and propaganda make this book unforgettable.",
        name: "Bellona"
    },

    {
        stars: "★★★★★",
        text: "Dark, thought-provoking and surprisingly relevant.",
        name: "Imelda"
    }

],

        },


        "atomic-habits": {

            title: "Atomic Habits",
            author: "James Clear",

            genre: [
                "Self Development",
                "Productivity"
            ],

            cover: "My Images/Atomic Habits.png",

            rating: "4.9",
            reviewCount: 3450,
            price: "₦68,000",

            publisher: "Avery",
            published: "2018",
            pages: "320",
            language: "English",
            isbn: "978-0735211292",

            description:
                "A practical guide to building good habits, breaking bad ones, and making small changes that create remarkable results.",

            summary: [
    {
        heading: "Small Changes, Big Results",
        text: `Atomic Habits explains how small and consistent changes can create
        significant improvements over time. James Clear explores the science
        behind habit formation and explains why tiny changes can have a major
        impact when repeated consistently.`
    },

    {
        heading: "Building Better Habits",
        text: `The book introduces practical strategies for creating good habits,
        eliminating bad habits, and designing an environment that makes positive
        behavior easier.`
    },

    {
        heading: "Systems Over Goals",
        text: `Rather than focusing only on big goals, the book encourages readers
        to focus on the systems and daily actions that gradually lead to
        meaningful results.`
    }
],
  reasons: [

    {
        icon: "fa-chart-line",
        heading: "Practical Advice",
        text: "Learn simple strategies that can help you build better habits and improve your daily life."
    },

    {
        icon: "fa-bullseye",
        heading: "Clear Strategies",
        text: "Discover practical methods for creating good habits and breaking unwanted ones."
    },

    {
        icon: "fa-lightbulb",
        heading: "Easy to Understand",
        text: "James Clear explains the psychology of habits using simple ideas and relatable examples."
    },

    {
        icon: "fa-arrow-up-right-dots",
        heading: "Great for Personal Growth",
        text: "Perfect for readers who want to improve their routines, productivity and long-term results."
    }

            ],
  
  readerReviews: [

    {
        stars: "★★★★★",
        text: "A simple and practical book that completely changed how I approach my habits.",
        name: "Ralph"
    },

    {
        stars: "★★★★★",
        text: "The ideas are easy to understand and surprisingly easy to apply.",
        name: "Burger"
    },

    {
        stars: "★★★★☆",
        text: "A great book for anyone trying to become more productive and consistent.",
        name: "Joyce"
    }

],
        },

        "akata-witch": {

    title: "Akata Witch",
    author: "Nnedi Okorafor",

    genre: [
        "Fantasy",
        "Young Adult"
    ],

    cover: "My Images/The Witch.jfif",

    rating: "4.6",
    reviewCount: 2450,
    price: "₦31000",

    publisher: "Viking Press",
    published: "2011",
    pages: "349",
    language: "English",
    isbn: "978-0670062274",

    description:
        "A young girl discovers magical abilities and enters a hidden world of mystery, danger, friendship and powerful secrets.",

    summary: [
        {
            heading: "A New Discovery",
            text: `Sunny Nwazue is a twelve-year-old Nigerian-American girl living in 
            Nigeria who discovers that she possesses magical abilities. Her unusual 
            powers introduce her to a hidden world that exists alongside ordinary life.`
        },

        {
            heading: "The Leopard People",
            text: `Sunny joins a group of young Leopard People and begins learning about 
            magic, ancient knowledge and the responsibilities that come with her abilities. 
            Together, they face challenges that test their courage and friendship.`
        },

        {
            heading: "Magic and Danger",
            text: `As Sunny learns more about her powers, she becomes involved in a dangerous 
            mystery involving a powerful threat. The story explores identity, friendship, 
            courage, culture and discovering one's place in the world.`
        }
    ],

    reasons: [

        {
            icon: "fa-wand-magic-sparkles",
            heading: "Magical World",
            text: "Step into a fascinating world of African-inspired magic, mystery and supernatural adventure."
        },

        {
            icon: "fa-users",
            heading: "Strong Characters",
            text: "Follow Sunny and her friends as they learn, grow and face extraordinary challenges together."
        },

        {
            icon: "fa-bolt",
            heading: "Exciting Adventure",
            text: "A gripping story filled with magic, danger, mystery and unexpected discoveries."
        },

        {
            icon: "fa-star",
            heading: "Unique Fantasy",
            text: "A refreshing fantasy story that blends African culture, mythology and imaginative storytelling."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A beautifully imaginative story with a fascinating magical world.",
            name: "Bellona"
        },

        {
            stars: "★★★★☆",
            text: "The African-inspired fantasy elements make this book really stand out.",
            name: "Dymphyna"
        },

        {
            stars: "★★★★★",
            text: "Sunny is such an interesting character, and the adventure kept me reading.",
            name: "Imelda"
        }

    ]

        },
        
        "after": {

    title: "After",
    author: "Anna Todd",

    genre: [
        "Romance",
        "Young Adult"
    ],

    cover: "My Images/After.jfif",

    rating: "4.5",
    reviewCount: 3850,
    price: "₦55,000",

    publisher: "Gallery Books",
    published: "2014",
    pages: "592",
    language: "English",
    isbn: "978-1476792564",

    description:
        "A young college student finds her life changed when she meets a mysterious and rebellious boy who challenges everything she believes about love and relationships.",

    summary: [
        {
            heading: "A New Beginning",

            text: `Tessa Young begins college with a clear plan for her future. 
            She is focused on her studies, her relationship and staying on the 
            path she has always imagined for herself.`
        },

        {
            heading: "Meeting Hardin",

            text: `Everything changes when Tessa meets Hardin Scott, a mysterious 
            and rebellious student who is very different from anyone she has 
            known before. Their complicated relationship begins to challenge 
            Tessa's beliefs and expectations.`
        },

        {
            heading: "Love and Conflict",

            text: `As Tessa and Hardin grow closer, their relationship becomes 
            filled with attraction, secrets, arguments and difficult choices. 
            The story explores love, trust, change and the complicated nature 
            of relationships.`
        }
    ],

    reasons: [

        {
            icon: "fa-heart",
            heading: "Complicated Romance",

            text: "Follow a passionate relationship filled with attraction, conflict, secrets and emotional twists."
        },

        {
            icon: "fa-users",
            heading: "Memorable Characters",

            text: "Get to know Tessa and Hardin as their personalities and choices shape their complicated relationship."
        },

        {
            icon: "fa-bolt",
            heading: "Emotional Story",

            text: "A dramatic story filled with unexpected moments, difficult choices and intense emotions."
        },

        {
            icon: "fa-book-open",
            heading: "Young Adult Favorite",

            text: "Perfect for readers who enjoy contemporary romance, college settings and complicated relationships."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A dramatic romance that kept me curious about what would happen next.",
            name: "Joyce"
        },

        {
            stars: "★★★★☆",
            text: "The relationship between Tessa and Hardin is complicated but incredibly engaging.",
            name: "Bellona"
        },

        {
            stars: "★★★★★",
            text: "An emotional and addictive story with plenty of unexpected moments.",
            name: "Divine"
        }

    ]

        },
        
        "behind-closed-doors": {

    title: "Behind Closed Doors",
    author: "B. A. Paris",

    genre: [
        "Thriller",
        "Mystery"
    ],

    cover: "My Images/Behind Closed Doors.jpg",

    rating: "4.5",
    reviewCount: 1920,
    price: "₦32,000",

    publisher: "St. Martin's Press",
    published: "2016",
    pages: "304",
    language: "English",
    isbn: "978-1250121004",

    description:
        "A seemingly perfect marriage hides a disturbing secret, as a woman struggles to escape the terrifying reality behind closed doors.",

    summary: [
        {
            heading: "The Perfect Couple",

            text: `Jack and Grace appear to have the perfect marriage. 
            They are successful, wealthy and deeply devoted to each other. 
            From the outside, their relationship seems almost too perfect.`
        },

        {
            heading: "A Hidden Reality",

            text: `Behind closed doors, however, Grace's life is completely 
            different. She is trapped in a frightening situation and carefully 
            hides the truth from everyone around her.`
        },

        {
            heading: "A Fight for Freedom",

            text: `As the truth begins to emerge, the story reveals the disturbing 
            reality behind Grace's marriage. The novel explores control, 
            manipulation, fear, trust and the desperate search for freedom.`
        }
    ],

    reasons: [

        {
            icon: "fa-eye",
            heading: "Hidden Secrets",

            text: "Discover the disturbing secrets hidden behind what appears to be a perfect marriage."
        },

        {
            icon: "fa-bolt",
            heading: "Gripping Thriller",

            text: "A tense and suspenseful story that keeps you wondering what will happen next."
        },

        {
            icon: "fa-brain",
            heading: "Psychological Tension",

            text: "Explore fear, manipulation, control and the psychological struggle for freedom."
        },

        {
            icon: "fa-lock",
            heading: "Unpredictable Story",

            text: "Perfect for readers who enjoy mysteries, suspense and stories filled with unexpected revelations."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A tense and disturbing thriller that kept me turning the pages.",
            name: "Husky"
        },

        {
            stars: "★★★★☆",
            text: "The suspense builds beautifully and the secrets are genuinely unsettling.",
            name: "Divine"
        },

        {
            stars: "★★★★★",
            text: "An addictive mystery with a fascinating and unpredictable story.",
            name: "Emmy"
        }

    ]

        },
        
        "enders-game": {

    title: "Ender's Game",
    author: "Orson Scott Card",

    genre: [
        "Sci-Fi",
        "Adventure"
    ],

    cover: "My Images/Enders Game.jfif",

    rating: "4.7",
    reviewCount: 2780,
    price: "₦58,000",

    publisher: "Tor Books",
    published: "1985",
    pages: "324",
    language: "English",
    isbn: "978-0812550702",

    description:
        "A brilliant young boy is recruited into a military training program where he must prepare for a dangerous battle against an alien enemy.",

    summary: [

        {
            heading: "A Young Commander",

            text: `Ender Wiggin is a gifted young boy selected to attend Battle 
            School, a military training program designed to prepare children 
            for a possible war against an alien species known as the Formics.`
        },

        {
            heading: "Battle School",

            text: `At Battle School, Ender faces increasingly difficult challenges 
            while competing against other talented students. His intelligence, 
            leadership and ability to understand his opponents make him stand out.`
        },

        {
            heading: "The Ultimate Test",

            text: `As Ender's training becomes more intense, he is pushed to his 
            limits and forced to make difficult decisions. The story explores 
            leadership, intelligence, morality, isolation and the consequences 
            of war.`
        }

    ],

    reasons: [

        {
            icon: "fa-rocket",
            heading: "Epic Sci-Fi World",

            text: "Explore a futuristic world filled with advanced technology, space battles and alien civilizations."
        },

        {
            icon: "fa-brain",
            heading: "Brilliant Strategy",

            text: "Follow Ender's incredible ability to solve problems and outthink his opponents."
        },

        {
            icon: "fa-bolt",
            heading: "Intense Adventure",

            text: "Experience thrilling challenges, competitions and battles that keep the story moving."
        },

        {
            icon: "fa-users",
            heading: "Memorable Characters",

            text: "Meet Ender and the other students whose friendships, rivalries and choices shape the story."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "An incredibly intelligent sci-fi story with a fascinating main character.",
            name: "Emmy"
        },

        {
            stars: "★★★★★",
            text: "The strategy and battle scenes made this book impossible to put down.",
            name: "Theo"
        },

        {
            stars: "★★★★☆",
            text: "A brilliant story that explores much more than just science fiction and war.",
            name: "Husky"
        }

    ]

        },
        
        "fahrenheit-451": {

    title: "Fahrenheit 451",
    author: "Ray Bradbury",

    genre: [
        "Dystopian",
        "Science Fiction"
    ],

    cover: "My Images/Fah.jfif",

    rating: "4.6",
    reviewCount: 2310,
    price: "₦54,000",

    publisher: "Ballantine Books",
    published: "1953",
    pages: "256",
    language: "English",
    isbn: "978-1451678180",

    description:
        "In a future society where books are forbidden, a fireman begins questioning a world built around censorship, entertainment and conformity.",

    summary: [

        {
            heading: "A World Without Books",

            text: `Fahrenheit 451 follows Guy Montag, a fireman whose job is not 
            to put out fires but to burn books. In his society, books are banned 
            because they are considered dangerous and disruptive.`
        },

        {
            heading: "Questioning Society",

            text: `After meeting a curious young woman named Clarisse, Montag 
            begins questioning the life he has been living. He becomes increasingly 
            interested in the books he has been ordered to destroy.`
        },

        {
            heading: "The Search for Truth",

            text: `As Montag begins to challenge the society around him, he faces 
            dangerous consequences. The novel explores censorship, knowledge, 
            individuality, technology and the importance of independent thought.`
        }

    ],

    reasons: [

        {
            icon: "fa-book",
            heading: "Power of Books",

            text: "Discover why books and knowledge become powerful symbols of freedom and independent thinking."
        },

        {
            icon: "fa-fire",
            heading: "Unique Dystopia",

            text: "Enter a fascinating future society where firefighters burn books instead of fighting fires."
        },

        {
            icon: "fa-brain",
            heading: "Thought-Provoking",

            text: "Explore censorship, conformity, technology and the consequences of giving up independent thought."
        },

        {
            icon: "fa-lightbulb",
            heading: "Powerful Message",

            text: "A memorable story that encourages readers to question society and think for themselves."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A fascinating dystopian story that made me think differently about books and knowledge.",
            name: "Divine"
        },

        {
            stars: "★★★★☆",
            text: "The world Bradbury created is strange, disturbing and incredibly memorable.",
            name: "Joyce"
        },

        {
            stars: "★★★★★",
            text: "A powerful story about censorship, technology and the importance of thinking freely.",
            name: "Dhozie"
        }

    ]

        },
        
        "the-fault-in-our-stars": {

    title: "The Fault in Our Stars",
    author: "John Green",

    genre: [
        "Romance",
        "Young Adult"
    ],

    cover: "My Images/fault-in-our-star.png",

    rating: "4.7",
    reviewCount: 2640,
    price: "₦56,000",

    publisher: "Dutton Books",
    published: "2012",
    pages: "336",
    language: "English",
    isbn: "978-0525478812",

    description:
        "Two teenagers facing difficult circumstances find love, friendship and meaning as they navigate an unexpected relationship.",

    summary: [

        {
            heading: "Meeting Augustus",

            text: `Hazel Grace Lancaster is a teenager living with cancer who 
            is encouraged by her parents to attend a support group. There, she 
            meets Augustus Waters, a charming and confident boy who changes her 
            perspective on life.`
        },

        {
            heading: "An Unexpected Connection",

            text: `Hazel and Augustus develop a close friendship that gradually 
            becomes something deeper. Together, they share their fears, dreams, 
            humor and experiences while trying to make the most of their time.`
        },

        {
            heading: "Love and Life",

            text: `Their relationship leads them to confront difficult realities 
            about illness, loss and the uncertainty of life. The story explores 
            love, friendship, family, hope and finding meaning in difficult moments.`
        }

    ],

    reasons: [

        {
            icon: "fa-heart",
            heading: "Beautiful Romance",

            text: "Experience a heartfelt relationship built on friendship, honesty, humor and genuine connection."
        },

        {
            icon: "fa-users",
            heading: "Memorable Characters",

            text: "Meet Hazel and Augustus, two unforgettable characters whose personalities bring the story to life."
        },

        {
            icon: "fa-star",
            heading: "Emotional Story",

            text: "A touching story filled with laughter, difficult moments, meaningful conversations and unforgettable memories."
        },

        {
            icon: "fa-lightbulb",
            heading: "Life Lessons",

            text: "Explore love, hope, friendship and the importance of making meaningful moments count."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A beautiful and emotional story with characters that are impossible to forget.",
            name: "Burger"
        },

        {
            stars: "★★★★☆",
            text: "The relationship between Hazel and Augustus feels genuine and incredibly touching.",
            name: "Ralph"
        },

        {
            stars: "★★★★★",
            text: "Funny, emotional and beautifully written. Definitely a memorable read.",
            name: "Bellona"
        }

    ]

        },
        
        "gone-girl": {

    title: "Gone Girl",
    author: "Gillian Flynn",

    genre: [
        "Thriller",
        "Mystery"
    ],

    cover: "My Images/Gone Girl.png",

    rating: "4.7",
    reviewCount: 3120,
    price: "₦59,000",

    publisher: "Crown Publishing Group",
    published: "2012",
    pages: "432",
    language: "English",
    isbn: "978-0307588371",

    description:
        "When a woman mysteriously disappears on her wedding anniversary, her husband becomes the center of an increasingly disturbing investigation.",

    summary: [

        {
            heading: "A Disappearance",

            text: `On the morning of their fifth wedding anniversary, Amy Dunne 
            suddenly disappears. Her husband Nick quickly becomes the focus of 
            the investigation as the police search for clues about what happened.`
        },

        {
            heading: "Secrets and Suspicions",

            text: `As the investigation continues, hidden details about Nick and 
            Amy's marriage begin to surface. Their seemingly perfect relationship 
            appears far more complicated than anyone initially believed.`
        },

        {
            heading: "A Twisted Mystery",

            text: `The story gradually reveals conflicting perspectives, secrets 
            and unexpected twists. The novel explores marriage, manipulation, 
            deception, identity and the ways people can hide their true selves.`
        }

    ],

    reasons: [

        {
            icon: "fa-magnifying-glass",
            heading: "Gripping Mystery",

            text: "Follow a mysterious disappearance filled with clues, secrets and questions that demand answers."
        },

        {
            icon: "fa-brain",
            heading: "Psychological Depth",

            text: "Explore the complicated thoughts, motivations and behaviors behind the characters."
        },

        {
            icon: "fa-bolt",
            heading: "Unexpected Twists",

            text: "A suspenseful story packed with revelations that continually challenge what you think you know."
        },

        {
            icon: "fa-mask",
            heading: "Dark Secrets",

            text: "Discover the hidden sides of a relationship where appearances can be very misleading."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A brilliantly twisted mystery that kept me guessing from beginning to end.",
            name: "Joyce"
        },

        {
            stars: "★★★★★",
            text: "The psychological tension and unexpected twists make this an unforgettable thriller.",
            name: "Bellona"
        },

        {
            stars: "★★★★☆",
            text: "Dark, clever and full of surprises. I never knew who to trust.",
            name: "Ralph"
        }

    ]

        },
        
        "the-girl-on-the-train": {

    title: "The Girl on the Train",
    author: "Paula Hawkins",

    genre: [
        "Thriller",
        "Mystery"
    ],

    cover: "My Images/The Girl on the Train.avif",

    rating: "4.5",
    reviewCount: 2670,
    price: "₦60,000",

    publisher: "Riverhead Books",
    published: "2015",
    pages: "336",
    language: "English",
    isbn: "978-1594634024",

    description:
        "A psychological thriller about a woman who becomes entangled in a mysterious disappearance after observing a seemingly perfect couple from her train window.",

    summary: [

        {
            heading: "The Woman on the Train",
            text: `Rachel takes the same train every day and becomes fascinated 
            by a couple she regularly sees from the window. She imagines that 
            their life together is perfect, giving her a brief escape from 
            the problems in her own life.`
        },

        {
            heading: "A Mysterious Disappearance",
            text: `One morning, Rachel notices something disturbing involving 
            the couple. When the woman suddenly disappears, Rachel becomes 
            involved in the investigation, but her own unreliable memories 
            make it difficult to know what really happened.`
        },

        {
            heading: "Secrets and Truth",
            text: `As the mystery develops, hidden relationships, lies and secrets 
            begin to surface. The story explores memory, obsession, trust, 
            deception and the difficulty of knowing who to believe.`
        }

    ],

    reasons: [

        {
            icon: "fa-train",
            heading: "Mysterious Journey",
            text: "Follow Rachel as an ordinary train ride slowly becomes connected to a disturbing mystery."
        },

        {
            icon: "fa-brain",
            heading: "Psychological Suspense",
            text: "Dive into a tense story filled with memory, obsession, uncertainty and hidden motives."
        },

        {
            icon: "fa-eye",
            heading: "Unreliable Narrator",
            text: "Question what is real as Rachel struggles to separate her memories from the truth."
        },

        {
            icon: "fa-magnifying-glass",
            heading: "Intriguing Mystery",
            text: "Piece together clues, secrets and suspicious relationships as the investigation unfolds."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A suspenseful mystery that kept me questioning everyone.",
            name: "Bellona"
        },

        {
            stars: "★★★★☆",
            text: "The atmosphere and psychological twists made the story very engaging.",
            name: "Joyce"
        },

        {
            stars: "★★★★★",
            text: "Unpredictable, tense and full of secrets.",
            name: "Dhozie"
        }

    ]

        },
        
        "harry-potter": {

    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",

    genre: [
        "Fantasy",
        "Adventure"
    ],

    cover: "My Images/Harry Potter.png",

    rating: "4.8",
    reviewCount: 4200,
    price: "₦65,000",

    publisher: "Bloomsbury",
    published: "1997",
    pages: "223",
    language: "English",
    isbn: "978-0747532699",

    description:
        "A young boy discovers that he is a wizard and enters a magical world filled with friendship, adventure, mystery and danger.",

    summary: [

        {
            heading: "A Hidden World",
            text: `Harry Potter discovers on his eleventh birthday that he is a 
            wizard. After growing up with his ordinary relatives, he is introduced 
            to a magical world that he never knew existed.`
        },

        {
            heading: "Life at Hogwarts",
            text: `Harry begins his studies at Hogwarts School of Witchcraft and 
            Wizardry, where he makes close friends, learns magic and discovers 
            more about his mysterious past.`
        },

        {
            heading: "A Dangerous Mystery",
            text: `As Harry and his friends investigate strange events at Hogwarts, 
            they uncover a mystery connected to a powerful object and a dark 
            force from Harry's past.`
        }

    ],

    reasons: [

        {
            icon: "fa-wand-magic-sparkles",
            heading: "Magical World",
            text: "Step into a fascinating world filled with magic, mysterious creatures and unforgettable places."
        },

        {
            icon: "fa-users",
            heading: "Unforgettable Characters",
            text: "Follow Harry, Ron and Hermione as their friendship grows through magical adventures and challenges."
        },

        {
            icon: "fa-bolt",
            heading: "Exciting Adventure",
            text: "A fun and mysterious adventure filled with secrets, challenges and unexpected discoveries."
        },

        {
            icon: "fa-hat-wizard",
            heading: "Fantasy Classic",
            text: "A beloved fantasy story perfect for readers who enjoy magic, friendship and imaginative worlds."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A magical story that made me fall in love with the world of Hogwarts.",
            name: "Divine"
        },

        {
            stars: "★★★★★",
            text: "The characters, adventure and magical world make this such a fun read.",
            name: "Bellona"
        },

        {
            stars: "★★★★☆",
            text: "A charming fantasy adventure with a world that is easy to get lost in.",
            name: "Theo"
        }

    ]

        },

        "how-to-win-friends": {

    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",

    genre: [
        "Self Development",
        "Psychology"
    ],

    cover: "My Images/How to win friends.png",

    rating: "4.7",
    reviewCount: 3150,
    price: "₦55,000",

    publisher: "Simon & Schuster",
    published: "1936",
    pages: "288",
    language: "English",
    isbn: "978-0671027032",

    description:
        "A timeless guide to improving relationships, communicating effectively, and building stronger connections with people.",

    summary: [

        {
            heading: "Understanding People",
            text: `How to Win Friends and Influence People explores the importance 
            of understanding others and treating people with respect. Carnegie 
            explains how empathy and genuine interest can help create stronger 
            relationships.`
        },

        {
            heading: "Better Communication",
            text: `The book presents practical principles for becoming a better 
            communicator. It encourages readers to listen carefully, avoid 
            unnecessary criticism and show genuine appreciation for others.`
        },

        {
            heading: "Building Strong Relationships",
            text: `Carnegie explains how small changes in the way we interact with 
            people can improve friendships, professional relationships and 
            everyday conversations.`
        }

    ],

    reasons: [

        {
            icon: "fa-users",
            heading: "Better Relationships",
            text: "Learn practical ways to build stronger and more meaningful relationships with others."
        },

        {
            icon: "fa-comments",
            heading: "Improve Communication",
            text: "Discover simple techniques for becoming a better listener and communicator."
        },

        {
            icon: "fa-heart",
            heading: "Understand People",
            text: "Learn how empathy, appreciation and genuine interest can improve the way you connect with others."
        },

        {
            icon: "fa-arrow-up-right-dots",
            heading: "Personal Growth",
            text: "A practical read for anyone who wants to improve their confidence, relationships and social skills."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A practical book that completely changed the way I communicate with people.",
            name: "Emmy"
        },

        {
            stars: "★★★★☆",
            text: "Simple ideas that are surprisingly useful in everyday conversations.",
            name: "Burger"
        },

        {
            stars: "★★★★★",
            text: "A timeless book with lessons that still feel relevant today.",
            name: "Husky"
        }

    ]

        },
        
        "house-of-leaves": {

    title: "House of Leaves",
    author: "Mark Z. Danielewski",

    genre: [
        "Horror",
        "Mystery"
    ],

    cover: "My Images/House of Leaves.jfif",

    rating: "4.5",
    reviewCount: 1980,
    price: "₦72,000",

    publisher: "Pantheon Books",
    published: "2000",
    pages: "709",
    language: "English",
    isbn: "978-0375703768",

    description:
        "A complex and unsettling story about a mysterious house that seems to defy the laws of space, reality and reason.",

    summary: [

        {
            heading: "A Strange House",
            text: `House of Leaves follows a family that moves into a house that 
            appears ordinary from the outside but is strangely larger inside. 
            As the family explores the house, they discover impossible corridors 
            and rooms that seem to constantly change.`
        },

        {
            heading: "A Story Within a Story",
            text: `The novel presents its story through multiple layers of narration. 
            Johnny Truant discovers a mysterious manuscript about the house and 
            begins adding his own thoughts and experiences as he studies it.`
        },

        {
            heading: "Reality and Fear",
            text: `As the boundaries between the manuscript, Johnny's life and the 
            mysterious house become increasingly blurred, the novel explores fear, 
            obsession, isolation, reality and the uncertainty of what can be trusted.`
        }

    ],

    reasons: [

        {
            icon: "fa-house",
            heading: "Mysterious House",
            text: "Explore a disturbing house where impossible spaces and strange discoveries challenge reality."
        },

        {
            icon: "fa-brain",
            heading: "Psychological Horror",
            text: "Experience a deeply unsettling story that plays with fear, perception and the human mind."
        },

        {
            icon: "fa-book-open",
            heading: "Unique Storytelling",
            text: "Discover an unusual narrative told through manuscripts, notes, footnotes and multiple perspectives."
        },

        {
            icon: "fa-eye",
            heading: "Unpredictable Mystery",
            text: "A strange and immersive mystery that constantly leaves you questioning what is real."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "One of the strangest books I've ever read, and that is exactly what makes it unforgettable.",
            name: "Ralph"
        },

        {
            stars: "★★★★☆",
            text: "The unusual format makes the story feel completely different from anything else.",
            name: "Nenye"
        },

        {
            stars: "★★★★★",
            text: "Creepy, confusing and fascinating in the best possible way.",
            name: "Bellona"
        }

    ]

        },
        
        "it": {

    title: "It",
    author: "Stephen King",

    genre: [
        "Horror",
        "Thriller"
    ],

    cover: "My Images/It.jfif",

    rating: "4.6",
    reviewCount: 3760,
    price: "₦75,000",

    publisher: "Viking Press",
    published: "1986",
    pages: "1138",
    language: "English",
    isbn: "978-1501142970",

    description:
        "A terrifying story about a group of children who confront an ancient evil that takes the form of their deepest fears.",

    summary: [

        {
            heading: "A Town with a Secret",
            text: `It is set in the town of Derry, where a group of children 
            discover that something terrifying has been preying on the town 
            for generations. The creature often appears as Pennywise the 
            Dancing Clown, using fear to hunt its victims.`
        },

        {
            heading: "The Losers' Club",
            text: `Seven children known as the Losers' Club become friends and 
            decide to confront the mysterious creature. Despite their fears, 
            they stand together and attempt to stop the evil threatening Derry.`
        },

        {
            heading: "Fear and Memory",
            text: `Years later, the friends are forced to return to Derry when 
            the terrifying events begin again. The story explores friendship, 
            childhood fears, trauma, courage and the power of confronting the past.`
        }

    ],

    reasons: [

        {
            icon: "fa-ghost",
            heading: "Terrifying Horror",
            text: "Enter a chilling world where fear can take many forms and danger hides beneath an ordinary town."
        },

        {
            icon: "fa-users",
            heading: "Powerful Friendship",
            text: "Follow a group of friends whose loyalty and courage help them face something far beyond their understanding."
        },

        {
            icon: "fa-face-grimace",
            heading: "Deep Psychological Fear",
            text: "Experience a story that explores childhood fears, trauma and the things people are most afraid to face."
        },

        {
            icon: "fa-mask-face",
            heading: "Unforgettable Villain",
            text: "Meet Pennywise, one of horror fiction's most recognizable and disturbing villains."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A terrifying story with characters that made me genuinely care about what happened to them.",
            name: "Dymphna"
        },

        {
            stars: "★★★★☆",
            text: "The friendship between the characters is just as memorable as the horror.",
            name: "Divine"
        },

        {
            stars: "★★★★★",
            text: "Creepy, intense and incredibly atmospheric from beginning to end.",
            name: "Burger"
        }

    ]

        },
        
        "it-ends-with-us": {

    title: "It Ends with Us",
    author: "Colleen Hoover",

    genre: [
        "Romance",
        "Contemporary"
    ],

    cover: "My Images/It ends with us.png",

    rating: "4.6",
    reviewCount: 4320,
    price: "₦58,000",

    publisher: "Atria Books",
    published: "2016",
    pages: "384",
    language: "English",
    isbn: "978-1501110368",

    description:
        "A powerful contemporary romance that explores love, difficult choices, complicated relationships and the courage to break painful patterns.",

    summary: [

        {
            heading: "A New Beginning",
            text: `Lily Bloom has worked hard to build a new life for herself 
            in Boston. When she meets the charming neurosurgeon Ryle Kincaid, 
            she begins to imagine a future she never expected.`
        },

        {
            heading: "Love and Complicated Choices",
            text: `As Lily's relationship with Ryle develops, she begins to 
            encounter difficult situations that challenge her understanding 
            of love and the kind of relationship she wants for herself.`
        },

        {
            heading: "Breaking the Cycle",
            text: `When someone from Lily's past unexpectedly returns to her life, 
            she is forced to confront painful memories and make difficult 
            decisions about her future. The story explores love, courage, 
            relationships and breaking destructive patterns.`
        }

    ],

    reasons: [

        {
            icon: "fa-heart",
            heading: "Emotional Story",
            text: "Experience a deeply emotional story about love, relationships and difficult personal choices."
        },

        {
            icon: "fa-users",
            heading: "Complex Characters",
            text: "Follow characters whose relationships and decisions make the story feel personal and relatable."
        },

        {
            icon: "fa-heart-circle-exclamation",
            heading: "Powerful Themes",
            text: "Explore important themes surrounding love, relationships, courage and personal boundaries."
        },

        {
            icon: "fa-seedling",
            heading: "Personal Growth",
            text: "A story about finding strength, making difficult choices and choosing a healthier future."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "An emotional story that stayed with me long after I finished reading.",
            name: "Nenye"
        },

        {
            stars: "★★★★☆",
            text: "The characters and difficult choices made this a very emotional read.",
            name: "Imelda"
        },

        {
            stars: "★★★★★",
            text: "Powerful, emotional and full of moments that really make you think.",
            name: "Dymphna"
        }

    ]

        },
        
        "me-before-you": {

    title: "Me Before You",
    author: "Jojo Moyes",

    genre: [
        "Romance",
        "Drama"
    ],

    cover: "My Images/Me before you.png",

    rating: "4.7",
    reviewCount: 3980,
    price: "₦56,000",

    publisher: "Pamela Dorman Books",
    published: "2012",
    pages: "369",
    language: "English",
    isbn: "978-0143124542",

    description:
        "A heartfelt story about an unexpected relationship that changes two people's lives and challenges their understanding of love, hope and choice.",

    summary: [

        {
            heading: "An Unexpected Job",
            text: `Louisa Clark is a cheerful young woman who unexpectedly 
            becomes a caregiver for Will Traynor, a wealthy man whose life 
            changed dramatically after an accident left him paralyzed.`
        },

        {
            heading: "A Changing Relationship",
            text: `At first, Louisa and Will struggle to understand each other. 
            Over time, however, their relationship grows stronger as Louisa 
            introduces new experiences and a different perspective into Will's life.`
        },

        {
            heading: "Love and Difficult Choices",
            text: `As their bond deepens, Louisa is forced to confront difficult 
            questions about love, independence, hope and the choices people 
            make about their own lives.`
        }

    ],

    reasons: [

        {
            icon: "fa-heart",
            heading: "Emotional Romance",
            text: "A touching story about an unexpected relationship that changes both characters forever."
        },

        {
            icon: "fa-users",
            heading: "Memorable Characters",
            text: "Follow Louisa and Will as their personalities, experiences and relationship gradually evolve."
        },

        {
            icon: "fa-heart-pulse",
            heading: "Powerful Themes",
            text: "Explore love, independence, hope, sacrifice and the difficult choices people face."
        },

        {
            icon: "fa-sun",
            heading: "Life-Changing Story",
            text: "A moving story that encourages readers to think about living fully and appreciating meaningful connections."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "Beautifully written and incredibly emotional. The characters stayed with me.",
            name: "Ralph"
        },

        {
            stars: "★★★★☆",
            text: "A touching story about love, life and making difficult choices.",
            name: "Bellona"
        },

        {
            stars: "★★★★★",
            text: "One of those books that makes you laugh, cry and think about life differently.",
            name: "Imelda"
        }

    ]

        },
        
        "the-name-of-the-wind": {

    title: "The Name of the Wind",
    author: "Patrick Rothfuss",

    genre: [
        "Fantasy",
        "Adventure"
    ],

    cover: "My Images/The name of the wind.png",

    rating: "4.8",
    reviewCount: 2840,
    price: "₦70,000",

    publisher: "DAW Books",
    published: "2007",
    pages: "662",
    language: "English",
    isbn: "978-0756404741",

    description:
        "An epic fantasy about a legendary musician and magician who recounts the extraordinary events that shaped his life.",

    summary: [

        {
            heading: "The Legend of Kvothe",
            text: `The Name of the Wind follows Kvothe, a mysterious innkeeper 
            whose true identity is connected to a legendary figure from the past. 
            He begins telling the story of his life and the events that made him famous.`
        },

        {
            heading: "A Life of Adventure",
            text: `Kvothe's childhood is changed by a devastating event, forcing 
            him to survive on his own. His journey eventually leads him to a 
            prestigious university where he studies magic, music and mysterious 
            forms of knowledge.`
        },

        {
            heading: "Knowledge and Mystery",
            text: `As Kvothe searches for answers about a mysterious group connected 
            to his past, he faces rivalries, danger and difficult challenges. 
            The story explores ambition, knowledge, music, friendship and legend.`
        }

    ],

    reasons: [

        {
            icon: "fa-hat-wizard",
            heading: "Epic Fantasy",
            text: "Enter a richly imagined world filled with magic, legends, mysterious forces and ancient knowledge."
        },

        {
            icon: "fa-music",
            heading: "Powerful Storytelling",
            text: "Experience Kvothe's extraordinary life through a beautifully layered story filled with mystery and adventure."
        },

        {
            icon: "fa-book-open",
            heading: "Rich World-Building",
            text: "Explore a detailed fantasy world filled with fascinating cultures, history, magic and unforgettable places."
        },

        {
            icon: "fa-magnifying-glass",
            heading: "Deep Mystery",
            text: "Follow Kvothe's search for answers as secrets from his past gradually begin to surface."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "The world-building and storytelling completely pulled me into the story.",
            name: "Bellona"
        },

        {
            stars: "★★★★★",
            text: "Kvothe is such a fascinating character, and his story is incredibly immersive.",
            name: "Husky"
        },

        {
            stars: "★★★★☆",
            text: "A beautifully written fantasy filled with mystery, music and magic.",
            name: "Divine"
        }

    ]

        },
        
        "the-notebook": {

    title: "The Notebook",
    author: "Nicholas Sparks",

    genre: [
        "Romance",
        "Drama"
    ],

    cover: "My Images/Notebook.png",

    rating: "4.7",
    reviewCount: 3520,
    price: "₦58,000",

    publisher: "Warner Books",
    published: "1996",
    pages: "214",
    language: "English",
    isbn: "978-0446605236",

    description:
        "A timeless love story about two people whose deep connection survives separation, social expectations and the passage of time.",

    summary: [

        {
            heading: "A Summer Romance",
            text: `The Notebook follows Noah Calhoun and Allie Nelson, two young 
            people who fall deeply in love during a summer in North Carolina. 
            Despite coming from different backgrounds, their connection quickly becomes unforgettable.`
        },

        {
            heading: "Separated by Circumstances",
            text: `Their relationship is interrupted by family expectations and 
            circumstances that force them apart. Years later, their lives 
            unexpectedly cross again, bringing old feelings back to the surface.`
        },

        {
            heading: "A Love That Endures",
            text: `As Noah and Allie's story unfolds, the novel explores love, 
            memory, commitment and the power of a connection that can survive 
            even the greatest challenges.`
        }

    ],

    reasons: [

        {
            icon: "fa-heart",
            heading: "Beautiful Romance",
            text: "Experience a heartfelt love story about two people whose connection refuses to disappear."
        },

        {
            icon: "fa-users",
            heading: "Memorable Characters",
            text: "Follow Noah and Allie through the emotional highs and challenges of their unforgettable relationship."
        },

        {
            icon: "fa-clock",
            heading: "Love Through Time",
            text: "A touching story that explores how love can endure despite distance, time and difficult circumstances."
        },

        {
            icon: "fa-book-open",
            heading: "Emotional Story",
            text: "Perfect for readers who enjoy heartfelt stories about love, memory, commitment and relationships."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A beautiful love story that completely pulled at my heartstrings.",
            name: "Theo"
        },

        {
            stars: "★★★★☆",
            text: "Emotional, romantic and beautifully written from beginning to end.",
            name: "Emmy"
        },

        {
            stars: "★★★★★",
            text: "One of those stories that stays with you long after you finish reading.",
            name: "Dhozie"
        }

    ]

        },
        
        "the-omen": {

    title: "The Omen",
    author: "David Seltzer",

    genre: [
        "Horror",
        "Thriller"
    ],

    cover: "My Images/The Omen.png",

    rating: "4.5",
    reviewCount: 1850,
    price: "₦45,000",

    publisher: "Harper & Row",
    published: "1976",
    pages: "223",
    language: "English",
    isbn: "978-0449219054",

    description:
        "A chilling story about a seemingly ordinary child whose mysterious origins reveal a terrifying supernatural destiny.",

    summary: [

        {
            heading: "A Mysterious Child",
            text: `The Omen follows Robert Thorn, an American diplomat whose 
            family welcomes a young boy named Damien into their home. At first, 
            Damien appears to be an ordinary child, but strange events soon 
            begin to surround him.`
        },

        {
            heading: "Dark Secrets",
            text: `As Robert investigates the disturbing events connected to 
            Damien, he begins uncovering terrifying secrets about the child's 
            origins. What initially seems impossible gradually becomes harder 
            to ignore.`
        },

        {
            heading: "A Terrifying Destiny",
            text: `The story explores fear, supernatural forces, family, destiny 
            and the consequences of discovering a truth that could change 
            everything.`
        }

    ],

    reasons: [

        {
            icon: "fa-skull",
            heading: "Chilling Horror",
            text: "Enter a disturbing story filled with supernatural events, fear and an unsettling sense of danger."
        },

        {
            icon: "fa-eye",
            heading: "Dark Mystery",
            text: "Follow Robert as he uncovers increasingly disturbing secrets surrounding Damien."
        },

        {
            icon: "fa-bolt",
            heading: "Suspenseful Story",
            text: "A tense narrative that keeps the mystery unfolding as strange events become more dangerous."
        },

        {
            icon: "fa-ghost",
            heading: "Supernatural Themes",
            text: "Perfect for readers who enjoy dark supernatural stories involving mystery, destiny and the unknown."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "Creepy, mysterious and genuinely unsettling from beginning to end.",
            name: "Burger"
        },

        {
            stars: "★★★★☆",
            text: "The mystery surrounding Damien kept me interested throughout the story.",
            name: "Ralph"
        },

        {
            stars: "★★★★★",
            text: "A dark supernatural story with plenty of suspense and atmosphere.",
            name: "Bellona"
        }

    ]

        },
        
        "the-power-of-now": {

    title: "The Power of Now",
    author: "Eckhart Tolle",

    genre: [
        "Self Development",
        "Spirituality"
    ],

    cover: "My Images/The power of now.webp",

    rating: "4.7",
    reviewCount: 2680,
    price: "₦55,000",

    publisher: "New World Library",
    published: "1997",
    pages: "236",
    language: "English",
    isbn: "978-1577314806",

    description:
        "A guide to living in the present moment, overcoming excessive thinking, and finding greater peace and awareness in everyday life.",

    summary: [

        {
            heading: "Living in the Present",
            text: `The Power of Now encourages readers to focus their attention 
            on the present moment rather than becoming trapped in worries about 
            the future or regrets about the past.`
        },

        {
            heading: "Understanding the Mind",
            text: `Eckhart Tolle explores how constant thinking and identification 
            with the mind can create unnecessary stress and emotional suffering. 
            He encourages readers to observe their thoughts without allowing 
            those thoughts to control them.`
        },

        {
            heading: "Finding Inner Peace",
            text: `The book presents mindfulness and present-moment awareness as 
            ways of developing greater peace, clarity and acceptance. It explores 
            consciousness, awareness and the importance of being fully present.`
        }

    ],

    reasons: [

        {
            icon: "fa-clock",
            heading: "Live in the Now",
            text: "Learn how to focus more deeply on the present instead of constantly worrying about the past or future."
        },

        {
            icon: "fa-brain",
            heading: "Understand Your Mind",
            text: "Explore how your thoughts influence your emotions and learn to observe them with greater awareness."
        },

        {
            icon: "fa-leaf",
            heading: "Find Inner Peace",
            text: "Discover ideas and practices that can help create greater calm, awareness and acceptance."
        },

        {
            icon: "fa-lightbulb",
            heading: "Mindful Living",
            text: "Perfect for readers interested in personal growth, mindfulness and developing a more peaceful mindset."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A thoughtful book that completely changed how I look at the present moment.",
            name: "Dhozie"
        },

        {
            stars: "★★★★☆",
            text: "The ideas about controlling my thoughts and being present were really helpful.",
            name: "Nenye"
        },

        {
            stars: "★★★★★",
            text: "Simple, reflective and surprisingly powerful.",
            name: "Dymphna"
        }

    ]

        },
        
        "project-hail-mary": {

    title: "Project Hail Mary",
    author: "Andy Weir",

    genre: [
        "Sci-Fi",
        "Adventure"
    ],

    cover: "My Images/Hail Mary.jfif",

    rating: "4.8",
    reviewCount: 3190,
    price: "₦72,000",

    publisher: "Crown",
    published: "2021",
    pages: "496",
    language: "English",
    isbn: "978-0593135204",

    description:
        "A lone astronaut awakens millions of miles from Earth with no memory of how he got there and discovers that humanity's survival depends on him.",

    summary: [

        {
            heading: "Awakening Alone",
            text: `Project Hail Mary follows Ryland Grace, a scientist who 
            awakens aboard a spacecraft far from Earth. He has no memory of 
            his identity, his mission or how he ended up in space.`
        },

        {
            heading: "A Race Against Time",
            text: `As Grace slowly recovers his memories, he discovers that 
            Earth is facing an extinction-level threat. He must use his 
            scientific knowledge to understand the problem and find a way 
            to save humanity.`
        },

        {
            heading: "An Unexpected Friendship",
            text: `Grace's mission takes an unexpected turn when he encounters 
            another intelligent being facing the same crisis. Their unusual 
            partnership becomes essential to solving a problem that threatens 
            both of their worlds.`
        }

    ],

    reasons: [

        {
            icon: "fa-rocket",
            heading: "Epic Space Adventure",
            text: "Travel beyond Earth in an exciting science-fiction adventure filled with danger, discovery and exploration."
        },

        {
            icon: "fa-flask",
            heading: "Clever Science",
            text: "Enjoy fascinating scientific problems and creative solutions woven naturally into the story."
        },

        {
            icon: "fa-user-astronaut",
            heading: "Unforgettable Characters",
            text: "Follow Grace as he struggles with isolation, survival and an extraordinary mission to save humanity."
        },

        {
            icon: "fa-earth-americas",
            heading: "High Stakes",
            text: "A thrilling story where the fate of humanity depends on solving an almost impossible scientific mystery."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "One of the most entertaining science-fiction books I have ever read.",
            name: "Imelda"
        },

        {
            stars: "★★★★★",
            text: "The science, humor and mystery made this incredibly difficult to put down.",
            name: "Emmy"
        },

        {
            stars: "★★★★☆",
            text: "A brilliant space adventure with an unexpectedly emotional story.",
            name: "Theo"
        }

    ]

        },
        
        "rich-dad-poor-dad": {

    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",

    genre: [
        "Personal Finance",
        "Self Development"
    ],

    cover: "My Images/Rich Dad.webp",

    rating: "4.7",
    reviewCount: 2940,
    price: "₦52,000",

    publisher: "Plata Publishing",
    published: "1997",
    pages: "336",
    language: "English",
    isbn: "978-1612680194",

    description:
        "A personal finance book that explores different attitudes toward money, investing, financial education and building wealth.",

    summary: [

        {
            heading: "Two Different Lessons",
            text: `Rich Dad Poor Dad compares the financial philosophies 
            of two influential father figures in Robert Kiyosaki's life. 
            Their contrasting approaches to work, money and education shape 
            the author's understanding of financial success.`
        },

        {
            heading: "Learning About Money",
            text: `The book encourages readers to develop financial literacy 
            and understand how income, expenses, assets and liabilities 
            influence their financial decisions.`
        },

        {
            heading: "Building Financial Independence",
            text: `Kiyosaki emphasizes the importance of learning about 
            investing, developing financial skills and thinking beyond 
            simply working for a paycheck.`
        }

    ],

    reasons: [

        {
            icon: "fa-money-bill-trend-up",
            heading: "Financial Lessons",
            text: "Learn fundamental ideas about money, investing, income and building long-term financial independence."
        },

        {
            icon: "fa-brain",
            heading: "Different Mindset",
            text: "Explore how changing the way you think about money can influence your financial decisions."
        },

        {
            icon: "fa-chart-line",
            heading: "Wealth Building",
            text: "Discover concepts involving assets, investments and creating sources of income beyond a traditional salary."
        },

        {
            icon: "fa-lightbulb",
            heading: "Practical Ideas",
            text: "Perfect for readers who want to improve their financial knowledge and develop a stronger money mindset."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "An interesting introduction to thinking differently about money and financial independence.",
            name: "Dhozie"
        },

        {
            stars: "★★★★☆",
            text: "The comparison between the two approaches to money was really thought-provoking.",
            name: "Burger"
        },

        {
            stars: "★★★★★",
            text: "A motivating book that made me want to learn more about personal finance.",
            name: "Nenye"
        }

    ]

        },
        
        "salems-lot": {

    title: "Salem's Lot",
    author: "Stephen King",

    genre: [
        "Horror",
        "Supernatural"
    ],

    cover: "My Images/Salems Lot.jfif",

    rating: "4.6",
    reviewCount: 2410,
    price: "₦62,000",

    publisher: "Doubleday",
    published: "1975",
    pages: "439",
    language: "English",
    isbn: "978-0307743671",

    description:
        "A terrifying story about a writer who returns to his hometown and discovers that a dark supernatural force is slowly taking control of the town.",

    summary: [

        {
            heading: "Returning Home",
            text: `Salem's Lot follows Ben Mears, a writer who returns to 
            his childhood town of Jerusalem's Lot. He hopes to confront 
            memories from his past, but soon discovers that something 
            deeply disturbing has arrived in the town.`
        },

        {
            heading: "A Growing Darkness",
            text: `Strange events begin occurring as the town's residents 
            gradually become connected to a terrifying supernatural force. 
            Ben and a small group of allies begin investigating what is 
            happening before the entire town is consumed.`
        },

        {
            heading: "Fighting the Evil",
            text: `As the danger spreads, Ben and his companions must confront 
            the supernatural threat threatening Jerusalem's Lot. The story 
            explores fear, friendship, evil and the darkness hiding beneath 
            an ordinary community.`
        }

    ],

    reasons: [

        {
            icon: "fa-skull",
            heading: "Terrifying Horror",
            text: "Enter a chilling story filled with supernatural horror, suspense and an atmosphere of constant danger."
        },

        {
            icon: "fa-ghost",
            heading: "Supernatural Mystery",
            text: "Uncover the dark mystery spreading through the quiet town of Jerusalem's Lot."
        },

        {
            icon: "fa-house",
            heading: "Dark Small Town",
            text: "Experience a familiar community transformed into an increasingly terrifying place."
        },

        {
            icon: "fa-bolt",
            heading: "Gripping Suspense",
            text: "Perfect for readers who enjoy atmospheric horror, mystery and supernatural threats."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "Creepy, atmospheric and genuinely terrifying in the best way.",
            name: "Bellona"
        },

        {
            stars: "★★★★☆",
            text: "The slow build of tension made the story incredibly suspenseful.",
            name: "Joyce"
        },

        {
            stars: "★★★★★",
            text: "Stephen King creates such a dark and unsettling atmosphere.",
            name: "Imelda"
        }

    ]

        },
        
        "the-7-habits": {

    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",

    genre: [
        "Self Development",
        "Productivity"
    ],

    cover: "My Images/The 7 Habits.png",

    rating: "4.8",
    reviewCount: 3270,
    price: "₦65,000",

    publisher: "Free Press",
    published: "1989",
    pages: "464",
    language: "English",
    isbn: "978-0743269513",

    description:
        "A personal development guide that presents seven principles for becoming more effective, productive and purposeful in both personal and professional life.",

    summary: [

        {
            heading: "Principles of Effectiveness",
            text: `The 7 Habits of Highly Effective People introduces a 
            principle-centered approach to personal and professional growth. 
            Stephen Covey explains how lasting change begins with developing 
            effective habits and taking responsibility for our choices.`
        },

        {
            heading: "From Dependence to Independence",
            text: `The first three habits focus on personal effectiveness. 
            Readers are encouraged to take responsibility, establish clear 
            priorities and organize their actions around what matters most.`
        },

        {
            heading: "Building Better Relationships",
            text: `The later habits focus on working effectively with others. 
            The book explores communication, cooperation, understanding 
            different perspectives and creating mutually beneficial relationships.`
        }

    ],

    reasons: [

        {
            icon: "fa-bullseye",
            heading: "Clear Principles",
            text: "Learn practical principles for becoming more organized, responsible and effective."
        },

        {
            icon: "fa-chart-line",
            heading: "Personal Growth",
            text: "Develop habits that can help you improve your mindset, productivity and everyday decisions."
        },

        {
            icon: "fa-users",
            heading: "Better Relationships",
            text: "Explore strategies for communicating effectively and building stronger relationships with others."
        },

        {
            icon: "fa-lightbulb",
            heading: "Practical Wisdom",
            text: "Perfect for readers interested in personal development, leadership, productivity and meaningful growth."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A practical book that completely changed how I organize my priorities.",
            name: "Imelda"
        },

        {
            stars: "★★★★★",
            text: "The principles are simple but powerful when you actually apply them.",
            name: "Nenye"
        },

        {
            stars: "★★★★☆",
            text: "A great personal development book with useful lessons about relationships and productivity.",
            name: "Bellona"
        }

    ]

        },
        
        "the-alchemist": {

    title: "The Alchemist",
    author: "Paulo Coelho",

    genre: [
        "Fiction",
        "Adventure"
    ],

    cover: "My Images/The Alchemist.png",

    rating: "4.7",
    reviewCount: 3890,
    price: "₦50,000",

    publisher: "HarperTorch",
    published: "1988",
    pages: "208",
    language: "English",
    isbn: "978-0062315007",

    description:
        "A young shepherd follows a recurring dream on a journey of discovery, learning about purpose, courage, love and pursuing one's dreams.",

    summary: [

        {
            heading: "A Recurring Dream",
            text: `The Alchemist follows Santiago, a young shepherd who 
            repeatedly dreams about discovering a treasure near the Egyptian 
            pyramids. Curious about the meaning of his dream, he decides 
            to leave his familiar life behind and search for the treasure.`
        },

        {
            heading: "A Journey of Discovery",
            text: `Santiago travels across unfamiliar lands and meets people 
            who influence his understanding of life and his personal journey. 
            Along the way, he faces setbacks and learns to recognize opportunities 
            and follow his intuition.`
        },

        {
            heading: "Following Your Dream",
            text: `As Santiago continues his journey, he learns that the search 
            for his dream is also a journey of self-discovery. The story explores 
            courage, purpose, love, perseverance and the importance of pursuing 
            what truly matters to you.`
        }

    ],

    reasons: [

        {
            icon: "fa-compass",
            heading: "Inspiring Journey",
            text: "Follow Santiago on an unforgettable journey across deserts, cultures and unfamiliar lands."
        },

        {
            icon: "fa-star",
            heading: "Chase Your Dreams",
            text: "Explore an inspiring story about having the courage to pursue your goals and discover your purpose."
        },

        {
            icon: "fa-heart",
            heading: "Meaningful Lessons",
            text: "Discover memorable ideas about love, perseverance, courage and listening to your inner voice."
        },

        {
            icon: "fa-mountain-sun",
            heading: "Personal Discovery",
            text: "Perfect for readers who enjoy stories that combine adventure with reflection and personal growth."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A beautiful and inspiring story about following your dreams.",
            name: "Emmy"
        },

        {
            stars: "★★★★☆",
            text: "Simple, meaningful and filled with lessons that stay with you.",
            name: "Divine"
        },

        {
            stars: "★★★★★",
            text: "Santiago's journey was both adventurous and surprisingly emotional.",
            name: "Husky"
        }

    ]

        },
        
        "the-hobbit": {

    title: "The Hobbit",
    author: "J.R.R. Tolkien",

    genre: [
        "Fantasy",
        "Adventure"
    ],

    cover: "My Images/The Hobbit.jfif",

    rating: "4.8",
    reviewCount: 4120,
    price: "₦60,000",

    publisher: "George Allen & Unwin",
    published: "1937",
    pages: "310",
    language: "English",
    isbn: "978-0547928227",

    description:
        "A quiet hobbit is drawn into an unexpected adventure filled with danger, treasure, friendship and a legendary dragon.",

    summary: [

        {
            heading: "An Unexpected Adventure",
            text: `The Hobbit follows Bilbo Baggins, a peaceful hobbit who 
            enjoys a quiet life in his comfortable home. Everything changes 
            when the wizard Gandalf and a group of dwarves arrive and invite 
            him on an extraordinary journey.`
        },

        {
            heading: "A Dangerous Journey",
            text: `Bilbo travels with the dwarves across Middle-earth, 
            encountering trolls, goblins, giant spiders and other dangers. 
            Along the way, he discovers courage and abilities he never knew 
            he possessed.`
        },

        {
            heading: "The Dragon's Treasure",
            text: `The journey ultimately leads Bilbo and his companions toward 
            the Lonely Mountain, where the dragon Smaug guards a vast treasure. 
            Bilbo must use his intelligence and courage as the adventure reaches 
            its greatest challenge.`
        }

    ],

    reasons: [

        {
            icon: "fa-dragon",
            heading: "Epic Adventure",
            text: "Join Bilbo on an unforgettable journey through a magical world filled with danger, mystery and discovery."
        },

        {
            icon: "fa-wand-magic-sparkles",
            heading: "Magical World",
            text: "Explore Middle-earth and encounter wizards, dwarves, elves, dragons and other fascinating creatures."
        },

        {
            icon: "fa-user",
            heading: "Memorable Hero",
            text: "Watch Bilbo grow from a quiet hobbit into a brave and resourceful adventurer."
        },

        {
            icon: "fa-gem",
            heading: "Fantasy Classic",
            text: "Perfect for readers who enjoy magical worlds, legendary creatures, treasure hunts and epic adventures."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A magical adventure with an incredible world and unforgettable characters.",
            name: "Dymphna"
        },

        {
            stars: "★★★★★",
            text: "Bilbo's journey from an ordinary hobbit to a brave adventurer was amazing.",
            name: "Theo"
        },

        {
            stars: "★★★★☆",
            text: "A wonderful fantasy classic filled with adventure, humor and mystery.",
            name: "Emmy"
        }

    ]

        },
        
        "the-martian": {

    title: "The Martian",
    author: "Andy Weir",

    genre: [
        "Sci-Fi",
        "Adventure"
    ],

    cover: "My Images/The Martian.jfif",

    rating: "4.8",
    reviewCount: 3760,
    price: "₦65,000",

    publisher: "Crown Publishing",
    published: "2011",
    pages: "369",
    language: "English",
    isbn: "978-0553418026",

    description:
        "An astronaut stranded alone on Mars must use science, engineering and determination to survive until he can find a way home.",

    summary: [

        {
            heading: "Stranded on Mars",
            text: `The Martian follows Mark Watney, an astronaut who is 
            accidentally left behind on Mars after his crew is forced 
            to evacuate during a dangerous mission. Believed to be dead, 
            Watney suddenly finds himself completely alone on the planet.`
        },

        {
            heading: "Survival Through Science",
            text: `With limited supplies and no immediate way home, Watney 
            must rely on his knowledge, creativity and engineering skills 
            to solve one problem after another. Every decision becomes 
            a matter of survival.`
        },

        {
            heading: "The Race to Bring Him Home",
            text: `Back on Earth, NASA eventually discovers that Watney is 
            alive and begins working on a plan to rescue him. As both Watney 
            and the people on Earth race against time, the mission becomes 
            a remarkable test of science, teamwork and human determination.`
        }

    ],

    reasons: [

        {
            icon: "fa-user-astronaut",
            heading: "Survival Story",
            text: "Follow Mark Watney as he fights to survive alone on one of the most hostile environments imaginable."
        },

        {
            icon: "fa-flask",
            heading: "Clever Science",
            text: "Enjoy creative scientific and engineering solutions as Watney tackles one impossible problem after another."
        },

        {
            icon: "fa-rocket",
            heading: "Space Adventure",
            text: "Experience a gripping journey across Mars filled with danger, discovery and high-stakes decisions."
        },

        {
            icon: "fa-brain",
            heading: "Problem Solving",
            text: "Perfect for readers who enjoy intelligent characters, science, engineering and creative thinking."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "The problem-solving made this one of the most entertaining sci-fi books I've read.",
            name: "Divine"
        },

        {
            stars: "★★★★★",
            text: "Mark's determination and sense of humor made the story incredibly enjoyable.",
            name: "Ralph"
        },

        {
            stars: "★★★★☆",
            text: "A thrilling survival story with fascinating science throughout.",
            name: "Husky"
        }

    ]

        },
        
        "the-shining": {

    title: "The Shining",
    author: "Stephen King",

    genre: [
        "Horror",
        "Psychological"
    ],

    cover: "My Images/The Shining.png",

    rating: "4.7",
    reviewCount: 2980,
    price: "₦62,000",

    publisher: "Doubleday",
    published: "1977",
    pages: "447",
    language: "English",
    isbn: "978-0307743657",

    description:
        "A family moves into an isolated hotel for the winter, where supernatural forces and a troubled past threaten to destroy them.",

    summary: [

        {
            heading: "A Winter at the Overlook",
            text: `The Shining follows Jack Torrance, a struggling writer who 
            accepts a job as the winter caretaker of the isolated Overlook Hotel. 
            He moves there with his wife Wendy and their young son Danny, hoping 
            the quiet environment will give him a chance to rebuild his life.`
        },

        {
            heading: "Danny's Strange Gift",
            text: `Danny possesses a mysterious psychic ability known as the 
            shining, which allows him to sense things that others cannot. 
            As winter closes in and the family becomes isolated, Danny begins 
            experiencing disturbing visions connected to the hotel's dark past.`
        },

        {
            heading: "The Hotel's Dark Influence",
            text: `As Jack becomes increasingly affected by the supernatural 
            forces within the Overlook Hotel, his behavior begins to change. 
            The family must confront the hotel's terrifying history as they 
            struggle to survive the winter and escape its influence.`
        }

    ],

    reasons: [

        {
            icon: "fa-ghost",
            heading: "Terrifying Atmosphere",
            text: "Enter a haunting hotel where isolation, supernatural forces and fear create an unforgettable atmosphere."
        },

        {
            icon: "fa-brain",
            heading: "Psychological Horror",
            text: "Experience a story that explores fear, isolation, addiction and the frightening effects of losing control."
        },

        {
            icon: "fa-hotel",
            heading: "Mysterious Setting",
            text: "The isolated Overlook Hotel becomes one of the most memorable and unsettling settings in horror fiction."
        },

        {
            icon: "fa-eye",
            heading: "Supernatural Mystery",
            text: "Follow Danny as his mysterious ability reveals secrets hidden within the hotel's disturbing past."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "The atmosphere is incredibly creepy and keeps you feeling uneasy throughout.",
            name: "Ralph"
        },

        {
            stars: "★★★★☆",
            text: "A deeply unsettling story with an unforgettable setting and characters.",
            name: "Burger"
        },

        {
            stars: "★★★★★",
            text: "The psychological side of the horror makes this book especially terrifying.",
            name: "Nenye"
        }

    ]

        },
        
        "the-silent-patient": {

    title: "The Silent Patient",
    author: "Alex Michaelides",

    genre: [
        "Thriller",
        "Mystery"
    ],

    cover: "My Images/The Silent Patient .jpg",

    rating: "4.7",
    reviewCount: 3210,
    price: "₦58,000",

    publisher: "Celadon Books",
    published: "2019",
    pages: "336",
    language: "English",
    isbn: "978-1250301697",

    description:
        "A famous painter stops speaking after being accused of murdering her husband, leaving a therapist determined to uncover the truth.",

    summary: [

        {
            heading: "A Silent Mystery",
            text: `The Silent Patient follows Alicia Berenson, a successful 
            painter whose life changes dramatically when she is accused of 
            murdering her husband. After the crime, Alicia stops speaking 
            completely and refuses to explain what happened.`
        },

        {
            heading: "The Search for the Truth",
            text: `Theo Faber, a psychotherapist fascinated by Alicia's case, 
            becomes determined to understand why she has remained silent. 
            He begins working with her and slowly attempts to uncover the 
            events surrounding the murder.`
        },

        {
            heading: "Secrets and Revelation",
            text: `As Theo investigates Alicia's past and the people around her, 
            hidden relationships and disturbing secrets begin to emerge. 
            The search for the truth eventually leads to a revelation that 
            changes everything.`
        }

    ],

    reasons: [

        {
            icon: "fa-user-secret",
            heading: "Mysterious Plot",
            text: "Follow a gripping mystery as the search for answers reveals secrets hidden behind Alicia's silence."
        },

        {
            icon: "fa-brain",
            heading: "Psychological Thriller",
            text: "Explore the minds, emotions and hidden motivations of characters connected to the mysterious crime."
        },

        {
            icon: "fa-magnifying-glass",
            heading: "Uncover the Truth",
            text: "Piece together clues alongside Theo as he investigates what really happened on the night of the murder."
        },

        {
            icon: "fa-bolt",
            heading: "Unexpected Twists",
            text: "A suspenseful story filled with revelations that keep you questioning what is true until the end."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "The mystery kept me guessing, and the ending completely caught me off guard.",
            name: "Dymphna"
        },

        {
            stars: "★★★★☆",
            text: "A fascinating psychological thriller with plenty of secrets to uncover.",
            name: "Imelda"
        },

        {
            stars: "★★★★★",
            text: "The suspense was excellent. I kept wanting to read just one more chapter.",
            name: "Dhozie"
        }

    ]

        },
        
        "the-time-machine": {

    title: "The Time Machine",
    author: "H.G. Wells",

    genre: [
        "Sci-Fi",
        "Adventure"
    ],

    cover: "My Images/The Time Machine.jfif",

    rating: "4.5",
    reviewCount: 2450,
    price: "₦52,000",

    publisher: "William Heinemann",
    published: "1895",
    pages: "118",
    language: "English",
    isbn: "978-0451530707",

    description:
        "A brilliant inventor builds a machine capable of traveling through time and discovers a strange and dangerous future.",

    summary: [

        {
            heading: "The Time Traveler",
            text: `The Time Machine follows an unnamed inventor known as the 
            Time Traveler, who believes that time is another dimension that 
            can be explored. After building a machine capable of traveling 
            through time, he decides to test his invention himself.`
        },

        {
            heading: "A Strange Future",
            text: `The Time Traveler journeys far into the future and discovers 
            a world inhabited by two very different groups of people, the 
            peaceful Eloi and the mysterious Morlocks. He soon realizes that 
            this future is far more dangerous than he expected.`
        },

        {
            heading: "The Future of Humanity",
            text: `As the Time Traveler explores this distant future, he begins 
            to uncover clues about how humanity has changed over thousands 
            of years. The story explores time, evolution, society, technology 
            and the possible consequences of human progress.`
        }

    ],

    reasons: [

        {
            icon: "fa-clock",
            heading: "Time Travel",
            text: "Travel thousands of years into the future and experience one of science fiction's earliest visions of time travel."
        },

        {
            icon: "fa-rocket",
            heading: "Futuristic Adventure",
            text: "Explore a strange future filled with mystery, danger and discoveries about the fate of humanity."
        },

        {
            icon: "fa-brain",
            heading: "Thought-Provoking",
            text: "Consider fascinating ideas about evolution, society, technology and the future of civilization."
        },

        {
            icon: "fa-hourglass-half",
            heading: "Sci-Fi Classic",
            text: "Perfect for readers who enjoy classic science fiction, imaginative worlds and extraordinary inventions."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A fascinating classic that makes you think about where humanity could eventually end up.",
            name: "Theo"
        },

        {
            stars: "★★★★☆",
            text: "The concept of traveling through time was incredibly imaginative for its era.",
            name: "Dymphna"
        },

        {
            stars: "★★★★★",
            text: "Short, mysterious and thought-provoking. A great science fiction classic.",
            name: "Emmy"
        }

    ]

        },
        
        "think-and-grow-rich": {

    title: "Think and Grow Rich",
    author: "Napoleon Hill",

    genre: [
        "Self Development",
        "Personal Finance"
    ],

    cover: "My Images/Think and Grow Rich.avif",

    rating: "4.6",
    reviewCount: 2840,
    price: "₦55,000",

    publisher: "The Ralston Society",
    published: "1937",
    pages: "238",
    language: "English",
    isbn: "978-1585424337",

    description:
        "A classic personal development book exploring the mindset, principles and habits that can help people pursue success and financial goals.",

    summary: [

        {
            heading: "The Power of Desire",
            text: `Think and Grow Rich explores the idea that achieving 
            meaningful success begins with a clear desire and a strong 
            determination to pursue it. Napoleon Hill presents principles 
            designed to help readers develop a focused mindset.`
        },

        {
            heading: "Building a Success Mindset",
            text: `The book discusses the importance of confidence, persistence, 
            specialized knowledge, planning and disciplined action. Hill 
            encourages readers to turn their goals into definite plans 
            rather than simply hoping for success.`
        },

        {
            heading: "Turning Ideas Into Action",
            text: `The central message is that successful results require more 
            than positive thinking. The book emphasizes persistence, organized 
            effort and taking consistent action toward clearly defined goals.`
        }

    ],

    reasons: [

        {
            icon: "fa-bullseye",
            heading: "Clear Goals",
            text: "Learn how defining specific goals can help you stay focused and intentional about what you want to achieve."
        },

        {
            icon: "fa-brain",
            heading: "Success Mindset",
            text: "Explore ideas about confidence, determination and developing a mindset focused on achievement."
        },

        {
            icon: "fa-chart-line",
            heading: "Personal Growth",
            text: "Discover principles that encourage discipline, persistence and continuous improvement."
        },

        {
            icon: "fa-lightbulb",
            heading: "Practical Principles",
            text: "Explore classic ideas about planning, decision-making and turning ambitions into purposeful action."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A motivating book that encouraged me to become more intentional about my goals.",
            name: "Dhozie"
        },

        {
            stars: "★★★★☆",
            text: "Some of the ideas are old, but the focus on persistence and clear goals is still useful.",
            name: "Divine"
        },

        {
            stars: "★★★★★",
            text: "A great book for anyone interested in personal growth and achieving meaningful goals.",
            name: "Bellona"
        }

    ]

        },
        
        "the-lean-startup": {

    title: "The Lean Startup",
    author: "Eric Ries",

    genre: [
        "Business",
        "Entrepreneurship"
    ],

    cover: "My Images/The Lean.png",

    rating: "4.5",
    reviewCount: 2180,
    price: "₦59,000",

    publisher: "Crown Business",
    published: "2011",
    pages: "336",
    language: "English",
    isbn: "978-0307887894",

    description:
        "A practical guide to building successful businesses through experimentation, customer feedback and continuous improvement.",

    summary: [

        {
            heading: "Building With Purpose",
            text: `The Lean Startup explains how entrepreneurs can build 
            products and businesses while reducing unnecessary risk. Eric 
            Ries argues that startups should focus on learning what customers 
            actually want instead of relying entirely on assumptions.`
        },

        {
            heading: "Build, Measure, Learn",
            text: `The book introduces the Build-Measure-Learn approach, 
            encouraging entrepreneurs to create simple versions of their 
            ideas, measure how customers respond and use the results to 
            improve the product.`
        },

        {
            heading: "Learning and Adaptation",
            text: `Rather than spending years developing a product before 
            releasing it, the lean approach encourages continuous testing, 
            customer feedback and adaptation. The goal is to learn quickly 
            and build something people genuinely need.`
        }

    ],

    reasons: [

        {
            icon: "fa-lightbulb",
            heading: "Smart Ideas",
            text: "Learn how entrepreneurs can test ideas before investing too much time, money and resources."
        },

        {
            icon: "fa-chart-line",
            heading: "Build and Learn",
            text: "Discover how the Build-Measure-Learn cycle can help businesses improve through continuous experimentation."
        },

        {
            icon: "fa-users",
            heading: "Customer Focus",
            text: "Understand why listening to customers and responding to their needs is essential when building a product."
        },

        {
            icon: "fa-rocket",
            heading: "For Entrepreneurs",
            text: "Perfect for aspiring entrepreneurs, startup founders and anyone interested in building better products."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A useful guide for anyone trying to turn an idea into a real business.",
            name: "Bellona"
        },

        {
            stars: "★★★★☆",
            text: "The Build-Measure-Learn concept completely changed how I think about startups.",
            name: "Nenye"
        },

        {
            stars: "★★★★★",
            text: "Practical, insightful and especially helpful for understanding customer feedback.",
            name: "Burger"
        }

    ]

        },
        
        "good-to-great": {

    title: "Good to Great",
    author: "Jim Collins",

    genre: [
        "Business",
        "Leadership"
    ],

    cover: "My Images/Good to be Great.png",

    rating: "4.6",
    reviewCount: 2640,
    price: "₦61,000",

    publisher: "HarperBusiness",
    published: "2001",
    pages: "400",
    language: "English",
    isbn: "978-0066620992",

    description:
        "A study of how companies move from average performance to sustained excellence through disciplined leadership, people and decision-making.",

    summary: [

        {
            heading: "From Good to Great",
            text: `Good to Great examines companies that made the transition 
            from ordinary performance to sustained excellence. Jim Collins 
            explores the common characteristics and practices shared by 
            companies that achieved remarkable long-term results.`
        },

        {
            heading: "Level Five Leadership",
            text: `The book introduces the idea of Level Five Leadership, 
            describing leaders who combine personal humility with strong 
            professional determination. These leaders focus on the success 
            of the organization rather than personal recognition.`
        },

        {
            heading: "Discipline and Consistency",
            text: `Collins emphasizes disciplined people, disciplined thinking 
            and disciplined action. The book argues that lasting success 
            comes from consistent decisions and systems rather than relying 
            on sudden breakthroughs.`
        }

    ],

    reasons: [

        {
            icon: "fa-users",
            heading: "Strong Leadership",
            text: "Explore leadership principles that can help organizations build lasting success."
        },

        {
            icon: "fa-chart-line",
            heading: "Business Growth",
            text: "Discover how successful companies create systems that support consistent long-term growth."
        },

        {
            icon: "fa-bullseye",
            heading: "Focused Strategy",
            text: "Learn why disciplined decisions and a clear understanding of what matters can improve performance."
        },

        {
            icon: "fa-lightbulb",
            heading: "Practical Lessons",
            text: "Perfect for entrepreneurs, managers and anyone interested in business and organizational success."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A fascinating look at what separates successful companies from average ones.",
            name: "Theo"
        },

        {
            stars: "★★★★☆",
            text: "The leadership lessons are practical and easy to relate to real businesses.",
            name: "Husky"
        },

        {
            stars: "★★★★★",
            text: "A great read for anyone interested in leadership, business and long-term growth.",
            name: "Divine"
        }

    ]

        },
        
        "the-psychology-of-money": {

    title: "The Psychology of Money",
    author: "Morgan Housel",

    genre: [
        "Personal Finance",
        "Self Development"
    ],

    cover: "My Images/Psychology of Money.png",

    rating: "4.8",
    reviewCount: 4210,
    price: "₦63,000",

    publisher: "Harriman House",
    published: "2020",
    pages: "256",
    language: "English",
    isbn: "978-0857197689",

    description:
        "An exploration of how emotions, behavior and personal experiences influence the way people think about and manage money.",

    summary: [

        {
            heading: "Money and Behavior",
            text: `The Psychology of Money explores the idea that financial 
            success is influenced by behavior as much as knowledge. Morgan 
            Housel explains how personal experiences, emotions and beliefs 
            can shape the way people make financial decisions.`
        },

        {
            heading: "Wealth and Financial Decisions",
            text: `The book examines why people often make very different 
            decisions with money even when they have access to similar 
            information. It explores saving, investing, risk, patience 
            and the difference between being wealthy and appearing wealthy.`
        },

        {
            heading: "Long-Term Thinking",
            text: `Housel emphasizes patience, humility and long-term thinking. 
            The book encourages readers to understand their own financial 
            behavior and make decisions that support lasting financial 
            security rather than short-term appearances.`
        }

    ],

    reasons: [

        {
            icon: "fa-brain",
            heading: "Money Mindset",
            text: "Understand how emotions, experiences and behavior can influence the financial decisions you make."
        },

        {
            icon: "fa-piggy-bank",
            heading: "Smart Saving",
            text: "Explore the importance of saving, patience and preparing for unexpected financial situations."
        },

        {
            icon: "fa-chart-line",
            heading: "Investing Lessons",
            text: "Learn valuable ideas about risk, patience, compounding and long-term financial thinking."
        },

        {
            icon: "fa-coins",
            heading: "Financial Freedom",
            text: "Perfect for readers who want to develop healthier attitudes toward money and build long-term wealth."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "One of the best books I've read about understanding money and personal behavior.",
            name: "Theo"
        },

        {
            stars: "★★★★★",
            text: "It completely changed the way I think about saving, spending and investing.",
            name: "Dymphna"
        },

        {
            stars: "★★★★☆",
            text: "Simple financial lessons explained through relatable stories and experiences.",
            name: "Divine"
        }

    ]

        },
        
        "the-100-startup": {

    title: "The $100 Startup",
    author: "Chris Guillebeau",

    genre: [
        "Business",
        "Entrepreneurship"
    ],

    cover: "My Images/The 100.png",

    rating: "4.5",
    reviewCount: 1980,
    price: "₦54,000",

    publisher: "Crown Business",
    published: "2012",
    pages: "304",
    language: "English",
    isbn: "978-0307951526",

    description:
        "A guide to turning personal skills and passions into small businesses that can generate income and greater independence.",

    summary: [

        {
            heading: "Starting Small",
            text: `The $100 Startup explores how ordinary people can create 
            successful small businesses without requiring large amounts of 
            startup capital. Chris Guillebeau shares examples of people who 
            turned their skills and interests into sources of income.`
        },

        {
            heading: "Skills Into Income",
            text: `The book encourages readers to identify useful skills, 
            passions and experiences that others are willing to pay for. 
            It shows how a simple idea can become a practical business 
            when combined with a clear offer and the right customers.`
        },

        {
            heading: "Building Independence",
            text: `Guillebeau focuses on creating businesses that provide both 
            income and personal freedom. The book emphasizes taking action, 
            understanding customers and keeping a business simple enough 
            to manage effectively.`
        }

    ],

    reasons: [

        {
            icon: "fa-lightbulb",
            heading: "Start Small",
            text: "Learn how a simple idea and a small amount of money can become the foundation of a profitable business."
        },

        {
            icon: "fa-money-bill-wave",
            heading: "Low-Cost Ideas",
            text: "Discover ways to turn your existing skills, knowledge and interests into potential sources of income."
        },

        {
            icon: "fa-rocket",
            heading: "Take Action",
            text: "Move beyond planning and learn practical ideas for turning a business concept into something real."
        },

        {
            icon: "fa-person-running",
            heading: "Build Freedom",
            text: "Perfect for aspiring entrepreneurs who want to create income while gaining more control over their time."
        }

    ],

    readerReviews: [

        {
            stars: "★★★★★",
            text: "A motivating book for anyone who has ever thought about starting a small business.",
            name: "Divine"
        },

        {
            stars: "★★★★☆",
            text: "The real-world examples make entrepreneurship feel much more achievable.",
            name: "Ralph"
        },

        {
            stars: "★★★★★",
            text: "It encouraged me to look at my own skills as something I could build a business around.",
            name: "Burger"
        }

    ]

},

    };


    // Find current book

    const book =
        books[bookName];
    console.log("URL:", bookName);
console.log("BOOK:", book);

    if (!book) {

        console.log(
            "Book not found:",
            bookName
        );

        return;

    }


    // Hero

    const author =
        document.querySelector(".book-author");

    const title =
        document.querySelector(".book-title");

    if (author) {
        author.textContent = book.author;
    }

    if (title) {
        title.textContent = book.title;
    }


    // Genres

    const genreContainer =
        document.querySelector(".book-genres");

    if (genreContainer) {

        genreContainer.innerHTML = "";

        book.genre.forEach(genre => {

            const span =
                document.createElement("span");

            span.textContent = genre;

            genreContainer.appendChild(span);

        });

    }


    // Cover

    const cover =
        document.querySelector(".book-cover img");

    if (cover) {

        cover.src = book.cover;

        cover.alt = book.title;

    }


    // Rating

    // Rating

const rating =
    document.getElementById("bookRating");

if (rating) {
    rating.textContent = book.rating;
    }

 // Review Count

const reviewCount = document.getElementById("reviewCount");

if (reviewCount) {

    const target = book.reviewCount;
    const duration = 1500;

    const observer = new IntersectionObserver((entries, observer) => {

        if (!entries[0].isIntersecting) return;

        let count = 0;

        const increment = target / (duration / 20);

        const counter = setInterval(() => {

            count += increment;

            if (count >= target) {

                count = target;

                clearInterval(counter);

            }

            reviewCount.textContent =
                Math.floor(count).toLocaleString();

        }, 20);

        observer.unobserve(reviewCount);

    }, {
        threshold: 0.5
    });

    observer.observe(reviewCount);

}

    // Price

    const price =
        document.querySelector(".book-price");

    if (price) {
        price.textContent = book.price;
    }


    // Book Information

const infoAuthor =
    document.getElementById("infoAuthor");

const infoPublisher =
    document.getElementById("infoPublisher");

const infoPublication =
    document.getElementById("infoPublication");

const infoPages =
    document.getElementById("infoPages");

const infoLanguage =
    document.getElementById("infoLanguage");

const infoISBN =
    document.getElementById("infoISBN");


if (infoAuthor) {
    infoAuthor.textContent = book.author;
}

if (infoPublisher) {
    infoPublisher.textContent = book.publisher;
}

if (infoPublication) {
    infoPublication.textContent = book.published;
}

if (infoPages) {
    infoPages.textContent = book.pages;
}

if (infoLanguage) {
    infoLanguage.textContent = book.language;
}

if (infoISBN) {
    infoISBN.textContent = book.isbn;
}

    // Description

    const description =
        document.querySelector(".book-description");

    if (description) {

        description.textContent =
            book.description;

    }


    // Summary

const summary = document.getElementById("bookSummary");

if (summary) {

    summary.innerHTML = "";

    book.summary.forEach((section, index) => {

        const card = 
            document.createElement("div");

        card.className = "summary-card";

        card.setAttribute(
            "data-aos",
            index % 2 === 0 ? "fade-right" : "fade-left"
        );

        card.setAttribute(
            "data-aos-delay",
            `${(index + 1) * 100}`
        );

        card.innerHTML = `

            <h3 class="summary-subheading">
                ${section.heading}
            </h3>

            <p>
                ${section.text}
            </p>

        `;

        summary.appendChild(card);

    });

}


// Why You'll Love It

const reasonsContainer =
    document.getElementById("bookReasons");

if (reasonsContainer) {

    reasonsContainer.innerHTML = "";

    book.reasons.forEach(reason => {

        const card =
            document.createElement("div");

        card.className = "reason-card";

        card.innerHTML = `

            <i class="fa-solid ${reason.icon}"></i>

            <h3>
                ${reason.heading}
            </h3>

            <p>
                ${reason.text}
            </p>

        `;

        reasonsContainer.appendChild(card);

    });

    }
    
    // Reader Reviews

const reviewsContainer =
    document.getElementById("readerReviews");

if (reviewsContainer) {

    reviewsContainer.innerHTML = "";

    book.readerReviews.forEach(review => {

        const card =
            document.createElement("div");

        card.className =
            "reader-review-card";

        card.innerHTML = `

            <div class="review-stars">
                ${review.stars}
            </div>

            <p>
                ${review.text}
            </p>

            <strong>
                ${review.name}
            </strong>

        `;

        reviewsContainer.appendChild(card);

    });

}

    // Related Books

const relatedContainer =
    document.querySelector("#relatedBooks");

if (relatedContainer) {

    const currentGenre =
        book.genre[0];


    // Find books with the same genre

    const sameGenreBooks =
        Object.entries(books)

            .filter(([id, relatedBook]) => {

                if (id === bookName) {
                    return false;
                }

                return relatedBook.genre.includes(
                    currentGenre
                );

            });


    // Find other books

    const otherBooks =
        Object.entries(books)

            .filter(([id]) => {

                return id !== bookName &&
                       !sameGenreBooks.some(
                           ([relatedId]) =>
                               relatedId === id
                       );

            });


    // Combine related and other books

    const relatedBooks = [
        ...sameGenreBooks,
        ...otherBooks
    ].slice(0, 4);


    relatedContainer.innerHTML = "";


    relatedBooks.forEach(
        ([id, relatedBook]) => {

            const card =
                document.createElement("div");

            card.className =
                "related-book-card";


            card.innerHTML = `

                <img
                    src="${relatedBook.cover}"
                    alt="${relatedBook.title}"
                >

                <div class="related-book-info">

                    <span class="author">
                        ${relatedBook.author}
                    </span>

                    <h3>
                        ${relatedBook.title}
                    </h3>

                    <p>
                        ${relatedBook.description}
                    </p>

                    <div class="book-stars">

                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>

                        <span>
                            ${relatedBook.rating}
                        </span>

                    </div>

                    <a
                        href="book.html?book=${id}"
                        class="book-btn"
                    >
                        View Book
                        <i class="fas fa-arrow-right"></i>
                    </a>

                </div>

            `;

            relatedContainer.appendChild(card);

        }
    );

}


 // Back to all books button

const backToBooks =
    document.querySelector(".back-to-books");

if (backToBooks) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToBooks.classList.add("show");

        } else {

            backToBooks.classList.remove("show");

        }

    });

}

});

/* =========================
   BOOK PAGE LOADER
========================= */

const pageLoader = document.getElementById("page-loader");

if (pageLoader) {

    window.addEventListener("load", () => {

        // Small delay so the loading animation is actually visible
        setTimeout(() => {
            pageLoader.classList.add("hide");
        }, 1800);

    });

}