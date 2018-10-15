using BurgerBuilder.Infrastructure.Consul;
using Microsoft.AspNetCore.Mvc;

namespace BurgerBuilder.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class TestController : ControllerBase
    {
        private readonly IConsulProvider _consulProvider;
        
        public TestController(IConsulProvider consulProvider)
        {
            _consulProvider = consulProvider;
        }

        [HttpGet]
        public void GetConsulProvider()
        {
            _consulProvider.GetMongo();
        }


    }
}