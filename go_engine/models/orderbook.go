package models

type Order struct {
	Type     string
	Quantity float64
}

type PriceLevel struct {
	Total  float64
	Orders map[string]Order
}

type MarketSide map[float64]PriceLevel

type OrderBook struct {
	Yes MarketSide
	No  MarketSide
}

var ORDERBOOK = map[string]OrderBook{}
