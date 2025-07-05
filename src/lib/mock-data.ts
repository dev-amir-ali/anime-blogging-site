import type { Category, Post, User, Comment } from '@/lib/types';

export const MOCK_USERS: User[] = [
  { id: 'user-1', name: 'NaruFan_98', avatarUrl: 'https://placehold.co/100x100.png', bio: 'Just a guy who loves ramen and Rasengan.' },
  { id: 'user-2', name: 'TitanSlayer', avatarUrl: 'https://placehold.co/100x100.png', bio: 'Dedicating my heart to exploring the best anime out there.' },
  { id: 'user-3', name: 'GojoSensei', avatarUrl: 'https://placehold.co/100x100.png', bio: 'Throughout heaven and earth, I alone am the honored one.' },
];

export const MOCK_CATEGORIES: Category[] = [
  { id: 'cat-1', name: 'Shonen', slug: 'shonen', description: 'Action-packed adventures.', imageUrl: 'https://placehold.co/600x400.png', hint: 'anime battle' },
  { id: 'cat-2', name: 'Shojo', slug: 'shojo', description: 'Heartfelt romance and drama.', imageUrl: 'https://placehold.co/600x400.png', hint: 'anime romance' },
  { id: 'cat-3', name: 'Seinen', slug: 'seinen', description: 'Mature themes, complex plots.', imageUrl: 'https://placehold.co/600x400.png', hint: 'dark anime' },
  { id: 'cat-4', name: 'Isekai', slug: 'isekai', description: 'Journeys to another world.', imageUrl: 'https://placehold.co/600x400.png', hint: 'fantasy world' },
  { id: 'cat-5', name: 'Slice of Life', slug: 'slice-of-life', description: 'Relaxing, relatable stories.', imageUrl: 'https://placehold.co/600x400.png', hint: 'anime school' },
  { id: 'cat-6', name: 'Mecha', slug: 'mecha', description: 'Giant robots and epic battles.', imageUrl: 'https://placehold.co/600x400.png', hint: 'giant robot' },
  { id: 'cat-7', name: 'Fantasy', slug: 'fantasy', description: 'Magic, myths, and medieval worlds.', imageUrl: 'https://placehold.co/600x400.png', hint: 'anime magic' },
  { id: 'cat-8', name: 'Sports', slug: 'sports', description: 'Competition and teamwork.', imageUrl: 'https://placehold.co/600x400.png', hint: 'anime basketball' },
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'post-1',
    title: 'Top 5 Fights in Naruto Shippuden',
    content: 'The world of Naruto is filled with breathtaking battles that have captivated audiences for years. Here, we break down the top 5 fights in Naruto Shippuden that showcase the pinnacle of ninja warfare, strategy, and emotional weight. From Naruto\'s epic clash with Pain to the final, world-altering battle against Sasuke, we explore the choreography, the stakes, and the character development that make these moments unforgettable. Get ready to relive the intensity and discover why these fights are etched into anime history.',
    author: MOCK_USERS[0],
    category: MOCK_CATEGORIES[0],
    imageUrl: 'https://placehold.co/1200x630.png',
    hint: 'anime fight',
    keywords: ['Naruto', 'Sasuke', 'Anime Fights', 'Shonen'],
    createdAt: '2024-05-20T10:00:00Z',
    status: 'published',
  },
  {
    id: 'post-2',
    title: 'The Unsettling Philosophy of Attack on Titan',
    content: 'Attack on Titan is more than just a story about giant monsters; it\'s a deep, unsettling exploration of freedom, determinism, and the cyclical nature of hatred. This post delves into the complex philosophies woven into Hajime Isayama\'s masterpiece. We analyze the moral ambiguities of characters like Eren Yeager, the political intrigue of Paradis, and the series\' profound commentary on the human condition. Join us as we unpack the themes that make Attack on Titan a modern classic of the Seinen genre.',
    author: MOCK_USERS[1],
    category: MOCK_CATEGORIES[2],
    imageUrl: 'https://placehold.co/1200x630.png',
    hint: 'anime titan',
    keywords: ['AOT', 'Eren Yeager', 'Philosophy', 'Seinen'],
    createdAt: '2024-05-19T14:30:00Z',
    status: 'published',
  },
  {
    id: 'post-3',
    title: 'Why Fruits Basket is a Shojo Masterpiece',
    content: 'Fruits Basket is a cornerstone of the Shojo genre, but what makes it so enduringly special? This article explores the elements that elevate it from a simple romance to a masterpiece of emotional storytelling. We discuss its beautiful handling of trauma and healing, the intricate development of its large cast of characters, and its central message of acceptance and love. Discover how Tohru Honda\'s journey of compassion reshaped the lives of the Sohma family and captured the hearts of fans worldwide.',
    author: MOCK_USERS[1],
    category: MOCK_CATEGORIES[1],
    imageUrl: 'https://placehold.co/1200x630.png',
    hint: 'anime friendship',
    keywords: ['Fruits Basket', 'Tohru Honda', 'Shojo', 'Romance'],
    createdAt: '2024-05-21T11:00:00Z',
    status: 'draft',
  },
  {
    id: 'post-4',
    title: 'Is Sword Art Online the Definitive Isekai?',
    content: 'When you think of Isekai, Sword Art Online is one of the first names that comes to mind. But does it truly represent the best of what the "another world" genre has to offer? This post examines SAO\'s massive influence, from its popularization of VRMMO settings to its impact on a generation of anime. We\'ll weigh its strengths, like its thrilling action and iconic romance, against its criticisms to determine its place in the Isekai hall of fame. Is it the king, or just the one that opened the gate?',
    author: MOCK_USERS[2],
    category: MOCK_CATEGORIES[3],
    imageUrl: 'https://placehold.co/1200x630.png',
    hint: 'anime sword',
    keywords: ['SAO', 'Kirito', 'Isekai', 'Virtual Reality'],
    createdAt: '2024-05-18T09:00:00Z',
    status: 'published',
  },
];

export const MOCK_COMMENTS: Comment[] = [
    {
        id: 'comment-1',
        content: 'Great list! I would have put the Jiraiya vs. Pain fight at number 1 though. The emotional impact was just insane.',
        author: { name: 'Itachi_Fan', avatarUrl: 'https://placehold.co/100x100.png' },
        post: { id: 'post-1', title: 'Top 5 Fights in Naruto Shippuden' },
        createdAt: '2024-05-20T12:05:00Z',
    },
    {
        id: 'comment-2',
        content: 'This is a fantastic analysis. You really captured the nihilistic undertones of the series. It\'s what makes AoT so compelling.',
        author: { name: 'SurveyCorpsStan', avatarUrl: 'https://placehold.co/100x100.png' },
        post: { id: 'post-2', title: 'The Unsettling Philosophy of Attack on Titan' },
        createdAt: '2024-05-19T18:45:00Z',
    },
    {
        id: 'comment-3',
        content: 'I completely agree. SAO walked so that other Isekai could run. It has its flaws but it\'s undeniably iconic.',
        author: { name: 'AsunaBestGirl', avatarUrl: 'https://placehold.co/100x100.png' },
        post: { id: 'post-4', title: 'Is Sword Art Online the Definitive Isekai?' },
        createdAt: '2024-05-18T10:30:00Z',
    },
];
