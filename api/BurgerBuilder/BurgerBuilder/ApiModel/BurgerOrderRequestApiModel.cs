using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BurgerBuilder.ApiModel
{
    public class BurgerOrderRequestApiModel
    {
        [Required]
        public CustomerApiModel CustomerApiModel { get; set; }

        [Required]
        public List<IngredientApiModel> Ingredients { get; set; }

        [Required]
        public string DeliveryMethod { get; set; }
    }
}
