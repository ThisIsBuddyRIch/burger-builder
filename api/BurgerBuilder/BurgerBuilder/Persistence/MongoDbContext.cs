using BurgerBuilder.Infrastracture;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BurgerBuilder.Persistence
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _db;

        public MongoDbContext(IOptions<Settings> options)
        {
            var client = new MongoClient(options.Value.MongoConnectionString);
            _db = client.GetDatabase(options.Value.MongoDbName);
        }

        public IMongoCollection<T> GetCollection<T>(string name)
        {
            return _db.GetCollection<T>(name);
        }

    }
}
