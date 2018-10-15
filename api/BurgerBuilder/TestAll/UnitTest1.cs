using System;
using BurgerBuilder.Domain;
using BurgerBuilder.Persistence;
using Xunit;
using NSubstitute;


namespace TestAll
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            var a = Substitute.For<IBurgerOrderRepository>();

            a.AddOrder(Arg.Any<BurgerOrder>());
        }
    }
}