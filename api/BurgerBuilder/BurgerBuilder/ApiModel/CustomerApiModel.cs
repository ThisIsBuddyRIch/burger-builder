using System.ComponentModel.DataAnnotations;

namespace BurgerBuilder.ApiModel
{
    public class CustomerApiModel
    {
        public AddressApiModel Address { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Name { get; set; }
    }
}