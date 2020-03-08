export interface Company {
    name: string;
    city: string;
    country: string;
    description: string;
    employeeTotal: number;
    ggroup: string;
    gsubind: string;
    gsector: string;
    ipo: string;
    isin: string;
    naicsSector: string;
    naicsSubsector: string;
    peers: string [];
    ticker: string;
    weburl: string;
}

export interface News {
    category: string;
    datePublished: string;
    description: string;
    image: NewsImage;
    provider: NewsProvider[];

}

export interface NewsImage {
    thumnail: object;
    name: string;
}

export interface NewsProvider {
    url: string;
}
