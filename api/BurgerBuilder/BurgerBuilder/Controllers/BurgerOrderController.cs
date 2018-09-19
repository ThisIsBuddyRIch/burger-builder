using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BurgerBuilder.ApiModel;
using BurgerBuilder.Domain;
using BurgerBuilder.Persistense;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.Text;
using Microsoft.VisualStudio.Web.CodeGeneration;

namespace BurgerBuilder.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BurgerOrderController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IBurgerOrderRepository _burgerRepository;

        public BurgerOrderController(IMapper mapper, IBurgerOrderRepository burgerRepository)
        {
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
            _burgerRepository = burgerRepository ?? throw new ArgumentNullException(nameof(burgerRepository));
        }

        [HttpPost]
        public async Task<ActionResult> CreateBurgerOrder(BurgerOrderRequestApiModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            
            var domainObject = _mapper.Map<BurgerOrder>(model);

            domainObject.CalculatePrice();

            await _burgerRepository.AddOrder(domainObject);

            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<List<BurgerOrder>>> GetAllOrders()
        {
            return await _burgerRepository.GetAllOrders();
        }

    }


}