using System;
using System.Collections.Generic;
using System.Net;
using System.Threading;
using BurgerBuilder.ApiModel;
using BurgerBuilder.Attributes;
using BurgerBuilder.Domain;
using Microsoft.AspNetCore.Mvc;

namespace BurgerBuilder.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    [CustomAuth]
    [ProducesResponseType((int)HttpStatusCode.Forbidden)]
    public class IngredientController : ControllerBase
    {
        
        [HttpGet]
        public ActionResult<List<IngredientApiModel>> GetIngredients()
        {
            return IngredientApiModel.GetDefaultBurgerIngredients();
        }
    }
}