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

const reviewCount =
    document.getElementById("reviewCount");

if (reviewCount) {

    const target =
        book.reviewCount;

    let count = 0;

    const duration = 1500;

    const increment =
        target / (duration / 20);

    const counter =
        setInterval(() => {

            count += increment;

            if (count >= target) {

                count = target;

                clearInterval(counter);

            }

            reviewCount.textContent =
                Math.floor(count).toLocaleString();

        }, 20);

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