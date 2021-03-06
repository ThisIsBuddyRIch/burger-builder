﻿using System.Collections.Generic;
using System.Threading.Tasks;
using BurgerBuilder.Domain;

namespace BurgerBuilder.Persistence
{
    public interface IBurgerOrderRepository
    {
        Task AddOrder(BurgerOrder order);

        Task<List<BurgerOrder>> GetAllOrders();
    }
}