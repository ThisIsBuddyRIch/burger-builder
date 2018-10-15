using System;
using System.Net;
using BurgerBuilder.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.DependencyInjection;

namespace BurgerBuilder.Attributes
{
    public class CustomAuth : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            string header = context.HttpContext.Request.Headers[Constants.SecretHeader];

            if (header != null)
            {
                var options = context.HttpContext.RequestServices.GetService<IOptions<Settings>>();
                var apiKey = options.Value.ApiKey;
                
                if (!header.Contains(apiKey))
                {
                    context.Result = Unauthorized();
                }
                
            }
            else
            {
                context.Result = Unauthorized();
            }
        }

        private static IActionResult Unauthorized()
        {
            return new StatusCodeResult((int) HttpStatusCode.Forbidden);
        }
    }
}