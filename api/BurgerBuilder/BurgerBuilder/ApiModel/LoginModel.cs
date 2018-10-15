using System.ComponentModel.DataAnnotations;

namespace BurgerBuilder.ApiModel
{
    public class LoginModel
    {
        [Required]
        [MaxLength(50)]
        public string Login { get; set; }

        [Required]
        public string Password { get; set; }
    }
}