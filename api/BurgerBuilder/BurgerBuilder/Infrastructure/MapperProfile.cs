using AutoMapper;
using BurgerBuilder.ApiModel;
using BurgerBuilder.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BurgerBuilder.Infrastracture
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<BurgerOrderRequestApiModel, BurgerOrder>()
                .ForMember(x => x.Delivery, opt => opt.MapFrom(x => x))
                .ForMember(x => x.Burger, opt => opt.MapFrom(x => x))
                .ForMember(x => x.Customer, opt => opt.MapFrom(x => x))
                ;

            CreateMap<BurgerOrderRequestApiModel, Delivery>()
                 .ForMember(x => x.Method, opt => opt.MapFrom(src => src.DeliveryMethod));

           CreateMap<BurgerOrderRequestApiModel, Burger>()
                .ForMember(x => x.Ingredients, opt => opt.MapFrom(src => src.Ingredients));

            CreateMap<BurgerOrderRequestApiModel, Customer>()
                .ForMember(x => x.Address, opt => opt.MapFrom(x => x))
                .ForMember(x => x.Email, opt => opt.MapFrom(x => x.CustomerApiModel.Email))
                .ForMember(x => x.Name, opt => opt.MapFrom(x => x.CustomerApiModel.Name))
                ;

            CreateMap<BurgerOrderRequestApiModel, Address>()
                .ForMember(x => x.Country, opt => opt.MapFrom(x => x.CustomerApiModel.Address.Country))
                .ForMember(x => x.Street, opt => opt.MapFrom(x => x.CustomerApiModel.Address.Street))
                .ForMember(x => x.ZipCode, opt => opt.MapFrom(x => x.CustomerApiModel.Address.ZipCode))
                ;
        }

    }
}
