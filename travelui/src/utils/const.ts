import London from '../assets/images/London.jpeg';
import Paris from '../assets/images/Paris.jpeg';
import Rome from '../assets/images/Rome.jpeg';
import Zurich from '../assets/images/Zurich.jpeg';
import Madrid from '../assets/images/Madrid.jpeg';
import Bali from '../assets/images/Bali.jpeg';
import India from '../assets/images/India.jpeg';
import Japan from '../assets/images/Japan.jpeg';
import Korea from '../assets/images/Korea.jpeg';
import Singapore from '../assets/images/Singapore.jpeg';
import Malaysia from '../assets/images/Malaysia.jpeg';

export interface CARD_INTERFACE {
    id: number;
    name: string;
    imgUrl: string;
    link: string;
}

export const DESTINATIONS_LIST: CARD_INTERFACE[] = [
    {
        id: 1,
        name: "Bali, Indonesia",
        imgUrl: Bali,
        link: "/explore/Bali"
    },
    {
        id: 2,
        name: "Paris, France",
        imgUrl: Paris,
        link: "/explore/Paris"
    },
    {
        id: 3,
        name: "Rome, Italy",
        imgUrl: Rome,
        link: "/explore/Rome"
    },
    {
        id: 4,
        name: "Zurich, Switzerland",
        imgUrl: Zurich,
        link: "/explore/Zurich"
    },
    {
        id: 5,
        name: "India, India",
        imgUrl: India,
        link: "/explore/India"
    },

    {
        id: 6,
        name: "Japan, Japan",
        imgUrl: Japan,
        link: "/explore/Japan"
    },

    {
        id: 7,
        name: "London, UK",
        imgUrl: London,
        link: "/explore/London"
    },

    {
        id: 8,
        name: "Seoul, Korea",
        imgUrl: Korea,
        link: "/explore/Korea"
    },

    {
        id: 9,
        name: "Singapore, Singapore",
        imgUrl: Singapore,
        link: "/explore/Singapore"
    },

    {
        id: 10,
        name: "Malaysia, Malaysia",
        imgUrl: Malaysia,
        link: "/explore/Malaysia"
    },

    
]

export const RESTAURANT_LIST: CARD_INTERFACE[] = [
    {
        id: 1,
        name: "Pizza Hut",
        imgUrl: London,
        link: "/explore/UK/London"
    },
    {
        id: 2,
        name: "KFC",
        imgUrl: Paris,
        link: "/explore/France/Paris"
    },
    {
        id: 3,
        name: "McDonald's",
        imgUrl: Rome,
        link: "/explore/Italy/Rome"
    },
    {
        id: 4,
        name: "Pasta Express",
        imgUrl: Zurich,
        link: "/explore/Switzerland/Zurich"
    },
    {
        id: 5,
        name: "Le Petite",
        imgUrl: Madrid,
        link: "/explore/Spain/Madrid"
    },
]

export const ATTRACTION_LIST: CARD_INTERFACE[] = [
    {
        id: 1,
        name: "Bahnhofstrasse",
        imgUrl: Zurich,
        link: "/explore/UK/Zurich"
    },
    {
        id: 2,
        name: "Bahnhofstrasdfsdfkjsdf",
        imgUrl: Zurich,
        link: "/explore/UK/Zurich"
    },
    {
        id: 3,
        name: "Bahnhofstrasse",
        imgUrl: Zurich,
        link: "/explore/UK/Zurich"
    },
    {
        id: 4,
        name: "Bahnhofstrasse",
        imgUrl: Zurich,
        link: "/explore/UK/Zurich"
    },
    {
        id: 5,
        name: "Bahnhofstrasse",
        imgUrl: Zurich,
        link: "/explore/UK/Zurich"
    },
    {
        id: 6,
        name: "Bahnhofstrasse",
        imgUrl: Zurich,
        link: "/explore/UK/Zurich"
    },
    {
        id: 7,
        name: "Bahnhofstrasse",
        imgUrl: Zurich,
        link: "/explore/UK/Zurich"
    },
    {
        id: 8,
        name: "Bahnhofstrasse",
        imgUrl: Zurich,
        link: "/explore/UK/Zurich"
    },
]

export interface TIKTOK_INTERFACE {
    Id: string;
    TiktokUrl: string;
}

export const TIKTOK_LIST: TIKTOK_INTERFACE[] = [
    {
        Id: '1',
        TiktokUrl: 'https://www.tiktok.com/embed/7153200517185801474'
    },
    {
        Id: '2',
        TiktokUrl: 'https://www.tiktok.com/embed/7017992166064590085'
    },
    {
        Id: '3',
        TiktokUrl: 'https://www.tiktok.com/embed/7148877963805658373'
    },
    {
        Id: '4',
        TiktokUrl: 'https://www.tiktok.com/embed/7133282938900319493'
    },
    {
        Id: '5',
        TiktokUrl: 'https://www.tiktok.com/embed/7049207025682697477'
    },
    {
        Id: '6',
        TiktokUrl: 'https://www.tiktok.com/embed/7122010129549118747'
    },
    {
        Id: '7',
        TiktokUrl: 'https://www.tiktok.com/embed/7140994174752410885'
    },

]