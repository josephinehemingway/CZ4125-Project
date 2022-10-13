import London from '../assets/images/London.jpeg';
import Paris from '../assets/images/Paris.jpeg';
import Rome from '../assets/images/Rome.jpeg';
import Zurich from '../assets/images/Zurich.jpeg';
import Madrid from '../assets/images/Madrid.jpeg';

export interface DESTINATIONS_INTERFACE {
    id: number;
    cityName: string;
    imgUrl: string;
    link: string;
}

export const DESTINATIONS_LIST: DESTINATIONS_INTERFACE[] = [
    {
        id: 1,
        cityName: "London, UK",
        imgUrl: London,
        link: "/explore/London"
    },
    {
        id: 2,
        cityName: "Paris, France",
        imgUrl: Paris,
        link: "/explore/Paris"
    },
    {
        id: 3,
        cityName: "Rome, Italy",
        imgUrl: Rome,
        link: "/explore/Rome"
    },
    {
        id: 4,
        cityName: "Zurich, Switzerland",
        imgUrl: Zurich,
        link: "/explore/Zurich"
    },
    {
        id: 5,
        cityName: "Madrid, Spain",
        imgUrl: Madrid,
        link: "/explore/Madrid"
    },
]

export interface TIKTOK_INTERFACE {
    id: number;
    embedUrl: string;
}

export const TIKTOK_LIST: TIKTOK_INTERFACE[] = [
    {
        id: 7153200517185801474,
        embedUrl: '7153200517185801474'
    },
    {
        id: 7017992166064590085,
        embedUrl: '7017992166064590085'
    },
    {
        id: 7148877963805658373,
        embedUrl: '7148877963805658373'
    },
    {
        id: 7133282938900319493,
        embedUrl: '7133282938900319493'
    },
    {
        id: 7049207025682697477,
        embedUrl: '7049207025682697477'
    },
    {
        id: 7122010129549118747,
        embedUrl: '7122010129549118747'
    },
    {
        id: 7140994174752410885,
        embedUrl: '7140994174752410885'
    },

]