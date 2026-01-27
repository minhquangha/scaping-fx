interface PriceData {
    symbol: string;
    price: number;
    change: number;
    changePercent: number;
    buy: number;
    changeBuy: number;
    sell: number;
    changeSell: number;
}

interface VangTodayResponse {
    success: boolean;
    timestamp: number;
    time: string;
    date: string;
    type: string;
    name: string;
    buy: number;
    sell: number;
    change_buy: number;
    change_sell: number;
}

export type { PriceData, VangTodayResponse };
