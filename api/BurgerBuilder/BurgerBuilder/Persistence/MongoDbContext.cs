using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BurgerBuilder.Infrastructure;
using BurgerBuilder.Infrastructure.Consul;

namespace BurgerBuilder.Persistence
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _db;

        private const string MongoConnectionStringPattern = "mongodb://{0}:{1}@{2}:{3}";

        public MongoDbContext(IOptions<MongoSettings> options, IConsulProvider consulProvider)
        {
            var client = new MongoClient(GenerateConnectionString(consulProvider.GetMongo(), options.Value ));
            _db = client.GetDatabase(options.Value.Database);
        }
        
        public IMongoCollection<T> GetCollection<T>(string name)
        {
            return _db.GetCollection<T>(name);
        }

        private string GenerateConnectionString(MongoConnectionInfo mongoConnectionInfo, MongoSettings settings)
        {
            return string.Format(MongoConnectionStringPattern,
                settings.Login, settings.Password,
                mongoConnectionInfo.Address, mongoConnectionInfo.Port);
        }

    }
}
