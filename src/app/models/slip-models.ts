export interface Slip {
    advice: string;
}

export interface Message {
    type: string;
    text: string;
}

export interface AdviceSlipModel {
    total_results: string;
    slips: Slip[];
    slip: Slip;
    message: Message;
}