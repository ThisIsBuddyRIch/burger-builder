using System.Collections.Generic;
using System.Threading;
using BurgerBuilder.ApiModel;
using BurgerBuilder.Domain;
using Microsoft.AspNetCore.Mvc;

namespace BurgerBuilder.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class IngredientController : ControllerBase
    {
        // GET
        [HttpGet]
        public ActionResult<List<IngredientApiModel>> GetIngredients()
        {
            return IngredientApiModel.GetDefaultBurgerIngredients();
        }
    }
}