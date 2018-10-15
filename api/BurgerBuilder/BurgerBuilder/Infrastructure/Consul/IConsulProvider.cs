namespace BurgerBuilder.Infrastructure.Consul
{
    public interface IConsulProvider
    {
        MongoConnectionInfo GetMongo();
    }
}