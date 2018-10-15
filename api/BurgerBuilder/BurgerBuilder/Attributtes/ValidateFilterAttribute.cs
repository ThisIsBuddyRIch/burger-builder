using System.Linq;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace BurgerBuilder.Attributes
{
    public class ValidateFilterAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var msg = string.Join(" | ", context.ModelState.Values
                    .SelectMany(v => v.Errors)
                    .Select(e => e.ErrorMessage));
            
                var result = new JsonResult(new {ErrorMessage = msg});

                result.StatusCode = (int) HttpStatusCode.BadRequest;
            }

            base.OnActionExecuting(context);
        }
    }
}