package go_controllers

import (
	"fmt"

	"github.com/Avashneupane9857/probo-opinion-trading-app/models"
)

func CreatUser(userId string) map[string]interface{} {
	if _, exists := models.INR_BALANCE[userId]; exists {
		return map[string]interface{}{
			"msg":     "User already exists",
			"success": false,
		}
	}

	models.INR_BALANCE[userId] = models.USERINRBALANCE{
		Balance: 0,
		Locked:  0,
	}
	models.STOCK_BALANCE[userId] = map[string]models.UserStockType{}
	return map[string]interface{}{
		"msg":  fmt.Sprintf("User '%s' created", userId),
		"data": models.INR_BALANCE,
	}
}
