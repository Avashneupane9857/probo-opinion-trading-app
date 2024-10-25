package models

type Order struct {
	Type     string  `json:"type,omitempty"`
	Quantity float64 `json:"quantity,omitempty"`
}

type PriceLevel struct {
	Total  float64          `json:"total"`
	Orders map[string]Order `json:"orders"`
}

type MarketSide map[float64]PriceLevel

type OrderBook struct {
	Yes MarketSide `json:"yes"`
	No  MarketSide `json:"no"`
}

var ORDERBOOK = map[string]OrderBook{}
