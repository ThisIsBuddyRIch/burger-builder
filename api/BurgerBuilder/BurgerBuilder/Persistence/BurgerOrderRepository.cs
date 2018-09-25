using BurgerBuilder.Domain;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BurgerBuilder.Persistence 
{
    public class BurgerOrderRepository : IBurgerOrderRepository
    {
        private const string BurgerOrderCollectionName = "burgerOrders";

        private readonly IMongoCollection<BurgerOrder> _burgerOrderCollection;

        public BurgerOrderRepository(MongoDbContext db)
        {
            _burgerOrderCollection = db.GetCollection<BurgerOrder>(BurgerOrderCollectionName);
        }

        public async Task AddOrder(BurgerOrder order)
        {
            await _burgerOrderCollection.InsertOneAsync(order);
        }

        public async Task<List<BurgerOrder>> GetAllOrders()
        {
            return await _burgerOrderCollection.Find(_ => true).ToListAsync();
        }
    }
}
