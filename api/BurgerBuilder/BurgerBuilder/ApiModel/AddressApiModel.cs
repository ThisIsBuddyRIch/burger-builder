
using System.ComponentModel.DataAnnotations;

namespace BurgerBuilder.ApiModel
{
    public class AddressApiModel
    {
        [Required]
        public string Street { get; set; }

        [Required]
        public string ZipCode { get; set; }

        [Required]
        public string Country { get; set; }
    }
}