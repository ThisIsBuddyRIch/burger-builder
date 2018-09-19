namespace BurgerBuilder.Domain
{
    public class Customer
    {
        public string Name { get; set; }

        public Address Address { get; set; } = new Address(); 

        public string Email { get; set; }
    }

}
