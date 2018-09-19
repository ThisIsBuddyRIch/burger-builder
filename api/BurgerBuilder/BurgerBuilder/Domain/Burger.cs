using System.Collections.Generic;

namespace BurgerBuilder.Domain
{
    public class Burger
    {
        public List<Ingredient> Ingredients { get; set; }

        public decimal TotalPrice { get; set; }
    }
}
