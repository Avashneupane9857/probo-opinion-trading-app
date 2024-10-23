package models

type UserStockBalance struct {
	Quantity int `json:"quantity"`
	Locked   int `json:"locked"`
}
type UserStockType struct {
	Yes UserStockBalance `json:"yes"`
	No  UserStockBalance `json:"no"`
}

var STOCK_BALANCE = map[string]map[string]UserStockType{}
