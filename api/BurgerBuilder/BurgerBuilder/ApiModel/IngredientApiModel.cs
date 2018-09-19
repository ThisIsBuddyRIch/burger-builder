using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using BurgerBuilder.Domain;

namespace BurgerBuilder.ApiModel
{
    public class IngredientApiModel
    {
        [Required] public IngredientType Type { get; set; }

        [Required] public int Amount { get; set; }

        public static List<IngredientApiModel> GetDefaultBurgerIngredients()
        {
            return Enum.GetValues(typeof(IngredientType)).Cast<IngredientType>()
                .Select(x => new IngredientApiModel
                {
                    Type = x,
                    Amount = 1
                }).ToList();
        }
    }
}