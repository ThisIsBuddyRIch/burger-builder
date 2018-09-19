using BurgerBuilder.Common;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace BurgerBuilder.Domain
{
    public class BurgerOrder
    {
        [BsonId]
        public ObjectId Id { get; set; }

        public Burger Burger { get; set; } = new Burger();

        public Customer Customer { get; set; } = new Customer();

        public Delivery Delivery { get; set; } = new Delivery();

        public void CalculatePrice()
        {
            if (Burger == null || Burger.Ingredients.IsEmpty())
            {
                throw new InvalidOperationException("Ingredients dont init");
            }

            Burger.TotalPrice = Burger.Ingredients.Sum(x => DomainConstants.CostDict[x.Type] * x.Amount);
        }
    }

}
