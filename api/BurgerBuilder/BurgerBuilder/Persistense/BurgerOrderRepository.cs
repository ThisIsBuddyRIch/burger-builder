using BurgerBuilder.Domain;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BurgerBuilder.Persistense
{
    public class BurgerOrderRepository : IBurgerOrderRepository
    {
        private const string BurgerOrderCollectionName = "burgerOrders";

        private readonly IMongoCollection<BurgerOrder> burgerOrderCollection;

        public BurgerOrderRepository(MongoDbContext db)
        {
            burgerOrderCollection = db.GetCollection<BurgerOrder>(BurgerOrderCollectionName);
        }

        public async Task AddOrder(BurgerOrder order)
        {
            await burgerOrderCollection .InsertOneAsync(order);
        }

        public async Task<List<BurgerOrder>> GetAllOrders()
        {
            return await burgerOrderCollection.Find(_ => true).ToListAsync();
        }
    }
}
