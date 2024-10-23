package models

type USERINRBALANCE struct {
	Balance int `json:"balance"`
	Locked  int `json:"locked"`
}

var INR_BALANCE = map[string]USERINRBALANCE{}
