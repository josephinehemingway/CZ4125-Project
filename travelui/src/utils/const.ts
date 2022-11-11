import London from '../assets/images/London.jpeg';
import Paris from '../assets/images/Paris.jpeg';
import Rome from '../assets/images/Rome.jpeg';
import Zurich from '../assets/images/Zurich.jpeg';
import Madrid from '../assets/images/Madrid.jpeg';

export interface CARD_INTERFACE {
    id: number;
    name: string;
    imgUrl: string;
    link: string;
}

export const DESTINATIONS_LIST: CARD_INTERFACE[] = [
    {
        id: 1,
        name: "London, UK",
        imgUrl: London,
        link: "/explore/UK/London"
    },
    {
        id: 2,
        name: "Paris, France",
        imgUrl: Paris,
        link: "/explore/France/Paris"
    },
    {
        id: 3,
        name: "Rome, Italy",
        imgUrl: Rome,
        link: "/explore/Italy/Rome"
    },
    {
        id: 4,
        name: "Zurich, Switzerland",
        imgUrl: Zurich,
        link: "/explore/Switzerland/Zurich"
    },
    {
        id: 5,
        name: "Madrid, Spain",
        imgUrl: Madrid,
        link: "/explore/Spain/Madrid"
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
    id: string;
    embedUrl: string;
}

export const TIKTOK_LIST: TIKTOK_INTERFACE[] = [
    {
        id: '7153200517185801474',
        embedUrl: '7153200517185801474'
    },
    {
        id: '7017992166064590085',
        embedUrl: '7017992166064590085'
    },
    {
        id: '7148877963805658373',
        embedUrl: '7148877963805658373'
    },
    {
        id: '7133282938900319493',
        embedUrl: '7133282938900319493'
    },
    {
        id: '7049207025682697477',
        embedUrl: '7049207025682697477'
    },
    {
        id: '7122010129549118747',
        embedUrl: '7122010129549118747'
    },
    {
        id: '7140994174752410885',
        embedUrl: '7140994174752410885'
    },

]