namespace BurgerBuilder.Infrastructure
{
    public class Settings
    {
        public MongoSettings MongoSettings { get; set; }

        public string ApiKey { get; set; }

    }
    
    public class MongoSettings
    {
        public string Login { get; set; }

        public string Password { get; set; }

        public string Database { get; set; }

        public string ServiceName { get; set; }
    }
}
