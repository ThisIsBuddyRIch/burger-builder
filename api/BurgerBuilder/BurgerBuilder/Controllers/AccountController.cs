using System;
using BurgerBuilder.ApiModel;
using BurgerBuilder.Attributes;
using BurgerBuilder.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace BurgerBuilder.Controllers
   {
       [ApiController]
       [Route("api/[controller]/[action]")]
       public class AccountController : ControllerBase
       {
           private readonly string _apiKey;
           
           public AccountController(IOptions<Settings> options)
           {
               _apiKey = options.Value.ApiKey;
           }
           
           [HttpPost]
           [ValidateFilter]
           [ProducesResponseType(400)]
           public ActionResult<string> GetToken(LoginModel model)
           {
               if (CheckCredentials(model))
               {
                   return _apiKey;
               }

               return BadRequest();
           }

           private bool CheckCredentials(LoginModel model)
           {
               return model.Password != null && string.Equals(model.Login, "Kirill", StringComparison.CurrentCulture)
                                             && string.Equals(model.Password, "1qaz@WSX", StringComparison.CurrentCulture);
           }
       }
   }