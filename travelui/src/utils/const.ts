import London from '../assets/images/London.jpeg';
import Paris from '../assets/images/Paris.jpeg';
import Rome from '../assets/images/Rome.jpeg';
import Zurich from '../assets/images/Zurich.jpeg';
import Madrid from '../assets/images/Madrid.jpeg';


interface DESTINATIONS_INTERFACE {
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