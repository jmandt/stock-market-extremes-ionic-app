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

export interface NewsArticle {
    category: string;
    datePublished: string;
    description: string;
    name: string;
    image: NewsImage;
    provider: NewsProvider[];
    url: string;
}

export interface NewsContext {
    queryContext: {
        adultIntent: boolean;
        originalQuery: string;
    };
    readLink: string;
    sort: any [];
    totalEstimatedMatches: number;
    value: NewsArticle[];
}

export interface NewsImage {
    thumnail: object;
    name: string;
}

export interface NewsProvider {
    name: string;
    url: string;
}

export interface Financials {
    year_high: number;
    year_low: number;
    change_pct: number;
    close_yesterday: number;
    currency: string;
    day_change: number;
    day_high: number;
    day_low: number;
    eps: number;
    gmt_offset: number;
    last_trade_time: string;
    market_cap: number;
    name: string;
    pe: number;
    price: number;
    price_open: number;
    shares: number;
    stock_exchange_long: string;
    stock_exchange_short: string;
    symbol: string;
    timezone: string;
    timezone_name: string;
    volume: number;
    volume_avg: number;
}
