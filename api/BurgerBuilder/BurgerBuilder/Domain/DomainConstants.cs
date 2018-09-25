using System.Collections.Generic;

namespace BurgerBuilder.Domain
{
    public static class DomainConstants
    {
        public static Dictionary<IngredientType, decimal> CostDict { get; } = new Dictionary<IngredientType, decimal>
        {
            { IngredientType.Meet,  1.3m},
            { IngredientType.Cheese,  0.4m},
            { IngredientType.Bacon, 0.7m },
            { IngredientType.Salad, 0.5m }
        };
    }
}
