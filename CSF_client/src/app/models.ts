export interface Result {

    display_title: string;
    mpaa_rating: string;
    byline: string;
    headline: string;
    summary_short: string;
    copyright: string;
    link: Link;
    multimedia: Src; 
}

export interface Search {
    search: string;
}

export interface Link {
    url: string;
}

export interface Src {
    src: string;
}

export interface Comments {
    name: string;
    rating: number;
    comment: string;
}

export interface Title {
    title: any;
}